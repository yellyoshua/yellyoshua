import { useRouter } from 'next/router';
import { useState } from 'react';
import { useFormik } from 'formik';
import { applicationStore } from '@/app/store/application.store';

interface Props {}

const SearchBackup = ({}: Props) => {
	const router = useRouter();

	const apiURL = applicationStore.getState().API_URL;
	const [isSubmitting, setSubmitting] = useState(false);

	const search = useFormik({
		initialValues: { messagesId: '' },
		onSubmit: async ({ messagesId }) => {
			try {
				setSubmitting(true);
				if (messagesId.length === 0) {
					return setSubmitting(false);
				}

				const body = JSON.stringify({ messagesId });

				const res = await fetch(`${apiURL}/api/messages`, {
					method: 'POST',
					body,
				});
				if (res.status !== 200) {
					return setSubmitting(false);
				}

				return router.push(`/messages/${messagesId}`);
			} catch (error) {
				return setSubmitting(false);
			}
		},
	});

	return (
		<form
			className={`bg-white shadow p-4 flex ${isSubmitting && 'animate-pulse'}`}
			onSubmit={search.handleSubmit}
		>
			<span className='w-auto flex justify-end items-center text-gray-500 p-2'>
				<i className='uil uil-search text-3xl'></i>
			</span>
			<input
				disabled={isSubmitting}
				name='messagesId'
				onChange={search.handleChange}
				value={search.values.messagesId}
				className='w-full rounded p-2'
				type='text'
				placeholder='Pega tu c&oacute;digo'
			/>
			<button
				disabled={isSubmitting}
				type='submit'
				className='bg-red-400 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4'
			>
				<p className='font-semibold text-xs'>Search</p>
			</button>
		</form>
	);
};

export default SearchBackup;
