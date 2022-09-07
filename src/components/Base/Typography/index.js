const Typography = () => {
	let $element;

	const render = ({ tag, attr = false, text }) => {
		const $typography = document.createElement(tag);

		if (attr) {
			const keys = Object.keys(attr);

			for (const a of keys) {
				$typography.setAttribute(a, attr[a]);
			}
		}

		$typography.innerText = text;

		return $typography;
	};

	return (props) => {
		$element = render(props);

		return $element;
	};
};

export default Typography;
