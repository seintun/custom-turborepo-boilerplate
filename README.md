# Custom Supercharged Monorepo Boilerplate

## Documentation

## Tech Stack

- **Next.js 13**: A React framework for building server-side rendered and statically generated websites.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Material UI**: A React component library that implements Google's Material Design.
- **Firebase**: A Google serverless architecture to provide authentication, data storage, backend services and tools.

## Tools

- **Turbo Repo**: A tool for creating and managing monorepos.
- **Storybook**: An open source tool for building UI components and pages in isolation.
- **ESLint**: A static analysis tool for identifying and reporting on patterns found in JavaScript code.
- **Prettier**: A code formatter that enforces a consistent style across your codebase.
- **Husky**: A Git hook manager that enables running scripts in response to Git events.
- **Changeset**: A tool for managing changelogs and versioning in monorepos.re
- **Commitlint**: A tool for linting commit messages against a set of predefined rules.
- **Commitizen**: A command-line tool for creating commit messages following a standard format.
- **pnpm**: A fast, disk space efficient package manager that uses hardlinks and symlinks to save disk space.

## Getting Started

### Install `turborepo-next-boilerplate` with pnpm

```bash
  git clone git@github.com:seintun/turborepo-next-boilerplate.git
  cd turborepo-next-boilerplate
```

### Install `pnpm` on your local machine

[Visit pnpm.io](https://pnpm.io/installation)

## Initialize the project

```bash
  pnpm install
```

The monorepo project will spin every instance of apps and packages if the `pnpm` command is ran at the root of the project. User `--filter=` if a specific app is desired to be ran.

| `pnpm`             | Descriptions                                                                              |
| ------------------ | ----------------------------------------------------------------------------------------- |
| `install`          | installs all the required dependencies                                                    |
| `--filter=`        | use to run specific named apps/packages only. `pnpm --filter=ui dev`                      |
| `dev`              | starts development server without cache                                                   |
| `build`            | builds application                                                                        |
| `lint`             | runs ESLint and Prettier to scan and format codes                                         |
| `format`           | run Prettier to format codes                                                              |
| `clean`            | removes temporary files and node_module directories                                       |
| `commit`           | prompts the user to create a commit message following a standard format                   |
| `changeset`        | creates a changelog for the project                                                       |
| `version-packages` | increments the version numbers of packages to release package                             |
| `publish-packages` | build and lint the project, increment package version numbers, and publish changes to npm |
| `storybook:dev`    | starts all the Storybook instances in development mode                                    |
| `storybook:build`  | builds the Storybook static assets for production                                         |
| `storybook:move`   | moves files and directories to the correct locations for deployment                       |

## Vercel Remote cache

Remote Caching saves you time by ensuring you never repeat the same task twice.
This speeds up your workflow by avoiding the need to constantly re-compile, re-test, or re-execute your code if it is unchanged.

```bash
  pnpx turbo login
  (or)
  npx turbo login
```

```bash
  pnpx turbo link
  (or)
  npx turbo link
```

### Test the cache

Once your project has the remote cache linked, run turbo run build to see the caching in action. Turborepo caches the filesystem output both locally and remote (cloud). To see the cached artifacts open node_modules/.cache/turbo.

Now try making a change in any file and running turbo run build again. The builds speed will have dramatically improved, because Turborepo will only rebuild the changed files.

**References:**

https://nextjs.org/docs/advanced-features/ci-build-caching

https://vercel.com/docs/concepts/monorepos/remote-caching

## Authors

- [@shipmunkdev](https://github.com/shipmunkdev)
- [@seintun](https://github.com/seintun)

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## License

[MIT](https://choosealicense.com/licenses/mit/)
