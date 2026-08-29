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
