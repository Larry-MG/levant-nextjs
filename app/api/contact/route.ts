import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const BUSINESS_EMAILS = ['ahmad@motorsportgrowth.com', 'levantgoldandsilver@gmail.com']
const FROM = 'Levant Gold & Silver <orders@levantgold.com>'

export interface ContactPayload {
  formType: 'home-quote' | 'contact-quote'
  name: string
  email: string
  phone?: string
  message?: string
  category?: string
}

const base = `
  body { margin:0; padding:0; background:#f0ece4; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; }
  table { border-collapse:collapse; }
`

function customerConfirmation(p: ContactPayload): string {
  const firstName = p.name.split(' ')[0]
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>We received your message</title>
<style>${base}</style>
</head>
<body>
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f0ece4; min-height:100vh;">
<tr><td align="center" style="padding:40px 16px;">
  <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%;">

    <tr><td style="background:#c9a84c; border-radius:8px 8px 0 0; height:6px;"></td></tr>
    <tr>
      <td style="background:#1a1a1a; padding:28px 40px; text-align:center;">
        <div style="color:#c9a84c; font-size:22px; font-weight:700; letter-spacing:0.5px;">LEVANT GOLD &amp; SILVER</div>
        <div style="color:#f8f4ec; font-size:12px; letter-spacing:2px; margin-top:4px; opacity:0.6;">PRECIOUS METALS DEALER</div>
      </td>
    </tr>

    <tr>
      <td style="background:#ffffff; padding:40px 40px 32px;">
        <div style="font-size:26px; font-weight:700; color:#1a1a1a; margin-bottom:10px;">We got your message, ${firstName}!</div>
        <div style="font-size:15px; color:#8a7f72; line-height:1.7;">
          Thank you for reaching out to Levant Gold &amp; Silver. A member of our team will get back to you within <strong style="color:#1a1a1a;">24 hours</strong> to discuss your inquiry.
        </div>
      </td>
    </tr>

    <tr><td style="background:#ffffff; padding:0 40px;"><div style="border-top:1px solid #e8e2d8;"></div></td></tr>

    <tr>
      <td style="background:#ffffff; padding:28px 40px;">
        <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1.5px; color:#8a7f72; margin-bottom:14px;">Your Submission</div>
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding:5px 0; width:100px; font-size:13px; color:#8a7f72;">Name</td>
            <td style="padding:5px 0; font-size:13px; color:#1a1a1a; font-weight:500;">${p.name}</td>
          </tr>
          <tr>
            <td style="padding:5px 0; font-size:13px; color:#8a7f72;">Email</td>
            <td style="padding:5px 0; font-size:13px; color:#1a1a1a;">${p.email}</td>
          </tr>
          ${p.phone ? `<tr>
            <td style="padding:5px 0; font-size:13px; color:#8a7f72;">Phone</td>
            <td style="padding:5px 0; font-size:13px; color:#1a1a1a;">${p.phone}</td>
          </tr>` : ''}
          ${p.category ? `<tr>
            <td style="padding:5px 0; font-size:13px; color:#8a7f72;">Category</td>
            <td style="padding:5px 0; font-size:13px; color:#1a1a1a;">${p.category}</td>
          </tr>` : ''}
          ${p.message ? `<tr>
            <td style="padding:5px 0; font-size:13px; color:#8a7f72; vertical-align:top;">Message</td>
            <td style="padding:5px 0; font-size:13px; color:#5a5040; font-style:italic;">"${p.message}"</td>
          </tr>` : ''}
        </table>
      </td>
    </tr>

    <tr><td style="background:#ffffff; padding:0 40px;"><div style="border-top:1px solid #e8e2d8;"></div></td></tr>

    <tr>
      <td style="background:#ffffff; padding:28px 40px 36px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="background:#fdf8ee; border:1px solid #e8c878; border-radius:8px; padding:20px 24px;">
              <div style="font-size:13px; font-weight:700; color:#1a1a1a; margin-bottom:6px;">Walk In Anytime</div>
              <div style="font-size:13px; color:#5a5040; line-height:1.7;">
                No appointment needed. Visit any of our four Southern California locations — Orange, Pomona, San Bernardino, or Walnut — for an immediate free appraisal.
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <tr>
      <td style="background:#1a1a1a; border-radius:0 0 8px 8px; padding:28px 40px; text-align:center;">
        <div style="color:#c9a84c; font-size:14px; font-weight:600; margin-bottom:6px;">Levant Gold &amp; Silver</div>
        <div style="color:#8a7f72; font-size:12px; line-height:1.8;">
          Orange · Pomona · San Bernardino · Walnut<br>
          <a href="https://levantgold.com" style="color:#c9a84c; text-decoration:none;">levantgold.com</a>
        </div>
      </td>
    </tr>

  </table>
</td></tr>
</table>
</body>
</html>`
}

function businessNotification(p: ContactPayload): string {
  const sourceLabel = p.formType === 'home-quote' ? 'Home Page — Get a Free Quote' : 'Contact Page — Request a Quote'
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>New Quote Request</title>
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
        <div style="color:#f8f4ec; font-size:11px; letter-spacing:2px; margin-top:3px; opacity:0.5;">INTERNAL NOTIFICATION</div>
      </td>
    </tr>

    <tr>
      <td style="background:#c9a84c; padding:16px 40px; text-align:center;">
        <div style="font-size:18px; font-weight:700; color:#1a1a1a;">📩 New Quote Request from ${p.name}</div>
        <div style="font-size:12px; color:#5a4010; margin-top:4px;">Source: ${sourceLabel}</div>
      </td>
    </tr>

    <tr>
      <td style="background:#ffffff; padding:32px 40px 28px;">
        <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1.5px; color:#8a7f72; margin-bottom:14px;">Contact Details</div>
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding:6px 0; width:100px; font-size:13px; color:#8a7f72;">Name</td>
            <td style="padding:6px 0; font-size:13px; color:#1a1a1a; font-weight:500;">${p.name}</td>
          </tr>
          <tr>
            <td style="padding:6px 0; font-size:13px; color:#8a7f72;">Email</td>
            <td style="padding:6px 0; font-size:13px; color:#1a1a1a;"><a href="mailto:${p.email}" style="color:#c9a84c;">${p.email}</a></td>
          </tr>
          ${p.phone ? `<tr>
            <td style="padding:6px 0; font-size:13px; color:#8a7f72;">Phone</td>
            <td style="padding:6px 0; font-size:13px; color:#1a1a1a;"><a href="tel:${p.phone}" style="color:#c9a84c;">${p.phone}</a></td>
          </tr>` : ''}
          ${p.category ? `<tr>
            <td style="padding:6px 0; font-size:13px; color:#8a7f72;">Category</td>
            <td style="padding:6px 0; font-size:13px; color:#1a1a1a;">${p.category}</td>
          </tr>` : ''}
          ${p.message ? `<tr>
            <td style="padding:6px 0; font-size:13px; color:#8a7f72; vertical-align:top;">Message</td>
            <td style="padding:6px 0; font-size:13px; color:#5a5040; font-style:italic;">"${p.message}"</td>
          </tr>` : ''}
        </table>
      </td>
    </tr>

    <tr>
      <td style="background:#fdf8ee; border-top:3px solid #c9a84c; padding:24px 40px; text-align:center;">
        <div style="font-size:15px; font-weight:700; color:#1a1a1a; margin-bottom:6px;">Follow Up Required</div>
        <div style="font-size:13px; color:#5a5040; line-height:1.7;">
          Reply to <a href="mailto:${p.email}" style="color:#c9a84c;">${p.email}</a>${p.phone ? ` or call <a href="tel:${p.phone}" style="color:#c9a84c;">${p.phone}</a>` : ''} within 24 hours.
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

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json()

    if (!body.name || !body.email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    const subject =
      body.formType === 'home-quote'
        ? `Free Quote Request from ${body.name} | Levant Gold & Silver`
        : `Quote Request from ${body.name} | Levant Gold & Silver`

    // Send all emails individually. Business notification failures are non-blocking
    // (e.g. unverified addresses in Resend sandbox mode) — the form succeeds as long
    // as we've processed the submission.
    const sends = await Promise.allSettled([
      resend.emails.send({
        from: FROM,
        to: body.email,
        subject: `We received your message — Levant Gold & Silver`,
        html: customerConfirmation(body),
      }),
      ...BUSINESS_EMAILS.map((addr) =>
        resend.emails.send({
          from: FROM,
          to: addr,
          subject,
          html: businessNotification(body),
        })
      ),
    ])

    sends.forEach((result, i) => {
      if (result.status === 'rejected') {
        console.error(`Email send rejected [${i}]:`, result.reason)
      } else if (result.value.error) {
        console.error(`Email send error [${i}]:`, JSON.stringify(result.value.error))
      }
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
