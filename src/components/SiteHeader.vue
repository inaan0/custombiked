<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'

const router = useRouter()
const route = useRoute()

const menuOpen = ref(false)
const isNarrow = ref(false)

function onResize() {
  isNarrow.value = window.innerWidth < 820
  if (!isNarrow.value) menuOpen.value = false
}

onMounted(() => {
  onResize()
  window.addEventListener('resize', onResize)
})
onUnmounted(() => window.removeEventListener('resize', onResize))

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Models', to: '/models' },
  { label: 'Accessibility', to: '/accessibility' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact', to: '/contact' },
]

function navigate(to: string) {
  menuOpen.value = false
  router.push(to)
}

function isActive(to: string) {
  return to === '/' ? route.path === '/' : route.path.startsWith(to)
}
</script>

<template>
  <header class="sticky top-0 z-50 flex items-center justify-between gap-6 px-[7vw] py-4 bg-[rgba(246,244,240,0.82)] backdrop-blur-md border-b border-cb-linen">
    <!-- Logo -->
    <div class="flex items-center gap-3 cursor-pointer" @click="navigate('/')">
      <div class="w-8 h-8 rounded-[8px] bg-cb-accent flex items-center justify-center flex-none">
        <div class="w-3 h-3 bg-cb-bg rotate-45 rounded-sm"></div>
      </div>
      <div class="flex flex-col leading-none">
        <span class="font-display font-bold text-[19px] tracking-[-0.02em]">CustomBiked</span>
        <span class="text-[10.5px] tracking-[0.14em] uppercase text-cb-faint mt-1">Made for every rider</span>
      </div>
    </div>

    <!-- Desktop nav -->
    <nav v-if="!isNarrow" class="flex items-center gap-8">
      <button
        v-for="link in navLinks.slice(0, -1)"
        :key="link.to"
        class="font-medium text-[15px] transition-colors cursor-pointer bg-transparent border-0 p-0"
        :class="isActive(link.to) ? 'text-cb-accent' : 'text-cb-ink hover:text-cb-accent'"
        @click="navigate(link.to)"
      >
        {{ link.label }}
      </button>
      <button
        class="btn-accent text-sm px-5 py-[11px] whitespace-nowrap"
        @click="navigate('/contact')"
      >
        Book a fitting
      </button>
    </nav>

    <!-- Mobile hamburger -->
    <button v-if="isNarrow" class="p-2 -m-2 cursor-pointer bg-transparent border-0" @click="menuOpen = !menuOpen">
      <X v-if="menuOpen" :size="24" />
      <Menu v-else :size="24" />
    </button>

    <!-- Mobile dropdown -->
    <div
      v-if="isNarrow && menuOpen"
      class="absolute top-full left-0 right-0 bg-cb-bg border-b border-cb-linen shadow-[0_14px_26px_rgba(0,0,0,0.09)] flex flex-col px-[7vw] pb-5"
    >
      <button
        v-for="link in navLinks"
        :key="link.to"
        class="cursor-pointer text-left py-4 font-semibold text-[17px] border-b border-cb-linen last:border-0 bg-transparent border-x-0 border-t-0"
        :class="isActive(link.to) ? 'text-cb-accent' : 'text-cb-ink'"
        @click="navigate(link.to)"
      >
        {{ link.label }}
      </button>
      <button class="btn-accent mt-4 justify-center" @click="navigate('/contact')">
        Book a fitting
      </button>
    </div>
  </header>
</template>
