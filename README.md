# Extra Contracts

This project is a skeleton React app for managing contract templates and generating contracts. It uses Vite, React Router, Zustand for state management and integrates with Supabase RPCs.

## Available Scripts

- `npm run dev` – start development server
- `npm run build` – production build
- `npm run preview` – preview build
- `npm test` – run unit tests with Vitest

## Project Structure

- `src/components/contracts` – reusable contract UI components
- `src/pages/contracts/templates` – template list and editor
- `src/pages/contracts/generate` – contract generation flow
- `src/pages/contracts/history` – history and dashboard views
- `src/hooks` – Supabase RPC helpers
- `src/store` – Zustand stores
- `src/i18n` – language context

## Testing

Unit tests use Vitest. Supabase calls are mocked in tests. To run tests:

```bash
npm install # install dependencies
npm test
```

If network access is restricted, ensure dependencies are installed via a setup script.

## Environment Variables

Create a local `.env` or `.env.local` file based on `.env.example` and provide
your Supabase credentials. These local files are ignored by Git. The
`.env.test` file stored in the repository contains placeholder values
(`example.supabase.co` and `test_key`) so tests can run without real secrets.
CI environments should supply real credentials through encrypted variables.
