export function makeHygraphRequest(body: Record<string, any>) {
	return fetch(import.meta.env.HYGRAPH_API_URL!, {
		headers: { Authorization: `Bearer ${import.meta.env.HYGRAPH_API_TOKEN}` },
		body: JSON.stringify(body),
		method: 'POST',
	});
}
