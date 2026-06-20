<script setup lang="ts">
import { useRouter } from 'vue-router'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { MODELS, HOME_FEATURES, TESTIMONIALS } from '@/stores/data'

const router = useRouter()
const homeModels = MODELS.slice(0, 3)
</script>

<template>
  <div class="min-h-screen bg-cb-bg font-sans">
    <SiteHeader />

    <main>
      <!-- HERO -->
      <section class="px-[7vw] pt-[clamp(44px,5vw,72px)] pb-[clamp(40px,5vw,60px)]">
        <div class="max-w-[860px] mx-auto text-center animate-cbRise">
          <div class="inline-flex items-center gap-2 bg-cb-linen rounded-full px-4 py-2 text-[13px] font-semibold text-cb-accent-deep">
            <span class="w-2 h-2 bg-cb-accent rounded-full"></span>
            Adaptive scooter &amp; bike conversions
          </div>
          <h1 class="font-display font-bold text-[clamp(36px,6.2vw,58px)] leading-[1.02] tracking-[-0.025em] mt-5 mb-0 text-balance">
            The open road was always meant for everyone.
          </h1>
          <p class="text-[19px] leading-relaxed text-cb-muted max-w-[40em] mx-auto mt-5">
            We adapt popular scooters and motorbikes — the NMAX, ADV, AEROX, Honda Click, Benelli and more — for disabled riders. Trike and outrigger conversions, hand controls, and step-through frames, all built around you.
          </p>
          <div class="flex gap-4 mt-8 justify-center flex-wrap">
            <button class="btn-accent text-[16.5px] px-8 py-4" @click="router.push('/models')">Explore models</button>
            <button class="btn-outline text-[16.5px] px-8 py-4" @click="router.push('/accessibility')">How conversions work</button>
          </div>
          <div class="flex gap-[clamp(28px,4vw,48px)] mt-10 justify-center flex-wrap">
            <div>
              <div class="font-display font-bold text-[26px]">11+ yrs</div>
              <div class="text-[13.5px] text-cb-faint">adapting riders' bikes</div>
            </div>
            <div>
              <div class="font-display font-bold text-[26px]">600+</div>
              <div class="text-[13.5px] text-cb-faint">conversions on the road</div>
            </div>
            <div>
              <div class="font-display font-bold text-[26px]">2 yr</div>
              <div class="text-[13.5px] text-cb-faint">conversion warranty</div>
            </div>
          </div>
        </div>

        <!-- Hero image placeholder -->
        <div class="max-w-[1080px] mx-auto mt-[clamp(40px,5vw,52px)]">
          <div class="relative rounded-[22px] overflow-hidden bg-cb-linen" style="height: clamp(280px,42vw,440px);">
            <div class="absolute inset-0 flex items-center justify-center text-cb-faint text-[15px] font-medium">
              [ Hero photo — rider on an adapted trike ]
            </div>
            <!-- overlay badge -->
            <div class="absolute left-5 bottom-5 bg-[rgba(30,42,55,0.9)] text-cb-bg backdrop-blur-sm rounded-[14px] px-4 py-3 max-w-[230px]">
              <div class="font-bold text-[14.5px]">NMAX · Trike conversion</div>
              <div class="text-[12.5px] text-[#bcb6a8] mt-1">Outrigger wheels + hand controls</div>
            </div>
            <!-- rating pill -->
            <div class="absolute right-5 top-5 inline-flex items-center gap-2 bg-[rgba(246,244,240,0.92)] text-cb-ink rounded-full px-4 py-2.5 text-[13px] font-semibold">
              <span class="text-cb-accent tracking-[1px]">★★★★★</span> 4.9 from 312 riders
            </div>
          </div>
        </div>
      </section>

      <!-- FEATURE STRIP -->
      <section class="bg-cb-panel text-cb-bg px-[7vw] py-14">
        <div class="max-w-[1200px] mx-auto grid gap-9" style="grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));">
          <div v-for="f in HOME_FEATURES" :key="f.title" class="flex flex-col gap-2">
            <span class="w-3 h-3 bg-cb-accent rotate-45 rounded-sm"></span>
            <div class="font-display font-semibold text-[18px] mt-1.5">{{ f.title }}</div>
            <div class="text-[14px] leading-[1.55] text-cb-panel-text">{{ f.desc }}</div>
          </div>
        </div>
      </section>

      <!-- MODELS PREVIEW -->
      <section class="px-[7vw] py-[88px] max-w-[1320px] mx-auto">
        <div class="flex items-end justify-between gap-6 mb-10 flex-wrap">
          <div>
            <div class="cb-label">Some of the bikes we adapt</div>
            <h2 class="font-display font-bold text-[clamp(28px,4.5vw,40px)] tracking-[-0.02em] mt-2.5">Pick a base. We build around you.</h2>
          </div>
          <button class="font-semibold text-[15.5px] text-cb-accent-deep border-b-2 border-cb-accent pb-1 cursor-pointer bg-transparent border-x-0 border-t-0" @click="router.push('/models')">
            See all models →
          </button>
        </div>
        <div class="grid gap-7" style="grid-template-columns: repeat(auto-fit, minmax(258px, 1fr));">
          <div v-for="m in homeModels" :key="m.id" class="cb-card overflow-hidden flex flex-col">
            <div class="bg-[#ece9e2] p-5">
              <div class="w-full h-[210px] rounded-[12px] bg-cb-linen flex items-center justify-center text-cb-faint text-[13px] font-medium">
                [ {{ m.name }} photo ]
              </div>
            </div>
            <div class="p-6 flex flex-col flex-1">
              <div class="text-[12.5px] font-semibold tracking-[0.1em] uppercase text-[#a39c8d]">{{ m.tag }}</div>
              <h3 class="font-display font-bold text-[25px] mt-2">{{ m.name }}</h3>
              <p class="text-[14.5px] leading-[1.58] text-cb-muted mt-2.5">{{ m.blurb }}</p>
              <div class="flex flex-wrap gap-2 mt-4">
                <span v-for="sp in m.specs" :key="sp" class="text-[12.5px] font-medium text-cb-ink bg-[#f1ede4] rounded-full px-3 py-1.5">{{ sp }}</span>
              </div>
              <div class="flex items-center justify-between gap-3 mt-auto pt-5">
                <span class="font-bold text-[16px]">{{ m.priceFrom }}</span>
                <button class="btn-accent text-[14px] px-5 py-2.5" @click="router.push('/models')">Customize</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ACCESSIBILITY HIGHLIGHT -->
      <section class="px-[7vw] pb-24 max-w-[1320px] mx-auto">
        <div class="grid gap-[clamp(32px,4vw,54px)] items-center bg-[#efe9df] rounded-[26px] p-[clamp(26px,4vw,46px)]" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
          <div>
            <div class="cb-label">Our specialty</div>
            <h2 class="font-display font-bold text-[clamp(27px,4vw,38px)] tracking-[-0.02em] leading-[1.08] mt-3">Trike &amp; outrigger conversions for rock-solid confidence.</h2>
            <p class="text-[17px] leading-[1.62] text-cb-muted mt-4">Balance shouldn't keep you off the road. Our retractable outrigger wheels deploy at low speed and at stops, then tuck away as you ride — and our full trike conversions give two planted rear wheels that never need a foot down.</p>
            <ul class="mt-6 flex flex-col gap-3 list-none p-0">
              <li class="flex gap-3 items-start text-[15.5px] text-cb-ink">
                <span class="w-2.5 h-2.5 mt-1.5 bg-cb-accent rounded-full flex-none"></span>
                Stay upright at a standstill — no balancing required
              </li>
              <li class="flex gap-3 items-start text-[15.5px] text-cb-ink">
                <span class="w-2.5 h-2.5 mt-1.5 bg-cb-accent rounded-full flex-none"></span>
                Reverse gear to back out of any parking spot
              </li>
              <li class="flex gap-3 items-start text-[15.5px] text-cb-ink">
                <span class="w-2.5 h-2.5 mt-1.5 bg-cb-accent rounded-full flex-none"></span>
                Hand-fitted to your strength, reach and grip
              </li>
            </ul>
            <button class="btn-panel mt-7 text-[15.5px] px-7 py-3.5" @click="router.push('/accessibility')">See all conversions</button>
          </div>
          <div class="w-full h-[420px] rounded-[18px] bg-cb-linen flex items-center justify-center text-cb-faint text-[13px] font-medium">
            [ Outrigger / trike conversion photo ]
          </div>
        </div>
      </section>

      <!-- TESTIMONIALS -->
      <section class="bg-cb-panel text-cb-bg px-[7vw] py-[88px]">
        <div class="max-w-[1200px] mx-auto">
          <div class="text-center max-w-[34em] mx-auto mb-12">
            <div class="text-[13px] font-semibold tracking-[0.14em] uppercase text-cb-accent">Our riders</div>
            <h2 class="font-display font-bold text-[clamp(27px,4vw,38px)] tracking-[-0.02em] mt-3">Back on the road, in their own words.</h2>
          </div>
          <div class="grid gap-6" style="grid-template-columns: repeat(auto-fit, minmax(258px, 1fr));">
            <div v-for="t in TESTIMONIALS" :key="t.name" class="bg-cb-panel-card border border-cb-panel-line rounded-[18px] p-7">
              <div class="text-cb-accent text-[22px] tracking-[2px]">★★★★★</div>
              <p class="text-[16.5px] leading-relaxed text-[#e7e3d8] my-4">{{ t.quote }}</p>
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-cb-accent flex items-center justify-center font-bold text-white text-[15px]">{{ t.initial }}</div>
                <div>
                  <div class="font-semibold text-[15px]">{{ t.name }}</div>
                  <div class="text-[13px] text-[#9aa3ab]">{{ t.detail }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA BAND -->
      <section class="px-[7vw] py-[84px] max-w-[1320px] mx-auto">
        <div class="bg-cb-accent rounded-[26px] p-[clamp(30px,4.5vw,60px)] flex items-center justify-between gap-10 flex-wrap">
          <div class="text-white">
            <h2 class="font-display font-bold text-[clamp(27px,4vw,38px)] tracking-[-0.02em] m-0 max-w-[16em]">Book a free fitting consultation.</h2>
            <p class="text-[17px] leading-[1.55] mt-4 text-[#d4f0e2] max-w-[34em]">Tell us how you ride and what you need. We'll map out a conversion built entirely around you — no obligation.</p>
          </div>
          <button class="btn-panel text-[17px] px-9 py-5 whitespace-nowrap" @click="router.push('/contact')">Get in touch</button>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>
