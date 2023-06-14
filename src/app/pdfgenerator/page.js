'use client'
import React from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const PdfGenerator = () => {
	const generatePdf = () => {
		const docDefinition = {
			content: [
				{
					table: {
						headerRows: 2,
						widths: ['*', '*', '*'],
						body: [
							[
								{ text: 'Block 1', rowSpan: 8 },
								{ text: 'Block 2', rowSpan: 4 },
								'Row 1 of Column 3',
							],
							[, '', 'Row 2 of Column 3'],
							['', '', 'Row 3 of Column 3'],
							['', '', 'Row 4 of Column 3'],
							['', '', 'Row 5 of Column 3'],
							['', '', 'Row 6 of Column 3'],
							['', '', 'Row 7 of Column 3'],
							['', '', 'Row 8 of Column 3'],
						],
					},
				},
			],
		};

		pdfMake.createPdf(docDefinition).open();
	};

	return <button onClick={generatePdf}>Generate PDF</button>;
};

export default PdfGenerator;
