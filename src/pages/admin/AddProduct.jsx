import {
  Layout,
  Row,
  Typography,
  Button,
  Form,
  Input,
  Radio,
  Col,
  InputNumber,
} from "antd";
import styled from "styled-components";
import { Controller, useForm } from "react-hook-form";

// Ant design
const { Content } = Layout;
const { Title } = Typography;

// Styled components
const CustomContent = styled(Content)`
  background-color: var(--color-white);
  width: 100%;
  min-height: calc(100vh - 150px);
  padding: 30px 30px;
`;

const CustomLabel = styled.label`
  font-weight: bold;
`;

function AddProduct() {
  // React hook form
  const { control, handleSubmit } = useForm({});

  // Event Handlers
  const onSubmit = (data) => {
    console.log(data);
  };

  // Validation rules
  const commonFieldRules = {
    required: "This field is required.",
    maxLength: { value: 255, message: "Maximum length is 255 characters." },
  };

  const numberFieldRules = {
    ...commonFieldRules,
    pattern: {
      value: /^[0-9]+$/,
      message: "Please enter a valid non-negative number.",
    },
    validate: (value) =>
      value >= 0 || "Value must be greater than or equal to 0",
  };

  const conditionRule = {
    required: "Please select a condition.",
  };

  return (
    <>
      <CustomContent>
        <Row>
          <Title
            level={4}
            style={{
              borderBottom: "2px solid var(--color-gray)",
              width: "100%",
              padding: "3px 0",
            }}
            size="large"
          >
            Add new product
          </Title>
        </Row>
        <Row>
          <Col xs={24} sm={20} md={12} lg={8} xl={8} xxl={14}>
            <Form colon={false} onFinish={handleSubmit(onSubmit)}>
              <Controller
                name="productName"
                control={control}
                rules={commonFieldRules}
                render={({ field, fieldState: { error } }) => (
                  <Form.Item
                    label={<CustomLabel>Product Name</CustomLabel>}
                    validateStatus={error ? "error" : ""}
                    help={error?.message}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                  >
                    <Input
                      {...field}
                      style={{
                        border: "2px solid var(--color-border2)",
                        borderRadius: 0,
                      }}
                    />
                  </Form.Item>
                )}
              />

              <Controller
                name="unitPrice"
                control={control}
                rules={numberFieldRules}
                render={({ field, fieldState: { error } }) => (
                  <Form.Item
                    label={<CustomLabel>Unit Price</CustomLabel>}
                    validateStatus={error ? "error" : ""}
                    help={error?.message}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                  >
                    <InputNumber
                      {...field}
                      style={{
                        border: "2px solid var(--color-border2)",
                        borderRadius: 0,
                        width: "100%",
                      }}
                    />
                  </Form.Item>
                )}
              />

              <Controller
                name="unitInStock"
                control={control}
                rules={numberFieldRules}
                render={({ field, fieldState: { error } }) => (
                  <Form.Item
                    label={<CustomLabel>Unit In Stock</CustomLabel>}
                    validateStatus={error ? "error" : ""}
                    help={error?.message}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                  >
                    <InputNumber
                      {...field}
                      style={{
                        border: "2px solid var(--color-border2)",
                        borderRadius: 0,
                        width: "100%",
                      }}
                    />
                  </Form.Item>
                )}
              />

              <Controller
                name="desciption"
                control={control}
                rules={commonFieldRules}
                render={({ field, fieldState: { error } }) => (
                  <Form.Item
                    label={<CustomLabel>Desciption</CustomLabel>}
                    validateStatus={error ? "error" : ""}
                    help={error?.message}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                  >
                    <Input.TextArea
                      {...field}
                      style={{
                        border: "2px solid var(--color-border2)",
                        borderRadius: 0,
                      }}
                    />
                  </Form.Item>
                )}
              />

              <Controller
                name="manufacturer"
                control={control}
                rules={commonFieldRules}
                render={({ field, fieldState: { error } }) => (
                  <Form.Item
                    label={<CustomLabel>Manufacturer</CustomLabel>}
                    validateStatus={error ? "error" : ""}
                    help={error?.message}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                  >
                    <Input
                      {...field}
                      style={{
                        border: "2px solid var(--color-border2)",
                        borderRadius: 0,
                      }}
                    />
                  </Form.Item>
                )}
              />

              <Controller
                name="category"
                control={control}
                rules={commonFieldRules}
                render={({ field, fieldState: { error } }) => (
                  <Form.Item
                    label={<CustomLabel>Category</CustomLabel>}
                    validateStatus={error ? "error" : ""}
                    help={error?.message}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                  >
                    <Input
                      {...field}
                      style={{
                        border: "2px solid var(--color-border2)",
                        borderRadius: 0,
                      }}
                    />
                  </Form.Item>
                )}
              />

              <Controller
                name="condition"
                control={control}
                rules={conditionRule}
                render={({ field, fieldState: { error } }) => (
                  <Form.Item
                    label={<CustomLabel>Condition</CustomLabel>}
                    validateStatus={error ? "error" : ""}
                    help={error?.message}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                  >
                    <Radio.Group {...field}>
                      <Radio value="New">New</Radio>
                      <Radio value="Old">Old</Radio>
                      <Radio value="Refurbished">Refurbished</Radio>
                    </Radio.Group>
                  </Form.Item>
                )}
              />

              <Controller
                name="productImage"
                control={control}
                render={({ field }) => (
                  <Form.Item
                    label={<CustomLabel>Product Image File</CustomLabel>}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                  >
                    <input
                      type="file"
                      onChange={(e) => {
                        field.onChange(e.target.files[0]);
                      }}
                    />
                  </Form.Item>
                )}
              />

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button
                  htmlType="submit"
                  size="large"
                  style={{
                    background: "var(--color-green)",
                    color: "var(--color-white)",
                    borderRadius: "5px",
                  }}
                >
                  Add Product
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </CustomContent>
    </>
  );
}

export default AddProduct;
