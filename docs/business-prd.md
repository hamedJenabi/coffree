# Sip Club Business PRD

## Problem Statement

Sip Club needs to prove that a Vienna drink membership can work before investing
more time into the app, QR redemption, maps, payments, or cafe operations.

The main business risk is not technical. The risk is whether enough people will
pay for a discount membership, and whether independent cafes will accept the
discount because it brings repeat local visits.

The original "abo coffee" idea sounded like prepaid free coffee, but the locked
pilot direction is a lighter discount club. That reduces cafe margin risk and
makes the first version easier to sell.

## Solution

Launch Sip Club as a validation-first membership for independent Vienna cafes.

The locked first offer is:

- Brand name: Sip Club.
- Location: Vienna.
- Positioning: an independent drink club, not a delivery platform and not a
  generic coupon marketplace.
- Member price: EUR 4.99 per month as the founding price.
- Member benefit: 20% off one eligible drink per visit.
- Launch drinks: coffee, matcha, tea, and selected simple iced drinks.
- Cafe control: every partner cafe chooses which drinks are eligible.
- Cafe hardware: no new hardware for the pilot.
- Pilot duration: three months.
- Pilot supply target: at least 5 credible cafe partners.
- Pilot demand target: at least 50 member leads.
- Payment intent target: at least 10 people willing to pay the first founding
  month.

The locked go-to-market decision is to start with the promotion website and lead
capture before building the app. The site exists to validate demand, explain
the offer, and support cafe conversations.

## User Stories

1. As a potential member, I want the offer to be clear immediately, so that I
   know Sip Club is a paid discount membership, not free coffee.
2. As a potential member, I want the exact founding price visible, so that I can
   decide whether EUR 4.99 per month feels worth it.
3. As a potential member, I want the exact discount visible, so that I know the
   benefit is 20% off eligible drinks.
4. As a potential member, I want to see coffee, matcha, tea, and iced drinks, so
   that the club feels broader than a coffee-only product.
5. As a potential member, I want the product to feel local to Vienna, so that I
   believe partner cafes could realistically be nearby.
6. As a potential member, I want to imagine the future QR/pass flow, so that I
   understand how I would redeem the benefit in a cafe.
7. As a potential member, I want a short founding list form, so that I can join
   before the full app exists.
8. As a cafe owner, I want Sip Club to bring repeat local visits, so that the
   discount has a business reason.
9. As a cafe owner, I want to choose eligible drinks, so that I can protect
   margin and avoid discounting everything.
10. As a cafe owner, I want no additional hardware during the pilot, so that the
    operational burden stays low.
11. As a cafe owner, I want the pilot commitment to be lightweight, so that I
    can test it without a long contract.
12. As the Sip Club operator, I want to collect member demand before app
    development, so that I avoid building too early.
13. As the Sip Club operator, I want to collect cafe partner interest before app
    development, so that the member promise is credible.
14. As the Sip Club operator, I want to ask the five reachable cafes for real
    pilot terms, so that I separate polite interest from commitment.
15. As the Sip Club operator, I want to measure payment intent, so that member
    leads are not mistaken for revenue.
16. As the Sip Club operator, I want to keep the name independent from the 20%
    number, so that the discount can change later without renaming the brand.

## Implementation Decisions

- The brand is Sip Club for the current validation site.
- The discount is communicated in the tagline and offer copy rather than in the
  brand name.
- The business is positioned as a local drink club for independent Vienna cafes.
- The first customer segment is people who already buy cafe drinks multiple
  times per month.
- The first partner segment is independent cafes or baristas who care about
  repeat local visits.
- The initial revenue source is the member subscription.
- Cafes contribute by accepting the discount on eligible drinks during the
  pilot.
- The first cafe pitch is: more repeat local visits, cafe chooses drinks, no
  hardware for the pilot.
- The first member pitch is: EUR 4.99 per month for 20% off eligible drinks at
  selected independent cafes.
- The first product is a promotion website with lead capture, not a native app.
- The future product concept includes a pass or QR/order-code style redemption
  flow, but the exact redemption mechanics are not locked.
- The pilot avoids prepaid "10 free coffees per month" packages because they
  create inventory, accounting, and margin risk.
- The launch scope includes coffee, matcha, tea, and selected simple iced
  drinks.
- Bubble tea, hot chocolate, and broader drink categories are future expansion
  candidates, not required for the first pilot.
- Sippa and Daily Perks Club are reference products for clarity, positioning,
  and visual/product storytelling, not products to copy directly.
- Sippa revenue is not treated as a reliable investment signal because public
  revenue data was not available from the research pass.
- The first backend can stay simple until the business signal is stronger.

## Testing Decisions

- The main test is business validation, not app functionality.
- A good member test requires more than compliments: email leads, repeat intent,
  and willingness to pay the first EUR 4.99 month.
- A good cafe test requires explicit pilot terms: eligible drinks, discount
  acceptance, operational owner, and whether they would allow Sip Club members.
- The first demand seam is the promotion website form.
- The first supply seam is direct outreach to at least five reachable cafes.
- The first pricing seam is whether EUR 4.99 per month feels low enough to join
  and high enough to become meaningful revenue later.
- The first benefit seam is whether 20% off is attractive to members without
  being painful for cafes.
- The first positioning seam is whether "drink club" works better than
  "coffee subscription" because it includes matcha, tea, and iced drinks.
- The first product-flow seam is whether a pass or QR/order code feels
  understandable before building the actual redemption system.
- Success requires at least 5 credible cafe partners, 50 member leads, and 10
  people willing to pay the first founding month.

## Out of Scope

- Final legal/trademark clearance for the Sip Club name.
- Domain purchase and final social handles.
- Paid advertising.
- Production CRM or database.
- Full pricing experimentation.
- Cafe commission, revenue share, or paid partner plans.
- Prepaid coffee bundles.
- Native app development.
- QR scanning implementation.
- Google Maps integration.
- Member accounts.
- Payment processing.
- Cafe dashboard.
- Legal terms, privacy policy, and merchant agreement.

## Further Notes

Locked business decisions:

- Build the promotion website first.
- Do not start with the full app.
- Use Sip Club as the current brand name.
- Keep the exact 20% promise in the offer copy, not the name.
- Start in Vienna.
- Start with independent cafes.
- Start with member subscription revenue.
- Start with EUR 4.99 per month as the founding price.
- Start with 20% off eligible drinks.
- Let cafes choose eligible drinks.
- Include coffee, matcha, tea, and selected iced drinks.
- Keep QR/pass redemption as the future product feeling, not the first backend.
- Use a three-month validation window.
- Validate with 5 cafe partners, 50 member leads, and 10 payment-intent members.

Next business steps:

1. Check basic name risk: domain availability, Instagram/TikTok handle
   availability, and obvious trademark conflicts for "Sip Club."
2. Write the one-page cafe outreach pitch.
3. Speak to the five cafes already within reach.
4. Ask each cafe for eligible drinks, discount acceptance, and pilot owner.
5. Add analytics and real lead storage to the website.
6. Ask member leads whether they would pay EUR 4.99 now.
7. Decide whether to collect preorders before building redemption.
8. Only after the validation targets are hit, scope the real MVP app/pass.

Issue tracker note:

This PRD is saved in the repository. It was not published to a tracker because
issue tracker tooling and the `ready-for-agent` label setup are not available in
this local session.
