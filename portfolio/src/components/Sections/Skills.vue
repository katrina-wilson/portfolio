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
                <circle ref="target1" r="240" stroke="#5DB7DE" cx="500" cy="500" />
                <circle ref="target2" r="240" stroke="#4497BB" cx="500" cy="500" />
                <circle ref="target3" r="240" stroke="#197196" cx="500" cy="500" />
                <circle ref="target4" r="240" stroke="#084A67" cx="500" cy="500" />
                <circle ref="target5" r="240" stroke="#011936" cx="500" cy="500" />
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
const target4 = ref(null);
const target5 = ref(null);

onMounted(async () => {
    await nextTick();

    if (!svgContainer.value) return;

    gsap.set(svgRef.value.querySelectorAll("circle"), {
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
        .to(target1.value, { drawSVG: "0% 65%" })
        .to(target2.value, { drawSVG: "65% 85%" }, 0)
        .to(target3.value, { drawSVG: "85% 93%" }, 0)
        .to(target4.value, { drawSVG: "93% 97%" }, 0)
        .to(target5.value, { drawSVG: "97% 100%" }, 0);

    ScrollTrigger.create({
        trigger: svgContainer.value,
        start: "top center",
        end: "bottom center",
        markers: true,
        scrub: true,
        onEnter: () => timeline.play(),
        onLeaveBack: () => timeline.paused(),
        scroller: "#homeScroll",
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
