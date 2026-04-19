import ora from "ora";
import { checkInternet, checkDNS } from "../services/network.service.js";
import { logger } from "../utils/logger.js";

export async function runCheck(): Promise<void> {
  const spinner = ora("Checking network status...").start();

  try {
    const internet = await checkInternet();
    
    if (!internet) {
      spinner.fail("No internet connection detected.");
      logger.error("Please check your router or physical connection.");
      return;
    }

    spinner.text = "Internet connection OK. Checking DNS...";
    const dns = await checkDNS();

    if (dns) {
      spinner.succeed("Everything looks good! Internet and DNS are working.");
    } else {
      spinner.warn("DNS issue detected.");
      logger.info("Try running 'netfix fix' to resolve this.");
    }
  } catch (error: any) {
    spinner.fail("An error occurred during check.");
    logger.error(error.message);
  }
}
