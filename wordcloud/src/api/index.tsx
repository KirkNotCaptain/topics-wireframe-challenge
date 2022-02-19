import { topicsData } from "./topicsApiData";

export class TopicsWireframeApi {
	getTopics() {
		return new Promise((resolve, reject) => {
			resolve(topicsData);
		});
	}
}
