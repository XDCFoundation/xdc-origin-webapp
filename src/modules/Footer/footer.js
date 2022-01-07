import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 768px;
  height: 569px;
  min-height: 569px;
  background: #102c78 0% 0% no-repeat padding-box;
  opacity: 1;
  @media screen and (min-width: 375px) and (max-width: 425px) {
    width: 375px;
    height: 745px;
    min-height: 745px;
  }
`;
const ColumnContainer = styled.div`
  display: flex;
  @media screen and (min-width: 375px) and (max-width: 425px) {
    flex-direction: column;
  }
`;
const Column = styled.div`
  width: 277px;
  margin: 50px 23px 0 86.5px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 375px) and (max-width: 425px) {
    flex-direction: column;
    width: 100%;
    margin: 55.66px 0 0 22.75px;
  }
`;
const FooterImg = styled.img`
  height: 37.23px;
  width: 160.8px;
  margin: 0 0 24.84px 0;
  @media screen and (min-width: 375px) and (max-width: 425px) {
    margin: 0 0 22.45px 0;
  }
`;
const Text = styled.span`
  width: 297px;
  height: 77px;
  text-align: left;
  font: normal normal normal 18px/28px Inter;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;
const SecondColumn = styled.div`
  width: 135px;
  height: 220px;
  display: flex;
  justify-content: space-between;
`;
const SubColOne = styled.div`
  width: 90px;
  margin: 54px 0 0 24px;
  @media screen and (min-width: 375px) and (max-width: 425px) {
    margin: 32px 0 0 24px;
  }
`;
const SubColTwo = styled.div`
  width: 165px;
  margin: 54px 0 0 70px;
  @media screen and (min-width: 375px) and (max-width: 425px) {
    margin: 32px 0 0 70px;
  }
`;
const ColHeading = styled.div`
  width: max-content;
  text-align: left;
  font: normal normal medium 18px/28px Inter;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  margin-bottom: 27px;
  @media screen and (min-width: 375px) and (max-width: 425px) {
    margin-bottom: 17px;
  }
`;
const LinkContainer = styled.div`
  width: 90px;
  height: 172px;
  text-align: left;
`;
const LinkContainerSecond = styled.div`
  width: 165px;
  height: 134px;
  text-align: left;
`;
const Link = styled.span`
  font: normal normal normal 16px/38px Inter;
  letter-spacing: 0px;
  color: #8ca6f0;
  opacity: 1;
  cursor: pointer;
`;
const ContactRow = styled.div`
  margin: 116px 0 0 407px;
  @media screen and (min-width: 375px) and (max-width: 425px) {
    margin: 96px 0 0 28.95px;
  }
`;
const LinkContainerThird = styled.div`
  width: 95.95px;
  height: 106px;
  margin-bottom: 66.34px;
  @media screen and (min-width: 375px) and (max-width: 425px) {
    margin-bottom: 25.34px;
  }
`;
const ContactContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SocialIcon = styled.img`
  width: 17px;
  height: 14px;
  margin-right: 9px;
  background: #8ca6f0 0% 0% no-repeat padding-box;
  opacity: 1;
`;
const CopyrightContainer = styled.div`
  margin: -52px 0 0 87px;
  display: flex;
  align-items: center;
  height: 15px;
  @media screen and (min-width: 375px) and (max-width: 425px) {
    margin: 35px 0 0 28.95px;
  }
`;
const CopyrightText = styled.span`
  width: max-content;
  height: 15px;
  text-align: left;
  font-size: 12px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #d9e3ff;
  opacity: 1;
  margin-right: 5px;
`;
const XDCIcon = styled.img`
  width: 44px;
  height: 17px;
  background: transparent url("img/XDC-Logo.png") 0% 0% no-repeat padding-box;
  opacity: 1;
`;

function footer() {
  return (
    <FooterContainer>
      <ColumnContainer>
        <Column>
          <FooterImg src="/images/SmartHub.svg" alt="" />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut quis
            maximus augue.
          </Text>
        </Column>
        <SecondColumn>
          <SubColOne>
            <ColHeading>Tools</ColHeading>
            <LinkContainer>
              <Link>SmartMint</Link>
              <Link> SmartView </Link>
              <Link> SmartDrop </Link>
              <Link> SmartLock </Link>
              <Link> SmartStrem</Link>
            </LinkContainer>
          </SubColOne>

          <SubColTwo>
            <ColHeading>Resources</ColHeading>
            <LinkContainerSecond>
              <Link>About XDC</Link>
              <Link> Documentation </Link>
              <Link> Privacy Policy</Link>
              <Link> Terms and Conditions</Link>
            </LinkContainerSecond>
          </SubColTwo>
        </SecondColumn>
      </ColumnContainer>
      <ContactRow>
        <ColHeading>Contact</ColHeading>
        <LinkContainerThird>
          <ContactContainer>
            <SocialIcon src="/images/Twitter_Inactive.svg" />
            <Link>Twitter</Link>
          </ContactContainer>
          <ContactContainer>
            <SocialIcon src="/images/Telegram_Inactive.svg" />
            <Link> Telegram </Link>
          </ContactContainer>
        </LinkContainerThird>
      </ContactRow>
      <CopyrightContainer>
        <CopyrightText>Powered by</CopyrightText>
        <XDCIcon src="" />
      </CopyrightContainer>
    </FooterContainer>
  );
}

export default footer;
