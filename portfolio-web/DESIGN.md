---
name: E-jay P. Detera Portfolio
description: Architectural systems monograph and engineering dossier
colors:
  signal-ochre: "#E5A93C"
  vermilion-spec: "#DE4E2B"
  carbon-ground: "#0C0C0E"
  charcoal-plate: "#131316"
  mullion-slate: "#19191D"
  glazing-bar: "#26262B"
  warm-paper: "#F4F3EF"
  warm-stone: "#C8C6BE"
  muted-pewter: "#8E8C84"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.06em"
rounded:
  none: "0px"
  pill: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.signal-ochre}"
    textColor: "{colors.carbon-ground}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "{colors.mullion-slate}"
    textColor: "{colors.warm-paper}"
    rounded: "{rounded.none}"
    padding: "8px 12px"
---

# Design System: E-jay P. Detera Portfolio

## Overview

**Creative North Star: "The Systems Architecture Monograph"**

This design system treats a software engineer's portfolio as an open technical monograph and architectural specification rather than a marketing SaaS template. Built on exposed `1px` structural glazing mullions (`#26262B`) over a matte warm-carbon ground (`#0C0C0E`), every project, experience milestone, and credential sits inside a crisp rectilinear bay where hierarchy comes from typographic scale and structural division rather than glowing neon borders or floating drop-shadow cards.

It explicitly rejects AI-generated portfolio clichés: no monospace-for-everything body copy, no decorative WebGL button shaders, no pagination carousels hiding 4–8 items, and no unbacked 4-column SaaS feature grids.

**Key Characteristics:**
- Exposed `1px solid #26262B` structural mullion grid framing a `1280px` (`max-w-7xl`) central dossier column.
- Three-voice typography pairing industrial `Archivo` display headlines, readable `Plus Jakarta Sans` technical prose, and tabular `JetBrains Mono` specification metadata.
- Open-by-default case study architecture where system highlights, database decisions, and repository links are visible in a single scroll.

## Colors

A restricted three-ink print discipline over matte carbon and charcoal architectural plates.

### Primary
- **Signal Ochre** (`#E5A93C`): Primary interactive state, active filter tabs, bullet specification dashes, and keyboard focus rings.

### Secondary
- **Vermilion Spec** (`#DE4E2B`): Project subtitle roles, organization names, and secondary status indicators.

### Neutral
- **Carbon Ground** (`#0C0C0E`): Primary page background surface, devoid of blue SaaS undertones.
- **Charcoal Plate** (`#131316`): Recessed or hover-activated bay background.
- **Mullion Slate** (`#19191D`): Tag, badge, and secondary control fill.
- **Glazing Bar** (`#26262B`): Exposed `1px` structural border dividing bays, rows, and columns.
- **Warm Paper** (`#F4F3EF`): High-contrast primary text and display typography.
- **Warm Stone** (`#C8C6BE`): Long-form engineering descriptions and bullet copy.
- **Muted Pewter** (`#8E8C84`): Tabular indices (`SYS-01`, `CRD-01`), timestamps, and caption metadata.

### Named Rules
**The Three-Ink Rule.** Every non-hero section is restricted to Warm Paper/Stone text, Carbon/Charcoal grounds, and functional Ochre/Vermilion specification highlights—never multi-color gradients or glowing colored box-shadows.

## Typography

**Display Font:** `Archivo` (with `ui-sans-serif, system-ui, sans-serif` fallback)
**Body Font:** `Plus Jakarta Sans` (with `ui-sans-serif, system-ui, sans-serif` fallback)
**Label/Mono Font:** `JetBrains Mono` (with `ui-monospace, monospace` fallback)

**Character:** Authoritative industrial grotesk headlines (`Archivo`) anchor each bay, while humanist `Plus Jakarta Sans` ensures effortless 65ch technical reading and `JetBrains Mono` locks timestamps, indices, and stack tags to a strict tabular grid.

### Hierarchy
- **Display** (`800`, `3rem`, `1.05` line-height): Section titles (`Shipped Systems & Architecture`, `Experience, Education & Stack`).
- **Headline** (`700`, `1.875rem`, `1.15` line-height): Flagship system titles (`Floodguard`, `ReliefChain`) and role titles.
- **Body** (`400`, `1rem`, `1.6` line-height): System descriptions and architectural highlights, capped at `68ch`.
- **Label** (`600`, `0.75rem`, `0.06em` tracking, uppercase): Specification indices (`SYS-01`), repository links, and stack badges with `tabular-nums`.

### Named Rules
**The Monospace Discipline Rule.** `JetBrains Mono` is reserved strictly for tabular metadata, indices, dates, stack tags, and action controls—never for multi-sentence body paragraphs.

## Layout

The page is structured as a continuous vertical dossier inside a `max-w-7xl` (`1280px`) container bounded by left and right `1px solid #26262B` mullions (`border-x`). Inside the container, sections divide horizontally via `border-b` and internally via 12-column CSS grids (`grid-cols-1 lg:grid-cols-12`) with exposed `divide-x` and `divide-y` rules.

## Elevation & Depth

Tonal layering and exposed `1px` glazing bars replace drop shadows across all dossier sections. Depth is communicated by stepping surface lightness from `#0C0C0E` (base) to `#131316` (card bay) to `#19191D` (control/tag surface). Modal lightboxes use a high-opacity dark backdrop (`rgba(0, 0, 0, 0.85)`) with a crisp `1px` border.

### Named Rules
**The Glazing Mullion Rule.** Adjacent bays share a single `1px solid #26262B` dividing line (`divide-x` / `divide-y`) rather than floating as separate rounded cards with outer margins and drop shadows.

## Shapes

Rectilinear (`0px` radius) across all dossier bays, buttons, inputs, and stack tags to honor the architectural glazing grid. The preserved Hero section retains its bespoke portrait collage geometry as the opening signature.

## Components

### Buttons
- **Shape:** Sharp rectilinear (`0px` radius) in dossier sections.
- **Primary:** Signal Ochre (`#E5A93C`) fill with Carbon Ground (`#0C0C0E`) bold monospace label (`12px 24px` padding).
- **Secondary:** Mullion Slate (`#19191D`) fill with `1px solid #26262B` stroke and Warm Paper (`#F4F3EF`) monospace label; shifts border and text to `#E5A93C` on hover.

### Chips
- **Style:** Mullion Slate (`#19191D`) background, Warm Stone (`#C8C6BE`) monospace text, `1px solid #26262B` border, `0px` radius.
- **State:** Category badges use Signal Ochre (`#E5A93C`) text.

### Cards / Containers
- **Corner Style:** `0px` flush structural bays.
- **Background:** `#0C0C0E` at rest, shifting to `#131316` on hover.
- **Border:** Shared `1px solid #26262B` grid mullions.
- **Internal Padding:** `24px` mobile (`p-6`), `32px` to `40px` desktop (`sm:p-8` / `sm:p-10`).

### Inputs / Fields
- **Style:** `1px solid #26262B` stroke on `#0C0C0E` ground, `0px` radius, `14px` horizontal padding.
- **Focus:** Stroke shifts to `#E5A93C` with zero glow halo.

### Navigation
- **Style:** Sticky `64px` (`h-16`) top bar with `#0C0C0E` ground and `1px solid #26262B` bottom rule. Navigation links sit inside flush `divide-x` cells that highlight with `#19191D` background and `#E5A93C` text when active.

## Do's and Don'ts

### Do:
- **Do** expose all flagship project architecture highlights directly inline so recruiters never have to click a modal just to read technical depth.
- **Do** use `tabular-nums` on every index (`SYS-01`, `CRD-01`), counter, and date range.
- **Do** pair `Archivo` headings with `Plus Jakarta Sans` body prose for scannable hierarchy.

### Don't:
- **Don't** set body paragraphs in `JetBrains Mono`.
- **Don't** hide 4–8 portfolio items inside pagination carousels or touch-swipe sliders.
- **Don't** use glowing neon shadows, glassmorphism cards, or unbacked 4-column SaaS feature rows.
