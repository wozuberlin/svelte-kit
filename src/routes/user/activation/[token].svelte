<script>
	import jwt_decode from 'jwt-decode'
	import { api } from '$lib/api'
	import { page } from '$app/stores'
	import Message from '$lib/Message.svelte'
	import { goto } from '$app/navigation'

	let { token } = $page.params
	let email = ''
	let message
	let messageType = 'warning'

	if (token) {
		const decoded = jwt_decode(token)
		email = decoded.email
	}

	const activateAccount = async () => {
		try {
			const res = await api('POST', 'user/register', { token })
			if (res.status >= 400) {
				new Error(res.message)
			}
			messageType = 'success'
			return (message = res.message)
		} catch (err) {
			messageType = 'warning'
			return (message = err.message)
		}
	}

	function closeMessage() {
		message = null
		goto('/login')
	}
</script>

<svelte:head>
	<title>Account Activation</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="container">
	{#if !message}
		<div class="d-flex mt-5 justify-content-center d-block">
			<div class="card" style="width: 50em; max-width: 50em">
				<div class="card-body text-center">
					<h5>Activate account for {email}</h5>
					<hr />
					<button class="btn btn-primary btn-lg" on:click={activateAccount}>Activate Account</button
					>
				</div>
			</div>
		</div>
	{:else}
		<Message {message} {messageType} on:closeMessageEvent={closeMessage} />
	{/if}
</div>
