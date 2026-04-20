import ora from "ora";
import { checkInternet, checkDNS } from "../services/network.service.js";
import { fixDNS, flushDNS } from "../services/dns.service.js";
import { logger } from "../utils/logger.js";

export async function runFix(): Promise<void> {
  const spinner = ora("Diagnosing network issues...").start();

  try {
    const internet = await checkInternet();
    if (!internet) {
      spinner.fail("Cannot fix DNS without an internet connection.");
      logger.error("Please ensure your network is physically connected.");
      return;
    }

    const dns = await checkDNS();
    if (dns) {
      spinner.succeed("No DNS issues found. Your connection is already healthy.");
      return;
    }

    spinner.text = "Fixing DNS configuration...";
    await fixDNS();
    
    spinner.text = "Flushing DNS cache...";
    await flushDNS();

    spinner.text = "Verifying fix...";
    const result = await checkDNS();

    if (result) {
      spinner.succeed("DNS issues resolved successfully!");
    } else {
      spinner.fail("Automated fix failed.");
      logger.warn("You might need to manually configure your DNS settings.");
    }
  } catch (error: unknown) {
    spinner.fail("An error occurred while trying to fix DNS.");
    if (error instanceof Error) {
      logger.error(error.message);
    } else {
      logger.error("An unknown error occurred.");
    }
    logger.dim("Note: Some fix operations require administrator/sudo privileges.");
  }
}
