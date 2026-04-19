import { checkInternet } from "../services/network.service.js";

describe("Network Service", () => {
  test("checkInternet should return a boolean", async () => {
    const result = await checkInternet();
    expect(typeof result).toBe("boolean");
  });
});
