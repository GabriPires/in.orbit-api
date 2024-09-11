import { env } from '@/env'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './schema.ts',
  out: './.migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
})
