## Description

The repository for the PayMart backend API responsible for interfacing with the database. PayMart is a school project for the software engineering class, it's basically a payment gateway for businesses that want to sell online but don't have an e-commerce store.

## Installation

In order to install you will need the following dependencies:

- NodeJs, a server side javascript runtime.
- NPM, the official package manager for NodeJs.
- PostgreSQL, open source SQL database.

When you have installed the above dependencies run the following command in the project root directory.

```bash
# Install required NodeJs libraries
$ npm install
```

## Running the app

Before running the app make sure to copy the .env.example file to a .env file. This sets up the environment variables that are too sensitive to be uploaded to git (database password etc.). All the environment variables should have the format VARIABLE_NAME=value, so set the database user, password, name etc accordingly. When you have set up the .env run one of the following commands.

```bash
# Development
$ npm run start

# Watch mode
$ npm run start:dev

# Production mode
$ npm run start:prod
```

## Test

```bash
# Unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# Test coverage
$ npm run test:cov
```
