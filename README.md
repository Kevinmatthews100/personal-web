# kmatthews.dev

My personal site built with [Astro](https://astro.build).

## Requirements

- [Node.js v18](https://nodejs.org/en)
- [pnpm](https://pnpm.io)

## Local Development

All commands are run from the root of the project, from a terminal:

| Command                 | Action                                             |
| :---------------------- | :------------------------------------------------- |
| `pnpm install`          | Installs dependencies                              |
| `pnpm run dev`          | Starts local dev server at `localhost:3000`        |
| `pnpm run build`        | Build your production site to `./dist/`            |
| `pnpm run preview`      | Preview your build locally, before deploying       |
| `pnpm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `pnpm run astro --help` | Get help using the Astro CLI                       |

## Deployment

Deployment of the site is integrated with git. To deploy, just `git push` to the main branch. This will kick off a deploy on Netlify.
