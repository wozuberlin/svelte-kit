<script>
	import { flip } from 'svelte/animate'
	import { fly } from 'svelte/transition'
	import { notifications } from './notificationStore'

	export let themes = {
		danger: '#E26D69',
		success: '#84C991',
		warning: '#f0ad4e',
		info: '#5bc0de',
		default: '#aaaaaa'
	}

</script>
<div class='d-flex justify-content-center'>
	{#if $notifications.length > 0}
		<div class='notifications'>
			{#each $notifications as notification (notification.id)}
				<div
					animate:flip
					class='notification'
					style='background: {themes[notification.type]};'
					transition:fly={{ y: -30 }}
				>
					<div class='content'>{notification.message}</div>
					{#if notification.icon}<i class={notification.icon} />{/if}
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
    .notifications {
        width: 300px;
        height: 300px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -150px;
        margin-top: -150px;
        z-index: 999;
    }

    .notification {
        flex: 0 0 auto;
        margin-bottom: 10px;
        margin-top: 10px;
    }

    .content {
        padding: 10px;
        display: block;
        color: white;
        font-weight: 500;
    }
</style>