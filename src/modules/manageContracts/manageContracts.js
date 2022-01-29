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
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Tooltip, Fade, createTheme } from "@material-ui/core";

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
`;
const Img = styled.img`
  width: 35px;
  height: 35px;
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
  width: 250px;
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
  },
  tokenIcon: {
    minWidth: "94px",
  },
});

const rows = [
  {
    tokenIcon: "",
    tokenName: "MetaVerse",
    tokenSymbol: "META",
    network: "XDC Apothem Testnet",
    contractAddress: "xdc5e6d170445cea1e9bf1bad…a2a1",
  },
  {
    tokenIcon: "",
    tokenName: "MetaVerse",
    tokenSymbol: "META",
    network: "XDC Apothem Testnet",
    contractAddress: "xdc5e6d170445cea1e9bf1bad…a2a1",
  },
];

function manageContracts() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const handleTooltipOpen = () => {
    setOpen(true);
  };
  return (
    <Container>
      <Heading>Manage Contracts</Heading>
      <MainContainer>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tokenIcon} width="8%">
                  Token Icon
                </TableCell>
                <TableCell width="10%" align="left">
                  Token Name
                </TableCell>
                <TableCell width="12%" align="left">
                  Token Symbol
                </TableCell>
                <TableCell width="15%" align="left">
                  Network
                </TableCell>
                <TableCell width="25%" align="left">
                  Contract Address
                </TableCell>
                <TableCell width="10%" align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    <Img src="/images/XDC_sky_blue.svg" alt="" />
                  </TableCell>
                  <TableCell align="left">{row.tokenName}</TableCell>
                  <TableCell align="left">{row.tokenSymbol}</TableCell>
                  <TableCell align="left">{row.network}</TableCell>
                  <TableCell className={classes.address} align="left">
                    {row.contractAddress}
                    <Tooltip
                      title={open ? "Copied" : "Copy To Clipboard"}
                      placement="top"
                      arrow
                      TransitionComponent={Fade}
                      TransitionProps={{ timeout: 600 }}
                    >
                      <CopyToClipboard text={row.contractAddress || ""}>
                        <CopyIcon
                          src="/images/Copy.svg"
                          onClick={handleTooltipOpen}
                        />
                      </CopyToClipboard>
                    </Tooltip>
                  </TableCell>
                  <TableCell align="left">
                    <Button>Manage</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </MainContainer>
    </Container>
  );
}

export default manageContracts;
