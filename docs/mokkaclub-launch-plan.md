# MokkaClub launch plan

Prepared on 3 October 2026 from the [new handoff](mokkaclub-prd.md), both earlier
PRDs, and the repository implementation. This is a recommended execution plan;
it does not establish that cafés have committed or members have paid.

## First priority

Secure specific café offers in one small Vienna neighborhood, then test whether
customers will pay and redeem repeatedly. The landing page already exists.
The next milestone is **30 café conversations → 10 committed cafés → 50–100
paying members → repeat usage → cafés choosing to continue**.

The handoff supersedes the earlier Sip Club plan: MokkaClub is the working name;
the initial validation sprint is 30 days; success is actual paying membership,
rather than five cafés, 50 leads, and ten statements of payment intent.
The proposed €4.99 price and approximately 20% offers remain hypotheses.

## What the repository currently provides

| Area | Observed state | Next action |
| --- | --- | --- |
| Landing page | Built in Next.js; page, metadata, forms, and package name still use Sip Club | Align the public brand with MokkaClub after checking name risk |
| Offer | Page advertises €4.99, 20% off, and a five-café target | Use the new ten-café target and the actual partner offer conditions |
| Café proposition | “Bring regulars back” and “More repeat local visits” | Lead with attracting additional customers and filling agreed quiet hours |
| Lead capture | Member and café forms post to `/api/leads`; records append to local `data/leads.jsonl` | Use durable, private storage and verify retrieval after deployment/restart |
| Form confirmation | `handleSubmit` reads `event.currentTarget.reset()` after an awaited request | Capture the form element before awaiting; test both successful confirmation and errors |
| Membership preview | QR cells and past monthly savings are generated/static presentation data | Clearly label examples; implement verification before members redeem |
| Partners | No actual café directory or confirmed offers are present in the page | Publish only committed venues and approved photos/logos |
| Commercial flow | No payments, accounts, membership verification, or redemption records | Add only the small flow needed to run a paid pilot once supply is secured |
| Public information | No privacy, Impressum, or membership terms pages are present | Prepare applicable information before public lead collection and checkout |
| Measurement | No acquisition or redemption instrumentation is implemented | Start with a private operational tracker and basic conversion events |

The form finding is based on source inspection: the installed React DOM clears
`currentTarget` after dispatch, so using it after `await` can throw after the API
has already saved the lead. This has not been verified in a browser in this
documentation pass. Local file storage needs an explicit persistence and backup
strategy; it should not be assumed to survive a hosting change or redeployment.

## First 48 hours

1. Choose a walkable launch area. Neubau is a reasonable starting assumption
   from the PRD; prefer the area where you can reach owners and frequent buyers.
2. Create a private tracker of 30 candidate cafés. Record name, address,
   owner/manager, contact status, proposed offer, quiet hours, objections,
   next follow-up, and commitment status. Keep this customer/contact data out
   of Git.
3. Prepare a one-page café pitch and approach the first five owners during
   quieter hours. Ask for participation in a defined pilot.
4. Check MokkaClub's name, similar marks, domain, and handles before spending
   on branding. Use the [Austrian Patent Office's trademark research guidance](https://www.patentamt.at/recherche/marken).
   The handoff is not evidence that the name is available or legally cleared.
5. Arrange [WKO Vienna founding advice](https://www.wko.at/wien/gruendung/beratungsangebot)
   to clarify the activity, registration, tax, and social-insurance setup before
   operating commercially. Review any obligations arising from your existing
   employment alongside the pilot.

Suggested café pitch:

> I'm testing MokkaClub, a paid café membership in this neighborhood. You choose
> the drinks, discount, and hours. Members pay MokkaClub; there is no platform
> fee during the pilot, and your café funds the agreed discount. We want to
> bring you additional customers and measure whether they return. There is no
> POS integration. Would you join a 30-day pilot with a specific offer?

“Free pilot” must mean no platform fee, not no economic cost to the café.

## Thirty-day validation sprint

| Period | Founder work | Deliverable / decision |
| --- | --- | --- |
| Days 1–7 | Approach owners in the selected area; learn objections; propose café-controlled offers | A 30-café pipeline and first written commitments |
| Days 8–14 | Complete 30 owner conversations; agree terms and train participating staff | Approximately ten cafés with usable offers, named contacts, and launch dates |
| Days 15–21 | Publish real partners; complete operational/legal setup; test payment and redemption at cafés | A service that can accept a payment and deliver the advertised benefit |
| Days 22–30 | Recruit frequent buyers through partner counters, your own network, and relevant local communities; support visits personally | Aim for 50–100 paying members and initial repeat redemptions |

Do not sell an immediately usable membership until the agreed venues and
redemption flow work. If café commitments take longer, move the paid launch;
the calendar is a learning target, not a reason to promise an unavailable service.

The founder's 30-day validation sprint and each café's 30-day live pilot are
different clocks. Members recruited in week four will not yet have reached
their first monthly renewal at the end of the sprint. Follow that cohort through
its renewal before claiming month-one retention or committing to expansion.

## What counts as a café commitment

A positive conversation or a café interest form is a lead. Count a café as
committed only when the authorized owner/manager confirms in writing:

- Eligible drinks, discount/benefit, days/hours, exclusions, and redemption limit.
- Pilot start/end dates, who funds the discount, and how the arrangement ends.
- The staff contact and membership verification/redemption procedure.
- Permission to publish the café name, offer, and any supplied photos/logo.
- How support problems and failed redemptions will be handled.

Count a café as activated after its staff successfully completes a test
redemption. Review the partner agreement with an appropriate Austrian adviser
before relying on it commercially.

## Smallest usable paid pilot

**Before sharing the waitlist publicly:** finish the MokkaClub copy, fix form
confirmation, connect durable lead storage, add appropriate public information,
and check successful and invalid submissions on a phone. Follow
[WKO's guidance on website identification and privacy information](https://www.wko.at/internetrecht/website-impressum).
Keep marketing permissions distinct from merely requesting pilot information.

**Before taking payment:** show the real venues and offer restrictions, state the
price/billing interval and start date, and provide membership terms and a support
contact. Decide whether the first payment buys a fixed pilot month or an
automatically renewing monthly membership; make that explicit in checkout.
Confirm the required registration, taxes, withdrawal/refund handling, and
cancellation flow with advisers. EU guidance covers distance-selling information
and withdrawal rights, including online withdrawal functionality:
[Your Europe](https://europa.eu/youreurope/business/selling-in-eu/selling-goods-services/ecommerce-distance-selling/index_en.htm)
and the [European Commission](https://commission.europa.eu/digital-life/protecting-you-when-buying-online_en).
Verify the applicable Austrian implementation when configuring checkout.

**During the paid pilot:** use a mobile member credential and an operator/staff
verification view showing current membership and the café's offer. A short-code
lookup with a simple redemption record is enough to test the model. A static
screenshot is insufficient to establish that a membership is still active.
Confirm paid status from the payment provider rather than a success-page visit,
and handle cancellations, failed payments, and expired memberships.

Track only the data needed for the pilot: member reference, café, offer,
timestamp, and discount/price where staff can reliably capture it. Provide
restricted operator access and a fallback contact if verification fails.
Use a list of venues with address links before building a custom map.

## Weekly scorecard and decision points

- **Supply:** cafés contacted, owner conversations, written commitments,
  activated cafés, objections, and partner willingness to continue.
- **Demand:** visitors/leads by channel, paid members, conversion, acquisition
  spending, and founder time spent acquiring users.
- **Usage:** members with at least one redemption, members returning on a
  different day, redemptions per member, and number of cafés visited.
- **Café value:** member first visits, self-reported existing regulars,
  discount cost, quiet-hour visits, repeat visits, and staff feedback.
- **Retention:** paid renewals divided by memberships actually due to renew,
  cancellations, failed payments, and cancellation reasons.

Use the PRD's directional supply test: 0–3 commitments from 30 conversations
means revisit the offer/positioning; 5–10 merits more testing; ten or more is a
positive supply signal. Set the usage and café-continuation thresholds before
the paid launch so you do not move the goalposts after seeing the results.

Do not interpret a member's first recorded visit as proof of incremental revenue.
Ask whether they previously used the café and whether the offer changed their
choice; compare with available café observations. These are estimates, not a
controlled attribution study.

Continue investing when strangers pay, use the benefit repeatedly, renew when
eligible, and cafés want to continue without unacceptable margin loss. Adjust
or stop when participation requires heavy persuasion, payment conversion stays
weak, members do not redeem, or cafés mainly discount existing regulars.

## Economics and spending

At the proposed €4.99 price, 50 members generate €249.50 and 100 generate €499
in gross monthly membership revenue, before taxes, payment fees, refunds,
support, and operating expenses. This stage buys evidence, not a salary.

For an illustrative €4.50 eligible drink at 20% off, a member saves €0.90 per
purchase. Six eligible purchases save €5.40, just over the €4.99 fee. Use actual
partner prices and restrictions when explaining value; do not promise every
member those savings.

Keep the handoff's €500–€1,500 initial budget as a spending cap, subject to the
cost of required setup. Prioritize that setup, café outreach, hosting, and a
working pilot. Keep your engineering job during validation. Defer native apps,
café SaaS dashboards, AI, POS integrations, fundraising, and second-city work
until this local model shows repeat use and partner retention.

## Next development order

1. Align brand and copy with the handoff; label product/savings examples.
2. Fix form confirmation and replace local lead storage; verify deployment.
3. Add approved partner profiles, precise offers, public information, and basic
   acquisition measurement.
4. After supply is secured, implement checkout, current-member verification,
   redemption logging, and subscription/withdrawal handling.
5. Test a complete purchase → café redemption → cancellation/expiry journey
   with staff before recruiting paying members.

Read the installed Next.js guides before implementing these changes, as required
by `AGENTS.md`. This documentation pass does not implement or deploy them.
