import { FunctionComponent, useEffect, useState } from "react";
import WordCloud from "react-d3-cloud";
// import { TopicsWireframeApi } from "../api/index";
import { topicsData } from "../api/data";

const WordCloudView: FunctionComponent = () => {
	const [wordCloudData, setWordCloudData] = useState([]);
	// const api = new TopicsWireframeApi();
	useEffect(() => {
		if (!wordCloudData.length) {
			const convteredWordCloudData = convertToWordCloudData(topicsData);
			// @ts-ignore
			setWordCloudData(convteredWordCloudData);
		}
	}, []);

	// @ts-ignore
	const convertToWordCloudData = (topicsData) => {
		// @ts-ignore
		const convertedData = topicsData.topics.map((topic) => {
			return {
				text: topic.label,
				value: topic.volume,
				...topic,
			};
		});
		return convertedData;
	};

	return (
		<div>
			<WordCloud
				// @ts-ignore
				data={convertToWordCloudData(topicsData)}
				width={500}
				rotate={0}
				font="Times"
				fontStyle="italic"
				fontWeight="bold"
				fontSize={(d) => d.value}
			/>
		</div>
	);
};

export default WordCloudView;
