import React, { useEffect } from "react";
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
const Div = styled.div`
  display: flex;
  flex-direction: column;
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
const Text = styled.div`
  text-align: left;
  font: normal normal normal 16px/20px Inter;
  letter-spacing: 0px;
  color: #1f1f1f;
  opacity: 1;
  margin: 27px 0px 0px 25px;
`;

export default function DeployContract(props) {
  useEffect(() => {
    deployToken();
  }, []);

  const deployToken = () => {
    if (props.hasTokenId === true) {
      props.saveAsDraftbyEdit();
    } else {
      props.saveAsDraft();
    }
  };

  return (
    <>
      <Parent>
        <Column>
          <Div>
            <CommonDiv>
              <Loader />
              <XDCImg alt="" src="/images/XDC_Blue_Logo.svg" />
            </CommonDiv>
            <Text>Deploying to {props.networkVersion}...</Text>
          </Div>
        </Column>
      </Parent>
    </>
  );
}
