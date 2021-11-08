import { useSafeFetch } from '../useSafeFetch';

/* eslint-disable */
global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
	})
);

beforeEach(() => {
	fetch.mockClear();
});

/* eslint-enable */

describe('useSafeFetch - use cases', () => {
	it('should be aborted property be falsy', async () => {
		const { safeFetch, signal } = useSafeFetch();

		await safeFetch('http://sample-site.com');

		expect(signal?.aborted).toBeFalsy();
	});

	it('should be aborted property be truthy', async () => {
		const { safeFetch, controller, signal } = useSafeFetch();

		await safeFetch('http://sample-site.com');

		expect(signal?.aborted).toBeFalsy();

		controller?.abort();

		expect(signal?.aborted).toBeTruthy();
	});
});
