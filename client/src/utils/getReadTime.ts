export default function getReadTime(content: string = '') {
	const wordsPerMinute = 160;
	const wordsPerSecond = wordsPerMinute / 60;

	const words = content.split(/\s/g).length;
	const secondsReadTime = Math.ceil(words / wordsPerSecond);

	const secondsLeft = secondsReadTime % 60;
	const minutes = Math.floor(secondsReadTime / 60);

	if (minutes === 0) return `~1 min`;
	if (secondsLeft === 0) return `${minutes} min`;

	return `${minutes} min ${secondsLeft} sec`;
}
