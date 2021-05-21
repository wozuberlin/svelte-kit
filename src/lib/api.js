import fetch from 'isomorphic-fetch'
import { handleSession } from './auth'
import { variables } from '$lib/variables'

export const apiForm = (method, path, data, token) => {
	return fetch(`${variables.apiPath}/${path}`, {
		method: `${method}`,
		headers: {
			Accept: 'application/json',
			...(token ? { Authorization: `Bearer ${token}` } : {})
		},
		body: data
	})
		.then((res) => {
			return res.json()
		})
		.catch(err => {
			return {
				status: 502,
				message: 'Oops! Something is wrong. Please try later.'
			}
		})
}

export const api = (method, path, data, token) => {
	if (method === 'GET' || method === 'DELETE') {
		return fetch(`${variables.apiPath}/${path}`, {
			method: `${method}`,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(token ? { Authorization: `Bearer ${token}` } : {})
			}
		})
			.then(async (res) => {
				await handleSession(res)
				return res.json()
			})
			.catch(err => {
				return {
					status: 502,
					message: 'Oops! Something is wrong. Please try later.'
				}
			})
	} else {
		return fetch(`${variables.apiPath}/${path}`, {
			method: `${method}`,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...(token ? { Authorization: `Bearer ${token}` } : {})
			},
			body: JSON.stringify(data)
		})
			.then(async res => {
				return await res.json()
			})
			.catch(err => {
				return {
					status: 502,
					message: 'Oops! Something is wrong. Please try later.'
				}
			})
	}
}
