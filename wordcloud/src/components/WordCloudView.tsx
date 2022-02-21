// React
import { FunctionComponent, useState, useEffect } from "react";

// Word Cloud 
import WordCloud from "react-d3-cloud";

// Data Model
import { TopicData, ApiTopicsData } from "../api/topicsDataModel";

// Utils
import { calculateSentimentScoreColor, calculateFontsize } from "./utils";

// Api
import TopicsDataApiClient from '../api/index';

interface IWordCloudViewProps {
  setSelectedWord: (word: TopicData) => void;
  displayWordDetailsOverlay: () => void;
}

const WordCloudView: FunctionComponent<IWordCloudViewProps> = ({
  setSelectedWord,
  displayWordDetailsOverlay,
}) => {
  const [maxVolume, setMaxVolume] = useState<number>(0);
  const [minVolume, setMinVolume] = useState<number>(0);
  const [wordCloudData, setWordCloudData] = useState<any[]>([]);

  useEffect(() => {
    if (!wordCloudData.length) {
			const api = new TopicsDataApiClient();
			api.getTopicsData()
			.then((data: ApiTopicsData) => extractWordCloudData(data))
    }
  });

  /**
   * Convert raw topics data into data type useable by WordCloud
   * @param topicsData - api topics data
   * @returns convertedData - data formatted for use by WordCloud
   */
  const extractWordCloudData = (topicsData: ApiTopicsData) => {
    let maxVolume = 0;
    let minVolume = 0;
    let convertedWordCloudData: any[] = [];

    if (topicsData.topics.length) {
      topicsData.topics.forEach((topic) => {
        maxVolume = Math.max(maxVolume, topic.volume);
        minVolume = Math.min(minVolume, topic.volume);

        convertedWordCloudData.push({
          text: topic.label,
          value: topic.volume,
          ...topic,
        });
      });
    }

    setMaxVolume(maxVolume);
    setMinVolume(minVolume);
    setWordCloudData(convertedWordCloudData);
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
        data={wordCloudData}
        width={600}
				height={600}
        rotate={0}
        font="Gill Sans"
        fill={(word: any) => calculateSentimentScoreColor(word?.sentimentScore)}
        fontWeight="bold"
        fontSize={(word: any) => calculateFontsize(word.value, minVolume, maxVolume)}
        onWordClick={(event: any, word: any) => handleWordClick(word)}
        random={() => 0}
        padding={8}
      />
    </div>
  );
};

export default WordCloudView;
