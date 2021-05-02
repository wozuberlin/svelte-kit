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
	import { validateEmail, validatePassword } from '$lib/validation.js'
	import { api } from '$lib/api.js'
	import { authenticate } from '$lib/auth'

	let email = ''
	let password = ''
	let message
	let messageType

	$: emailValid = validateEmail(email)
	$: passwordValid = validatePassword(password)
	$: formIsValid = emailValid && passwordValid

	async function submitForm(e) {
		e.preventDefault()
		const data = {
			email,
			password
		}
		try {
			const res = await api('POST', 'user/login', data)
			if (res.status >= 400) {
				messageType = 'warning'
				return (message = res.message)
			}
			await authenticate(res)
			message = null
			email = ''
			password = ''
			return (location.href = `/profile/${res.user.username}`)
		} catch (err) {
			messageType = 'warning'
			return (message = err.message)
		}
	}

	function closeMessage() {
		message = null
	}

	function handleKeyDown(e) {
		if (formIsValid) {
			if (e.keyCode === 13) {
				submitForm(e)
			}
		}
		return null
	}
</script>

<svelte:window on:keydown={handleKeyDown} />

<svelte:head>
	<title>Login Form</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<main>
	<div class="container">
		<div class="card mt-5">
			<div class="card-header bg-primary text-white">
				<span>User Creation</span>
			</div>
			<div class="card-body text-primary">
				Go ahead create a user, test the application and after delete your account. We care about
				your privacy and no information will be retain after the account is deleted.
			</div>
		</div>
		<br />
		<div class="d-flex justify-content-center">
			<div class="card" style="width:40rem;">
				<div class="card-body">
					<h2 class="text-primary">HI, THERE</h2>
					<p>You can log in to your MY LA Store account here.</p>
					<hr />

					{#if message}
						<Message {message} {messageType} on:closeMessageEvent={closeMessage} />
					{/if}
					<div>
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
						<p>
							<small
								>Password minimum length 8, must have 1 capital letter, 1 number and 1 special
								character.</small
							>
						</p>
					</div>
					<div class="text-center">
						<a href="/forgot">Forgot Password?</a>
						<br />
					</div>
					<div class="clearfix">
						<div class="d-grid gap-2 d-md-flex justify-content-md-end">
							<button
								aria-disabled={!formIsValid ? 'true' : 'false'}
								class="btn btn-success align-right"
								on:click={submitForm}
								class:disabled={!formIsValid}
								disabled={!formIsValid}
							>
								Login
							</button>
						</div>
					</div>
				</div>
				<div class="card-footer bg-primary text-center">
					<a href="register" class="text-white"> Don't have an account? </a>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	.disabled {
		pointer-events: none;
	}
</style>
