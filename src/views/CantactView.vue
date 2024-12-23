<script setup lang="ts">
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const submitForm = () => {
  alert(`Message sent by ${form.value.name}`);
  // Reset the form
  form.value.name = "";
  form.value.email = "";
  form.value.message = "";
};
</script>

<template>
  <main class="pt-[8rem] pb-[2rem] px-[15%]">
    <h1 class="text-[2rem] max-sm:text-[1.3rem] font-bold text-center mb-8">Contact Us</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
      <!-- Contact Form -->
      <div class="bg-white shadow-md rounded-lg p-6">
        <h2 class="text-xl font-semibold mb-4">Send Us a Message</h2>
        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label for="name" class="block text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              class="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-[#a68ce3] focus:outline-[#6958b5]"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label for="email" class="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              class="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-[#a68ce3] focus:outline-[#6958b5]"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label for="message" class="block text-gray-700">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              class="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-[#a68ce3] focus:outline-[#6958b5]"
              placeholder="Write your message here"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="px-6 py-3 border border-black rounded-xl bg-black text-white text-[1.3rem] font-medium hover:-translate-y-2 hover:translate-x-1 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>

      <!-- Company Details -->
      <div>
        <h2 class="text-xl font-semibold mb-4">Our Office</h2>
        <div class="text-gray-700 space-y-3">
          <p>
            <span class="font-bold">Address:</span> 123 Main Street, Suite 400,
            San Francisco, CA 94104
          </p>
          <p><span class="font-bold">Phone:</span> (555) 123-4567</p>
          <p><span class="font-bold">Email:</span> contact@intracard.com</p>
        </div>

        <!-- Google Maps Placeholder -->
        <div class="mt-6">
          <h3 class="text-lg font-semibold mb-2">Find Us Here</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.834433335357!2d-122.4064170846814!3d37.7858341797579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064e088b5b7%3A0x6c39b28f252a42a5!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1683038428041!5m2!1sen!2sus"
            width="100%"
            height="250"
            class="border rounded-lg"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  </main>
</template>
