# ExpressJobly

# Prerequisites

Install the project requirements:

```
npm init
npm install
```

Node, Express, and Postgres

# Usage

To run this:

    node server.js

To run the tests:

    jest -i

# Routes

http://localhost:3001/companies

## GET /companies Filters

- `name`: Filters companies by name. Case-insensitive and partial matches are supported.
- `minEmployees`: Filters companies to those with at least this number of employees.
- `maxEmployees`: Filters companies to those with no more than this number of employees.

Example: `/companies?name=net&minEmployees=50`
