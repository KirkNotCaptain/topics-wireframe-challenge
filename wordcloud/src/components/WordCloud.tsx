import { FunctionComponent, useEffect, useState } from "react";
import WordCloud from "react-d3-cloud";
// import { TopicsWireframeApi } from "../api/index";
import { topicsData } from "../api/data";
import { TopicData } from "../api/dataModel";

const prefixedTextSizes = [""]; //CKTODO: create enum for font sizes

interface IWordCloudViewProps {
	setSelectedWord: () => void;
	displayWordDetailsOverlay: () => void;
	hideWordDetailsOverlay: () => void;
}

const WordCloudView: FunctionComponent<IWordCloudViewProps> = ({
	setSelectedWord,
	displayWordDetailsOverlay,
	hideWordDetailsOverlay,
}) => {
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

	const calculateSentimentScoreColor = (score: number) => {
		if (score > 60) {
			return "green";
		} else if (score < 40) {
			return "red";
		} else {
			return "grey";
		}
	};

	const handleWordClick = (word: TopicData) => {
		// @ts-ignore
		setSelectedWord(word);
		displayWordDetailsOverlay();
	};

	return (
		<div style={{ width: "70%" }}>
			<WordCloud
				// @ts-ignore
				data={convertToWordCloudData(topicsData)}
				width={500}
				rotate={0}
				font="Times"
				// @ts-ignore
				fill={(d) => calculateSentimentScoreColor(d.sentimentScore)}
				fontWeight="bold"
				fontSize={(d) => d.value}
				// @ts-ignore
				onWordClick={(event, d) => handleWordClick(d)}
			/>
		</div>
	);
};

export default WordCloudView;
