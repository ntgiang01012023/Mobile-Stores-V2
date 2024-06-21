// ** Core packages
import React from "react";
import styled from "styled-components";
import { Alert } from "antd";

// ** Import icons
import { ExclamationCircleOutlined } from "@ant-design/icons";

// Styled component
const ErrorAlertContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px - 218px);
`;

function ErrorAlert({ error }) {
  return (
    <ErrorAlertContainer>
      <Alert
        type="error"
        message={error}
        showIcon
        icon={<ExclamationCircleOutlined style={{ fontSize: "26px" }} />}
        style={{ fontSize: "22px" }}
      />
    </ErrorAlertContainer>
  );
}

export default ErrorAlert;
