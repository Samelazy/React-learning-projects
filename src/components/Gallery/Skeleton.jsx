import React from 'react';
import './Skeleton.css';
import { Skeleton } from '@mui/material';

const SkeletonComponent = () => {
	return (
		<div className='card__skeleton'>
			<Skeleton
				variant='rectangle'
				animation="wave"
				width="100%"
				height={250}
				style={{ borderRadius: 20, marginBottom: 15 }}
			/>
			<Skeleton
				variant="rectangle"
				animation="wave"
				width="30%"
				height={80}
				style={{ display: 'inline-block', borderRadius: 20, marginRight: 10 }}
			/>
			<Skeleton
				variant="rectangle"
				animation="wave"
				width="30%"
				height={80}
				style={{ display: 'inline-block', borderRadius: 20, marginRight: 10 }}
			/>
			<Skeleton
				variant="rectangle"
				animation="wave"
				width="30%"
				height={80}
				style={{ display: 'inline-block', borderRadius: 20 }}
			/>
			<Skeleton
				variant="rectangle"
				animation="wave"
				width="80%"
				height={25}
				style={{ borderRadius: 20, margin: '15px auto 0 auto' }}
			/>
		</div>

	)
}
export default SkeletonComponent;
