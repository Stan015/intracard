<script setup lang="ts">
import { ref } from "vue";
import { z } from "zod";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

// Define Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Invalid email address").min(3, "Email is required"),
  message: z.string().min(3, "Message is required"),
});

const form = ref({
  name: "",
  email: "",
  message: "",
});

// Reactive error state
const errors = ref<{ [key: string]: string | null }>({
  name: null,
  email: null,
  message: null,
});

// Validate the form
const validateForm = () => {
  try {
    formSchema.parse(form.value);
    errors.value = { name: null, email: null, message: null };
    return true;
  } catch (error) {
    if (error instanceof z.ZodError) {
      for (const issue of error.errors) {
        toast.error(issue.message, {
          position: "top-right",
          autoClose: 3000,
        });
      }
    }
    return false;
  }
};

// Handle form submission
const submitForm = () => {
  if (validateForm()) {
    toast.success("Message sent successfully!", {
      position: "top-right",
      autoClose: 3000,
    });
    // Reset the form
    form.value.name = "";
    form.value.email = "";
    form.value.message = "";
  }
};
</script>

<template>
  <main class="pt-[8rem] pb-[2rem] px-[5%] xl:px-[15%]">
    <h1
      class="text-[2rem] max-sm:text-[1.5rem] font-bold text-center mb-8 max-md:mt-[2rem]"
    >
      Contact Us
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
      <!-- Contact Form -->
      <div class="bg-white shadow-md rounded-lg p-6">
        <h2 class="text-xl font-semibold mb-4">Send Us a Message</h2>
        <form
          @submit.prevent="submitForm"
          class="space-y-4 flex flex-col max-sm:itenms-center"
        >
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
            class="px-6 py-3 border border-black rounded-xl bg-black text-white text-[1.3rem] max-sm:text-base max-sm:text-nowrap font-medium hover:-translate-y-2 hover:translate-x-1 transition-all w-max max-sm:self-center"
          >
            Send Message
          </button>
        </form>
      </div>

      <!-- Company Details -->
      <div>
        <h2 class="text-xl font-semibold mb-4">Write us at:</h2>
        <p class="text-base">The Head Customer Relations</p>
        <p class="text-base mb-2">IntraCard Technologies Inc</p>
        <div class="text-gray-700 space-y-3 text-pretty">
          <p>
            <span class="font-bold">Address:</span> 1271 st. Moritz Terrace SW,
            T3H 5X8
          </p>
          <p><span class="font-bold">Phone:</span> (555) 123-4567</p>
          <p><span class="font-bold">Email:</span> contact@intracard.com</p>
        </div>

        <!-- Google Maps Placeholder -->
        <div class="mt-6">
          <h3 class="text-lg font-semibold mb-2">Find Us Here</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d627.2554859042118!2d-114.21351103032487!3d51.03421544159395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716dc1faa916c7%3A0x37585410cb007bcd!2sTc%20Southwest%2C%20271%20St%20Moritz%20Terrace%20SW%2C%20Calgary%2C%20AB%20T3H%205X8%2C%20Canada!5e0!3m2!1sen!2sng!4v1735108302904!5m2!1sen!2sng"
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
