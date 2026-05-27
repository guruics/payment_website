
ICS Website Development Playbook
1. Purpose
This document defines the architecture, standards, and roadmap for building future functionality for the ICS website, including APIs, authentication (Sign-on), and scalable SaaS features.


2. Architecture Overview
Frontend

Framework: Next.js (App Router)
Styling: Tailwind CSS
Pattern: Component-driven UI
Layout: Centralized in app/layout.tsx
Backend

API Layer: Next.js API routes (/app/api) or external microservices
Auth: JWT / OAuth-based authentication
Data Layer: Database (PostgreSQL / MongoDB)
Deployment

Hosting: Vercel / Azure
CI/CD: GitHub Actions


3. Folder Structure Standard

/app
  /api
  /solutions
  /login
  /dashboard
/components
/lib
/services
/hooks
/types




4. UI/UX Standards
Layout Rules

Navbar + Footer controlled ONLY in layout.tsx
Pages must NOT include layout elements
Design Principles

Use consistent grid (2x2 or 4-column)
Spacing: py-12, gap-6, max-w-*
Cards: rounded-xl + shadow + hover


5. Authentication (Sign-On Page)
Requirements

Email + Password login
Social login (Google, Microsoft)
Token-based authentication (JWT)
Suggested Flow

User submits credentials
API validates user
Server returns JWT token
Token stored in HTTP-only cookie
Redirect to dashboard
Example API Endpoint

POST /api/auth/login

Request:
{
  "email": "user@example.com",
  "password": "password"
}

Response:
{
  "token": "jwt-token"
}




6. API Design Standards
Principles

RESTful design
Stateless APIs
JSON responses only
Naming Convention

GET /api/payments
POST /api/payments
GET /api/users/{id}
Response Standard

{
  "success": true,
  "data": {},
  "error": null
}




7. State Management

Local state: React hooks
Global state: Context API (or Zustand later)


8. Security Guidelines

Use HTTPS only
Store tokens in HTTP-only cookies
Validate all API inputs
Rate limit APIs


9. Performance Guidelines

Use server components where possible
Lazy load heavy components
Optimize images


10. Roadmap
Phase 1

Homepage ✅
Solutions ✅
Layout system ✅
Phase 2

Authentication (Login/Signup)
API layer
Phase 3

Dashboard
Payment workflows
Phase 4

Multi-tenant SaaS features


11. Coding Standards

Use functional components
Use TypeScript everywhere
Use descriptive naming


12. Next Steps

Build Login Page
Implement Auth APIs
Add protected routes
Build Dashboard UI


This document should evolve as the platform grows.
