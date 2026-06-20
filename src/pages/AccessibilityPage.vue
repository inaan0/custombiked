<script setup lang="ts">
import { useRouter } from 'vue-router'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { CONVERSIONS, STEPS } from '@/stores/data'

const router = useRouter()
</script>

<template>
  <div class="min-h-screen bg-cb-bg font-sans">
    <SiteHeader />

    <main>
      <!-- Intro -->
      <section class="px-[7vw] pt-16 pb-8 max-w-[1320px] mx-auto">
        <div class="max-w-[42em]">
          <div class="cb-label">Accessibility</div>
          <h1 class="font-display font-bold text-[clamp(32px,6vw,50px)] tracking-[-0.025em] leading-[1.05] mt-3">
            Conversions that meet you exactly where you are.
          </h1>
          <p class="text-[18px] leading-[1.62] text-cb-muted mt-5">
            There's no single "accessible bike." There's your body, your route, and the freedom you're after. We start with a conversation and a fitting, then engineer from there.
          </p>
        </div>
      </section>

      <!-- Conversions grid -->
      <section class="px-[7vw] pb-5 max-w-[1320px] mx-auto">
        <div class="grid gap-6" style="grid-template-columns: repeat(auto-fit, minmax(258px, 1fr));">
          <div v-for="c in CONVERSIONS" :key="c.title" class="cb-card p-7">
            <span class="inline-flex w-[42px] h-[42px] rounded-[12px] bg-[#f1ede4] items-center justify-center">
              <span class="w-[15px] h-[15px] bg-cb-accent rotate-45 rounded-sm"></span>
            </span>
            <h3 class="font-display font-bold text-[20px] mt-5">{{ c.title }}</h3>
            <p class="text-[14.5px] leading-[1.58] text-cb-muted mt-2.5">{{ c.desc }}</p>
          </div>
        </div>
      </section>

      <!-- How it works -->
      <section class="bg-cb-panel text-cb-bg px-[7vw] py-[84px] mt-14">
        <div class="max-w-[1200px] mx-auto">
          <h2 class="font-display font-bold text-[clamp(27px,4vw,38px)] tracking-[-0.02em] mb-12 text-center">
            How a build comes together
          </h2>
          <div class="grid gap-8" style="grid-template-columns: repeat(auto-fit, minmax(185px, 1fr));">
            <div v-for="s in STEPS" :key="s.n">
              <div class="font-display font-bold text-[34px] text-cb-accent">{{ s.n }}</div>
              <div class="h-0.5 bg-cb-panel-line my-4"></div>
              <div class="font-bold text-[18px]">{{ s.title }}</div>
              <p class="text-[14.5px] leading-[1.55] text-cb-panel-text mt-2.5">{{ s.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="px-[7vw] py-[84px] max-w-[1320px] mx-auto text-center">
        <h2 class="font-display font-bold text-[clamp(26px,4vw,36px)] tracking-[-0.02em]">
          Let's figure out your build together.
        </h2>
        <button class="btn-accent mt-7 text-[16.5px] px-8 py-4" @click="router.push('/contact')">
          Book a free consultation
        </button>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>
