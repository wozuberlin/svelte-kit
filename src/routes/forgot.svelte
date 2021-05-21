<script>
	import { validateEmail } from '$lib/validation'
	import TextInput from '$lib/TextInput.svelte'
	import { api } from '$lib/api'
	import {notifications} from '$lib/notifications/notificationStore'

	let email = ''

	$: emailValid = validateEmail(email)
	$: formIsValid = emailValid

	async function submitForm() {
		const forgotForm = document.getElementById('forgot-form')
		try {
			const res = await api('POST', 'user/forgot', { email })
			if (res && res.status >= 400) {
				throw new Error(res.message)
			}
			notifications.success(res.message)
			return forgotForm.reset()
		} catch (err) {
			notifications.warning(err.message)
		}
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
