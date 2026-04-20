import chalk from "chalk";

export const logger = {
  info: (msg: string) => console.log(chalk.blue(msg)),
  success: (msg: string) => console.log(chalk.green(`✔ ${msg}`)),
  warn: (msg: string) => console.log(chalk.yellow(`⚠ ${msg}`)),
  error: (msg: string) => console.log(chalk.red(`✖ ${msg}`)),
  dim: (msg: string) => console.log(chalk.gray(msg)),
  bold: (msg: string) => console.log(chalk.bold(msg)),
  cyan: (msg: string) => console.log(chalk.cyan(msg)),
  magenta: (msg: string) => console.log(chalk.magenta(msg)),
  yellow: (msg: string) => console.log(chalk.yellow(msg)),
  log: (msg: string) => console.log(msg),
};
