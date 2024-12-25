<script setup lang="ts">
import IconCentralized from "@/components/icons/IconCentralized.vue";
import IconNotification from "@/components/icons/IconNotification.vue";
import IconOffer from "@/components/icons/IconOffer.vue";
import { ref, computed, watch } from "vue";

// Define the structure of reward details
type CardId = "1" | "2" | "3";
interface RewardDetail {
  ppd: number;
  threshold: number;
  multiple: number;
}

// Track the active view (0 = Best Cashback, 1 = Best Points)
const activeView = ref(0);

// Function to switch best cashback and best points view
const switchView = (view: number) => {
  activeView.value = view;
};

// Reactive properties
const rentAmount = ref<number>(499);
const selectedCard = ref<CardId>("1");
const annualRewards = ref<number>(0);

// Reward details for each card
const rewardDetails: Record<CardId, RewardDetail> = {
  "1": { ppd: 0.02, threshold: 5000, multiple: 1.5 },
  "2": { ppd: 0.03, threshold: 7000, multiple: 2.0 },
  "3": { ppd: 0.015, threshold: 4000, multiple: 1.2 },
};

// Calculate annual rewards for a given card
const calculateAnnualRewards = (
  ppd: number,
  threshold: number,
  multiple: number
) => {
  const rentPerYear = rentAmount.value * 12;
  return (
    Math.min(rentPerYear, threshold) * ppd * multiple +
    Math.max(rentPerYear - threshold, 0) * ppd
  );
};

// Computed property to find the best cashback card
const bestCashback = computed(() => {
  let maxRewards = 0;
  let bestCard: CardId = "1";

  for (const [cardId, { ppd, threshold, multiple }] of Object.entries(
    rewardDetails
  ) as [CardId, RewardDetail][]) {
    const rewards = calculateAnnualRewards(ppd, threshold, multiple);
    if (rewards > maxRewards) {
      maxRewards = rewards;
      bestCard = cardId;
    }
  }

  return { cardId: bestCard, rewards: maxRewards };
});

// Computed property to find the best points card
const bestPointsCard = computed(() => {
  let maxPoints = 0;
  let bestCard: CardId = "1";

  for (const [cardId, { ppd }] of Object.entries(
    rewardDetails
  ) as [CardId, RewardDetail][]) {
    const points = ppd * 12 * rentAmount.value;
    if (points > maxPoints) {
      maxPoints = points;
      bestCard = cardId;
    }
  }

  return { cardId: bestCard, points: maxPoints };
});

// Update annual rewards for the selected card
watch([rentAmount, selectedCard], () => {
  const { ppd, threshold, multiple } = rewardDetails[selectedCard.value];
  annualRewards.value = calculateAnnualRewards(ppd, threshold, multiple);
}, { immediate: true });
</script>

<template>
  <main class="pt-[8rem] pb-[2rem]">
    <section
      class="flex gap-4 px-[5%] xl:px-[15%] items-center min-h-[70dvh] flex-wrap justify-center lg:justify-between max-lg:mt-[3rem]"
    >
      <div class="w-[24rem] flex flex-col gap-6 max-lg:w-[80%] max-lg:items-center max-lg:text-center max-lg:text-balance max-sm:w-full">
        <h1 class="text-[2.7rem] max-md:text-[2rem] max-md:text-center font-bold leading-[2.6rem]">
          Unlock Great Rewards With Your Credit Cards
        </h1>
        <p class="text-[1.3rem]  max-md:text-center max-md:text-[1.2rem] text-gray-800">
          Maximize the benefits of your spending by earning cashback and reward
          points every time you use your credit card through our platform.
        </p>
        <a
          href=""
          class="px-6 py-3 border border-black rounded-xl bg-black text-white text-[1.3rem]  max-sm:text-base max-sm:text-nowrap font-medium hover:-translate-y-2 hover:translate-x-1 transition-all w-max"
          >Get Started</a
        >
      </div>
      <div class="h-[34rem] w-[32rem] max-md:w-[25rem] max-md:h-[28rem] max-sm:w-[20rem] relative p-4">
        <img
          aria-hidden="true"
          src="/skyscr.avif"
          alt="a building"
          class="w-full h-full"
        />
      </div>
    </section>
    <section class="flex flex-col w-full items-center px-[5%] xl:px-[15%]">
      <div class="flex flex-col gap-2 items-center">
        <h2 class="text-[3rem] max-md:text-[2rem] max-md:text-center font-bold">Find out how much you can earn.</h2>
        <p class="text-[1.5rem]  max-md:text-center max-md:text-[1.2rem]">
          Enter your rent amount and card of choice to reveal your rewards!
        </p>
      </div>
      <div
        class="flex flex-col gap-4 items-center mt-[3rem] w-[80%] justify-center"
      >
        <div class="flex gap-4 flex-col items-center w-full">
          <label class="flex flex-col gap-2 w-full text-[1.2rem] font-bold">
            Rent Amount
            <p
              class="w-full flex gap-2 items-center relative rounded-lg overflow-hidden text-[1rem]"
            >
              <span
                class="absolute left-0 bg-gray-200 w-[3rem] leading-[3.5rem] text-center text-gray-600"
                >CA$</span
              >
              <input
                type="number"
                class="border border-gray-300 hover:border-[#3e8e19] focus:border-[#3e8e19] transition-all focus:outline-[#3e8e19] bg-transparent rounded-lg px-4 py-2 w-full pl-[3.5rem] z-10"
                v-model="rentAmount"
                placeholder="Rent Amount"
                value="499"
              />
            </p>
          </label>
          <label class="flex flex-col gap-2 w-full text-[1.2rem] font-bold">
            Issuing Bank
            <select
              class="border border-gray-300 hover:border-[#3e8e19] focus:border-[#3e8e19] transition-all focus:outline-[#3e8e19] bg-transparent rounded-lg px-4 py-2 w-full text-[1rem]"
            >
              <option value="chase">Chase</option>
              <option value="amex">Amex</option>
              <option value="citi">Citi</option>
            </select>
          </label>
          <label class="flex flex-col gap-2 w-full text-[1.2rem] font-bold">
            Selected Card
            <select
              v-model="selectedCard"
              class="border border-gray-300 hover:border-[#3e8e19] focus:border-[#3e8e19] transition-all focus:outline-[#3e8e19] bg-transparent rounded-lg px-4 py-2 w-full text-[1rem]"
            >
              <option value="1">Chase Sapphire</option>
              <option value="2">Amex Platinum</option>
              <option value="3">Citi Double Cash</option>
            </select>
          </label>
          <div
            class="flex gap-4 flex-col w-full items-center rounded-2xl bg-[#1b660a] text-white p-4"
          >
            <div
              class="flex gap-1 flex-col items-center border-b border-b-gray-200 w-full pb-4"
            >
              <p class="text-[2rem] font-bold">${{ annualRewards }}</p>
              <p class="text-base text-gray-200 max-sm:text-[0.8rem]">
                /Annual Rewards (Excluding Fees)
              </p>
            </div>
            <div class="flex w-full items-center justify-between">
              <p class="text-base">Value per rent dollar</p>
              <p class="text-base">${{ rewardDetails[selectedCard].ppd.toFixed(2) }}</p>
            </div>
          </div>
          <div class="w-full">
            <div class="flex gap-4 mb-6 border-b pb-2 mt-4">
              <button
                type="button"
                @click="switchView(0)"
                :class="[
                  'px-4 py-2 rounded-lg font-medium transition',
                  activeView === 0
                    ? 'bg-[#3e8e19] text-white'
                    : 'bg-[#e7efe5] text-gray-700 hover:bg-green-200',
                ]"
              >
                Best Cashback
              </button>
              <button
                type="button"
                @click="switchView(1)"
                :class="[
                  'px-4 py-2 rounded-lg font-medium transition',
                  activeView === 1
                    ? 'bg-[#3e8e19] text-white'
                    : 'bg-[#e7efe5] text-gray-700 hover:bg-green-200',
                ]"
              >
                Best Points
              </button>
            </div>

            <div class="relative h-[15rem] overflow-hidden">
              <div
                class="absolute inset-0 flex transition-transform duration-500 gap-2"
                :style="{ transform: `translateX(-${activeView * 101}%)` }"
              >
                <div class="min-w-full flex flex-col rounded-lg">
                  <h4 class="text-2xl max-sm:text-[1.1rem] font-bold mb-4">
                    Momentum Visa Infinite
                  </h4>
                  <div
                    class="flex gap-4 flex-col w-full items-center rounded-2xl bg-[#3e8e19] text-white p-4"
                  >
                    <div
                      class="flex gap-1 flex-col items-center border-b border-b-gray-200 w-full pb-4"
                    >
                      <p class="text-[2rem] font-bold">${{ bestCashback.rewards.toFixed(2) }}</p>
                      <p class="text-base text-gray-200 max-sm:text-[0.8rem]">
                        /Annual Rewards (Excluding Fees)
                      </p>
                    </div>
                    <div
                      class="flex w-full items-center justify-between text-base text-white"
                    >
                      <p>Value per rent dollar</p>
                      ${{ rewardDetails[bestCashback.cardId]?.ppd.toFixed(2) }}
                    </div>
                  </div>
                </div>

                <div class="min-w-full flex flex-col rounded-lg">
                  <h4 class="text-2xl max-sm:text-[1.1rem] font-bold mb-4">Aeroplan Reserve</h4>
                  <div
                    class="flex gap-4 flex-col w-full items-center rounded-2xl bg-[#3e8e19] text-white p-4"
                  >
                    <div
                      class="flex gap-1 flex-col items-center border-b border-b-gray-200 w-full pb-4"
                    >
                      <p class="text-[2rem] font-bold">${{ bestPointsCard.points.toFixed(2) }}</p>
                      <p class="text-base text-gray-200 max-sm:text-[0.8rem]">
                        /Annual Rewards (Excluding Fees)
                      </p>
                    </div>
                    <div
                      class="flex w-full items-center justify-between text-base text-white"
                    >
                      <p>Value per rent dollar</p>
                      ${{ rewardDetails[bestPointsCard.cardId]?.ppd.toFixed(2) }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p class="w-full text-base text-center mb-4 text-gray-600 text-balance">
            min(rent amount * 12, rewards threshold) * ppd * multiple + max(rent
            amount * 12 - threshold, 0) * ppd
          </p>
        </div>
        <button
          class="px-6 py-3 border border-black rounded-xl bg-black text-white text-[1.3rem] font-medium hover:-translate-y-2 hover:translate-x-1 transition-all w-max  max-sm:text-base max-sm:text-nowrap"
        >
          Start Earning
        </button>
      </div>
    </section>
    <section class="flex flex-col w-full items-center mt-[4rem] px-[5%] xl:px-[15%] bg-white py-[5rem]">
      <div class="flex flex-col gap-1 items-center">
        <h2 class="text-[3rem] max-md:text-[2rem] max-md:text-center font-bold">How it works?</h2>
        <p class="text-[1.5rem]  max-md:text-center max-md:text-[1.2rem] text-gray-600">
          Here's how you can unlock great rewards with your credit card!
        </p>
      </div>
      <div class="flex gap-6 items-center w-full mt-8 max-lg:flex-col">
        <div class="flex gap-6 items-center max-md:flex-col max-md:text-center max-md:text-balance">
          <img src="/cashback.webp" alt="a lady holding an intracard" class="w-[12rem] h-[12rem] rounded-3xl"></img>
          <div class="flex flex-col gap-2  max-w-[25rem] text-pretty">
            <h3 class="text-xl font-semibold text-[#3e8e19]">
              Cashback Benefits
            </h3>
            <ol>
              <li class="text-gray-600">
                <span class="font-bold text-black">Instant Savings:</span> Get a percentage of your spending back as
                cash, effectively reducing the cost of your purchases.
              </li>
              <li class="text-gray-600">
                <span class="font-bold text-black">Everyday Rewards:</span> Earn cashback on essential expenses like
                groceries, fuel, dining, and shopping.
              </li>
              <li class="text-gray-600">
                <span class="font-bold text-black">No Limits:</span> Continue earning cashback on all eligible purchases
                without caps or restrictions.
              </li>
            </ol>
          </div>
        </div>
        <div class="flex gap-6 items-center max-md:flex-col max-md:text-center max-md:text-balance">
          <img src="/rewards.jpg" alt="a lady holding an intracard" class="w-[12rem] h-[12rem] rounded-3xl"></img>
          <div class="flex flex-col gap-2  max-w-[25rem] text-pretty">
            <h3 class="text-xl font-semibold text-[#3e8e19]">
              Reward Points
            </h3>
            <ol>
              <li class="text-gray-600">
                <span class="font-bold text-black">Points for Every Dollar:</span> Earn points for every dollar spent
                using your credit card.
              </li>
              <li class="text-gray-600">
                <span class="font-bold text-black">Flexible Redemption:</span> Redeem points for a variety of rewards,
                including travel, merchandise, gift cards, and account
                credits.
              </li>
              <li class="text-gray-600">
                <span class="font-bold text-black">Accelerated Earnings:</span> Earn bonus points for spending in
                specific categories or during promotional periods.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <section class="flex flex-col w-full items-center mt-[4rem] px-[5%] xl:px-[15%] border-b border-b-gray-200 pb-[5rem]">
      <h2 class="text-[3rem] max-md:text-[2rem] max-md:text-center font-bold">Why Choose Our Platform?</h2>
      <div class="flex flex-col gap-6 items-center mt-3">
        <ul class="flex gap-6 mt-6 text-[1.2rem] max-sm:text-base max-sm:flex-wrap">
          <li class="flex flex-col text-center text-balance gap-4 items-center">
            <IconCentralized class="w-[4rem] h-[4rem]" />
            <p class=" text-gray-600">
              <span class="font-bold text-black">Centralized Management:</span> Track your rewards and spending effortlessly in one place.
            </p>
          </li>
          <li class="flex flex-col text-center text-balance gap-4 items-center">
            <IconOffer class="w-[4rem] h-[4rem]" />
            <p class=" text-gray-600">
              <span class="font-bold text-black">Exclusive Offers:</span> Access special deals and promotions for even more points and cashback opportunities.
            </p>
          </li>
          <li class="flex flex-col text-center text-balance gap-4 items-center">
            <IconNotification class="w-[4rem] h-[4rem]" />
            <p class=" text-gray-600">
              <span class="font-bold text-black">Smart Notifications:</span> Get reminders about expiring points or bonus-earning opportunities.
            </p>
          </li>
        </ul>
        <p class="text-[1.2rem] max-sm:text-base text-[#3e8e19] w-[80%] text-center mt-3"><span class="font-bold text-[#3e8e19]">Start earning while you spend!</span> With our platform, every transaction brings you closer to
          exciting rewards, helping you get more out of every purchase.
        </p>
        <a
          href=""
          class="px-6 py-3 border border-black rounded-xl bg-black text-white text-[1.3rem]  max-sm:text-base max-sm:text-nowrap font-medium hover:-translate-y-2 hover:translate-x-1 transition-all"
          >Get Started</a
        >
      </div>
    </section>
  </main>
</template>
