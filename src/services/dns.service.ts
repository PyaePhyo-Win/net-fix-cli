import { execa } from "execa";
import { getPlatform } from "../utils/os.util.js";
import { getNetworkService } from "./network.service.js";

export async function fixDNS(): Promise<void> {
  const platform = getPlatform();

  if (platform === "darwin") {
    const service = await getNetworkService();
    // Set DNS for the active service on macOS
    await execa("networksetup", [
      "-setdnsservers",
      service,
      "8.8.8.8",
      "1.1.1.1",
    ]);
  } else if (platform === "linux") {
    // On Linux, this is a common way but might require sudo
    await execa("bash", [
      "-c",
      "echo 'nameserver 8.8.8.8' | sudo tee /etc/resolv.conf",
    ]);
  } else if (platform === "win32") {
    await execa("netsh", [
      "interface",
      "ip",
      "set",
      "dns",
      "name=\"Wi-Fi\"",
      "static",
      "8.8.8.8",
    ]);
  }
}

export async function flushDNS(): Promise<void> {
  const platform = getPlatform();

  if (platform === "darwin") {
    await execa("sudo", ["dscacheutil", "-flushcache"]);
    await execa("sudo", ["killall", "-HUP", "mDNSResponder"]);
  } else if (platform === "linux") {
    // Modern linux with systemd-resolved
    try {
      await execa("sudo", ["resolvectl", "flush-caches"]);
    } catch {
      await execa("sudo", ["systemd-resolve", "--flush-caches"]);
    }
  } else if (platform === "win32") {
    await execa("ipconfig", ["/flushdns"]);
  }
}
