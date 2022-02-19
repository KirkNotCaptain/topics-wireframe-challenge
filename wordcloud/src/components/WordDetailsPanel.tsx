import { FunctionComponent } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

const WordDetailsPanel: FunctionComponent = () => {
	return (
		<>
			<Offcanvas show={true} onHide={() => {}} placement={"end"}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Offcanvas</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					Some text as placeholder. In real life you can have the elements you
					have chosen. Like, text, images, lists, etc.
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};

export default WordDetailsPanel;
