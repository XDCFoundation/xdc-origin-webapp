import React, { useState } from "react";
import styled from "styled-components";
import Utils from "../../utility";
import { SaveDraftService } from "../../services/index";
import {
  addFeaturesContent,
  validationsMessages,
} from "../../constants";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { handleNavItem } from "../../action";
import toast, { Toaster } from "react-hot-toast";
import { CircularProgress } from "@material-ui/core";

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
    height: 170px;
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
  padding: 0px 29px 0px 28px;
  opacity: 1;

  @media (min-width: 0px) and (max-width: 767px) {
    padding: 0px 13px 0px 13px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 0px 19px 0px 30px;
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
  padding: 15px 20px 10px 20px;

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
const BackImgDiv = styled.img`
  width: 15px;
  height: 13px;
  opacity: 1;

  @media (min-width: 0px) and (max-width: 767px) {
    margin: 0 8px 0px 8px;
  }
`;

const DeployImgDiv = styled.img`
  width: 24px;
  height: 24px;
  opacity: 1;

  @media (min-width: 0px) and (max-width: 767px) {
    margin: 0 8px 0px 8px;
  }
`;

const DraftImgDiv = styled.img`
  width: 18px;
  height: 17px;
  opacity: 1;

  @media (min-width: 0px) and (max-width: 767px) {
    margin: 0 8px 0px 8px;
  }
`;

const BackText = styled.div`
  text-align: right;
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

const DeployButton = styled.button`
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

const DeployText = styled.div`
  text-align: left;
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

const SaveDraftButton = styled.button`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
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

const Check = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
  opacity: 1;
  margin: 12px 15px 0px 126px;
  @media (min-width: 0px) and (max-width: 767px) {
    margin: 12px 15px 0px 12px;
  }
`;
const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function AddFeatures(props) {
  const history = useHistory();
  const [isClicked, setIsClicked] = useState(false);
  const tab = [
    {
      id: 1,
      name: "Pausable",
      checkImage: "/images/Empty-Circle.svg",
      activeCheckImage: "/images/Selected-Circle.svg",
      image: "/images/Pause_Contract.png",
      checked: props.tokenData.pausable ,
      content: addFeaturesContent.PAUSABLE_CONTENT,
    },
    {
      id: 2,
      name: "Burnable",
      image: "/images/Burnable.svg",
      checkImage: "/images/Empty-Circle.svg",
      activeCheckImage: "/images/Selected-Circle.svg",
      checked: props.tokenData.burnable ,
      content: addFeaturesContent.BURNABLE_CONTENT,
    },
    {
      id: 3,
      name: "Mintable",
      image: "/images/Mintable.svg",
      activeCheckImage: "/images/Selected-Circle.svg",
      checkImage: "/images/Empty-Circle.svg",
      checked: props.tokenData.mintable ,
      content: addFeaturesContent.MINTABLE_CONTENT,
    },
  ];

  const [arr, setArr] = useState(tab);

  const updateCheck = (id) => {
    let newData = arr.map((item) =>
      item.id !== id ? item : { ...item, checked: !item.checked }
    );
    setArr(newData);

    let checked = arr.map((item) =>
    item.id === id ? { checked: !item.checked } : { checked: item.checked }
    );
    props.handleChange({
      target: {
        value: "fromFeature"
      },
      checked
    })
  };

  const notifyNameErrorMessage = () =>
    toast.error(validationsMessages.TOKEN_NAME_ERROR_MESSAGE, {
      duration: 4000,
      position: validationsMessages.TOASTS_POSITION,
      className: "toast-div-address",
    });
  const notifySymbolErrorMessage = () =>
    toast.error(validationsMessages.TOKEN_SYMBOL_ERROR_MESSAGE, {
      duration: 4000,
      position: validationsMessages.TOASTS_POSITION,
      className: "toast-div-address",
    });

  // saveDraft api function :

  let createdToken = props.tokenData.tokenName;
  let parsingDecimal = Number(props.tokenData.tokenDecimals);
  let parsingSupply = Number(props.tokenData.tokenInitialSupply);

  // condition to check if props.tokenData object has id key or not, will return true or false

  let hasTokenId = "id" in props.tokenData;

  const saveAsDraft = async (e) => {
    e.preventDefault();
    let reqObj = {
      tokenOwner: props.tokenData.tokenOwner,
      tokenName: createdToken,
      tokenSymbol: props.tokenData.tokenSymbol,
      tokenImage: props.tokenData.tokenImage,
      tokenInitialSupply: parsingSupply,
      tokenDecimals: parsingDecimal,
      tokenDescription: props.tokenData.tokenDescription,
      network: props.tokenData.network,
      isBurnable: props.tokenData.burnable,
      isMintable: props.tokenData.mintable,
      isPausable: props.tokenData.pausable,
      website: props.tokenData.website || "",
      twitter: props.tokenData.twitter || "",
      telegram: props.tokenData.telegram || "",
    };
    const [err, res] = await Utils.parseResponse(
      SaveDraftService.saveTokenAsDraft(reqObj)
    );
    if (
      res !== 0 &&
      res !== validationsMessages.TOKEN_NAME_ERROR_MESSAGE &&
      res !== validationsMessages.TOKEN_SYMBOL_ERROR_MESSAGE
    ) {
      props.setActiveNavItem("deploy");
      history.push({ pathname: "/deploy-contract", state: res });
      setIsClicked(false);
    }
    // else if (res === validationsMessages.TOKEN_NAME_ERROR_MESSAGE) {
    //   notifyNameErrorMessage();
    // } else if (res === validationsMessages.TOKEN_SYMBOL_ERROR_MESSAGE) {
    //   notifySymbolErrorMessage();
    // }
  };

  const saveAsDraftbyEdit = async (e) => {
    e.preventDefault();
    let reqObj = {
      id: props.tokenData.id,
      tokenOwner: props.tokenData.tokenOwner,
      tokenName: createdToken,
      tokenSymbol: props.tokenData.tokenSymbol,
      tokenImage: props.tokenData.tokenImage,
      tokenInitialSupply: parsingSupply,
      tokenDecimals: parsingDecimal,
      tokenDescription: props.tokenData.tokenDescription,
      network: props.tokenData.network,
      isBurnable: props.tokenData.burnable,
      isMintable: props.tokenData.mintable,
      isPausable: props.tokenData.pausable,
      website: props.tokenData.website || "",
      twitter: props.tokenData.twitter || "",
      telegram: props.tokenData.telegram || "",
    };
    const [err, res] = await Utils.parseResponse(
      SaveDraftService.saveTokenAsDraft(reqObj)
    );
    if (res[0] !== 0) {
      props.setActiveNavItem("deploy");
      history.push({ pathname: "/deploy-contract", state: res[0] });
      setIsClicked(false);
    }
  };

  const checkSaveOrEditDraft = (e) => {
    e.preventDefault();
    if (hasTokenId === true) {
      setIsClicked(true);
      saveAsDraftbyEdit(e);
    } else {
      setIsClicked(true);
      saveAsDraft(e);
    }
  };

  return (
    <>
      <div>
        <Toaster />
        {isClicked ? (
          <LoaderContainer>
              <CircularProgress />
          </LoaderContainer>
        ) : ""}
      </div>
      <Parent>
        <Column>
          <RowTwo>
            <SpanOne>Select features for your token</SpanOne>
            <SpanTwo>
            Choose the additional functionality you want to be added to your token’s smart contract.
            </SpanTwo>
          </RowTwo>

          <CommonRow>
            {arr.map((item, index) => {
              return (
                <>
                  <RowDiv key={index}>
                    <ImageDiv>
                      <Img alt="" src={item.image} />
                    </ImageDiv>
                    <DescriptionDiv>
                      <LabelDiv id={item.id}>
                        <HeadSpan>{item.name}</HeadSpan>
                        <ContentSpan>{item.content}</ContentSpan>
                      </LabelDiv>
                      <Check
                        src={
                          item.checked == true
                            ? item.activeCheckImage
                            : item.checkImage
                        }
                        onClick={() => updateCheck(item.id)}
                      />
                    </DescriptionDiv>
                  </RowDiv>
                </>
              );
            })}

            <ButtonsRow>
              <BackButton onClick={() => props.prevStep()}>
                <BackImgDiv src="/images/Button-Back-Arrow.svg" />
                <BackText>Back</BackText>
              </BackButton>

              <RightDiv>
                <SaveDraftButton onClick={checkSaveOrEditDraft} disabled={isClicked}>
                  <SaveDraftText>Save Draft</SaveDraftText>
                  <DraftImgDiv src="/images/Save-Draft-Image.svg" />
                </SaveDraftButton>
                <DeployButton onClick={() => props.nextStep()}>
                  <DeployText>Deploy</DeployText>
                  <DeployImgDiv src="/images/DeployContract_Active.svg" />
                </DeployButton>
              </RightDiv>
            </ButtonsRow>
          </CommonRow>
        </Column>
      </Parent>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setActiveNavItem: (isActive) => {
    dispatch(handleNavItem(isActive));
  },
});

export default connect(null, mapDispatchToProps)(AddFeatures);
