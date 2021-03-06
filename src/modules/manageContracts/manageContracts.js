/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Tooltip, Fade } from "@material-ui/core";
import { history } from "../../managers/history";
import { CircularProgress } from "@material-ui/core";
import { REDIRECT_URL } from "../../constants";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 455px;
  background: #ecf0f7 0% 0% no-repeat padding-box;
  opacity: 1;
`;
const MainContainer = styled.div`
  margin: 34px 185px 46px 185px;
  padding:  0 20px 0 20px;
  height: auto;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  @media screen and (max-width: 1680px) and (min-width: 1280px) {
    margin: 34px 70px 46px 70px;
  }
  @media screen and (max-width: 1280px) and (min-width: 1024px) {
    margin: 34px 20px 46px 20px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    margin: 34px 50px 46px 50px;
  }
  @media screen and (max-width: 767px) and (min-width: 0px) {
    margin: 34px 35px 46px 35px;
  }
`;
const Img = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;
const Button = styled.button`
  width: 90px;
  height: 36px;
  background: #3163f0 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  border: none;
  outline: none;
  text-align: center;
  font: normal normal normal 16px/20px Inter;
  color: #ffffff;
  opacity: 1;
`;
const Heading = styled.span`
  margin-top: 37px;
  margin-left: 185px;
  /* width: 250px; */
  height: 34px;
  text-align: left;
  font: normal normal 600 28px/34px Inter;
  letter-spacing: 0px;
  color: #1f1f1f;
  opacity: 1;
  @media screen and (max-width: 1680px) and (min-width: 1280px) {
    margin-left: 70px;
  }
  @media screen and (max-width: 1280px) and (min-width: 1024px) {
    margin-left: 20px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    margin-top: 89px;
    margin-left: 52px;
  }
  @media screen and (max-width: 767px) and (min-width: 0px) {
    margin-top: 89px;
    margin-left: 37px;
  }
`;
const CopyIcon = styled.img`
  margin-left: 8px;
  color: black;
  cursor: pointer;
  &:hover {
    color: #ffffff;
  }
  &:after {
    color: pink;
  }
`;
const EmptyRow = styled.div`
  height: 168px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  color: #808080;
`;

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    "& .MuiTableCell-head": {
      fontSize: "16px",
      fontWeight: 600,
      color: "#102C78",
      opacity: 1,
    },
    "& .MuiTableCell-body ": {
      fontSize: "16px",
      fontWeight: "normal",
      color: "#191919",
      opacity: 1,
    },
  },
  address: {
    color: "#3163F0 !important",
    cursor: "pointer",
  },
  tokenIcon: {
    minWidth: "94px",
  },
  tableCell: {
    borderBottom: "none",
  }
});

function manageContracts(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);
  const handleTooltipOpen = (e, id) => {
    e.stopPropagation();
    setOpen(true);
    setId(id);
  };

  const handleContractAddress = (contractAddress, tokenSymbol) => {
    let address = contractAddress.replace(/0x/, "xdc");

    if (props?.network === "XDC Mainnet") {
      window.open(`${REDIRECT_URL.OBSERVER_CONTRACT_ADDRESS_URL}${contractAddress}/${tokenSymbol}`, '_blank');
    } else if (props?.network === "XDC Apothem Testnet") {
      window.open(`${REDIRECT_URL.EXPLORER_CONTRACT_ADDRESS_URL}${address}`, '_blank');
    }
  }

  return (
    <Container>
      <Heading>Manage Deployed Tokens</Heading>
      <MainContainer>
        <TableContainer sx={{ boxShadow: 0 }}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tokenIcon} width={props.deolyedXrc20TokenDetails.length === 0 ? "0%" : "8%"}>
                  Token Icon
                </TableCell>
                <TableCell width={props.deolyedXrc20TokenDetails.length === 0 ? "0%" : "10%"} align="left">
                  Token Name
                </TableCell>
                <TableCell width={props.deolyedXrc20TokenDetails.length === 0 ? "0%" : "12%"} align="left">
                  Token Symbol
                </TableCell>
                <TableCell width={props.deolyedXrc20TokenDetails.length === 0 ? "18%" : "15%"} align="left">
                  Network
                </TableCell>
                <TableCell width={props.deolyedXrc20TokenDetails.length === 0 ? "0%" : "25%"} align="left">
                  Contract Address
                </TableCell>
                {props.deolyedXrc20TokenDetails.length === 0 ? "" : (
                  <TableCell width="10%" align="left"></TableCell>
                )}
              </TableRow>
            </TableHead>

            {props.deolyedXrc20TokenDetails &&
              props.deolyedXrc20TokenDetails.map((row,index) => (
                <TableBody>
                  <TableRow key={row.name}>
                    <TableCell className={index === props.deolyedXrc20TokenDetails.length-1 ? classes.tableCell : ""} component="th" scope="row">
                      <Img src={row.tokenImage} alt="" />
                    </TableCell>
                    <TableCell className={index === props.deolyedXrc20TokenDetails.length-1 ? classes.tableCell : ""} align="left">{row.tokenName}</TableCell>
                    <TableCell className={index === props.deolyedXrc20TokenDetails.length-1 ? classes.tableCell : ""} align="left">{row.tokenSymbol}</TableCell>
                    <TableCell className={index === props.deolyedXrc20TokenDetails.length-1 ? classes.tableCell : ""} align="left">{row.network}</TableCell>
                    <TableCell className={index === props.deolyedXrc20TokenDetails.length-1 ? `${classes.tableCell} ${classes.address}` : classes.address} align="left" onClick={() => handleContractAddress(row.smartContractAddress, row.tokenSymbol)}>
                        {row.smartContractAddress.slice(0, 26) +
                          "..." +
                        row.smartContractAddress.substr(
                          row.smartContractAddress?.length - 4
                        )}
                      <Tooltip
                        title={open && id === row.id ? "Copied" : "Copy To Clipboard"}
                        placement="top"
                        arrow
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 600 }}
                      >
                        <CopyToClipboard text={row.smartContractAddress || ""}>
                          <CopyIcon
                            src="/images/Copy.svg"
                            onClick={(e) => handleTooltipOpen(e,row.id)}
                          />
                        </CopyToClipboard>
                      </Tooltip>
                    </TableCell>
                    <TableCell className={index === props.deolyedXrc20TokenDetails.length-1 ? classes.tableCell : ""} align="left">
                      <Button onClick={() => history.push({
                        pathname: "/manage-contract-details",
                        state: {
                          id: row.id,
                        }
                      })}>Manage</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              ))}
          </Table>
        </TableContainer>
        {props.state?.isLoading ? (
          <EmptyRow>
            <CircularProgress />
          </EmptyRow>
        ) : (
            props.deolyedXrc20TokenDetails.length === 0 ? (
              <EmptyRow>No Contracts Available</EmptyRow>
          ) : ""
        )}
      </MainContainer>
    </Container>
  );
}

export default manageContracts;
