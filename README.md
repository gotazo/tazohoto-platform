---
title: Tazohoto Platform
version: 1.0.0
status: Active Development
last_updated: 2026-07-03
---

# Tazohoto Platform

> **The Digital Sales Platform for Builders**

Tazohoto is a modular real estate platform designed to help builders manage projects, market properties, generate leads, engage customers, and streamline the digital sales journey.

Rather than being a single application, Tazohoto is built as a platform composed of reusable packages and multiple applications that work together.

---

# Vision

To become the digital operating system for the real estate industry by providing builders with a modern, scalable, and intelligent platform for sales, marketing, and customer engagement.

---

# Mission

Build software that helps builders sell properties more efficiently while providing customers with a simple, transparent, and enjoyable buying experience.

---

# Platform Philosophy

Tazohoto follows several core principles:

- Platform First
- Modular Architecture
- Builder Centric
- Design Driven
- API First
- Documentation First
- Security by Default
- Performance by Default

---

# Repository Structure

```text
tazohoto-platform/

apps/
packages/
docs/
scripts/
tests/
tooling/

README.md
LICENSE
CHANGELOG.md
MANIFEST.md
```

---

# Applications

Applications deliver user experiences.

Current applications include:

- Website
- Builder Portal
- Admin Portal
- Progressive Web App (PWA)

---

# Packages

Packages provide reusable platform capabilities.

Examples include:

- design-tokens
- ui
- domain
- auth
- database
- eslint-config
- prettier-config
- typescript-config

---

# Documentation

All platform documentation is stored under:

```text
docs/
```

Documentation includes:

- Architecture
- Specifications
- API
- Developer Guides
- ADRs
- Release Notes

---

# Technology Stack

| Layer | Technology |
|--------|------------|
| Language | TypeScript |
| Package Manager | pnpm |
| Monorepo | Turborepo |
| Frontend | Astro + React |
| Styling | Tailwind CSS |
| Deployment | Cloudflare |
| Version Control | Git + GitHub |

---

# Engineering Principles

- Every package has one responsibility.
- Every application consumes packages.
- Packages never depend on applications.
- Documentation evolves with the platform.
- Architecture is preferred over shortcuts.

---

# Current Status

The platform is currently in active development.

The engineering foundation is being completed before application development begins.

---

# License

See the root LICENSE file for licensing information.