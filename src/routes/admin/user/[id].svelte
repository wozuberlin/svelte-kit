<script context="module">
	export async function load({ session }) {
		if (session.user.role !== 'admin') {
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
	import { api } from '$lib/api'
	import Message from '$lib/Message.svelte'
	import { onMount } from 'svelte'
	import timeAgo from '$lib/timeAgo'
	import { page } from '$app/stores'
	import Tabs from '$lib/Tabs.svelte'
	import LoadingSpinner from '$lib/LoadingSpinner.svelte'

	export let token

	let userAbout = ''
	let userEmail = ''
	let userAvatar = ''
	let userName = ''
	let name = ''
	let userRole = ''
	let userWebsite = ''
	let userLocation = ''
	let userGender = ''
	let memberSince
	let isLoading = true
	let message
	let messageType

	async function getUser() {
		try {
			const res = await api('GET', `admin/user/${$page.params.id}`, {}, token)
			if (res.status >= 400) {
				isLoading = false
				messageType = 'warning'
				throw new Error(res.message)
			}
			isLoading = false
			userEmail = res.email
			userAvatar = res.avatar
			userRole = res.role
			name = res.name
			userName = res.username
			userWebsite = res.website
			userLocation = res.location
			userAbout = res.about
			userGender = res.gender
			memberSince = timeAgo(res.createdAt)
		} catch (err) {
			messageType = 'warning'
			isLoading = false
			return (message = err.message)
		}
	}

	onMount(() => {
		getUser()
	})

	function closeMessage() {
		message = null
	}
</script>

<Tabs />

<svelte:head>
	<title>Admin User Profile</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="container">
	{#if isLoading}
		<LoadingSpinner />
	{/if}
	{#if message}
		<Message {message} on:closeMessageEvent={closeMessage} {messageType} />
	{/if}
	<div class="mt-5 d-flex justify-content-center">
		<div class="card text-center" style="max-width: 30em; width: 30em;">
			<div class="card-header">
				<h1 class="card-header-title">User Profile</h1>
			</div>
			<div class="card-body">
				<img class="center avatar" src={userAvatar} alt="user image" />
				<br />
				<div class="profile">
					<p>@{userName}</p>
					{#if name}<p><b>Name: </b> <span>{name}</span></p>{/if}
					<p><b>Email: </b> <span>{userEmail}</span></p>
					{#if userGender}<p><b>Gender: </b> <span>{userGender}</span></p>{/if}
					{#if userLocation}<p><b>Location: </b> <span>{userLocation}</span></p>{/if}
					{#if userWebsite}<p><b>Website: </b> <span>{userWebsite}</span></p>{/if}
					{#if userAbout}<p><b>About: </b> <span>{userAbout}</span></p>{/if}
					<p><b>Role: </b> <span class="capitalize">{userRole}</span></p>
					<p><b>Member Since:</b> {memberSince}</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.avatar {
		border-radius: 50%;
		width: 150px;
		height: 150px;
	}

	.profile p {
		margin-bottom: 5px;
	}
</style>
