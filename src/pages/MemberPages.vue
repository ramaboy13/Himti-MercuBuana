<template>
  <div
    class="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20"
  >
    <div class="mx-auto mb-10 mt-10 sm:text-center lg:mt-10 lg:max-w-xl">
      <p
        class="bg-teal-accent-400 mb-4 inline-block rounded-full px-3 py-px text-4xl font-semibold uppercase tracking-wider text-white"
      >
        Discover Our Team
      </p>
      <p class="text-base text-white md:text-lg">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium.
      </p>
    </div>
    <div
      class="mx-auto grid grid-cols-2 gap-3 sm:gap-6 lg:max-w-screen-lg lg:grid-cols-4 lg:gap-5"
    >
      <div
        v-for="member in members"
        :key="member.id"
        class="rounded-lg bg-main-3"
      >
        <div class="relative mb-4 rounded pb-56 shadow lg:pb-64">
          <!-- Badge with even smaller padding and font size -->
          <div
            class="absolute bottom-2 left-2 z-[4] inline-flex items-center gap-x-1 rounded-full border bg-main-2 px-1.5 py-0.5 text-[9px] font-semibold text-white"
            v-if="member.badge"
          >
            {{ member.badge }}
          </div>

          <img
            class="absolute z-0 h-full w-full rounded-t-lg object-cover"
            :src="member.image"
            :alt="member.name"
          />
        </div>

        <div class="flex flex-col text-center sm:text-center">
          <p class="text-lg font-bold text-white">{{ member.name }}</p>
          <p class="mb-5 text-xs text-gray-400">{{ member.role }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import members from '../assets/data/dataTeam.json'

export default {
  data() {
    return {
      members,
    }
  },
}
</script>
