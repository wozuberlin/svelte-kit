<script context="module">
	export async function load({ session }) {
		if (!session.user || session.user.role !== 'admin' || !session.authenticated) {
			return {
				status: 302,
				redirect: '/'
			}
		}
		return {
			props: {
				token: session.token
			}
		}
	}
</script>

<script>
	import Tabs from '$lib/Tabs.svelte'
	import { api } from '$lib/api'
	import LoadingSpinner from '$lib/LoadingSpinner.svelte'
	import Message from '$lib/Message.svelte'

	export let token

	let isLoading = true
	let messageType = 'warning'
	let message
	let userCount

	;(async () => {
		try {
			const res = await api('GET', 'admin/stats', {}, token)
			if (res.status >= 400) {
				isLoading = false
				throw new Error(res.message)
			}
			isLoading = false
			return (userCount = Number(res))
		} catch (err) {
			isLoading = false
			messageType = 'warning'
			return (message = err.message)
		}
	})()

	function closeMessage() {
		message = null
	}
</script>

<svelte:head>
	<title>Admin Panel</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<Tabs />
{#if isLoading}
	<LoadingSpinner />
{:else}
	<div class="container">
		{#if message}
			<Message {message} {messageType} on:click={closeMessage} />
		{/if}

		<div class="container">
			<div class="row">
				<div class="col-sm">
					<div class="card">
						<div class="card-body">
							<div class="text-center">
								<h3>{userCount}</h3>
								<label>Users</label>
							</div>
						</div>
					</div>
				</div>
				<div class="col-sm">
					<div class="card">
						<div class="card-body">
							<div class="text-center">
								<h3>3</h3>
								<label>Booking</label>
							</div>
						</div>
					</div>
				</div>
				<div class="col-sm">
					<div class="card">
						<div class="card-body">
							<div class="text-center">
								<h3>4</h3>
								<label>Quotes</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
