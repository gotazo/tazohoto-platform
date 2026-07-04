# Tazohoto Prettier Configuration

## Overview

This package provides the shared Prettier configuration used throughout the Tazohoto Platform.

Instead of maintaining separate formatting rules for each application and package, a single shared configuration is used across the entire monorepo.

---

## Purpose

Provide a consistent code formatting standard for every application and package within the Tazohoto Platform.

---

## Responsibilities

- Shared formatting rules
- Consistent code style
- Automatic formatting
- Repository-wide formatting standards

---

## Consumers

This package is intended for:

- Website
- Builder
- Admin
- PWA
- All reusable packages

---

## Dependencies

This package is consumed by the repository tooling and all applications.

Runtime dependencies:

- None

---

## Public API

- prettier.config.mjs

---

## Architecture Notes

Formatting is part of the engineering foundation.

Every application and package should consume this configuration instead of defining its own formatting rules.

---

## Ownership

Platform Engineering

---

## Future Roadmap

- [ ] Markdown formatting
- [ ] Astro formatting
- [ ] Import organization
- [ ] JSON formatting
- [ ] YAML formatting

---

## Maintainer

Tazohoto Platform

---

## Version

Current Version: 0.1.0
