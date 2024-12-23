<script setup lang="ts">
import { ref } from "vue";

// Sample FAQ Data
const faqs = ref([
  {
    question: "What is IntraCard?",
    answer:
      "IntraCard is a financial platform that helps you manage your savings and payments efficiently.",
  },
  {
    question: "How secure is IntraCard?",
    answer:
      "IntraCard uses industry-leading encryption to keep your data and transactions secure.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes, you can cancel your subscription anytime through your account settings.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No, IntraCard is completely transparent about all fees. You can review them in the pricing section.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "IntraCard supports all major credit and debit cards, as well as digital wallets like PayPal and Apple Pay.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our support team via email or live chat, available 24/7 to assist you with any queries.",
  },
  {
    question: "Does IntraCard have a mobile app?",
    answer:
      "Yes, we offer mobile apps for both iOS and Android platforms to manage your account on the go.",
  },
]);

// Active FAQ index
const activeIndex = ref<number | null>(null);

// Toggle FAQ item
const toggleFaq = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <main class="pt-[8rem] pb-[2rem] px-[15%] min-h-screen">
    <h2 class="text-[2rem] max-sm:text-[1.3rem] font-bold mb-6 text-center">
      Frequently Asked Questions
    </h2>
    <div
      class="w-full mx-auto p-[4rem] lg:mt-[2rem] max-sm:p-[1rem] bg-[#43228f] rounded-3xl"
    >
      <ul class="space-y-4">
        <li
          v-for="(faq, index) in faqs"
          :key="index"
          class="border rounded-lg shadow-sm overflow-hidden"
        >
          <button
            class="w-full text-left p-4 flex justify-between items-center font-semibold text-white"
            @click="toggleFaq(index)"
          >
            <span>{{ faq.question }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              :class="{ 'rotate-180': activeIndex === index }"
              class="h-5 w-5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            v-if="activeIndex === index"
            class="p-4 border-t text-black bg-gray-50"
          >
            {{ faq.answer }}
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>
