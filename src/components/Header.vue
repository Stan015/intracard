<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRoute } from "vue-router";
import IconMenu from "./icons/IconMenu.vue";
import IconMenuClose from "./icons/IconMenuClose.vue";

const isScrolled = ref(false);
const isToggled = ref(false);
const isLargeScreen = ref(window.innerWidth >= 1024);

const route = useRoute();
const currentRoute = computed(() => route.path);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

const handleMenuToggle = () => {
  isToggled.value = !isToggled.value;
  console.log(currentRoute.value);
};

const updateScreenSize = () => {
  isLargeScreen.value = window.innerWidth >= 1024;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", updateScreenSize);

  handleScroll();
  updateScreenSize();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", updateScreenSize);
});
</script>

<template>
  <header
    :class="[
      'flex w-full h-[6rem] items-center px-[5%] xl:px-[15%] justify-between gap-2 text-base font-medium fixed top-0 z-30 transition-colors duration-200',
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent',
      isToggled && !isLargeScreen
        ? 'h-screen bg-white flex-col !justify-start'
        : 'h-[6rem]',
    ]"
  >
    <div
      :class="[
        'flex gap-4 justify-between items-center lg:h-full max-lg:w-full',
        isToggled && !isLargeScreen ? 'h-[6rem] self-start' : 'items-center',
      ]"
    >
      <a href="/" class="mr-6">
        <img
          alt="intracard logo"
          class="logo w-[16rem] max-sm:w-[10rem]"
          src="/Intracard-logo.svg"
        />
      </a>
      <button
        type="button"
        @click="handleMenuToggle"
        aria-label="Toggle menu"
        class="lg:hidden"
      >
        <IconMenuClose v-if="isToggled" class="w-[3rem] h-[3rem]" />
        <IconMenu v-else class="w-[3rem] h-[3rem]" />
      </button>
    </div>

    <nav
      :class="[
        'flex gap-2  max-lg:w-full max-lg:text-center',
        isToggled && !isLargeScreen
          ? '!max-lg:flex self-end flex-col items-center'
          : ' max-lg:hidden',
      ]"
    >
      <RouterLink
        to="/"
        :class="[
          'px-2 py-1 max-lg:w-full border-b rounded-lg hover:border-b-[#65b338]',
          currentRoute === '/' ? 'border-b-[#65b338]' : 'border-b-transparent',
        ]"
        @click="handleMenuToggle"
        >Home</RouterLink
      >
      <RouterLink
        to="/rewards"
        :class="[
          'px-2 py-1 max-lg:w-full border-b rounded-lg hover:border-b-[#65b338]',
          currentRoute === '/rewards'
            ? 'border-b-[#65b338]'
            : 'border-b-transparent',
        ]"
        @click="handleMenuToggle"
        >Rewards</RouterLink
      >
      <RouterLink
        to="/contact"
        :class="[
          'px-2 py-1 max-lg:w-full border-b rounded-lg hover:border-b-[#65b338]',
          currentRoute === '/contact'
            ? 'border-b-[#65b338]'
            : 'border-b-transparent',
        ]"
        @click="handleMenuToggle"
        >Contact</RouterLink
      >
      <RouterLink
        to="/faq"
        :class="[
          'px-2 py-1 max-lg:w-full border-b rounded-lg hover:border-b-[#65b338]',
          currentRoute === '/faq'
            ? 'border-b-[#65b338]'
            : 'border-b-transparent',
        ]"
        @click="handleMenuToggle"
        >FAQ</RouterLink
      >
      <RouterLink
        to="/resources"
        :class="[
          'px-2 py-1 max-lg:w-full border-b rounded-lg hover:border-b-[#65b338]',
          currentRoute === '/resources'
            ? 'border-b-[#65b338]'
            : 'border-b-transparent',
        ]"
        @click="handleMenuToggle"
        >Resources</RouterLink
      >
    </nav>

    <nav
      :class="[
        'flex gap-2 ml-auto text-nowrap  max-lg:w-full',
        isToggled && !isLargeScreen
          ? 'max-lg:flex flex-col text-center gap-4 mt-2'
          : 'max-lg:hidden',
      ]"
    >
      <RouterLink
        to="/login"
        class="px-4 py-3 border border-black rounded-xl"
        @click="handleMenuToggle"
        >Sign in</RouterLink
      >
      <RouterLink
        to="/signup"
        class="px-4 py-3 border border-black rounded-xl bg-black text-white"
        @click="handleMenuToggle"
        >Create free account</RouterLink
      >
    </nav>
  </header>
</template>
