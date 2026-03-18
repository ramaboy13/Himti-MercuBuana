<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js'
import { ref, computed } from 'vue'

const props = defineProps({
  members: {
    type: Array,
    required: true,
    default: () => []
  }
})

const availableDivisions = [
  { 
    id: 'BPH', 
    label: 'BPH', 
    fullName: 'BPH (Badan Pengurus Harian)',
    role: 'BPH', 
    about: 'Badan Pengurus Harian (BPH) bertanggung jawab dalam mengoordinasikan, mengarahkan, serta memastikan seluruh kegiatan organisasi berjalan secara efektif dan terstruktur. Divisi ini juga berperan dalam pengambilan keputusan strategis serta menjaga sinergi antar divisi untuk mencapai tujuan organisasi.',
    image: '../'
  },
  { 
    id: 'RISTEK', 
    label: 'Ristek', 
    fullName: 'Riset dan Teknologi (RISTEK)',
    role: 'Divisi RISTEK', 
    about: 'Divisi Riset dan Teknologi (Ristek) berfokus pada pengembangan pengetahuan, inovasi, dan keterampilan di bidang teknologi. Melalui berbagai program, proyek, dan riset, divisi ini mendorong anggota untuk mengembangkan solusi teknologi yang relevan serta meningkatkan kompetensi teknis di dunia digital.',
    image: '../'
  },
  { 
    id: 'HUMAS', 
    label: 'Humas', 
    fullName: 'Hubungan Masyarakat (HUMAS)',
    role: 'Divisi Humas', 
    about: 'Divisi Hubungan Masyarakat (Humas) berperan dalam membangun serta menjaga komunikasi antara organisasi dengan pihak eksternal. Divisi ini juga bertanggung jawab dalam menjalin kerja sama, memperluas relasi, serta menyampaikan informasi organisasi kepada publik secara profesional.',
    image: '../'
  },
  { 
    id: 'DESMED', 
    label: 'Media Creative', 
    fullName: 'Media Creative (Desain dan Media)',
    role: 'Divisi DESMED', 
    about: 'Divisi Media Creative bertanggung jawab dalam mengelola identitas visual dan konten kreatif organisasi. Melalui desain, dokumentasi, dan produksi media digital, divisi ini memastikan setiap kegiatan organisasi dapat dikomunikasikan secara menarik, konsisten, dan informatif kepada audiens.',
    image: '../'
  },
  { 
    id: 'PSDM', 
    label: 'PSDM', 
    fullName: 'PSDM (Pengembangan Sumber Daya Mahasiswa)',
    role: 'Divisi PSDM', 
    about: 'Divisi Pengembangan Sumber Daya Manusia (PSDM) berfokus pada pengembangan potensi, karakter, dan kapasitas anggota organisasi. Melalui berbagai program pelatihan, kaderisasi, dan evaluasi, divisi ini bertujuan untuk menciptakan anggota yang kompeten, kolaboratif, dan siap berkontribusi secara optimal.',
    image: '../'
  },
]

const selectedDivision = ref('BPH')
const activeTab = ref('team') // 'about' or 'team'

const currentDivisionInfo = computed(() => {
  return availableDivisions.find(d => d.id === selectedDivision.value) || availableDivisions[0]
})

const currentDivisionImage = computed(() => {
  return currentDivisionInfo.value.image
})

const currentDivisionAbout = computed(() => {
  return currentDivisionInfo.value.about
})

const currentDivisionFullName = computed(() => {
  return currentDivisionInfo.value.fullName || currentDivisionInfo.value.label
})

const currentMembers = computed(() => {
  const role = currentDivisionInfo.value.role
  const filtered = props.members.filter(m => m.role === role)
  // Sort by Ketdiv/Ketua first, then name
  filtered.sort((a, b) => {
    const aIsKetua = a.badge && a.badge.includes('Ketua')
    const bIsKetua = b.badge && b.badge.includes('Ketua')
    if (aIsKetua && !bIsKetua) return -1
    if (!aIsKetua && bIsKetua) return 1
    return a.name.localeCompare(b.name)
  })
  return filtered
})
</script>

<template>
  <section id="divisi" class="bg-main-1 pt-24 pb-[150px] text-white font-sans" data-aos="fade-up">
    <div class="container mx-auto max-w-7xl px-6">
      <!-- Header -->
      <h2 class="text-3xl lg:text-4xl font-bold">Struktur HIMTI Universitas Mercu Buana</h2>
      <div class="mt-3 h-1 w-48 bg-purple-600"></div>

      <!-- Divisions Menu -->
      <div class="mt-12 flex flex-wrap justify-center gap-6 lg:gap-10 text-lg font-semibold text-gray-400">
        <button 
          v-for="divInfo in availableDivisions" 
          :key="divInfo.id"
          @click="selectedDivision = divInfo.id"
          class="transition tracking-wide"
          :class="{ 'text-white pb-1': selectedDivision === divInfo.id, 'hover:text-gray-200': selectedDivision !== divInfo.id }"
        >
          {{ divInfo.label }}
        </button>
      </div>

      <!-- Content Area -->
      <div class="mt-12 flex flex-col lg:flex-row gap-8 lg:gap-12">
        <!-- Image Area -->
        <div class="w-full lg:w-[45%] shrink-0">
          <img 
            :src="currentDivisionImage" 
            alt="Division Banner" 
            class="w-full h-64 lg:h-[450px] object-cover rounded-3xl shadow-lg border border-purple-900/30"
          />
        </div>

        <!-- Right Area: Tabs + Members -->
        <div class="w-full lg:w-[55%] flex flex-col">
          <!-- Inner Tabs -->
          <div class="flex gap-8 relative pb-2 mb-6 text-lg lg:text-xl">
            <button 
              @click="activeTab = 'about'"
              class="transition relative z-10"
              :class="{ 'text-white font-bold': activeTab === 'about', 'text-gray-400 font-medium hover:text-gray-300': activeTab !== 'about' }"
            >
              Tentang Kami
            </button>
            <button 
              @click="activeTab = 'team'"
              class="transition relative z-10"
              :class="{ 'text-white font-bold': activeTab === 'team', 'text-gray-400 font-medium hover:text-gray-300': activeTab !== 'team' }"
            >
              Tim Kami
            </button>
          </div>

          <!-- Tab Content: Team -->
          <div v-if="activeTab === 'team'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto max-h-[450px] pr-2 custom-scrollbar">
            <!-- Team Member Card -->
            <div 
              v-for="member in currentMembers" 
              :key="member.id"
              class="bg-[#241b35] rounded-2xl p-5 flex flex-col justify-between hover:bg-[#34274caa] transition duration-300 shadow-md"
            >
              <h4 class="font-bold text-[15px] lg:text-[16px] text-white leading-tight mb-6">{{ member.name }}</h4>
              
              <div class="flex justify-between items-end mt-auto">
                <div class="flex flex-col">
                  <p class="text-xs text-gray-400 leading-snug">{{ member.badge }}</p>
                </div>
                <a :href="member.linkedin" target="_blank">
                  <Icon icon="mdi:linkedin" class="text-[2rem] text-gray-400 hover:text-white transition cursor-pointer"/>
                </a>
              </div>
            </div>
          </div>
          
          <!-- Tab Content: About -->
          <div v-if="activeTab === 'about'" class="text-gray-300 text-sm md:text-[17px] leading-relaxed h-full pr-4">
             <h3 class="text-xl lg:text-2xl font-bold text-white mb-5">{{ currentDivisionFullName }}</h3>
             <p class="text-gray-400 font-medium text-base md:text-2xl text-justify">{{ currentDivisionAbout }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom Scrollbar for Team Members List */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #4c366e;
  border-radius: 10px;
}
</style>