export function makeHygraphRequest(body: Record<string, any>) {
	return fetch(process.env.HYGRAPH_API_URL!, {
		next: { revalidate: 200 },
		headers: { Authorization: `Bearer ${process.env.HYGRAPH_API_TOKEN}` },
		body: JSON.stringify(body),
		method: 'POST',
	});
}
