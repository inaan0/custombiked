<script setup lang="ts">
import { useRouter } from 'vue-router'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { MODELS } from '@/stores/data'

const router = useRouter()
</script>

<template>
  <div class="min-h-screen bg-cb-bg font-sans">
    <SiteHeader />

    <main class="px-[7vw] py-16 pb-24 max-w-[1320px] mx-auto">
      <div class="max-w-[40em]">
        <div class="cb-label">The base bikes</div>
        <h1 class="font-display font-bold text-[clamp(32px,6vw,50px)] tracking-[-0.025em] mt-3">Pick your bike. We do the rest.</h1>
        <p class="text-[18px] leading-relaxed text-cb-muted mt-5">These are just some of the bikes we adapt — if yours isn't here, ask us. Every conversion is fitted to you, and the prices below are starting points for a typical trike or outrigger setup.</p>
      </div>

      <div class="flex flex-col gap-8 mt-14">
        <div
          v-for="m in MODELS"
          :key="m.id"
          class="grid gap-[clamp(28px,3.5vw,44px)] items-center bg-white border border-cb-border rounded-[22px] p-[clamp(22px,3vw,34px)]"
          style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));"
        >
          <!-- Photo -->
          <div class="bg-[#ece9e2] rounded-[16px] p-6">
            <div class="w-full h-[300px] rounded-[12px] bg-cb-linen flex items-center justify-center text-cb-faint text-[13px] font-medium">
              [ {{ m.name }} photo ]
            </div>
          </div>

          <!-- Info -->
          <div>
            <div class="flex items-center gap-3">
              <span class="text-[12.5px] font-semibold tracking-[0.1em] uppercase text-[#a39c8d]">{{ m.tag }}</span>
              <span class="w-1.5 h-1.5 bg-[#cdc7ba] rounded-full"></span>
              <span class="text-[13px] font-semibold text-cb-accent-deep">{{ m.priceFrom }}</span>
            </div>
            <h2 class="font-display font-bold text-[34px] tracking-[-0.02em] mt-2">{{ m.name }}</h2>
            <p class="text-[16px] leading-[1.62] text-cb-muted mt-4">{{ m.long }}</p>
            <div class="grid grid-cols-2 gap-x-7 gap-y-4 mt-6">
              <div v-for="c in m.convs" :key="c" class="flex gap-2.5 items-start text-[14.5px] text-cb-ink">
                <span class="w-2 h-2 mt-1.5 bg-cb-accent rotate-45 rounded-sm flex-none"></span>
                {{ c }}
              </div>
            </div>
            <button class="btn-accent mt-7 text-[15.5px] px-7 py-4" @click="router.push('/contact')">
              Configure this build
            </button>
          </div>
        </div>
      </div>
    </main>

    <SiteFooter />
  </div>
</template>
