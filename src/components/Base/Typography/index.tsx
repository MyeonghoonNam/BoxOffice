interface IProps {
	tag: string;
	attr?: {
		[key: string]: string;
	};
	text: string;
}

function Typography({ tag, attr, text }: IProps) {
	const Tag = tag as keyof JSX.IntrinsicElements;

	return <Tag {...attr}>{text}</Tag>;
}

export default Typography;
