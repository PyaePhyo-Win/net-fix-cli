import os from "os";

export type Platform = "darwin" | "linux" | "win32" | string;

export function getPlatform(): Platform {
  return os.platform();
}
