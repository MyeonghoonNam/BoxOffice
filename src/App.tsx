// import {
// 	ScreenReader,
// 	SkipNavigation,
// 	MovieListContainer,
// 	Footer,
// } from './components/index.js';

// const COMPONENTS = {
// 	ScreenReader: ScreenReader(),
// 	SkipNavigation: SkipNavigation(),
// 	MovieListContainer: MovieListContainer(),
// 	Footer: Footer(),
// };

// const App = () => {
// 	let $element;

// 	const render = (target: Element) => {
// 		const $app = target.cloneNode();

// 		const $skipNavigation = COMPONENTS.SkipNavigation();
// 		const $movieListContainer = COMPONENTS.MovieListContainer();
// 		const $footer = COMPONENTS.Footer();

// 		$app.appendChild($skipNavigation);
// 		$app.appendChild($movieListContainer);
// 		$app.appendChild($footer);

// 		return $app;
// 	};

// 	return (target: Element) => {
// 		$element = render(target);

// 		return $element;
// 	};
// };

// export default App;
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>

				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;