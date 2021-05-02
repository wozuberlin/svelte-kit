import * as cookie from 'cookie'

export async function getContext({ headers }) {
	const cookies = cookie.parse(headers.cookie || '')
	if (!cookies.token) {
		return {
			authenticated: false
		}
	}

	return {
		authenticated: true,
		token: cookies.token,
		user: JSON.parse(cookies.user)
	}
}

export function getSession({ context }) {
	if (context.authenticated) {
		return {
			authenticated: context.authenticated,
			token: context.token,
			user: context.user
		}
	}
	return {
		authenticated: context.authenticated
	}
}
