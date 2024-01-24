export const locales = ["en-US", "ar-EG"] as const;

export type Locale = typeof locales[number];