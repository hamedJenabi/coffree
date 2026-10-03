# Sip Club

Sip Club is a validation website for a Vienna independent drink club. The first
offer is intentionally simple: founding members pay a small monthly fee and get
20% off one eligible drink per visit at selected partner cafes.

## Product documents

The current working brand and business direction are **MokkaClub**. The existing
website still uses Sip Club and the earlier pilot targets.

- [MokkaClub PRD](docs/mokkaclub-prd.md): the complete handoff, preserved as
  supplied. This is the current business reference.
- [MokkaClub launch plan](docs/mokkaclub-launch-plan.md): repository gaps,
  priorities, and the first 30 days of validation.
- [Earlier business PRD](docs/business-prd.md) and
  [earlier landing-page PRD](docs/prd.md): historical Sip Club requirements and
  implementation notes. Their conflicting business decisions are superseded
  by the MokkaClub handoff.

## Getting Started

Use Node.js 20.9 or newer, then run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Lead Capture

The member and cafe forms post to `/api/leads`. For the pilot, submissions are
stored locally in `data/leads.jsonl`, which is ignored by Git.

## Scope

This first chunk is a promotion site and demand test. It does not include app
accounts, QR redemption, payments, map integrations, or a production backend.

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
