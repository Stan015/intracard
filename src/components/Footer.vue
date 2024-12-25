<script setup lang="ts">
import IconFacebook from "./icons/IconFacebook.vue";
import IconInstagram from "./icons/IconInstagram.vue";
import IconLinkedIn from "./icons/IconLinkedIn.vue";
import IconTwitter from "./icons/IconTwitter.vue";
</script>

<template>
  <footer
    class="flex flex-col py-8 px-[5%] xl:px-[15%] gap-10 text-[0.9rem] text-gray-600 mb-[2rem]"
  >
    <section
      class="flex justify-between max-md:justify-center gap-6 w-full border-b py-7 flex-wrap"
    >
      <img src="/Intracard-logo.svg" alt="logo" class="w-[15rem]" />
      <div
        class="flex gap-5 w-[50%] max-md:w-full flex-wrap justify-between mr-3"
      >
        <div>
          <h3>Products</h3>
          <ul>
            <li><a href="#">IntraBank</a></li>
            <li><a href="#">Safelock</a></li>
            <li><a href="#">Earn</a></li>
            <li><a href="#">Invest</a></li>
            <li><a href="#">FlexDollar</a></li>
            <li><a href="#">FlexNaira</a></li>
            <li><a href="#">Saving</a></li>
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/rewards">Rewards</a></li>
            <li><a href="/resources">Resources</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3>Legal</h3>
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/security">Security</a></li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col gap-5 max-w-[10rem]">
        <div aria-label="social media" class="flex gap-2 items-center">
          <a href="#"><IconFacebook /></a>
          <a href="#"><IconTwitter /></a>
          <a href="#"><IconInstagram /></a>
          <a href="#"><IconLinkedIn /></a>
        </div>
        <div aria-label="quick contacts" class="flex flex-col gap-2">
          <a href=""> 271 st. Moritz Terrace SW, T3H 5X8</a>
          <a href="mailto:contact@intracard.com">contact@intracard.com</a>
          <a href="tel:+234 123 456 7890">(555) 456 7890</a>
        </div>
      </div>
    </section>
    <section class="w-1/2 max-sm:w-full text-[0.7rem] flex flex-col gap-3">
      <p>
        IntraCard is the leading online savings & investing platform in Nigeria.
        For over 8 years, our customers have saved and invested billions of
        Naira that they would normally be tempted to spend.
      </p>
      <p>
        IntraCard Technologies Inc is a fund manager duly licensed by the
        Securities and Exchange Commission (SEC) of Nigeria.
      </p>
      <p>
        &copy; {{ new Date().getFullYear() }} IntraCard. All rights reserved.
      </p>
    </section>
  </footer>
</template>

<style scoped>
a:hover {
  color: #3e8e19;
  text-decoration: underline;
  transition: all 200ms;
}

h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: black;
  margin-bottom: 0.3rem;
}
</style>
