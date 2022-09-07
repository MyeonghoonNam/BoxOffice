import { ScreenReader } from '../../../index.js';

const COMPONENTS = {
	ScreenReader: ScreenReader(),
};

const MovieListHeader = () => {
	let $element;

	const render = () => {
		const $movieListHeader = document.createElement('header');

		const $h3 = COMPONENTS.ScreenReader({ tag: 'h3', text: '영화 정보 목록' });
		const $nav = document.createElement('nav');
		$nav.setAttribute('id', 'nav-key');
		$nav.setAttribute('class', 'nav-movie');
		$nav.innerHTML = `
      <ul class="nav-movie-list">
        <li class="on">
          <a href="#none" class="nav-link">현재상영영화</a>
        </li>
        <li><a href="#none" class="nav-link">처음예정영화</a></li>
        <li><a href="#none" class="nav-link">박스오피스</a></li>
      </ul>
    `;

		$movieListHeader.appendChild($h3);
		$movieListHeader.appendChild($nav);

		return $movieListHeader;
	};

	return () => {
		$element = render();

		return $element;
	};
};

export default MovieListHeader;
