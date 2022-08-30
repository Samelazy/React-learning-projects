import React, { useEffect, useState } from 'react';
import './Gallery.scss';
import { Collection } from './Collection'
import SkeletonComponent from './Skeleton';

const cats = [
	{ "name": "Все" },
	{ "name": "Море" },
	{ "name": "Горы" },
	{ "name": "Архитектура" },
	{ "name": "Города" }
]


function GalleryFunction() {
	const [categoryId, setCategoryId] = useState(0);
	const [page, setPage] = useState(1);
	const [isLoading, setIsLoading] = useState(true);
	const [searchValue, setSearchValue] = useState('');
	const [collections, setCollections] = useState([]);

	useEffect(() => {
		setIsLoading(true)

		const category = categoryId ? `category=${categoryId}` : '';

		fetch(`https://630ce8e3b37c364eb7fc6d08.mockapi.io/photo_collections?page=${page}&limit=3&${category}`)
			.then((res) => res.json())
			.then((json) => {
				setCollections(json);
			})
			.catch(err => {
				console.warn(err)
				alert('Ошибка при получении данных')
			}).finally(() => setIsLoading(false))
	}, [categoryId, page])


	return (
		<div className="Gallery__wrapper">
			<div className='Gallery__block'>
				<h1>Моя коллекция фотографий</h1>
				<div className="top">
					<ul className="tags">
						{cats.map((obj, i) => (
							<li
								onClick={() => setCategoryId(i)}
								className={categoryId === i ? 'active' : ''}
								key={obj.name}
							>
								{obj.name}
							</li>
						))}
					</ul>
					<input
						value={searchValue}
						onChange={e => setSearchValue(e.target.value)}
						className="search-input"
						placeholder="Поиск по названию"
					/>
				</div>
				<div className="content">
					{isLoading ? (
						<>
							<SkeletonComponent />
							<SkeletonComponent />
							<SkeletonComponent />
						</>
					) : (
						collections
							.filter((obj) => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
							.map((obj, index) => (
								<Collection
									key={index}
									name={obj.name}
									images={obj.photos}
								/>
							))
					)}
				</div>
				<ul className="pagination">
					{
						[...Array(3)].map((_, i) => (
							<li
								key={i}
								onClick={() => setPage(i + 1)}
								className={page === (i + 1) ? 'active' : ''}
							>
								{i + 1}
							</li>
						))
					}
				</ul>
			</div>
		</div>
	);
}

export default GalleryFunction;
