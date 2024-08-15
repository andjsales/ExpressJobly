# Jobly

## Description

Jobly is a comprehensive backend system designed to manage users, companies, and job listings. Built with Node.js, Express, and PostgreSQL, it provides RESTful APIs to interact with a database, ensuring efficient data management and secure authentication mechanisms via JWT.

## Features

- User Management: Register, authenticate, and manage user profiles
- Company Management: Create, update, retrieve, and delete company profiles.
- Job Management: Post job listings, update details, and search for jobs based on various criteria.
- Authentication and Authorization: Secure access with JWT tokens and role-based access control.

## Requirements

- Node.js
- PostgreSQL
- Express
- JWT for authentication/authorization

## Setup

### Install the project requirements:

```
npm init
npm install
```

### Set up Database:

```
createdb jobly
createdb jobly_test
psql jobly < data.sql
```

## Usage

To start:

```
nodemon server.js
```

## Routes

### Companies

- GET /companies: List all companies, with optional filtering by employee count.
- POST /companies: Create a new company.
- GET /companies/
  : Retrieve details of a specific company.
- PUT /companies/
  : Update a specific company.
- DELETE /companies/
  : Delete a specific company.

### Jobs

- GET /jobs: List all jobs, with optional filtering.
- POST /jobs: Create a new job.
- GET /jobs/
  : Retrieve job details.
- PUT /jobs/
  : Update a specific job.
- DELETE /jobs/
  : Delete a specific job.

### Authentication

- POST /auth/register: Register a new user.
- POST /auth/token: Authenticate a user and return a token.

### Users

- GET /users: List all users.
- GET /users/
  : Retrieve user details.
- PATCH /users/
  : Update a user.
- DELETE /users/
  : Delete a user.

## Testing

```
jest -i
```
