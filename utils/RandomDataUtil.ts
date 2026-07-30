/**
 * RandomDataUtil
 * --------------
 * Utility class for generating random test data.
 * Use anywhere in your tests: AdminTests, EmployeeTests, etc.
 *
 * Usage:
 *   import { RandomDataUtil } from '../utils/RandomDataUtil';
 *
 *   const username  = RandomDataUtil.username();       // lokesh_xK9mP2
 *   const email     = RandomDataUtil.email();          // test_xK9mP2@mail.com
 *   const password  = RandomDataUtil.password();       // Xk9@mP2rQw
 *   const phone     = RandomDataUtil.phone();          // 9876543210
 *   const number    = RandomDataUtil.number(1, 100);   // 42
 */

export class RandomDataUtil {

  // ── Core generators ────────────────────────────────────────────────────────

  /** Random integer between min and max (inclusive) */
  static number(min: number = 1, max: number = 9999): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /** Random alphanumeric string of given length */
  static string(length: number = 6): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length }, () =>
      chars.charAt(Math.floor(Math.random() * chars.length))
    ).join('');
  }

  /** Random lowercase-only string */
  static lowerString(length: number = 6): string {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    return Array.from({ length }, () =>
      chars.charAt(Math.floor(Math.random() * chars.length))
    ).join('');
  }

  /** Random numeric string (e.g. for OTP fields) */
  static numericString(length: number = 6): string {
    return Array.from({ length }, () => Math.floor(Math.random() * 10)).join('');
  }

  // ── Common test data ───────────────────────────────────────────────────────

  /** Random username  e.g. lokesh_xK9mP2 */
  static username(prefix: string = 'user'): string {
    return `${prefix}_${this.string(6)}`;
  }

  /** Random email  e.g. test_xK9mP2@mail.com */
  static email(domain: string = 'mail.com'): string {
    return `test_${this.string(6)}@${domain}`;
  }

  /**
   * Random strong password
   * Always contains: uppercase, lowercase, digit, special char
   * e.g. Xk9@mP2rQw
   */
  static password(length: number = 10): string {
    const upper   = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower   = 'abcdefghijklmnopqrstuvwxyz';
    const digits  = '0123456789';
    const special = '@#$!%*?&';
    const all     = upper + lower + digits + special;

    // Guarantee at least one of each required type
    const required = [
      upper  .charAt(Math.floor(Math.random() * upper.length)),
      lower  .charAt(Math.floor(Math.random() * lower.length)),
      digits .charAt(Math.floor(Math.random() * digits.length)),
      special.charAt(Math.floor(Math.random() * special.length)),
    ];

    const rest = Array.from({ length: length - required.length }, () =>
      all.charAt(Math.floor(Math.random() * all.length))
    );

    // Shuffle so required chars aren't always at the start
    return [...required, ...rest]
      .sort(() => Math.random() - 0.5)
      .join('');
  }

  /** Random 10-digit phone number  e.g. 9876543210 */
  static phone(): string {
    const first = Math.floor(Math.random() * 9) + 1; // 1–9 (no leading zero)
    return `${first}${this.numericString(9)}`;
  }

  /** Random first name picked from a small pool */
  static firstName(): string {
    const names = ['James', 'Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'Ethan', 'Sophia'];
    return names[Math.floor(Math.random() * names.length)];
  }

  /** Random last name picked from a small pool */
  static lastName(): string {
    const names = ['Smith', 'Johnson', 'Brown', 'Taylor', 'Wilson', 'Davis', 'Clark'];
    return names[Math.floor(Math.random() * names.length)];
  }

  /** Random full name  e.g. Emma Smith */
  static fullName(): string {
    return `${this.firstName()} ${this.lastName()}`;
  }

  /** Random date string between two years  e.g. 2023-07-15 */
  static date(startYear: number = 2000, endYear: number = 2025): string {
    const year  = this.number(startYear, endYear);
    const month = String(this.number(1, 12)).padStart(2, '0');
    const day   = String(this.number(1, 28)).padStart(2, '0');   // max 28 — safe for all months
    return `${year}-${month}-${day}`;
  }

  /** Pick a random item from any array */
  static pick<T>(items: T[]): T {
    return items[Math.floor(Math.random() * items.length)];
  }
}
