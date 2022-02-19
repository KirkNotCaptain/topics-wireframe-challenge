import { FunctionComponent } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Table from "react-bootstrap/Table";
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label, Line, PieChart, Pie } from 'recharts';

interface IWordDetailsPanelProps {
	showWordDetailsOverlay: boolean;
	hideWordDetailsOverlay: () => void;
	selectedWord: any;
}
const WordDetailsPanel: FunctionComponent<IWordDetailsPanelProps> = ({
	showWordDetailsOverlay,
	hideWordDetailsOverlay,
	selectedWord,
}) => {
	const convertDateToMMDDYY = (date: any) => {
		const d = new Date();
		const curr_date = d.getDate();
		const curr_month = d.getMonth() + 1;
		const curr_year = d.getFullYear();
		return curr_date + "/" + curr_month + "/" + curr_year;
	}

	const convertAllDates = (wordDates: any) => {
		let convertedDates = []
		if (wordDates && wordDates.length) {
			convertedDates = wordDates.map((d: any) => {
				return {
					date: convertDateToMMDDYY(d.date),
					volume: d.volume
				}
			})
		}
		return convertedDates;
	};

	const convertPageTypeToPieData = (pageTypeData: any) => {
		let convertedPageTypeData = [];
		if (pageTypeData) {
			for (const [key, value] of Object.entries(pageTypeData)) {
				convertedPageTypeData.push({
					name: key,
					value
				})
			}
		}
		return convertedPageTypeData;
	}

	const renderLabel = (entry: any) => {
		return entry.name
	};

	return (
		<>
			<Offcanvas
				show={showWordDetailsOverlay}
				onHide={hideWordDetailsOverlay}
				placement={"end"}
			>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>{selectedWord.text}</Offcanvas.Title>
				</Offcanvas.Header>
				{/*  Volume By Sentiment Table */}
				<Offcanvas.Body>
					<div style={{ textAlign: "center" }}>Total Volume:</div>
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>Total Volume</th>
								<th>Postive</th>
								<th>Neutral</th>
								<th>Negative</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{selectedWord?.volume}</td>
								<td>{selectedWord.sentiment?.positive}</td>
								<td>{selectedWord.sentiment?.neutral}</td>
								<td>{selectedWord.sentiment?.negative}</td>
							</tr>
						</tbody>
					</Table>

					{/*  Volume By Days Graph */}
					<LineChart width={350} height={300} data={convertAllDates(selectedWord.days)}
						margin={{ top: 0, left: 0, bottom: 0, right: 0 }}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="date" >
							<Label value="Date" offset={-5} position="insideBottom" />
						</XAxis>
						<YAxis >
							<Label value="Volume" offset={20} position="insideLeft" angle={-90} />
						</YAxis>
						<Tooltip />
						<Legend />
						<Line type="monotone" dataKey="volume" stroke="#82ca9d" />
					</LineChart>

					{/*  Page Type Pie Graph */}

					<PieChart width={350} height={250}>
						<Pie 
							data={convertPageTypeToPieData(selectedWord.pageType)} 
							dataKey="value" 
							nameKey="name" 
							cx="50%" 
							cy="50%" 
							outerRadius={50} 
							fill="#82ca9d" 
							label={(e: any) => renderLabel(e)} 
						/>
					</PieChart>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};

export default WordDetailsPanel;
