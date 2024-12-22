<script setup lang="ts">
import IconArrowForward from '@/components/icons/IconArrowForward.vue';
</script>

<template>
  <main class="pt-[8rem] px-[15%] pb-[2rem]">
    <section class="flex gap-4 items-center min-h-[70dvh] flex-wrap justify-center lg:justify-between">
      <div class="w-[24rem] flex flex-col gap-6">
        <a href="" class="flex items-center gap-2 w-[21rem] py-3 px-6 bg-action hover:bg-actionhover text-white transition-all rounded-full font-medium text-[1.2rem]"> 2024 IntraCard Savings Report <IconArrowForward /></a>
        <h1 class="text-[2.7rem] font-bold leading-[2.6rem]">The Better Way to Save & Invest</h1>
        <p class="text-[1.3rem] text-gray-800">
          IntraCard helps over 5 million customers achieve their financial goals
          by helping them save and invest with ease.
        </p>
        <div class="flex gap-4 w-full">
          <a href=""  class="px-6 py-3 border border-black rounded-xl bg-black text-white text-[1.3rem] font-medium hover:-translate-y-2 hover:translate-x-1 transition-all">Get Started</a>
          <a href="" class="px-6 py-3 border border-black rounded-xl bg-black text-white text-[1.3rem] font-medium hover:-translate-y-2 hover:translate-x-1 transition-all">Learn More</a>
        </div>
      </div>
      <div class="h-[34rem] w-[32rem] relative p-4">
        <img aria-hidden="true" src="/hero-img1.avif" alt="a lady using her phone" class="w-full h-full" />
        <img aria-hidden="true" src="/safelock.png" alt="a card" class="w-[12rem] h-[4rem] absolute top-20 -left-5" />
        <img aria-hidden="true" src="/flex.avif" alt="a card" class="w-[12rem] h-[5rem] absolute top-[13rem] -left-5" />
        <img aria-hidden="true" src="/intrabank.avif" alt="a card" class="w-[11rem] h-[5rem] absolute bottom-[4rem] -left-5" />
        <img aria-hidden="true" src="/target-save.png" alt="a card" class="w-[14rem] h-[5.5rem] absolute top-[3rem] -right-5" />
        <img aria-hidden="true" src="/investify.avif" alt="a card"  class="w-[12rem] h-[4rem] absolute bottom-[12rem] -right-5" />
        <img aria-hidden="true" src="/housemoney.svg" alt="a card" class="w-[12rem] h-[4rem] absolute bottom-[2rem] -right-5" />
      </div>
    </section>
  </main>
</template>
