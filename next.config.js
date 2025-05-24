import { fileURLToPath } from "node:url";

import { createJiti } from "jiti";

const jiti = createJiti(fileURLToPath(import.meta.url));
await jiti.import("./src/utils/env");

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
