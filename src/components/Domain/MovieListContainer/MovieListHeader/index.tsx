import { ScreenReader } from '../../..';

function MovieListHeader() {
	return (
		<header>
			<ScreenReader tag="h3" text="영화 정보 목록" />

			<nav id="nav-key" className="nav-movie">
				<ul className="nav-movie-list">
					<li className="on">
						<a href="#none" className="nav-link">
							현재상영영화
						</a>
					</li>
					<li>
						<a href="#none" className="nav-link">
							처음예정영화
						</a>
					</li>
					<li>
						<a href="#none" className="nav-link">
							박스오피스
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MovieListHeader;
