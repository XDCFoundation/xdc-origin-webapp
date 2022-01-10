import React, { useState } from "react";
import styled from "styled-components";
import BasicInfoPage from "./basicInformation";
import TokenomicsPage from "./tokenomics";
import AddFeaturesPage from "./addFeature";
import DeployContractPage from "./deployContract";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  background: #ecf0f7 0% 0% no-repeat padding-box;
  /* height: 1080px; */
`;

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

const Header = styled.div`
  text-align: left;
  font: normal normal 600 28px/34px Inter;
  letter-spacing: 0px;
  color: #1f1f1f;
  opacity: 1;
  padding: 20px 0px 0px 0px;
  @media (min-width: 0px) and (max-width: 767px) {
    font: normal normal 600 18px/21px Inter;
  }
`;

const Column = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0px;
  opacity: 1;
  margin: 20px 0px 67px 0px;
`;

const RowOne = styled.div`
  display: flex;
  flex-direction: row;
  /* padding: 10px 0px 10px 0px; */
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  width: 224.5px;
  border-bottom: 1px solid #f0f0f0;
  @media (min-width: 767px) and (max-width: 1024px) {
    width: 180.5px;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    /* width: 88.75px; */
  }
`;

const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  opacity: 1;
  border-left: 1px solid #f0f0f0;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 38px;
    padding: 0px 10px 0px 13px;
  }
`;

const Img = styled.img`
  display: flex;
  width: 23px;
  height: 24px;
  justify-content: center;
  align-items: center;
  opacity: 1;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 13px 0px 0px 0px;
  text-align: left;
  font: normal normal 600 17px/20px Inter;
  letter-spacing: 0px;
  color: #0089ff;
  opacity: 1;
`;

const TextOne = styled.div`
  font: normal normal normal 12px/15px Inter;
  letter-spacing: 0px;
  color: #4b4b4b;
  opacity: 1;
  @media (min-width: 0px) and (max-width: 767px) {
    display: none;
  }
`;

const ActiveTextOne = styled.div`
  font: normal normal normal 12px/15px Inter;
  letter-spacing: 0px;
  color: #0089ff;
  opacity: 1;
  @media (min-width: 0px) and (max-width: 767px) {
    display: none;
  }
`;

const TextTwo = styled.div`
  font: normal normal 600 17px/20px Inter;
  letter-spacing: 0px;
  color: #4b4b4b;
  opacity: 1;
  @media (min-width: 768px) and (max-width: 1024px) {
    white-space: nowrap;
    font: normal normal 600 16px/20px Inter;
    padding: 0px 10px 0px 0px;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    display: none;
  }
`;

const ActiveTextTwo = styled.div`
  font: normal normal 600 17px/20px Inter;
  letter-spacing: 0px;
  color: #0089ff;
  opacity: 1;
  @media (min-width: 768px) and (max-width: 1024px) {
    white-space: nowrap;
    font: normal normal 600 16px/20px Inter;
    padding: 0px 10px 0px 0px;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    /* white-space: nowrap; */
    font: normal normal 600 16px/20px Inter;
    padding: 0px 10px 0px 0px;
  }
`;

export default function CommonTab(props) {
  const [opt, setOpt] = useState("1");
  const tab = [
    {
      id: 1,
      step: "Step 1",
      image: "/images/ContractDetails.svg",
      image2: "/images/Selected-Circle.svg",
      name: "Basic Information",
    },
    {
      id: 2,
      step: "Step 2",
      image: "/images/Tokenomics.svg",
      image2: "/images/Selected-Circle.svg",
      name: "Tokenomics",
    },
    {
      id: 3,
      step: "Step 3",
      image: "/images/Features.svg",
      image2: "/images/Selected-Circle.svg",
      name: "Add Features",
    },
    {
      id: 4,
      step: "Step 4",
      image: "/images/Deploy.svg",
      image2: "/images/Selected-Circle.svg",
      name: "Deploy Contract",
    },
  ];

  return (
    <>
      <MainContainer>
        <Parent>
          <Header>Create XRC20 Token</Header>
          <Column>
            <RowOne>
              {tab.map((item) => {
                const TextOneActive = opt == item.id ? ActiveTextOne : TextOne;
                const TextTwoActive = opt == item.id ? ActiveTextTwo : TextTwo;
                return (
                  <>
                    <Div key={item.id}>
                      <ImageDiv
                        id={item.id}
                        onClick={(e) => setOpt(e.currentTarget.id)}
                      >
                        <Img
                          alt=""
                          src={item.image}
                        />
                      </ImageDiv>

                      <Description>
                        <TextOneActive
                          id={item.id}
                          onClick={(e) => setOpt(e.currentTarget.id)}
                        >
                          {item.step}
                        </TextOneActive>
                        <TextTwoActive
                          id={item.id}
                          onClick={(e) => setOpt(e.currentTarget.id)}
                        >
                          {item.name}
                        </TextTwoActive>
                      </Description>
                    </Div>
                  </>
                );
              })}
            </RowOne>
            {(() => {
              switch (opt) {
                case "1":
                  return <BasicInfoPage />;
                case "2":
                  return <TokenomicsPage />;
                case "3":
                  return <AddFeaturesPage />;
                case "4":
                  return <DeployContractPage />;
                default:
                  return ;
              }
            })()}
          </Column>
        </Parent>
      </MainContainer>
    </>
  );
}
