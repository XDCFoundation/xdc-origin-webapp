import React, { useCallback } from "react";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import "react-seekbar-component/dist/index.css";
import { useDropzone } from "react-dropzone";
import Cropper from "react-easy-crop";
import { CircularProgress} from "@material-ui/core";
import { contractManagementService } from "../../services";
import Utility from "../../utility";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  border-color: #d8d8d8;
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
const UploadButtonDisable = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 121px;
  height: 44px;
  background: #3163f0 0% 0% no-repeat padding-box;
  border-width: 0px;
  border-radius: 4px;
  opacity: 1;
  margin-left: 3%;
  cursor: not-allowed;
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
  width: 264px;
  height: 264px;
  position: "relative";
  background: none;
  overflow: hidden;
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
const FileError = styled.span`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0px;
  color: #ff0000;
  opacity: 1;
`;
const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 70px;
  left: 225px;
`;

const Span = styled.span`
  color: #1f1f1f;
`;

const minScale = 1;
const defaultScale = minScale;

export default function UploadTokenImage(props) {
  const [open, setOpen] = React.useState(false);
  const [upload, setUpload] = React.useState(false);

  const [scale, setScale] = React.useState(defaultScale);
  const [file, setFile] = React.useState(null);
  const [filePreview, setFilePreview] = React.useState({});
  const [croppedAreaPixels, setCroppedAreaPixels] = React.useState(null);
  const [crop, setCrop] = React.useState({ x: 1, y: 1 });
  const [zoom, setZoom] = React.useState(1);
  const [isUploading, setIsUploading] = React.useState(false);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickUpload = () => {
    setUpload(false);
  };

  const handleCloseUpload = () => {
    setUpload(true);
  };


  const showCroppedImage = useCallback(async () => {
      setIsUploading(true);
      const imageData = new FormData();
      imageData.append('image', file);

    let [error, uploadImageRes] = await Utility.parseResponse(
      contractManagementService.uploadFileToS3(imageData)
    );

    if(uploadImageRes.responseData !== null || uploadImageRes.responseData !== undefined) {
      setFile({ content: uploadImageRes.responseData });
      props.handleUploadClose(uploadImageRes.responseData);
      setTimeout(() => {
        handleClose();
        setIsUploading(false);
        handleClickUpload();
      }, 2500);
    }
  });

  const RenderUi = () => {
    const onDrop = useCallback(async (acceptedFiles) => {
      handleCloseUpload();
      if (acceptedFiles[0]?.path) {
        setFilePreview(URL.createObjectURL(acceptedFiles[0]));
        setFile(acceptedFiles[0]);
      }
    });

    const { getInputProps, getRootProps, fileRejections } = useDropzone({
      onDrop,
      accept: "image/png",
    });

    const fileRejectionItems = fileRejections.map(({ file, errors }) => (
      <div key={file.path}>
        {errors.map((e) => (
          <FileError key={e.code}>Unsupported File Format</FileError>
        ))}
      </div>
    ));

    const renderUpload = () => {
      setTimeout(() => {
        handleClose();
        handleClickUpload();
        props.handleUploadClose(null);
      }, 3000);
    };

    if (!upload) {
      return (
        <>
          {isUploading ? (
            <Loader>
              <CircularProgress />
            </Loader>
          ) : (
            ""
          )}
          <Content>
            <UploadCircle {...getRootProps()}>
              <input {...getInputProps()} />
              <UploadIcon src="/images/Upload.svg"></UploadIcon>
              <UploadText>Drag and drop your token icon here</UploadText>
            </UploadCircle>
            <ContentText>or</ContentText>
            <UploadPhoto {...getRootProps()}>
              <input {...getInputProps()} />
              <ButtonName>Upload a photo</ButtonName>
            </UploadPhoto>
          </Content>
        </>
      );
    } else {
      return (
        <>
          {fileRejectionItems?.length !== 0 ? (
            <Content>
              <img src="/images/hazard_icon.png" alt="" />
              {fileRejectionItems}
              {renderUpload()}
            </Content>
          ) : (
            <Content>
              {isUploading ? (
                <Loader>
                  <CircularProgress />
                </Loader>
              ) : ""}
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
                  cropSize={{ width: 270, height: 270}}
                  // cropShape="round"
                  objectFit={"horizontal-cover" || "vertical-cover"}
                  disableAutomaticStylesInjection={true}
                />
              </TokenImage>
              {/* <CropImage>
                <ControlButtons onClick={zoomOut}>
                  <img src="/images/Minus-Icon.svg"></img>
                </ControlButtons>
                <div>
                  <SeekBar
                    getNumber={setScale}
                    max={1}
                    min={1}
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
                  <Plus src="/images/Token_Image.svg"></Plus>
                </ControlButtons>
              </CropImage> */}
            </Content>
          )}
        </>
      );
    }
  };

  return (
    <div>
      <Dialog className="display-pop-up" open={true}>
        {" "}
        {/**change true to state "open" while integrating */}
        <Header>
          <DialogTitle><Span>Upload Token Image</Span></DialogTitle>
          <Cross
            onClick={(e) => props.handleUploadClose(e)}
            src="/images/Cross.svg"
          ></Cross>
        </Header>
        <ContentContainer>
          {RenderUi()}

          <Buttons>
            <Cancel onClick={(e) => props.handleUploadClose(e)}>
              <CancelName>Cancel</CancelName>
            </Cancel>
            {
              upload ? (
              <UploadButton onClick={showCroppedImage}>
                <UploadName>Upload</UploadName>
              </UploadButton>
              ) : (
              <UploadButtonDisable >
                <UploadName>Upload</UploadName>
              </UploadButtonDisable>
              )
            }
          </Buttons>
        </ContentContainer>
      </Dialog>
    </div>
  );
}
