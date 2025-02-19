<script setup>
  import { ref, computed } from 'vue'
  import socialData from '../assets/data/socmed.json'
  import ModalComponent from './ModalComponent.vue'

  // social media links
  const socialLinks = socialData.data

  // Nama platform yang ingin ditampilkan
  const desiredPlatforms = ['Instagram', 'LinkedIn', 'Email']

  // Filter data untuk mendapatkan platform yang diinginkan
  const filteredPlatforms = computed(() =>
    socialLinks.filter((social) => desiredPlatforms.includes(social.name)),
  )

  const iconClass = (social) => {
    return {
      'text-4xl': social.name === 'Email',
      'text-5xl': social.name !== 'Email',
      '-translate-x-[2px] scale-125': social.name === 'LinkedIn',
    }
  }

  // Form Handler
  // State untuk modal dan form input
  const isModalVisible = ref(false)
  const name = ref('')
  const institusi = ref('')
  const email = ref('')
  const message = ref('')
  const kode = ref('Saya menghubungi anda melalui Web Himti')

  // Computed property untuk URL WhatsApp
  const whatsappUrl = computed(() => {
    const phoneNumber = '+6285719066792'
    const text = `Halo Kak,\n\nNama saya: *${name.value}*\nSaya Dari: *${institusi.value}*\n\nPesan :\n${message.value}\n\nEmail: *${email.value}*\n*${kode.value}*`
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`
  })

  // Method untuk mengirim pesan ke WhatsApp
  const sendMessageToWhatsapp = async () => {
    // Validasi input
    if (
      !name.value ||
      !institusi.value ||
      !email.value ||
      !message.value ||
      !kode.value
    ) {
      alert('Mohon lengkapi semua field yang diperlukan')
      return
    }

    // Tampilkan modal
    isModalVisible.value = true

    // Tunggu 3 detik sebelum membuka WhatsApp
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Buka WhatsApp
    // window.open(whatsappUrl.value, '_blank')

    // Tunggu 3 detik lagi sebelum menutup modal
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Tutup modal
    isModalVisible.value = false
  }

  const closeModal = () => {
    isModalVisible.value = false
  }
</script>

<template>
  <!-- Contact Us Section -->
  <section
    class="mx-auto w-full px-5 pb-9 pt-20 sm:px-6 lg:px-8 lg:pt-20"
    id="contact">
    <div class="mx-auto max-w-2xl lg:max-w-7xl">
      <!-- Title -->
      <div class="mb-10 pt-6 text-center">
        <h1 class="text-3xl font-bold text-white dark:text-white sm:text-4xl">
          Kontak Kami
        </h1>
        <p class="mt-3 text-white dark:text-neutral-400">
          Kami selalu terbuka untuk berinteraksi! Jangan ragu untuk menghubungi
          kami.
        </p>
      </div>

      <div class="grid gap-6 lg:mt-20 lg:grid-cols-2 lg:gap-48">
        <!-- Contact Information Section (Left) -->
        <div class="divide-y divide-slate-400 dark:divide-neutral-800">
          <div
            v-for="(social, key) in filteredPlatforms"
            :key="key"
            class="flex gap-x-7 py-6">
            <!-- Icon Social Media -->
            <a
              :href="social.url"
              rel="noopener"
              class="h-fit transition-all duration-200 hover:scale-110"
              :class="iconClass(social)">
              <Icon
                :icon="
                  social.name === 'Email' ? 'logos:google-gmail' : social.icon
                "
                :color="social.iconColor" />
            </a>
            <div>
              <h3 class="text-xl font-semibold text-white">
                {{ social.name }}
              </h3>
              <p class="mt-1 text-sm text-white">
                {{ social.description }}
              </p>
              <a
                :href="social.url"
                rel="noopener"
                target="_blank"
                class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-accent transition-all duration-300 hover:scale-105 hover:text-opacity-80 focus:text-gray-800 focus:outline-none">
                Selengkapnya
              </a>
            </div>
          </div>
        </div>
        <!-- End Contact Information Section -->

        <!-- Form Section (Right) -->
        <div
          class="flex flex-col rounded-2xl border border-gray-400 bg-gray-900 p-4 text-white dark:border-main-2 dark:bg-main-2 sm:p-6 lg:p-8">
          <h2
            class="mb-8 text-center text-xl font-semibold shadow-slate-50 dark:text-neutral-200">
            Hubungi kami kapan saja melalui Whatsapp
          </h2>

          <form @submit.prevent="sendMessageToWhatsapp">
            <div class="grid gap-4">
              <!-- Grid -->
              <div class="w-full">
                <label for="name" class="sr-only">Name</label>
                <div class="flex items-center">
                  <label class="absolute p-3 text-xl text-gray-400" for="name">
                    <Icon icon="ic:baseline-person" />
                  </label>
                  <input
                    v-model="name"
                    type="text"
                    name="name"
                    id="name"
                    class="block w-full rounded-lg border border-gray-400 bg-gray-700 px-10 py-3 text-sm transition-colors invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500"
                    placeholder="Name"
                    required />
                </div>
              </div>
              <!-- End Grid -->

              <div class="relative">
                <label for="institusi" class="sr-only">organisation</label>
                <div class="flex items-center">
                  <label
                    class="absolute p-3 text-xl text-gray-400"
                    for="institusi">
                    <Icon icon="gg:organisation" color="" />
                  </label>
                  <input
                    v-model="institusi"
                    type="text"
                    name="institusi"
                    id="institusi"
                    class="block w-full rounded-lg border border-gray-400 bg-gray-700 px-10 py-3 text-sm transition-colors invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500"
                    placeholder="Organisation"
                    required />
                </div>
              </div>

              <div class="relative">
                <label for="email" class="sr-only">Email</label>
                <div class="flex items-center">
                  <label class="absolute p-3 text-xl text-gray-400" for="email">
                    <Icon icon="ic:email" color="" />
                  </label>
                  <input
                    v-model="email"
                    type="email"
                    name="email"
                    id="email"
                    autocomplete="email"
                    class="block w-full rounded-lg border border-gray-400 bg-gray-700 px-10 py-3 text-sm transition-colors invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500"
                    placeholder="Email"
                    required />
                </div>
              </div>

              <div class="relative">
                <label for="message" class="sr-only">Message</label>
                <div class="flex items-start">
                  <label
                    class="absolute p-3 text-xl text-gray-400"
                    for="message">
                    <Icon icon="ic:round-mode-comment" />
                  </label>
                  <textarea
                    v-model="message"
                    name="message"
                    id="message"
                    rows="4"
                    class="block w-full rounded-lg border border-gray-400 bg-gray-700 px-10 py-3 text-sm transition-colors invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500"
                    placeholder="Message"
                    required></textarea>
                </div>
              </div>
            </div>

            <!-- End Grid -->
            <div class="mt-4 grid">
              <button
                type="submit"
                class="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-green-500 px-4 py-3 text-sm font-semibold text-slate-50 transition-transform hover:bg-green-600 focus:scale-95 dark:focus:ring-offset-neutral-900">
                <!-- <i class="fab fa-whatsapp text-2xl"></i> -->
                <i class="text-2xl">
                  <Icon icon="simple-icons:whatsapp" color="#f8fafc" />
                </i>
                Send Whatsapp
              </button>
            </div>
          </form>
        </div>
        <!-- End Form Section -->
      </div>
    </div>
    <!-- Modal Start -->
    <ModalComponent :isVisible="isModalVisible" @close="closeModal">
      <!-- Icon Checkmark -->
      <div
        class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
        <Icon
          icon="material-symbols:check-rounded"
          class="text-4xl text-green-500" />
      </div>

      <!-- Title -->
      <h3 class="mb-2 text-2xl font-bold text-gray-300">Terima Kasih!</h3>

      <!-- Message -->
      <div class="mb-6">
        <p class="text-gray-300">
          Pesan Anda akan diteruskan ke WhatsApp kami.
        </p>
        <p class="mt-2 text-sm text-red-500">
          Mohon untuk tidak menghubungi nomor ini jika tidak ada kepentingan
          yang jelas.
        </p>
      </div>

      <!-- Note -->
      <div class="rounded-lg bg-blue-50 p-4">
        <p class="text-sm text-blue-800">
          Anda akan segera dialihkan ke WhatsApp...
        </p>
      </div>
    </ModalComponent>
    <!-- Modal End -->
  </section>
  <!-- End Contact Us Section -->
</template>
