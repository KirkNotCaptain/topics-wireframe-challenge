import { useState } from "react";
import "./styles/App.css";
import WordCloudView from "./WordCloudView";
import WordDetailsPanel from "./WordDetailsPanel";
import { TopicData } from "../api/topicsDataModel";

function App() {
	const [showWordDetailsOverlay, setShowWordDetailsOverlay] = useState(false);
	const [selectedWord, setSelectedWord] = useState<TopicData | object>({});

	const displayWordDetailsOverlay = () => setShowWordDetailsOverlay(true);
	const hideWordDetailsOverlay = () => setShowWordDetailsOverlay(false);

	const calculateSentimentScoreColor = (score: number): string => {
		if (score > 60) {
			return "green";
		} else if (score < 40) {
			return "red";
		} else {
			return "grey";
		}
	};

	return (
		<div className="App">
			<h1 className="word-cloud-app-header"> Christina Kirk - Topics Challenge </h1>
			<div className='word-cloud-app-base-text'> To begin click any word for more details</div>
			<WordCloudView
				setSelectedWord={setSelectedWord}
				displayWordDetailsOverlay={displayWordDetailsOverlay}
				calculateSentimentScoreColor={calculateSentimentScoreColor}
			/>
			<WordDetailsPanel
				showWordDetailsOverlay={showWordDetailsOverlay}
				hideWordDetailsOverlay={hideWordDetailsOverlay}
				calculateSentimentScoreColor={calculateSentimentScoreColor}
				selectedWord={selectedWord}
			/>
		</div>
	);
}

export default App;
