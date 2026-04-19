#!/usr/bin/env node

import { Command } from "commander";
import { runCheck } from "./commands/check.command.js";
import { runFix } from "./commands/fix.command.js";
import { logger } from "./utils/logger.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageJsonPath = path.join(__dirname, "../package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

import updateNotifier from "update-notifier";
updateNotifier({ pkg: packageJson }).notify();

const program = new Command();

program
  .name("netfix")
  .description("CLI tool to diagnose and fix network/DNS issues")
  .version(packageJson.version);

program
  .command("check")
  .description("Check network and DNS status")
  .action(runCheck);

program
  .command("fix")
  .description("Fix DNS issues")
  .action(runFix);

// Handle errors
process.on("unhandledRejection", (error: any) => {
  logger.error(`Unexpected error: ${error.message}`);
  process.exit(1);
});

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
