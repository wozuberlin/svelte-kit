<script>
	import { onMount } from 'svelte'
	import { page } from '$app/stores'
	import { api } from '$lib/api'
	import { logout } from '$lib/auth'
	import { session } from '$app/stores'
	import { variables } from '$lib/variables'
	import 'bootstrap/dist/css/bootstrap.css'

	let user = $session.user

	let isActive = false

	function toggleNav() {
		isActive = !isActive
	}

	onMount(async () => {
		await import('bootstrap/js/dist/dropdown')
		await import('bootstrap/js/dist/collapse')

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

<nav class="navbar navbar-expand-lg navbar-light bg-light">
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
			<div class="animated-icon {isActive ? 'open' : undefined}"><span></span><span></span><span></span></div>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item">
					<a class="nav-link" class:active={$page.path === '/support'} href="/support">Support</a>
				</li>
			</ul>
			<ul class="navbar-nav me-auto">
				<li class="nav-item">
					<a class="nav-link active git" aria-current="page" target='_blank' href="https://github.com/mylastore/svelte-kit.git">
						<svg fill="none" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2ZM0 12C0 5.3726 5.3726 0 12 0C18.6274 0 24 5.3726 24 12C24 18.6274 18.6274 24 12 24C5.3726 24 0 18.6274 0 12Z" fill="#999999"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M9.59162 22.7357C9.49492 22.6109 9.49492 21.4986 9.59162 19.399C8.55572 19.4347 7.90122 19.3628 7.62812 19.1833C7.21852 18.9139 6.80842 18.0833 6.44457 17.4979C6.08072 16.9125 5.27312 16.8199 4.94702 16.6891C4.62091 16.5582 4.53905 16.0247 5.84562 16.4282C7.15222 16.8316 7.21592 17.9303 7.62812 18.1872C8.04032 18.4441 9.02572 18.3317 9.47242 18.1259C9.91907 17.9201 9.88622 17.1538 9.96587 16.8503C10.0666 16.5669 9.71162 16.5041 9.70382 16.5018C9.26777 16.5018 6.97697 16.0036 6.34772 13.7852C5.71852 11.5669 6.52907 10.117 6.96147 9.49369C7.24972 9.07814 7.22422 8.19254 6.88497 6.83679C8.11677 6.67939 9.06732 7.06709 9.73672 7.99999C9.73737 8.00534 10.6143 7.47854 12.0001 7.47854C13.386 7.47854 13.8777 7.90764 14.2571 7.99999C14.6365 8.09234 14.94 6.36699 17.2834 6.83679C16.7942 7.79839 16.3844 8.99999 16.6972 9.49369C17.0099 9.98739 18.2372 11.5573 17.4833 13.7852C16.9807 15.2706 15.9927 16.1761 14.5192 16.5018C14.3502 16.5557 14.2658 16.6427 14.2658 16.7627C14.2658 16.9427 14.4942 16.9624 14.8233 17.8058C15.0426 18.368 15.0585 19.9739 14.8708 22.6234C14.3953 22.7445 14.0254 22.8257 13.7611 22.8673C13.2924 22.9409 12.7835 22.9822 12.2834 22.9982C11.7834 23.0141 11.6098 23.0123 10.9185 22.948C10.4577 22.9051 10.0154 22.8343 9.59162 22.7357Z" fill="#999999"/>
						</svg>
					</a>
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

<style>
  .animated-icon {
    width: 30px;
    height: 22px;
    position: relative;
    margin: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
  }

  .animated-icon span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }

  .animated-icon span {
    background: red;
  }

  .animated-icon span:nth-child(1) {
    top: 1px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  .animated-icon span:nth-child(2) {
    top: 10px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  .animated-icon span:nth-child(3) {
    top: 19px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  .animated-icon.open span:nth-child(1) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    top: 0px;
    left: 3px;
  }

  .animated-icon.open span:nth-child(2) {
    width: 0%;
    opacity: 0;
  }

  .animated-icon.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 21px;
    left: 3px;
  }
</style>