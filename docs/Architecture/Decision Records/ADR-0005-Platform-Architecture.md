---
title: Platform Architecture
id: ADR-0005
status: Accepted
date: 2026-07-04
owner: Platform Engineering
---

# ADR-0005 — Platform Architecture

## Decision

Treat Tazohoto as a platform rather than a single application.

## Rationale

The platform consists of independent, reusable modules that can evolve without affecting the entire system.

Applications consume platform packages.

Packages do not depend on applications.

## Outcome

The platform follows a modular, package-first architecture.
