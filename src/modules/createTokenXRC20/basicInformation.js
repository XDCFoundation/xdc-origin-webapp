import React, { useState } from "react";
import styled from "styled-components";
import ChangeNetworkPopup from "../changeNetworkPopup/changeNetworkDesktop";
import UploadFile from "../uploadTokenImage/uploadImage";
import { useHistory } from "react-router";

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
  padding: 30px 0px 0px 57px;
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
const LastRow = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 57px 30px 0px;
  @media (min-width: 0px) and (max-width: 767px) {
    padding: 20px 18px 30px 0px;
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
const TextDiv = styled.div`
  text-align: left;
  font: normal normal medium 16px/20px Inter;
  letter-spacing: 0px;
  color: #303134;
  opacity: 1;
  padding: 7px 0px 7px 0px;
`;
const InputDiv = styled.input`
  width: 783px;
  height: 40px;
  border: none;
  background: #f0f2fc 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  padding: 7px 0px 7px 0px;
  position: relative;
  top: 0;
  left: 0;
  ::placeholder {
    padding: 0px 0px 0px 7px;
    /* text-align: left; */
    font: normal normal medium 14px/17px Inter;
    letter-spacing: 0px;
    color: #a8acc1;
    opacity: 1;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 686px;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    width: 322px;
  }
`;
const BlurTextDiv = styled.div`
  text-align: left;
  font: normal normal normal 16px/20px Inter;
  letter-spacing: 0px;
  color: #a2a2a2;
  opacity: 1;
  padding: 7px 0px 7px 0px;
`;
const CircleDiv = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 128px;
  height: 128px;
  background: #f0f2fc 0% 0% no-repeat padding-box;
  border: 1px dashed #8ca6f0;
  border-radius: 124px;
  opacity: 1;
`;

const InsideDiv = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  top: 0;
  left: 0;
`;

const CircleRow = styled.div`
  position: relative;
  top: 0;
  left: 0;
`;

const PopButton = styled.button`
  position: absolute;
  top: 5px;
  right: 62px;
  border: none;
  background: transparent;
  text-align: left;
  font: normal normal medium 16px/20px Inter;
  letter-spacing: 0px;
  color: #3163f0;
  opacity: 1;

  @media (min-width: 0px) and (max-width: 767px) {
    /* right: 16px; */
    display: none;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    right: 27px;
  }
`;

const MobPopupBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 16px;
  border: none;
  background: transparent;
  text-align: left;
  font: normal normal medium 16px/20px Inter;
  letter-spacing: 0px;
  color: #3163f0;
  opacity: 1;
  @media (min-width: 768px) {
    display: none;
  }
`;

const PlusImage = styled.img`
  position: absolute;
  top: 52px;
  left: 54px;
  width: 21px;
  height: 21px;
  text-align: left;
  font: normal normal normal 44px/54px Inter;
  letter-spacing: 0px;
  color: #3163f0;
  opacity: 1;
`;

const ContinueButton = styled.button`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
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

const ImgDiv = styled.img`
  width: 15px;
  height: 13px;
  opacity: 1;
  @media (min-width: 0px) and (max-width: 767px) {
    margin: 0 8px 0px 8px;
  }
`;

const ContinueText = styled.div`
  text-align: left;
  font: normal normal medium 18px/21px Inter;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  @media (min-width: 0px) and (max-width: 767px) {
    margin: 0 8px 0px 8px;
  }
`;

export default function Token(props) {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const toggleUploadPopup = () => {
    setIsUploadOpen(!isUploadOpen);
  };

  const saveAndContinue = (e) => {
    props.nextStep(e);
  };
  return (
    <>
      <Parent>
        <Column>
          <RowTwo>
            <SpanOne>Basic Token Info</SpanOne>
            <SpanTwo>
              Tell us basic information about the token that you are building
            </SpanTwo>
          </RowTwo>

          <CommonRow>
            <TextDiv>Network</TextDiv>
            <InsideDiv>
              <InputDiv
                type="text"
                name="network"
                onChange={(e) => props.handleChange(e)}
                value={props.tokenData.network}
                placeholder="XDC Mainnet"
              />
              <PopButton onClick={togglePopup}>Change Network</PopButton>
              {isOpen && <ChangeNetworkPopup handleClose={togglePopup} />}
              <MobPopupBtn onClick={() => history.push("/change-network")}>
                Change Network
              </MobPopupBtn>
            </InsideDiv>

            <BlurTextDiv>Current XDC Network Pay Connected</BlurTextDiv>
            <p className="shown-error">{props.formErrors.network}</p>
          </CommonRow>

          <CommonRow>
            <TextDiv>Token Name</TextDiv>
            <InputDiv
              type="text"
              onChange={(e) => props.handleChange(e)}
              name="tokenName"
              value={props.tokenData.tokenName}
              placeholder="e.g. XDC Network"
            />

            <BlurTextDiv>Choose a name for your token</BlurTextDiv>
            <p className="shown-error">{props.formErrors.tokenName}</p>
          </CommonRow>

          <CommonRow>
            <TextDiv>Symbol</TextDiv>
            <InputDiv
              type="text"
              onChange={(e) => props.handleChange(e)}
              name="tokenSymbol"
              value={props.tokenData.tokenSymbol}
              placeholder="e.g. XDC"
            />

            <BlurTextDiv>Choose symbol for your token</BlurTextDiv>
            <p className="shown-error">{props.formErrors.tokenSymbol}</p>
          </CommonRow>

          <CommonRow>
            <TextDiv>Token Image (PNG 256*256 px)</TextDiv>
            <CircleRow>
              <CircleDiv />
              <PlusImage
                onClick={toggleUploadPopup}
                src="/images/PlusIcon.svg"
              />
              {isUploadOpen && (
                <UploadFile handleUploadClose={toggleUploadPopup} />
              )}
            </CircleRow>
          </CommonRow>

          <CommonRow>
            <TextDiv>Decimal</TextDiv>
            <InputDiv
              type="text"
              onChange={(e) => props.handleChange(e)}
              name="decimals"
              value={props.tokenData.decimals}
              placeholder="8-18"
            />

            <BlurTextDiv>
              Insert the decimal precision of your token
            </BlurTextDiv>
            <p className="shown-error">{props.formErrors.decimals}</p>
          </CommonRow>

          <CommonRow>
            <TextDiv>Description</TextDiv>
            <InputDiv
              type="text"
              onChange={(e) => props.handleChange(e)}
              name="description"
              value={props.tokenData.description}
              placeholder="A Dao Token"
            />

            <BlurTextDiv>Add description for your token</BlurTextDiv>
            <p className="shown-error">{props.formErrors.description}</p>
          </CommonRow>

          <CommonRow>
            <TextDiv>Website</TextDiv>
            <InputDiv type="text" placeholder="Website Address" />
            <BlurTextDiv>Add Website url for your token</BlurTextDiv>
          </CommonRow>

          <CommonRow>
            <TextDiv>Twitter(optional)</TextDiv>
            <InputDiv type="text" placeholder="e.g. Twitter Url" />
            <BlurTextDiv>Add Twitter page url for your token</BlurTextDiv>
          </CommonRow>

          <CommonRow>
            <TextDiv>Telegram</TextDiv>
            <InputDiv type="text" placeholder="e.g. Telegram Url" />
            <BlurTextDiv>Add Telegram group url for your token</BlurTextDiv>
          </CommonRow>

          <LastRow>
            <ContinueButton onClick={saveAndContinue}>
              <ContinueText>Continue</ContinueText>
              <ImgDiv src="/images/Button_Next_Arrow.svg" />
            </ContinueButton>
          </LastRow>
        </Column>
      </Parent>
    </>
  );
}
