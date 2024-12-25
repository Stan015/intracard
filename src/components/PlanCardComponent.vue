<script setup lang="ts">
import { defineProps } from "vue";
import IconEnterArrow from "./icons/IconEnterArrow.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
  linkTitle: {
    type: String,
    required: true,
  },
  teamColor: {
    type: String,
    required: true,
  },
  hoverBgColor: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <a
    :href="href"
    :class="
      'group flex flex-col gap-4 min-w-[20rem] max-w-[28rem] min-h-[26rem] max-h-[30rem] justify-between w-full h-full bg-white p-6 rounded-xl shadow-lg transition-all overflow-hidden relative ' +
      hoverBgColor
    "
  >
    <div class="z-[1]">
      <h3
        :class="[
          'text-[2rem] max-md:text-[1.6rem] font-bold transition-all group-hover:text-white',
          teamColor,
        ]"
      >
        {{ title }}
      </h3>
      <p class="text-[1.2rem] text-gray-700 group-hover:text-white">
        {{ description }}
      </p>
    </div>
    <div :class="['flex items-center gap-2', teamColor]">
      <IconEnterArrow class="transform -scale-x-100 group-hover:text-white" />
      <div class="sticky group z-10">
        <a
          :href="href"
          class="text-base py-1 font-semibold group-hover:text-white"
        >
          {{ linkTitle }}
        </a>
        <span
          aria-hidden="true"
          class="block h-[0.3rem] absolute bg-white -z-10 bottom-[0.05rem] w-0 group-hover:w-full transition-all duration-300"
        ></span>
      </div>
    </div>
    <img
      :src="imgSrc"
      alt="card img"
      class="absolute bottom-0 right-5 w-[15rem] h-[15rem] max-sm:w-[11rem] max-sm:h-[11rem] translate-y-[100%] translate-x-[100%] group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300"
    />
  </a>
</template>
