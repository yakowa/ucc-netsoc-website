<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>



<header>
    <div>
        <img src="assets/media/logos/netsoc_horizontal.png" alt="UCC NetSoc" class="logo">
    </div>

    <button id="header-nav-toggle">☰</button>
    <nav id="header-nav" style="display: none;">
        <a href="#upcoming-events">UPCOMING EVENTS</a>
        <a href="#services">SERVICES</a>
        <a href="#about-us">ABOUT US</a>
        <a target="_blank" href="https://wiki.netsoc.co/">
            <img src="assets/media/logos/wiki.png" alt="">
            WIKI
        </a>
        <a target="_blank" href="https://discord.gg/ut6ywbusU9">
            <img src="assets/media/logos/discord.png" alt="">
            DISCORD
        </a>
    </nav>
</header>


{@render children?.()}


<footer>
    <img class="logo" src="assets/media/logos/netsoc_horizontal.png" alt="UCC NetSoc">
    <h1>UCC's <span class="fg-primary">Technology</span>, <span class="fg-secondary">Networking</span>, and <span class="fg-tertiary">Gaming</span> Society</h1>

    <nav>
        <a target="_blank" href="https://wiki.netsoc.co/">
            <img src="assets/media/logos/wiki.png" alt="">
            WiKi
        </a>

        <a target="_blank" href="https://discord.gg/ut6ywbusU9">
            <img src="assets/media/logos/discord.png" alt="">
            Discord
        </a>

        <a target="_blank" href="https://github.com/UCCNetsoc/">
            <img src="assets/media/logos/github.png" alt="">
            GitHub
        </a>

        <a target="_blank" href="https://www.instagram.com/uccnetsoc">
            <img src="assets/media/logos/instagram.png" alt="">
            Instagram
        </a>
    </nav>

    <p><small><a href="https://netsoc.co">UCC NetSoc Website</a> © 2025 by <a href="https://yakowa.com">El Egan Morley</a> is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a><img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"></small></p>
</footer>