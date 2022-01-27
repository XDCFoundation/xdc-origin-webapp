import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ChangeNetworkPopup from "../changeNetworkPopup/changeNetworkDesktop";
import UploadFile from "../uploadTokenImage/uploadImage";
import UploadTokenImage from "../uploadTokenImage/uploadImageMobile";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { Tooltip, Fade, createTheme } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

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
  padding: 6px 0px 0px 57px;
  @media (min-width: 0px) and (max-width: 1024px) {
    padding: 6px 0px 0px 18px;
  }
`;

const DesktopCommonRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px 0px 57px;
  @media (min-width: 0px) and (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 30px 0px 0px 18px;
  }
`;

const MobCommonRow = styled.div`
  display: none;
  @media (min-width: 0px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
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
display: flex;
flex-direction: row;
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
  padding: 7px 0px 7px 16px;
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
  :focus{
    outline: 2px solid #8CA6F0;
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
  padding-bottom: 35px;
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
  cursor: pointer;
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
  border: none;
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
const MainCircle = styled.div`
  width: 128px;
  overflow: hidden;
  height: 128px;
  background: #f0f2fc 0% 0% no-repeat padding-box;
  border: 1px dashed #8ca6f0;
  border-radius: 124px;
  opacity: 1;
  position: relative;
  top: 0;
  left: 0;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Span = styled.div`
  color: red;
`;

const ReplaceButton = styled.button`
  padding: 5px 0px 0px 30px;
  text-align: left;
  font: normal normal medium 14px/17px Inter;
  letter-spacing: 0px;
  color: #3163f0;
  background: transparent;
  opacity: 1;
  border: none;
  /* @media (min-width: 0px) and (max-width: 767px) {
   display: none;
  } */
`;

const MainImage = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  /* position: absolute;
  top: 0px; */
`;

const UrlInput = styled.img`
  opacity: 1;
`;

const QImg = styled.img`
  padding-left: 10px;
`;

const theme = createTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "12px",
        color: "#4B4B4B",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 3px 12px #0000001A",
        border: "1px solid #e6e8ed"
      }
    }
  }
});

const defaultTheme = createTheme();

const useStyles = makeStyles(theme => ({
  arrow: {
    "&:before": {
      border: "1px solid #e6e8ed"
    },
    color: theme.palette.common.white
  },
}))


export default function Token(props) {
  const classes = useStyles();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const saveAndContinue = (e) => {
    props.handleChange(e)
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
            <TextDiv>Network<Span>&nbsp;*</Span>
              <MuiThemeProvider theme={theme}>
                <Tooltip
                  title="unique"
                  placement="right-end"
                  arrow
                  classes={{ arrow: classes.arrow }}
                >
                  <QImg src="/images/Info.svg"></QImg>
                </Tooltip>
              </MuiThemeProvider>
            </TextDiv>
            <InsideDiv>
              <InputDiv
                type="text"
                name="network"
                readOnly
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
            <TextDiv>Token Name<Span>&nbsp;*</Span>
              <MuiThemeProvider theme={theme}>
                <Tooltip
                  title="unique"
                  placement="right-end"
                  arrow
                  classes={{ arrow: classes.arrow }}
                >
                  <QImg src="/images/Info.svg"></QImg>
                </Tooltip>
              </MuiThemeProvider>
            </TextDiv>

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
            <TextDiv>Symbol<Span>&nbsp;*</Span>
              <MuiThemeProvider theme={theme}>
                <Tooltip
                  title="unique"
                  placement="right-end"
                  arrow
                  classes={{ arrow: classes.arrow }}
                >
                  <QImg src="/images/Info.svg"></QImg>
                </Tooltip>
              </MuiThemeProvider>
            </TextDiv>
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

          <DesktopCommonRow>
            <TextDiv>Token Image (PNG, JPG/JPEG, 32*32 px)<Span>&nbsp;*</Span>
              <MuiThemeProvider theme={theme}>
                <Tooltip
                  title="unique"
                  placement="right-end"
                  arrow
                  classes={{ arrow: classes.arrow }}
                >
                  <QImg src="/images/Info.svg"></QImg>
                </Tooltip>
              </MuiThemeProvider>
            </TextDiv>

            {/* condition work, when user comes to create token and have uploaded the image*/}
            {props.imgData && props.imgData.length !== undefined ?
              (
                <CircleRow >
                  <Div >
                    <MainImage src={props.imgData} />
                    <UrlInput value={props.tokenData.tokenImage} readOnly type="text" name="tokenImage" />
                    <ReplaceButton onClick={(e) => { props.toggleUploadPopup(e); props.handleChange(e); }}>
                      Replace
                    </ReplaceButton>
                    {props.isUploadOpen && (
                      <UploadFile handleUploadClose={(e) => props.toggleUploadPopup(e)} />
                    )}
                  </Div>
                </CircleRow>
              ) : (
                <CircleRow>

                  {/* checking condition, whether user has came to edit token or creation of token,
                    1st cond. will work for edit and 2nd for first time creation by default*/}
                  {props.tokenData.tokenImage ?
                    (
                      <Div>
                        <MainImage src={props.tokenData.tokenImage} />
                        <UrlInput value={props.tokenData.tokenImage} readOnly type="text" name="tokenImage" />
                        <ReplaceButton onClick={(e) => props.toggleUploadPopup(e)}>
                          Replace
                        </ReplaceButton>
                        {props.isUploadOpen && (
                          <UploadFile handleUploadClose={(e) => props.toggleUploadPopup(e)} />
                        )}
                      </Div>
                    ) :
                    (
                      <div>
                        <MainCircle >
                          <PlusImage
                            onClick={(e) => props.toggleUploadPopup(e)}
                            src="/images/PlusIcon.svg"
                          />
                          <UrlInput value={props.tokenData.tokenImage} readOnly type="text" name="tokenImage" />
                          {props.isUploadOpen && (
                            <UploadFile handleUploadClose={(e) => props.toggleUploadPopup(e)} />
                          )}
                        </MainCircle>
                        <p className="shown-error">{props.formErrors.tokenImage}</p>
                      </div>
                    )}

                </CircleRow>
              )}
          </DesktopCommonRow>

          {/* --------- */}

          <MobCommonRow>
            <TextDiv>Token Image (PNG, JPG/JPEG, 32*32 px)<Span>&nbsp;*</Span>
              <MuiThemeProvider theme={theme}>
                <Tooltip
                  title="unique"
                  placement="right-end"
                  arrow
                  classes={{ arrow: classes.arrow }}
                >
                  <QImg src="/images/Info.svg"></QImg>
                </Tooltip>
              </MuiThemeProvider>
            </TextDiv>

            {props.imgData && props.imgData.length !== undefined ? (
              <CircleRow >
                {props.isUploadOpen && (
                  <UploadTokenImage handleUploadClose={(e) => props.toggleUploadPopup(e)} />
                )}
                <Div>
                  <MainImage src={props.imgData} />
                  <UrlInput value={props.tokenData.tokenImage} readOnly type="text" name="tokenImage" />
                  <ReplaceButton onClick={(e) => { props.toggleUploadPopup(e); props.handleChange(e); }}>
                    Replace
                  </ReplaceButton>
                </Div>
              </CircleRow>
            ) : (
              <CircleRow>

                {/* checking condition, whether user has came to edit token or creation of token,
                    1st cond. will work for edit and 2nd for first time creation by default*/}
                {props.tokenData.tokenImage ?
                  (
                    <Div>
                      {props.isUploadOpen && (
                        <UploadTokenImage handleUploadClose={(e) => props.toggleUploadPopup(e)} />
                      )}
                      <MainImage src={props.tokenData.tokenImage} />
                      <UrlInput value={props.tokenData.tokenImage} readOnly type="text" name="tokenImage" />
                      <ReplaceButton onClick={(e) => props.toggleUploadPopup(e)}>
                        Replace
                      </ReplaceButton>
                    </Div>
                  ) :
                  (
                    <div>
                      {props.isUploadOpen && (
                        <UploadTokenImage handleUploadClose={(e) => props.toggleUploadPopup(e)} />
                      )}
                      <MainCircle >
                        <UrlInput value={props.tokenData.tokenImage} readOnly type="text" name="tokenImage" />
                        <PlusImage
                          onClick={(e) => props.toggleUploadPopup(e)}
                          src="/images/PlusIcon.svg"
                        />
                      </MainCircle>
                    </div>
                  )}

              </CircleRow>
            )}
          </MobCommonRow>

          <CommonRow>
            <TextDiv>Decimals<Span>&nbsp;*</Span>
              <MuiThemeProvider theme={theme}>
                <Tooltip
                  title="unique"
                  placement="right-end"
                  arrow
                  classes={{ arrow: classes.arrow }}
                >
                  <QImg src="/images/Info.svg"></QImg>
                </Tooltip>
              </MuiThemeProvider>
            </TextDiv>
            <InputDiv
              type="number"
              onChange={(e) => props.handleChange(e)}
              name="tokenDecimals"
              value={props.tokenData.tokenDecimals}
              placeholder="8-18"
            />

            <BlurTextDiv>
              Insert the decimal precision of your token
            </BlurTextDiv>
            <p className="shown-error">{props.formErrors.tokenDecimals}</p>
          </CommonRow>

          <CommonRow>
            <TextDiv>Description<Span>&nbsp;*</Span>
              <MuiThemeProvider theme={theme}>
                <Tooltip
                  title="unique"
                  placement="right-end"
                  arrow
                  classes={{ arrow: classes.arrow }}
                >
                  <QImg src="/images/Info.svg"></QImg>
                </Tooltip>
              </MuiThemeProvider>
            </TextDiv>
            <InputDiv
              type="text"
              onChange={(e) => props.handleChange(e)}
              name="tokenDescription"
              value={props.tokenData.tokenDescription}
              placeholder="A Dao Token"
            />

            <BlurTextDiv>Add description for your token</BlurTextDiv>
            <p className="shown-error">{props.formErrors.tokenDescription}</p>
          </CommonRow>

          <CommonRow>
            <TextDiv>Website (Optional)
              <MuiThemeProvider theme={theme}>
                <Tooltip
                  title="unique"
                  placement="right-end"
                  arrow
                  classes={{ arrow: classes.arrow }}
                >
                  <QImg src="/images/Info.svg"></QImg>
                </Tooltip>
              </MuiThemeProvider>
            </TextDiv>
            <InputDiv type="text" placeholder="Website Address" />
            <BlurTextDiv>Add Website url for your token</BlurTextDiv>
          </CommonRow>

          <CommonRow>
            <TextDiv>Twitter (Optional)
              <MuiThemeProvider theme={theme}>
                <Tooltip
                  title="unique"
                  placement="right-end"
                  arrow
                  classes={{ arrow: classes.arrow }}
                >
                  <QImg src="/images/Info.svg"></QImg>
                </Tooltip>
              </MuiThemeProvider>
            </TextDiv>
            <InputDiv type="text" placeholder="e.g. Twitter Url" />
            <BlurTextDiv>Add Twitter page url for your token</BlurTextDiv>
          </CommonRow>

          <CommonRow>
            <TextDiv>Telegram (Optional)
              <MuiThemeProvider theme={theme}>
                <Tooltip
                  title="unique"
                  placement="right-end"
                  arrow
                  classes={{ arrow: classes.arrow }}
                >
                  <QImg src="/images/Info.svg"></QImg>
                </Tooltip>
              </MuiThemeProvider>
            </TextDiv>
            <InputDiv type="text" placeholder="e.g. Telegram Url" />
            <BlurTextDiv>Add Telegram group url for your token</BlurTextDiv>
          </CommonRow>

          <LastRow>
            <ContinueButton disabled={false} onClick={saveAndContinue}>
              <ContinueText>Continue</ContinueText>
              <ImgDiv src="/images/Button_Next_Arrow.svg" />
            </ContinueButton>
          </LastRow>
        </Column>
      </Parent>
    </>
  );
}
