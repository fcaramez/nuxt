<script lang="ts">
	import { goto } from '$app/navigation';
	import { useAxios } from '$lib';
	import { AxiosError } from 'axios';
	import { toasts, ToastContainer, FlatToast } from 'svelte-toasts';

	let username: string;
	let email: string;
	let password: string;
	const handleSubmit = async () => {
		try {
			const apiResponse = await useAxios.post(`/auth/signup`, {
				username,
				email,
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
			username = '';
			email = '';
			password = '';
		}
	};
</script>

<main class="container">
	<div>
		<ToastContainer let:data>
			<FlatToast {data} />
		</ToastContainer>
		<hgroup>
			<h1>Sign up</h1>
			<h2>To enjoy all our cool features</h2>
		</hgroup>
		<form on:submit|preventDefault={handleSubmit} method="POST">
			<input
				type="text"
				name="username"
				placeholder="Username"
				aria-label="Username"
				autocomplete="username"
				bind:value={username}
				required
			/>
			<input
				type="email"
				name="email"
				placeholder="Email"
				aria-label="Email"
				autocomplete="email"
				bind:value={email}
				required
			/>
			<input
				type="password"
				name="password"
				placeholder="Password"
				aria-label="Password"
				autocomplete="current-password"
				bind:value={password}
				required
			/>
			<fieldset>
				<a href="/login">Already have an accont?</a>
			</fieldset>
			<button type="submit" class="btn">Sign up</button>
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
