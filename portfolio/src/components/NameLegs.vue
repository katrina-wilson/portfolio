<template>
    <div class="tw:flex tw:w-full tw:items-center tw:justify-center tw:md:h-[280px] tw:h-26">
      <!-- K -->
        <div class="animation-container">
            <svg ref="svgKRef" :viewBox="kViewBox">
                <defs>
                    <pattern id="kBg" width="20" height="20" x="0" y="0" patternUnits="userSpaceOnUse">
                        <circle 
                            cx="13" 
                            cy="13" 
                            r="3" 
                            style="fill: rgb(var(--v-theme-brain-secondary))"
                            fill-opacity="0"
                        />
                        <circle 
                            cx="3" 
                            cy="3" 
                            r="3" 
                            style="fill: rgb(var(--v-theme-brain-secondary))"
                            fill-opacity="1"
                        /> 
                    </pattern>
                </defs>
                <clipPath id="kMask">
                    <path 
                    ref="bigKRef"
                    class="bigK" 
                    id="bigK" 
                    d="M336 171.026L348.621 339.594L380.034 337.242L374.543 263.908L401 335.999L430 332.499L397.692 251.645L421.5 162.999L390 165.5L372.825 240.972L367.412 168.674L336 171.026Z"           />
                </clipPath>
                <polyline 
                    ref="legRRef"
                    stroke-width="3" 
                    class="legR" 
                    transform="translate(-2, 0)" 
                    points="407.5 338.5 421.5 372.5 404.5 414.5 428 414.5" 
                    fill="none" 
                    style="stroke: rgb(var(--v-theme-brain));"
                    stroke-miterlimit="10" 
                    stroke-linejoin="square" 
                    stroke-linecap="round" 
                />
                <rect 
                    fill="url(#kBg)" 
                    clip-path="url(#kMask)" 
                    :x="kViewBoxX" 
                    :y="kViewBoxY" 
                    :width="kViewBoxWidth" 
                    :height="kViewBoxHeight" 
                />
                <use 
                    href="#bigK" 
                    fill="none" 
                    style="stroke: rgb(var(--v-theme-brain));"
                    stroke-width="6" 
                    stroke-linejoin="square" 
                    stroke-linecap="round"   
                />
                <polyline 
                    ref="legLRef"
                    stroke-width="3" 
                    class="legL" 
                    transform="translate(-5, 0)" 
                    points="385 333.5 406 377.5 389 425.5 414 425.5" 
                    fill="none" 
                    style="stroke: rgb(var(--v-theme-brain));"
                    stroke-miterlimit="10" 
                    stroke-linejoin="square" 
                    stroke-linecap="round" 
                />
                <g 
                    ref="ouchGroupRef" 
                    class="ouchGroup" 
                    fill="none" 
                    style="stroke: rgb(var(--v-theme-brain));"
                    stroke-linecap="round" 
                    stroke-miterlimit="10" 
                    stroke-width="2"
                >
                    <line x1="428" y1="367" x2="437" y2="355"/>
                    <line x1="430" y1="371" x2="443" y2="371"/>
                    <line x1="428" y1="377" x2="439" y2="385"/>
                </g>    
            </svg>
      </div>
  
      <!-- W -->
        <div class="animation-container tw:overflow-visible">
            <svg ref="svgWRef" :viewBox="wViewBox">
                <defs>
                    <pattern id="wBg" width="20" height="20" x="8" y="0" patternUnits="userSpaceOnUse" viewBox="0 0 20 20">
                        <circle 
                            cx="13" 
                            cy="13" 
                            r="3" 
                            style="fill: rgb(var(--v-theme-brain-secondary))"
                            fill-opacity="0"
                        />
                        <circle 
                            cx="3" 
                            cy="3" 
                            r="3" 
                            style="fill: rgb(var(--v-theme-brain-secondary))"
                            fill-opacity="1"
                        /> 
                    </pattern>
                </defs>
                <clipPath id="wMask">
                    <path 
                    ref="bigWRef"
                    class="bigW" 
                    id="bigW" 
                    d="M366.715 198L381.923 283.399L383.883 294.406L387.696 283.896L400.604 248.327H416.261L426.771 283.728L430 294.604L432.568 283.553L452.459 198H484.151L450.662 331H422.102L412.819 305.475L412.814 305.461L412.809 305.446L411.309 301.446L408.634 294.312L405.727 301.355L393.492 331H361.008L337.087 198H366.715Z"          />
                </clipPath>
                <g ref="WGroupRef" class="OGroup">
                    <polyline 
                        ref="WArmRDownRef" 
                        class="WArmRDown" 
                        points="460 200.5 486 173.5 486 128.5" 
                        fill="none" 
                        style="stroke: rgb(var(--v-theme-brain));"
                        stroke-miterlimit="10" 
                        stroke-width="3"
                    />
                    <polyline 
                        ref="WArmLDownRef" 
                        class="WArmLDown" 
                        points="358.5 200.54 334.5 169.5 340 128.5" 
                        fill="none" 
                        style="stroke: rgb(var(--v-theme-brain));"
                        stroke-miterlimit="10" 
                        stroke-width="3"
                    />
                    <polyline 
                        ref="WLegLRef" 
                        class="WLegL" 
                        points="388 333.5 379 373.5 383 415.5 370 430.5" 
                        fill="none" 
                        style="stroke: rgb(var(--v-theme-brain));"
                        stroke-miterlimit="10" 
                        stroke-width="3"
                    />
                    <polyline 
                        ref="WLegRRef" 
                        class="WLegR" 
                        points="428 333.5 438 374.5 431 416.5 442 432.5" 
                        fill="none" 
                        style="stroke: rgb(var(--v-theme-brain));"
                        stroke-miterlimit="10" 
                        stroke-width="3"
                    />
                    <rect 
                        fill="url(#wBg)" 
                        clip-path="url(#wMask)" 
                        x="320" 
                        y="100" 
                        width="180" 
                        height="350" 
                    />
                    <use 
                        href="#bigW" 
                        fill="none" 
                        style="stroke: rgb(var(--v-theme-brain));"
                        stroke-width="6" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                    /> 
                </g>
                <line 
                    id="WBar" 
                    x1="-50" 
                    y1="130" 
                    x2="723" 
                    y2="130" 
                    style="stroke: rgb(var(--v-theme-brain));"
                    stroke-width="4" 
                    stroke-linecap="square" 
                    stroke-linejoin="square" 
                /> 
            </svg>
        </div>
    </div>
</template>
  
<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(DrawSVGPlugin);


// K Character refs
const svgKRef = ref(null);
const legLRef = ref(null);
const legRRef = ref(null);
const bigKRef = ref(null);
const ouchGroupRef = ref(null);
const kViewBox = ref("30 60 450 450");
const [kViewBoxX, kViewBoxY, kViewBoxWidth, kViewBoxHeight] = kViewBox.value.split(" ");

  
// W Character refs
const svgWRef = ref(null);
const bigWRef = ref(null);
const WGroupRef = ref(null);
const WArmLDownRef = ref(null);
const WArmRDownRef = ref(null);
const WLegLRef = ref(null);
const WLegRRef = ref(null);
const wViewBox = ref("335 10 390 550");

let mainTlC = null;
let tlC = null;
let patternTlC = null;
let ouchTl = null;

let mainTlO = null;
let tlO = null;
let patternTlO = null;

const legLUpArr = "385.5 323.5 389.5 377.5 389.5 425.5 415 425.5".split(' ').map(Number);
const legRUpArr = "404.5 327.5 406.5 374.5 404.5 414.5 428 414.5".split(' ').map(Number);
  
let legLDownArr = [];
let legRDownArr = [];

const updateViewBoxes = () => {
  const width = window.innerWidth;

  if (width < 640) { // small screen
    kViewBox.value = "230 110 270 350";
    wViewBox.value = "335 10 230 550";
  } else { // larger screens
    kViewBox.value = "30 60 450 450";
    wViewBox.value = "335 10 390 550";
  }
};

const onUpdateC = () => {
    if (legLRef.value && legRRef.value) {
        legLRef.value.setAttribute('points', legLDownArr.join(' '));
        legRRef.value.setAttribute('points', legRDownArr.join(' '));
    }
};

onMounted(() => {
    updateViewBoxes();
    window.addEventListener("resize", updateViewBoxes);

    // K Character Animation
    legLDownArr = legLRef.value.getAttribute('points').split(' ').map(Number);
    legRDownArr = legRRef.value.getAttribute('points').split(' ').map(Number);

    gsap.set(svgKRef.value, { visibility: 'visible' });

    const ouchLines = ouchGroupRef.value.querySelectorAll('line');
    gsap.set(ouchLines, { drawSVG: '0% 0%' });

    tlC = gsap.timeline({ 
        repeat: -1, 
        yoyo: true, 
        repeatDelay: 1, 
        onUpdate: onUpdateC 
    });

    tlC.timeScale(3);

    tlC.to(legLDownArr, {
        duration: 2,
        endArray: legLUpArr,
        ease: 'back.inOut(1.5)',
        onStart: () => {
        gsap.delayedCall(1.4, () => {
            if (ouchTl) ouchTl.play(0);
        });
        }
    })
    .to(legRDownArr, {
        duration: 2,
        endArray: legRUpArr,
        ease: 'back.inOut(1.5)'
    }, '-=2')
    .to(bigKRef.value, {
        duration: 2,
        y: '-=10',
        rotation: 3,
        transformOrigin: '50% 100%',
        ease: 'back.inOut(1.5)'
    }, '-=2')
    .to('#kBg', {
        duration: 2,
        attr: {
        x: -3,
        y: 23
        },
        ease: 'back.inOut(1.5)'
    }, '-=2');

    patternTlC = gsap.timeline();
    const patternCircles = document.querySelectorAll('#kBg circle');

    patternTlC.to(patternCircles, {
        duration: 0.3,
        fillOpacity: (i) => i === 0 ? 1 : 0,
        repeat: -1,
        yoyo: true,
        ease: 'none',
        stagger: 0
    });

    ouchTl = gsap.timeline({ paused: true, repeat: 0 });
    ouchTl.timeScale(4);

    ouchTl.to(ouchLines, {
        duration: 0.5,
        drawSVG: '0% 50%',
        ease: 'none',
        stagger: 0.1
    })
    .to(ouchLines, {
        duration: 0.4,
        drawSVG: '50% 90%',
        ease: 'none',
        stagger: 0.1
    }, '-=0.2')
    .to(ouchLines, {
        duration: 0.5,
        drawSVG: '100% 100%',
        ease: 'none',
        stagger: 0.1
    }, '-=0.2');

    mainTlC = gsap.timeline();
    mainTlC.add([tlC, patternTlC], 0);

    //O Character Animation
    const OArmLUpArr = "358.5 170.54 324 167.5 340 128.5".split(' ').map(Number);
    const OArmRUpArr = "460 170.5 498.5 164.5 486 128.5".split(' ').map(Number);
    const WArmLDownArr = WArmLDownRef.value.getAttribute('points').split(' ').map(Number);
    const WArmRDownArr = WArmRDownRef.value.getAttribute('points').split(' ').map(Number);
    const OArmLTempArr = [...WArmLDownArr];
    const OArmRTempArr = [...WArmRDownArr];

    gsap.set(svgWRef.value, { visibility: 'visible' });

    const onUpdateO = () => {
        WArmLDownRef.value.setAttribute('points', OArmLTempArr.join(' '));
        WArmRDownRef.value.setAttribute('points', OArmRTempArr.join(' '));
    };

    mainTlO = gsap.timeline();
    tlO = gsap.timeline({ 
        repeat: -1, 
        repeatDelay: 3, 
        onUpdate: onUpdateO 
    });

    tlO.timeScale(3);

    tlO.to(OArmLTempArr, {
        endArray: OArmLUpArr,
        ease: 'back.out(1.5)',
        duration: 4
    })
    .to(OArmRTempArr, {
        endArray: OArmRUpArr,
        ease: 'back.out(1.5)',
        duration: 4
    }, '-=4')
    .to(bigWRef.value, {
        y: '-=30',
        ease: 'back.out(1.5)',
        duration: 4
    }, '-=4')
    .to([WLegLRef.value, WLegRRef.value], {
        y: -30,
        rotation: (i) => i === 0 ? -6 : 6,
        transformOrigin: (i) => i === 0 ? '100% 0%' : '0% 0%',
        ease: 'back.out(1.5)',
        duration: 4,
        stagger: 0
    }, '-=4')
    .to('#wBg', {
        attr: {
        x: -7,
        y: 16
        },
        ease: 'back.out(1.5)',
        duration: 4
    }, '-=4')
    .to(WGroupRef.value, {
        y: -2,
        repeat: 40,
        yoyo: true,
        ease: 'none',
        duration: 0.13
    }, '-=2.3')
    .to(bigWRef.value, {
        y: 0,
        ease: 'back.out(1.5)',
        duration: 1
    }, '+=0')
    .to(OArmLTempArr, {
        endArray: WArmLDownArr,
        ease: 'back.out(1.5)',
        duration: 1
    }, '-=1')
    .to(OArmRTempArr, {
        endArray: WArmRDownArr,
        ease: 'back.out(1.5)',
        duration: 1
    }, '-=1')
    .to('#wBg', {
        attr: {
        x: 8,
        y: 0
        },
        ease: 'back.out(1.5)',
        duration: 1
    }, '-=1')
    .to([WLegLRef.value, WLegRRef.value], {
        y: 0,
        ease: 'back.out(1.5)',
        duration: 1,
        stagger: 0
    }, '-=1')
    .to([WLegLRef.value, WLegRRef.value], {
        rotation: 0,
        duration: (i) => i === 0 ? 4 : 7,
        ease: 'elastic.out(2, 0.75)',
        stagger: 0
    }, '-=1');

    patternTlO = gsap.timeline({ repeat: -1, yoyo: true });
    patternTlO.to('#wBg circle', {
        fillOpacity: (i) => i === 0 ? 1 : 0,
        ease: 'none',
        duration: 0.4,
        stagger: 0
    });

    mainTlO.add(tlO, 0);
    mainTlO.add(patternTlO, 0);
});
  
onUnmounted(() => {
    window.removeEventListener("resize", updateViewBoxes);

    if (mainTlC) mainTlC.kill();
    if (tlC) tlC.kill();
    if (patternTlC) patternTlC.kill();
    if (ouchTl) ouchTl.kill();

    if (mainTlO) mainTlO.kill();
    if (tlO) tlO.kill();
    if (patternTlO) patternTlO.kill();
});
</script>
  
<style scoped>
.animation-container {
    width: 25%;
    height: 60vh;
    overflow: hidden;
    margin: 0;
    padding: 0;
}

svg {
    width: 100%;
    height: 100%;
    visibility: hidden;
}

polyline, line {
    stroke-linecap: round;
    stroke-linejoin: round;
}
</style>