<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    :class="[
      'flex w-full h-[6rem] items-center px-[15%] text-base font-medium fixed top-0 z-30 transition-colors duration-200',
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent',
    ]"
  >
    <div class="flex">
      <a href="/" class="mr-8">
        <img
          alt="Vue logo"
          class="logo w-[16rem] "
          src="/Intracard-logo.svg"
        />
      </a>
    </div>

    <nav class="flex gap-3">
      <RouterLink to="/" class="px-2 py-2">Home</RouterLink>
      <RouterLink to="/rewards" class="px-2 py-2">Rewards</RouterLink>
      <RouterLink to="/contact" class="px-2 py-2">Contact</RouterLink>
      <RouterLink to="/faq" class="px-2 py-2">FAQ</RouterLink>
      <RouterLink to="/resources" class="px-2 py-2">Resources</RouterLink>
    </nav>

    <nav class="flex gap-4 ml-auto">
      <RouterLink to="/login" class="px-4 py-3 border border-black rounded-xl"
        >Sign in</RouterLink
      >
      <RouterLink
        to="/signup"
        class="px-4 py-3 border border-black rounded-xl bg-black text-white"
        >Create free account</RouterLink
      >
    </nav>
  </header>
</template>
