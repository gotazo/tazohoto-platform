---
title: Color Architecture Specification
id: TDLS-COLOR-001
version: 1.0.0
status: Approved
owner: Platform Engineering
last_updated: 2026-07-04
---

# Tazohoto Color Architecture Specification

## Overview

The Tazohoto Platform adopts a four-layer color architecture.

This architecture separates raw color values from branding, semantic meaning, and theme implementation.

The objective is to create a scalable design system that supports multiple products, multiple builders, white-label deployments, accessibility improvements, and future redesigns without changing application code.

---

# Architecture

Primitive Colors

↓

Brand Colors

↓

Semantic Colors

↓

Theme Colors

↓

Components

↓

Applications

---

# Layer 1 — Primitive Colors

Primitive colors are raw color values.

These colors never describe meaning.

Examples:

- Slate 50
- Slate 100
- Blue 600
- Green 500
- Amber 500

Primitive colors should never be referenced directly by components.

Example

Blue600

White

Black

---

# Layer 2 — Brand Colors

Brand colors define the visual identity of Tazohoto.

They are mapped from primitive colors.

Examples

Brand Primary

Brand Secondary

Brand Accent

Brand Neutral

Brand Highlight

Changing brand colors updates the entire platform identity while preserving semantic meaning.

---

# Layer 3 — Semantic Colors

Semantic colors describe purpose.

Examples

Primary

Secondary

Surface

Background

Border

Text

Success

Warning

Danger

Information

Components should always consume semantic colors.

Semantic colors should never reference primitive colors directly.

They should reference brand colors whenever appropriate.

---

# Layer 4 — Theme Colors

Themes adapt semantic colors for different visual environments.

Examples

Light Theme

Dark Theme

High Contrast Theme

Builder Theme

Corporate Theme

Future themes may be added without changing component code.

---

# Component Rule

Components must never use:

- Primitive colors
- Brand colors

Components may only consume Theme colors.

---

# Benefits

- Single source of truth
- White-label ready
- Builder branding support
- Accessible themes
- Easy redesign
- Consistent UI
- Future-proof architecture

---

# Example Flow

Primitive

Blue600

↓

Brand

BrandPrimary

↓

Semantic

Primary

↓

Theme

ButtonPrimaryBackground

↓

Component

Primary Button

↓

Application

Builder Dashboard

---

# Ownership

Platform Engineering

---

# Status

Approved

---

# Version

1.0.0
