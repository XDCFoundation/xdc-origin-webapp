import React, { useState } from "react";
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
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0px;
  opacity: 1;
  margin: 0px 0px 67px 0px;
`;

const RowTwo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 34px 0px 0px 57px;

  @media (min-width: 0px) and (max-width: 1024px) {
    padding: 30px 0px 0px 17px;
  }
`;
const CommonRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px 0px 57px;

  @media (min-width: 0px) and (max-width: 1024px) {
    padding: 30px 0px 0px 18px;
  }
`;

const SpanOne = styled.div`
  text-align: left;
  font: normal normal 600 20px/24px Inter;
  letter-spacing: 0px;
  color: #1f1f1f;
  opacity: 1;

  @media (min-width: 0px) and (max-width: 767px) {
    font: normal normal 600 18px/21px Inter;
  }
`;
const SpanTwo = styled.div`
  text-align: left;
  font: normal normal normal 16px/20px Inter;
  letter-spacing: 0px;
  color: #4b4b4b;
  opacity: 1;

  @media (min-width: 0px) and (max-width: 767px) {
    font: normal normal normal 14px/17px Inter;
    padding: 10px 0px 0px 0px;
  }
`;

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 784px;
  height: 100px;
  margin: 23px 0px 20px 0px;
  background: #f0f2fc 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;

  @media (min-width: 0px) and (max-width: 767px) {
    width: 322px;
    height: 190px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 687px;
    height: 100px;
  }
`;

const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  opacity: 1;

  @media (min-width: 0px) and (max-width: 767px) {
    padding: 0px 13px 0px 13px;
  }
`;

const DescriptionDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  opacity: 1;
`;

const LabelDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  opacity: 1;
  padding: 15px 20px 0px 20px;

  @media (min-width: 0px) and (max-width: 767px) {
    padding: 15px 15px 10px 0px;
  }
`;

const HeadSpan = styled.div`
  text-align: left;
  font: normal normal 600 16px/20px Inter;
  letter-spacing: 0px;
  color: #1f1f1f;
  opacity: 1;
  margin-bottom: 6px;
`;

const ContentSpan = styled.div`
  text-align: left;
  font: normal normal normal 16px/20px Inter;
  letter-spacing: 0px;
  color: #4b4b4b;
  opacity: 1;
`;

const Input = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  margin-right: 12px;
  opacity: 1;

  @media (min-width: 0px) and (max-width: 767px) {
    width: 90px;
    height: 90px;
  }
`;

const ButtonsRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 74px 0px 60px 0px;

  @media (min-width: 0px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    padding: 37px 0px 30px 0px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 20px 0px 30px 0px;
  }
`;
const BackButton = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  width: 141px;
  height: 50px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  opacity: 1;

  @media (min-width: 0px) and (max-width: 767px) {
    justify-content: center;
    width: 322px;
    height: 42px;
    margin-bottom: 12px;
  }
`;
const BackImgDiv = styled.img`
  width: 15px;
  height: 15px;
  opacity: 1;

  @media (min-width: 0px) and (max-width: 767px) {
    margin: 0 8px 0px 8px;
  }
`;
const BackText = styled.div`
  text-align: right;
  font: normal normal medium 18px/21px Inter;
  letter-spacing: 0px;
  color: #4b4b4b;
  opacity: 1;

  @media (min-width: 0px) and (max-width: 767px) {
    margin: 0 8px 0px 8px;
  }
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 57px 0px 57px;

  @media (min-width: 0px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    padding: 0px 0px 20px 0px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 0px 17px 0px 17px;
  }
`;

const DeployButton = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  width: 150px;
  height: 50px;
  background: #3163f0 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;

  @media (min-width: 0px) and (max-width: 767px) {
    justify-content: center;
    width: 322px;
    height: 42px;
    margin-top: 12px;
  }
`;

const DeployText = styled.div`
  text-align: left;
  font: normal normal medium 18px/21px Inter;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;

  @media (min-width: 0px) and (max-width: 767px) {
    margin: 0 8px 0px 8px;
  }
`;

const SaveDraftButton = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  width: 150px;
  height: 50px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  opacity: 1;
  margin-right: 20px;

  @media (min-width: 0px) and (max-width: 767px) {
    justify-content: center;
    width: 322px;
    height: 42px;
    margin: 15px 0px 15px 0px;
  }
`;

const SaveDraftText = styled.div`
  text-align: left;
  font: normal normal medium 18px/21px Inter;
  letter-spacing: 0px;
  color: #4b4b4b;
  opacity: 1;

  @media (min-width: 0px) and (max-width: 767px) {
    margin: 0 8px 0px 8px;
  }
`;

const Check = styled.img`
  width: 25px;
  height: 25px;
  opacity: 1;
  margin: 12px 15px 0px 0px;
`;

export default function AddFeatures(props) {
  const [open, setOpen] = useState(true);

  const toggleImage = (e) => {
    setOpen(!open);
  };

  const imagesPath = {
    checkImage: "/images/Empty-Circle.svg",
    activeCheckImage: "/images/Selected-Circle.svg",
  };

  const getImageName = () => (open ? "checkImage" : "activeCheckImage");
  const imageName = getImageName();

  return (
    <>
      <Parent>
        <Column>
          <RowTwo>
            <SpanOne>Select Feature For Your Token</SpanOne>
            <SpanTwo>
              Choose the additional Functionality you want added to your smart
              contract code
            </SpanTwo>
          </RowTwo>

          <CommonRow>
            <RowDiv>
              <ImageDiv>
                <Img alt="" src={"/images/Pausable.svg"} />
              </ImageDiv>
              <DescriptionDiv>
                <LabelDiv id="1">
                  <HeadSpan>Pausable</HeadSpan>
                  <ContentSpan>
                    Keeps the token’s “totalSupply” value up to date, Useful in
                    case someone wants to burn some tokens to reduce the supply
                    for their project or burn unsold tokens.
                  </ContentSpan>
                </LabelDiv>
                <Check
                  id="1"
                  src={imagesPath[imageName]}
                  onClick={(e) => toggleImage(e.currentTarget.id)}
                />
              </DescriptionDiv>
            </RowDiv>

            <RowDiv>
              <ImageDiv>
                <Img alt="" src={"/images/Burnable.svg"} />
              </ImageDiv>
              <DescriptionDiv>
                <LabelDiv id="2">
                  <HeadSpan>Burnable</HeadSpan>
                  <ContentSpan>
                    Keeps the token’s “totalSupply” value up to date, Useful in
                    case someone wants to burn some tokens to reduce the supply
                    for their project or burn unsold tokens.
                  </ContentSpan>
                </LabelDiv>
                <Check
                  id="2"
                  src={imagesPath[imageName]}
                  onClick={(e) => toggleImage(e.currentTarget.id)}
                />
              </DescriptionDiv>
            </RowDiv>

            <RowDiv>
              <ImageDiv>
                <Img alt="" src={"/images/Mintable.svg"} />
              </ImageDiv>
              <DescriptionDiv>
                <LabelDiv id="3">
                  <HeadSpan>Mintable</HeadSpan>
                  <ContentSpan>
                    Building distribution / crowdsale logic directly into the
                    token contract or by including a generic mint function that
                    can be called by an external contract.
                  </ContentSpan>
                </LabelDiv>
                <Check
                  id="3"
                  src={imagesPath[imageName]}
                  onClick={(e) => toggleImage(e.currentTarget.id)}
                />
              </DescriptionDiv>
            </RowDiv>

            <ButtonsRow>
              <BackButton>
                <BackImgDiv src="/images/Button-Back-Arrow.svg" />
                <BackText>Back</BackText>
              </BackButton>

              <RightDiv>
                <SaveDraftButton>
                  <SaveDraftText>Save Draft</SaveDraftText>
                  <BackImgDiv src="/images/ContractDetails.svg" />
                </SaveDraftButton>
                <DeployButton>
                  <DeployText>Deploy</DeployText>
                  <BackImgDiv src="/images/DeployContract_Active.svg" />
                </DeployButton>
              </RightDiv>
            </ButtonsRow>
          </CommonRow>
        </Column>
      </Parent>
    </>
  );
}
