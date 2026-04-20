#!/usr/bin/env node

import { Command } from "commander";
import { runCheck } from "./commands/check.command.js";
import { runFix } from "./commands/fix.command.js";
import { logger } from "./utils/logger.js";
import chalk from "chalk";
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
process.on("unhandledRejection", (error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  logger.error(`Unexpected error: ${message}`);
  process.exit(1);
});

if (!process.argv.slice(2).length) {
  logger.log("");
  logger.cyan(chalk.bold("  _   _      _     _____ _      "));
  logger.cyan(chalk.bold(" | \\ | | ___| |_  |  ___(_)_  __"));
  logger.cyan(chalk.bold(" |  \\| |/ _ \\ __| | |_  | \\ \\/ /"));
  logger.cyan(chalk.bold(" | |\\  |  __/ |_  |  _| | |>  < "));
  logger.cyan(chalk.bold(" |_| \\_|\\___|\\__| |_|   |_/_/\\_\\"));
  logger.log("");
  logger.bold(`  Welcome to NetFix CLI v${packageJson.version}`);
  logger.dim("  A professional tool to diagnose and fix network/DNS issues");
  logger.log("");
  logger.yellow("  Usage:");
  logger.log("    $ netfix check    Check network and DNS status");
  logger.log("    $ netfix fix      Fix common DNS issues");
  logger.log("");
  logger.dim("  Run 'netfix --help' for more information.");
  logger.log("");
  process.exit(0);
}

program.parse(process.argv);
