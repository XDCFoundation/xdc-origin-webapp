import React from "react";
import styled from "styled-components";

const Parent = styled.div`
  display: flex;
  flex-direction: column;
  width: 898px;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 720px;
  }

  @media (min-width: 0px) and (max-width: 767px) {
    width: 355px;
  }
`;
const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0px;
  opacity: 1;
  margin: 70px 0px 67px 0px;
`;
const CommonDiv = styled.div`
  position: relative;
  top: 0;
  left: 0;
`;

const Loader = styled.div`
  position: relative;
  top: 0;
  left: 0;
  border: 4px solid #f3f3f3;
  border-radius: 50%;
  border-top: 4px solid #3163f0;
  width: 298px;
  height: 298px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
`;
const XDCImg = styled.img`
  position: absolute;
  top: 104px;
  right: 104px;
  width: 89px;
  height: 89px;
  opacity: 1;
`;

export default function DeployContract(props) {
  return (
    <>
      <Parent>
        <Column>
          <CommonDiv>
            <Loader />
            <XDCImg alt="" src="/images/XDC_Blue_Logo.svg" />
          </CommonDiv>
        </Column>
      </Parent>
    </>
  );
}
