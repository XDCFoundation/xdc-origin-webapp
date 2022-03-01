import React, { useState } from "react";
import styled from "styled-components";
import numberToWords from "number-to-words";
import { Tooltip, createTheme } from "@material-ui/core";
import {
  validationsMessages,
  toolTipContentMessages,
  LARGE_NUMBER,
  LARGE_NUMBER_ERROR, 
  INITIAL_SUPPLY_LARGE_NUMBER_ERROR,
  INITIAL_SUPPLY_MAX_LIMIT_NUMBER
} from "../../constants";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import toast, { Toaster } from "react-hot-toast";

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
const CommonRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 41px 0px 27px 57px;
  @media (min-width: 0px) and (max-width: 1024px) {
    padding: 30px 0px 0px 18px;
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
    font: normal normal medium 14px/17px Inter;
    letter-spacing: 0px;
    color: #a8acc1;
    opacity: 1;
  }
  :focus {
    outline: 2px solid #8ca6f0;
  }
  ::-webkit-inner-spin-button, 
  ::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
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
  text-transform: capitalize;
`;
const ButtonsRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 57px 30px 57px;
  @media (min-width: 0px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    padding: 41px 18px 30px 18px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 20px 17px 30px 17px;
  }
`;
const BackButton = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
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
const ContinueButtonDisable = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  cursor: not-allowed;
  width: 150px;
  height: 50px;
  background: #3163f0 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 0.8;
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
const BackText = styled.div`
  text-align: right;
  /* font: normal normal medium 18px/21px Inter; */
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0px;
  color: #4b4b4b;
  opacity: 1;
  @media (min-width: 0px) and (max-width: 767px) {
    margin: 0 8px 0px 8px;
  }
`;
const ContinueText = styled.div`
  text-align: left;
  /* font: normal normal medium 18px/21px Inter; */
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  @media (min-width: 0px) and (max-width: 767px) {
    margin: 0 8px 0px 8px;
  }
`;
const Span = styled.div`
  color: red;
`;
const QImg = styled.img`
  padding-left: 10px;
`;

const theme = createTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "16px",
        color: "#4B4B4B",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 3px 12px #0000001A",
        border: "1px solid #e6e8ed",
        padding: "10px"
      },
    },
  },
});

const defaultTheme = createTheme();

const useStyles = makeStyles((theme) => ({
  arrow: {
    "&:before": {
      border: "1px solid #e6e8ed",
    },
    color: theme.palette.common.white,
  },
}));

export default function Tokenomics(props) {
  const classes = useStyles();
  const [symbolsArr] = useState(["e", "E", "+", "-", "."]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const supplyErrorMessage = () =>
  toast.error(validationsMessages.VALIDATE_INITIAL_SUPPY_FIELD, {
    duration: 4000,
    position: validationsMessages.TOASTS_POSITION,
    className: "toast-div-address",
  });

  const saveAndContinue = (e) => {
    if (props.tokenData?.tokenInitialSupply === undefined) {
      supplyErrorMessage();
    }
    props.handleChange(e);
    if (
      props.tokenData.tokenInitialSupply >= 1 &&
      props.tokenData.tokenInitialSupply !== undefined
    ) {
      props.nextStep(e);
    }
  };

  let convertedNumber = props?.tokenData?.tokenInitialSupply < LARGE_NUMBER && numberToWords?.toWords(
    props?.tokenData?.tokenInitialSupply || 0
  )

  return (
    <>
    <div><Toaster/></div>
      <Parent>
        <Column>
          <RowTwo>
            <SpanOne>Set up your Tokenomics</SpanOne>
            <SpanTwo>
              Create the rules around supply and limits of your token.
            </SpanTwo>
          </RowTwo>
          <CommonRow>
            <TextDiv>
              Initial Supply<Span>&nbsp;*</Span>
              <MuiThemeProvider theme={theme}>
                <Tooltip
                  title={toolTipContentMessages.TOKEN_SUPPLY_CONTENT}
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
              name="tokenInitialSupply"
              value={props.tokenData.tokenInitialSupply}
              onInput={(e) => (e.target.value = e.target.value.slice(0, 15))}
              onKeyDown={e => symbolsArr.includes(e.key) && e.preventDefault()}
            />
            {props.tokenData.tokenInitialSupply > 0 ? (
              <BlurTextDiv>{props.tokenData.tokenInitialSupply >= INITIAL_SUPPLY_LARGE_NUMBER_ERROR ? "Number Too Large" : convertedNumber}</BlurTextDiv>
            ) : (
              ""
            )}
            <BlurTextDiv>
              Insert the initial numbers of tokens available
            </BlurTextDiv>
            {props.tokenData.tokenInitialSupply < 1 ? (
              <p className="shown-error">Supply should not be less than 1</p>
            ) : (
              props.tokenData.tokenInitialSupply > INITIAL_SUPPLY_MAX_LIMIT_NUMBER ? (
                <p className="shown-error">{validationsMessages.INITIAL_SUPPLY_MAX_LIMIT_ERROR}</p>
              ) : ""
            )}
          </CommonRow>
          <ButtonsRow>
            <BackButton onClick={() => props.prevStep()}>
              <ImgDiv src="/images/Button-Back-Arrow.svg" />
              <BackText>Back</BackText>
            </BackButton>
            {props.tokenData.tokenInitialSupply > INITIAL_SUPPLY_MAX_LIMIT_NUMBER ? (
              <ContinueButtonDisable>
                <ContinueText>Continue</ContinueText>
                <ImgDiv src="/images/Button_Next_Arrow.svg" />
              </ContinueButtonDisable>
            ) : (
              <ContinueButton onClick={saveAndContinue}>
                <ContinueText>Continue</ContinueText>
                <ImgDiv src="/images/Button_Next_Arrow.svg" />
              </ContinueButton>
            )}
          </ButtonsRow>
        </Column>
      </Parent>
    </>
  );
}
