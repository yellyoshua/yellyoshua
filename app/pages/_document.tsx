import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang='es'>
				<Head>
					<link href='https://fonts.googleapis.com/css2?family=Varela+Round&display=swap' rel='stylesheet'></link>
					<link href='https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&display=swap' rel='stylesheet'></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
