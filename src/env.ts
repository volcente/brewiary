import { createEnv } from '@t3-oss/env-nextjs';
import { railway } from '@t3-oss/env-nextjs/presets-zod';
import { z } from 'zod';

export const env = createEnv({
	skipValidation: process.env.SKIP_VALIDATION === 'true',
	server: {
		DATABASE_URL: z.url().nonempty(),
	},
	runtimeEnv: {
		DATABASE_URL: process.env.DATABASE_URL,
	},
	extends: [railway()],
});
