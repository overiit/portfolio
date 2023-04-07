<script>

	import { scale } from "svelte/transition";

</script>
<section in:scale={{ delay: 0}}>
    <svg-icon >
        <svg viewBox="0 0 120 50">
            <text y=25>HEY! I'M</text>
        </svg>
    </svg-icon>
    <h1>HENRIK SCHWEBCKE</h1>
    <p>
        A <b>software engineer</b> with <b>4+ years</b> of experience<br />
        delivering <b>full-stack</b> applications.
    </p>
</section>

<style lang="scss">
    section {
        overflow-y: auto;
        overflow-x: hidden;
        width: 1200px;
        max-width: 100%;
        margin: 0 auto;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column ;
        svg-icon {
            height: 35px;
            width: 150px;
        }
        text-align: center;
        svg{
            font   : bold 30px 'Roboto', sans-serif;
            text{
                fill            : none;
                stroke          : white;
                stroke-width    : 1px;
                stroke-linejoin : round;
            }
        }
        h1 {
            line-height: 3rem;
            font-size: 3rem;
            font-weight: 800;
            padding: 0 .5rem;
        }
        p {
            font-weight: 300;
        }
    }

    @media only screen and (max-width: 600px) {
        section {
            width: 100vw;
            max-width: 100vw;
            margin-left: -1.5rem;
            svg-icon {
                height: 25px;
                width: 100px;
            }
            h1 {
                font-size: 2rem;
                line-height: 2rem;
            }
            p {
                font-size: 0.8rem;
            }
        }
    }
</style>