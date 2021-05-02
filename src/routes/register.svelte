<script context="module">
	export async function load({ session }) {
		if (session.authenticated) {
			return {
				status: 302,
				redirect: '/'
			}
		}
		return {}
	}
</script>

<script>
	import Message from '$lib/Message.svelte'
	import TextInput from '$lib/TextInput.svelte'
	import { api } from '$lib/api'
	import { validateEmail, validatePassword } from '$lib/validation'

	let name = ''
	let email = ''
	let password = ''
	let passwordConfirmation = ''
	let message
	let messageType

	$: emailValid = validateEmail(email)
	$: passwordValid = validatePassword(password)
	$: passwordConfirmValid = password === passwordConfirmation
	$: formIsValid = emailValid && passwordValid && passwordConfirmValid

	async function submitForm() {
		try {
			const res = await api('POST', 'user/account-activation', { name, email, password })
			if (res && res.status >= 400) {
				new Error(res.message)
			}
			email = ''
			password = ''
			name = ''
			messageType = 'success'
			return (message = res.message)
		} catch (err) {
			messageType = 'warning'
			return (message = err.message)
		}
	}

	function handleKeyDown(event) {
		if (formIsValid && event.keyCode === 13) {
			submitForm()
		}
	}

	function closeMessage() {
		message = null
	}
</script>

<svelte:window on:keydown={handleKeyDown} />

<svelte:head>
	<title>Register Form</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="container">
	<div class="col">
		{#if message}
			<Message {message} {messageType} on:closeMessageEvent={closeMessage} />
		{:else}
			<div class="d-flex justify-content-center d-block">
				<div class="card mt-5" style="max-width: 50em">
					<div class="card-body">
						<div>
							<h2 class="text-primary">REGISTER</h2>
							<p>We're happy you're here!</p>
						</div>
						<hr />
						<form>
							<TextInput
								id="name"
								label="Name"
								valid={name}
								validityMessage="Please enter a valid email."
								value={name}
								className="is-large"
								on:input={(event) => (name = event.target.value)}
							/>
							<TextInput
								id="email"
								label="Email"
								valid={emailValid}
								validityMessage="Please enter a valid email."
								value={email}
								className="is-large"
								on:input={(event) => (email = event.target.value)}
							/>
							<TextInput
								id="password"
								label="Password"
								type="password"
								valid={passwordValid}
								validityMessage="Please enter a valid password."
								value={password}
								className="is-large"
								on:input={(event) => (password = event.target.value)}
							/>
							<TextInput
								id="passwordConfirmation"
								label="Password Confirmation"
								type="password"
								valid={passwordConfirmValid}
								validityMessage="Passwords did not match"
								value={passwordConfirmation}
								className="is-large"
								on:input={(event) => (passwordConfirmation = event.target.value)}
							/>
							<p>
								Password minimum length 8, must have 1 capital letter, 1 number and 1 special
								character.
							</p>
							<button
								class="btn btn-success float-end"
								on:click|preventDefault={submitForm}
								disabled={!formIsValid}
							>
								Register
							</button>
						</form>
					</div>
					<footer class="card-footer text-center pt-3 pb-3">
						<a href="/login">Already have an account?</a>
					</footer>
				</div>
			</div>
		{/if}
	</div>
</div>
