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

	return (
		<div className="App">
			<h1 className="word-cloud-app-header">
				Christina Kirk - Topics Challenge
			</h1>
			<WordCloudView
				setSelectedWord={setSelectedWord}
				displayWordDetailsOverlay={displayWordDetailsOverlay}
			/>
			<WordDetailsPanel
				showWordDetailsOverlay={showWordDetailsOverlay}
				hideWordDetailsOverlay={hideWordDetailsOverlay}
				selectedWord={selectedWord}
			/>
		</div>
	);
}

export default App;
