---
title: Release Process
id: DEV-002
version: 1.0.0
status: Approved
owner: Platform Engineering
last_updated: 2026-07-04
---

# Release Process

## Purpose

This document defines how packages are versioned and released within the Tazohoto Platform.

## Versioning

The platform follows Semantic Versioning (SemVer).

Examples:

- 1.0.0
- 1.1.0
- 2.0.0

## Tooling

Package versioning is managed using Changesets.

## Workflow

1. Make code changes.
2. Run `pnpm changeset`.
3. Describe the changes.
4. Commit the generated changeset.
5. Run `pnpm version-packages` when preparing a release.
6. Publish packages using `pnpm release` (if applicable).

## Notes

All packages should be versioned consistently to maintain a reliable release history.
