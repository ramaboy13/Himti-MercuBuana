<script>
  import imagefkti1 from '../assets/img/FKTI/FKTI1.avif'
  import imagefkti2 from '../assets/img/FKTI/FKTI2.avif'
  import imagefkti3 from '../assets/img/FKTI/FKTI3.avif'
  import imagefkti4 from '../assets/img/FKTI/FKTI4.avif'
  import imagefkti5 from '../assets/img/FKTI/FKTI5.avif'

  // Team Pembicara
  import teamPembicara from '../assets/img/FKTI/Pembicara/1.webp'

  export default {
    name: 'FktiPages',
    data() {
      return {
        images: [imagefkti1, imagefkti3, imagefkti2, imagefkti4, imagefkti5],
        teamPembicara: [teamPembicara],
      }
    },
    methods: {
      getRandomRotation() {
        const rotations = [
          'rotate-3',
          '-rotate-3',
          'rotate-6',
          '-rotate-6',
          'rotate-12',
          '-rotate-12',
        ]
        return rotations[Math.floor(Math.random() * rotations.length)]
      },
    },
  }
</script>

<template>
  <div
    class="min-h-screen bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-cover bg-center">
    <!-- Hero Section -->
    <section class="pt-8 lg:pt-32">
      <div class="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <!-- CTA Bar -->
        <div
          class="border-main-4 mx-auto mb-4 flex w-60 items-center justify-between rounded-full border p-1">
          <span class="font-inter ml-3 text-xs font-medium text-white">
            Ayo Daftar Sekarang.
          </span>
          <a
            href="#register"
            class="bg-main-4 flex h-8 w-8 items-center justify-center rounded-full">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                stroke="white"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </a>
        </div>

        <!-- Title -->
        <h1
          class="font-manrope mx-auto mb-5 max-w-2xl bg-linear-to-r from-white to-purple-900 bg-clip-text text-center text-4xl leading-[50px] font-bold text-transparent">
          FKTI
          <span
            class="to-main-4 bg-linear-to-r from-purple-600 via-pink-500 bg-clip-text text-transparent">
            FORUM KEAKRABAN TEKNIK INFORMATIKA
          </span>
        </h1>
        <p
          class="mx-auto mb-9 max-w-5xl text-center text-base leading-7 font-normal text-gray-200">
          Forum Keakraban Teknik Informatika (FKTI) adalah sebuah acara yang
          dirancang untuk mempererat hubungan antar mahasiswa Teknik Informatika
          melalui berbagai kegiatan interaktif, edukatif, dan rekreatif. Acara
          ini bertujuan menciptakan lingkungan yang harmonis sekaligus
          mengembangkan kemampuan soft skills dan kerja sama tim.
        </p>

        <!-- Image Section -->
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          <div
            v-for="(image, index) in images"
            :key="index"
            :class="getRandomRotation()"
            class="relative transform transition duration-700 ease-in-out hover:scale-105">
            <img
              :src="image"
              alt="FKTI Image"
              class="border-main-4 mx-auto w-full rounded-3xl border shadow-lg hover:shadow-[0_0_15px_rgba(156,39,176,0.8)]" />
          </div>
        </div>
      </div>
    </section>

    <!-- Section Deskripsi -->
    <section
      class="relative container mx-auto mt-20 flex h-full max-w-6xl flex-col justify-between px-10 xl:px-0">
      <h2
        class="to-main-4 mb-1 bg-linear-to-r from-purple-600 via-pink-500 bg-clip-text text-center text-3xl leading-tight font-extrabold text-transparent">
        README
      </h2>
      <p class="mb-12 text-center text-lg text-gray-100">
        Harap Baca Sebelum Melakukan Pendaftaran
      </p>
      <!-- Card Atas -->
      <div class="w-full">
        <div class="mb-10 flex w-full flex-col sm:flex-row">
          <div
            class="mb-10 w-full transition-transform duration-300 hover:scale-105 hover:-rotate-3 sm:mb-0 sm:w-1/2">
            <div class="relative mr-0 ml-0 h-full sm:mr-10">
              <span
                class="bg-main-4 absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded-lg"></span>
              <div
                class="border-main-4 relative h-full rounded-lg border-2 bg-gray-800 p-5">
                <div class="-mt-1 flex items-center">
                  <h3 class="my-2 ml-3 text-lg font-bold text-gray-100">
                    DAPP Development
                  </h3>
                </div>
                <p class="text-main-4 mt-3 mb-1 text-xs font-medium uppercase">
                  ------------
                </p>
                <p class="mb-2 text-gray-100">
                  A decentralized application (dapp) is an application built on
                  a decentralized network that combines a smart contract and a
                  frontend user interface.
                </p>
              </div>
            </div>
          </div>
          <div
            class="w-full transition-transform duration-300 hover:scale-105 hover:rotate-3 sm:w-1/2">
            <div class="relative ml-0 h-full md:mr-10">
              <span
                class="bg-main-4 absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded-lg"></span>
              <div
                class="relative h-full rounded-lg border-2 border-purple-500 bg-gray-800 p-5">
                <div class="-mt-1 flex items-center">
                  <h3 class="my-2 ml-3 text-lg font-bold text-gray-100">
                    Web 3.0 Development
                  </h3>
                </div>
                <p
                  class="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">
                  ------------
                </p>
                <p class="mb-2 text-gray-100">
                  Web 3.0 is the third generation of Internet services that will
                  focus on understanding and analyzing data to provide a
                  semantic web.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Card Bawah -->
        <div class="mb-5 flex w-full flex-col sm:flex-row">
          <div
            class="mb-10 w-full transition-transform duration-300 hover:scale-105 hover:-rotate-12 sm:mb-0 sm:w-1/2">
            <div class="relative mr-0 ml-0 h-full sm:mr-10">
              <span
                class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded-lg bg-blue-400"></span>
              <div
                class="relative h-full rounded-lg border-2 border-blue-400 bg-gray-800 p-5">
                <div class="-mt-1 flex items-center">
                  <h3 class="my-2 ml-3 text-lg font-bold text-gray-100">
                    Project Audit
                  </h3>
                </div>
                <p
                  class="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
                  ------------
                </p>
                <p class="mb-2 text-gray-100">
                  A Project Audit is a formal review of a project, which is
                  intended to assess the extent up to which project management
                  standards are being upheld.
                </p>
              </div>
            </div>
          </div>
          <div
            class="mb-10 w-full transition-transform duration-300 hover:scale-105 hover:rotate-12 sm:mb-0 sm:w-1/2">
            <div class="relative mr-0 ml-0 h-full sm:mr-10">
              <span
                class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded-lg bg-yellow-400"></span>
              <div
                class="relative h-full rounded-lg border-2 border-yellow-400 bg-gray-800 p-5">
                <div class="-mt-1 flex items-center">
                  <h3 class="my-2 ml-3 text-lg font-bold text-gray-100">
                    Hacking / RE
                  </h3>
                </div>
                <p
                  class="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">
                  ------------
                </p>
                <p class="mb-2 text-gray-100">
                  A security hacker is someone who explores methods for
                  breaching defenses and exploiting weaknesses in a computer
                  system or network.
                </p>
              </div>
            </div>
          </div>
          <div
            class="w-full transition-transform duration-300 hover:scale-105 hover:-rotate-6 sm:w-1/2">
            <div class="relative ml-0 h-full md:mr-10">
              <span
                class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded-lg bg-green-500"></span>
              <div
                class="relative h-full rounded-lg border-2 border-green-500 bg-gray-800 p-5">
                <div class="-mt-1 flex items-center">
                  <h3 class="my-2 ml-3 text-lg font-bold text-gray-100">
                    Bot/Script Development
                  </h3>
                </div>
                <p
                  class="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
                  ------------
                </p>
                <p class="mb-2 text-gray-100">
                  Bot development frameworks were created as advanced software
                  tools that eliminate a large amount of manual work and
                  accelerate the development process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pemateri -->
    <section id="our-team" class="py-32">
      <div class="container mx-auto max-w-7xl px-7 md:px-4">
        <h2
          class="to-main-4 mb-8 bg-linear-to-r from-purple-600 via-pink-500 bg-clip-text text-center text-3xl font-bold text-transparent">
          DI ISI OLEH PEMATERI SPESIAL DOSEN MERCU BUANA!
        </h2>

        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <!-- Team Member -->
          <div
            class="hover:border-main-4 relative my-6 rounded-lg bg-gray-800 p-6 text-center shadow-md transition-all duration-500 hover:border hover:shadow-[0px_0px_20px_5px_rgba(255,255,255,0.4)]"
            data-aos="fade-up"
            data-aos-delay="100">
            <img
              :src="teamPembicara"
              alt="Team Member 1"
              class="mb-4 w-full rounded-full shadow-inner" />
            <h3 class="mb-2 text-xl font-semibold text-white">
              Dr. Rahmat Hidayat
            </h3>
            <p class="text-gray-300">Role: Kepala Program Studi</p>
          </div>

          <div
            class="hover:border-main-4 relative my-6 rounded-lg bg-gray-800 p-6 text-center shadow-md transition-all duration-500 hover:border hover:shadow-[0px_0px_20px_5px_rgba(255,255,255,0.4)]"
            data-aos="fade-up"
            data-aos-delay="200">
            <img
              :src="teamPembicara"
              alt="Team Member 2"
              class="mb-4 w-full rounded-full shadow-inner" />
            <h3 class="mb-2 text-xl font-semibold text-white">
              Prof. Irwan Nugraha
            </h3>
            <p class="text-gray-300">Role: Dosen Senior</p>
          </div>

          <div
            class="hover:border-main-4 my-6 rounded-lg bg-gray-800 p-6 text-center shadow-md transition-all duration-500 hover:border hover:shadow-[0px_0px_20px_5px_rgba(255,255,255,0.4)]"
            data-aos="fade-up"
            data-aos-delay="300">
            <img
              :src="teamPembicara"
              alt="Team Member 3"
              class="mb-4 w-full rounded-full shadow-inner" />
            <h3 class="mb-2 text-xl font-semibold text-white">
              Dr. Siti Aminah
            </h3>
            <p class="text-gray-300">Role: Pakar Sistem Informasi</p>
          </div>

          <div
            class="hover:border-main-4 my-6 rounded-lg bg-gray-800 p-6 text-center shadow-md transition-all duration-500 hover:border hover:shadow-[0px_0px_20px_5px_rgba(255,255,255,0.4)]"
            data-aos="fade-up"
            data-aos-delay="400">
            <img
              :src="teamPembicara"
              alt="Team Member 4"
              class="mb-4 w-full rounded-full shadow-inner" />
            <h3 class="mb-2 text-xl font-semibold text-white">
              Dr. Budi Santoso
            </h3>
            <p class="text-gray-300">Role: Ahli Data Science</p>
          </div>

          <div
            class="hover:border-main-4 my-6 rounded-lg bg-gray-800 p-6 text-center shadow-md transition-all duration-500 hover:border hover:shadow-[0px_0px_20px_5px_rgba(255,255,255,0.4)]"
            data-aos="fade-up"
            data-aos-delay="500">
            <img
              :src="teamPembicara"
              alt="Team Member 5"
              class="mb-4 w-full rounded-full shadow-inner" />
            <h3 class="mb-2 text-xl font-semibold text-white">
              Dr. Amelia Wijaya
            </h3>
            <p class="text-gray-300">Role: Spesialis Kecerdasan Buatan</p>
          </div>

          <div
            class="hover:border-main-4 my-6 rounded-lg bg-gray-800 p-6 text-center shadow-md transition-all duration-500 hover:border hover:shadow-[0px_0px_20px_5px_rgba(255,255,255,0.4)]"
            data-aos="fade-up"
            data-aos-delay="600">
            <img
              :src="teamPembicara"
              alt="Team Member 6"
              class="mb-4 w-full rounded-full shadow-inner" />
            <h3 class="mb-2 text-xl font-semibold text-white">
              Dr. Andi Pratama
            </h3>
            <p class="text-gray-300">Role: Dosen Keamanan Siber</p>
          </div>

          <div
            class="hover:border-main-4 my-6 rounded-lg bg-gray-800 p-6 text-center shadow-md transition-all duration-500 hover:border hover:shadow-[0px_0px_20px_5px_rgba(255,255,255,0.4)]"
            data-aos="fade-up"
            data-aos-delay="700">
            <img
              :src="teamPembicara"
              alt="Team Member 7"
              class="mb-4 w-full rounded-full shadow-inner" />
            <h3 class="mb-2 text-xl font-semibold text-white">
              Prof. Arif Wijaya
            </h3>
            <p class="text-gray-300">Role: Pakar Jaringan Komputer</p>
          </div>

          <div
            class="hover:border-main-4 my-6 rounded-lg bg-gray-800 p-6 text-center shadow-md transition-all duration-500 hover:border hover:shadow-[0px_0px_20px_5px_rgba(255,255,255,0.4)]"
            data-aos="fade-up"
            data-aos-delay="800">
            <img
              :src="teamPembicara"
              alt="Team Member 8"
              class="mb-4 w-full rounded-full shadow-inner" />
            <h3 class="mb-2 text-xl font-semibold text-white">
              Dr. Lisa Sutrisno
            </h3>
            <p class="text-gray-300">Role: Spesialis UI/UX</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Registrasi Form -->
    <section
      id="register"
      class="body-font relative mx-auto max-w-7xl pb-24 text-gray-400">
      <h1
        class="to-main-4 bg-linear-to-r from-purple-600 via-pink-500 bg-clip-text text-center text-3xl font-bold text-transparent">
        LOKASI ACARA FKTI 2025
      </h1>
      <div
        class="container mx-auto flex flex-wrap gap-6 px-5 pt-8 sm:flex-nowrap">
        <!-- Map -->
        <div
          class="relative flex h-[400px] w-full flex-col items-end justify-start overflow-hidden rounded-lg bg-gray-300 sm:mr-10 md:h-[735px] md:w-1/2 lg:w-2/3">
          <iframe
            class="absolute inset-0 h-full w-full"
            frameborder="0"
            title="map"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Universitas%20Mercu%20Buana%20Jakarta%20Barat&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style="filter: grayscale(1) contrast(1.2) opacity(0.4)"></iframe>
          <div
            class="border-main-4 absolute bottom-6 left-1/2 hidden -translate-x-1/2 rounded-xl border-4 bg-gray-800 py-4 shadow-md xl:block">
            <div class="flex h-20 w-[600px]">
              <div class="flex-1 border-r border-gray-700 px-6">
                <h2
                  class="title-font text-xs font-semibold tracking-widest text-gray-200">
                  ADDRESS
                </h2>
                <p class="mt-1 text-sm text-gray-300">
                  Jl. Meruya Selatan No.1, RT.4/RW.1, Joglo, Kec. Kembangan,
                  Kota Jakarta Barat
                </p>
              </div>
              <div class="flex-1 px-6">
                <div class="mb-2">
                  <h2
                    class="title-font text-xs font-semibold tracking-widest text-gray-200">
                    Catatan
                  </h2>
                  <p class="text-sm leading-relaxed text-red-500">
                    Perhatikan Baik Baik Lokasi Acara
                  </p>
                </div>
                <div>
                  <h2
                    class="title-font text-xs font-semibold tracking-widest text-gray-200">
                    PHONE
                  </h2>
                  <p class="text-sm leading-relaxed text-gray-300">
                    (021) 12345678
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Form -->
        <div
          class="border-main-4 mt-8 flex w-full flex-col rounded-lg border-4 bg-gray-800 p-6 md:mt-0 md:ml-auto md:w-1/2 md:py-8 lg:w-1/3">
          <h2 class="title-font mb-1 text-lg font-bold text-gray-200">
            Alur Pendaftaran
          </h2>
          <p class="mb-5 leading-relaxed text-gray-200">
            1. Isi formulir pendaftaran yang tersedia di Google Form.
            <br />
            <br />
            2. Setelah mengisi data diri, Anda akan menerima konfirmasi.
            <br />
            <br />
            3. Kembali Ke Halaman ini dan Pilih metode pembayaran yang Anda
            inginkan.
            <br />
            <br />
            4. Anda bisa memilih untuk melunasi biaya pendaftaran atau memilih
            cicilan.
            <br />
            <br />
            5. Jika memilih cicilan, tentukan jumlah angsuran yang sesuai.
            <br />
            <br />
            6. Lakukan pembayaran sesuai dengan opsi yang dipilih.
            <br />
            <br />
            7. Setelah pembayaran pertama atau pelunasan selesai, Anda akan
            mendapatkan Notifikasi.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdDtUm4g9pllRLBuKs3kHBc0G8tOXior5hT2csruHwU40IHrg/viewform?usp=header"
            class="bg-main-4 hover:bg-accent rounded-sm border-0 px-6 py-2 text-center text-lg text-white focus:outline-hidden">
            Daftar Sekarang
          </a>
        </div>
      </div>
      <!-- Payment Methods Card -->
      <div class="relative mx-auto max-w-7xl px-4">
        <div
          class="mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none">
          <div class="flex-1 px-4 py-8 lg:px-2">
            <h3
              class="to-main-4 bg-linear-to-r from-purple-600 via-pink-500 bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl">
              Peraturan dan Fasilitas
            </h3>
            <p class="mt-6 text-base text-gray-50 sm:text-lg">
              Peserta wajib membawa pakaian yang sesuai, perlengkapan pribadi,
              dan alat tulis. Dilarang membawa rokok, minuman keras, senjata
              tajam, serta barang berharga berlebihan. Tidak diperbolehkan
              meninggalkan lokasi tanpa izin atau membuat keributan.
            </p>
            <div class="mt-8">
              <div class="flex items-center">
                <div class="flex-1 border-t-2 border-gray-200"></div>
              </div>
              <ul
                role="list"
                class="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:space-y-0 lg:gap-x-8 lg:gap-y-5">
                <li class="flex items-start lg:col-span-1">
                  <div class="shrink-0">
                    <svg
                      class="text-main-4 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-white">
                    Full Catering (3x Makan + 2x Snack)
                  </p>
                </li>
                <li class="flex items-start lg:col-span-1">
                  <div class="shrink-0">
                    <svg
                      class="text-main-4 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-white">
                    Transportasi PP (Bus AC Executive)
                  </p>
                </li>
                <li class="flex items-start lg:col-span-1">
                  <div class="shrink-0">
                    <svg
                      class="text-main-4 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-white">
                    Merchendise Eksklusif (Jaket + ID Card)
                  </p>
                </li>
                <li class="flex items-start lg:col-span-1">
                  <div class="shrink-0">
                    <svg
                      class="text-main-4 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-white">
                    Games & Team Building Activities
                  </p>
                </li>
                <li class="flex items-start lg:col-span-1">
                  <div class="shrink-0">
                    <svg
                      class="text-main-4 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-white">
                    Akomodasi Penginapan 2 Hari 1 Malam
                  </p>
                </li>
                <li class="flex items-start lg:col-span-1">
                  <div class="shrink-0">
                    <svg
                      class="text-main-4 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-white">Sertifikat Kegiatan</p>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="px-6 py-8 text-center lg:flex lg:shrink-0 lg:flex-col lg:justify-center lg:p-12">
            <p class="text-lg leading-6 font-medium text-white">
              Harga Tiket Per Orang
            </p>
            <div
              class="mt-4 flex items-center justify-center text-5xl font-extrabold text-white">
              <span>300K</span>
              <span class="ml-3 text-xl font-medium text-gray-50">Rupiah</span>
            </div>
            <div class="mt-6">
              <div class="rounded-md shadow-sm">
                <div class="group relative inline-flex">
                  <div
                    class="transitiona-all animate-tilt absolute -inset-px rounded-xl bg-linear-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="#"
                    title="Get quote now"
                    class="font-pj relative inline-flex items-center justify-center rounded-xl bg-gray-900 px-8 py-4 text-lg font-bold text-white transition-all duration-200 focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:outline-hidden"
                    role="button">
                    Bayar Sekarang
                  </a>
                </div>
              </div>
              <p class="mt-3 text-sm text-gray-300">
                *Pembayaran bisa dicicil maks 5x
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
