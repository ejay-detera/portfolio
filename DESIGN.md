# design.md — E-jay P. Detera Portfolio Redesign

> Source of truth for the redesign of `yaje-portfolio.vercel.app`.
> Visual reference: the "Developer X" dark portfolio layout (centered cutout portrait, big left headline, slim right-hand info rail, flat dark sections, palette swapped to the original portfolio's gray-black, orange and dandelion; see §3).
> Read this file fully before writing or changing any UI code.

---

## 0. Toolchain (non-negotiable)

| Concern | Tool | Notes |
|---|---|---|
| Design base | **Impeccable** (`pbakaus/impeccable`) | Design skill + commands. Follow its typography, color (OKLCH), spatial, motion, interaction, responsive and UX-writing references. Its anti-patterns apply on top of the Don'ts below. |
| Smooth scroll | **Lenis** | One global instance, driven by GSAP's ticker. |
| Animation | **GSAP** (+ `ScrollTrigger`, `SplitText`) | Scroll-driven reveals, timelines, hero intro, text splitting, parallax. |
| Layout motion | **Motion** (`motion/react`) | Layout animations, shared layout, `AnimatePresence`, filter tabs, expanding project cards. |
| Forms | **FormKit** | Project inquiry form. See the framework note in §9. |
| Framework | Next.js (App Router) + TypeScript + Tailwind CSS | Keep the current stack. |

### Impeccable setup

```bash
npx skills add pbakaus/impeccable
# or, in Claude Code:
# /plugin marketplace add pbakaus/impeccable
```

1. Run `/teach-impeccable` once. Feed it this file so it saves the design context to `.impeccable.md`.
2. Build sections using the `frontend-design` skill.
3. After each section, run in this order: `/critique` → `/normalize` → `/animate` → `/polish`.
4. Before shipping, run `/audit` (accessibility, performance, theming, responsive) and fix every P0/P1 item.

If anything in this file conflicts with a generic Impeccable default, **this file wins**.

---

## 1. Design intent

A calm, confident, dark developer portfolio. It should feel **editorial and engineered**: large type, generous space, hairline structure, a warm orange accent with a sparing dandelion highlight, and motion so smooth it feels like the page is physically weighted.

- **Personality:** precise, quiet, senior. Not flashy, not playful.
- **Audience:** recruiters, internship/junior-role hiring managers, hackathon organizers, freelance clients.
- **One-line pitch:** "Full-stack developer who ships real systems."
- **Primary actions:** (1) View shipped systems, (2) Contact.
- **Memorable thing:** the portrait cutout sitting *between* the headline and the info rail, with the headline overlapping the shoulder line of the portrait.

---

## 2. Layout (from the reference)

### Global
- Max content width: `1200px`, centered, side padding `clamp(20px, 5vw, 64px)`.
- 12-column grid, 24px gutters on desktop. Single column on mobile.
- Sections are separated by **flat background steps** (hero `--bg` → about `--bg-raised` → next `--bg`), not by gradients or shadows.
- Hairline dividers (`1px`, `--line`) are the main structural device.
- Vertical rhythm: section padding `clamp(96px, 14vw, 180px)` top and bottom.

### Header
- Left: logo mark + wordmark ("E-jay Detera"). Use the existing `EJ-LOGO.png` or a clean SVG.
- Right: `Home · About · Systems · Experience · Credentials · Contact`, 14px, no underline until hover.
- Far right: a two-line hamburger icon on mobile only.
- Sticky, background `--bg` at 85% opacity **without blur** (solid fill, no glass). Hides on scroll down, returns on scroll up (GSAP, `power3.out`).

### Hero (full viewport)
- **Center:** transparent-background cutout portrait, anchored to the bottom edge of the hero, about 55–60% of hero height. The hero ends in a hard flat edge where the next section begins.
- **Left column:**
  - Short orange rule (`64px × 3px`), above the headline.
  - Headline, two lines: `I'm E-jay, a` / `Full-Stack Developer` (display size, see §4). The second line may overlap the portrait's edge; text sits above the image via z-index.
  - One-sentence supporting line, 14–15px, `--text-muted`, max 38ch.
  - Circular orange scroll button (56–64px, chevron-down icon). This is a circle button, not a badge.
- **Right rail** (stacked blocks separated by generous space, each with a small uppercase label):
  - `ABOUT ME`: 2-line blurb + `Learn more →` text link with a thin underline.
  - `MY WORK`: 2-line blurb + `Browse systems →`.
  - `FOLLOW ME`: GitHub, LinkedIn, Email icons (SVG, 16px).
- Mobile: portrait goes first and is cropped at the waist, headline overlaps its lower third, the right rail collapses below the headline.

### About
- Eyebrow `/ ABOUT ME` in orange, 11–12px uppercase, wide tracking. (A plain text eyebrow, not a badge.)
- Left: H2 `I've been building systems since 2023` + short paragraph + `More about me →` link.
- Right: two large stat numerals side by side with small labels:
  - `8+` Shipped systems
  - `7` Verified credentials
  - Only real numbers. Never invent stats.
- Below: hairline, then a row `PREVIOUSLY WORKED WITH` and four wordmarks: Commonwealth Information Society, Google Developers Group on Campus, PUP QC, and freelance/client work. Use real logos where available, otherwise clean text wordmarks in `--text-muted`. All same height, monochrome.

### Skills
- Eyebrow `/ MY SKILLS`, H2 `An extensive list of skills`.
- Right side: circular prev/next arrow buttons (outlined circle + solid orange circle for "next"). Controls a horizontally draggable track (see §7).
- Skill groups (Frontend & Mobile, Backend & Systems, Databases & Storage, Infrastructure & Tooling) as columns separated by hairlines. Plain text lists, not chips.

### Systems (projects)
- Eyebrow `/ SHIPPED SYSTEMS`, H2.
- Filter: `All · Hackathon · School · Commissions` as text tabs with a sliding orange underline (Motion `layoutId`).
- Project list: large rows or two-column cards with a real screenshot, project name, one-line subtitle, 3 highlights, stack as plain comma-separated text, source link.
- Index numbers `01–08` in sans with tabular numerals.
- Click to expand a project in place (Motion layout animation). Esc closes.

### Experience & Education
- Two-column: date range on the left, role + org + bullets on the right, hairline between entries.
- Current role marked with a small dandelion dot and the word "Current", not a pill.

### Credentials
- Simple table-style list: title, issuer, year, "View ↗". Hairlines between rows. Hover shifts the row background to `--bg-raised`.

### Contact
- Large H2 `Let's build something dependable.`
- Left: email with a "Copy email" text button, GitHub, LinkedIn.
- Right: the project inquiry form (§9).

### Footer
- Logo, copyright, `Back to top ↑`.

---

## 3. Color

Dark-only. Taken from the original portfolio: **gray-black** surfaces, **orange** as the main accent, **dandelion** (warm yellow) as a secondary highlight. Neutrals are tinted slightly warm (hue ~60) so they sit comfortably next to the orange instead of looking cold. Define in OKLCH, with hex approximations.

> The values below are matched to the described scheme. If your original site uses specific hex codes, replace `--bg`, `--accent` and `--highlight` with them and adjust the rest to match.

```css
:root {
  /* Surfaces: gray-black */
  --bg:            oklch(0.19 0.005 60);  /* ~#171615  hero / base */
  --bg-raised:     oklch(0.225 0.006 60); /* ~#1e1d1b  alternate sections */
  --bg-sunken:     oklch(0.16 0.005 60);  /* ~#121110  inputs, wells */
  --line:          oklch(0.31 0.007 60);  /* hairlines */
  --line-strong:   oklch(0.41 0.008 60);

  /* Text */
  --text:          oklch(0.97 0.006 85);  /* headings, warm off-white */
  --text-body:     oklch(0.85 0.008 80);
  --text-muted:    oklch(0.68 0.01 75);
  --text-faint:    oklch(0.55 0.01 70);

  /* Primary accent: orange */
  --accent:        oklch(0.70 0.19 48);   /* ~#f97316 */
  --accent-hover:  oklch(0.75 0.18 52);
  --accent-press:  oklch(0.64 0.19 46);
  --on-accent:     oklch(0.18 0.005 60);  /* dark text on orange, not white */

  /* Secondary highlight: dandelion */
  --highlight:     oklch(0.87 0.16 92);   /* ~#fbd33b */
  --on-highlight:  oklch(0.18 0.005 60);

  /* Feedback (forms only) */
  --danger:        oklch(0.68 0.20 25);
  --success:       oklch(0.75 0.16 155);
}
```

### Color roles

| Color | Used for | Never used for |
|---|---|---|
| **Orange** `--accent` | Scroll button, primary CTA, `/ LABEL` eyebrows, the headline rule, active filter underline, link hover, focus rings, next-arrow button | Large background areas, body text |
| **Dandelion** `--highlight` | Stat numerals (`8+`, `7`), one highlighted word in a section heading at most, the "Current" role dot, selected-text color, small marks on hover (e.g. row index number) | Buttons, links, eyebrows, focus rings, anything that competes with the CTA |
| **Gray-black** | All surfaces, hairlines, text | n/a |

Rules:
- Orange leads. Dandelion supports. On any single screen, dandelion should cover far less area than orange.
- Never place orange and dandelion directly touching each other or side by side as a pair. Separate them with gray-black space.
- Text on orange or dandelion fills is always `--on-accent` / `--on-highlight` (dark). White on orange fails contrast.
- Flat fills only. No orange-to-yellow gradients, no warm glows.
- Never pure `#000` or `#fff`.
- Body text contrast ≥ 4.5:1, large text ≥ 3:1. Verify `--text-muted` on `--bg-raised`, and orange text (eyebrows) on both surfaces.
- Text selection: `::selection { background: var(--highlight); color: var(--on-highlight); }`.

---

## 4. Typography

- **One sans family** for everything: a geometric grotesque with tight, confident headings (the reference uses a face like Satoshi / General Sans). Use **Hanken Grotesk** or **Plus Jakarta Sans** via `next/font`, or Satoshi from Fontshare if self-hosted. Pick one and commit.
- Weights: 400 body, 500 UI/labels, 600–700 headings.
- **Never use a monospace face for any text**, including labels, numbers, tags, code-like metadata, or stack lists.
- Use `font-variant-numeric: tabular-nums` for stats and indexes.

Scale (fluid, `clamp`):

| Token | Size | Line height | Tracking | Use |
|---|---|---|---|---|
| `display` | `clamp(2.75rem, 7vw, 5.5rem)` | 1.0 | -0.03em | Hero headline |
| `h2` | `clamp(2rem, 4vw, 3.25rem)` | 1.08 | -0.02em | Section titles |
| `h3` | `clamp(1.25rem, 2vw, 1.75rem)` | 1.2 | -0.01em | Project / role titles |
| `stat` | `clamp(3rem, 6vw, 5rem)` | 1 | -0.03em | Numerals |
| `body` | `1rem` | 1.65 | 0 | Paragraphs, max 62ch |
| `small` | `0.875rem` | 1.55 | 0 | Rail blurbs, meta |
| `eyebrow` | `0.7rem` | 1 | 0.14em, uppercase | `/ ABOUT ME`, rail labels |

---

## 5. Spacing, shape, depth

- 4px base unit. Use the scale 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128.
- Radius: `0` for structure (sections, rows, images), `6px` for inputs and buttons, `50%` for the circular icon buttons. Nothing else.
- **No shadows.** Depth comes from flat surface steps and hairlines.
- Icons: a single outline icon set (Lucide or Phosphor), 1.5px stroke, 16–20px. Brand icons (GitHub, LinkedIn) as SVG.
- Images: portrait is a cutout PNG/WebP with real transparency. Project screenshots use `0` radius, a `1px --line` border, and `aspect-ratio` set to avoid layout shift.

---

## 6. Components

**Primary button:** solid `--accent`, `--on-accent` text, 6px radius, 48px height, 20px horizontal padding, 500 weight. Hover: `--accent-hover` and the arrow nudges 4px right. Press: `--accent-press`, scale 0.98.

**Secondary button:** transparent, `1px --line-strong` border, `--text`. Hover: border becomes `--text`.

**Text link:** `--text`, 12px uppercase, 0.08em tracking, `1px` underline that animates `scaleX` 0→1 on hover (origin left). Trailing arrow `→`.

**Circle icon button:** 56px, `--accent` fill for primary (scroll-down, next), `1px --line-strong` outline for secondary (previous). Icon centered.

**Eyebrow:** `/ LABEL` in `--accent`, uppercase, wide tracking. Plain text only.

**Row (credentials, experience):** hairline top border, 24–32px vertical padding, hover background `--bg-raised`, 200ms.

**Tabs (filter):** text tabs, active tab `--text` with a 2px `--accent` underline that slides between tabs via Motion `layoutId`.

**Focus:** `outline: 2px solid var(--accent); outline-offset: 3px;` on every interactive element. Never remove it.

---

## 7. Motion system

Motion is the signature of this redesign. The goal: **smooth, weighted, never bouncy, never in the way.**

### Tool boundaries (avoid fighting)
- **Lenis** owns scrolling.
- **GSAP + ScrollTrigger** owns anything driven by scroll position or a multi-step timeline: hero intro, section reveals, text splitting, parallax, pinned moments, number count-ups, the horizontal skills track.
- **Motion** owns anything driven by React state or layout: filter tab underline, project grid reflow when filtering, expand/collapse of a project, mounting/unmounting (`AnimatePresence`), menu open/close, form field states, toasts.
- Never animate the same property on the same element with two libraries.

### Easing and duration tokens

```ts
export const ease = {
  out:    [0.22, 1, 0.36, 1],   // expo-out: default for reveals
  inOut:  [0.65, 0, 0.35, 1],   // for position/size changes
  linear: [0, 0, 1, 1],         // only for continuous parallax
};
export const dur = { micro: 0.18, ui: 0.32, reveal: 0.9, hero: 1.2 };
// GSAP equivalents: "expo.out" ≈ ease.out, "power3.inOut" ≈ ease.inOut
```

- Never use `bounce`, `elastic`, or overshoot springs.
- Motion springs (layout only): `{ type: "spring", stiffness: 260, damping: 32, mass: 0.9 }`. Critically damped, so no wobble.
- Animate only `transform` and `opacity` (plus `clip-path` for masks). Never animate `width/height/top/left` directly. Use Motion `layout` for size changes.

### Lenis + GSAP wiring (single source of truth)

```ts
// lib/smooth-scroll.ts
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initSmoothScroll() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
  });

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  return lenis;
}
```

- Create it **once** in a client provider at the app root. Clean up on unmount (`lenis.destroy()`, `gsap.ticker.remove`).
- Anchor links (`#projects`, etc.) call `lenis.scrollTo(target, { offset: -80, duration: 1.4 })`.
- Add `data-lenis-prevent` to any inner scrollable region (expanded project panel, menu overlay).
- Pause Lenis (`lenis.stop()`) while the mobile menu or an expanded project is open.
- Lenis CSS (`lenis.css`) must be imported.

### Choreography

**Page load (hero intro, GSAP timeline, ~1.6s total)**
1. Background and header are visible immediately (no blank flash).
2. Orange rule scales `scaleX 0→1` (origin left), 0.6s.
3. Headline: `SplitText` by lines, each line wrapped in an `overflow: hidden` mask, lines slide up from `yPercent: 110`, stagger `0.1`, 1.1s `expo.out`.
4. Supporting line and right-rail blocks fade up (`y: 16 → 0`, `opacity 0 → 1`), stagger `0.08`.
5. Portrait: `scale 1.06 → 1` and `opacity 0 → 1` over 1.4s `expo.out`, starting at 0.2s.
6. Scroll button fades in last and begins a subtle idle animation (chevron translates 3px down and back, 2s loop, `sine.inOut`).

**Scroll reveals (ScrollTrigger)**
- Section headings: line-mask reveal like the hero, trigger `top 85%`, `once: true`.
- Paragraphs, rows, cards: `y: 24 → 0`, `opacity 0 → 1`, 0.9s `expo.out`, stagger `0.08` within a group, `once: true`.
- Hairline dividers: draw in with `scaleX 0→1`.
- Stat numerals: count up from 0 over 1.4s `power2.out` on enter. Final value must match the real number and be present in the DOM for no-JS/SEO.
- Images: reveal with `clip-path: inset(0 0 100% 0)` → `inset(0)` plus inner image `scale 1.12 → 1` for a gentle unmask.
- Parallax (subtle only): the hero portrait moves `yPercent: 0 → 8` across the hero's scroll, `scrub: true`, linear. Right rail drifts slightly slower than the headline. Keep it under 10% so it never feels gimmicky.

**Skills track (GSAP)**
- Horizontal track driven by prev/next buttons (`gsap.to` x with `power3.inOut`, 0.7s) and by drag (GSAP Draggable or pointer events with inertia). Snap to cards.

**Projects (Motion)**
- Filter change: wrap the list in `<LayoutGroup>`, give each card `layout`, wrap in `AnimatePresence mode="popLayout"`. Exiting cards fade to 0 and scale to 0.98 over 0.18s; remaining cards glide to new positions with the layout spring.
- Expand: use shared `layoutId` between the collapsed card and its expanded panel so the image and title morph rather than cut. Backdrop is a flat `--bg` at 92% opacity (no blur). Esc and backdrop click close, focus returns to the originating card.
- Hover on a card: image `scale 1.03` over 0.6s `ease.out`, title arrow nudges. No lift or shadow.

**Hover and micro-interactions**
- Links: underline scales in from the left, 0.3s `ease.out`.
- Buttons: 0.18s color transition, arrow translateX 4px.
- Rows: background fade 0.2s.
- Magnetic effect is allowed **only** on the circular scroll button (max 8px pull, GSAP `quickTo`, disabled on touch).

**Page and menu transitions**
- Mobile menu: panel slides from the right with `ease.inOut` 0.5s, menu items stagger up 0.06s. Motion handles mount/unmount.
- Route changes (if added): a flat `--bg` panel wipes up over 0.6s, new content reveals as above.

**Contact form (Motion)**
- Field error text slides down and fades in (`height: auto` via Motion layout), 0.2s.
- Submit button: label cross-fades to a spinner then to "Sent", no layout jump.
- Success state replaces the form with a confirmation block using `AnimatePresence`.

### Performance and accessibility for motion
- Wrap GSAP code in `gsap.matchMedia()` and `useGSAP` (`@gsap/react`) so everything cleans up on unmount.
- `prefers-reduced-motion: reduce`: disable Lenis (native scroll), skip parallax, skip count-ups (show final numbers), replace reveals with a simple 0.2s opacity fade, and keep functional transitions (tabs, expand) instant or opacity-only.
- Set `will-change: transform` only during animation, never permanently.
- Use `ScrollTrigger.refresh()` after fonts and images load. Reserve image space with `aspect-ratio` to prevent layout shift.
- Target: no dropped frames on a mid-range phone, CLS < 0.05, INP < 200ms, LCP < 2.5s. Load the hero portrait with `priority`.
- Never hide content behind an animation that may not run: default state is visible, JS sets the initial hidden state only after it is ready.

---

## 8. Content & UX writing

- Voice: direct, plain, first person. No buzzwords ("passionate", "rockstar", "cutting-edge").
- Verbs on buttons: `View systems`, `Send inquiry`, `Copy email`.
- Replace the current technical-label voice ("Inspect Shipped Systems", "Primary Email Endpoint", "Send Direct Inquiry") with human language ("View my work", "Email", "Tell me about your project").
- Project copy: one-line outcome first, then 3 highlights max.
- Empty/error messages say what happened and what to do next.

---

## 9. Project inquiry form (FormKit)

Fields: **Name**, **Email**, **Project type** (select: Web app, Mobile app, Database/backend, Internship/role, Other), **Budget range** (optional select), **Timeline** (optional), **Project details** (textarea, min 30 chars), hidden honeypot.

Requirements:
- Visible labels above fields (never placeholder-only), 48px input height, `--bg-sunken` fill, `1px --line` border, 6px radius, accent focus ring.
- Validate on blur, then live after first error. Errors appear under the field in `--danger` with plain-language text.
- Disable submit only while sending, never while the form is merely incomplete.
- Preserve input on error. Success state replaces the form; also offer "Copy email" as fallback.
- Keyboard and screen-reader friendly: `aria-describedby` for errors, logical tab order, `autocomplete` attributes.
- Submission goes to a Next.js route handler (email via Resend or similar) with server-side validation and rate limiting.

> **Framework note:** FormKit (`@formkit/vue`) is a Vue/Nuxt library. Next.js + React cannot use it directly. Choose one:
> 1. **Stay on Next.js (recommended):** build the form with React Hook Form + Zod, following every UX rule above (same behavior as FormKit's validation, messages and states).
> 2. **Move to Nuxt/Vue:** use FormKit as written, with its theming via `@formkit/themes` mapped to the tokens in §3 and §5. GSAP and Lenis carry over; swap Motion for `motion-v`.

---

## 10. Don'ts (hard rules)

Visual
- **No pill badges** or pill chips anywhere: no rounded-full tags, status pills, or tech-stack pills. Tech stack is plain text. Status is a dot plus a word.
- **No monospace typography** for any text, including labels, tags, numbers, and metadata.
- **No random `FIG.` / `SYS-` / `CRD-` / `// ` labels** or other fake-technical annotations. The only ornament allowed is the `/ SECTION` eyebrow.
- **No gradients**: not in backgrounds, text, buttons, borders, image overlays, or fades. Flat color only.
- **No glassmorphism**: no `backdrop-filter`, blur, frosted panels, or translucent cards.
- **No emoji as icons** or as decoration. Use SVG icons from one set.
- No box shadows, glows, or neon outlines.
- No colors beyond the palette in §3: orange is the accent, dandelion is the sparing highlight. No blue, purple, teal or green highlights (green/red appear only in form feedback).
- No cards nested inside cards. No side-stripe colored borders on cards.
- No stock-photo or AI-generated decorative imagery. Real portrait, real project screenshots only.
- No gray text on colored backgrounds.
- No centered-everything layouts. Align to the grid and the left edge.

Motion
- No bouncy, elastic, or overshoot easing.
- No scroll-jacking beyond Lenis smoothing. Never lock scroll for long pinned sequences.
- No animation on every element at once. Stagger and prioritize.
- No parallax over 10% travel, no tilt/3D card effects, no cursor-follower blobs.
- No auto-playing carousels.
- No animation that blocks interaction or delays content longer than ~1.6s on load.

Content & code
- No lorem ipsum, no invented stats, no fake logos or testimonials.
- No placeholder-only form fields.
- No `localStorage`-gated content, no layout shift from late-loading fonts or images.
- No inline `!important` hacks to beat the system; fix the token instead.

---

## 11. Responsive behavior

- Breakpoints: `sm 640`, `md 768`, `lg 1024`, `xl 1280`. Design mobile-first.
- `< 1024px`: right rail stacks under the hero headline; stats stack; skills track becomes swipeable; projects become a single column.
- Touch targets ≥ 44×44px.
- Test at 360, 390, 768, 1024, 1440, 1920 widths. Headline must never overflow or collide with the portrait's face on any of them.

---

## 12. Implementation order

1. Tokens: CSS variables (§3), type scale (§4), Tailwind theme extension, `next/font`.
2. Providers: Lenis + GSAP ticker (`initSmoothScroll`), reduced-motion handling.
3. Header, hero, with the full intro timeline.
4. About, logo strip, stats.
5. Skills track.
6. Systems list with Motion filter + expand.
7. Experience, credentials.
8. Contact + inquiry form.
9. Impeccable passes: `/critique` → `/normalize` → `/animate` → `/polish` → `/audit`.
10. Performance + a11y pass against the targets in §7.

---

## 13. Definition of done

- [ ] Matches the reference layout: centered cutout portrait, left headline, right rail, flat dark sections, hairlines, orange primary accent, dandelion highlight.
- [ ] Zero violations of §10 (search the codebase for `gradient`, `backdrop-filter`, `rounded-full` on non-circle elements, `font-mono`, `FIG`, `box-shadow`).
- [ ] Lenis + GSAP in sync, no scroll jank, anchors and inner scrollers work.
- [ ] All reveals run once, respect reduced motion, and content is visible without JS.
- [ ] Filter and expand animations are layout-based (Motion) with no flicker.
- [ ] Form validates, is accessible, and delivers email end to end.
- [ ] Lighthouse: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- [ ] `/audit` returns no P0/P1 issues.