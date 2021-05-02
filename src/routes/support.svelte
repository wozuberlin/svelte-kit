<script>
	import TextInput from '$lib/TextInput.svelte'
	import { validateRequired, validateEmail } from '$lib/validation'
	import { api } from '$lib/api'
	import Message from '$lib/Message.svelte'

	let name = ''
	let email = ''
	let company = ''
	let phone = ''
	let msg = ''
	let message
	let messageType

	$: nameValid = validateRequired(name)
	$: contentValid = validateRequired(msg)
	$: emailValid = validateEmail(email)

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
			if (res) {
				messageType = 'success'
				message = 'Form was sent successfully!'
				return document.getElementById('my-form').reset()
			}
		} catch (err) {
			messageType = 'warning'
			return (message = err.message)
		}
	}

	function handleKeyDown(event) {
		if (event.keyCode === 13) {
			submitQuote()
		}
	}

	function closeMessage() {
		message = null
	}
</script>

<svelte:window on:keydown={handleKeyDown} />

<svelte:head>
	<title>Support Form</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="container">
	<div class="d-flex mt-5 justify-content-center">
		<div class="card" style="max-width: 50em">
			<div class="card-body">
				<h1>How can we help?</h1>
				<form id="my-form">
					<TextInput
						id="name"
						label="Name *"
						valid={nameValid}
						validityMessage="Please enter a valid name."
						value={name}
						className="is-large"
						on:input={(e) => (name = e.target.value)}
					/>
					<TextInput
						id="email"
						label="Email *"
						valid={emailValid}
						validityMessage="Please enter a valid email."
						value={email}
						className="is-large"
						on:input={(e) => (email = e.target.value)}
					/>
					<TextInput
						id="company"
						label="Company Name (optional)"
						type="text"
						value={company}
						className="is-large"
						on:input={(e) => (company = e.target.value)}
					/>
					<TextInput
						id="phone"
						label="Phone Number (optional)"
						type="text"
						className="is-large"
						value={phone}
						on:input={(e) => (phone = e.target.value)}
					/>

					<TextInput
						id="content"
						label="Message *"
						controlType="textarea"
						valid={contentValid}
						validityMessage="Message is required"
						className="is-large"
						bind:value={msg}
					/>
					{#if message}
						<Message {message} {messageType} on:closeMessageEvent={closeMessage} />
					{/if}
					<p>Generally, we are able to respond to inquiries within same business day.</p>
					<button
						class="btn btn-primary btn-lg float-end"
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
