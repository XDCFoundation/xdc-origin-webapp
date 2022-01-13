import { httpService } from "../utility/httpService";
import {httpConstants} from "../constants"


export default {
    getDraftFailedXrc20Token
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
    
  let url = "http://xdc-mycontract-dev-2107657444.us-east-1.elb.amazonaws.com:3001/get-draft-failed-xrc20token";

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