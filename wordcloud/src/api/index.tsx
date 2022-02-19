import { topicsData } from "./data";

export class TopicsWireframeApi {
	getTopics() {
		return new Promise((resolve, reject) => {
			resolve(topicsData);
		});
	}
}
