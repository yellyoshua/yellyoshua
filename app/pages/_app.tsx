import 'dayjs/locale/es';
import dayjs from 'dayjs';
import type { AppProps } from 'next/app';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'tailwindcss/base.css';
import 'tailwindcss/tailwind.css';

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('America/Guayaquil');
dayjs.locale('es');

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
