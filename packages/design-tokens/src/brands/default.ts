/**
 * ------------------------------------------------------------
 * Tazohoto Platform
 * Brand Profile
 * Default
 * ------------------------------------------------------------
 */

import { blue } from "../colors/blue";
import { slate } from "../colors/slate";
import { green } from "../colors/green";
import { amber } from "../colors/amber";
import { red } from "../colors/red";
import { neutral } from "../colors/neutral";

export const defaultBrand = {
  /**
   * Core Brand
   */
  primary: blue[600],
  primaryHover: blue[700],
  primaryActive: blue[800],

  secondary: slate[700],
  secondaryHover: slate[800],
  secondaryActive: slate[900],

  accent: amber[500],

  /**
   * Status
   */
  success: green[600],
  warning: amber[600],
  danger: red[600],

  /**
   * Base
   */
  background: neutral.white,
  foreground: slate[900],
} as const;
