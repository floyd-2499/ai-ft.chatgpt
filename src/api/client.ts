import axios, { AxiosError, AxiosResponse } from "axios";

const ChatGPTApiClient = axios.create({
  baseURL: "https://api.openai.com/v1/engines/davinci/completions",
});

ChatGPTApiClient.interceptors.request.use((request) => {
  return request;
});

ChatGPTApiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return Promise.resolve(response);
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default ChatGPTApiClient