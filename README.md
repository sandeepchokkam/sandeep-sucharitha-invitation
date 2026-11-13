# Sandeep & Sucharitha Wedding Invitation

A responsive, faith-inspired wedding invitation built with Vite and TypeScript. The page follows the supplied reference sequence: opening, countdown, couple introduction, events, locations, moments, and closing.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Create a production build with `npm run build`; preview it with `npm run preview`.

## Update the invitation

Edit `src/main.ts` to change the wedding date or update the family names, ceremony and reception times, venue names, and addresses. The countdown is set to 5 December 2026 at 7:30 AM in the visitor's local browser timezone. Replace all remaining bracketed details and map-link placeholders before sharing the invitation.

This version intentionally has no couple photos. The hero, countdown, and couple sections use color treatments, and the moments section is typographic. The display fonts are loaded from Google Fonts, with local system fallbacks.

The supplied soundtrack is stored at `public/audio/Manasa ye maya chesave.mpeg`. It starts at 4 seconds when the invitation is opened and can be paused or resumed with the floating music button.
