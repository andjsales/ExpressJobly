# ExpressJobly

# Requirements 

Node.js
PostgreSQL
Express
JWT for authentication/authorization

# Prerequisites

Install the project requirements:

```
npm init
npm install
```

Set up Database: 

```
createdb jobly
createdb jobly_test
psql jobly < data.sql
```
# Usage

To run:
```
nodemon server.js
```

# Testing

```
jest -i
```

# Routes

Port: http://localhost:3001/

## Companies

GET /companies
- Get a list of companies, with optional filtering

POST /companies
- Create a new company

GET /companies/:handle
- Get details of a company

PUT /companies/:handle
- Update a company

DELETE /companies/:handle
- Delete a company

## Jobs

GET /jobs
- Get a list of jobs, with optional filtering

POST /jobs
- Create a new job

GET /jobs/:id
- Get details of a job

PUT /jobs/:id
- Update a job 

DELETE /jobs/:id
- Delete a job 

## Auth

POST /auth/register
- Register a new user

POST /auth/token 
- Authenticate a user and return a token

## Users

GET /users
- Get a list of users

GET /users/:username
- Get details of a user

PATCH /users/:username
- Update a user

DELETE /users/:username
- Delete a user

## GET /companies Filters

- `name`: Filters companies by name. Case-insensitive and partial matches are supported.
- `minEmployees`: Filters companies to those with at least this number of employees.
- `maxEmployees`: Filters companies to those with no more than this number of employees.

Example: `/companies?name=net&minEmployees=50`
