#  GlitchCraft Homelab

My first hands-on practice project for learning **self-hosting, Docker, Nginx, reverse proxies, networking, and server infrastructure**.

This project is built locally on my Apple Silicon Mac as a learning environment. The goal is to gradually evolve it into a real personal homelab and self-hosting setup.

---

##  Project Goals

- Learn how web servers work
- Understand Docker and containers
- Learn Docker Compose
- Configure Nginx
- Understand reverse proxies
- Host multiple applications
- Learn DNS and domains
- Add HTTPS/SSL
- Practice Git and GitHub
- Eventually deploy the setup on a VPS

---

##  Current Tech Stack

- macOS
- Docker
- Docker Compose
- Nginx
- Node.js
- Git
- GitHub

---

##  Architecture

```text
                         Browser
                            │
                            ▼
                    ┌───────────────┐
                    │     Nginx     │
                    │ Reverse Proxy │
                    │     :8080     │
                    └───────┬───────┘
                            │
                   ┌────────┴────────┐
                   │                 │
                   ▼                 ▼
             ┌──────────┐      ┌──────────┐
             │  App 1   │      │  App 2   │
             │  Node.js │      │  Node.js │
             │   :3000  │      │   :3001  │
             └──────────┘      └──────────┘

## 🏗️ Architecture

```text
                    Browser
                       │
                       ▼
              ┌─────────────────┐
              │      Nginx      │
              │ Reverse Proxy   │
              │     :8080       │
              └────────┬────────┘
                       │
              ┌────────┴────────┐
              ▼                 ▼
        ┌───────────┐     ┌───────────┐
        │ Rahil App │     │ Rahil App2│
        │   :3000   │     │   :3001   │
        └───────────┘     └───────────┘

              Infrastructure
              ┌────────┴────────┐
              ▼                 ▼
       ┌──────────────┐   ┌──────────────┐
       │ PostgreSQL   │   │    Redis     │
       │    :5432     │   │    :6379     │
       └──────────────┘   └──────────────┘
Client
  │
  ▼
Nginx :8080
  │
  ├── /app1/ ──► Rahil App :3000
  │
  └── /app2/ ──► Rahil App2 :3001
| Service       | Technology    | Port | Purpose                  |
| ------------- | ------------- | ---: | ------------------------ |
| Reverse Proxy | Nginx         | 8080 | Routes incoming requests |
| App 1         | Node.js       | 3000 | First application        |
| App 2         | Node.js       | 3001 | Second application       |
| Database      | PostgreSQL 16 | 5432 | Data storage             |
| Cache         | Redis 7       | 6379 | In-memory cache          |

Reliability
Docker Compose manages the services
Health checks verify service availability
PostgreSQL uses pg_isready
Redis connectivity uses redis-cli ping
Nginx routes traffic between applications
