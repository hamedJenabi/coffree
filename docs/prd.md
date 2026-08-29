# Coffree Launch Site PRD

## Problem Statement

Coffree needs to validate demand before investing in the full native app,
payments, maps, QR redemption, and cafe operations. The key unknown is whether
both sides of the market will say yes: Vienna drinkers must want a paid cafe
club, and independent cafes must see enough upside to accept the discount.

## Recommended First Offer

Start with a founding discount club:

- Price: EUR 4.99 per month.
- Member benefit: 20% off one eligible drink per visit.
- Drink scope: coffee, matcha, tea, hot chocolate, and selected simple iced
  drinks.
- Cafe control: each cafe chooses the eligible drinks.
- Pilot goal: prove demand with at least 5 cafe partners and at least 50 member
  leads before building the app.

This is easier to sell than a prepaid "10 coffees per month" plan because it
limits redemption risk, protects cafe margin, and avoids complex accounting.

## Users

- Drinkers in Vienna who already buy coffee, matcha, tea, or simple cafe drinks
  several times per month.
- Independent cafe owners and managers who want repeat local visits without
  joining a delivery or heavy discount platform.
- Coffree operator who needs a fast way to gather leads, explain the offer, and
  learn which areas and drink types matter most.

## User Stories

1. As a potential member, I want to understand the offer in a few seconds so I
   can decide whether it is relevant to me.
2. As a potential member, I want to see that the club is local to Vienna so it
   feels concrete, not theoretical.
3. As a potential member, I want to know which drinks are included so I can
   decide whether it fits my habits.
4. As a potential member, I want to join a founding list quickly so I can get
   early access.
5. As a cafe owner, I want to understand why Coffree can bring repeat visits so
   I can judge whether a discount is worth it.
6. As a cafe owner, I want control over eligible drinks so I can protect margin.
7. As the Coffree operator, I want member and cafe leads saved somewhere simple
   so I can review demand manually.
8. As the Coffree operator, I want the first website to be polished enough to
   share with cafes and friends before the product is fully built.

## Functional Requirements

- Build a responsive Next.js launch page.
- Use Sass for global tokens and page styling.
- Present the brand, offer, target drinks, cafe pitch, and pilot numbers.
- Include a QR/pass preview section so visitors can imagine the later product.
- Keep launch-page copy short and visual.
- Provide two lead forms: member interest and cafe partner interest.
- Validate required fields server-side.
- Save leads locally as JSON Lines for the validation phase.
- Keep full native app, payment, QR, account, and map implementation out of
  scope for this chunk.

## Success Metrics

- 5 credible Vienna cafe partner leads.
- 50 member leads.
- At least 10 people willing to pay the first EUR 4.99 founding month.
- Clear signal on the strongest drink category and area demand.

## Testing Plan

- Run the local development server and review desktop and mobile layouts.
- Submit a valid member lead and confirm the API accepts it.
- Submit a valid cafe lead and confirm the API accepts it.
- Submit invalid form data and confirm the API rejects it.
- Run linting and a production build before the first commit.

## Later Scope

- Production lead storage.
- Payments.
- Member accounts.
- Partner admin flow.
- QR or code-based redemption.
- Map of partner cafes.
- Native app or mobile web pass.
