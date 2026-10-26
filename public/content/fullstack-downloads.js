// Fixed source allowlist; private .env, generated dist, and dependencies are excluded.
export const fullstackFiles = [
  'README.md', 'package.json', 'package-lock.json', '.env.example', '.gitignore',
  'index.html', 'vite.config.js', 'eslint.config.js', 'server.mjs', 'store.mjs',
  'src/main.jsx', 'src/messages.js', 'src/styles.css', 'tests/api.test.mjs', 'tests/mongo.test.mjs', 'tests/messages.test.mjs',
];
