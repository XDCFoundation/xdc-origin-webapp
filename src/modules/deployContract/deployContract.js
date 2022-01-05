import React from "react";
import "./deployContract.css";
import styled from "styled-components";
import { Delete, Edit } from "@material-ui/icons";

function DeployContract() {
  const tableData = [
    {
      tokenIcon: "image",
      tokenName: "MetaVerse",
      tokenSymbol: "META",
      network: "XDC Apothem Testnet",
      supply: "10000000",
      status: "Draft",
    },
    {
      tokenIcon: "image",
      tokenName: "Alex Coin",
      tokenSymbol: "ALEX",
      network: "XDC Mainnet",
      supply: "20000000",
      status: "Failed",
    },
  ];

  return (
    <Container>
      <Heading>Deploy Contracts</Heading>
      <TableContainer>
        <TableHeader>
          <Title>Token Icon</Title>
          <Title>Token Name</Title>
          <Title>Token Symbol</Title>
          <TitleNetwork>Network</TitleNetwork>
          <Title>Supply</Title>
          <Title>Status</Title>
        </TableHeader>
        <Line />

        <DataContainer>
          {tableData.map((item) => (
            <>
              <TableRow>
                <div className="tokenIcon">
                  <TableContent>{item.tokenIcon}</TableContent>
                </div>
                <div className="tokenName">
                  <TableContent>{item.tokenName}</TableContent>
                </div>
                <div className="tokenSymbol">
                  <TableContent>{item.tokenSymbol}</TableContent>
                </div>
                <div className="network">
                  <TableContent>{item.network}</TableContent>
                </div>
                <div className="supply">
                  <TableContent>{item.supply}</TableContent>
                </div>
                <div className="status">
                  <TableContent>{item.status}</TableContent>
                </div>
                <div className="icons">
                  <div className="deployIcon">
                    <img src="/images/DeployContract_InActive.svg" alt="" />
                  </div>
                  <div className="deleteIcon">
                    <Delete />
                  </div>
                  <div className="editIcon">
                    <Edit />
                  </div>
                </div>
              </TableRow>
              <DataLine />
            </>
          ))}
        </DataContainer>
      </TableContainer>
    </Container>
  );
}

export default DeployContract;

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #ecf0f7 0% 0% no-repeat padding-box;
  opacity: 1;
`;
const Heading = styled.span`
  margin-top: 37px;
  margin-left: 185px;
  width: 236px;
  height: 34px;
  text-align: left;
  font: normal normal 600 28px/34px Inter;
  letter-spacing: 0px;
  color: #1f1f1f;
  opacity: 1;
  @media screen and (max-width: 768px) and (min-width: 425px) {
    margin-top: 32px;
    margin-left: 24px;
    margin-bottom: 32px;
  }
  @media screen and (min-width: 375px) and (max-width: 425px) {
    margin-top: 32px;
    margin-left: 10px;
    margin-bottom: 20px;
    width: 152px;
    height: 21px;
    font: normal normal 600 18px/21px Inter;
  }
`;
const TableContainer = styled.div`
  margin-top: 34px;
  margin-left: 185px;
  width: 1300px;
  max-width: 1300px;
  height: auto;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  @media screen and (max-width: 768px) and (min-width: 425px) {
    margin-top: 0px;
    margin-left: 24px;
    width: 720px;
    height: auto;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      width: 55px;
      height: 5px;
      background: #c4c4c4 0% 0% no-repeat padding-box;
      border-radius: 12px;
      opacity: 1;
    }
  }
  @media screen and (min-width: 375px) and (max-width: 425px) {
    margin-top: 0px;
    margin-left: 10px;
    width: 355px;
    height: auto;
    overflow-x: scroll;
  }
`;
const TableHeader = styled.div`
  width: 100%;
  max-width: 1012px;
  display: flex;
  align-items: center;
  margin: 15px 0 0 28px;
`;
const Title = styled.p`
  width: 112px;
  min-width: 112px;
  max-width: 222px;
  height: 20px;
  margin-right: 57px;
  text-align: left;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0px;
  color: #102c78;
  opacity: 1;
`;
const TitleNetwork = styled.p`
  width: 222px;
  min-width: 222px;
  max-width: 222px;
  height: 20px;
  margin-right: 57px;
  padding-left: 20px;
  text-align: left;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0px;
  color: #102c78;
  opacity: 1;
`;
const Line = styled.hr`
  margin: 0.5rem auto 0 auto;
  width: 1270px;
`;
const DataLine = styled.hr`
  margin: 0 auto 0 -14px;
  width: 1270px;
`;
const DataContainer = styled.div`
  margin-left: 28px;
`;
const TableRow = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.1); */
`;
const TableContent = styled.span`
  top: 222px;
  left: 593px;
  width: 81px;
  height: 20px;
  text-align: left;
  font: normal normal normal 16px/20px Inter;
  letter-spacing: 0px;
  color: #191919;
  opacity: 1;
`;
