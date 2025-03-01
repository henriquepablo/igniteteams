import { Container, Subtitle, Title } from './style';

type HighlightProps = {
	title: string;
	subtitle: string;
};

const Highlight: React.FC<HighlightProps> = ({ title, subtitle }) => {
	return (
		<Container>
			<Title>{title}</Title>
			<Subtitle>{subtitle}</Subtitle>
		</Container>
	);
};

export default Highlight;
