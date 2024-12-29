<script>
import data from '../assets/data/dataTeam.json'
import MemberCard from '../components/MemberCard.vue'

export default {
  components: {
    MemberCard,
  },
  data() {
    return {
      members: data.data, // Menyimpan data anggota
      selectedRole: 'all', // State untuk menyimpan peran yang dipilih
    }
  },
  computed: {
    filteredMembers() {
      if (this.selectedRole === 'all') {
        return this.members
      } else {
        return this.members.filter(
          (member) => member.role === this.selectedRole,
        )
      }
    },
    roles() {
      return [...new Set(this.members.map((m) => m.role))]
    },
  },
  methods: {
    async fetchMembers() {
      try {
        const response = await fetch(data.data)
        const result = await response.json()
        this.members = result // Menyimpan data anggota dalam state
      } catch (error) {
        console.error('Error fetching members:', error)
      }
    },
    handleRoleChange(role) {
      this.selectedRole = role
    },
  },
}
</script>

<template>
  <div
    class="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20"
  >
    <div class="mx-auto mb-10 mt-10 sm:text-center lg:mt-10 lg:max-w-xl">
      <p
        class="bg-teal-accent-400 mb-4 inline-block rounded-full px-3 py-px text-4xl font-semibold uppercase tracking-wider text-white"
      >
        Temui Tim Hebat Kami
      </p>
      <p class="text-base text-white md:text-lg">
        Kami adalah sekelompok individu penuh semangat yang berdedikasi untuk
        kemajuan dan inovasi dalam dunia Teknik Informatika. Bersama, kami
        mewujudkan visi untuk menciptakan solusi teknologi yang berdampak.
      </p>

      <div class="hs-dropdown relative inline-flex">
        <div
          class="hs-dropdown-menu duration mt-2 hidden min-w-60 rounded-lg bg-white opacity-0 shadow-md transition-[opacity,margin] before:absolute before:-top-4 before:start-0 before:h-4 before:w-full after:absolute after:-bottom-4 after:start-0 after:h-4 after:w-full hs-dropdown-open:opacity-100 dark:divide-neutral-700 dark:border dark:border-neutral-700 dark:bg-neutral-800"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="hs-dropdown-default"
        >
          <div class="space-y-0.5 p-1">
            <a
              class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
              href="#"
            >
              Newsletter
            </a>
            <a
              class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
              href="#"
            >
              Purchases
            </a>
            <a
              class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
              href="#"
            >
              Downloads
            </a>
            <a
              class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
              href="#"
            >
              Team Account
            </a>
          </div>
        </div>
      </div>

      <!-- Tambahkan dropdown filter -->
      <div class="mt-6">
        <label for="role" class="mr-4 text-white">Filter by Role:</label>

        <select
          id="role"
          v-model="selectedRole"
          class="rounded-md bg-gray-800 px-4 py-2 text-white"
        >
          <option value="all">All</option>
          <option v-for="role in roles" :key="role" :value="role">
            {{ role }}
          </option>
        </select>
      </div>
    </div>
    <div
      class="mx-auto grid grid-cols-2 gap-3 sm:gap-6 lg:max-w-screen-lg lg:grid-cols-4 lg:gap-5"
    >
      <div
        v-for="member in filteredMembers"
        :key="member.id"
        class="rounded-lg bg-main-3"
      >
        <MemberCard :member="member" />
      </div>
    </div>
  </div>
</template>
