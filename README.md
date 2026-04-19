# NetFix CLI 🌐

A professional, cross-platform CLI tool built with **TypeScript** and Node.js to diagnose and fix network and DNS issues autonomously.

## ✨ Features

- **🛡️ Type Safe**: Entirely rewritten in TypeScript for better maintainability and reliability.
- **🔍 Network Diagnosis**: Checks for both physical internet connectivity and DNS resolution.
- **🛠️ Automated Fix**: Automatically configures high-performance DNS (Google DNS/Cloudflare) and flushes system DNS caches.
- **📡 Dynamic Interface Detection**: Automatically detects active network services (like Wi-Fi or Ethernet) on macOS for robust configuration.
- **🔄 Auto-Update**: Notifies users when a new version is available on npm.
- **🎨 Modern UI**: Uses industry-standard spinners (Ora) and color-coded logging (Chalk) for a polished UX.
- **🏗️ Clean Architecture**: Built with separation of concerns using Commander.js.
- **🧪 Tested & Linted**: High code quality maintained with Jest, ESLint, and GitHub Actions (CI/CD).

## 📋 Prerequisites

- **Node.js**: v20.12.0 or higher.

## 🚀 Installation & Usage

You can run NetFix directly without installation using `npx`:

```bash
npx net-fix-cli check
```

Or install it globally:

```bash
npm install -g net-fix-cli
netfix check
```

### Commands

#### Check Network Status
```bash
netfix check
```

#### Fix DNS Issues
```bash
netfix fix
```

> **Note:** Fixing DNS or flushing caches may require administrator/sudo privileges depending on your operating system.

## 🧪 Development

### Running Tests
```bash
npm test
```

### Linting
```bash
npm run lint
```

### Building
```bash
npm run build
```

## 🏗️ Architecture

- `src/index.ts`: Entry point, update checks, and command routing.
- `src/commands/`: Command implementations and user feedback logic.
- `src/services/`: System-level operations (Pings, DNS settings, interface detection).
- `src/utils/`: Shared utilities (Logging, OS detection).
- `.github/workflows/`: CI/CD pipeline configuration.

## 📦 Tech Stack

- **TypeScript**: Static typing for robust code.
- **Commander.js**: CLI command framework.
- **Jest**: Unit testing.
- **ESLint**: Code quality linting.
- **Execa**: System command execution.
- **Update-Notifier**: Version update checks.
- **Ora & Chalk**: CLI aesthetics.

---
Built with ❤️ for better connectivity.
