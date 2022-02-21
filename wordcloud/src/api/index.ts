import { topicsData } from "./topicsApiData";
import { ApiTopicsData } from './topicsDataModel';

/**
 * Mock api client fetching topicsData
 */
class TopicsDataApiClient {
  getTopicsData():Promise<ApiTopicsData> {
    return new Promise((resolve, reject) => {
      resolve(topicsData);
    });
  }
}

export default TopicsDataApiClient;