import axios from "axios";
import Cookies from "js-cookie"
import Env from '../environment'

export const baseUrl = Env().baseUrl
const authorization = Cookies.get('authorization');

const log_prefix = "[API_HONDA]"
const VERBOSE = Env().logs

const messages = {
  start: "Starting request.",
  end: "End request.",
  non200x: "The request was made and the server responded with a status code that falls out of the range of 2xx.",
  noResp: "The request was made but no response was received.",
  badConfig: "Something happened in setting up the request that triggered an Error.",
}

const genericError = {
  message: "Something went wrong!",
  status: 500
}

export const logger = (message: any, verbose: any, type: any) => {
  if (verbose) {
    if(type === "error") {
      message = `[ERROR] ${message}`;
      type = "info"
    }

    if (process.env.NODE_ENV !== "production") {
      // console
    }
  }
}

export const defaultCatch = (error: any, resolve: any) => {
  if (error.response) {
    logger(`${log_prefix} ${messages.non200x}`, VERBOSE, "error");
    logger(`${log_prefix} evaluating(error.response) ${error.response}`, VERBOSE, "error");

    resolve(error.response)
  } else if (error.request) {
    logger(`${log_prefix} ${messages.noResp}`, VERBOSE, "error");
    logger(`${log_prefix} evaluating(http.ClientRequest) ${error.request}`, VERBOSE, "error");

    resolve(genericError)
  } else {
      logger(`${log_prefix} ${messages.badConfig}`, VERBOSE, "error");
      logger(`${log_prefix} evaluating(config) ${error.config}`, VERBOSE, "error");
      logger(`${log_prefix} evaluating(axios.instance) ${instance}`, VERBOSE, "error");

      resolve(genericError)
  }
}

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Authorization': `Bearer ${authorization}`
  }
});



export default {
  get: <T>(url: string, params?: object) => axiosInstance.get<T>(url, {...params}),
  post: <T>(url: string, data: any) => axiosInstance.post<T>(url, data, {}),
  patch: <T>(url: string, data: any) => axiosInstance.patch<T>(url, data, {}),
  delete: <T>(url: string) => axiosInstance.delete<T>(url, {}),
}