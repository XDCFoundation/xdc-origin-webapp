import React from "react";
import styled from "styled-components";
import SeekBar from "react-seekbar-component";
import "react-seekbar-component/dist/index.css";

const Container = styled.div`
  padding-top: 6%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background: #ecf0f7 0% 0% no-repeat padding-box;
  opacity: 1;
  @media (min-width: 768px){
      display: none;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  padding: 4%;
  justify-content: flex-start;
  margin-right: auto;
`;

const HeadingName = styled.div`
  padding-left: 6%;
  font: normal normal 600 18px/21px Inter;
  letter-spacing: 0px;
  white-space: nowrap;
  color: #1f1f1f;
  opacity: 1;
`;

const BackIcon = styled.img`
  background: #1f1f1f 0% 0% no-repeat padding-box;
  opacity: 1;
`;

const Content = styled.div`
  align-items: center;
  padding: 4%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  width: 95vw;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
`;

const UploadButton = styled.button`
  width: 121px;
  height: 44px;
  background: #3163f0 0% 0% no-repeat padding-box;
  border-width: 0px;
  margin-top: 20%;
  border-radius: 4px;
  opacity: 1;
  margin-left: 3%;
`;

const UploadName = styled.span`
  text-align: center;
  font: normal normal medium 18px/21px Inter;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;

const TokenImage = styled.img`
  width: 264px;
  height: 264px;
  margin-top: 5%;
  margin-bottom: 5%;
  background: #000000 0% 0% no-repeat padding-box;
  opacity: 0.18;
`;

const CropImage = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Plus = styled.img`
  height: 10px;
  width: 10px;
`;

export default function UploadTokenImage(props) {
  const [upload, setUpload] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleClickUpload = () => {
    setUpload(false);
  };

  const handleCloseUpload = () => {
    setUpload(true);
  };

  return (
    <Container>
      <Header>
        <img src="images/Button_Back_Arrow.svg"></img>
        <HeadingName>Upload Token Image</HeadingName>
      </Header>
      <Content>
        <TokenImage></TokenImage>
        <CropImage>
          <BackIcon src="images/Minus.svg"></BackIcon>
          <div>
            <SeekBar
              getNumber={setValue}
              width="300px"
              backgroundColor="#EDEDED"
              fillColor="#EDEDED"
              fillSecondaryColor="#EDEDED"
              headColor="#00000029"
              headBorderWidth={3}
              progress={20}
              borderColor="#4B4B4B"
            />
          </div>
          <Plus src="images/Token_Image.svg"></Plus>
        </CropImage>
        <UploadButton>
            <UploadName>Upload</UploadName>
        </UploadButton>
      </Content>
    </Container>
  );
}
