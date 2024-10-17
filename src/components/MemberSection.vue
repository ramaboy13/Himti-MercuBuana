<template>
  <section class="container mx-auto py-10">
    <h2 class="text-center text-3xl font-bold text-blue-600">Our Members</h2>
    <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
      <div
        v-for="member in members"
        :key="member.id"
        class="rounded-lg bg-white p-6 text-center shadow-lg"
      >
        <img
          :src="member.photo"
          alt="Profile photo"
          class="mx-auto h-24 w-24 rounded-full"
        />
        <h3 class="mt-4 text-lg font-semibold">{{ member.name }}</h3>
        <p class="mt-2 text-gray-600">{{ member.role }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionMember',
  data() {
    return {
      members: [
        {
          id: 1,
          name: 'John Doe',
          role: 'President',
          photo: '/path-to-image.jpg',
        },
        {
          id: 2,
          name: 'Jane Smith',
          role: 'Vice President',
          photo: '/path-to-image.jpg',
        },
        {
          id: 3,
          name: 'Alice Johnson',
          role: 'Secretary',
          photo: '/path-to-image.jpg',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
