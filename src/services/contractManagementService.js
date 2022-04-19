import { httpService } from "../utility/httpService";
import {httpConstants} from "../constants";
import axios from "axios";


export default {
  getDraftFailedXrc20Token,
  deleteContract,
  getXrc20TokenById,
  getDeployedXrc20Token,
  updateDeployedXrc20Token,
  uploadFileToS3,
  };


  function getHeaders() {
    return {
      "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON,
      skip: true,
    };
  }

  function getFileUploadHeaders() {
    return {
      "Content-Type": httpConstants.CONTENT_TYPE.MULTIPART_FORM_DATA,
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
    let url =
      process.env.REACT_APP_CONTRACT_MANAGEMENT_SERVICE_URL +
        httpConstants.API_END_POINT.GET_DEPLOYED_XRC20TOKEN;
    
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

async function uploadFileToS3(requestData) {
  let uploadResponse;
  let url =
    process.env.REACT_APP_CONTRACT_MANAGEMENT_SERVICE_ORIGIN_URL +
    httpConstants.API_END_POINT.UPLOAD_FILE_TO_S3;
    
    await axios
    .post(url, requestData)
    .then((response) => { 
      if (
        !response.data.success || 
        response.data.responseCode !== 200 ||
        !response.data.responseData ||
        response.data.responseData.length === 0
      )
        uploadResponse = response.data;
      uploadResponse = response.data;
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
  
    return uploadResponse;
}