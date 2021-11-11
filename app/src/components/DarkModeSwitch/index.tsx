import { useEffect } from 'react';
import Switch from 'react-switch';
import { changeDarkMode } from '@/app/flux/actions';
import { useThemeStore } from '@/app/flux/stores';
import MoonIcon from '@heroicons/react/outline/MoonIcon';
import SunIcon from '@heroicons/react/outline/SunIcon';
import { isBrowser } from '@/app/utils/storage';

export const DarkModeSwitch = () => {
	const isDarkMode = useThemeStore((state) => state.darkMode);

	useEffect(() => {
		if (isBrowser) {
			const timesChangedDarkMode =
				useThemeStore.getState().timesChangedDarkMode;

			if (
				window.matchMedia &&
				window.matchMedia('(prefers-color-scheme: dark)').matches &&
				timesChangedDarkMode === 0
			) {
				changeDarkMode(true, false);
			} else {
				changeDarkMode(isDarkMode, false);
			}
		}
	}, []);

	if (!isBrowser) {
		return null;
	}

	return (
		<div>
			<Switch
				className='shadow-sm'
				checkedIcon={
					<div className='w-full h-full flex justify-center items-center'>
						<MoonIcon width='16' height='16' className='text-white' />
					</div>
				}
				uncheckedIcon={
					<div className='w-full h-full flex justify-center items-center'>
						<SunIcon width='16' height='16' className='text-yellow-600' />
					</div>
				}
				onColor='#303030'
				offColor='#FFF200'
				onChange={(checked) => changeDarkMode(checked)}
				checked={isDarkMode}
			/>
		</div>
	);
};
