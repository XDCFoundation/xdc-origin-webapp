import { httpConstants } from "../constants";
import { httpService } from "../utility/httpService";

export default {
  saveTokenAsDraft,
  updateDraftedToken,
};

async function saveTokenAsDraft(requestdata) {
  let url =
    process.env.REACT_APP_SAVE_AS_DRAFT +
    httpConstants.API_END_POINT.SAVE_TOKEN;

  return httpService(
    httpConstants.METHOD_TYPE.POST,
    { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
    requestdata,
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject();
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

async function updateDraftedToken(requestdata) {
  let url =
    process.env.REACT_APP_SAVE_AS_DRAFT +
    httpConstants.API_END_POINT.UPDATE_TOKEN;

  return httpService(
    httpConstants.METHOD_TYPE.PUT,
    { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
    requestdata,
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject();
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

