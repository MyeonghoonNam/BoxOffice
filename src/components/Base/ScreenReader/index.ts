interface IProps {
	tag: string;
	text: string;
}

const ScreenReader = () => {
	let $element;

	const render = ({ tag, text }: IProps) => {
		const $screenReader = document.createElement(tag);
		$screenReader.setAttribute('class', 'sr-only');
		$screenReader.innerText = text;

		return $screenReader;
	};

	return (props: IProps) => {
		$element = render(props);

		return $element;
	};
};

export default ScreenReader;
