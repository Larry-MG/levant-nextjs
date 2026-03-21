import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const BUSINESS_EMAILS = ['ahmad@motorsportgrowth.com', 'levantgoldandsilver@gmail.com']
const FROM = 'Levant Gold & Silver <orders@levantgold.com>'

interface OrderItem {
  name: string
  metal: string
  quantity: number
  priceSnapshot: number
  weightOzt: number
}

interface OrderPayload {
  orderNumber: string
  contact: {
    name: string
    email: string
    phone: string
    address: string
    city: string
    state: string
    zip: string
    notes: string
  }
  items: OrderItem[]
  subtotal: number
}

function metalLabel(metal: string) {
  return metal.charAt(0).toUpperCase() + metal.slice(1)
}

function usd(n: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n)
}

// ─── Shared styles ────────────────────────────────────────────────────────────
const base = `
  body { margin:0; padding:0; background:#f0ece4; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; }
  table { border-collapse:collapse; }
`

// ─── Customer confirmation email ───────────────────────────────────────────────
function customerEmail(o: OrderPayload): string {
  const rows = o.items.map((item) => `
    <tr>
      <td style="padding:12px 16px; border-bottom:1px solid #e8e2d8;">
        <div style="font-weight:600; color:#1a1a1a; font-size:14px;">${item.name}</div>
        <div style="color:#8a7f72; font-size:12px; margin-top:2px;">${item.weightOzt} oz · ${metalLabel(item.metal)}</div>
      </td>
      <td style="padding:12px 16px; border-bottom:1px solid #e8e2d8; text-align:center; color:#1a1a1a; font-size:14px;">${item.quantity}</td>
      <td style="padding:12px 16px; border-bottom:1px solid #e8e2d8; text-align:right; font-family:monospace; font-size:14px; color:#1a1a1a;">${usd(item.priceSnapshot)}</td>
      <td style="padding:12px 16px; border-bottom:1px solid #e8e2d8; text-align:right; font-family:monospace; font-size:14px; font-weight:600; color:#1a1a1a;">${usd(item.priceSnapshot * item.quantity)}</td>
    </tr>
  `).join('')

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Order Confirmation</title>
<style>${base}</style>
</head>
<body>
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f0ece4; min-height:100vh;">
<tr><td align="center" style="padding:40px 16px;">

  <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%;">

    <!-- Gold accent bar + logo -->
    <tr>
      <td style="background:#c9a84c; border-radius:8px 8px 0 0; padding:0; height:6px;"></td>
    </tr>
    <tr>
      <td style="background:#1a1a1a; border-radius:0; padding:28px 40px; text-align:center;">
        <div style="color:#c9a84c; font-size:22px; font-weight:700; letter-spacing:0.5px;">LEVANT GOLD &amp; SILVER</div>
        <div style="color:#f8f4ec; font-size:12px; letter-spacing:2px; margin-top:4px; opacity:0.6;">PRECIOUS METALS DEALER</div>
      </td>
    </tr>

    <!-- Hero -->
    <tr>
      <td style="background:#ffffff; padding:40px 40px 32px;">
        <div style="font-size:28px; font-weight:700; color:#1a1a1a; margin-bottom:8px;">Order Received</div>
        <div style="font-size:15px; color:#8a7f72; line-height:1.6;">
          Hi ${o.contact.name.split(' ')[0]}, thank you for your order. We've received your request and a member of our team will contact you within <strong style="color:#1a1a1a;">1 business day</strong> to confirm your order and provide payment instructions.
        </div>

        <!-- Order number badge -->
        <table cellpadding="0" cellspacing="0" style="margin-top:24px;">
          <tr>
            <td style="background:#f8f4ec; border:1px solid #e8e2d8; border-radius:6px; padding:12px 20px;">
              <span style="font-size:11px; color:#8a7f72; text-transform:uppercase; letter-spacing:1px;">Order Reference</span><br>
              <span style="font-size:18px; font-weight:700; color:#1a1a1a; font-family:monospace; letter-spacing:1px;">#${o.orderNumber}</span>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Divider -->
    <tr><td style="background:#ffffff; padding:0 40px;"><div style="border-top:1px solid #e8e2d8;"></div></td></tr>

    <!-- Order summary -->
    <tr>
      <td style="background:#ffffff; padding:32px 40px 8px;">
        <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1.5px; color:#8a7f72; margin-bottom:16px;">Order Summary</div>
        <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8e2d8; border-radius:8px; overflow:hidden;">
          <tr style="background:#f8f4ec;">
            <th style="padding:10px 16px; text-align:left; font-size:11px; text-transform:uppercase; letter-spacing:1px; color:#8a7f72; font-weight:600;">Item</th>
            <th style="padding:10px 16px; text-align:center; font-size:11px; text-transform:uppercase; letter-spacing:1px; color:#8a7f72; font-weight:600;">Qty</th>
            <th style="padding:10px 16px; text-align:right; font-size:11px; text-transform:uppercase; letter-spacing:1px; color:#8a7f72; font-weight:600;">Each</th>
            <th style="padding:10px 16px; text-align:right; font-size:11px; text-transform:uppercase; letter-spacing:1px; color:#8a7f72; font-weight:600;">Total</th>
          </tr>
          ${rows}
          <tr style="background:#f8f4ec;">
            <td colspan="3" style="padding:14px 16px; font-weight:700; color:#1a1a1a; font-size:14px;">Estimated Total</td>
            <td style="padding:14px 16px; text-align:right; font-family:monospace; font-weight:700; color:#1a1a1a; font-size:16px;">${usd(o.subtotal)}</td>
          </tr>
        </table>
        <p style="font-size:12px; color:#8a7f72; margin-top:10px;">* Final price confirmed by our team. Spot prices fluctuate — we'll lock in your rate at time of payment.</p>
      </td>
    </tr>

    <!-- Payment info -->
    <tr>
      <td style="background:#ffffff; padding:24px 40px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="background:#fdf8ee; border:1px solid #e8c878; border-radius:8px; padding:20px 24px;">
              <div style="font-size:13px; font-weight:700; color:#1a1a1a; margin-bottom:8px;">💳 Payment Information</div>
              <div style="font-size:13px; color:#5a5040; line-height:1.7;">
                We accept <strong>wire transfer</strong> and <strong>direct deposit only</strong>. No credit cards are accepted.<br>
                Our team will provide full banking instructions when they reach out to you.
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Delivery address -->
    <tr>
      <td style="background:#ffffff; padding:0 40px 32px;">
        <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1.5px; color:#8a7f72; margin-bottom:12px;">Delivery Address</div>
        <div style="font-size:14px; color:#1a1a1a; line-height:1.8;">
          ${o.contact.name}<br>
          ${o.contact.address}<br>
          ${o.contact.city}, ${o.contact.state} ${o.contact.zip}
        </div>
      </td>
    </tr>

    ${o.contact.notes ? `
    <tr><td style="background:#ffffff; padding:0 40px;"><div style="border-top:1px solid #e8e2d8;"></div></td></tr>
    <tr>
      <td style="background:#ffffff; padding:24px 40px 32px;">
        <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1.5px; color:#8a7f72; margin-bottom:8px;">Your Notes</div>
        <div style="font-size:14px; color:#5a5040; font-style:italic;">"${o.contact.notes}"</div>
      </td>
    </tr>
    ` : ''}

    <!-- Divider -->
    <tr><td style="background:#ffffff; padding:0 40px;"><div style="border-top:1px solid #e8e2d8;"></div></td></tr>

    <!-- What happens next -->
    <tr>
      <td style="background:#ffffff; padding:32px 40px;">
        <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1.5px; color:#8a7f72; margin-bottom:16px;">What happens next</div>
        <table cellpadding="0" cellspacing="0" width="100%">
          ${[
            ['✓', 'Order request received', '#22c55e', true],
            ['✓', 'Confirmation email sent', '#22c55e', true],
            ['2', 'Specialist contacts you within 1 business day', '#c9a84c', false],
            ['3', 'Price locked &amp; payment instructions sent', '#c9a84c', false],
            ['4', 'Order fulfilled &amp; shipped', '#c9a84c', false],
          ].map(([step, label, color, done]) => `
          <tr>
            <td style="width:32px; vertical-align:top; padding-bottom:12px;">
              <div style="width:24px; height:24px; border-radius:50%; background:${done ? color : '#f0ece4'}; border:2px solid ${color}; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:700; color:${done ? '#fff' : color}; text-align:center; line-height:24px;">${step}</div>
            </td>
            <td style="padding-bottom:12px; padding-left:12px; font-size:14px; color:${done ? '#1a1a1a' : '#8a7f72'}; vertical-align:top; padding-top:3px;">${label}</td>
          </tr>`).join('')}
        </table>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="background:#1a1a1a; border-radius:0 0 8px 8px; padding:28px 40px; text-align:center;">
        <div style="color:#c9a84c; font-size:14px; font-weight:600; margin-bottom:6px;">Levant Gold &amp; Silver</div>
        <div style="color:#8a7f72; font-size:12px; line-height:1.8;">
          Orange · Pomona · San Bernardino<br>
          <a href="https://levantgold.com" style="color:#c9a84c; text-decoration:none;">levantgold.com</a>
        </div>
        <div style="margin-top:16px; color:#4a4a4a; font-size:11px;">
          This is a staging order. Prices are indicative and will be confirmed by our team.
        </div>
      </td>
    </tr>

  </table>
</td></tr>
</table>
</body>
</html>`
}

// ─── Business notification email ───────────────────────────────────────────────
function businessEmail(o: OrderPayload): string {
  const rows = o.items.map((item) => `
    <tr>
      <td style="padding:12px 16px; border-bottom:1px solid #e8e2d8; font-size:14px; color:#1a1a1a;">${item.name}</td>
      <td style="padding:12px 16px; border-bottom:1px solid #e8e2d8; text-align:center; font-size:14px; color:#1a1a1a;">${item.quantity}</td>
      <td style="padding:12px 16px; border-bottom:1px solid #e8e2d8; text-align:right; font-family:monospace; font-size:14px; color:#1a1a1a;">${usd(item.priceSnapshot)}</td>
      <td style="padding:12px 16px; border-bottom:1px solid #e8e2d8; text-align:right; font-family:monospace; font-size:14px; font-weight:700; color:#1a1a1a;">${usd(item.priceSnapshot * item.quantity)}</td>
    </tr>
  `).join('')

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>New Order</title>
<style>${base}</style>
</head>
<body>
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f0ece4; min-height:100vh;">
<tr><td align="center" style="padding:40px 16px;">

  <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%;">

    <tr><td style="background:#c9a84c; border-radius:8px 8px 0 0; height:6px;"></td></tr>

    <tr>
      <td style="background:#1a1a1a; padding:24px 40px; text-align:center;">
        <div style="color:#c9a84c; font-size:20px; font-weight:700;">LEVANT GOLD &amp; SILVER</div>
        <div style="color:#f8f4ec; font-size:11px; letter-spacing:2px; margin-top:3px; opacity:0.5;">INTERNAL ORDER NOTIFICATION</div>
      </td>
    </tr>

    <!-- Alert banner -->
    <tr>
      <td style="background:#c9a84c; padding:16px 40px; text-align:center;">
        <div style="font-size:18px; font-weight:700; color:#1a1a1a;">🛒 New Order Request — ${usd(o.subtotal)}</div>
        <div style="font-size:13px; color:#5a4010; margin-top:4px;">Reference #${o.orderNumber}</div>
      </td>
    </tr>

    <!-- Customer details -->
    <tr>
      <td style="background:#ffffff; padding:32px 40px 24px;">
        <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1.5px; color:#8a7f72; margin-bottom:14px;">Customer Details</div>
        <table width="100%" cellpadding="0" cellspacing="0">
          ${[
            ['Name', o.contact.name],
            ['Email', `<a href="mailto:${o.contact.email}" style="color:#c9a84c;">${o.contact.email}</a>`],
            ['Phone', `<a href="tel:${o.contact.phone}" style="color:#c9a84c;">${o.contact.phone}</a>`],
            ['Address', `${o.contact.address}, ${o.contact.city}, ${o.contact.state} ${o.contact.zip}`],
          ].map(([label, value]) => `
          <tr>
            <td style="padding:6px 0; width:100px; font-size:13px; color:#8a7f72; vertical-align:top;">${label}</td>
            <td style="padding:6px 0; font-size:13px; color:#1a1a1a; font-weight:500;">${value}</td>
          </tr>`).join('')}
          ${o.contact.notes ? `
          <tr>
            <td style="padding:6px 0; font-size:13px; color:#8a7f72; vertical-align:top;">Notes</td>
            <td style="padding:6px 0; font-size:13px; color:#5a5040; font-style:italic;">"${o.contact.notes}"</td>
          </tr>` : ''}
        </table>
      </td>
    </tr>

    <tr><td style="background:#ffffff; padding:0 40px;"><div style="border-top:1px solid #e8e2d8;"></div></td></tr>

    <!-- Items -->
    <tr>
      <td style="background:#ffffff; padding:24px 40px 32px;">
        <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1.5px; color:#8a7f72; margin-bottom:14px;">Items Ordered</div>
        <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8e2d8; border-radius:8px; overflow:hidden;">
          <tr style="background:#f8f4ec;">
            <th style="padding:10px 16px; text-align:left; font-size:11px; text-transform:uppercase; letter-spacing:1px; color:#8a7f72; font-weight:600;">Product</th>
            <th style="padding:10px 16px; text-align:center; font-size:11px; text-transform:uppercase; letter-spacing:1px; color:#8a7f72; font-weight:600;">Qty</th>
            <th style="padding:10px 16px; text-align:right; font-size:11px; text-transform:uppercase; letter-spacing:1px; color:#8a7f72; font-weight:600;">Spot Price</th>
            <th style="padding:10px 16px; text-align:right; font-size:11px; text-transform:uppercase; letter-spacing:1px; color:#8a7f72; font-weight:600;">Line Total</th>
          </tr>
          ${rows}
          <tr style="background:#1a1a1a;">
            <td colspan="3" style="padding:14px 16px; font-weight:700; color:#f8f4ec; font-size:14px;">Order Total</td>
            <td style="padding:14px 16px; text-align:right; font-family:monospace; font-weight:700; color:#c9a84c; font-size:18px;">${usd(o.subtotal)}</td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Action reminder -->
    <tr>
      <td style="background:#fdf8ee; border-top:3px solid #c9a84c; padding:24px 40px; text-align:center;">
        <div style="font-size:15px; font-weight:700; color:#1a1a1a; margin-bottom:6px;">Action Required</div>
        <div style="font-size:13px; color:#5a5040; line-height:1.7;">
          Contact <strong>${o.contact.name}</strong> at <a href="mailto:${o.contact.email}" style="color:#c9a84c;">${o.contact.email}</a> or <a href="tel:${o.contact.phone}" style="color:#c9a84c;">${o.contact.phone}</a><br>
          to confirm pricing and provide wire/direct deposit payment instructions.
        </div>
      </td>
    </tr>

    <tr>
      <td style="background:#1a1a1a; border-radius:0 0 8px 8px; padding:20px 40px; text-align:center;">
        <div style="color:#4a4a4a; font-size:11px;">Levant Gold &amp; Silver · Internal notification · Do not reply</div>
      </td>
    </tr>

  </table>
</td></tr>
</table>
</body>
</html>`
}

// ─── Route handler ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body: OrderPayload = await req.json()

    const businessSubject = `🛒 New Order #${body.orderNumber} — ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(body.subtotal)} from ${body.contact.name}`

    const sends = await Promise.allSettled([
      resend.emails.send({
        from: FROM,
        to: body.contact.email,
        subject: `Order Confirmed — #${body.orderNumber} | Levant Gold & Silver`,
        html: customerEmail(body),
      }),
      ...BUSINESS_EMAILS.map((addr) =>
        resend.emails.send({
          from: FROM,
          to: addr,
          subject: businessSubject,
          html: businessEmail(body),
        })
      ),
    ])

    sends.forEach((result, i) => {
      if (result.status === 'rejected') {
        console.error(`Order email rejected [${i}]:`, result.reason)
      } else if (result.value.error) {
        console.error(`Order email error [${i}]:`, JSON.stringify(result.value.error))
      }
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Order API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
