<script>
	import { onMount } from 'svelte'
	import { page } from '$app/stores'
	import { api } from '$lib/api'
	import { logout } from '$lib/auth'
	import { session } from '$app/stores'
	import { variables } from '$lib/variables'

	let user = $session.user

	let isActive = false

	function toggleNav() {
		isActive = !isActive
	}

	onMount(async () => {
		function callback(e) {
			window.e || e
			if (e.target.tagName !== 'A') return
		}

		if (document.addEventListener) {
			document.addEventListener('click', callback, false)
		} else {
			document.attachEvent('onclick', callback)
		}
	})

	async function logOut() {
		const res = await api('POST', 'user/logout')
		if (res) {
			await logout()
		}
	}
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
	<div class="container-fluid">
		<a class="navbar-brand" href="/">{variables.appName}</a>
		<button
			class="navbar-toggler third-button"
			on:click|stopPropagation|preventDefault={toggleNav}
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<div class="animated-icon {isActive ? 'open' : undefined}"><span /><span /><span /></div>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item">
					<a class="nav-link" class:active={$page.path === '/support'} href="/support">Support</a>
				</li>
			</ul>
			<ul class="navbar-nav">
				{#if !user}
					<li class="nav-item">
						<a class="nav-link" class:active={$page.path === '/login'} href="/login">Login</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" class:active={$page.path === '/register'} href="/register"
							>Register</a
						>
					</li>
				{/if}
				{#if user}
					<li class="nav-item dropdown">
						<a
							class:active={$page.path === `/profile/${user.username}`}
							class="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdown"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							{user.username}
						</a>
						<ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
							<li>
								<a
									class="dropdown-item"
									class:active={$page.path === `/profile/${user.username}`}
									href="/profile/{user.username}">Profile</a
								>
							</li>
							{#if user.role === 'admin'}
								<li>
									<a class="dropdown-item" class:active={$page.path === '/admin'} href="/admin"
										>Admin</a
									>
								</li>
							{/if}
							<li>
								<a class="dropdown-item" class:active={$page.path === '/support'} href="/support"
									>Support</a
								>
							</li>
							<li>
								<hr class="dropdown-divider" />
							</li>
							<li><a class="dropdown-item" on:click|preventDefault={logOut} href="#">Logout</a></li>
						</ul>
					</li>
				{/if}
			</ul>
		</div>
	</div>
</nav>
