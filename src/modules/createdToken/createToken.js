import React, { PureComponent } from 'react'
import styled from "styled-components";
import {Row,Column} from "simple-flexbox";

const ParentContainer = styled.div`
            width: 688px;
            height: 588px;
            background: #FFFFFF 0% 0% no-repeat padding-box;
            border-radius: 6px;
            margin: 0 auto;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 25px;`;

export default class createToken extends PureComponent {
    render() {
        return (
            <div>
                <ParentContainer>
                    <div className="successTokenIcon">
                        <img src="images/Success.svg"></img>
                    </div>
                    <div className="successTokenText">
                        Successfully Created Meta Tokens
                    </div>
                    <div>
                        <div className="successTokenDetails">
                            <Row className = "w-100 margin"  justifyContent= "space-between" ><span className="successTokenOption w-40" ><img className="m-r-10 m-b-3" src="images/Info.svg"></img>Transaction Hash:</span> <div className="w-60 text-align"><a className='successTokenValues'>0x0336730a6a614ae4008e9760e…e878</a><img className="m-l-8 m-b-3" src="images/Copy.svg"></img></div></Row>
                            <Row  className = "w-100 margin" justifyContent= "space-between"><span className="successTokenOption w-40"><img className="m-r-10 m-b-3" src="images/Info.svg"></img>Contract Address:</span>  <div className="w-60 text-align"><a className='successTokenValues'>0x0336730a6a614ae4008e9760e…e878</a><img className="m-l-8 m-b-3" src="images/Copy.svg"></img></div></Row>
                            <Row  className = "w-100 margin" justifyContent= "space-between"><span className="successTokenOption w-40"><img className="m-r-10 m-b-3" src="images/Info.svg"></img>Tokens Minted:</span> <div className =  "w-60 text-align f-w-100">10000000</div></Row>
                            <Row  className = "w-100 margin" justifyContent= "space-between"><span className="successTokenOption w-40"><img className="m-r-10 m-b-3" src="images/Info.svg"></img>Gas Fee:</span> <div className =  "w-60 text-align f-w-100">0.00000000025 XDC (0.25 Gwei)</div></Row>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="buttonAdd">
                            <div className="buttonContent">
                                <p className= "m-1">Add to XDCPay</p>
                                <img className = "m-r-10" src="images/XDC-Icon-128X128.svg"></img>
                            </div>
                        </button>
                        <button className="buttonManage">
                            <div className="buttonContent">
                                <p className= "m-1">Manage Token</p>
                                <img className = "m-r-10" src="images/Button_Next_Arrow.svg"></img>
                            </div>
                        </button>
                    </div>
                </ParentContainer>
            </div>
        )
    }
}
