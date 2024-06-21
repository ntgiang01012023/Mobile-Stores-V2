import { useForm, Controller } from "react-hook-form";
import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Spin,
  Typography,
  notification,
} from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Cookies from "js-cookie";
import { login } from "../../stores/thunks/User/UserThunks";

// Ant design
const { Title } = Typography;

function Login() {
  // React hook form
  const { control, handleSubmit } = useForm({});

  // Redux state
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Local state
  const [loading, setLoading] = useState(false);

  // Event Handlers
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await dispatch(login(data));

      if (response.data) {
        const token = response.data;
        Cookies.set("token", token);
        navigate("/admin/add-product");
      } else {
        notification.error({
          message: "Error Login",
          description: `${response}`,
        });
      }
    } catch (error) {
      notification.error({
        message: "Server Error",
        description:
          "Server failed to fulfill a valid request due to an error with server.",
      });
    } finally {
      setLoading(false);
    }
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
              icon={loading ? <Spin /> : null}
              loading={loading}
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
