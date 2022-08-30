import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const setActive = ({ isActive }) => isActive ? 'active-link' : '';

export const Layout = () => {
	return (
		<>
			<header>
				<NavLink to="/" className={setActive} >Home</NavLink>
				<NavLink to="/modal" className={setActive}>Modal</NavLink>
				<NavLink to="/quiz" className={setActive}>Quiz</NavLink>
				<NavLink to="/users" className={setActive}>Users</NavLink>
				<NavLink to="/converter" className={setActive}>Converter</NavLink>
				<NavLink to="/gallery" className={setActive}>Gallery</NavLink>
			</header>
			<Outlet />
		</>
	)
}
