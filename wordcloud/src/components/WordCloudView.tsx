import { FunctionComponent, useEffect, useState } from "react";
import WordCloud from "react-d3-cloud";
// import { TopicsWireframeApi } from "../api/index";
import { topicsData } from "../api/topicsApiData";
import { TopicData, ApiTopicsData } from "../api/topicsDataModel";
import { Tooltip } from "react-bootstrap";

const prefixedTextSizes = [""]; //CKTODO: create enum for font sizes

interface IWordCloudViewProps {
	setSelectedWord: (word: TopicData) => void;
	displayWordDetailsOverlay: () => void;
}

const WordCloudView: FunctionComponent<IWordCloudViewProps> = ({
	setSelectedWord,
	displayWordDetailsOverlay,
}) => {
	// const api = new TopicsWireframeApi();
	// useEffect(() => {
	// 	if (!wordCloudData.length) {
	// 		const convteredWordCloudData = convertToWordCloudData(topicsData);
	// 		// @ts-ignore
	// 		setWordCloudData(convteredWordCloudData);
	// 	}
	// }, []);

	/**
	 * Convert raw topics data into data type useable by WordCloud
	 * @param topicsData - api topics data
	 * @returns convertedData - data formatted for use by WordCloud
	 */
	const convertToWordCloudData = (topicsData: ApiTopicsData) => {
		const convertedData = topicsData.topics.map((topic: TopicData) => {
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

	/**
	 * Handles updating selecting word and displaying word details on click from WordCloud
	 * @param word - word selected from WordCLoud
	 */
	const handleWordClick = (word: TopicData) => {
		setSelectedWord(word);
		displayWordDetailsOverlay();
	};

	return (
		<div className="word-cloud-container">
			<WordCloud
				data={convertToWordCloudData(topicsData)}
				width={500}
				rotate={0}
				font="Gill Sans"
				fill={(word: any) => calculateSentimentScoreColor(word?.sentimentScore)}
				fontWeight="bold"
				fontSize={(word: any) => word.value}
				onWordClick={(event: any, word: any) => handleWordClick(word)}
				onWordMouseOver={(event: any, word: any) => console.log(event, word)}
				random={() => 0}
				padding={8}
			/>
		</div>
	);
};

export default WordCloudView;
