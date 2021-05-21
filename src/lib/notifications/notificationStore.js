import { writable, derived } from 'svelte/store'

const TIMEOUT = 7000

function createNotificationStore(timeout) {
	let timers = []
	let timer

	const _notifications = writable([])

	function send(message, type = 'default', timeout) {
		_notifications.update(state => {
			return [...state, { id: id(), type, message, timeout }]
		})
	}

	const notifications = derived(_notifications, ($_notifications, set) => {
		set($_notifications)
		if ($_notifications.length > 0) {
			 timer = setTimeout(() => {
				_notifications.update(state => {
					state.shift()
					return state
				})
			}, $_notifications[0].timeout)
			return () => {
				clearTimeout(timer)
			}
		}
	})
	const { subscribe } = notifications

	return {
		subscribe,
		send,
		default: (msg, timeout) => send(msg, 'default', timeout || TIMEOUT),
		danger: (msg, timeout) => send(msg, 'danger', timeout || TIMEOUT),
		warning: (msg, timeout) => send(msg, 'warning', timeout || TIMEOUT),
		info: (msg, timeout) => send(msg, 'info', timeout || TIMEOUT),
		success: (msg, timeout) => send(msg, 'success', timeout || TIMEOUT)
	}
}

function id() {
	return '_' + Math.random().toString(36).substr(2, 9)
}

export const notifications = createNotificationStore()