<script setup>
import { ref } from 'vue'

const showModal = ref(false)

const MessageToWhatsapp = () => {
  const name = document.getElementById('namalengkap').value
  const institusi = document.getElementById('institusi').value
  const email = document.getElementById('email').value
  const pesan = document.getElementById('pesan-anda').value
  const kode = document.getElementById('kode').value

  if (!name || !institusi) {
    alert('Mohon isi nama dan institusi')
    return false
  }

  const text = `Halo Kak,\n\nNama saya: *${name}*\nSaya Dari: *${institusi}*\n\nPesan :\n${pesan}\n\nEmail: *${email}*\n*${kode}*`

  const phoneNumber = '+6285719066792'

  // Tampilkan modal
  showModal.value = true

  // Beri jeda sebelum membuka WhatsApp
  setTimeout(() => {
    const urlToWhatsapp = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`
    window.open(urlToWhatsapp, '_blank')
    // Tutup modal setelah WhatsApp dibuka
    setTimeout(() => {
      showModal.value = false
    }, 3000)
  }, 3000)

  return false
}
</script>

<template>
  <!-- Contact Us Section -->
  <section
    class="mx-auto w-full px-5 pb-9 pt-20 sm:px-6 lg:px-8 lg:pt-20"
    id="contact"
  >
    <div class="mx-auto max-w-2xl lg:max-w-7xl">
      <!-- Title -->
      <div class="mb-10 pt-6 text-center">
        <h1 class="text-3xl font-bold text-white dark:text-white sm:text-4xl">
          Kontak Kami
        </h1>
        <p class="mt-3 text-white dark:text-neutral-400">
          Kami sangat senang apabila kita saling berinteraksi.
        </p>
      </div>

      <div class="grid gap-6 lg:mt-20 lg:grid-cols-2 lg:gap-48">
        <!-- Contact Information Section (Left) -->
        <div class="divide-y divide-main-4 dark:divide-neutral-800">
          <!-- Instagram Block -->
          <div class="flex gap-x-7 py-6">
            <span class="text-accent">
              <Icon icon="simple-icons:instagram" width="48" height="48" />
            </span>

            <div>
              <h3 class="font-semibold text-white dark:text-neutral-200">
                Instagram
              </h3>
              <p class="mt-1 text-sm text-neutral-400 dark:text-neutral-500">
                Follow Instagram kami untuk tetap terhubung dan mendapatkan
                informasi terbaru.
              </p>
              <a
                class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-blue-600 hover:text-gray-800 focus:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="https://www.instagram.com/himti_mercubuana/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Selengkapnya
              </a>
            </div>
          </div>

          <!-- Linkedin Block -->
          <div class="flex gap-x-7 py-6">
            <span>
              <Icon icon="logos:linkedin-icon" width="48" height="48" />
            </span>

            <div>
              <h3 class="font-semibold text-white dark:text-neutral-200">
                Linkedin
              </h3>
              <p class="mt-1 text-sm text-neutral-400 dark:text-neutral-500">
                Ayo terkoneksi bersama kami di Linkedin
              </p>
              <a
                class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-blue-600 hover:text-gray-800 focus:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="https://www.linkedin.com/company/himti/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Selengkapnya
              </a>
            </div>
          </div>

          <!-- Email Block -->
          <div class="flex gap-x-7 py-6">
            <span>
              <Icon icon="logos:google-gmail" width="48" height="48" />
            </span>

            <div>
              <h3 class="font-semibold text-white dark:text-neutral-200">
                Email
              </h3>
              <p class="mt-1 text-sm text-neutral-400 dark:text-neutral-500">
                Jika Anda ingin mengirim email kepada kami, silakan hubungi kami
                di sini.
              </p>
              <p
                class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-blue-600 hover:text-gray-800 focus:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
              >
                himti.mercubuana@gmail.com
              </p>
            </div>
          </div>
        </div>

        <!-- Form Section (Right) -->
        <div
          class="flex flex-col rounded-2xl border border-main-4 bg-gray-900 p-4 dark:border-main-2 dark:bg-main-2 sm:p-6 lg:p-8"
        >
          <h2
            class="mb-8 text-center text-xl font-semibold text-white shadow-slate-50 dark:text-neutral-200"
          >
            Hubungi kami kapan saja melalui Whatsapp
          </h2>

          <form @submit.prevent="MessageToWhatsapp">
            <div class="grid gap-4">
              <div class="relative">
                <label for="namalengkap" class="sr-only">Nama Lengkap</label>
                <div class="flex items-center">
                  <i class="fas fa-user absolute left-3 text-gray-400"></i>
                  <input
                    type="text"
                    id="namalengkap"
                    class="block w-full rounded-lg border border-main-4 bg-gray-700 px-10 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Nama Lengkap"
                    required
                  />
                </div>
              </div>

              <div class="relative">
                <label for="institusi" class="sr-only"
                  >Institusi atau Organisasi</label
                >
                <div class="flex items-center">
                  <i class="fas fa-user absolute left-3 text-gray-400"></i>
                  <input
                    type="text"
                    id="institusi"
                    class="block w-full rounded-lg border border-main-4 bg-gray-700 px-10 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Institusi / Organisasi"
                    required
                  />
                </div>
              </div>

              <div class="relative">
                <label for="email" class="sr-only">Email</label>
                <div class="flex items-center">
                  <i class="fas fa-envelope absolute left-3 text-gray-400"></i>
                  <input
                    type="email"
                    id="email"
                    class="block w-full rounded-lg border border-main-4 bg-gray-700 px-10 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div class="relative">
                <label for="pesan-anda" class="sr-only">Pesan Anda</label>
                <div class="flex items-start">
                  <i
                    class="fas fa-comment-alt absolute left-3 mt-3 text-gray-400"
                  ></i>
                  <textarea
                    id="pesan-anda"
                    rows="4"
                    class="block w-full rounded-lg border border-main-4 bg-gray-700 px-10 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
            </div>
            <input
              type="hidden"
              id="kode"
              value="Saya menghubungi anda melalui Web Himti"
            />

            <div class="mt-4 grid">
              <button
                type="submit"
                class="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-green-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900"
              >
                <i class="fab fa-whatsapp text-2xl"></i>
                Send Whatsapp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Modal -->
  <div
    v-if="showModal"
    class="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0"
  >
    <!-- Backdrop dengan efek blur -->
    <div class="fixed inset-0 bg-black/50 backdrop-blur-sm"></div>

    <!-- Modal Content -->
    <div
      class="relative z-50 w-full max-w-md transform overflow-hidden rounded-2xl bg-main-1 p-6 text-center shadow-xl transition-all"
    >
      <!-- Icon Checkmark -->
      <div
        class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100"
      >
        <svg
          class="h-8 w-8 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
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
    </div>
  </div>

  <!-- Sisanya tetap sama seperti template sebelumnya -->
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
