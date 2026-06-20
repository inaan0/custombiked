<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Models', to: '/models' },
  { label: 'Accessibility', to: '/accessibility' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact', to: '/contact' },
]
</script>

<template>
  <footer class="bg-cb-panel-deep text-[#cfd4d9] px-[7vw] pt-16 pb-10">
    <div class="max-w-[1200px] mx-auto grid gap-10" style="grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));">
      <!-- Brand -->
      <div>
        <div class="flex items-center gap-3">
          <div class="w-7 h-7 rounded-[8px] bg-cb-accent flex items-center justify-center flex-none">
            <div class="w-2.5 h-2.5 bg-cb-panel-deep rotate-45 rounded-sm"></div>
          </div>
          <span class="font-display font-bold text-[18px] text-cb-bg">CustomBiked</span>
        </div>
        <p class="text-[14.5px] leading-relaxed text-[#9aa3ab] mt-4 max-w-[26em]">
          Adaptive scooter and motorbike conversions for disabled riders. Trike and outrigger builds, hand controls, and step-through frames — made for every rider.
        </p>
      </div>

      <!-- Explore -->
      <div>
        <div class="font-bold text-[14px] text-cb-bg mb-4">Explore</div>
        <div class="flex flex-col gap-2.5 text-[14.5px]">
          <button
            v-for="link in navLinks"
            :key="link.to"
            class="text-left text-[#9aa3ab] hover:text-cb-bg transition-colors cursor-pointer bg-transparent border-0 p-0"
            @click="router.push(link.to)"
          >
            {{ link.label }}
          </button>
        </div>
      </div>

      <!-- Bikes -->
      <div>
        <div class="font-bold text-[14px] text-cb-bg mb-4">Bikes</div>
        <div class="flex flex-col gap-2.5 text-[14.5px] text-[#9aa3ab]">
          <span>NMAX</span><span>ADV</span><span>AEROX</span><span>Honda Click</span><span>Benelli</span>
          <span class="text-[#6f7882]">&amp; many more</span>
        </div>
      </div>

      <!-- Contact -->
      <div>
        <div class="font-bold text-[14px] text-cb-bg mb-4">Get in touch</div>
        <div class="flex flex-col gap-2.5 text-[14.5px] text-[#9aa3ab]">
          <span>hello@custombiked.cc</span>
          <span>01234 567 890</span>
          <span>Forge Lane, Unit 7</span>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="max-w-[1200px] mx-auto mt-9 pt-6 border-t border-cb-panel-line flex justify-between gap-4 flex-wrap text-[13px] text-[#717b85]">
      <span>© 2026 CustomBiked. Independent specialists — not affiliated with any motorcycle manufacturer.</span>
      <span>Made for every rider.</span>
    </div>
  </footer>
</template>
