import React, { useCallback } from "react";
import styled from "styled-components";
import SeekBar from "react-seekbar-component";
import "react-seekbar-component/dist/index.css";
import Cropper from "react-easy-crop";
import GetCroppedImg from "./cropImage";
import AWSServices from "../../services/aws-service";
import { useDropzone } from "react-dropzone";

const Container = styled.div`
  padding-top: 6%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 100vw; */
  background: #ecf0f7 0% 0% no-repeat padding-box;
  opacity: 1;
  margin-top: -20rem;
  margin-left: -20px;
  @media (min-width: 768px) {
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

const TokenImage = styled.div`
  width: 264px;
  height: 264px;
  position: "relative";
  background: #000000 0% 0% no-repeat padding-box;
  overflow: hidden;
  top: 100px;
  left: 200px;
  right: 200px;
  bottom: 80px;
`;

const CropImage = styled.div`
  width: 90%;
  margin-top: 6%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ControlButtons = styled.button`
  background-color: #ffffff;
  border-width: 0px;
`;

const Plus = styled.img`
  height: 10px;
  width: 10px;
`;
const zoomStep = 0.1;
const maxScale = 5;
const minScale = 1;
const defaultScale = minScale;

export default function UploadTokenImage(props) {
  const [upload, setUpload] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [scale, setScale] = React.useState(defaultScale);
  const [file, setFile] = React.useState({});
  const [filePreview, setFilePreview] = React.useState({});
  const [croppedAreaPixels, setCroppedAreaPixels] = React.useState(null);
  const [croppedImage, setCroppedImage] = React.useState(null);
  const [crop, setCrop] = React.useState({ x: 1, y: 1 });
  const [zoom, setZoom] = React.useState(1);

  const s3Bucket = process.env.REACT_APP_S3_BUCKET_NAME

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleClickUpload = () => {
    setUpload(false);
  };

  const handleCloseUpload = () => {
    setUpload(true);
  };

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

  const uploadFileToAWS = async (croppedImage) => {
    handleClickUpload();
    setScale(defaultScale);
    const awsFile = await new AWSServices().uploadFileToS3(
      file.key,
      croppedImage,
      s3Bucket
    );
    let obtainUrl = "https://xdc-mycontract-s3-dev.s3.amazonaws.com/" + awsFile.sourceFileName
    props.handleUploadClose(obtainUrl)
  };

  const saveCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await GetCroppedImg(filePreview, croppedAreaPixels);
      setFile({ content: croppedImage });
      setCroppedImage(croppedImage);
      uploadFileToAWS(croppedImage);
    } catch (e) {
      console.error(e);
    }
  });

  const onDrop = useCallback(async (acceptedFiles) => {
    handleCloseUpload();
    let content = acceptedFiles[0].path;
    let key = `${"userId"}/${"token-image"}/${
      JSON.stringify(new Date().getTime()) + ".png"
    }`;
    setFilePreview(URL.createObjectURL(acceptedFiles[0]));
    setFile({ key: key, content: content });
  });

  const { getInputProps, getRootProps } = useDropzone({ onDrop });

  const UploadScreen = () => {
    if (!upload) {
      return (
        <button onClick={handleCloseUpload} {...getRootProps()}>
          <input {...getInputProps()} /> Upload a Image
        </button>
      );
    } else {
      return (
        <Container>
          <Header>
            <img onClick={()=>props.handleUploadClose()} src="images/Button_Back_Arrow.svg"></img>
            <HeadingName>Upload Token Image</HeadingName>
          </Header>
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
                objectFit={"horizontal-cover" || "vertical-cover"}
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
                  width="250px"
                  backgroundColor="#EDEDED"
                  fillColor="#EDEDED"
                  fillSecondaryColor="#EDEDED"
                  headColor="#00000029"
                  headBorderWidth={3}
                  progress={20}
                  borderColor="#4B4B4B"
                />
              </div>
              <ControlButtons onClick={zoomIn}>
                <Plus src="images/Token_Image.svg"></Plus>
              </ControlButtons>
            </CropImage>
            <UploadButton onClick={saveCroppedImage}>
              <UploadName>Upload</UploadName>
            </UploadButton>
          </Content>
        </Container>
      );
    }
  };
  return UploadScreen()
}
