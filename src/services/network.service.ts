import { execa } from "execa";

export async function checkInternet(): Promise<boolean> {
  try {
    // Ping Google Public DNS with a 2-second timeout
    await execa("ping", ["-c", "2", "8.8.8.8"], { timeout: 2000 });
    return true;
  } catch {
    return false;
  }
}

export async function checkDNS(): Promise<boolean> {
  try {
    // Try to resolve google.com
    await execa("ping", ["-c", "2", "google.com"], { timeout: 2000 });
    return true;
  } catch {
    return false;
  }
}

export async function getNetworkService(): Promise<string> {
  try {
    const { stdout } = await execa("networksetup", ["-listallnetworkservices"]);
    const services = stdout.split("\n").filter((s: string) => s && !s.includes("*"));
    
    // Prefer Wi-Fi if it exists and is not disabled
    const wifi = services.find((s: string) => s.includes("Wi-Fi"));
    if (wifi) return wifi;

    // Fallback to the first available service
    return services[0] || "Wi-Fi";
  } catch {
    return "Wi-Fi";
  }
}
