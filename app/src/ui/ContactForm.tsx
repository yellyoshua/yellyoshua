import { FormEventHandler, useEffect, useState } from "react";

const MAIL_REGEX = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$';
const NAME_MIN_LENGTH = 3;

function isEmail(email: string) {
	const re = new RegExp(MAIL_REGEX, 'i');
	return re.test(String(email).toLowerCase());
}

export default function ContactForm({}) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [canSubmit, setCanSubmit] = useState(false);
	const [alreadySent, setAlreadySent] = useState(false);
	const [isSending, setIsSending] = useState(false);

	const handleSubmit: FormEventHandler<HTMLFormElement>  = (e) => {
		e.preventDefault();
		console.log(name, email, message);
		setIsSending(true);
		fetch('/api/contact', {
			method: 'POST',
			body: JSON.stringify({ name, email, message }),
		}).then(() => {
			setName('');
			setEmail('');
			setMessage('');
			setAlreadySent(true);
			setIsSending(false);
		}).catch(() => {
			setIsSending(false);
		});
	}

	useEffect(() => {
		const isFormValid = name.length >= NAME_MIN_LENGTH && isEmail(email);
		setCanSubmit(isFormValid);
	}, [name, email, message]);

	if (alreadySent) {
		return (
			<div className="w-full">
				<div className="mx-auto px-5 sm:px-12 py-5">
					<h1 className="text-2xl font-bold text-center dark:text-white">
						Thank you for your message!
					</h1>
					<p className="text-center dark:text-white">
						We will get back to you as soon as possible.
					</p>
				</div>
			</div>
		);
	}

	return <form className="sm:max-w-lg max-w-2xl m-auto bg-gray-700 rounded-md" onSubmit={handleSubmit}>
		<h1 className="mx-3 pt-4 text-2xl font-bold text-white">Contact form</h1>
		<div className="my-4 mx-3">
			<div className="w-full flex flex-wrap justify-between">
				<div className="mr-1 block flex-1">
					<label
						className="text-white block"
						htmlFor="name"
					>
						FULL NAME *
					</label>
					<input
						type="text"
						className="block w-full px-4 py-2 flex-1 text-gray-900 border-b-2 border-blue-500 focus:outline-none focus:border-yellow-600"
						placeholder="Enter your name"
						spellCheck="false"
						minLength={NAME_MIN_LENGTH}
						autoComplete="off"
						id="name"
						required
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="ml-1 block flex-1">
					<label
						className="text-white block"
						htmlFor="email"
					>
						EMAIL *
					</label>
					<input
						type="text"
						className="block w-full px-4 py-2 flex-1 text-gray-900 border-b-2 border-blue-500 focus:outline-none focus:border-yellow-600"
						placeholder="Enter your email"
						spellCheck="false"
						autoComplete="off"
						id="email"
						required
						pattern={MAIL_REGEX}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
			</div>
			<div className="block mt-2">
					<label
						className="text-white block"
						htmlFor="message"
					>
						MESSAGE
					</label>
				<textarea
					className="px-4 py-2 w-full text-gray-900 border-b-2 border-blue-500 focus:outline-none focus:border-yellow-600"
					placeholder="Your message here..."
					id="message"
					style={{minHeight: '225px'}}
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
			</div>
		</div>
		<button
			className={`
				${canSubmit ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-500 hover:bg-gray-700'}
				text-white font-bold py-2 px-4 m-auto w-full rounded-br rounded-bl
			`}
			disabled={isSending}
			type="submit"
		>
			Send
		</button>
	</form>
}