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
        Discover Our Team
      </p>
      <p class="text-base text-white md:text-lg">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium.
      </p>
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
