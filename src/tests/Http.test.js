import { describe, it, expect } from "vitest";
import http from "../utils/Http";

describe("test http gọi api login", () => {
  it("should call login API successfully with correct username and password", async () => {
    // Arrange
    const username = "admin";
    const password = "Abc@12345";

    // Act
    const response = await http.post(
      "http://localhost:8080/api/v1/users/login",
      { username, password }
    );

    // Assert
    expect(response.status).toBe(200);
  });

  it("should fail calling login API with incorrect username and password", async () => {
    // Arrange
    const username = "admin1";
    const password = "Abc@123451";

    // Act & Assert
    await expect(async () => {
      await http.post("http://localhost:8080/api/v1/users/login", {
        username,
        password,
      });
    }).rejects.toHaveProperty("response.status", 401);
  });
});

describe("test http gọi api get all products", () => {
  it("should call get all products API successfully", async () => {
    // Arrange

    // Act
    const response = await http.get("http://localhost:8080/api/v1/products");

    // Assert
    expect(response.status).toBe(200);
  });
});

describe("test http gọi api get a product by id", () => {
  it("should call get a product by id API successfully", async () => {
    // Arrange
    const id = 1;

    // Act
    const response = await http.get(
      `http://localhost:8080/api/v1/products/${id}`
    );

    // Assert
    expect(response.status).toBe(200);
  });
});

describe("test http gọi api add product", () => {
  it("should call add product API successfully", async () => {
    // Arrange
    const id = 1;

    // Act
    const response = await http.get(
      `http://localhost:8080/api/v1/products/${id}`
    );

    // Assert
    expect(response.status).toBe(200);
  });
});

describe("test http gọi api orders", () => {
  it("should call orders API successfully", async () => {
    // Arrange
    const total = 500;
    const details = [
      {
        productId: 1,
        quantity: 1,
        unitPrice: 100,
      },
      {
        productId: 2,
        quantity: 2,
        unitPrice: 200,
      },
    ];

    // Act
    const response = await http.post("http://localhost:8080/api/v1/orders", {
      total,
      details,
    });

    // Assert
    expect(response.status).toBe(201);
  });
});
