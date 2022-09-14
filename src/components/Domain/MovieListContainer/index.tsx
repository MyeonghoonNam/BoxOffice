import { Typography, ScreenReader } from '../..';
import MovieListHeader from './MovieListHeader';
import MovieList from './MovieList';

function MovieListContainer() {
	return (
		<section className="container-movie">
			<ScreenReader tag="h1" text="Hoon 시네마" />
			<Typography
				tag="h2"
				attr={{ className: 'container-title', value: 'heading' }}
				text="Hoon 시네마 영화 목록"
			/>
			<MovieListHeader />
			<MovieList />
		</section>
	);
}

export default MovieListContainer;
