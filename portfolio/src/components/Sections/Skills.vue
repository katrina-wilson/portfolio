<template>
    <section
        id="skills"
        ref="sectionRef"
        class="skillSection tw:min-h-screen tw:py-24 tw:bg-gradient-to-b tw:from-background tw:to-muted/30"
    >
        <div ref="svgContainer">
            <svg
                id="pieChart"
                ref="svgRef"
                viewBox="0 0 1000 1000"
                width="500"
                height="500"
            >
                <circle ref="target1" r="240" stroke="#991a1a" cx="500" cy="500" />
                <circle ref="target2" r="240" stroke="#307d40" cx="500" cy="500" />
                <circle ref="target3" r="240" stroke="#304f7d" cx="500" cy="500" />
            </svg>
        </div>

    </section>
</template>
  
<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

let timeline;

const svgContainer = ref(null);
const sectionRef = ref(null);
const svgRef = ref(null);
const target1 = ref(null);
const target2 = ref(null);
const target3 = ref(null);

onMounted(async () => {
    await nextTick();

    gsap.set("circle", {
        drawSVG: 0,
        rotation: -90,
        transformOrigin: "center center",
        strokeWidth: 60,
    });

    timeline = gsap.timeline({
        defaults: { duration: 1, ease: "power2.out" },
        yoyo: true,
        repeatDelay: 1,
        paused: true
    });

    timeline
        .to(target1.value, { drawSVG: "0% 23%" })
        .to(target2.value, { drawSVG: "23% 56%" }, 0)
        .to(target3.value, { drawSVG: "56% 100%" }, 0);

    ScrollTrigger.create({
        trigger: svgContainer.value,
        start: "-10px 75%",
        markers: true,
        scrub: true,
        onEnter: () => timeline.play(),
        onLeaveBack: () => timeline.pause(),
    });
});

onBeforeUnmount(() => {
    if (timeline) timeline.kill();
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});
</script>
  
<style scoped>
svg {
    width: 90vh;
    height: 90vh;
}

circle {
    fill: none;
    stroke-width: 60px;
}
</style>
  