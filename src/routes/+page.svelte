<script lang="ts">
	import assets_logo_netsoc_v from '$lib/assets/media/logos/netsoc_vertical.png';
</script>

<style>
    @import '$lib/assets/css/index.css';
</style>

<section id="hero">
    <div class="logo-intro">
        <img src={assets_logo_netsoc_v} alt="NetSoc">
        <h1>UCC's <span class="fg-primary">Technology</span>, <span class="fg-secondary">Networking</span>, and <span class="fg-tertiary">Gaming</span> Society</h1>
    </div>
    
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam accusantium doloremque, exercitationem facilis hic corrupti molestiae, similique beatae quia ratione natus reiciendis velit harum error!</p>

    <a href="#services" class="btn button-secondary">FIND OUT ABOUT <b>OUR SERVICES</b></a>
</section>

<main>
    <section id="about-us-and-upcoming-events">
        <section id="about-us">
            <h2>About Us</h2>
            <p>Founded in 2004 at University College Cork (the academic home of George Boole, the father of Boolean algebra), NETSOC (the Networking, Gaming, and Technology Society) is a student-run society dedicated to all things digital.</p>
            <p>We operate our own digital services network, providing members with unique, hands-on experience in computing, networking, and system administration. Alongside this, we run regular educational workshops, gaming nights, and social events that bring together people from across the different disciplines of UCC.</p>
            <p>Whether you're passionate about technology, curious about the internet, or just looking for a welcoming community to game and learn with, NETSOC is open to you. </p>
        </section>

        <section id="upcoming-events">
            <h2>Upcoming Events</h2>

            <article>
                <h3>Lorem, ipsum dolor.</h3>
                <h4>25th May, 2025 (in 5 days)</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, magnam!</p>
            </article>

            <article>
                <h3>Lorem, ipsum dolor.</h3>
                <h4>25th May, 2025 (in 5 days)</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, magnam!</p>
            </article>

            <a href="">See More Upcoming Events</a>
        </section>
    </section>

    <section id="services">
        
        <h2>Services</h2>

        <div class="cards">
            <a href=""> <!-- todo -->
                <h3>Free Cloud Hosting</h3>
                <p>Netsoc provides free Cloud hosting services available to all UCC  students. If you'd like to avail of these services, feel free to try  them out via  Netsoc Cloud. You can request free VPS's (Virtual Private Servers) or Containers. These allow you to run whatever software stack you want on our servers.</p>
            </a>

            <a href=""> <!-- todo -->
                <h3>Free netsoc.cloud Domains</h3>
                <p>When you sign up to our cloud services via  Netsoc Cloud you'll be able to claim *.netsoc.cloud domains that point to your cloud instances.</p>
                <p>If you'd rather a custom domain, you can register one and follow the steps on Netsoc Cloud to get it to point to your instance.</p>
            </a>

            <a href=""> <!-- todo -->
                <h3>Free Blog Hosting</h3>
                <p>We provide container templates that allows you to get up and running with a WordPress or GhostCMS instantly.</p>
            </a>

            <a href=""> <!-- todo -->
                <h3>Free Game Server Hosting</h3>
                <p>Since we provide free containers, you can deploy any game server you  want on our services by simply using the terminal provided by Netsoc  Cloud!</p>
            </a>
        </div>
    </section>

    <section id="past-events">
        <h2>Past Events</h2>

        <article>
            <h3>Lorem, ipsum dolor.</h3>
            <h4>25th May, 2025 (in 5 days)</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, magnam!</p>
        </article>

        <article>
            <h3>Lorem, ipsum dolor.</h3>
            <h4>25th May, 2025 (in 5 days)</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, magnam!</p>
        </article>

        <a href="">See More Upcoming Events</a>
    </section>
</main>