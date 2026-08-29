# Sip Club Launch Site PRD

## Problem Statement

The product idea is promising but still unproven: a Vienna drink membership
needs both paying members and independent cafe partners before it is worth
building the full app, map, QR redemption, payments, and partner operations.

The current offer is not "free coffee"; it is a founding discount club. The
project moved from the working name "Coffree" to "Sip Club" because the old
name risked overpromising free coffee, while the current business model is a
monthly membership that gives members 20% off eligible drinks.

## Solution

Build a polished validation website before building the app. The website should
explain the founding offer quickly, show the future QR/pass experience, and
collect interest from both sides of the market.

The first offer is:

- EUR 4.99 per month as a founding member price.
- 20% off one eligible drink per visit.
- Coffee, matcha, tea, and selected simple iced drinks.
- Cafe-controlled eligible drink lists.
- A three-month validation window before committing to the native app.

The page should feel minimal and credible, closer to Sippa and Daily Perks Club
in product clarity than to a long pitch deck. The percentage discount belongs
in the headline and offer copy; the brand name should communicate pass, perks,
club, savings, or local drinks without locking the product into one discount
forever.

## User Stories

1. As a potential member, I want to understand the offer in a few seconds, so
   that I can decide whether it fits my cafe habits.
2. As a potential member, I want to see the founding price and discount clearly,
   so that I know what I am signing up for.
3. As a potential member, I want the product to feel local to Vienna, so that it
   feels concrete rather than theoretical.
4. As a potential member, I want to see that matcha, tea, and iced drinks may be
   included, so that the club does not feel coffee-only.
5. As a potential member, I want to imagine the future pass or QR experience, so
   that I understand how it might work at the counter.
6. As a potential member, I want a short form, so that joining the founding list
   is low effort.
7. As a cafe owner, I want to understand the partner benefit quickly, so that I
   can judge whether Sip Club might bring repeat visits.
8. As a cafe owner, I want to control which drinks are eligible, so that I can
   protect margin.
9. As a cafe owner, I want the pilot to avoid extra hardware, so that joining
   does not create operational work.
10. As a cafe owner, I want a simple partner form, so that I can express
    interest without a sales call first.
11. As the Sip Club operator, I want member and cafe leads saved in a simple
    format, so that I can review demand manually.
12. As the Sip Club operator, I want to test positioning before engineering the
    app, so that the product direction is grounded in real interest.
13. As the Sip Club operator, I want to capture the naming concern, so that the
    first public launch does not promise "free" when the offer is a discount.
14. As the product designer, I want the website sections to be easy to iterate,
    so that visual changes can be made quickly from feedback.
15. As the future app builder, I want the PRD to separate validation scope from
    app scope, so that the team does not build QR, maps, payments, or accounts
    too early.

## Implementation Decisions

- The project was scaffolded as a Next.js App Router application with
  TypeScript.
- Sass is used for the visual system, with global tokens for color, typography,
  surfaces, and layout behavior.
- Aleo is self-hosted and used as the display font to move closer to the Sippa
  reference direction.
- The launch page was reduced to fewer, stronger sections: hero, offer proof,
  included drinks, Save/pass preview, cafe partner band, and founding list.
- The hero uses a local generated cafe image instead of relying on a remote
  image URL.
- The district tile preview was removed after feedback because it felt too
  specific and visually noisy for the current stage.
- The Save section was rebuilt as a full-width section with a QR/order-code
  phone preview and simple monthly savings pills.
- The cafe partner section was rebuilt as a full-width dark brown band with a
  centered divider label and short partner benefits.
- The founding list section was changed from two unequal side-by-side forms to
  stacked desktop forms, with a compact internal field grid for alignment.
- The lead capture interface has two variants: member interest and cafe partner
  interest.
- Member submissions include lead kind, name, email, area, and usual order.
- Cafe submissions include lead kind, contact name, cafe name, email, area, and
  eligible drinks.
- The API validates required fields and email shape before saving a lead.
- Leads are stored locally as JSON Lines for the validation phase.
- Local lead data is ignored by version control.
- The project records a modern Node.js requirement because the current Next.js
  version requires Node.js 20.9 or newer.
- The visible product name is Sip Club, with the 20% value carried by the
  tagline and offer copy rather than by the brand name.
- The cafe partner benefit list uses specific icons instead of generic
  badges: repeat visits, eligible drinks, and phone/no-hardware.
- The README was updated to describe the validation scope and local lead
  capture behavior.
- The issue tracker was not published from this session because issue tracker
  tooling and the `ready-for-agent` label setup were not available locally.

## Testing Decisions

- The highest practical testing seam for this stage is the whole Next.js app:
  linting, production build, and API smoke tests cover more value than isolated
  component tests at this early validation stage.
- Linting should remain required before committing.
- A production build should remain required before committing because it catches
  TypeScript, routing, image, and server/runtime issues.
- The lead API should be tested with valid member data, valid cafe data, and
  invalid data.
- Browser review should check desktop and mobile layouts, especially the hero,
  full-width Save section, dark cafe partner band, and founding list forms.
- Future automated tests should cover the lead API contract first, then add a
  browser-level form submission test once the backend destination is stable.

## Out of Scope

- Further naming exploration beyond Sip Club.
- Native iOS or Android app.
- Real QR redemption or barcode scanning.
- Google Maps or partner location search.
- Member accounts.
- Cafe partner dashboard.
- Payment collection.
- Production database or CRM integration.
- Email confirmations.
- Analytics and conversion tracking.
- Legal terms, privacy policy, and merchant terms.
- App Store or Play Store deployment.

## Further Notes

Completed work so far:

- Compared the idea against Sippa and Daily Perks Club references.
- Chose a validation website before building the app.
- Chose a founding discount-club model instead of "10 free coffees per month."
- Broadened the product from coffee-only to coffee, matcha, tea, and selected
  simple iced drinks.
- Built the first Next.js and Sass website implementation.
- Added a local lead capture API for member and cafe interest.
- Generated and added a local cafe/pass visual asset.
- Iterated the page based on design feedback: removed district tiles, added the
  QR/savings product preview, made the Save section full-width, made the cafe
  section a dark divider band, and cleaned up the founding forms.
- Verified the site with linting, production builds, local preview, and lead
  capture smoke tests.

Recommended next steps:

1. Decide the brand name and tagline before sharing the site broadly.
2. Replace local lead storage with a simple real destination such as Airtable,
   Google Sheets, Supabase, or a lightweight database.
3. Add basic analytics for hero CTA clicks, Save-section visibility, member form
   submissions, and cafe form submissions.
4. Create a cafe outreach version of the pitch with one clear promise: more
   repeat local visits, cafe chooses eligible drinks, no hardware for the pilot.
5. Talk to the five cafe owners or baristas already within reach and ask for
   explicit pilot terms, not just polite interest.
6. Collect at least 50 member leads and at least 10 people willing to pay the
   first founding month.
7. Only after that, define the real redemption model: wallet pass, QR code,
   barista scan, member scan, or manual code.
8. Then decide whether the next build should be a mobile web pass, Expo app, or
   a Next.js-first backend plus lightweight pass flow.

Naming note:

"Sip Club" is a better fit than "Coffree" for the current model. It leaves room
for coffee, matcha, tea, and future drinks, while the tagline can carry the
exact 20% discount.
