<script setup lang="js">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import MemberCard from '../components/card/MemberCard.vue';
import data from '../assets/data/dataTeam.json';
import Loading from '../components/utils/Loading.vue';

// State Management
const members = ref([]);
const selectedRole = ref('all');
const isLoading = ref(true);
const error = ref(null);
let timeoutId = null;

// Computed Properties
const roles = computed(() => {
  const uniqueRoles = [...new Set(members.value.map((m) => m.role))];
  return uniqueRoles.sort((a, b) => a.localeCompare(b));
});

const filteredMembers = computed(() => {
  if (!members.value.length) return [];
  return selectedRole.value === 'all'
    ? members.value
    : members.value.filter((m) => m.role === selectedRole.value);
});

// Lifecycle Hooks
onMounted(() => {
  loadMembers();
});

onBeforeUnmount(() => {
  cleanup();
});

// Methods
const loadMembers = async () => {
  try {
    isLoading.value = true;
    error.value = null;
    members.value = await structuredClone(data.data);
  } catch (err) {
    handleError(err);
  } finally {
    isLoading.value = false;
  }
};

const handleError = (err) => {
  error.value = err.message || 'Gagal memuat data anggota';
  console.error('Error:', err);
  members.value = [];
};

const cleanup = () => {
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }
};

// Filter Handler
const updateFilter = (role) => {
  selectedRole.value = role;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
  <div
    class="mx-auto min-h-screen px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-(--breakpoint-xl) lg:px-8 lg:py-20">
    <div class="mx-auto mt-10 mb-10 sm:text-center lg:mt-10 lg:max-w-xl">
      <p
        class="bg-teal-accent-400 mb-4 inline-block rounded-full px-3 py-px text-4xl font-semibold tracking-wider text-white uppercase">
        Temui Tim Hebat Kami
      </p>
      <p class="cursor-text text-base text-white md:text-lg">
        Kami adalah sekelompok individu penuh semangat yang berdedikasi untuk
        kemajuan dan inovasi dalam dunia Teknik Informatika. Bersama, kami
        mewujudkan visi untuk menciptakan solusi teknologi yang berdampak.
      </p>

      <!-- Tambahkan dropdown filter -->
      <div class="mt-6">
        <label for="role" class="mr-4 text-white">Filter by Role:</label>

        <select
          v-model="selectedRole"
          @change="updateFilter(selectedRole)"
          class="focus:ring-accent rounded-md bg-gray-800 px-4 py-2 text-white hover:bg-gray-700 focus:ring-2">
          <option value="all">All</option>
          <option v-for="role in roles" :key="role" :value="role">
            {{ role }}
          </option>
        </select>
      </div>
    </div>

    <Loading v-if="isLoading" :class="'text-white'" />

    <div
      v-else-if="filteredMembers.length === 0"
      class="text-center text-white">
      Tidak ada anggota yang ditemukan
    </div>

    <div
      v-else
      class="mx-5 grid grid-cols-1 gap-4 py-10 text-left md:grid-cols-2 lg:grid-cols-4 xl:mx-10">
      <div v-for="member in filteredMembers" class="bg-main-3 rounded-lg">
        <MemberCard :key="member.id" :member="member" />
      </div>
    </div>
  </div>
</template>
