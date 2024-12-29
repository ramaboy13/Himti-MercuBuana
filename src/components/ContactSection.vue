<script setup></script>

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
            <!-- Icon Instagram -->
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
              >
                Selengkapnya
              </a>
            </div>
          </div>
          <!-- End Instagram Block -->

          <!-- Linkedin Block -->
          <div class="flex gap-x-7 py-6">
            <!-- Icon Linkedin -->
            <span>
              <Icon
                icon="logos:linkedin-icon"
                color=""
                width="48"
                height="48"
              />
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
              >
                Selengkapnya
              </a>
            </div>
          </div>
          <!-- End Linkedin Block -->

          <!-- Email Block -->
          <div class="flex gap-x-7 py-6">
            <!-- SVG Icon EMAIL -->
            <span>
              <Icon icon="logos:google-gmail" color="" width="48" height="48" />
            </span>

            <div>
              <h3 class="font-semibold text-white dark:text-neutral-200">
                Email
              </h3>
              <p class="mt-1 text-sm text-neutral-400 dark:text-neutral-500">
                Jika Anda ingin mengirim email kepada kami, silakan hubungi kami
                di sini.
              </p>
              <a
                class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-blue-600 hover:text-gray-800 focus:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="#"
              >
                example@site.com
              </a>
            </div>
          </div>
          <!-- End Email Block -->
        </div>
        <!-- End Contact Information Section -->

        <!-- Form Section (Right) -->
        <div
          class="flex flex-col rounded-2xl border border-main-4 bg-gray-900 p-4 dark:border-main-2 dark:bg-main-2 sm:p-6 lg:p-8"
        >
          <h2
            class="mb-8 text-center text-xl font-semibold text-white shadow-slate-50 dark:text-neutral-200"
          >
            Hubungi kami kapan saja melalui Whatsapp
          </h2>

          <form>
            <div class="grid gap-4">
              <!-- Grid -->
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div class="relative">
                  <label for="hs-firstname-contacts-1" class="sr-only"
                    >First Name</label
                  >
                  <div class="flex items-center">
                    <i class="fas fa-user absolute left-3 text-gray-400"></i>
                    <input
                      type="text"
                      name="hs-firstname-contacts-1"
                      id="hs-firstname-contacts-1"
                      class="block w-full rounded-lg border border-main-4 bg-gray-700 px-10 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="First Name"
                    />
                  </div>
                </div>

                <div class="relative">
                  <label for="hs-lastname-contacts-1" class="sr-only"
                    >Last Name</label
                  >
                  <div class="flex items-center">
                    <i class="fas fa-user absolute left-3 text-gray-400"></i>
                    <input
                      type="text"
                      name="hs-lastname-contacts-1"
                      id="hs-lastname-contacts-1"
                      class="block w-full rounded-lg border border-main-4 bg-gray-700 px-10 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              </div>
              <!-- End Grid -->

              <div class="relative">
                <label for="hs-email-contacts-1" class="sr-only">Email</label>
                <div class="flex items-center">
                  <i class="fas fa-envelope absolute left-3 text-gray-400"></i>
                  <input
                    type="email"
                    name="hs-email-contacts-1"
                    id="hs-email-contacts-1"
                    autocomplete="email"
                    class="block w-full rounded-lg border border-main-4 bg-gray-700 px-10 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div class="relative">
                <label for="hs-phone-number-1" class="sr-only"
                  >Phone Number</label
                >
                <div class="flex items-center">
                  <i class="fas fa-phone absolute left-3 text-gray-400"></i>
                  <input
                    type="text"
                    name="hs-phone-number-1"
                    id="hs-phone-number-1"
                    class="block w-full rounded-lg border border-main-4 bg-gray-700 px-10 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <div class="relative">
                <label for="hs-about-contacts-1" class="sr-only">Message</label>
                <div class="flex items-start">
                  <i
                    class="fas fa-comment-alt absolute left-3 mt-3 text-gray-400"
                  ></i>
                  <textarea
                    name="hs-about-contacts-1"
                    id="hs-about-contacts-1"
                    rows="4"
                    class="block w-full rounded-lg border border-main-4 bg-gray-700 px-10 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
            </div>

            <!-- End Grid -->
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
        <!-- End Form Section -->
      </div>
    </div>
  </section>
  <!-- End Contact Us Section -->
</template>
