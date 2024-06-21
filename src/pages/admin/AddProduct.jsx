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
  Select,
  notification,
} from "antd";
import styled from "styled-components";
import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";
import { fetchAllManufacturers } from "../../stores/thunks/Manufacturer/ManufacturerThunks";
import { fetchAllCategories } from "../../stores/thunks/Category/CategoryThunks";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addProduct } from "../../stores/thunks/Product/ProductThunks";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// Ant design
const { Content } = Layout;
const { Title } = Typography;
const { Option } = Select;

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
  const { control, handleSubmit, reset } = useForm({});

  // Redux state
  const dispatch = useDispatch();
  const manufacturerList = useSelector((state) => state.manufacturer.list);
  const categoryList = useSelector((state) => state.category.list);

  // Local state
  const [selectedImage, setSelectedImage] = useState(null);

  const resetFileInput = () => {
    const fileInput = document.getElementById("imageInput");
    if (fileInput) {
      fileInput.value = null;
    }
    setSelectedImage(null);
  };

  // Event Handlers
  const onSubmit = async (data) => {
    const formData = new FormData();

    // Append other form data fields
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("quantity", data.quantity);
    formData.append("des", data.des);
    formData.append("manu", data.manu);
    formData.append("cate", data.cate);
    formData.append("condition", data.condition);

    if (selectedImage) {
      formData.append("image", selectedImage);
    }

    try {
      const response = await dispatch(addProduct(formData));
      // console.log(response);
      if (response.status === 200) {
        notification.success({
          message: "Success",
          description: "Add product successfully",
        });
      } else {
        notification.error({
          message: "Error",
          description: "Add product failed",
        });
      }

      reset();
      resetFileInput();
    } catch (error) {
      console.log(error);
    }
  };

  // Validation rules
  const commonFieldRules = {
    required: "This field is required.",
    maxLength: { value: 100000, message: "Maximum length is 255 characters." },
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

  const imageRule = {
    required: "Please select an image.",
    validate: {
      isValid: (value) => value !== null || "Please select an image.",
    },
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  useEffect(() => {
    dispatch(fetchAllManufacturers());
    dispatch(fetchAllCategories());
  }, [dispatch]);

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
        <Row justify={"center"}>
          <Col xs={24} sm={20} md={12} lg={10} xl={10} xxl={14}>
            <Form colon={false} onFinish={handleSubmit(onSubmit)}>
              <Controller
                name="name"
                control={control}
                rules={commonFieldRules}
                render={({ field, fieldState: { error } }) => (
                  <Form.Item
                    label={<CustomLabel>Product Name</CustomLabel>}
                    validateStatus={error ? "error" : ""}
                    help={error?.message}
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 20 }}
                  >
                    <Input {...field} />
                  </Form.Item>
                )}
              />

              <Controller
                name="price"
                control={control}
                rules={numberFieldRules}
                render={({ field, fieldState: { error } }) => (
                  <Form.Item
                    label={<CustomLabel>Unit Price</CustomLabel>}
                    validateStatus={error ? "error" : ""}
                    help={error?.message}
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 20 }}
                  >
                    <InputNumber
                      {...field}
                      style={{
                        width: "100%",
                      }}
                    />
                  </Form.Item>
                )}
              />

              <Controller
                name="quantity"
                control={control}
                rules={numberFieldRules}
                render={({ field, fieldState: { error } }) => (
                  <Form.Item
                    label={<CustomLabel>Unit In Stock</CustomLabel>}
                    validateStatus={error ? "error" : ""}
                    help={error?.message}
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 20 }}
                  >
                    <InputNumber
                      {...field}
                      style={{
                        width: "100%",
                      }}
                    />
                  </Form.Item>
                )}
              />

              <Controller
                name="des"
                control={control}
                rules={commonFieldRules}
                render={({ field, fieldState: { error } }) => (
                  <Form.Item
                    label={<CustomLabel>Desciption</CustomLabel>}
                    validateStatus={error ? "error" : ""}
                    help={error?.message}
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 20 }}
                    style={{
                      height: "400px",
                    }}
                  >
                    {/* <Input.TextArea {...field} /> */}

                    <ReactQuill
                      {...field}
                      theme="snow"
                      modules={modules}
                      formats={formats}
                      style={{
                        height: "335px",
                      }}
                    />
                  </Form.Item>
                )}
              />

              <Controller
                name="manu"
                control={control}
                rules={commonFieldRules}
                render={({ field, fieldState: { error } }) => (
                  <Form.Item
                    label={<CustomLabel>Manufacturer</CustomLabel>}
                    validateStatus={error ? "error" : ""}
                    help={error?.message}
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 20 }}
                  >
                    <Select
                      {...field}
                      showSearch
                      placeholder="Select a manufacturer"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.children ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      filterSort={(optionA, optionB) =>
                        (optionA?.children ?? "")
                          .toLowerCase()
                          .localeCompare(
                            (optionB?.children ?? "").toLowerCase()
                          )
                      }
                    >
                      {manufacturerList.map((manufacturer) => (
                        <Option key={manufacturer.id} value={manufacturer.id}>
                          {manufacturer.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                )}
              />

              <Controller
                name="cate"
                control={control}
                rules={commonFieldRules}
                render={({ field, fieldState: { error } }) => (
                  <Form.Item
                    label={<CustomLabel>Category</CustomLabel>}
                    validateStatus={error ? "error" : ""}
                    help={error?.message}
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 20 }}
                  >
                    <Select
                      {...field}
                      showSearch
                      placeholder="Select a category"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.children ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      filterSort={(optionA, optionB) =>
                        (optionA?.children ?? "")
                          .toLowerCase()
                          .localeCompare(
                            (optionB?.children ?? "").toLowerCase()
                          )
                      }
                    >
                      {categoryList.map((category) => (
                        <Option key={category.id} value={category.id}>
                          {category.name}
                        </Option>
                      ))}
                    </Select>
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
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 20 }}
                  >
                    <Radio.Group {...field}>
                      <Radio value="0">New</Radio>
                      <Radio value="1">Old</Radio>
                      <Radio value="2">Refurbished</Radio>
                    </Radio.Group>
                  </Form.Item>
                )}
              />

              <Controller
                name="image"
                control={control}
                rules={imageRule}
                render={({ field, fieldState: { error } }) => (
                  <Form.Item
                    label={<CustomLabel>Product Image File</CustomLabel>}
                    validateStatus={error ? "error" : ""}
                    help={error?.message}
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 20 }}
                  >
                    <input
                      id="imageInput"
                      type="file"
                      onChange={(e) => {
                        setSelectedImage(e.target.files[0]);
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
