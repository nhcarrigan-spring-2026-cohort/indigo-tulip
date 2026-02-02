# indigo-tulip
Repository for Team Indigo Tulip - Spring 2026 Cohort

# [Project Name]

## Project Overview
[Brief description of what the project does and why it exists]

## Problem Statement
[What problem does this solve? Who is it for?]

## Core Features (MVP)
1. [Feature 1]
2. [Feature 2]
3. [Feature 3]

## Nice-to-Have Features
1. [Feature 1]
2. [Feature 2]

## Stretch Goals
1. [Feature 1]
2. [Feature 2]

## Technical Stack
- Front-end: React (``v19``) + Vite (``v7``).
- Back-end: ExpressJS (``v5``) + Prisma (``v7``).
- Database: PostgreSQL (``v18``).
- Other: Yarn workspaces + Turbo for monorepo management.

## How to run the projects and requirements.

Requirements:
Before you begin, ensure you have the following installed:

Node.js: LTS version (``v20+``)

Database: PostgreSQL (``v18+``)
Note: You can use the provided Docker setup or a local instance.

Setup:
1. Clone the repository:
```terminal
git clone https://github.com/nhcarrigan-spring-2026-cohort/indigo-tulip/
cd indigo-tulip
```

2. Install dependencies; If you don't have yarn installed, ``run npm install -g yarn`` first. Then run:
```terminal
yarn install
```

3. Set your enviroment variables; this command will initialize your ``.env`` files:
```terminal
yarn setup
```
4. Start the database container; If that didnt work see if docker is running with ``docker info``.
```terminal
yarn db:up
```
5. The next command will run all applications inside of ``/apps``.
```terminal
yarn dev
```

## Project Structure
This repository is a **monorepo**. All core logic and features are housed within the ``/apps`` directory.
To run a command for a specific package without leaving the root directory, use the following syntax:
```terminal
yarn workspace @it/<package-name> <command>
```
Example; the following command will run:
```terminal
yarn workspace @it/client dev
```
## Timeline
- Week 1-2: [Milestone]
- Week 3-4: [Milestone]
- Week 5-6: [Milestone]
- Week 7-8: [Milestone]
- Week 9-10: [Milestone]
- Week 11-12: [Milestone]

## Success Criteria
- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]


