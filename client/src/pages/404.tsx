import MainLayout from '@/app/layouts/MainLayout';

function NotFoundPage() {
	return (
		<MainLayout title='404'>
			<p className='text-center text-4xl my-28 font-arvo dark:text-white'>
				404 - Page Not Found
			</p>
			<p className='text-center text-2xl my-28 font-arvo dark:text-white'>
				Please go back to the home page
			</p>
		</MainLayout>
	);
}

export default NotFoundPage;
