<script>
	import { validateEmail } from '$lib/validation'
	import TextInput from '$lib/TextInput.svelte'
	import Message from '$lib/Message.svelte'
	import { api } from '$lib/api'

	let message
	let email = ''
	let messageType = 'warning'

	$: emailValid = validateEmail(email)
	$: formIsValid = emailValid

	async function submitForm() {
		const forgotForm = document.getElementById('forgot-form')
		try {
			const res = await api('POST', 'user/forgot', { email })
			if (res && res.status >= 400) {
				throw new Error(res.message)
			}
			messageType = 'success'
			message = res.message
			return forgotForm.reset()
		} catch (err) {
			messageType = 'warning'
			return (message = err.message)
		}
	}

	function closeMessage() {
		message = null
	}
</script>

<svelte:head>
	<title>Forgot Password</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<main class="container mt-5">
	<div class="d-flex justify-content-center">
		<form class="card" id="forgot-form" style="max-width: 40em">
			<div class="card-body">
				<h2 class="text-primary">FORGOT PASSWORD</h2>
				<p>Enter your email address below and we'll send you password reset instructions.</p>
				<hr />
				<TextInput
					id="email"
					label="Email"
					valid={emailValid}
					validityMessage="Please enter a valid email."
					value={email}
					className="is-large"
					on:input={(event) => (email = event.target.value)}
				/>
				{#if message}
					<Message {message} {messageType} on:closeMessageEvent={closeMessage} />
				{/if}
				<div class="is-clearfix">
					<button
						class="btn btn-primary float-end"
						on:click|preventDefault={submitForm}
						disabled={!formIsValid}
					>
						Reset Password
					</button>
				</div>
			</div>
		</form>
	</div>
</main>
