<template>
  <section class="h-screen bg-main-1 py-20">
    <div
      class="mlg:px-8 mx-auto mt-9 flex max-w-5xl flex-col items-center justify-center px-6 text-center lg:mt-10"
    >
      <img
        src="../../assets/img/ManwithhisLaptop.png"
        alt="Logo"
        class="mb-8 h-40 w-40 lg:h-60 lg:w-60"
      />
      <h2 class="mb-8 text-xl font-bold text-main-2 lg:text-5xl">
        Our Website is Coming Soon
      </h2>
      <p class="mb-6 leading-relaxed text-gray-400 lg:text-xl">
        Stay tuned for updates and get ready for an extraordinary experience!
      </p>
      <div class="flex flex-wrap items-center justify-center gap-4 p-2">
        <div
          class="min-w-[120px] rounded-full border border-main-2 bg-main-1 px-6 py-2"
        >
          <div id="days" class="text-xl font-bold text-gray-300"></div>
          <div class="text-xs uppercase text-gray-400">days</div>
        </div>
        <div
          class="min-w-[120px] rounded-full border border-main-2 bg-main-1 px-6 py-2"
        >
          <div id="hours" class="text-xl font-bold text-gray-300"></div>
          <div class="text-xs uppercase text-gray-400">hours</div>
        </div>
        <div
          class="min-w-[120px] rounded-full border border-main-2 bg-main-1 px-6 py-2"
        >
          <div id="minutes" class="text-xl font-bold text-gray-300"></div>
          <div class="text-xs uppercase text-gray-400">minutes</div>
        </div>
        <div
          class="min-w-[120px] rounded-full border border-main-2 bg-main-1 px-6 py-2"
        >
          <div id="seconds" class="text-xl font-bold text-gray-300"></div>
          <div class="text-xs uppercase text-gray-400">seconds</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Set the date we're counting down to
var countDownDate = new Date('Jan 1, 2025 00:00:00').getTime()

// Update the countdown every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime()

  // Find the distance between now and the count down date
  var distance = countDownDate - now

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24))
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((distance % (1000 * 60)) / 1000)

  // Display the result in the corresponding elements
  document.getElementById('days').textContent = days + 'd'
  document.getElementById('hours').textContent = hours + 'h'
  document.getElementById('minutes').textContent = minutes + 'm'
  document.getElementById('seconds').textContent = seconds + 's'

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x)
    document.getElementById('countdown').innerHTML = 'EXPIRED'
  }
}, 1000)
</script>
