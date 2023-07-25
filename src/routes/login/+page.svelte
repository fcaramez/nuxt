<script lang="ts">
	import { goto } from '$app/navigation';
	import { useAxios } from '$lib';
	import { toasts, ToastContainer, FlatToast } from 'svelte-toasts';

	let handle: string;
	let password: string;
	const handleSubmit = async () => {
		try {
			const apiResponse = await useAxios.post(`/auth/login`, {
				username: handle,
				email: handle,
				password
			});

			const { data, message } = apiResponse.data;

			const { authToken } = data;

			localStorage.setItem('authToken', authToken);
			toasts.add({
				title: 'Signed up!',
				description: message,
				duration: 3000,
				placement: 'top-center',
				theme: 'dark',
				showProgress: true,
				type: 'success'
			});
			await goto('/');
		} catch (error: any) {
			toasts.add({
				title: 'Error signing up',
				description: error.body.message,
				duration: 3000,
				placement: 'top-center',
				theme: 'dark',
				showProgress: true,
				type: 'error'
			});
			alert(error);
		} finally {
			handle = '';
			password = '';
		}
	};
</script>

<main class="container">
	<div>
		<hgroup>
			<h1>Sign in</h1>
			<h2>To enjoy all our cool features</h2>
		</hgroup>
		<form on:submit|preventDefault={handleSubmit} method="POST">
			<input
				bind:value={handle}
				type="text"
				name="Username"
				placeholder="Username or Email"
				aria-label="Username"
				autocomplete="nickname"
				required
			/>
			<input
				bind:value={password}
				type="password"
				name="password"
				placeholder="Password"
				aria-label="Password"
				autocomplete="current-password"
				required
			/>
			<fieldset>
				<a href="/signup">Don't have an account?</a>
			</fieldset>
			<button type="submit" class="btn"> Login </button>
		</form>
	</div>
</main>

<style scoped>
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		height: 95vh;
		width: 100vw;
	}

	.btn {
		font-weight: bold;
	}
</style>
