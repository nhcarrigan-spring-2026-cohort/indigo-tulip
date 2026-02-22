# indigo-tulip: Homework Help Forum

Repository for Team Indigo Tulip - Spring 2026 Cohort

## Project Overview

A Q&A platform where students can ask homework questions and get help from volunteers, tutors, or other students.

## Problem Statement

Students often struggle to find timely, high-quality assistance with complex assignments, leading to academic stress and incomplete learning. Existing platforms are frequently cluttered, expensive, or lack a structured community where learners can collaborate effectively and verify the accuracy of the help they receive.

## Core Features (MVP)

1. **Simple Q & A:** Users post a question, helpers respond.
2. **Full CRUD:** Make sure questions and responses are editable and deletable.
3. **Account Control:** Support account control & deletion - this would delete their associated questions and comments - this is the cleanest path for the database
   
---

## Technical Stack

- **Front-end:** React (`v19`) + Vite (`v7`).
- **Back-end:** ExpressJS (`v5`) + Prisma (`v7`).
- **Database:** PostgreSQL (`v18`).
- **Other:** Yarn workspaces + Turbo for monorepo management.

---

## How to run the projects and requirements.

### Requirements:
Before you begin, ensure you have the following installed:

Node.js: LTS version (`v20+`)

Database: PostgreSQL (`v18+`)
Note: You can use the provided Docker setup or a local instance.

---

### Setup:

1. Clone the repository:

```terminal
git clone https://github.com/nhcarrigan-spring-2026-cohort/indigo-tulip/
cd indigo-tulip
```

2. Install dependencies; If this gives you an error go to the Yarn help section under.

```terminal
yarn install
```

3. Set your enviroment variables; this command will initialize your `.env` files:

```terminal
yarn setup
```

4. Start the database container; If that didnt work see if docker is running with `docker info`.

```terminal
yarn db:up
```

5. The next command will run all applications inside of `/apps`.

```terminal
yarn dev
```

---

### Yarn Help

If your Yarn command is throwing back an error, this may be because you're using the incorrect version. If it is version `1.22.22`, this is Yarn Classic, which is in maintenance mode. This project uses Yarn `4.11.0`. Follow these steps to remove and install the latest version of Yarn.

1. `sudo npm remove yarn --global`
2. Check Corepack is installed `corepack`
   1. If not, install with `sudo npm install corepack --global`
   2. `corepack enable`
3. Check Yarn `yarn --version`
   1. Should be version `4.11.0`

Check [here](https://gist.github.com/macx/21d444166d169f8eff09c0c2f3f0f523) for further help.

---

## Project Structure

This repository is a **monorepo**, structure is as follows:
- `/apps`: Core logic and features
- `/apps/client`: The React Frontend
- `/apps/server`: The Express/Prisma API
- `packages/config`: Shared ESLint and Prettier settings


To run a command for a specific package without leaving the root directory, use the following syntax:

```terminal
yarn workspace @it/<package-name> <command>
```

Example; the following command will run the frontend app on dev mode:

```terminal
yarn workspace @it/client dev
```

---

## Team Workflow

To keep the repo clean, please follow these etiquette rules:
- Descriptive PRs: All Pull Requests must include a summary of changes and a UI screenshot.
- Board Linking: Link all PRs to their respective GitHub Issue on the project board.
- Main is Truth: All feature branches must merge into `main` after a peer review. 
