import { describe, it, expect } from "vitest";
import userApi from "../services/UserApi";

describe("userApi", () => {
  it("useLoginAPI gọi http.post và dữ liệu đúng khi yêu cầu http thành công", async () => {
    // Arrange
    const loginData = { username: "admin", password: "Abc@12345" };

    // Act
    const response = await userApi.useLoginAPI(loginData);

    // Assert
    expect(response).toBeInstanceOf(Object);
  });

  it("useLoginAPI gọi http.post và trả về đối tượng lỗi khi yêu cầu http thất bại", async () => {
    // Arrange
    const loginData = { username: "admin1", password: "Abc@123451" };

    // Act
    const response = await userApi.useLoginAPI(loginData);

    // Assert
    expect(response.error).toBeInstanceOf(Error);
  });
});
