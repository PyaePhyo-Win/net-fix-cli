# NetFix CLI 🌐

A professional, cross-platform CLI tool built with **TypeScript** and Node.js to diagnose and fix network and DNS issues autonomously.

## ✨ Features

- **🛡️ Type Safe**: Entirely rewritten in TypeScript for better maintainability and reliability.
- **🔍 Network Diagnosis**: Checks for both physical internet connectivity and DNS resolution.
- **🛠️ Automated Fix**: Automatically configures high-performance DNS (Google DNS/Cloudflare) and flushes system DNS caches.
- **📡 Dynamic Interface Detection**: Automatically detects active network services (like Wi-Fi or Ethernet) on macOS for robust configuration.
- **💻 Cross-Platform**: Supports macOS, Linux, and Windows.
- **🎨 Modern UI**: Uses industry-standard spinners (Ora) and color-coded logging (Chalk) for a polished UX.
- **🏗️ Clean Architecture**: Built with separation of concerns (Services, Commands, Utils) using Commander.js.
- **🧪 Tested**: Includes unit tests powered by Jest and `ts-jest` to ensure reliability.

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

## 🧪 Testing

This project uses Jest with `ts-jest` for unit testing. To run the tests:

```bash
npm test
```

## 🏗️ Architecture

- `src/index.ts`: Entry point and `commander` subcommand definitions.
- `src/commands/`: Command action logic and UX handling.
- `src/services/`: Core business logic (Network pings, interface detection).
- `src/utils/`: Reusable helpers (Logging, OS detection).
- `dist/`: Compiled JavaScript output for production.
- `src/tests/`: Unit tests using Jest.

## 📦 Tech Stack

- **TypeScript**: Static typing for robust code.
- **Commander.js**: Industry-standard CLI UX.
- **Jest**: Robust testing framework.
- **Execa**: Secure process execution.
- **Ora**: Elegant terminal spinners.
- **Chalk**: Terminal string styling.

---
Built with ❤️ for better connectivity.
