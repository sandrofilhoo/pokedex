<template>
	<header>
		<img
			alt="Pokedex"
			class="logo"
			src="@/assets/Pokemon-Yellow-Logo-No-Background.png"
			width="200"
			height="70"
		/>
	</header>
</template>

<style>
header {
  background-color: #DC2626;
	width: 100%;
	line-height: 1.5;
  padding: 10px;
	max-height: 120vh;
}

.logo {
	display: block;
  margin: auto;
}

@media (max-width: 700px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
