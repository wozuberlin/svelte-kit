<script>
	import TextInput from '$lib/TextInput.svelte'
	import { isRequire, isEmail } from '$lib/validation'
	import { api } from '$lib/api'
	import { notifications } from '$lib/notifications/notificationStore'

	let name = ''
	let email = ''
	let company = ''
	let phone = ''
	let msg = ''

	$: nameValid = isRequire(name)
	$: contentValid = isRequire(msg)
	$: emailValid = isEmail(email)
	$: formIsValid = nameValid && emailValid && contentValid

	async function submitQuote() {
		try {
			const userData = {
				name: name,
				email: email,
				message: msg,
				company: company,
				phone: phone
			}
			const res = await api('POST', 'admin/quote', userData)
			if (res.status >= 400) {
				throw new Error(res.message)
			}
			notifications.success('Form was sent!')
			return document.getElementById('my-form').reset()
		} catch (err) {
			notifications.warning(err.message)
		}
	}

	function handleKeyDown(event) {
		if (event.keyCode === 13) {
			submitQuote()
		}
	}

</script>

<svelte:window on:keydown={handleKeyDown} />

<svelte:head>
	<title>Support Form</title>
	<meta name='robots' content='noindex, nofollow' />
</svelte:head>

<div class='container'>
	<div class='d-flex mt-5 justify-content-center'>
		<div class='card' style='max-width: 50em'>
			<div class='card-body'>
				<h1>How can we help?</h1>
				<form id='my-form'>
					<TextInput
						id='name'
						label='Name *'
						valid={nameValid}
						validityMessage='Please enter a valid name.'
						value={name}
						className='is-large'
						on:input={(e) => (name = e.target.value)}
					/>
					<TextInput
						id='email'
						label='Email *'
						valid={emailValid}
						validityMessage='Please enter a valid email.'
						value={email}
						className='is-large'
						on:input={(e) => (email = e.target.value)}
					/>
					<TextInput
						id='company'
						label='Company Name (optional)'
						type='text'
						value={company}
						className='is-large'
						on:input={(e) => (company = e.target.value)}
					/>
					<TextInput
						id='phone'
						label='Phone Number (optional)'
						type='text'
						className='is-large'
						value={phone}
						on:input={(e) => (phone = e.target.value)}
					/>

					<TextInput
						id='content'
						label='Message *'
						controlType='textarea'
						valid={contentValid}
						validityMessage='Message is required'
						className='is-large'
						bind:value={msg}
					/>
					<p>Generally, we are able to respond to inquiries within same business day.</p>
					<button
						class='btn btn-primary btn-lg float-end'
						on:click|preventDefault={submitQuote}
						disabled={!formIsValid}
					>
						Send Form
					</button>
				</form>
			</div>
		</div>
	</div>
</div>
