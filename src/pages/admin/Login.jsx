import { useForm, Controller } from "react-hook-form";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";

// Ant design
const { Title } = Typography;

function Login() {
  const navigate = useNavigate();

  // React hook form
  const { control, handleSubmit } = useForm({});

  // Event Handlers
  const onSubmit = async (data) => {
    console.log(data);
    navigate("/admin/add-product");
  };

  return (
    <Row
      justify="center"
      style={{
        width: "100%",
        height: "60vh",
        padding: "20px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        background: "var(--secondary-bg-color)",
      }}
    >
      <Col xs={22} sm={20} md={10} lg={8} xl={6}>
        <Title
          level={5}
          style={{
            marginBottom: "0",
            background: "var(--color-gray)",
            padding: "5px 15px",
            borderTop: "2px solid var(--color-border)",
            borderLeft: "2px solid var(--color-border)",
            borderRight: "2px solid var(--color-border)",
            borderBottom: "none",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
        >
          Please sign in
        </Title>
        <Form
          onFinish={handleSubmit(onSubmit)}
          layout="vertical"
          style={formStyle}
        >
          <Controller
            name="username"
            control={control}
            rules={{ required: "Username is required" }}
            render={({ field, fieldState: { error } }) => (
              <Form.Item
                validateStatus={error ? "error" : ""}
                help={error?.message}
                style={{ marginBottom: "16px" }}
              >
                <Input
                  {...field}
                  placeholder="User Name"
                  onChange={(e) => {
                    field.onChange(e.target.value.trim());
                  }}
                  style={{
                    border: "2px solid var(--color-border)",
                    fontWeight: "500",
                  }}
                />
              </Form.Item>
            )}
          />

          <Controller
            name="password"
            control={control}
            rules={{ required: "Password is required" }}
            render={({ field, fieldState: { error } }) => (
              <Form.Item
                validateStatus={error ? "error" : ""}
                help={error?.message}
                style={{ marginBottom: "16px" }}
              >
                <Input.Password
                  {...field}
                  placeholder="Password"
                  onChange={(e) => {
                    field.onChange(e.target.value.trim());
                  }}
                  visibilityToggle={false}
                  style={{
                    border: "2px solid var(--color-border)",
                    fontWeight: "500",
                  }}
                />
              </Form.Item>
            )}
          />

          <Form.Item style={{ marginBottom: 0 }}>
            <Button
              htmlType="submit"
              size="large"
              style={{
                background: "var(--color-green)",
                color: "var(--color-white)",
                width: "100%",
              }}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

const formStyle = {
  background: "var(--white-color)",
  height: "auto",
  borderBottomLeftRadius: "5px",
  borderBottomRightRadius: "5px",
  padding: "15px",
  border: "2px solid var(--color-border)",
  lineHeight: "none !important",
};

export default Login;
