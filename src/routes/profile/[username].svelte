<script context="module">
	export async function load({ session }) {
		if (!session.authenticated) {
			return {
				status: 302,
				redirect: '/'
			}
		}
		return {
			props: {
				token: session.token,
				username: session.user.username
			}
		}
	}
</script>

<script>
	import timeAgo from '$lib/timeAgo'
	import { isEmail, isPassword, isUrl, isRequire } from '$lib/validation'
	import TextInput from '$lib/TextInput.svelte'
	import LoadingSpinner from '$lib/LoadingSpinner.svelte'
	import { authenticate, logout } from '$lib/auth'
	import { onMount } from 'svelte'
	import { api } from '$lib/api'
	import { session } from '$app/stores'
	import { goto } from '$app/navigation'
	import { notifications } from '$lib/notifications/notificationStore'

	export let token
	export let username

	let isLoading = true
	let user
	let password = ''
	let passwordConfirmation = ''
	let about
	let location
	let website
	let gender
	let email
	let _id
	let name
	let role
	let createdAt
	let avatar
	let newUsername = null

	onMount(async () => {
		try {
			const res = await api('GET', `user/profile/${username}`, {}, token)
			if (res.status >= 400) {
				throw new Error(res.message)
			}
			isLoading = false
			user = res

			about = user.about || ''
			location = user.location || ''
			website = user.website || ''
			gender = user.gender || ''
			email = user.email || ''
			_id = user._id || ''
			name = user.name || ''
			role = user.role
			createdAt = timeAgo(user.createdAt)
			avatar = user.avatar
			username = user.username
		} catch (err) {
			isLoading = false
			notifications.warning(err.message)
		}
	})

	$: emailValid = isEmail(email)
	$: usernameRequired = isRequire(username)
	$: nameRequired = isRequire(name)
	$: passwordValid = isPassword(password)
	$: websiteValid = isUrl(website)
	$: passwordConfirmValid = password === passwordConfirmation
	$: passwordFormIsValid = passwordValid && passwordConfirmValid
	$: formIsValid = emailValid && usernameRequired && nameRequired

	async function updateUser() {
		let userObject = {}
		try {
			isLoading = true
			if (user.username !== username) {
				newUsername = username
			}
			if (newUsername) {
				userObject = {
					name,
					website,
					location,
					gender,
					username: newUsername,
					about
				}
			} else {
				userObject = {
					name,
					website,
					location,
					gender,
					about
				}
			}
			const res = await api('PATCH', `user/account/${user.username}`, userObject, token)
			if (res.status >= 400) {
				throw new Error(res.message)
			}
			user = res.user
			await authenticate(res)
			isLoading = false
			if (newUsername) {
				$session.user.username = newUsername
				await goto(`/profile/${newUsername}`)
				window.location.reload(`/profile/${newUsername}`)
			} else {
				notifications.success('User profile was updated!')
			}
		} catch (err) {
			isLoading = false
			notifications.warning(err.message)
		}
	}

	async function deleteUser() {
		const result = confirm('Are you sure you want to delete your account?')
		if (result) {
			try {
				const res = await api('POST', 'user/delete', { _id: _id }, token)
				if (res.status >= 400) {
					throw new Error(res.message)
				}
				await logout()
			} catch (err) {
				isLoading = false
				notifications.warning(err.message)
			}
		}
	}

	async function updatePassword() {
		try {
			const passwordForm = document.getElementById('password-reset-form')
			const userObject = {
				_id,
				password
			}
			const res = await api('POST', 'user/update-password', userObject, token)
			if (res.status >= 400) {
				throw new Error(res.message)
			}
			passwordForm.reset()
			notifications.success('Password was updated!')
		} catch (err) {
			isLoading = 'false'
			notifications.warning(err.message)
		}
	}
</script>

<svelte:head>
	<title>Profile Page</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<section class="mt-4">
	<div class="container">
		{#if isLoading}
			<LoadingSpinner />
		{/if}
		{#if user}
			<div class="row">
				<div class="col-md">
					<div class="card profile mb-3 mx-auto d-block" style="width: 18rem;">
						<div class="card-header clearfix">
							<div class="float-start">Profile Information</div>
							<div class="float-end">:::</div>
						</div>
						<img
							class="mt-3 mx-auto d-block"
							style="border-radius: 50%; width: 100px; height: 100px"
							src={avatar}
							alt="User Image"
						/>
						<div class="text-center">@{username}</div>
						<div class="card-body">
							{#if name}
								<p>
									<strong>Name:</strong>
									{name}
								</p>
							{/if}
							<p>
								<strong>Email:</strong>
								{email}
							</p>
							{#if website}
								<p>
									<strong>Website:</strong>
									{website}
								</p>
							{/if}
							{#if location}
								<p>
									<strong>Location:</strong>
									{location}
								</p>
							{/if}
							{#if gender}
								<p>
									<strong>Gender:</strong>
									{gender}
								</p>
							{/if}
							{#if about}
								<p>
									<strong>About:</strong>
									{about}
								</p>
							{/if}
							<p>
								<strong>Role:</strong>
								<span class="capitalize">{role}</span>
							</p>
						</div>
						<div class="card-footer">
							<small>
								<strong>Member Since:</strong>
								<time>{createdAt}</time>
							</small>
						</div>
					</div>
				</div>
				<div class="col-md">
					<div class="mx-auto d-block">
						<form class="card mb-4">
							<div class="card-body">
								<TextInput
									id="username"
									label="Username*"
									valid={usernameRequired}
									validityMessage="Username is required"
									value={username}
									on:input={(event) => (username = event.target.value)}
								/>
								<TextInput
									id="name"
									label="Name*"
									value={name}
									valid={nameRequired}
									validityMessage="Name is required"
									on:input={(event) => (name = event.target.value)}
								/>
								<div class="field">
									<label for="email">Email*</label>
									<input class="form-control" id="email" type="email" value={email} disabled />
									<p class="help">Email can not be updated.</p>
								</div>
								<TextInput
									id="about"
									label="About"
									value={about}
									on:input={(event) => (about = event.target.value)}
								/>
								<TextInput
									id="website"
									label="Website"
									valid={websiteValid}
									validityMessage="Website URL is not valid"
									value={website}
									on:input={(event) => (website = event.target.value)}
								/>
								<TextInput
									id="location"
									label="Location"
									value={location}
									on:input={(event) => (location = event.target.value)}
								/>
								<div class="field is-horizontal">
									<div class="field-label">
										<label class="label">Gender</label>
									</div>
									<div class="field-body">
										<div class="field is-narrow">
											<div class="control">
												<label class="radio">
													<input type="radio" bind:group={gender} value="Male" />
													Male
												</label>
												<label class="radio">
													<input type="radio" bind:group={gender} value="Female" />
													Female
												</label>
												<label class="radio">
													<input type="radio" bind:group={gender} value="Other" />
													Other
												</label>
											</div>
										</div>
									</div>
								</div>
								<p><small>Fields with * are required</small></p>
								<button
									class="btn btn-primary float-end"
									on:click|preventDefault={updateUser}
									disabled={!formIsValid}
								>
									Save
								</button>
							</div>
						</form>

						<form class="card mb-4" id="password-reset-form">
							<div class="card-body">
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
										>Password minimum characters length 8, must have 1 capital letter, 1 number and
										1 special character.</small
									>
								</p>
								<button
									class="btn float-end btn-primary"
									on:click|preventDefault={updatePassword}
									disabled={!passwordFormIsValid}
								>
									Update Password
								</button>
							</div>
						</form>

						<form class="mt-5 mb-5">
							<div class="clearfix">
								<button class="btn btn-danger float-end" on:click|preventDefault={deleteUser}>
									Delete Account
								</button>
							</div>
							<br />
							<span class="badge bg-warning float-end">
								Warning! Deleting your account is irreversible.
							</span>
						</form>
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>

<style>
	.profile p {
		margin-bottom: 0.4em;
	}
</style>
