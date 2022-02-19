import { FunctionComponent } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Table from "react-bootstrap/Table";
import { 
	LineChart, 
	CartesianGrid, 
	XAxis, 
	YAxis, 
	Tooltip, 
	Legend, 
	Label, 
	Line, 
	PieChart, 
	Pie 
} from 'recharts';
import { Days, PageType } from '../api/topicsDataModel';

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
	/**
	 * Convert UTC date string to DD/MM/YYYY format for pie chage
	 * @param date 
	 * @returns 
	 */
	const convertDateToDDMMYY = (date: string): string => {
		const d = new Date(date);
		const curr_date = d.getDate();
		const curr_month = d.getMonth() + 1;
		const curr_year = d.getFullYear();
		return curr_date + "/" + curr_month + "/" + curr_year;
	}

	/**
	 * Convert topic api days to line graph format
	 * @param apiDates - list of day/volume objects from selectedWord 
	 * @returns convertedDates - converted dates list
	 */
	const convertTopicApiDates = (apiDates: Days): Days => {
		let convertedDates: Days = []
		if (apiDates && apiDates.length) {
			convertedDates = apiDates.map((d: any) => {
				return {
					date: convertDateToDDMMYY(d.date),
					volume: d.volume
				}
			})
		}
		return convertedDates;
	};

	/**
	 * Convert topic api pageType into pie graph format
	 * @param pageTypeData - topic api page type property
	 * @returns convertedPageTypeData - list of page types in pie format
	 */
	const convertPageTypeToPieData = (pageTypeData: PageType) => {
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

	/**
	 * Renders name label for pageType pie graph
	 * @param entry 
	 * @returns 
	 */
	const renderPieGraphLabel = (entry: any) => {
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
				<Offcanvas.Title>{''}</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Title style={{textAlign: 'center', fontSize: '2em'}}>{`-- ${selectedWord.text} --`}</Offcanvas.Title>
				{/*  Volume By Sentiment Table */}
				<Offcanvas.Body>
					<div className="word-details-panel-subheader">Volume By Sentiment:</div>
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
					<div className="word-details-panel-subheader">Volume Over Time:</div>
					<LineChart width={350} height={300} data={convertTopicApiDates(selectedWord.days)}
						margin={{ top: 0, left: 0, bottom: 0, right: 0 }}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="date" >
							<Label value="Date" offset={0} position="insideBottom" />
						</XAxis>
						<YAxis >
							<Label value="Volume" offset={20} position="insideLeft" angle={-90} />
						</YAxis>
						<Tooltip />
						{/* <Legend /> */}
						<Line type="monotone" dataKey="volume" stroke="#82ca9d" />
					</LineChart>

					{/*  Page Type Pie Graph */}
					<div className="word-details-panel-subheader">Volume By Page Type:</div>
					<PieChart width={350} height={250}>
						<Pie 
							data={convertPageTypeToPieData(selectedWord.pageType)} 
							dataKey="value" 
							nameKey="name" 
							cx="50%" 
							cy="50%" 
							outerRadius={50} 
							fill="#82ca9d" 
							label={(e: any) => renderPieGraphLabel(e)} 
						/>
					</PieChart>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};

export default WordDetailsPanel;
