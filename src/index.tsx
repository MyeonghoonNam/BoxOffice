// import App from './App.js';

// const config = {
// 	root: '#root',
// };

// const app = App();

// const render = () => {
// 	window.requestAnimationFrame(() => {
// 		const root = document.querySelector(config.root);

// 		if (root) {
// 			root.replaceWith(app(root));
// 		}
// 	});
// };

// render();
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
