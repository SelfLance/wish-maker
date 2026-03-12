# WishMaker.io

Blockchain-backed digital greeting card platform with Make-A-Wish Foundation integration.
$10 per wish — 50% donated to Make-A-Wish.

## Quick start

```bash
npm install
npm run dev
```

## File structure

```
wishmaker/
├── index.html                         Vite HTML entry
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx                       React DOM bootstrap
    ├── App.jsx                        Router + global state (page, wish)
    │
    ├── utils/
    │   └── tokens.js                  Design tokens (colours, fonts, flow steps)
    │
    ├── components/
    │   ├── GlobalStyles.jsx           @keyframes + pseudo-class rules + media queries
    │   ├── Navbar.jsx                 Sticky nav — logo, progress dots, page links
    │   ├── StarArt.jsx                Shooting-star SVG (card cover art)
    │   ├── WishCard.jsx               Folded greeting card (sm / md / lg)
    │   ├── HowItWorksIcons.jsx        PenSVG, ChainSVG, EnvSVG
    │   ├── GoldButton.jsx             Primary CTA — gold gradient button
    │   ├── OutlineButton.jsx          Secondary action — border button
    │   ├── Field.jsx                  Text input or textarea with optional label
    │   ├── Divider.jsx                Horizontal gold rule with centred ✦
    │   ├── TrustBar.jsx               SSL / Norton / payment badge strip
    │   ├── PageHeader.jsx             Centred heading + optional subtitle
    │   ├── ItalicTag.jsx              Centred serif italic tagline
    │   └── ConfCard.jsx               White panel card used on Confirmation page
    │
    └── pages/
        ├── HomePage.jsx               Hero, feature strip, tagline
        ├── MakeWishPage.jsx           Step 1 — write message, live card preview
        ├── CompleteWishPage.jsx       Step 2 — delivery options (digital + physical)
        ├── CheckoutPage.jsx           Step 3 — payment form + order summary
        ├── ConfirmationPage.jsx       Step 4 — wish ID, share, counter, testimonials
        ├── HowItWorksPage.jsx         3-step explainer with circular icon badges
        └── ImpactPage.jsx             Make-A-Wish story, 50% stat, ripple effect
```

## Navigation flow

```
Home
 └─ Make a Wish (step 1)
     └─ Complete Your Wish (step 2)
         └─ Secure Checkout (step 3)
             └─ Confirmation (step 4)

How It Works  ← always in nav
Impact        ← always in nav
```

## Architecture

All styling is **inline React `style={}` objects** — no CSS files, no Tailwind, no build-time processing. This ensures styles render identically in any environment including sandboxes.

`GlobalStyles.jsx` is the single exception — it injects one `<style>` block for:
- `@keyframes` (float, fadeup, pulse, shimmer)
- Hover / focus pseudo-class rules (`:hover`, `:focus`, `::after`)
- Responsive media query overrides for grid layouts

## Key tokens (`src/utils/tokens.js`)

| Token | Value |
|---|---|
| `GOLD` | `#B8960C` |
| `GOLD_GRAD` | `linear-gradient(135deg, #C9A227, #9A7400)` |
| `BG` | `#FAF8F5` |
| `SERIF` | Georgia, Times New Roman, serif |
| `SANS` | system sans-serif stack |

## WishCard sizes

| Size | Dimensions |
|---|---|
| `lg` | 238 × 308 px |
| `md` | 198 × 258 px |
| `sm` | 152 × 198 px |

## Pending (backend integration)

- Base (Coinbase L2, Chain ID 8453) on-chain writes
- Stripe payment processing
- Email delivery for digital cards
- Physical card printing + mailing
- Real BaseScan transaction links
