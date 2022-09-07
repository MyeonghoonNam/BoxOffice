const ScreenReader = () => {
	let $element;

	const render = ({ tag, text }) => {
		const $screenReader = document.createElement(tag);
		$screenReader.setAttribute('class', 'sr-only');
		$screenReader.innerText = text;

		return $screenReader;
	};

	return (props) => {
		$element = render(props);

		return $element;
	};
};

export default ScreenReader;
