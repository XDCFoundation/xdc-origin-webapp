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
    let url =
      process.env.REACT_APP_CONTRACT_MANAGEMENT_SERVICE_URL +
        httpConstants.API_END_POINT.GET_DRAFT_FAILD_XRC20_TOKEN;
    

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
    let url =
      process.env.REACT_APP_CONTRACT_MANAGEMENT_SERVICE_URL +
        httpConstants.API_END_POINT.DELETE_XRC20_TOKEN + "/" + requestData.id;
    

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
    let url =
      process.env.REACT_APP_CONTRACT_MANAGEMENT_SERVICE_URL +
        httpConstants.API_END_POINT.GET_XRC20TOKEN_BY_ID;
    

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
    
  let url = "https://ejt4p6apx3.execute-api.us-east-2.amazonaws.com/prod/get-deployed-xrc20token";

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
    let url =
      process.env.REACT_APP_CONTRACT_MANAGEMENT_SERVICE_URL +
        httpConstants.API_END_POINT.UPDATE_CONTRACTS;
    

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