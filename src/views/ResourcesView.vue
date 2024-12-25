<script setup lang="ts">
import { ref, computed } from "vue";

// Sample resources
const resources = ref([
  {
    id: 1,
    title: "How to Save Better",
    category: "Savings",
    description: "Tips and tricks for building your savings effectively.",
  },
  {
    id: 2,
    title: "Understanding Credit Scores",
    category: "Credit",
    description: "A comprehensive guide to credit scores and how they work.",
  },
  {
    id: 3,
    title: "Financial Planning 101",
    category: "Finance",
    description: "Learn the basics of financial planning for a secure future.",
  },
  {
    id: 4,
    title: "Maximizing Rewards Programs",
    category: "Rewards",
    description: "Get the most out of your rewards programs.",
  },
  {
    id: 5,
    title: "Avoiding Common Debt Traps",
    category: "Debt",
    description: "Practical advice to steer clear of debt pitfalls.",
  },
]);

// Categories for filtering
const categories = ref([
  "All",
  "Savings",
  "Credit",
  "Finance",
  "Rewards",
  "Debt",
]);

// Active category
const activeCategory = ref("All");

// Filtered resources based on active category
const filteredResources = computed(() => {
  if (activeCategory.value === "All") return resources.value;
  return resources.value.filter(
    (resource) => resource.category === activeCategory.value
  );
});

// Set active category
const setCategory = (category: string) => {
  activeCategory.value = category;
};
</script>

<template>
  <main class="pt-[8rem] pb-[2rem] px-[5%] xl:px-[15%] min-h-screen">
    <h1 class="text-3xl font-bold text-center mb-6">Resources</h1>
    <p class="text-gray-600 text-center mb-8">
      Explore our guides, articles, and tools to help you make informed
      financial decisions.
    </p>

    <!-- Categories -->
    <div class="flex justify-center mb-6 flex-wrap gap-4">
      <button
        v-for="category in categories"
        :key="category"
        @click="setCategory(category)"
        :class="[
          'px-4 py-2 rounded-lg font-medium transition',
          activeCategory === category
            ? 'bg-[#3e8e19] text-white'
            : 'bg-[#e7efe5] text-gray-700 hover:bg-green-200',
        ]"
      >
        {{ category }}
      </button>
    </div>

    <!-- Resource Cards -->
    <div
      v-if="filteredResources.length"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <div
        v-for="resource in filteredResources"
        :key="resource.id"
        class="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
      >
        <h3 class="text-xl font-semibold text-[#3e8e19] mb-2">
          {{ resource.title }}
        </h3>
        <p class="text-gray-600 mb-4">{{ resource.description }}</p>
        <button class="text-[#3e8e19] font-medium hover:underline">
          Read More
        </button>
      </div>
    </div>

    <!-- No Resources Found -->
    <div v-else class="text-center text-gray-600 mt-12">
      <p>No resources found for this category.</p>
    </div>
  </main>
</template>
