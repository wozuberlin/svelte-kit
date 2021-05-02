<script>
	import { api } from '$lib/api'
	import Message from '$lib/Message.svelte'
	import TextInput from '$lib/TextInput.svelte'
	import { validatePassword } from '$lib/validation'
	import { page } from '$app/stores'
	import { goto } from '$app/navigation'

	let message
	let password = ''
	let passwordConfirmation = ''
	let messageType = 'warning'
	let inProgress

	$: passwordValid = validatePassword(password)
	$: passwordConfirmValid = password === passwordConfirmation
	$: passwordFormIsValid = passwordValid && passwordConfirmValid

	async function submitForm() {
		const resetForm = document.getElementById('password-reset-form')
		const userData = {
			password: password,
			passwordResetToken: $page.params.token
		}
		try {
			const res = await api('POST', 'user/reset-password', userData)
			if (res.status >= 400) {
				new Error(res.message)
			}
			messageType = 'success'
			message = 'Password updated successfully'
			return resetForm.reset()
		} catch (err) {
			messageType = 'warning'
			message = err.message
			inProgress = false
		}
	}

	function closeMessage() {
		message = null
		goto('/login')
	}
</script>

<svelte:head>
	<title>Password Reset</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<main class="container">
	<div class="d-flex justify-content-center mt-5">
		{#if message && messageType === 'success'}
			<Message {message} {messageType} on:closeMessageEvent={closeMessage} />
		{:else}
			<div class="card" style="max-width: 50em;">
				<div class="card-body">
					<form id="password-reset-form">
						<h2 class="text-primary">NEW PASSWORD</h2>
						<p>Enter your new password below</p>
						<hr />
						<TextInput
							id="password"
							label="Password"
							type="password"
							valid={passwordValid}
							validityMessage="Please enter a valid password."
							value={password}
							on:input={(event) => (password = event.target.value)}
						/>
						<TextInput
							id="passwordConfirmation"
							label="Password Confirmation"
							type="password"
							valid={passwordConfirmValid}
							validityMessage="Passwords did not match"
							value={passwordConfirmation}
							on:input={(event) => (passwordConfirmation = event.target.value)}
						/>
						<p>
							<small
								>Password minimum length 8, must have 1 capital letter, 1 number and 1 special
								character</small
							>
						</p>
						{#if message}
							<Message {message} {messageType} on:closeMessageEvent={closeMessage} />
						{/if}
						<button
							class="btn btn-primary float-end"
							on:click|preventDefault={submitForm}
							disabled={!passwordFormIsValid}
						>
							Update Password
						</button>
					</form>
				</div>
			</div>
		{/if}
	</div>
</main>
