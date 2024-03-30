import axios, { AxiosRequestConfig, Method } from 'axios';

const RoadmapURL = 'http://127.0.0.1:5001/api';

export class RoadmapAPIUtil {
  static async connect(api: string, method: Method, data?: any) {
    try {
      const url = `${RoadmapURL}/${api}`;
      const axiosConfig: AxiosRequestConfig = {
        method,
        url,
        data,
      };

      const response = await axios(axiosConfig);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
