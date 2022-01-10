import React, { useCallback } from "react";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import SeekBar from "react-seekbar-component";
import "react-seekbar-component/dist/index.css";
import { useDropzone } from "react-dropzone";
import ReactImageZoom from 'react-image-zoom';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  border-color: #a2a2a2;
`;

const Cross = styled.img`
  margin-right: 3%;
  opacity: 1;
`;

const UploadCircle = styled.button`
  width: 224px;
  height: 224px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px dashed #a2a2a2;
  border-radius: 124px;
  opacity: 1;
  text-align: center;
  justify-content: space-between;
`;

const UploadIcon = styled.img`
  margin-bottom: 3%;
`;
const UploadText = styled.div`
  text-align: center;
  font: normal normal medium 16px/20px Inter;
  letter-spacing: 0px;
  margin-top: 3%;
  color: #a2a2a2;
  opacity: 1;
`;

const ContentContainer = styled.div`
  margin-bottom: 10%;
`;

const Content = styled.div`
  align-items: center;
  padding: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;
  height: 400px;
  @media (max-width: 768px) {
  }
`;

const Buttons = styled.div`
  margin: 0 auto;
  flex-direction: row;
  justify-content: center;
  display: flex;
`;

const UploadPhoto = styled.button`
  width: 176px;
  height: 36px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #3163f0;
  border-radius: 4px;
  opacity: 1;
`;

const ButtonName = styled.span`
  text-align: center;
  font: normal normal medium 18px/21px Inter;
  letter-spacing: 0px;
  color: #3163f0;
  opacity: 1;
`;

const Cancel = styled.button`
  width: 121px;
  height: 44px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #a2a2a2;
  border-radius: 4px;
  opacity: 1;
  margin-right: 3%;
`;

const UploadButton = styled.button`
  width: 121px;
  height: 44px;
  background: #3163f0 0% 0% no-repeat padding-box;
  border-width: 0px;
  border-radius: 4px;
  opacity: 1;
  margin-left: 3%;
`;

const ContentText = styled.div`
  text-align: center;
  font: normal normal normal 16px/24px Inter;
  letter-spacing: 0px;
  color: #4b4b4b;
  width: 100%;
  @media (max-width: 768) {
    font: normal normal normal 14px/24px Inter;
  }
`;

const CancelName = styled.span`
  text-align: center;
  font: normal normal medium 18px/21px Inter;
  letter-spacing: 0px;
  color: #4b4b4b;
  opacity: 1;
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

const Plus = styled.button`
  height: 10px;
  width: 10px;
`;

export default function UploadTokenImage(props) {
  const [open, setOpen] = React.useState(false);
  const [upload, setUpload] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [zoomIn, setZoomIn] = React.useState(20);
  const [zoomOut, setZoomOut] = React.useState(0);

  const handleClickZoomIn = () => {
    setZoomIn(zoomIn + 20);
  };
  const handleClickZoomOut = () => {
    setZoomOut(zoomOut - 20);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickUpload = () => {
    setUpload(false);
  };

  const handleCloseUpload = () => {
    setUpload(true);
  };


  const RenderUi = () => {
    const props = {zoomIn, zoomOut, zoomWidth: 500, img: "images/XDC_Blue_Logo.svg"};
    const onDrop = useCallback((acceptedFiles) => {
      handleCloseUpload()
      // alert(acceptedFiles[0].name);
      console.log(
        "Now you can do anything with this file as per your requirement",acceptedFiles[0]
      );
    },[])

    const { getInputProps, getRootProps } = useDropzone({ onDrop });

    if (!upload) {
      return (
        <Content>
          <UploadCircle {...getRootProps()}>
            <input {...getInputProps()}/>
            <UploadIcon src="images/Upload.svg"></UploadIcon>
            <UploadText>Drag and drop your token icon here</UploadText>
          </UploadCircle>
          <ContentText>or</ContentText>
          <UploadPhoto {...getRootProps()}>
            <input {...getInputProps()}/>
            <ButtonName>Upload a photo</ButtonName>
          </UploadPhoto>
        </Content>
      );
    }else{
      return (
        <Content>
          <ReactImageZoom {...props} />
          
          <CropImage>
            <button onClick= {handleClickZoomOut} ><img src="images/Minus.svg"></img></button>
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
            <Plus onClick={handleClickZoomIn} > <img src="images/Token_Image.svg"></img></Plus>
          </CropImage>
        </Content>
      );
    }
  };

  return (
    <div>
      <Dialog className="display-pop-up" open={true}>
        {" "}
        {/** given value true is hardcoded.. will update while integrating */}
        <Header>
          <DialogTitle>Upload Token Image</DialogTitle>
          <Cross src="images/Cross.svg"></Cross>
        </Header>
        <ContentContainer>
          {RenderUi()}

          <Buttons>
            <Cancel>
              <CancelName onClick={handleClose}>Cancel</CancelName>
            </Cancel>
            <UploadButton>
              <UploadName>Upload</UploadName>
            </UploadButton>
          </Buttons>
        </ContentContainer>
      </Dialog>
    </div>
  );
}
