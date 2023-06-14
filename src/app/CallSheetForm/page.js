'use client'
import React, { useState } from 'react';

const CallSheetForm = ({ onSubmit }) => {
	const [form, setForm] = useState({
		production: '',
		director: '',
		producer: '',
		date: '',
		location: '',
		projectTitle: '',
		detailedTitle: '',
		callTime: '',
		lunchTime: '',
		weather: '',
		sunrise: '',
		sunset: '',
		generalCall: '',
	});

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(form);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Production:
				<input
					type='text'
					name='production'
					value={form.production}
					onChange={handleChange}
					required
				/>
			</label>
			<label>
				Director:
				<input
					type='text'
					name='director'
					value={form.director}
					onChange={handleChange}
					required
				/>
			</label>
			<label>
				Producer:
				<input
					type='text'
					name='producer'
					value={form.producer}
					onChange={handleChange}
					required
				/>
			</label>
			<label>
				Date:
				<input
					type='date'
					name='date'
					value={form.date}
					onChange={handleChange}
					required
				/>
			</label>
			<label>
				Location:
				<input
					type='text'
					name='location'
					value={form.location}
					onChange={handleChange}
					required
				/>
			</label>
			<label>
				Project Title:
				<input
					type='text'
					name='projectTitle'
					value={form.projectTitle}
					onChange={handleChange}
					required
				/>
			</label>
			<label>
				Detailed Title:
				<input
					type='text'
					name='detailedTitle'
					value={form.detailedTitle}
					onChange={handleChange}
					required
				/>
			</label>
			<label>
				Call Time:
				<input
					type='time'
					name='callTime'
					value={form.callTime}
					onChange={handleChange}
					required
				/>
			</label>
			<label>
				Lunch Time:
				<input
					type='time'
					name='lunchTime'
					value={form.lunchTime}
					onChange={handleChange}
					required
				/>
			</label>
			<label>
				Weather:
				<input
					type='text'
					name='weather'
					value={form.weather}
					onChange={handleChange}
					required
				/>
			</label>
			<label>
				Sunrise:
				<input
					type='time'
					name='sunrise'
					value={form.sunrise}
					onChange={handleChange}
					required
				/>
			</label>
			<label>
				Sunset:
				<input
					type='time'
					name='sunset'
					value={form.sunset}
					onChange={handleChange}
					required
				/>
			</label>
			<label>
				General Call:
				<input
					type='time'
					name='generalCall'
					value={form.generalCall}
					onChange={handleChange}
					required
				/>
			</label>
			<button type='button' onClick={handleSubmit}>
				Generate PDF
			</button>
		</form>
	);
};

export default CallSheetForm;
