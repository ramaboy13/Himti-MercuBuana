<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js'
import { computed } from 'vue'

const props = defineProps({
  members: {
    type: Array,
    required: true,
    default: () => []
  }
})

const divisions = computed(() => {
  const allMembers = props.members
  const grouped = allMembers.reduce((acc, member) => {
    const divisionName = member.role
    if (!acc[divisionName]) {
      acc[divisionName] = []
    }
    acc[divisionName].push(member)
    return acc
  }, {})

  const sortedDivisions = Object.keys(grouped).map((divisionName) => {
    const members = grouped[divisionName]
    members.sort((a, b) => {
      if (a.badge === 'Ketua Divisi') return -1
      if (b.badge === 'Ketua Divisi') return 1
      return a.name.localeCompare(b.name)
    })
    return {
      name: divisionName,
      members: members,
    }
  })

  return sortedDivisions
})
</script>

<template>
  <section id="divisi" class="bg-main-1 pt-24 pb-[150px] text-white" data-aos="fade-up">
    <div class="container mx-auto max-w-7xl px-6">
      <h2 class="text-4xl font-bold">Divisi HIMTI Universitas Mercubuana</h2>
      <div class="mt-3 h-1 w-48 bg-purple-600"></div>
      <div
        class="hs-accordion-group mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:items-start"
      >
        <div
          v-for="(division, index) in divisions"
          :key="division.name"
          class="hs-accordion rounded-lg border-2 border-purple-800 bg-purple-900/30"
          :id="`hs-accordion-divisi-${index}`"
        >
          <button
            type="button"
            class="hs-accordion-toggle flex w-full items-center justify-between gap-x-3 px-6 py-5 text-left text-xl font-semibold text-white transition hover:text-gray-300 hs-accordion-active:text-purple-400"
            :aria-controls="`hs-accordion-body-divisi-${index}`"
          >
            {{ division.name }}
            <Icon
              icon="mdi:chevron-down"
              class="block h-6 w-6 transition-transform hs-accordion-active:rotate-180"
            />
          </button>

          <div
            :id="`hs-accordion-body-divisi-${index}`"
            class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            :aria-labelledby="`hs-accordion-divisi-${index}`"
          >
            <div class="border-t border-purple-700 p-6">
              <ul class="space-y-3">
                <li
                  v-for="member in division.members"
                  :key="member.id"
                  class="flex items-center gap-2"
                >
                  <Icon
                    :icon="
                      member.badge === 'Ketua Divisi'
                        ? 'mdi:star'
                        : 'mdi:account'
                    "
                    class="h-5 w-5"
                    :class="
                      member.badge === 'Ketua Divisi'
                        ? 'text-yellow-400'
                        : 'text-purple-400'
                    "
                  />
                  <span
                    :class="{
                      'font-bold': member.badge === 'Ketua Divisi',
                    }"
                  >
                    {{ member.name }}
                    <span
                      v-if="member.badge === 'Ketua Divisi'"
                      class="text-sm text-yellow-500"
                    >
                      (Ketua Divisi)
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>