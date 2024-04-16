import 'dayjs/locale/es';
import dayjs from 'dayjs';
import type { AppProps } from 'next/app';
import { Arvo, Varela } from 'next/font/google';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { ThemeProvider } from 'next-themes';
import '../styles/base.css';

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale('en');

const arvo = Arvo({
	weight: ['400', '700'],
	display: 'swap',
	subsets: ['latin'],
});
const varela = Varela({ weight: ['400'], display: 'swap', subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute='class'>
			<main className={`${arvo.className} ${varela.className}`}>
				<Component {...pageProps} />
			</main>
		</ThemeProvider>
	);
}

export default MyApp;
