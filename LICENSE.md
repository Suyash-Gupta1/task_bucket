```markdown
# 🗂️ Task Bucket

A full-stack task management platform built for EDC. Designed for speed, modularity, and secure collaboration.

🔗 [Live Demo](https://task-bucket.vercel.app)

---

## 🧰 Tech Stack

| Layer      | Technology               |
|------------|--------------------------|
| Frontend   | React, Vite, Tailwind CSS|
| Backend    | Node.js, Express         |
| Validation | Custom logic + Middleware|
| Deployment | Vercel                   |

---

## 📁 Project Structure

```
task_bucket/
├── client/          # React frontend (Vite + Tailwind)
├── backend/         # Express backend with validation and rate limiting
├── CHANGELOG.md     # Feature history
├── LICENSE.md       # MIT License
├── MULTIPLE_DOMAINS_FEATURE.md # Notes on domain support
├── package.json     # Root config
└── .gitignore
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Subhadip006/task_bucket.git
cd task_bucket
```

### 2. Install dependencies

```bash
npm install
cd client && npm install
cd ../backend && npm install
```

### 3. Run locally

#### Frontend

```bash
cd client
npm run dev
```

#### Backend

```bash
cd backend
npm run start
```

---

## 🔐 Key Features

- ✅ **Input Validation**: Prevents malformed or malicious data
- 🛡️ **Rate Limiting**: Protects against abuse and spam
- 🔒 **Private/Public Tasks**: Toggle visibility for collaboration
- 💬 **Discussion Threads**: Commenting system for tasks
- 🌐 **Multi-Domain Support**: Configurable for multiple tenants

---

## 🧪 Scripts

| Location | Command         | Description                  |
|----------|------------------|------------------------------|
| client   | `npm run dev`    | Start Vite dev server        |
| client   | `npm run build`  | Build frontend for production|
| backend  | `npm run start`  | Start Express server         |

---

## 🌐 Deployment

This project is configured for **Vercel**. To deploy:

1. Push to GitHub
2. Connect repo to Vercel
3. Vercel auto-detects frontend via `client/` and builds using `vite.config.js`

---

## 📄 License

This project is licensed under the MIT License. See [`LICENSE.md`](./LICENSE.md) for details.

---

## 👥 Contributors

Built and maintained by [Subhadip006](https://github.com/Subhadip006) and collaborators.

---

```

Let me know if you'd like to add API documentation, environment variable setup, or contribution guidelines. I can also help generate a changelog or usage walkthrough if needed.
