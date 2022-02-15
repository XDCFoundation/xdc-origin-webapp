import { httpService } from "../utility/httpService";
import {httpConstants} from "../constants"


export default {
  getDraftFailedXrc20Token,
  deleteContract,
  getXrc20TokenById,
  getDeployedXrc20Token,
  updateDeployedXrc20Token
  };


  function getHeaders() {
    return {
      "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON,
      skip: true,
    };
  }



async function getDraftFailedXrc20Token(requestData) {
    // let url =
    //   process.env.REACT_APP_CONTRACT_MANAGEMENT_SERVICE_URL +
    //     httpConstants.API_END_POINT.GET_DRAFT_FAILD_XRC20_TOKEN;
    
  let url = "https://wgpsgpocfa.execute-api.us-east-1.amazonaws.com/mycontract/get-draft-failed-xrc20token";

    return httpService(
      httpConstants.METHOD_TYPE.POST,
      getHeaders(),
      requestData,
      url
    )
      .then((response) => {
        if (
          !response.success ||
          response.responseCode !== 200 ||
          !response.responseData ||
          response.responseData.length === 0
        )
          return Promise.reject(response);
        return Promise.resolve(response.responseData);
      })
      .catch(function (err) {
        return Promise.reject(err);
      });
}

async function deleteContract(requestData) {
    // let url =
    //   process.env.REACT_APP_CONTRACT_MANAGEMENT_SERVICE_URL +
    //     httpConstants.API_END_POINT.DELETE_XRC20_TOKEN + "/" + requestData.id;
    
  let url = "https://origin.xdc.org:3001/delete-xrc20token" + "/" + requestData.id;

    return httpService(
      httpConstants.METHOD_TYPE.DELETE,
      getHeaders(),
      requestData,
      url
    )
      .then((response) => {
        if (
          !response.success ||
          response.responseCode !== 200 ||
          !response.responseData ||
          response.responseData.length === 0
        )
          return Promise.reject(response);
        return Promise.resolve(response.responseData);
      })
      .catch(function (err) {
        return Promise.reject(err);
      });
}

async function getXrc20TokenById(requestData) {
    // let url =
    //   process.env.REACT_APP_CONTRACT_MANAGEMENT_SERVICE_URL +
    //     httpConstants.API_END_POINT.GET_XRC20TOKEN_BY_ID;
    
  let url = "https://wgpsgpocfa.execute-api.us-east-1.amazonaws.com/mycontract/get-xrc20Token-by-id";

    return httpService(
      httpConstants.METHOD_TYPE.POST,
      getHeaders(),
      requestData,
      url
    )
      .then((response) => {
        if (
          !response.success ||
          response.responseCode !== 200 ||
          !response.responseData ||
          response.responseData.length === 0
        )
          return Promise.reject(response);
        return Promise.resolve(response.responseData);
      })
      .catch(function (err) {
        return Promise.reject(err);
      });
}

async function getDeployedXrc20Token(requestData) {
    // let url =
    //   process.env.REACT_APP_CONTRACT_MANAGEMENT_SERVICE_URL +
    //     httpConstants.API_END_POINT.GET_DEPLOYED_XRC20TOKEN;
    
  let url = "https://wgpsgpocfa.execute-api.us-east-1.amazonaws.com/mycontract/get-deployed-xrc20token";

    return httpService(
      httpConstants.METHOD_TYPE.POST,
      getHeaders(),
      requestData,
      url
    )
      .then((response) => {
        if (
          !response.success ||
          response.responseCode !== 200 ||
          !response.responseData ||
          response.responseData.length === 0
        )
          return Promise.reject(response);
        return Promise.resolve(response.responseData);
      })
      .catch(function (err) {
        return Promise.reject(err);
      });
}

async function updateDeployedXrc20Token(requestData) {
    // let url =
    //   process.env.REACT_APP_CONTRACT_MANAGEMENT_SERVICE_URL +
    //     httpConstants.API_END_POINT.UPDATE_CONTRACTS;
    
    let url = "https://wgpsgpocfa.execute-api.us-east-1.amazonaws.com/mycontract/update-social-media-urls";

    return httpService(
      httpConstants.METHOD_TYPE.POST,
      getHeaders(),
      requestData,
      url
    )
      .then((response) => {
        if (
          !response.success ||
          response.responseCode !== 200 ||
          !response.responseData ||
          response.responseData.length === 0
        )
          return Promise.reject(response);
        return Promise.resolve(response.responseData);
      })
      .catch(function (err) {
        return Promise.reject(err);
      });
}