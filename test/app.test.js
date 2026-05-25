const request = require("supertest");
const app = require("../src/app");

describe("GET /", () => {
  it("returns ok status", async () => {
    const res = await request(app).get("/");
    eexpect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok");
  });
});
test("GET /health returns uptime value", async () => {
  const res = await request(app).get("/health");

  expect(res.statusCode).toBe(200);
  expect(res.body.status).toBe("healthy");
});

test("GET /health returns uptime value", async () => {
  const res = await request(app).get("/health");

  expect(res.body).toHaveProperty("uptime");
  expect(typeof res.body.uptime).toBe("number");
});
