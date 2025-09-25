import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: '.env' });
config({ path: '.env.local', override: true });

export default defineConfig({
	out: './drizzle',
	schema: './src/db/schema.ts',
	dialect: 'postgresql',
	dbCredentials: {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		url: process.env.DATABASE_URL!,
	},
});
