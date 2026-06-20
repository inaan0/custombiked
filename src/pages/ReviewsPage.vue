<script setup lang="ts">
import { ref } from 'vue'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { BASE_REVIEWS, RATING_BARS, type Review } from '@/stores/data'

const userReviews = ref<Review[]>([])
const rating = ref(5)
const reviewSent = ref(false)

const reviewsAll = ref([...BASE_REVIEWS])

function setRating(n: number) {
  rating.value = n
}

function submitReview(e: Event) {
  e.preventDefault()
  const form = e.target as HTMLFormElement
  const els = form.elements as HTMLFormControlsCollection & {
    rname: HTMLInputElement
    rbike: HTMLSelectElement
    rexp: HTMLTextAreaElement
  }
  const name = els.rname.value.trim()
  const nr: Review = {
    id: 'rv-user-' + Date.now(),
    type: 'photo',
    rating: rating.value,
    name: name || 'Anonymous rider',
    bike: els.rbike.value,
    when: 'Just now',
    initial: (name || 'A').charAt(0).toUpperCase(),
    quote: els.rexp.value.trim() || 'Loving my new build!',
  }
  userReviews.value = [nr, ...userReviews.value]
  reviewsAll.value = [...userReviews.value, ...BASE_REVIEWS]
  reviewSent.value = true
  rating.value = 5
  form.reset()
}

function resetReview() {
  reviewSent.value = false
}


</script>

<template>
  <div class="min-h-screen bg-cb-bg font-sans">
    <SiteHeader />

    <main>
      <!-- Intro + rating summary -->
      <section class="px-[7vw] pt-16 pb-7 max-w-[1320px] mx-auto">
        <div class="grid gap-[clamp(28px,4vw,54px)] items-center" style="grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));">
          <div class="max-w-[40em]">
            <div class="cb-label">Rider reviews</div>
            <h1 class="font-display font-bold text-[clamp(32px,6vw,50px)] tracking-[-0.025em] leading-[1.05] mt-3">
              Builds in the wild — in riders' own words.
            </h1>
            <p class="text-[18px] leading-[1.62] text-cb-muted mt-5">
              Photos, videos and stories from the people riding our conversions every day. Post your own build below and tell the community how it's going.
            </p>
          </div>

          <!-- Rating box -->
          <div class="bg-white border border-cb-border rounded-[22px] px-8 py-7">
            <div class="flex items-end gap-4">
              <div class="font-display font-bold text-[54px] leading-[0.9]">4.9</div>
              <div class="pb-1.5">
                <div class="text-cb-accent text-[18px] tracking-[2px]">★★★★★</div>
                <div class="text-[13px] text-cb-faint mt-1">from 312 rider reviews</div>
              </div>
            </div>
            <div class="flex flex-col gap-2 mt-5">
              <div v-for="b in RATING_BARS" :key="b.label" class="flex items-center gap-2.5">
                <span class="text-[12.5px] text-cb-faint w-7">{{ b.label }}</span>
                <span class="flex-1 h-[7px] bg-cb-linen rounded-full overflow-hidden">
                  <span class="block h-full bg-cb-accent rounded-full" :style="{ width: b.pct }"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Share panel -->
      <section class="px-[7vw] py-5 max-w-[1320px] mx-auto">
        <div class="bg-[#efe9df] rounded-[26px] p-[clamp(24px,3.5vw,40px)]">
          <div class="grid gap-[clamp(26px,3vw,44px)] items-start" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
            <div>
              <div class="cb-label">Share your build</div>
              <h2 class="font-display font-bold text-[clamp(26px,3.6vw,34px)] tracking-[-0.02em] mt-3">Show the community your ride.</h2>
              <p class="text-[16px] leading-relaxed text-cb-muted mt-4">Add a photo or a short video of your conversion and tell other riders how it's going. Every story helps someone take the leap.</p>
              <div class="grid grid-cols-2 gap-4 mt-6">
                <div class="h-[155px] bg-cb-linen rounded-[14px] flex items-center justify-center text-cb-faint text-[12px] font-medium">Add a photo</div>
                <div class="h-[155px] bg-cb-linen rounded-[14px] flex items-center justify-center text-cb-faint text-[12px] font-medium">Add a video</div>
              </div>
            </div>

            <!-- Review form -->
            <div class="bg-white border border-cb-border rounded-[20px] p-8">
              <!-- Thank you state -->
              <div v-if="reviewSent" class="text-center py-7">
                <div class="w-14 h-14 mx-auto rounded-full bg-cb-accent flex items-center justify-center">
                  <span class="w-[18px] h-[18px] bg-white rotate-45 rounded-sm block"></span>
                </div>
                <h3 class="font-display font-bold text-[23px] mt-5">Thanks for sharing!</h3>
                <p class="text-[15px] text-cb-muted mt-2.5 mb-6">Your review is live in the gallery below.</p>
                <button class="btn-accent px-6 py-3 text-[15px]" @click="resetReview">Post another</button>
              </div>

              <!-- Form -->
              <form v-else class="flex flex-col gap-4" @submit="submitReview">
                <div class="grid gap-4" style="grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));">
                  <label class="flex flex-col gap-1.5 text-[13.5px] font-semibold text-cb-ink">
                    Name
                    <input name="rname" type="text" placeholder="Your name" class="border border-[#ddd7cc] rounded-[11px] px-3.5 py-3 text-[15px] text-cb-ink bg-[#faf8f4] outline-none focus:border-cb-accent transition-colors" />
                  </label>
                  <label class="flex flex-col gap-1.5 text-[13.5px] font-semibold text-cb-ink">
                    Your bike
                    <select name="rbike" class="border border-[#ddd7cc] rounded-[11px] px-3.5 py-3 text-[15px] text-cb-ink bg-[#faf8f4] outline-none focus:border-cb-accent transition-colors">
                      <option>NMAX · Trike conversion</option>
                      <option>ADV · Outriggers</option>
                      <option>AEROX · Hand controls</option>
                      <option>Click · Trike conversion</option>
                      <option>Benelli · Lowered + hand controls</option>
                      <option>Other build</option>
                    </select>
                  </label>
                </div>
                <div class="flex flex-col gap-2">
                  <span class="text-[13.5px] font-semibold text-cb-ink">Your rating</span>
                  <div class="flex gap-2">
                    <button
                      v-for="n in 5"
                      :key="n"
                      type="button"
                      class="text-[28px] leading-none cursor-pointer bg-transparent border-0 p-0 transition-transform hover:scale-110"
                      :class="n <= rating ? 'text-cb-accent' : 'text-[#d4cec1]'"
                      @click="setRating(n)"
                    >★</button>
                  </div>
                </div>
                <label class="flex flex-col gap-1.5 text-[13.5px] font-semibold text-cb-ink">
                  Your experience
                  <textarea name="rexp" rows="4" placeholder="How's the build going? What changed for you?" class="border border-[#ddd7cc] rounded-[11px] px-3.5 py-3 text-[15px] text-cb-ink bg-[#faf8f4] outline-none focus:border-cb-accent transition-colors resize-y font-sans"></textarea>
                </label>
                <button type="submit" class="btn-accent justify-center py-4 text-[16px]">Post my review</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <!-- Gallery -->
      <section class="px-[7vw] pt-8 pb-24 max-w-[1320px] mx-auto">
        <div style="columns: 3 300px; column-gap: 22px;">
          <div
            v-for="r in reviewsAll"
            :key="r.id"
            class="break-inside-avoid inline-block w-full mb-6 bg-white border border-cb-border rounded-[18px] overflow-hidden align-top"
          >
            <!-- Media placeholder -->
            <div class="relative bg-[#ece9e2] h-[230px] flex items-center justify-center">
              <span class="text-cb-faint text-[13px] font-medium">[ {{ r.type === 'video' ? 'Video' : 'Photo' }} ]</span>
              <!-- Video play button -->
              <div v-if="r.type === 'video'" class="absolute inset-0 flex items-center justify-center">
                <div class="w-14 h-14 rounded-full bg-[rgba(30,42,55,0.78)] flex items-center justify-center">
                  <div class="w-0 h-0 border-l-[15px] border-l-white border-y-[9px] border-y-transparent ml-1"></div>
                </div>
              </div>
              <span class="absolute top-3 left-3 bg-[rgba(30,42,55,0.82)] text-cb-bg text-[11.5px] font-semibold tracking-[0.04em] rounded-full px-3 py-1.5">
                {{ r.type === 'video' ? 'Video' : 'Photo' }}
              </span>
            </div>

            <!-- Content -->
            <div class="px-6 pt-5 pb-6">
              <div class="text-[15px] tracking-[2px]">
                <span class="text-cb-accent">{{ '★'.repeat(r.rating) }}</span>
                <span class="text-[#cdc7ba]">{{ '☆'.repeat(5 - r.rating) }}</span>
              </div>
              <p class="text-[15.5px] leading-[1.58] text-[#33302a] my-3">{{ r.quote }}</p>
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-cb-accent flex items-center justify-center font-bold text-white text-[14px] flex-none">{{ r.initial }}</div>
                <div class="min-w-0">
                  <div class="font-semibold text-[14.5px]">{{ r.name }}</div>
                  <div class="text-[12.5px] text-cb-faint">{{ r.bike }} · {{ r.when }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>
