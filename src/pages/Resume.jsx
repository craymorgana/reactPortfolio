import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "../assets/AaronMorganResume.pdf";

// Set the worker source for react-pdf (only needs to be done once in your app)
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
	// Use the useState hook to keep track of the current page number and the total number of pages
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	// This function is called when the PDF is successfully loaded
	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages); // Set the total number of pages
	}

	return (
		<div>
			<h1>Resume</h1>
			<div className="pdf-container">
				{/* Render the PDF using the Document and Page components from react-pdf */}
				<Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
					<Page pageNumber={pageNumber} />
				</Document>
			</div>
			<div className="pdf-controls">
				{/* Display the current page number and total number of pages */}
				<p>
					Page {pageNumber} of {numPages}
				</p>
				{/* Add buttons to navigate between pages */}
				<button
					disabled={pageNumber <= 1}
					onClick={() => setPageNumber(pageNumber - 1)}
				>
					Previous
				</button>
				<button
					disabled={pageNumber >= numPages}
					onClick={() => setPageNumber(pageNumber + 1)}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Resume;
