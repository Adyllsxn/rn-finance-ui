# UI/UX Specifications & Design System — RN Finance UI

This document outlines the visual identity, design tokens, screen flows, and component guidelines for the **RN Finance UI** mobile application prototype.

---

## 1. Brand & Visual Identity

The visual language is built around a modern dark aesthetic contrasted with high-impact neon accents to emphasize financial clarity and control.

### Color Palette (Design Tokens)
- **Primary Brand (Lime Neon):** `#D0F244` (Default) | `#E1FB6C` (Light) | `#A3C718` (Dark)
- **Backgrounds:** 
  - Main App Background: `#E8F5E9` (Light Mode) / `#121314` (Deep Dark Theme)
  - Card Surfaces: `#18191C` (Dark Card) | `#FFFFFF` (White Card) | `#F3F4F6` (Slate Card)
- **Typography Colors:**
  - Dark Text: `#0F172A`
  - Pure White: `#FFFFFF`
  - Slate Muted: `#94A3B8`
  - Slate Dark: `#64748B`

### Typography
- **Font Family:** `Plus Jakarta Sans` (Weights: 300 Light, 400 Regular, 500 Medium, 600 SemiBold, 700 Bold, 800 ExtraBold).
- **Scale:**
  - Hero Titles: `3.5rem` (Desktop) / `2.5rem` (Mobile) with tight letter spacing (`-1.5px`).
  - Section Headings: `2.2rem` (Bold).
  - Body Text: `1rem` to `1.1rem` with optimal line-height (`1.6`).

---

## 2. Component Guidelines

### Buttons & Interactive Elements
- **Border Radius:** Standardized at `16px` (`--radius-md`) for normal buttons, `20px` for large containers, and `32px` for full wrapper cards.
- **Elevation & Shadows:** Smooth hover and active state transformations (`translateY(-3px)`) backed by colored glow shadows (e.g., `rgba(208, 242, 68, 0.45)` for lime actions).

### Cards & Dashboards
- **Feature Cards:** Styled with subtle structural borders (`--border-slate` / `--border-dark`) and fluid padding (`32px 28px`).
- **Floating Mockup Cards:** Absolute-positioned overlay elements featuring backdrop blur and gentle CSS floating keyframe animations.

---

## 3. Screen Flows (Prototype Architecture)

1. **Splash / Onboarding (Home):**
   - Introduces the platform value proposition.
   - Quick performance and privacy metrics banner (60 FPS, 100% Offline, Expo SDK).
   - Direct call-to-action to install the release APK or explore features.

2. **Dashboard & Analytics Screen:**
   - Real-time expense distribution across customizable budget categories.
   - Summary cards displaying active wallets and verified account statuses.

3. **Wallet Management Screen:**
   - Interface for separating personal savings, investments, and work funds.
   - Visual balance indicators and custom spending threshold alerts.