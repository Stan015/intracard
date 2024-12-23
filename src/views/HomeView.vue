<script setup lang="ts">
import IconArrowForward from "@/components/icons/IconArrowForward.vue";
import IconEnterArrow from "@/components/icons/IconEnterArrow.vue";
import IconSecurityLock from "@/components/icons/IconSecurityLock.vue";
import PlanCardComponent from "@/components/PlanCardComponent.vue";
</script>

<template>
  <main class="pt-[8rem] pb-[2rem]">
    <section
      class="flex gap-4 px-[15%] items-center min-h-[70dvh] flex-wrap justify-center lg:justify-between"
    >
      <div class="w-[24rem] flex flex-col gap-6">
        <a
          href=""
          class="flex items-center gap-2 w-[21rem] py-3 px-6 bg-action hover:bg-actionhover text-white transition-all rounded-full font-medium text-[1.2rem]"
        >
          2024 IntraCard Savings Report <IconArrowForward
        /></a>
        <h1 class="text-[2.7rem] font-bold leading-[2.6rem]">
          The Better Way to Save & Invest
        </h1>
        <p class="text-[1.3rem] text-gray-800">
          IntraCard helps over 5 million customers achieve their financial goals
          by helping them save and invest with ease.
        </p>
        <div class="flex gap-4 w-full">
          <a
            href=""
            class="px-6 py-3 border border-black rounded-xl bg-black text-white text-[1.3rem] font-medium hover:-translate-y-2 hover:translate-x-1 transition-all"
            >Get Started</a
          >
          <a
            href=""
            class="px-6 py-3 border border-black rounded-xl bg-black text-white text-[1.3rem] font-medium hover:-translate-y-2 hover:translate-x-1 transition-all"
            >Learn More</a
          >
        </div>
      </div>
      <div class="h-[34rem] w-[32rem] relative p-4">
        <img
          aria-hidden="true"
          src="/hero-img1.avif"
          alt="a lady using her phone"
          class="w-full h-full"
        />
        <img
          aria-hidden="true"
          src="/safelock.png"
          alt="a card"
          class="w-[12rem] h-[4rem] absolute top-20 -left-5"
        />
        <img
          aria-hidden="true"
          src="/flex.avif"
          alt="a card"
          class="w-[12rem] h-[5rem] absolute top-[13rem] -left-5"
        />
        <img
          aria-hidden="true"
          src="/intrabank.avif"
          alt="a card"
          class="w-[11rem] h-[5rem] absolute bottom-[4rem] -left-5"
        />
        <img
          aria-hidden="true"
          src="/target-save.png"
          alt="a card"
          class="w-[14rem] h-[5.5rem] absolute top-[3rem] -right-5"
        />
        <img
          aria-hidden="true"
          src="/investify.avif"
          alt="a card"
          class="w-[12rem] h-[4rem] absolute bottom-[12rem] -right-5"
        />
        <img
          aria-hidden="true"
          src="/housemoney.svg"
          alt="a card"
          class="w-[12rem] h-[4rem] absolute bottom-[2rem] -right-5"
        />
      </div>
    </section>
    <div class="flex px-[15%] gap-4 items-center w-full mb-14">
      <span
        class="flex items-center justify-center min-w-[7rem] min-h-[7rem] bg-white rounded-3xl"
      >
        <IconSecurityLock class="w-[4rem]" />
      </span>
      <div class="flex flex-col gap-2 w-[60%]">
        <h2 class="font-bold text-[1.2rem]">Your security is our priority</h2>
        <p>
          IntraCard uses the highest level of Internet Security and it is
          secured by 256 bits SSL security encryption to ensure that your
          information is completely protected from fraud.
        </p>
        <div class="flex items-center gap-2">
          <IconEnterArrow class="transform -scale-x-100" />
          <div class="relative group">
            <a href="" class="text-base py-1 font-semibold">
              More on our security measures
            </a>
            <span
              aria-hidden="true"
              class="block h-2 absolute bg-gray-400 -z-10 bottom-[0.1rem] w-0 group-hover:w-full transition-all duration-300"
            ></span>
          </div>
        </div>
      </div>
    </div>
    <section class="py-12 px-[7%] flex flex-col gap-14">
      <div class="flex flex-col gap-2 items-center">
        <h2 class="text-[3rem] font-bold">Many ways to build your savings</h2>
        <p class="text-[1.5rem]">
          Earn 12%-20% when you save with any of these IntraCard plans.
        </p>
      </div>
      <div
        class="flex flex-wrap w-full h-max items-center justify-center gap-8"
      >
        <PlanCardComponent
          title="Automated Savings"
          description="Build a dedicated savings faster on your terms, automatically or manually."
          href=""
          linkTitle="IntraBank"
          team-color="text-[rgb(0,51,153)]"
          hover-bg-color="hover:bg-[rgb(0,51,153)]"
          img-src="/card-img-1.avif"
        />
        <PlanCardComponent
          title="Fixed Savings"
          description="Lock money away for a fixed duration without having access to it until maturity. It's like having a custom fixed deposit."
          href=""
          linkTitle="Safelock"
          team-color="text-[rgb(50,150,255)]"
          hover-bg-color="hover:bg-[rgb(50,150,255)]"
          img-src="/safelock22.png"
        />
        <PlanCardComponent
          title="Goal-oriented Savings"
          description="Reach all your savings goals faster. Save towards multiple goals on your own or with a group."
          href=""
          linkTitle="Target Savings"
          team-color="text-[rgb(6,155,64)]"
          hover-bg-color="hover:bg-[rgb(6,155,64)]"
          img-src="/target-saving.avif"
        />
        <PlanCardComponent
          title="Flex Naira"
          description="Save, transfer, manage, organise, and withdraw your money at any time."
          href=""
          linkTitle="Flex Naira"
          team-color="text-[rgb(229,40,142)]"
          hover-bg-color="hover:bg-[rgb(229,40,142)]"
          img-src="/save-naira.avif"
        />
        <PlanCardComponent
          title="Flex Dollar"
          description="Save and grow your money in foreign currencies such as Dollars."
          href=""
          linkTitle="Flex Dollar"
          team-color="text-[rgb(12,24,37)]"
          hover-bg-color="hover:bg-[rgb(12,24,37)]"
          img-src="/flex-dollar.avif"
        />
        <PlanCardComponent
          title="HouseMoney"
          description="Plan for your rent and household expenses"
          href=""
          linkTitle="House Money"
          team-color="text-[rgb(255,120,60)]"
          hover-bg-color="hover:bg-[rgb(255,120,60)]"
          img-src="/house-money.png"
        />
      </div>
    </section>
    <section
      class="py-[10rem] px-[7%] w-full bg-white flex flex-col gap-14 items-center"
    >
      <div class="flex flex-col gap-2 items-center">
        <h2 class="text-[3rem] font-bold">Diverse ways to Invest</h2>
        <p class="text-[1.5rem]">
          Grow your money and invest for your future confidently.
        </p>
      </div>
      <div
        class="flex gap-4 w-[80%] h-[23rem] justify-between bg-[#7913e5] p-8 pb-0 rounded-3xl shadow-lg transition-all overflow-hidden relative"
      >
        <div class="h-full w-1/2 flex flex-col gap-4 pb-8 justify-between">
          <div class="flex flex-col gap-4">
            <h3 class="text-[2rem] font-bold transition-all text-white">
              Earn Up to 35% returns
            </h3>
            <p class="text-[1.2rem] text-gray-200 w-[55%] text-pretty">
              Invest securely and confidently on the go. Grow your money
              confidently by investing in pre-vetted investment opportunities.
            </p>
          </div>
          <div class="flex items-center gap-2 text-white">
            <IconEnterArrow class="transform -scale-x-100" />
            <div class="sticky group">
              <a href="" class="text-base py-1 font-semibold">
                Learn about Investments
              </a>
              <span
                aria-hidden="true"
                class="block h-[0.3rem] absolute bg-white -z-10 bottom-[0.05rem] w-0 group-hover:w-full transition-all duration-300"
              ></span>
            </div>
          </div>
        </div>
        <img
          src="/iphoneInvest.avif"
          alt="card img"
          class="block w-[25rem] h-full"
        />
      </div>
    </section>
    <section
      class="py-[10rem] px-[7%] w-full flex flex-col gap-14 items-center"
    >
      <div class="flex flex-col gap-2 items-center">
        <h2 class="text-[3rem] font-bold">Meet Our Saver of the Month</h2>
        <p class="text-[1.5rem] w-[60%] text-center">
          Every month, we shine a spotlight on one saver, asking them about
          their savings culture and how Piggyvest has helped them.
        </p>
      </div>
      <div
        class="flex gap-4 w-max h-max border-8 border-white justify-between rounded-3xl shadow-lg transition-all overflow-hidden relative"
      >
        <iframe
          class="w-[40rem] h-[22.5rem]"
          src="https://www.youtube.com/embed/y_4Kv_Xy7vs?autoplay=1&mute=1&si=dAor-IidnS3kcBhe"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        >
        </iframe>
      </div>
    </section>
    <section
      class="w-full px-[15%] py-[2rem] flex flex-wrap gap-8 items-center justify-center"
    >
      <img
        src="/fallbackImg.png"
        alt="feedback"
        class="w-[30rem] h-[30rem] max-md:w-[20rem] max-md:h-[25rem] max-sm:w-[18rem] max-sm:h-[20rem]"
      />
      <div class="w-[40%]">
        <h2 class="font-semibold text-[1.8rem] leading-8 mb-6">
          Join 5+ million people who save and invest with us
        </h2>
        <div class="flex gap-4 w-full">
          <a
            href=""
            class="px-6 py-3 border border-black rounded-xl bg-black text-white text-[1.3rem] font-medium hover:-translate-y-2 hover:translate-x-1 transition-all"
            >Get Started</a
          >
          <a
            href=""
            class="px-6 py-3 border border-black rounded-xl bg-black text-white text-[1.3rem] font-medium hover:-translate-y-2 hover:translate-x-1 transition-all"
            >Learn More</a
          >
        </div>
      </div>
    </section>
    <section
      class="w-full px-[15%] py-[5rem] flex flex-wrap gap-4 items-center justify-center"
    >
      <h2 class="font-semibold text-[1.8rem]">As featured in</h2>
      <div class="w-full flex gap-4 items-center justify-center">
        <a href=""
          ><img src="/techcabal.png" alt="comp logo" class="w-[6rem] h-[3rem]"
        /></a>
        <a href=""
          ><img src="/cnbc.png" alt="comp logo" class="w-[5rem] h-[3rem]"
        /></a>
        <a href=""
          ><img src="/techcrunch.png" alt="comp logo" class="w-[6rem] h-[3rem]"
        /></a>
        <a href=""
          ><img src="/pym.svg" alt="comp logo" class="w-[6rem] h-[3rem]"
        /></a>
        <a href=""
          ><img src="/fastcom.svg" alt="comp logo" class="w-[7rem] h-[4rem]"
        /></a>
        <a href=""
          ><img src="/cio.svg" alt="comp logo" class="w-[4rem] h-[3rem]"
        /></a>
      </div>
    </section>
  </main>
</template>
