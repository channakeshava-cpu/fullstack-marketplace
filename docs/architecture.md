# System Architecture

## 1. Project Overview

This project is a full-stack e-commerce marketplace currently under development. The frontend uses React and Vite, the backend uses Java and Spring Boot, and PostgreSQL stores application data.

## 2. High-Level Architecture

```text
User
  |
  v
React Frontend (Vite)
  |
  | HTTP requests
  v
Spring Boot Backend
  |
  | JDBC / database integration
  v
PostgreSQL Database
```

## 3. Components

### Frontend
- Technology: React and Vite
- Development URL: `http://localhost:5173`
- API base URL is configured through `VITE_API_BASE_URL`.
- API requests are centralized in `src/api/client.js`.

### Backend
- Technology: Java 21 and Spring Boot
- Development port: `8081`
- Test endpoint: `GET /api/test`
- Health endpoint: `GET /actuator/health`

### Database
- Technology: PostgreSQL
- Database: `ecommerce_db`
- Schema migrations are managed by Flyway.
- The initial migration creates the `users` table.

## 4. Database Migration

The first migration is:

`V1__create_users.sql`

It creates a `users` table containing:
- `id`: generated primary key
- `name`: required name
- `email`: required, unique email address
- `created_at`: creation timestamp

Hibernate schema validation is enabled through `spring.jpa.hibernate.ddl-auto=validate`.

## 5. Configuration and Secrets

The backend database connection uses environment variables for configuration. Database passwords must not be committed to Git.

The frontend's local `.env` file is excluded from version control.

## 6. Current Limitations

- The test endpoint is for verifying frontend-to-backend connectivity.
- Production marketplace features are not implemented yet.
- Authentication, product catalog, cart, orders, and deployment remain future development tasks.

## 7. Future Architecture

As development progresses, this document will be updated to reflect the implemented API layers, domain models, authentication and authorization, testing strategy, deployment, and operational monitoring.