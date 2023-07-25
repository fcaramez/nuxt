<main class="container">
	<div>
		<hgroup>
			<h1>Sign in</h1>
			<h2>To enjoy all our cool features</h2>
		</hgroup>
		<form>
			<input
				type="text"
				name="Username"
				placeholder="Username or Email"
				aria-label="Username"
				autocomplete="nickname"
				required
			/>
			<input
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
