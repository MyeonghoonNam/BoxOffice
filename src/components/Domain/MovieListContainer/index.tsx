import { Typography, ScreenReader } from '../..';
import MovieListHeader from './MovieListHeader';
import MovieList from './MovieList';

const COMPONENTS = {
	Typography: Typography(),
	ScreenReader: ScreenReader(),
	MovieListHeader: MovieListHeader(),
	MovieList: MovieList(),
};

const MovieListContainer = () => {
	let $element;

	const render = () => {
		const $movieListContainer = document.createElement('section');
		$movieListContainer.setAttribute('class', 'container-movie');

		const $screenReader = COMPONENTS.ScreenReader({
			tag: 'h1',
			text: 'Hoon 시네마',
		});

		const $movieListTitle = COMPONENTS.Typography({
			tag: 'h2',
			attr: { class: 'container-title', value: 'heading' },
			text: 'Hoon 시네마 영화 목록',
		});

		const $movieListHeader = COMPONENTS.MovieListHeader();
		const $movieList = COMPONENTS.MovieList();

		$movieListContainer.appendChild($screenReader);
		$movieListContainer.appendChild($movieListTitle);
		$movieListContainer.appendChild($movieListHeader);
		$movieListContainer.appendChild($movieList);

		return $movieListContainer;
	};

	return () => {
		$element = render();

		return $element;
	};
};

export default MovieListContainer;
