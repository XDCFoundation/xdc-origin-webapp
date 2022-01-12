import React, { useCallback } from "react";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import SeekBar from "react-seekbar-component";
import "react-seekbar-component/dist/index.css";
import { useDropzone } from "react-dropzone";
import AWSServices from "../../services/aws-service";
import Cropper from "react-easy-crop";
import GetCroppedImg from "./cropImage"

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

const TokenImage = styled.div`
  width: 264px !important;
  height: 264px !important;
  position: "relative" !important;
  background: #000000 0% 0% no-repeat padding-box;
  overflow: hidden !important;
  top: 100px;
  left: 200px;
  right: 200px;
  bottom: 80px;
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

const ControlButtons = styled.button`
  background-color: #ffffff;
  border-width: 0px;
`;
const DisplayImage = styled.img`
  width: 264px;
  height: 264px;
  align-items: center;
`;

const zoomStep = 0.1;
const maxScale = 5;
const minScale = 1;
const defaultScale = minScale;

export default function UploadTokenImage(props) {
  const [open, setOpen] = React.useState(false);
  const [upload, setUpload] = React.useState(false);

  const [scale, setScale] = React.useState(defaultScale);
  const [file, setFile] = React.useState({});
  const [filePreview, setFilePreview] = React.useState({});
  const [croppedAreaPixels, setCroppedAreaPixels] = React.useState(null);
  const [croppedImage, setCroppedImage] = React.useState(null);
  const [crop, setCrop] = React.useState({ x: 1, y: 1 });
  const [zoom, setZoom] = React.useState(1);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const zoomIn = () => {
    setScale(scale + zoomStep);
    if (scale >= maxScale) {
      setScale(maxScale);
    }
  };
  const zoomOut = () => {
    setScale(scale - zoomStep);
    if (scale <= minScale) {
      setScale(minScale);
    }
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

  const uploadFileToAWS = async () => {
    handleClose();
    handleClickUpload();
    // await new AWSServices().uploadFileToS3(file.key, file.content);
    // console.log(
    //   "Image uploaded. URL:",
    //   `https://xdc-mycontract-s3-dev.s3.amazonaws.com/${file.key}`
    // );
  };

  const showCroppedImage = useCallback(async () => {
    try {
      console.log(filePreview)
      const croppedImage = await GetCroppedImg(
        filePreview,
        croppedAreaPixels
      )
      console.log('donee', { croppedImage })
      setFile({content: croppedImage })
      setCroppedImage(croppedImage)
      uploadFileToAWS()
    } catch (e) {
      console.error(e)
    }
  })


  // const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
  //   console.log(croppedArea, croppedAreaPixels);
  // }, []);

  // console.log("123456789",croppedAreaPixels)
  const RenderUi = () => {
    const onDrop = useCallback(async (acceptedFiles) => {
      handleCloseUpload();
      let content = acceptedFiles[0].path;
      let key = `${"userId"}/${"token-image"}/${acceptedFiles[0].name}`;
      setFilePreview(URL.createObjectURL(acceptedFiles[0]));
      setFile({ key: key, content: content });
    });

    const { getInputProps, getRootProps } = useDropzone({ onDrop });

    if (!upload) {
      return (
        <Content>
          <UploadCircle {...getRootProps()}>
            <input {...getInputProps()} />
            <UploadIcon src="images/Upload.svg"></UploadIcon>
            <UploadText>Drag and drop your token icon here</UploadText>
          </UploadCircle>
          <ContentText>or</ContentText>
          <UploadPhoto {...getRootProps()}>
            <input {...getInputProps()} />
            <ButtonName>Upload a photo</ButtonName>
          </UploadPhoto>
        </Content>
      );
    } else {
      return (
        <Content>
          <TokenImage>
            <Cropper
              image={filePreview}
              crop={crop}
              zoom={scale}
              aspect={4 / 4}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              showGrid={false}
              cropSize={{ width: 220, height: 220 }}
              cropShape="round"
              disableAutomaticStylesInjection={true}
            />
          </TokenImage>
          <CropImage>
            <ControlButtons onClick={zoomOut}>
              <img src="images/Minus.svg"></img>
            </ControlButtons>
            <div>
              <SeekBar
                getNumber={setScale}
                max={10}
                width="300px"
                backgroundColor="#EDEDED"
                fillColor="#EDEDED"
                fillSecondaryColor="#EDEDED"
                headColor="#00000029"
                headBorderWidth={3}
                progress={zoom}
                borderColor="#4B4B4B"
              />
            </div>
            <ControlButtons onClick={zoomIn}>
              {" "}
              <Plus src="images/Token_Image.svg"></Plus>
            </ControlButtons>
          </CropImage>
        </Content>
      );
    }
  };

  return (
    <div>
      <button onClick={handleClickOpen}>Upload a image</button>
      <Dialog className="display-pop-up" open={open}>
        {" "}
        {/** given value true is hardcoded.. will update while integrating */}
        <Header>
          <DialogTitle>Upload Token Image</DialogTitle>
          <Cross onClick={() => props.handleUploadClose()} src="images/Cross.svg"></Cross>
        </Header>
        <ContentContainer>
          {RenderUi()}

          <Buttons>
            <Cancel>
              <CancelName onClick={() => props.handleUploadClose()}>Cancel</CancelName>
            </Cancel>
            <UploadButton onClick={showCroppedImage}>
              <UploadName>Upload</UploadName>
            </UploadButton>
          </Buttons>
        </ContentContainer>
      </Dialog>
    </div>
  );
}
