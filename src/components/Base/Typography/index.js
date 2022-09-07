const Typography = () => {
	let $element;

	const render = ({ tag, attr = false, text }) => {
		const $typography = document.createElement(tag);

		if (attr) {
			for (const a of Array.from(attr)) {
				$typography.setAttribute(a, attr.a);
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
