import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { handleNavItem, handleWallet, updateAccountDetails } from "../../action";
import "../../assets/styles/custom.css";
import ConnectWallet from "../connectWallet/connectWalletPopup";
import Sidebar from "../dashboard/sidebar";
import Web3 from "web3";
import Identicon from "./identIcon";
import { NETWORKS } from "../../constants";


const HeaderContainer = styled.div`
  background: #091f5c 0% 0% no-repeat padding-box;
  opacity: 1;
  padding: 11px;
  height: 57px;
  position: sticky;
  top: 0;
  z-index: 1300;
  @media (min-width: 0px) and (max-width: 1080px) {
    width: 100%;
    padding-bottom: 20px;
    position: fixed;
    top: 0;
  }
`;
const SmartMintLogo = styled.img`
  width: 30px;
  opacity: 1;
  border-radius: 5px;
`;
const GridLogo = styled.img`
  margin-right: 10px;
  top: 17px;
  left: 22px;
  width: 24px;
`;
const SpaceBetween = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;
const Button = styled.button`
  border: 1px solid #ffffff;
  background: transparent;
  margin-left: 7%;
  border-radius: 5px;
  font-size: 14px;
  color: #ffffff;
  font: normal normal medium 15px/19px Inter;
  top: 10px;
  left: 1764px;
  width: 142px;
  height: 36px;
  @media (max-width: 425px) {
    display: none;
  }
`;
const MobBtn = styled.button`
  background: transparent;
  border: 1px solid #ffffff;
  margin-left: 5%;
  margin-top: 2px;
  border-radius: 5px;
  font-size: 14px;
  color: #ffffff;
  font: normal normal medium 15px/19px Inter;
  top: 10px;
  left: 1764px;
  white-space: nowrap;
  width: 130px;
  height: 30px;
  @media (min-width: 767px) {
    display: none;
  }
`;
const UserLogo = styled.img`
  display: none;
  @media (max-width: 767px) {
    border-radius: 50%;
    margin-right: 6px;
    ${"" /* margin-left: 109px; */}
    width: 22px;
    height: 22px;
    display: flex;
    margin-top: 5px;
  }
`;
const UserMenu = styled.img`
  display: none;
  @media (min-width: 320px) and (max-width: 425px) {
    display: flex;
    margin-top: 6px;
    margin-right: 10px;
    margin-left: 5%;
    width: 23px;
    height: 20px;
    opacity: 1;
    cursor: pointer;
  }
`;
const UserMenu1 = styled.img`
  display: none;
  @media (min-width: 425px) and (max-width: 1024px) {
    display: flex;
    margin-top: 7px;
    margin-right: 10px;
    margin-left: 6px;
    width: 26px;
    height: 22px;
    cursor: pointer;
  }
`;
const Span = styled.span`
  top: 16px;
  left: 109px;
  width: 68px;
  margin-top: 8px;
  text-align: left;
  cursor: pointer;
  font-style: normal;
  font-variant: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  @media (min-width: 0px) and (max-width: 767px) {
    margin-top: 10px;
    margin-left: 3px;
  }
`;
const AddressContainer = styled.div`
  width: max-content;
  min-width: 262px;
  height: 36px;
  background: #324988 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  margin: auto 14px auto 0;
  padding: 10px 10px 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  @media (min-width: 0px) and (max-width: 767px) {
    display: none;
  }
`;
const Balance = styled.span`
  width: max-content;
  height: 36px;
  text-align: center;
  /* font: normal normal medium 15px/19px Inter; */
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  display: flex;
  align-items: center;
  background-color: #3e579a;
  padding: 10px;
`;
const Address = styled.span`
  width: max-content;
  min-width: 103px;
  text-align: left;
  /* font: normal normal medium 15px/19px Inter; */
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  color: #ffffff;
  opacity: 1;
  padding: 10px;
`;
const AccountIcon = styled.div`
  width: 22px;
  height: 28px;
  opacity: 1;
  display: flex;
  align-items: center;
`;
const WalletDummyImg = styled.img`
  width: 28px;
  height: 28px;
  opacity: 1;
  object-fit: contain;
`;
const BetaImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 4px;
`;
const BetaImg = styled.img`
  width: 31px;
  height: 15px;
  opacity: 1;
  object-fit: contain;
`;


function Header(props) {
  const history = useHistory();
  const [connectWalletDialoag, setConnectWalletDialoag] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isconnectWallet, setIsConnectWallet] = useState(true);
  const [forceUpdate, setForceUpdate] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const connectWallet = () => {
    setConnectWalletDialoag(!connectWalletDialoag);
    props.user(isconnectWallet);
  };

  function truncateToDecimals(num, dec = 2) {
    const calcDec = Math.pow(10, dec);
    return Math.trunc(num * calcDec) / calcDec;
  }

  const getBalance = async(address) => {
    let balance = null;
    await window.web3.eth.getBalance(address).then((res) => {
      balance = res / Math.pow(10, 18);
      balance = truncateToDecimals(balance);
    });
    return balance;
  }

  useEffect(() => {
    const handleXDCPayWalletChange = async () => {
      window.web3 = new Web3(window.xdc ? window.xdc : window.ethereum);

      if (
        window.web3.currentProvider &&
        props?.userDetails?.accountDetails?.isLoggedIn
      ) {
        if (!window.web3.currentProvider.chainId) {
          //when metamask is disabled
          const state = window.web3.givenProvider.publicConfigStore ? window.web3.givenProvider.publicConfigStore._state : window.web3.currentProvider.publicConfigStore._state;
          if (state.selectedAddress !== undefined) {
            let address = state.selectedAddress;
            let network =
              state.networkVersion === "50"
                ? NETWORKS.XDC_MAINNET
                : NETWORKS.XDC_APOTHEM_TESTNET;

            let newBalance = await getBalance(address);

            if ((address || network) && (address !== props.userDetails?.accountDetails?.address || network !== props.userDetails?.accountDetails?.network || newBalance !== props.userDetails?.accountDetails?.balance)) {
              let balance = null;

              await window.web3.eth.getBalance(address).then((res) => {
                balance = res / Math.pow(10, 18);
                balance = truncateToDecimals(balance);
              });

              let accountDetails = {
                address: address,
                network: network,
                balance: balance,
                isLoggedIn: true,
              };

              props.updateAccountDetails(accountDetails);
              setForceUpdate(true);
            }
          } else {
            //metamask is also enabled with xdcpay
          }
        }
      }
    };

    const handleWalletSession = () => {
      if(!window.xdc){
        let accountDetails = {
          address: null,
          network: null,
          balance: null,
          isLoggedIn: false,
        };

        props.updateAccountDetails(accountDetails);
        if (window.location.pathname === "/FAQ"){
          props.setActiveNavItem("faq");
        } else{
          props.setActiveNavItem("about");
          history.push("/");
        }
      }
      else{
        window.web3 = new Web3(window.xdc ? window.xdc : window.ethereum);

        if (window.web3.currentProvider) {
          if (!window.web3.currentProvider.chainId) {
            const state = window.web3.givenProvider.publicConfigStore ? window.web3.givenProvider.publicConfigStore._state : window.web3.currentProvider.publicConfigStore._state;
            if (!state.selectedAddress) {
              let accountDetails = {
                address: null,
                network: null,
                balance: null,
                isLoggedIn: false,
              };

              props.updateAccountDetails(accountDetails);
              if(window.location.pathname === "/FAQ"){
                props.setActiveNavItem("faq");
              }else{
                props.setActiveNavItem("about");
                history.push("/");
              }
            }
          }
          else{
            let accountDetails = {
              address: null,
              network: null,
              balance: null,
              isLoggedIn: false,
            };

            props.updateAccountDetails(accountDetails);
            if (window.location.pathname === "/FAQ"){
              props.setActiveNavItem("faq");
            } else{
              props.setActiveNavItem("about");
              history.push("/");
            }
          }
        }
        else{
          let accountDetails = {
            address: null,
            network: null,
            balance: null,
            isLoggedIn: false,
          };

          props.updateAccountDetails(accountDetails);
          if (window.location.pathname === "/FAQ"){
            props.setActiveNavItem("faq");
          } else{
            props.setActiveNavItem("about");
            history.push("/");
          }
        }
      }

    }

    setTimeout(() => {
      handleWalletSession();
    }, 1000);
    handleXDCPayWalletChange();
    window.addEventListener("load", handleXDCPayWalletChange);
  }, []);

  return (
    <>
      <HeaderContainer>
        <SpaceBetween>
          <div className="Space-between">
            {/* <GridLogo src="/images/ShowApps.svg" /> */}
            <div>
              <UserMenu1
                onClick={() => toggleSidebar()}
                src="images/menu.svg"
              />{" "}
            </div>
            <SmartMintLogo src="/images/Origin-Active.svg" />
            <Span onClick={() => history.push("/")}>Origin</Span>
            <BetaImgContainer>
              <BetaImg src="/images/beta_tag.svg" alt="" />
            </BetaImgContainer>
          </div>
          <div className="buttons">
            {/* <UserLogo  src="/images/profile.svg" /> */}
            <MobBtn onClick={() => history.push("/connect-wallet-mobile")}>
              Connect Wallet
            </MobBtn>
            <UserMenu onClick={() => toggleSidebar()} src="images/menu.svg" />
            {props.userDetails?.accountDetails?.address ? (
              <AddressContainer>
                <Balance>
                  {props.userDetails?.accountDetails?.balance} XDC
                </Balance>
                <Address>
                  {props.userDetails?.accountDetails?.address
                    .slice(0, 5)
                    .replace(/0x/, "xdc") +
                    "..." +
                    props.userDetails?.accountDetails?.address.substr(
                      props.userDetails?.accountDetails?.address.length - 5
                    )}
                </Address>
                {forceUpdate ? (
                  <AccountIcon>
                    <WalletDummyImg src="/images/wallet_dummy_image.svg" alt="" />
                  </AccountIcon>
                ) : (
                  <AccountIcon>
                    <Identicon
                      diameter={20}
                      address={props.userDetails?.accountDetails?.address}
                      network={props.userDetails?.accountDetails?.network}
                    />
                  </AccountIcon>
                )
                }
              </AddressContainer>
            ) : (
              <Button onClick={() => connectWallet()}>Connect Wallet</Button>
            )}
          </div>
        </SpaceBetween>
      </HeaderContainer>
      {isOpen ? <Sidebar /> : ""}
      <ConnectWallet
        open={connectWalletDialoag}
        onClose={connectWallet}
        handleClose={connectWallet}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  userDetails: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  user: (isconnectWallet) => {
    dispatch(handleWallet(isconnectWallet));
  },
  updateAccountDetails: (accountDetails) => {
    dispatch(updateAccountDetails(accountDetails));
  },
  setActiveNavItem: (isActive) => {
    dispatch(handleNavItem(isActive))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
