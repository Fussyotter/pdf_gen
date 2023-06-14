'use client';
import React, { useEffect } from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const PdfGenerator = ({form}) => {
	 



	const generatePdf = () => {
		const docDefinition = {
			content: [
				{ text: 'Film Production Call Sheet', style: 'header' },
				'\n\n',
				{
					table: {
						widths: ['33%', '33%', '33%'],
						body: [
							[
								{
									table: {
										widths: ['*', '*'],
										body: [
											['Production:', form.production],
											['Director:', form.director],
											['Producer:', form.producer],
											['Date:', form.date],
											['Location:', form.location],
										],
									},
									layout: {
										hLineWidth: () => 0,
										vLineWidth: () => 0,
									},
								},
								{
									table: {
										widths: ['*'],
										body: [
											[{ text: `Title: ${form.projectTitle}`, style: 'subheader' }],
											[
												{
													text: `General Call: ${form.generalCall}`,
													style: 'subheader',
												},
											],
										],
									},
									layout: {
										hLineWidth: () => 0,
										vLineWidth: () => 0,
									},
								},
								{
									table: {
										widths: ['*', '*'],
										body: [
											['Detailed Title:', form.detailedTitle],
											['Date:', form.date],
											['Call Time:', form.callTime],
											['Lunch Time:', form.lunchTime],
											['Weather:', form.weather],
											['Sunrise:', form.sunrise],
											['Sunset:', form.sunset],
										],
									},
									layout: {
										hLineWidth: () => 0,
										vLineWidth: () => 0,
									},
								},
							],
						],
					},
				},
				'\n\n',
				// Call Times
				{
					table: {
						widths: ['*', '*', '*'],
						body: [
							['Role', 'Name', 'Call Time'],
							['Director', 'Your Director', '6:00 AM'],
							['Actor 1', 'Actor 1', '7:00 AM'],
							['Actor 2', 'Actor 2', '7:30 AM'],
							// More roles and call times here
						],
					},
				},

				'\n\n',

				// Scene Information
				{
					table: {
						widths: ['*', '*', '*', '*'],
						body: [
							['Scene', 'Page Numbers', 'Cast Numbers', 'Location'],
							// More scenes here
							['Scene 1', '1-5', '1,2,3', 'Location 1'],
							[
								{
									colSpan: 4,
									table: {
										widths: ['*', '*', '*'],
										body: [['Scene Details', 'Page Numbers', 'Cast Numbers']],
									},
								},
								{},
								{},
								{},
							],
							['Additional Information', {}, {}, {}],
						],
					},
				},
			],
			styles: {
				header: {
					fontSize: 18,
					bold: true,
				},
			},
		};
		pdfMake.createPdf(docDefinition).open();
	};
	
	useEffect(() => {
			 if (form && Object.keys(form).length !== 0) {
				 generatePdf(form);
			 }
		 }, [form]);
	return null;
};


export default PdfGenerator;