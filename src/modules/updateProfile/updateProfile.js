import React from "react";
import styled from "styled-components";
import { Column, Row } from "simple-flexbox";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  background: #ecf0f7 0% 0% no-repeat padding-box;
  opacity: 1;
`;
const ColumnContainer = styled.div`
  width: 898px;
  height: auto;
  margin: 37px 0 0 0;
  @media screen and (max-width: 1024px) and (min-width: 768px) {
    width: 720px;
    margin: 89px 0 0 0;
  }
  @media screen and (max-width: 767px) and (min-width: 0px) {
    width: 355px;
    margin: 89px 0 0 0;
  }
`;
const FormContainer = styled.div`
  width: 898px;
  height: 908px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  margin: 25px 0 0 0;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 1024px) and (min-width: 768px) {
    width: 720px;
    margin: 25px 0 42px 0;
  }
  @media screen and (max-width: 767px) and (min-width: 0px) {
    width: 355px;
    margin: 16px 0 42px 0;
  }
`;
const Heading = styled.div`
  display: flex;
  align-items: center;
`;
const BackArrow = styled.img`
  width: 35px;
  height: 24px;
  margin-right: 13.46px;
  @media screen and (max-width: 767px) and (min-width: 0px) {
    width: 19px;
    height: 17px;
    margin-right: 25.78px;
  }
`;
const Text = styled.span`
  width: 193px;
  height: 34px;
  text-align: left;
  font: normal normal 600 28px/34px Inter;
  letter-spacing: 0px;
  color: #1f1f1f;
  opacity: 1;
  @media screen and (max-width: 767px) and (min-width: 0px) {
    width: 124px;
    height: 21px;
    font: normal normal 600 18px/21px Inter;
  }
`;
const ImageUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 44px 0;
`;
const ImageContainer = styled.div`
  width: 153px;
  height: 153px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  opacity: 1;
  margin: 38px 0 7px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 767px) and (min-width: 0px) {
    width: 88px;
    height: 88px;
    margin: 18px 0 18px 0;
  }
`;
const TokenImg = styled.img`
  width: 97px;
  height: 97px;
  @media screen and (max-width: 767px) and (min-width: 0px) {
    width: 51px;
    height: 50px;
  }
`;
const ChangeImg = styled.span`
  text-align: center;
  font: normal normal medium 14px/17px Inter;
  color: #3163f0;
  opacity: 1;
  @media screen and (max-width: 767px) and (min-width: 0px) {
    font-size: 14px;
    font-weight: medium;
  }
`;
const InputElementContainer = styled.div`
  margin: 0 58px 36px 58px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) and (min-width: 0px) {
    margin: 0 16px 22px 16px;
  }
`;
const InputText = styled.span`
  text-align: left;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #303134;
  opacity: 1;
  margin-bottom: 6px;
  @media screen and (max-width: 767px) and (min-width: 0px) {
    font-size: 14px;
    font-weight: normal;
  }
`;
const Input = styled.input`
  width: 100%;
  height: 40px;
  background: #f0f2fc 0% 0% no-repeat padding-box;
  border-radius: 4px;
  border: none;
  outline: none;
  padding-left: 16px;
  ::placeholder {
    font: normal normal medium 16px/20px Inter;
    letter-spacing: 0px;
    color: #a8acc1;
    @media screen and (max-width: 767px) and (min-width: 0px) {
      font-size: 14px;
      font-weight: normal;
    }
  }
  :focus {
    outline: 2px solid #8ca6f0;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 58px 46px 58px;
  @media screen and (max-width: 767px) and (min-width: 0px) {
    margin: 50px 13px 46px 13px;
  }
`;
const ButtonCancel = styled.div`
  width: 136px;
  height: 42px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #a2a2a2;
  border-radius: 4px;
  opacity: 1;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0px;
  color: #4b4b4b;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 767px) and (min-width: 0px) {
    width: 152px;
    font-size: 16px;
  }
`;
const ButtonUpdate = styled.div`
  width: 136px;
  height: 42px;
  background: #3163f0 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 767px) and (min-width: 0px) {
    width: 152px;
    font-size: 16px;
  }
`;

function updateProfile() {
  return (
    <Container>
      <ColumnContainer>
        <Heading>
          <BackArrow src="images/Button_Back_Arrow.svg" />
          <Text>Update Profile</Text>
        </Heading>
        <FormContainer>
          <ImageUploadContainer>
            <ImageContainer>
              <TokenImg src="/images/XDC_Blue_Logo.svg" />
            </ImageContainer>
            <ChangeImg>Change Image</ChangeImg>
          </ImageUploadContainer>
          <InputElementContainer>
            <InputText>Website</InputText>
            <Input type="text" placeholder="https://www.metaversespace.com" />
          </InputElementContainer>

          <InputElementContainer>
            <InputText>Email</InputText>
            <Input type="email" placeholder="support@www.metaversespace.com" />
          </InputElementContainer>

          <InputElementContainer>
            <InputText>Facebook</InputText>
            <Input type="text" placeholder="https://www.facebook.com/metaversespace" />
          </InputElementContainer>

          <InputElementContainer>
            <InputText>Twitter</InputText>
            <Input type="text" placeholder="https://www.twitter.com/metaversespace" />
          </InputElementContainer>

          <InputElementContainer>
            <InputText>Telegram</InputText>
            <Input type="text" placeholder="Add Telegram group url" />
          </InputElementContainer>

          <InputElementContainer>
            <InputText>LinkedIn</InputText>
            <Input type="text" placeholder="Add LinkedIn page url" />
          </InputElementContainer>

          <InputElementContainer>
            <InputText>Reddit</InputText>
            <Input type="text" placeholder="Add Reditt page url" />
          </InputElementContainer>

          <InputElementContainer>
            <InputText>CoinGecko</InputText>
            <Input type="text" placeholder="Add CoinGecko page url" />
          </InputElementContainer>

          <ButtonContainer>
            <ButtonCancel>Cancel</ButtonCancel>
            <ButtonUpdate>Update</ButtonUpdate>
          </ButtonContainer>
        </FormContainer>
      </ColumnContainer>
    </Container>
  );
}

export default updateProfile;
