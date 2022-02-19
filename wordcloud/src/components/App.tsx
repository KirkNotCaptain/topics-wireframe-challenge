import { useState } from "react";
import "./styles/App.css";
import WordCloudView from "./WordCloud";
import WordDetailsPanel from "./WordDetailsPanel";
import WordCloudContext from "./context";
import { TopicData } from "../api/dataModel";

function App() {
	const [showWordDetailsOverlay, setShowWordDetailsOverlay] = useState(false);
	const [selectedWord, setSelectedWord] = useState<TopicData | object>({});

	const displayWordDetailsOverlay = () => setShowWordDetailsOverlay(true);
	const hideWordDetailsOverlay = () => setShowWordDetailsOverlay(false);

	return (
		<div className="App">
			<WordCloudView
				setSelectedWord={setSelectedWord}
				displayWordDetailsOverlay={displayWordDetailsOverlay}
				hideWordDetailsOverlay={hideWordDetailsOverlay}
			/>
			<WordDetailsPanel />
		</div>
	);
}

export default App;
