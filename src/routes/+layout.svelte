<script lang="ts">
    // Navigation Toggle script
    import { onMount } from 'svelte';
    import navToggleStart from '$lib/assets/ts/toggle_nav.ts';

    // Favicon
	import assets_favicon from '$lib/assets/media/icons/favicon.ico';
	import assets_apple_touch_icon from '$lib/assets/media/icons/apple-touch-icon.png';
	import assets_favicon32x from '$lib/assets/media/icons/favicon-32x32.png';
	import assets_favicon16x from '$lib/assets/media/icons/favicon-16x16.png';
	import assets_webmanifest from '$lib/assets/media/icons/site.webmanifest';

    // Logo Images
	import assets_logo_netsoc_h from '$lib/assets/media/logos/netsoc_horizontal.png';
	import assets_logo_instagram from '$lib/assets/media/logos/instagram.png';
	import assets_logo_discord from '$lib/assets/media/logos/discord.svg';
	import assets_logo_wiki from '$lib/assets/media/logos/wiki.svg';
	import assets_logo_github from '$lib/assets/media/logos/github.svg';

	let { children } = $props();

    onMount(() => {
        navToggleStart();
    });
</script>

<svelte:head>
    <link rel="shortcut icon" type="image/x-icon" href={assets_favicon}/>
    <link rel="apple-touch-icon" sizes="180x180" href={assets_apple_touch_icon}/>
    <link rel="icon" type="image/png" sizes="32x32" href={assets_favicon32x}/>
    <link rel="icon" type="image/png" sizes="16x16" href={assets_favicon16x}/>
    <link rel="manifest" href={assets_webmanifest}/>


    <!-- Dependencies -->
    <style>
        @import '$lib/assets/css/base.css';
    </style>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</svelte:head>



<header>
    <div>
        <img src={assets_logo_netsoc_h} alt="UCC NetSoc" class="logo">
    </div>

    <button id="header-nav-toggle">☰</button>
    <nav id="header-nav" style="display: none;">
        <a href="#upcoming-events">UPCOMING EVENTS</a>
        <a href="#services">SERVICES</a>
        <a href="#about-us">ABOUT US</a>
        <a target="_blank" href="https://wiki.netsoc.co/">
            <img src={assets_logo_wiki} alt="" aria-hidden="true"/>
            WIKI
        </a>
        <a target="_blank" href="https://discord.gg/ut6ywbusU9">
            <img src={assets_logo_discord} alt="" aria-hidden="true"/>
            DISCORD
        </a>
    </nav>
</header>

{@render children?.()}


<footer>
    <img class="logo" src={assets_logo_netsoc_h} alt="UCC NetSoc">
    <h1>UCC's <span class="fg-primary">Technology</span>, <span class="fg-secondary">Networking</span>, and <span class="fg-tertiary">Gaming</span> Society</h1>

    <nav>
        <a target="_blank" href="https://wiki.netsoc.co/">
            <img src={assets_logo_wiki} alt="" aria-hidden="true">
            WiKi
        </a>

        <a target="_blank" href="https://discord.gg/ut6ywbusU9">
            <img src={assets_logo_discord} alt="" aria-hidden="true">
            Discord
        </a>

        <a target="_blank" href="https://github.com/UCCNetsoc/">
            <img src={assets_logo_github} alt="" aria-hidden="true">
            GitHub
        </a>

        <a target="_blank" href="https://www.instagram.com/uccnetsoc">
            <img src={assets_logo_instagram} alt="" aria-hidden="true">
            Instagram
        </a>
    </nav>

    <p><small><a href="https://netsoc.co">UCC NetSoc Website</a> © 2025 by <a href="https://yakowa.com">El Egan Morley</a> is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a><img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"></small></p>
</footer>