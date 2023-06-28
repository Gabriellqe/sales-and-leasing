const request = require("supertest");
const app = require("../app");

describe("Autenticación", () => {
  it("Debería permitir iniciar sesión con credenciales válidas", async () => {
    const response = await request(app)
      .post("/login")
      .send({ username: "usuario", password: "contraseña" });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
  });

  it("Debería devolver un error al intentar iniciar sesión con credenciales inválidas", async () => {
    const response = await request(app)
      .post("/login")
      .send({ username: "usuario", password: "contraseña_incorrecta" });

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("error");
  });

  it("Debería devolver un error al intentar acceder a una ruta protegida sin autenticación", async () => {
    const response = await request(app).get("/ruta_protegida");

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("error");
  });

  it("Debería permitir acceder a una ruta protegida con autenticación válida", async () => {
    // Obtener un token válido para autenticación
    const loginResponse = await request(app)
      .post("/login")
      .send({ username: "usuario", password: "contraseña" });

    const token = loginResponse.body.token;

    // Hacer una solicitud a la ruta protegida con el token
    const response = await request(app)
      .get("/ruta_protegida")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("data");
  });
});
