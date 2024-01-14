# typescript-boilerplate

My typical TypeScript + Node.js boilerplate for new projects. This is a minimal repository for non-monorepo projects, however converting to a monorepo is quite easy with pnpm workspaces and turborepo.

# About

This is my personal TypeScript + Node.js starter project boilerplate. While opinionated for my tooling and configs, you can use it easily as well! You will need to use `pnpm 8.14.1` and `Node 20.11.0` or above.

To get started, run
`corepack prepare pnpm@latest --activate` and then install all dependencies with `pnpm i`.

To convert to a monorepo, all you need to do is add `pnpm-workspace.yml` and configure it according to pnpm documentation.

# Features

- ES2022 + ESM
- CodeQL scanning
- Enforce the use of pnpm
- Basic absolute path aliases setup
- Strong and strict TypeScript config
- Strict and opinionated formatter and linter
- Competent basic scripts to quickly get started

# Scripts

- `clean` - Cleans up the ./dist folder before a build
- `build` - Compiles via TSC & resolves aliases using tsc-alias
- `dev` - Runs a file (default `dist/index.js`) via tsx in development mode
- `lint` - Checks formatting via prettier and linting via ESLint in read-only mode
- `start` - Runs a file (default `dist/index.js`) in production mode
- `test` - Runs unit tests, defaults to `tsc --noEmit`.

# License

[zlib/libpng][license]

[license]: LICENSE.md "A link to the license file in this repository."
