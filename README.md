# NextJS Sequelize GraphQL Starter

NextJS starter with GraphQL API routes and sequelize to interface with a postgres database. This starter is set up for remote development (i.e. without internet access) -- it uses Apollo's Graphql Playground and a local version of `sequelize-cli`.

## Table of Contents

- [Getting Starter](#getting-started)
- [Project Structure](#project-structure)
- [Workflow](#workflow)
- [Commands](#commands)
- [Notes](#notes)

## Getting Started

1. Clone repo
2. Create new database<sup id="a1">[1](#f1)</sup>
3. Create new `.env` file based on `.env.example`. Optionally update it with different database info
4. Run initial migration and seed with `yarn db:seed`
5. Install deps: `yarn`
6. Run project: `yarn dev`

GraphQL playground is available at `http://localhost:3000/api/graphql`. The site index displays a list of todo items.

## Project Structure

``` tree
└───database
│   └───config
│   └───migrations
│   └───models
│   └───seeders
└───graphql
│   └───resolvers
│   └───schemas
└───src
│   └───pages
│   │   └───api
│   │   │   │   graphql.js
│   │   │   _app.js
│   │   │   index.js
│   └───client
│       │   index.js
```

- `database`: This folder has been bootstrapped with `sequelize-cli`
- `graphql`: Folder for graphql schema and resolvers
- `src`: Source folder. `graphql.js` is the api route. `_app.js` imports the Apollo Client from `client/index.js`

## Workflow

1. Generate a new model: `yarn model:generate --name Model --attributes name:string`
2. Update model in `database/models/model.js`
3. (Optional) Generate and write seed file `yarn seed:generate --name model-seed`
4. Add model to graphql schema in `graphql/schema/model.js`. Import and export schema file in `graphql/schema/index.js`
5. Add resolvers to graphql schema in `graphql/resolvers/model.js`. Import and export resolver file in `graphql/resolvers/index.js`

## Commands

`sequelize-cli` is a dev dependency of this starter, so some of the most frequently used commands have been aliased with yarn.

``` bash
db:create: create database
db:drop: drop database
db:migrate: run migrations
model:generate: generate a new model. usually used with `--name Name --attributes Attributes`
seed:generate: generate a new seed file. usually used with `--name seed-name`
db:seed: run seed files
db:seed:undo: undo all seed files
db:reseed: drop database, create database, run migrations, seed database
```

## Notes

<span id="f1">1</span>: I recommend using [`psql`](https://www.postgresql.org/docs/13/app-psql.html). Run `psql postgres` to spin up a postgres command line. Then run `create database ${database_name}`.[↩](#a1)
