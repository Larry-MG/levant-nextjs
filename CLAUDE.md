@AGENTS.md

# Levant Gold & Silver — Web Project

Next.js storefront for Levant Gold & Silver, a precious metals dealer with 3 Southern California locations (Orange, Pomona, San Bernardino). Staging environment — live FizTrade/Dillon Gage API for product data, but checkout is a quote-request flow (no real payment processing).

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16.2 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (config via `@theme` in `globals.css`) |
| State | Zustand v5 with localStorage persistence |
| Fonts | Playfair Display (headings), Inter (body), Geist Mono (prices) |
| Email | Resend SDK (`resend` package) |
| Product data | FizTrade/Dillon Gage API (server-only) |
| Animation | Framer Motion |

---

## Project Structure

```
app/
  layout.tsx              # Root layout — Header, CartDrawer, Footer
  page.tsx                # Home page
  globals.css             # Tailwind v4 @theme token definitions
  shop/page.tsx           # Product listing (ISR, revalidate 300s)
  cart/page.tsx           # Standalone cart page (rarely used — drawer preferred)
  checkout/
    page.tsx              # 2-step checkout: contact info → review & submit
    success/page.tsx      # Order confirmation (reads ?order= param)
  contact/page.tsx
  about/page.tsx
  locations/[slug]/page.tsx  # Dynamic: orange | pomona | san-bernardino
  api/
    spot-prices/route.ts  # GET — live spot prices with demo fallback
    order/route.ts        # POST — sends both transactional emails via Resend

components/
  layout/
    Header.tsx            # Sticky nav, desktop dropdowns, mobile menu
    CartIcon.tsx          # Cart button — opens CartDrawer (not a link)
    CartDrawer.tsx        # Slide-in cart panel from the right
    Footer.tsx
  shop/
    ProductCard.tsx       # Metal-themed product cards with live pricing
    AddToCartButton.tsx   # Adds item + opens CartDrawer after 600ms
  home/
    GoldCalculator.tsx
    SpotPriceTicker.tsx

lib/
  store/cart.ts           # Zustand cart store (items, isOpen, openCart, closeCart)
  fiztrade/
    client.ts             # Server-only FizTrade API client
    types.ts              # ShopProduct, CartItem, etc.
  constants/
    products.ts           # Curated FizTrade product codes by metal
    locations.ts          # Store location data
  utils/currency.ts       # formatUSD helper
```

---

## Design Tokens (`globals.css`)

```
--color-gold:         #C9A84C   (primary brand)
--color-gold-dark:    #A07830
--color-gold-light:   #E8C878
--color-charcoal:     #1C1917   (dark backgrounds / text)
--color-cream:        #F8F4EC   (page backgrounds)
--color-cream-dark:   #EDE8DE
--color-muted:        #8A7F72
--color-border:       #E5DDD0
```

Use these as Tailwind classes: `bg-gold`, `text-charcoal`, `border-border`, etc.

---

## Cart & Drawer

The cart is a **slide-in drawer** from the right — not a page navigation. Key behaviour:

- `CartIcon` (header) calls `openCart()` from Zustand — does **not** link to `/cart`
- `AddToCartButton` calls `addItem()` then `openCart()` after a 600ms success flash
- `CartDrawer` is mounted in `app/layout.tsx` so it's available on every page
- Cart state: `isOpen`, `openCart()`, `closeCart()` are all in `lib/store/cart.ts`
- Body scroll is locked while drawer is open; closes on backdrop click or Escape
- The `/cart` page still exists but the drawer is the primary UX

---

## Checkout Flow

**Two steps — no payment details collected.**

1. **Your Info** — name, email, phone, address, city, state, zip, optional notes
2. **Review & Submit** — order summary, contact recap, payment explanation

On submit:
- Calls `POST /api/order` with `{ orderNumber, contact, items, subtotal }`
- Fires both transactional emails (customer + business) simultaneously via Resend
- Clears cart, redirects to `/checkout/success?order=XXXXXXXX`
- Email failure is non-blocking — checkout succeeds regardless

**Payment model:** Wire transfer and direct deposit only. No cards. The team contacts the customer after submission to confirm pricing and provide banking details.

---

## Email System (`app/api/order/route.ts`)

**Provider:** Resend (free tier)
**API key:** stored in `.env.local` as `RESEND_API_KEY`
**Current FROM:** `onboarding@resend.dev` (until levantgold.com domain is verified in Resend)
**Business notifications go to:** `ahmad@motorsportgrowth.com`

Two emails sent on every order:

| Email | To | Subject |
|---|---|---|
| Customer confirmation | `contact.email` | `Order Confirmed — #XXXXXXXX \| Levant Gold & Silver` |
| Business alert | `ahmad@motorsportgrowth.com` | `🛒 New Order #XXXXXXXX — $X,XXX.XX from [Name]` |

Both are fully inline HTML (no React Email dependency) in a Shopify-style layout:
- Gold accent top bar, charcoal header with brand name
- Itemized order table with qty, unit price, line total
- Wire/direct deposit payment notice
- "What happens next" steps (customer email) / action reminder (business email)

**To go live with a real from-address:** verify `levantgold.com` in the Resend dashboard (add a DNS TXT record), then update the `FROM` constant in `app/api/order/route.ts` to e.g. `orders@levantgold.com`.

---

## FizTrade / Product Data

Products are **not stored in a database**. Flow:

1. Curated product codes in `lib/constants/products.ts` (grouped by metal: gold, silver, platinum, palladium)
2. Server fetches live catalog + prices from FizTrade API at request time
3. ISR cache: prices = 5 min, catalog = 24 h
4. Falls back to demo data if API is down

Env vars required:
```
FIZCONNECT_URL=https://stage-connect.fiztrade.com
FIZCONNECT_API_TOKEN=...
NEXT_PUBLIC_FIZCONNECT_CHART_TOKEN=...
```

---

## Environment Variables (`.env.local`)

```
FIZCONNECT_URL
FIZCONNECT_API_TOKEN
NEXT_PUBLIC_FIZCONNECT_CHART_TOKEN
NEXT_PUBLIC_SITE_URL
RESEND_API_KEY
FIZTRADE_EMAIL          # legacy, may be unused
FIZTRADE_PASSWORD       # legacy, may be unused
FIZTRADE_AUTH_GUID      # legacy, may be unused
```

---

## Key Decisions & Rules

- **No card processing** — ever. This is intentional. The business only takes wire/direct deposit due to fraud risk in the precious metals industry.
- **Checkout is a quote request** — prices shown are indicative (live spot-based), locked by the team at time of payment confirmation.
- **Cart drawer is the UX, not the cart page** — don't add navigation that sends users to `/cart`; open the drawer instead.
- **Server components for product data** — `lib/fiztrade/client.ts` is `server-only`. Never import it in client components.
- **Zustand with `skipHydration: true`** — always call `useCartStore.persist.rehydrate()` inside a `useEffect` on any client component that reads cart state, to avoid SSR mismatch.
- **Tailwind v4** — config lives in `globals.css` `@theme` block, not `tailwind.config.js`. Token names map directly to class names (`--color-gold` → `bg-gold`).
- **Metal-specific accent colours** in `ProductCard.tsx` — gold (#C9A84C), silver (#C0C0C0), platinum (#C0C0E0), palladium (#C0B8D8).
