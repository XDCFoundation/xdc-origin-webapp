# XDC Origin Webapp

[Origin](https://origin.xdc.org/) is an innovative platform for smart contract development on the XDC Network that supports the automated creation of XRC standard-compatible tokens on the XDC Network. These token standards come in multiple formats, including XRC20 and XRC223 for fungible assets, XRC721 for non-fungible assets, and XRC888 for fixed-income financial instruments.

## Usage

This webapp handle following operations related to token

- Creation of token with provided token information
- Deployment of token on bloackchain
- Management of token
- Mint Tokens
- Burn Tokens
- Transfer ownership of the token
- Pause all transactions for the token
- Save token as a draft
- Edit and deploy draft token

## Steps for local setup

- clone the repository in your local system
- run `npm install` : To install the dependencies
- run `npm start` : It will start your server on your local machine
- Dependencies : Defined under `package.json`
- Deployment instructions : Docker based deployment, Dockerfile is there in parent directory

## About env file

This file is having different types of variables like:

- All the microservice url that is required in webapp
- API key
- etc.

## X-API-KEY

- To make use of certain APIs, an X-API-KEY would be require.


