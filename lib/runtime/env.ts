const PUBLIC_ENV_KEYS = ['NEXT_PUBLIC_SUPABASE_URL', 'NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY'] as const;

export type MicraPublicEnv = Record<(typeof PUBLIC_ENV_KEYS)[number], string>;

export function getPublicEnv(): MicraPublicEnv {
  const missing = PUBLIC_ENV_KEYS.filter((key) => !process.env[key]);
  if (missing.length) throw new Error(`MICRA runtime environment missing: ${missing.join(', ')}`);
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  if (!/^https:\/\/[a-z0-9-]+\.supabase\.co$/.test(url)) throw new Error('MICRA runtime environment has an invalid NEXT_PUBLIC_SUPABASE_URL');
  return { NEXT_PUBLIC_SUPABASE_URL: url, NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY! };
}

export function assertPublicEnvForBuild(): void {
  if (process.env.CI === 'true') return;
  getPublicEnv();
}
