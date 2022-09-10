import App from './App.js';

const config = {
	root: '#root',
};

const app = App();

const render = () => {
	window.requestAnimationFrame(() => {
		const root = document.querySelector(config.root);

		if (root) {
			root.replaceWith(app(root));
		}
	});
};

render();
