export const isBrowser = typeof window !== 'undefined';

export function setBrowserStorage(
	item: string,
	value: any = null,
	isSession: boolean = false
): null {
	if (isSession) {
		sessionStorage.setItem(item, JSON.stringify(value));
	} else {
		localStorage.setItem(item, JSON.stringify(value));
	}

	return null;
}

export function getBrowserStorage<T = {}>(
	item: string,
	isSession: boolean = false
): T | null {
	if (isSession) {
		const localValue = sessionStorage.getItem(item);
		if (localValue) {
			const value: T = JSON.parse(localValue);
			return value;
		}
	} else {
		const localValue = localStorage.getItem(item);
		if (localValue) {
			const value: T = JSON.parse(localValue);
			return value;
		}
	}

	return null;
}
