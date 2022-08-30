import React, { useEffect, useRef, useState } from 'react';
import { Block } from './Block';
import './Converter.scss';

function Converter() {
	const [fromCurrency, setFromCurrency] = useState('RUB');
	const [toCurrency, setToCurrency] = useState('USD');
	const [fromPrice, setFromPrice] = useState(0)
	const [toPrice, setToPrice] = useState(1)

	const ratesRef = useRef({});

	useEffect(() => {
		fetch('https://cdn.cur.su/api/latest.json')
			.then((res) => res.json())
			.then((json) => {
				ratesRef.current = json.rates;
				onChangeToPrice(1);
			})
			.catch((err) => {
				console.warn(err);
				alert('Не удалось получить информацию')
			});
	}, []);

	const onChangeFromPrice = (value) => {
		const price = value / ratesRef.current[fromCurrency];
		const result = price * ratesRef.current[toCurrency]
		setFromPrice(value)
		setToPrice(result.toFixed(3))
	}
	const onChangeToPrice = (value) => {
		const result = (ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) * value;
		setFromPrice(result.toFixed(3));
		setToPrice(value)
	}

	useEffect(() => {
		onChangeFromPrice(fromPrice);
	}, [fromCurrency]);
	useEffect(() => {
		onChangeToPrice(toPrice);
	}, [toCurrency]);

	return (
		<div className="Converter__wrapper">
			<div className='Converter__block'>
				<Block
					value={fromPrice}
					currency={fromCurrency}
					onChangeCurrency={setFromCurrency}
					onChangeValue={onChangeFromPrice}
				/>
				<Block
					value={toPrice}
					currency={toCurrency}
					onChangeCurrency={setToCurrency}
					onChangeValue={onChangeToPrice}
				/>
			</div>
		</div>
	);
}

// https://cdn.cur.su/api/latest.json

export default Converter;
