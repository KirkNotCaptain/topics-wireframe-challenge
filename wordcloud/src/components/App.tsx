// React
import { useState, FunctionComponent } from "react";

// Styles
import "./styles/App.css";

// Components
import WordCloudView from "./WordCloudView";
import WordDetailsPanel from "./WordDetailsPanel";

// Data Model
import { TopicData } from "../api/topicsDataModel";

const App: FunctionComponent = () => {
	const [showWordDetailsOverlay, setShowWordDetailsOverlay] = useState(false);
	const [selectedWord, setSelectedWord] = useState<TopicData | object>({});

	const displayWordDetailsOverlay = () => setShowWordDetailsOverlay(true);
	const hideWordDetailsOverlay = () => setShowWordDetailsOverlay(false);

	return (
		<div className="App">
			<h1 className="word-cloud-app-header"> Christina Kirk - Topics Challenge </h1>
			<div className='word-cloud-app-base-text'> To begin click any word for more details</div>
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
