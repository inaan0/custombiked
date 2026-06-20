<script setup lang="ts">
import { ref } from 'vue'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'

const submitted = ref(false)

function submit(e: Event) {
  e.preventDefault()
  submitted.value = true
  window.scrollTo(0, 0)
}
</script>

<template>
  <div class="min-h-screen bg-cb-bg font-sans">
    <SiteHeader />

    <main class="px-[7vw] pt-16 pb-24 max-w-[1200px] mx-auto">
      <div class="grid gap-[clamp(36px,4vw,64px)] items-start" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">

        <!-- Left: contact info -->
        <div>
          <div class="cb-label">Contact</div>
          <h1 class="font-display font-bold text-[clamp(30px,5.5vw,46px)] tracking-[-0.025em] leading-[1.05] mt-3">Tell us how you ride.</h1>
          <p class="text-[17px] leading-[1.62] text-cb-muted mt-5">Drop us a line and we'll arrange a no-obligation fitting consultation, in person or over video.</p>
          <div class="flex flex-col gap-5 mt-9">
            <div class="flex gap-3.5 items-start">
              <span class="w-2.5 h-2.5 mt-1.5 bg-cb-accent rotate-45 rounded-sm flex-none"></span>
              <div>
                <div class="font-bold text-[15.5px]">Visit the workshop</div>
                <div class="text-[14.5px] text-cb-muted">Unit 7, Forge Lane Industrial Estate</div>
              </div>
            </div>
            <div class="flex gap-3.5 items-start">
              <span class="w-2.5 h-2.5 mt-1.5 bg-cb-accent rotate-45 rounded-sm flex-none"></span>
              <div>
                <div class="font-bold text-[15.5px]">Call us</div>
                <div class="text-[14.5px] text-cb-muted">01234 567 890 · Mon–Sat</div>
              </div>
            </div>
            <div class="flex gap-3.5 items-start">
              <span class="w-2.5 h-2.5 mt-1.5 bg-cb-accent rotate-45 rounded-sm flex-none"></span>
              <div>
                <div class="font-bold text-[15.5px]">Email</div>
                <div class="text-[14.5px] text-cb-muted">hello@custombiked.cc</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: form -->
        <div class="bg-white border border-cb-border rounded-[22px] p-10">
          <!-- Success state -->
          <div v-if="submitted" class="text-center py-9">
            <div class="w-14 h-14 mx-auto rounded-full bg-cb-accent flex items-center justify-center">
              <span class="w-[18px] h-[18px] bg-white rotate-45 rounded-sm block"></span>
            </div>
            <h3 class="font-display font-bold text-[24px] mt-5">Thanks — message sent.</h3>
            <p class="text-[15.5px] text-cb-muted mt-2.5">We'll be in touch within one working day to arrange your fitting.</p>
          </div>

          <!-- Form -->
          <form v-else class="flex flex-col gap-5" @submit="submit">
            <div class="grid gap-5" style="grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));">
              <label class="flex flex-col gap-1.5 text-[13.5px] font-semibold text-cb-ink">
                Name
                <input required type="text" placeholder="Your name" class="border border-[#ddd7cc] rounded-[11px] px-3.5 py-3 text-[15px] text-cb-ink bg-[#faf8f4] outline-none focus:border-cb-accent transition-colors" />
              </label>
              <label class="flex flex-col gap-1.5 text-[13.5px] font-semibold text-cb-ink">
                Email
                <input required type="email" placeholder="you@email.com" class="border border-[#ddd7cc] rounded-[11px] px-3.5 py-3 text-[15px] text-cb-ink bg-[#faf8f4] outline-none focus:border-cb-accent transition-colors" />
              </label>
            </div>
            <label class="flex flex-col gap-1.5 text-[13.5px] font-semibold text-cb-ink">
              Which model interests you?
              <select class="border border-[#ddd7cc] rounded-[11px] px-3.5 py-3 text-[15px] text-cb-ink bg-[#faf8f4] outline-none focus:border-cb-accent transition-colors">
                <option>Not sure yet</option>
                <option>NMAX</option>
                <option>ADV</option>
                <option>AEROX</option>
                <option>Honda Click</option>
                <option>Benelli</option>
                <option>Other / not listed</option>
              </select>
            </label>
            <label class="flex flex-col gap-1.5 text-[13.5px] font-semibold text-cb-ink">
              Tell us how you ride
              <textarea rows="4" placeholder="Your mobility needs, the routes you want to ride, anything we should know…" class="border border-[#ddd7cc] rounded-[11px] px-3.5 py-3 text-[15px] text-cb-ink bg-[#faf8f4] outline-none focus:border-cb-accent transition-colors resize-y font-sans"></textarea>
            </label>
            <button type="submit" class="btn-accent justify-center py-4 text-[16px]">
              Request a fitting consultation
            </button>
          </form>
        </div>

      </div>
    </main>

    <SiteFooter />
  </div>
</template>
