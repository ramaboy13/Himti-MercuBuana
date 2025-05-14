<template>
  <div class="min-h-screen bg-#512b90 flex flex-col md:flex-row items-center justify-center p-6 gap-10 text-white">
    <div class="container mx-auto max-w-6xl p-6 rounded-lg shadow-lg">
      
     <!-- Judul -->
     <h1 class="text-4xl font-bold text-white text-center mb-10">
        <span class="text-accent font-bold">Pendaftaran Program</span> Kelas Core
      </h1>

      <!-- Deskripsi -->
      <p class="text-lg text-center text-indigo-100 mb-6">
        Ikuti langkah-langkah berikut untuk mendaftar ke program Kelas Core dan mengembangkan keterampilan di bidang
        <strong>Data Science</strong>, <strong>Web Development</strong>, dan lainnya.
      </p>

      <div class="flex flex-col md:flex-row gap-8">
        
        <!-- Langkah Pendaftaran -->
        <div
          ref="stepsSection"
          :class="{'is-visible': isStepsVisible}"
          class="flex-1 bg-purple-800/80 p-6 rounded-lg text-white shadow-lg border border-purple-300/30 opacity-0 transform -translate-x-[100%] transition-all duration-1000"
        >
          <h2 class="text-2xl font-semibold mb-4">Langkah-langkah Pendaftaran</h2>
          <ol class="list-decimal pl-6 space-y-4">
            <li>
              <strong>Isi Formulir Pendaftaran:</strong> Masukkan data diri dan pilih kelas yang diinginkan.
            </li>
            <li>
              <strong>Verifikasi Email:</strong> Pastikan email yang Anda masukkan valid dan aktif.
            </li>
            <li>
              <strong>Konfirmasi Pendaftaran:</strong> Anda akan menerima email konfirmasi setelah pendaftaran berhasil.
            </li>
          </ol>
        </div>

        <!-- Form Pendaftaran -->
        <div
          ref="formSection"
          :class="{'is-visible': isFormVisible}"
          class="flex-1 bg-purple-800/80 p-6 rounded-lg shadow-lg border border-purple-300/30 opacity-0 transform translate-x-[100%] transition-all duration-1000"
        >
          <h2 class="text-2xl font-semibold mb-6 text-white">Form Pendaftaran</h2>

          <form @submit.prevent="submitForm">

            <!-- Nama -->
            <div class="mb-4">
              <label for="fullName" class="block text-sm font-medium text-white">Nama Lengkap</label>
              <input
                type="text"
                id="fullName"
                v-model="form.fullName"
                required
                class="mt-2 p-3 w-full rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Masukkan nama lengkap"
              />
            </div>

            <!-- Email -->
            <div class="mb-4">
              <label for="email" class="block text-sm font-medium text-white">Email</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="mt-2 p-3 w-full rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="contoh@email.com"
              />
            </div>

            <!-- Nomor Telepon -->
            <div class="mb-4">
              <label for="phone" class="block text-sm font-medium text-white">Nomor Telepon</label>
              <input
                type="tel"
                id="phone"
                v-model="form.phone"
                required
                class="mt-2 p-3 w-full rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="08xxxxxxxxxx"
              />
            </div>

            <!-- Tombol Submit -->
            <div class="mt-6">
              <button
                type="submit"
                class="w-full py-3 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700 transition duration-200 ease-in-out"
              >
                Daftar Sekarang
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        fullName: '',
        email: '',
        phone: ''
      },
      isFormVisible: false,
      isStepsVisible: false
    };
  },
  mounted() {
    this.observeVisibility();
  },
  methods: {
    submitForm() {
      console.log(this.form);
      alert('Pendaftaran berhasil!');
    },
    observeVisibility() {
      const formObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            this.isFormVisible = entry.isIntersecting;
          });
        },
        { threshold: 0.5 }
      );
      formObserver.observe(this.$refs.formSection);

      const stepsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            this.isStepsVisible = entry.isIntersecting;
          });
        },
        { threshold: 0.5 }
      );
      stepsObserver.observe(this.$refs.stepsSection);
    }
  }
};
</script>

<style scoped>
.is-visible {
  opacity: 1;
  transform: translateX(0);
  transition: transform 0.8s ease, opacity 0.8s ease;
}

input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px rgba(255, 255, 255, 0.1) inset !important;
  -webkit-text-fill-color: white !important;
  transition: background-color 5000s ease-in-out 0s;
}

input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

input:focus {
  outline: none;
  border-color: #8b5cf6;
}

button:focus {
  outline: none;
}
</style>