import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BasicInfoPage from "./basicInformation";
import TokenomicsPage from "./tokenomics";
import AddFeaturesPage from "./addFeature";
import DeployContractPage from "./deployContract";
import Utils from "../../utility";
import { SaveDraftService } from "../../services/index";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  background: #ecf0f7 0% 0% no-repeat padding-box;
  /* height: 1080px; */
`;

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

const Header = styled.div`
  text-align: left;
  font: normal normal 600 28px/34px Inter;
  letter-spacing: 0px;
  color: #1f1f1f;
  opacity: 1;
  padding: 20px 0px 0px 0px;
  @media (min-width: 0px) and (max-width: 767px) {
    font: normal normal 600 18px/21px Inter;
  }
`;

const Column = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0px;
  opacity: 1;
  margin: 20px 0px 67px 0px;
`;

const RowOne = styled.div`
  display: flex;
  flex-direction: row;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  width: 224.5px;
  border-bottom: 1px solid #f0f0f0;
  @media (min-width: 767px) and (max-width: 1024px) {
    width: 180.5px;
  }
`;

const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  opacity: 1;
  border-left: 1px solid #f0f0f0;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 38px;
    padding: 0px 10px 0px 13px;
  }
`;

const Img = styled.img`
  display: flex;
  width: 23px;
  height: 24px;
  justify-content: center;
  align-items: center;
  opacity: 1;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 13px 0px 0px 0px;
  text-align: left;
  font: normal normal 600 17px/20px Inter;
  letter-spacing: 0px;
  color: #0089ff;
  opacity: 1;
`;

const TextOne = styled.div`
  font: normal normal normal 12px/15px Inter;
  letter-spacing: 0px;
  color: #4b4b4b;
  opacity: 1;
  @media (min-width: 0px) and (max-width: 767px) {
    display: none;
  }
`;

const ActiveTextOne = styled.div`
  font: normal normal normal 12px/15px Inter;
  letter-spacing: 0px;
  color: #0089ff;
  opacity: 1;
`;

const TextTwo = styled.div`
  font: normal normal 600 17px/20px Inter;
  letter-spacing: 0px;
  color: #4b4b4b;
  opacity: 1;
  @media (min-width: 768px) and (max-width: 1024px) {
    white-space: nowrap;
    font: normal normal 600 16px/20px Inter;
    padding: 0px 10px 0px 0px;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    display: none;
  }
`;

const ActiveTextTwo = styled.div`
  font: normal normal 600 17px/20px Inter;
  letter-spacing: 0px;
  color: #0089ff;
  opacity: 1;
  @media (min-width: 768px) and (max-width: 1024px) {
    white-space: nowrap;
    font: normal normal 600 16px/20px Inter;
    padding: 0px 10px 0px 0px;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    white-space: nowrap;
    font: normal normal 600 15px/20px Inter;
    padding: 0px 10px 0px 0px;
  }
`;

export default function CommonTab(props) {
  const [step, setStep] = useState(1);

  const initialValues = {
    network: "",
    tokenOwner: "tokenOwner21",
    tokenName: "",
    tokenSymbol: "",
    tokenImage: "tokenImage20",
    decimals: "",
    description: "",
    tokenSupply: 0,
    pausable: false,
    mintable: true,
    burnable: true,
  };

  const [tokenData, setTokenData] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [saveAndContinue, setSaveAndContinue] = useState(false)

  const handleChange = (e) => {
    // const { name, value } = e.target;
    setTokenData({...tokenData, [e.target.name]: e.target.value});
    console.log("form---",tokenData);
  };

  const tab = [
    {
      id: 1,
      step: "Step 1",
      image: "/images/ContractDetails.svg",
      activeImage: "/images/Contract-Details-Active.svg",
      circleImage: "/images/Selected-Circle.svg",
      image1: "/images/ContractDetails.svg",
      activeImage1: "/images/Contract-Details-Active.svg",
      name: "Basic Information",
    },
    {
      id: 2,
      step: "Step 2",
      image: "/images/Tokenomics.svg",
      activeImage: "/images/Tokenomics-Active.svg",
      circleImage: "/images/Selected-Circle.svg",
      image1: "/images/Tokenomics.svg",
      activeImage1: "/images/Tokenomics-Active.svg",
      name: "Tokenomics",
    },
    {
      id: 3,
      step: "Step 3",
      image: "/images/Features.svg",
      activeImage: "/images/Features-Active.svg",
      circleImage: "/images/Selected-Circle.svg",
      image1: "/images/Features.svg",
      activeImage1: "/images/Features-Active.svg",
      name: "Add Features",
    },
    {
      id: 4,
      step: "Step 4",
      image: "/images/Deploy.svg",
      activeImage: "/images/Deploy-Active.svg",
      circleImage: "/images/Selected-Circle.svg",
      image1: "/images/Deploy.svg",
      activeImage1: "/images/Deploy-Active.svg",
      name: "Deploy Contract",
    },
  ];

  const [arr, setArr] = useState(tab);

  const nextStep = (e) => {
    setFormErrors(validate(tokenData)) 
    setSaveAndContinue(true)

    if(Object.keys(formErrors).length === 0 && saveAndContinue===true){
      let newData = arr.map((item) => {
        return item.id !== step
          ? item
          : { ...item, image: item.circleImage, activeImage: item.circleImage };
      });
  
      setArr(newData);
      setStep(step + 1);
    }
    else{
     return;
    }
   
  };

  const prevStep = (e) => {
    let newData = arr.map((item) => {
      return item.id !== step - 1
        ? item
        : { ...item, image: item.image1, activeImage: item.activeImage1 };
    });
    setArr(newData);
    setStep(step - 1);
  };

  useEffect(() => {
    console.log('er--',formErrors)
    if(Object.keys(formErrors).length === 0 && saveAndContinue){
      console.log('val---',tokenData)
    }
  },[formErrors])

  const validate = (values) => {
    const errors = {}

    if(!values.network){
      errors.network = "Network is required"
    }

    if(!values.tokenName){
      errors.tokenName = "TokenName is required"
    }
    else if(values.tokenName.length > 30){
      errors.tokenName = "Token Name should not be more than 30 characters"
    }

    if(!values.tokenSymbol){
      errors.tokenSymbol = "Symbol is required"
    } else if(values.tokenSymbol.length > 15){
      errors.tokenSymbol = "Symbol should not be more than 15 characters"
    }

    if(!values.decimals){
      errors.decimals = "Decimal is required"
    } else if(values.decimals.length < 1 && values.decimals.length > 18){
      errors.decimals = "Decimal should not be more than 18 or less than 1 characters"
    } else if(values.decimals.length === 0){
      errors.decimals = "Decimal can't be 0"
    }

    if(!values.description){
      errors.description = "Description is required"
    } else if(values.description.length > 500){
      errors.description = "Description should not be more than 500 characters"
    }

    // if(!values.tokenSupply){
    //   errors.tokenSupply = "Supply is required"
    // } else if(values.tokenSupply.length < 1){
    //   errors.tokenSupply = "Supply can't be less than 1"
    // }
    return errors;
  }

  const saveAsDraft = async (e) => {
    let reqObj = {
      tokenOwner: tokenData.tokenOwner,
      tokenName: tokenData.tokenName,
      tokenSymbol: tokenData.tokenSymbol,
      tokenImage: tokenData.tokenImage,
      tokenInitialSupply: 200,
      tokenDecimals: 8,
      tokenDescription: tokenData.description,
      network: tokenData.network,
      isBurnable: tokenData.burnable,
      isMintable: tokenData.mintable,
      isPausable: tokenData.pausable,
    };

    const [err, res] = await SaveDraftService.saveTokenAsDraft(reqObj);
    // setDraft(res);
    if (res) {
      Utils.apiSuccessToast("Saved Data as Draft");
    }
  };

  return (
    <>
      <MainContainer>
        <Parent>
          <Header>Create XRC20 Token</Header>
          <Column>
            <RowOne>
              {arr.map((item) => {
                const TextOneActive = step == item.id ? ActiveTextOne : TextOne;
                const TextTwoActive = step == item.id ? ActiveTextTwo : TextTwo;

                return (
                  <>
                    <Div key={item.id}>
                      <ImageDiv id={item.id}>
                        <Img
                          alt=""
                          src={step == item.id ? item.activeImage : item.image}
                        />
                      </ImageDiv>

                      <Description>
                        <TextOneActive id={item.id}>{item.step}</TextOneActive>
                        <TextTwoActive id={item.id}>{item.name}</TextTwoActive>
                      </Description>
                    </Div>
                  </>
                );
              })}
            </RowOne>
            {(() => {
              switch (step) {
                case 1:
                  return (
                    <BasicInfoPage
                      nextStep={nextStep}
                      tokenData={tokenData}
                      formErrors={formErrors}
                      handleChange={handleChange}
                    />
                  );
                case 2:
                  return (
                    <TokenomicsPage
                      nextStep={nextStep}
                      prevStep={prevStep}
                      tokenData={tokenData}
                      formErrors={formErrors}
                      handleChange={handleChange}
                    />
                  );
                case 3:
                  return (
                    <AddFeaturesPage
                      nextStep={nextStep}
                      prevStep={prevStep}
                      tokenData={tokenData}
                      formErrors={formErrors}
                      handleChange={handleChange}
                      saveAsDraft={saveAsDraft}
                    />
                  );
                case 4:
                  return <DeployContractPage />;
                default:
                  return;
              }
            })()}
          </Column>
        </Parent>
      </MainContainer>
    </>
  );
}
