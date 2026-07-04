---
title: Build System
id: ADR-0003
status: Accepted
date: 2026-07-04
owner: Platform Engineering
---

# ADR-0003 — Build System

## Decision

Use Turborepo as the build orchestration system.

## Rationale

- Incremental builds
- Task caching
- Workspace awareness
- Excellent performance
- Scalable for multiple applications and packages

## Outcome

All build, test, lint, and type-check tasks will be orchestrated through Turborepo.
