import axios, { AxiosRequestConfig } from 'axios';

export async function request<ResponseDataType = {}>(options: AxiosRequestConfig, onError?: (err: any) => void) {
  try {
    return await axios.request<ResponseDataType>(options);
  } catch (e: any) {
    onError && onError(e);
    return null;
  }
}
