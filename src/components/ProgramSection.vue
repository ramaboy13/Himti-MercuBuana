<script setup lang="ts">
import ProgramCard from './card/ProgramCard.vue'
</script>

<template>
  <section
    id="program"
    class="lg:pt-30 overflow-hidden px-5 pt-20 text-primary"
  >
    <div class="mx-auto max-w-7xl">
      <!-- Program Card -->

      <fieldset
        class="mb-8 overflow-hidden rounded-2xl bg-gradient-to-r from-accent to-pink-300 p-8 text-primary"
      >
        <legend
          class="w-fit overflow-hidden rounded-full border-8 border-primary bg-accent px-4 py-2 text-lg font-semibold text-primary"
        >
          <p class="text-center text-3xl font-bold">Program</p>
        </legend>

        <div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <!-- Kolom Kiri -->
          <p class="text-2xl font-semibold">
            Berikut adalah beberapa program yang kami tawarkan
          </p>

          <!-- Kolom Kanan -->
          <div class="rounded-2xl p-6">
            <p class="mb-6 text-justify leading-relaxed drop-shadow-2xl">
              Kami, Himpunan Mahasiswa Teknik Informatika Mercubuana,
              menyediakan berbagai program yang dirancang khusus untuk mendukung
              pengembangan akademik dan profesional mahasiswa di bidang
              teknologi informasi. Program-program ini tidak hanya bertujuan
              untuk memperluas pengetahuan teknis, tetapi juga untuk membentuk
              kemampuan kepemimpinan dan soft skill yang diperlukan di dunia
              kerja modern.
            </p>
          </div>
        </div>
      </fieldset>

      <!-- Card Gird Colum  -->
      <div class="grid grid-cols-1 gap-6 text-white md:grid-cols-3">
        <!-- Card Kelas Core  -->
        <ProgramCard
          title="Kelas Core"
          icon="lucide:file-code-2"
          :items="['UI/UX', 'HTML, CSS, JavaScript', 'Responsive Web']"
          route="/kelascore"
        />

        <!-- Card Seminar IT -->
        <ProgramCard
          title="Seminar IT"
          icon="lucide:presentation"
          :items="[
            'Pembelajaran Tentang IT',
            'Network Engineer',
            'Software Engineer',
          ]"
          route="/seminarit"
        />

        <!-- Card FKTI -->
        <ProgramCard
          title="FKTI"
          icon="lucide:users"
          :items="['Keakraban Mahasiswa IT', 'Knowledge', 'Kepemimpinan']"
          route="/fkti"
        />
      </div>
    </div>
  </section>
</template>
