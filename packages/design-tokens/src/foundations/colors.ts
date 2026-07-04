/**
 * ------------------------------------------------------------
 * Tazohoto Platform
 * Design Tokens
 * Colors
 * ------------------------------------------------------------
 */

export const primitiveColors = {
  white: "#FFFFFF",
  black: "#000000",

  slate50: "#F8FAFC",
  slate100: "#F1F5F9",
  slate200: "#E2E8F0",
  slate300: "#CBD5E1",
  slate400: "#94A3B8",
  slate500: "#64748B",
  slate600: "#475569",
  slate700: "#334155",
  slate800: "#1E293B",
  slate900: "#0F172A",

  blue50: "#EFF6FF",
  blue100: "#DBEAFE",
  blue200: "#BFDBFE",
  blue300: "#93C5FD",
  blue400: "#60A5FA",
  blue500: "#3B82F6",
  blue600: "#2563EB",
  blue700: "#1D4ED8",
  blue800: "#1E40AF",
  blue900: "#1E3A8A",

  green500: "#22C55E",
  amber500: "#F59E0B",
  red500: "#EF4444",
} as const;

export const semanticColors = {
  primary: primitiveColors.blue600,
  secondary: primitiveColors.slate700,

  background: primitiveColors.white,
  surface: primitiveColors.slate50,

  text: primitiveColors.slate900,
  textSecondary: primitiveColors.slate600,

  border: primitiveColors.slate200,

  success: primitiveColors.green500,
  warning: primitiveColors.amber500,
  danger: primitiveColors.red500,
} as const;
