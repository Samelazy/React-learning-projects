import './App.css';
import { Routes, Route } from 'react-router-dom'
import { NotFoundPage } from './components/NotFoundPage';
import { HomePage } from './components/HomePage';
import { Layout } from './components/Layout';
import ModalComponent from './components/Modal/ModalComponent';
import Quiz from './components/Quiz/Quiz';
import UsersFunction from './components/Users/Users';
import Converter from './components/Converter/Converter';
import GalleryFunction from './components/Gallery/Gallery';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="modal" element={<ModalComponent />} />
					<Route path="quiz" element={<Quiz />} />
					<Route path="users" element={<UsersFunction />} />
					<Route path="converter" element={<Converter />} />
					<Route path="gallery" element={<GalleryFunction />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
