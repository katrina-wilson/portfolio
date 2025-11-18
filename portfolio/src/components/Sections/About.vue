<template>
    <section
        id="about"
        ref="sectionRef"
        class="tw:min-h-screen tw:py-24 tw:bg-gradient-to-b tw:from-background tw:to-muted/30"
    >
    <div className="tw:mx-auto tw:px-6">
        <h2 className="tw:text-5xl tw:md:text-6xl tw:font-bold tw:text-center tw:mb-20 tw:text-foreground">
          About
        </h2>

        <div className="tw:max-w-4xl tw:mx-auto tw:space-y-12">
          <div className="tw:about-content tw:text-center">
            <p className="tw:text-xl tw:text-muted-foreground tw:leading-relaxed">
              I'm a front-end engineer who bridges the gap between design and development.
              With a strong foundation in React and Vue, I create elegant, responsive
              interfaces that users love to interact with.
            </p>
          </div>

          <div className="tw:grid tw:md:grid-cols-2 tw:gap-8 tw:mt-16">
            <div className="tw:p-8 tw:rounded-2xl tw:bg-gradient-to-br tw:from-lavender/10 tw:to-beige/10 tw:border tw:border-border">
              <div className="tw:flex tw:items-center tw:gap-3 tw:mb-4">
                <div className="tw:p-3 tw:rounded-full tw:bg-lavender/20">
                  <Palette className="tw:text-lavender" size={24} />
                </div>
                <h3 className="tw:text-2xl tw:font-semibold tw:text-foreground">Creative Side</h3>
              </div>
              <p className="tw:text-muted-foreground tw:leading-relaxed">
                I believe great design is about more than aesthetics—it's about creating
                intuitive experiences. I work closely with design systems, ensuring every
                pixel serves a purpose while maintaining visual harmony.
              </p>
            </div>

            <div class="tw:p-8 tw:rounded-2xl tw:bg-gradient-to-br tw:from-sage/10 tw:to-primary/5 tw:border tw:border-border">
              <div class="tw:flex tw:items-center tw:gap-3 tw:mb-4">
                <div class="tw:p-3 tw:rounded-full tw:bg-sage/20">
                  <Code2 className="tw:text-sage" size={24} />
                </div>
                <h3 className="tw:text-2xl tw:font-semibold tw:text-foreground">Technical Side</h3>
              </div>
              <p className="tw:text-muted-foreground tw:leading-relaxed">
                Clean, maintainable code is my standard. I write TypeScript with
                confidence, optimize performance where it matters, and keep accessibility
                at the forefront. Backend and data skills round out my toolkit.
              </p>
            </div>
          </div>

          <div className="tw:text-center tw:pt-8">
            <p className="tw:text-lg tw:text-muted-foreground tw:leading-relaxed">
              When I'm not coding, I'm probably exploring new design trends, learning about
              emerging technologies, or working on personal projects that push my creative
              and technical boundaries.
            </p>
          </div>
        </div>
      </div>
    </section>
</template>
  
<script setup>
import { onMounted } from "vue";

onMounted(() => {
});
</script>