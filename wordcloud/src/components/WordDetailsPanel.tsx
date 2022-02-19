import { FunctionComponent } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Table from "react-bootstrap/Table";

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
				<Offcanvas.Body>
					<div style={{ textAlign: "center" }}>Total Volume:</div>
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>Postive</th>
								<th>Neutral</th>
								<th>Negative</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{selectedWord.sentiment?.positive}</td>
								<td>{selectedWord.sentiment?.neutral}</td>
								<td>{selectedWord.sentiment?.negative}</td>
							</tr>
						</tbody>
					</Table>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};

export default WordDetailsPanel;
