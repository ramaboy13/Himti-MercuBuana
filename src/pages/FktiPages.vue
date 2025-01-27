<script>
import imagefkti1 from '../assets/img/FKTI/FKTI1.avif'
import imagefkti2 from '../assets/img/FKTI/FKTI2.avif'
import imagefkti3 from '../assets/img/FKTI/FKTI3.avif'
import imagefkti4 from '../assets/img/FKTI/FKTI4.avif'
import imagefkti5 from '../assets/img/FKTI/FKTI5.avif'

export default {
  name: 'FktiPages',
  data() {
    return {
      images: [imagefkti1, imagefkti3, imagefkti2, imagefkti4, imagefkti5],
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
    class="min-h-screen bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-cover bg-center"
  >
    <!-- Hero Section -->
    <section class="pt-8 lg:pt-32">
      <div class="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <!-- CTA Bar -->
        <div
          class="mx-auto mb-4 flex w-60 items-center justify-between rounded-full border border-main-4 p-1"
        >
          <span class="font-inter ml-3 text-xs font-medium text-white">
            Ayo Daftar Sekarang.
          </span>
          <a
            href="javascript:;"
            class="flex h-8 w-8 items-center justify-center rounded-full bg-main-4"
          >
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                stroke="white"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>

        <!-- Title -->
        <h1
          class="font-manrope mx-auto mb-5 max-w-2xl bg-gradient-to-r from-white to-purple-900 bg-clip-text text-center text-4xl font-bold leading-[50px] text-transparent"
        >
          FKTI
          <span
            class="bg-gradient-to-r from-purple-600 via-pink-500 to-main-4 bg-clip-text text-transparent"
            >FORUM KEAKRABAN TEKNIK INFORMATIKA</span
          >
        </h1>
        <p
          class="mx-auto mb-9 max-w-5xl text-center text-base font-normal leading-7 text-gray-200"
        >
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
            class="relative transform transition duration-700 ease-in-out hover:scale-105"
          >
            <img
              :src="image"
              alt="FKTI Image"
              class="mx-auto w-full rounded-3xl border border-main-4 shadow-lg hover:shadow-[0_0_15px_rgba(156,39,176,0.8)]"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Section Deskripsi -->
    <div
      class="container relative mx-auto mt-20 flex h-full max-w-6xl flex-col justify-between px-10 xl:px-0"
    >
      <h2
        class="mb-1 bg-gradient-to-r from-purple-600 via-pink-500 to-main-4 bg-clip-text text-center text-3xl font-extrabold leading-tight text-transparent"
      >
        README
      </h2>
      <p class="mb-12 text-center text-lg text-gray-100">
        Harap Baca Sebelum Melakukan Pendaftaran
      </p>
      <div class="w-full">
        <div class="mb-10 flex w-full flex-col sm:flex-row">
          <div
            class="mb-10 w-full transition-transform duration-300 hover:-rotate-3 hover:scale-105 sm:mb-0 sm:w-1/2"
          >
            <div class="relative ml-0 mr-0 h-full sm:mr-10">
              <span
                class="absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded-lg bg-main-4"
              ></span>
              <div
                class="relative h-full rounded-lg border-2 border-main-4 bg-gray-800 p-5"
              >
                <div class="-mt-1 flex items-center">
                  <h3 class="my-2 ml-3 text-lg font-bold text-gray-100">
                    DAPP Development
                  </h3>
                </div>
                <p class="mb-1 mt-3 text-xs font-medium uppercase text-main-4">
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
            class="w-full transition-transform duration-300 hover:rotate-3 hover:scale-105 sm:w-1/2"
          >
            <div class="relative ml-0 h-full md:mr-10">
              <span
                class="absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded-lg bg-main-4"
              ></span>
              <div
                class="relative h-full rounded-lg border-2 border-purple-500 bg-gray-800 p-5"
              >
                <div class="-mt-1 flex items-center">
                  <h3 class="my-2 ml-3 text-lg font-bold text-gray-100">
                    Web 3.0 Development
                  </h3>
                </div>
                <p
                  class="mb-1 mt-3 text-xs font-medium uppercase text-purple-500"
                >
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
        <div class="mb-5 flex w-full flex-col sm:flex-row">
          <div
            class="mb-10 w-full transition-transform duration-300 hover:-rotate-12 hover:scale-105 sm:mb-0 sm:w-1/2"
          >
            <div class="relative ml-0 mr-0 h-full sm:mr-10">
              <span
                class="absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded-lg bg-blue-400"
              ></span>
              <div
                class="relative h-full rounded-lg border-2 border-blue-400 bg-gray-800 p-5"
              >
                <div class="-mt-1 flex items-center">
                  <h3 class="my-2 ml-3 text-lg font-bold text-gray-100">
                    Project Audit
                  </h3>
                </div>
                <p
                  class="mb-1 mt-3 text-xs font-medium uppercase text-blue-400"
                >
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
            class="mb-10 w-full transition-transform duration-300 hover:rotate-12 hover:scale-105 sm:mb-0 sm:w-1/2"
          >
            <div class="relative ml-0 mr-0 h-full sm:mr-10">
              <span
                class="absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded-lg bg-yellow-400"
              ></span>
              <div
                class="relative h-full rounded-lg border-2 border-yellow-400 bg-gray-800 p-5"
              >
                <div class="-mt-1 flex items-center">
                  <h3 class="my-2 ml-3 text-lg font-bold text-gray-100">
                    Hacking / RE
                  </h3>
                </div>
                <p
                  class="mb-1 mt-3 text-xs font-medium uppercase text-yellow-400"
                >
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
            class="w-full transition-transform duration-300 hover:-rotate-6 hover:scale-105 sm:w-1/2"
          >
            <div class="relative ml-0 h-full md:mr-10">
              <span
                class="absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded-lg bg-green-500"
              ></span>
              <div
                class="relative h-full rounded-lg border-2 border-green-500 bg-gray-800 p-5"
              >
                <div class="-mt-1 flex items-center">
                  <h3 class="my-2 ml-3 text-lg font-bold text-gray-100">
                    Bot/Script Development
                  </h3>
                </div>
                <p
                  class="mb-1 mt-3 text-xs font-medium uppercase text-green-500"
                >
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
    </div>

    <!-- Pemateri -->
    <section id="our-team" class="py-32">
      <div class="container mx-auto px-4">
        <h2
          class="mb-8 bg-gradient-to-r from-purple-600 via-pink-500 to-main-4 bg-clip-text text-center text-3xl font-bold text-transparent"
        >
          DI ISI OLEH PEMATERI SPESIAL DOSEN MERCU BUANA!
        </h2>

        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <!-- Team Member 1 -->
          <div
            class="my-6 rounded-lg bg-gray-800 p-6 text-center shadow-md transition-transform duration-300 hover:scale-105 hover:border-4 hover:border-main-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src="https://spacema-dev.com/elevate/assets/images/team/1.jpg"
              alt="Team Member 1"
              class="mb-4 w-full rounded-full"
            />
            <h3 class="mb-2 text-xl font-semibold text-white">
              Dr. Rahmat Hidayat
            </h3>
            <p class="text-gray-300">Role: Kepala Program Studi</p>
          </div>

          <!-- Team Member 2 -->
          <div
            class="my-6 rounded-lg bg-gray-800 p-6 text-center shadow-md transition-transform duration-300 hover:scale-105 hover:border-4 hover:border-main-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src="https://spacema-dev.com/elevate/assets/images/team/4.jpg"
              alt="Team Member 2"
              class="mb-4 w-full rounded-full"
            />
            <h3 class="mb-2 text-xl font-semibold text-white">
              Prof. Irwan Nugraha
            </h3>
            <p class="text-gray-300">Role: Dosen Senior</p>
          </div>

          <!-- Team Member 3 -->
          <div
            class="my-6 rounded-lg bg-gray-800 p-6 text-center shadow-md transition-transform duration-300 hover:scale-105 hover:border-4 hover:border-main-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              src="https://spacema-dev.com/elevate/assets/images/team/3.jpg"
              alt="Team Member 3"
              class="mb-4 w-full rounded-full"
            />
            <h3 class="mb-2 text-xl font-semibold text-white">
              Dr. Siti Aminah
            </h3>
            <p class="text-gray-300">Role: Pakar Sistem Informasi</p>
          </div>

          <!-- Team Member 4 -->
          <div
            class="my-6 rounded-lg bg-gray-800 p-6 text-center shadow-md transition-transform duration-300 hover:scale-105 hover:border-4 hover:border-main-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src="https://spacema-dev.com/elevate/assets/images/team/2.jpg"
              alt="Team Member 4"
              class="mb-4 w-full rounded-full"
            />
            <h3 class="mb-2 text-xl font-semibold text-white">
              Dr. Budi Santoso
            </h3>
            <p class="text-gray-300">Role: Ahli Data Science</p>
          </div>

          <!-- Team Member 5 -->
          <div
            class="my-6 rounded-lg bg-gray-800 p-6 text-center shadow-md transition-transform duration-300 hover:scale-105 hover:border-4 hover:border-main-4"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <img
              src="https://spacema-dev.com/elevate/assets/images/team/5.jpg"
              alt="Team Member 5"
              class="mb-4 w-full rounded-full"
            />
            <h3 class="mb-2 text-xl font-semibold text-white">
              Dr. Amelia Wijaya
            </h3>
            <p class="text-gray-300">Role: Spesialis Kecerdasan Buatan</p>
          </div>

          <!-- Team Member 6 -->
          <div
            class="my-6 rounded-lg bg-gray-800 p-6 text-center shadow-md transition-transform duration-300 hover:scale-105 hover:border-4 hover:border-main-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <img
              src="https://spacema-dev.com/elevate/assets/images/team/6.jpg"
              alt="Team Member 6"
              class="mb-4 w-full rounded-full"
            />
            <h3 class="mb-2 text-xl font-semibold text-white">
              Dr. Andi Pratama
            </h3>
            <p class="text-gray-300">Role: Dosen Keamanan Siber</p>
          </div>

          <!-- Team Member 7 -->
          <div
            class="my-6 rounded-lg bg-gray-800 p-6 text-center shadow-md transition-transform duration-300 hover:scale-105 hover:border-4 hover:border-main-4"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <img
              src="https://spacema-dev.com/elevate/assets/images/team/7.jpg"
              alt="Team Member 7"
              class="mb-4 w-full rounded-full"
            />
            <h3 class="mb-2 text-xl font-semibold text-white">
              Prof. Arif Wijaya
            </h3>
            <p class="text-gray-300">Role: Pakar Jaringan Komputer</p>
          </div>

          <!-- Team Member 8 -->
          <div
            class="my-6 rounded-lg bg-gray-800 p-6 text-center shadow-md transition-transform duration-300 hover:scale-105 hover:border-4 hover:border-main-4"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <img
              src="https://spacema-dev.com/elevate/assets/images/team/8.jpg"
              alt="Team Member 8"
              class="mb-4 w-full rounded-full"
            />
            <h3 class="mb-2 text-xl font-semibold text-white">
              Dr. Lisa Sutrisno
            </h3>
            <p class="text-gray-300">Role: Spesialis UI/UX</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Registrasi Form -->
    <section class="body-font relative text-gray-400">
      <h1
        class="bg-gradient-to-r from-purple-600 via-pink-500 to-main-4 bg-clip-text text-center text-3xl font-bold text-transparent"
      >
        LOKASI ACARA FKTI 2025
      </h1>
      <div class="container mx-auto flex flex-wrap px-5 py-24 sm:flex-nowrap">
        <div
          class="relative flex items-end justify-start overflow-hidden rounded-lg bg-gray-300 p-10 sm:mr-10 md:w-1/2 lg:w-2/3"
        >
          <iframe
            width="100%"
            height="100%"
            class="absolute inset-0"
            frameborder="0"
            title="map"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Universitas%20Mercu%20Buana%20Jakarta%20Barat&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style="filter: grayscale(1) contrast(1.2) opacity(0.4)"
          ></iframe>
          <div
            class="relative flex flex-wrap rounded-xl border-4 border-main-4 bg-gray-800 py-6 shadow-md"
          >
            <div class="px-6 lg:w-1/2">
              <h2
                class="title-font text-xs font-semibold tracking-widest text-gray-200"
              >
                ADDRESS
              </h2>
              <p class="mt-1">
                Jl. Meruya Selatan No.1, RT.4/RW.1, Joglo, Kec. Kembangan, Kota
                Jakarta Barat, Daerah Khusus Ibukota Jakarta 11650
              </p>
            </div>
            <div class="mt-4 px-6 lg:mt-0 lg:w-1/2">
              <h2
                class="title-font text-xs font-semibold tracking-widest text-gray-200"
              >
                Catatan
              </h2>
              <a class="leading-relaxed text-red-500"
                >Perhatikan Baik Baik Lokasi Acara</a
              >
              <h2
                class="title-font mt-4 text-xs font-semibold tracking-widest text-gray-200"
              >
                PHONE
              </h2>
              <p class="leading-relaxed">(021) 12345678</p>
            </div>
          </div>
        </div>

        <div
          class="mt-8 flex w-full flex-col rounded-lg border-4 border-main-4 bg-gray-800 p-6 md:ml-auto md:mt-0 md:w-1/2 md:py-8 lg:w-1/3"
        >
          <h2 class="title-font mb-1 text-lg font-bold text-gray-200">
            Alur Pendaftaran
          </h2>
          <p class="mb-5 leading-relaxed text-gray-200">
            1. Isi formulir pendaftaran yang tersedia di Google Form.
            <br /><br />
            2. Setelah mengisi data diri, Anda akan menerima konfirmasi.
            <br /><br />
            3. Kembali Ke Halaman ini dan Pilih metode pembayaran yang Anda
            inginkan.
            <br /><br />
            4. Anda bisa memilih untuk melunasi biaya pendaftaran atau memilih
            cicilan.
            <br /><br />
            5. Jika memilih cicilan, tentukan jumlah angsuran yang sesuai.
            <br /><br />
            6. Lakukan pembayaran sesuai dengan opsi yang dipilih.
            <br /><br />
            7. Setelah pembayaran pertama atau pelunasan selesai, Anda akan
            mendapatkan Notifikasi.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdDtUm4g9pllRLBuKs3kHBc0G8tOXior5hT2csruHwU40IHrg/viewform?usp=header"
            class="rounded border-0 bg-main-4 px-6 py-2 text-center text-lg text-white hover:bg-accent focus:outline-none"
          >
            Daftar Sekarang
          </a>
        </div>
      </div>
    </section>

    <!-- Payment methods -->
    <div class="p-10">
      <div class="relative mx-auto max-w-7xl">
        <div
          class="mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none"
        >
          <div class="flex-1 bg-gray-800 px-6 py-8 lg:p-12">
            <h3 class="text-2xl font-extrabold text-white sm:text-3xl">
              Lifetime access
            </h3>
            <p class="mt-6 text-base text-gray-50 sm:text-lg">
              Take your Tailwind CSS development to the next level!
            </p>
            <div class="mt-8">
              <div class="flex items-center">
                <div class="flex-1 border-t-2 border-gray-200"></div>
              </div>
              <ul
                role="list"
                class="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0"
              >
                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-5 w-5 text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-white">Inspect Tailwind CSS websites</p>
                </li>
                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-5 w-5 text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-white">Edit mode in real-time</p>
                </li>
                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-5 w-5 text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-white">
                    Copy utility classes right into your clipboard
                  </p>
                </li>
                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-5 w-5 text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-white">
                    Free Chrome extension updates (Firefox coming soon)
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="bg-gray-700 px-6 py-8 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12"
          >
            <p class="text-lg font-medium leading-6 text-white">
              Pay once, own it forever
            </p>
            <div
              class="mt-4 flex items-center justify-center text-5xl font-extrabold text-white"
            >
              <span>$19.99</span
              ><span class="ml-3 text-xl font-medium text-gray-50">USD</span>
            </div>
            <div class="mt-6">
              <div class="rounded-md shadow">
                <a
                  href="#"
                  class="flex items-center justify-center rounded-md border border-transparent bg-indigo-500 px-5 py-3 text-base font-medium text-white hover:bg-indigo-600"
                  >Buy now</a
                >
              </div>
              <p class="mt-3 text-sm text-gray-300">
                100% money back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
