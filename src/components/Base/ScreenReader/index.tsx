interface IProps {
	tag: string;
	text: string;
}

function ScreenReader({ tag, text }: IProps) {
	const Tag = tag as keyof JSX.IntrinsicElements;

	return <Tag className="sr-only">{text}</Tag>;
}

export default ScreenReader;
