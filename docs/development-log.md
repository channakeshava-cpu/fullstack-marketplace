# Development Log

This document records verified project milestones and significant engineering decisions.

## Milestone 1 — Project Initialization

**Status:** Completed

- Created a monorepo containing `backend/` and `frontend/`.
- Initialized Git and created the `main` branch.
- Added a root `.gitignore`.
- Published the initial commit to GitHub.

## Milestone 2 — Backend and Database Setup

**Status:** Completed

- Set up the Spring Boot backend.
- Configured PostgreSQL database connectivity.
- Added Flyway migration `V1__create_users.sql`.
- Verified that the initial database migration succeeded.
- Configured the backend to run on port `8081`.

## Milestone 3 — Frontend and Backend Connectivity

**Status:** Completed

- Created the React application using Vite.
- Configured the API base URL using `VITE_API_BASE_URL`.
- Added a reusable API request helper.
- Implemented `GET /api/test` for connectivity testing.
- Verified that the frontend can communicate with the backend.

## Milestone 4 — GitHub and Project Documentation

**Status:** In progress

- Published the initial project commit.
- Added the root `README.md`.
- Created `docs/architecture.md`.
- Created `docs/development-log.md`.

## Engineering Practices

- Use Git commits to record meaningful changes.
- Keep credentials and secrets out of source control.
- Verify changes before moving to the next milestone.
- Document architectural decisions and important technical challenges.
- Update this log as milestones are completed and tested.

## Upcoming Work

- Finalize and publish the documentation.
- Review the backend package structure.
- Design the first actual marketplace feature before implementing it.
- Add automated tests as application functionality grows.