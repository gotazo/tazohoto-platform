---
title: Monorepo Architecture
id: ADR-0001
status: Accepted
date: 2026-07-04
owner: Platform Engineering
---

# ADR-0001 — Monorepo Architecture

## Status

Accepted

---

## Context

The Tazohoto Platform consists of multiple applications and reusable packages.

Examples include:

- Website
- Builder Portal
- Admin Portal
- Progressive Web App (PWA)
- Shared UI
- Design Tokens
- Domain Services

Managing these as separate repositories would increase maintenance overhead and make sharing code more difficult.

---

## Decision

Adopt a monorepo architecture managed with **pnpm Workspaces** and **Turborepo**.

Applications live under `apps/`.

Reusable libraries and shared configurations live under `packages/`.

---

## Rationale

A monorepo provides:

- Shared code
- Shared tooling
- Consistent dependency management
- Atomic commits across packages
- Simplified developer experience

---

## Consequences

### Positive

- Easier code sharing
- Centralized tooling
- Consistent standards
- Simplified releases

### Negative

- Larger repository
- Requires workspace tooling
- More initial setup

---

## Alternatives Considered

- Multiple repositories
- Git submodules
- Separate package repositories

---

## Outcome

The Tazohoto Platform will use a monorepo as its long-term repository strategy.
