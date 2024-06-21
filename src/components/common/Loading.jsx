// ** Core packages
import React from "react";
import styled from "styled-components";
import { Spin } from "antd";

// Styled Loading component
const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoadingText = styled.p`
  margin-top: 16px;
  color: #1677ff;
`;

function Loading() {
  return (
    <LoadingContainer>
      <Spin size="large" />
      <LoadingText>Loading...</LoadingText>
    </LoadingContainer>
  );
}

export default Loading;
