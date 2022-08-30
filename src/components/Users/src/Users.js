import React from 'react';
import './Users.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';
import { useState } from 'react';
import { useEffect } from 'react';

// Тут список пользователей: https://reqres.in/api/users

function UsersFunction() {

	const [users, setUsers] = useState([]);
	const [invites, setInvites] = useState([])
	const [isLoading, setIsLoading] = useState(true);
	const [success, setSuccess] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		fetch('https://reqres.in/api/users')
			.then(res => res.json())
			.then(json => {
				setUsers(json.data)
			}).catch(err => {
				console.warn(err)
				alert('Ошибка при получении пользователей');
			}).finally(() => setIsLoading(false));

	}, [])

	const onChangeSearchValue = (event) => {
		setSearchValue(event.target.value)
	}

	const onClickInvite = (id) => {
		if (invites.includes(id)) {
			setInvites(prev => prev.filter(_id => _id !== id))
		} else {
			setInvites(prev => [...prev, id]);
		}
	}

	const onClickSendInvites = () => {
		setSuccess(true)
	}

	return (
		<div className="Users__wrapper">
			<div className="Users__block">
				{success ? (
					<Success count={invites.length} />
				) : (
					<Users
						onChangeSearchValue={onChangeSearchValue}
						searchValue={searchValue}
						items={users}
						isLoading={isLoading}
						invites={invites}
						onClickInvite={onClickInvite}
						onClickSendInvites={onClickSendInvites}
					/>
				)
				}
			</div>
		</div >
	);
}

export default UsersFunction;