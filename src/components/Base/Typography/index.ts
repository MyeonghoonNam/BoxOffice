interface IProps {
	tag: string;
	attr?: {
		[key: string]: string;
	};
	text: string;
}

const Typography = () => {
	let $element;

	const render = ({ tag, attr, text }: IProps) => {
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

	return (props: IProps) => {
		$element = render(props);

		return $element;
	};
};

export default Typography;
