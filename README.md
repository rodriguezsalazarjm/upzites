This is the UPZITES website built with Next.js App Router.

## Development

```bash
npm run dev
npm run build
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Meta Pixel

Meta Pixel is installed through:

- `components/MetaPixel.tsx`: base pixel script and noscript fallback.
- `components/MetaPixelPageView.tsx`: App Router pageview tracking for client-side route changes.
- `lib/meta-pixel.ts`: reusable tracking helpers and ecommerce event validation.
- `app/layout.tsx`: global integration.

Configure the pixel in Vercel:

```env
NEXT_PUBLIC_META_PIXEL_ID=1009533758712390
NEXT_PUBLIC_META_PIXEL_IDS=
NEXT_PUBLIC_META_PIXEL_REQUIRE_CONSENT=false
```

Use `NEXT_PUBLIC_META_PIXEL_IDS` only when multiple pixels are needed. It accepts a comma-separated list. If an event must go to a single pixel, use `trackSingle` or `trackSingleCustom` from `lib/meta-pixel.ts`.

### Available Helpers

- `pageview()`
- `event(name, params?)`
- `customEvent(name, params?)`
- `trackSingle(pixelId, eventName, params?)`
- `trackSingleCustom(pixelId, eventName, params?)`
- `viewContent(params)`
- `addToCart(params)`
- `initiateCheckout(params)`
- `purchase(orderId, params)`
- `search(params)`
- `lead(params)`
- `trackContact(params)`
- `trackSchedule(params)`
- `trackCompleteRegistration(params)`

Ecommerce events must use `content_type: "product"`, numeric `value`, ISO currency codes such as `CLP`, and product IDs/SKUs that match Commerce Manager.

Example:

```ts
import { addToCart } from "@/lib/meta-pixel";

addToCart({
  contents: [{ id: "SKU-1", quantity: 1 }],
  content_type: "product",
  value: 50000,
  currency: "CLP",
});
```

`purchase(orderId, params)` stores the order ID in `sessionStorage` so a refresh of the confirmation page does not duplicate the Purchase event.

### Configured Events

- `PageView`: base pixel script on initial load and `MetaPixelPageView` on App Router route changes.
- `ViewContent`: home, services index, service landing pages, projects and about pages through `ViewContentOnLoad`.
- `Lead`: main contact brief form, Google brief links and successful site-audit runs.
- `Contact`: floating WhatsApp/email buttons and promo WhatsApp buttons.
- `Schedule`: Cal.com agenda opener.
- `CompleteRegistration`: newsletter signup.

The site currently has no real cart, checkout, payment step, account registration, product wishlist, paid subscription, trial, application, location finder, product customizer or donation flow. The helpers for `AddToCart`, `InitiateCheckout`, `AddPaymentInfo`, `Purchase`, `AddToWishlist`, `Subscribe`, `StartTrial`, `SubmitApplication`, `FindLocation`, `CustomizeProduct` and `Donate` are prepared but should only be wired once those actions exist.

### Verification

1. Deploy to Vercel.
2. Open `https://www.upzites.com/` without an ad blocker.
3. Check Meta Events Manager > Test events for `PageView`.
4. Use the Meta Pixel Helper Chrome extension to confirm the pixel ID and event payloads.

For iOS 14.5+ Aggregated Event Measurement, verify the domain in Meta Business Manager and prioritize up to 8 conversion events. Suggested ecommerce priority:

1. Purchase
2. InitiateCheckout
3. AddToCart
4. ViewContent
5. Lead
6. Search
