<script setup lang="ts">
import IconArrowForward from "@/components/icons/IconArrowForward.vue";
import IconEnterArrow from "@/components/icons/IconEnterArrow.vue";
import IconSecurityLock from "@/components/icons/IconSecurityLock.vue";
import PlanCardComponent from "@/components/PlanCardComponent.vue";
</script>

<template>
  <main class="pt-[8rem] pb-[2rem]">
    <section
      class="flex gap-4 px-[5%] xl:px-[15%] items-center min-h-[70dvh] flex-wrap justify-center lg:justify-between max-lg:mt-[3rem]"
    >
      <div
        class="w-[24rem] max-sm:w-full flex flex-col gap-6 max-lg:w-[80%] max-lg:items-center max-lg:text-center max-lg:text-balance"
      >
        <a
          href=""
          class="flex items-center gap-2 w-[21rem] py-3 px-6 bg-action hover:bg-actionhover text-white transition-all rounded-full font-medium text-[1.2rem] max-sm:w-[19rem] max-sm:text-base"
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
        <div
          class="flex gap-4 w-full max-lg:items-center max-lg:justify-center"
        >
          <a
            href=""
            class="px-6 py-3 border border-black rounded-xl bg-black text-white text-[1.3rem] max-sm:text-base max-sm:text-nowrap font-medium hover:-translate-y-2 hover:translate-x-1 transition-all"
            >Get Started</a
          >
          <a
            href=""
            class="px-6 py-3 border border-black rounded-xl bg-black text-white text-[1.3rem] max-sm:text-base max-sm:text-nowrap font-medium hover:-translate-y-2 hover:translate-x-1 transition-all"
            >Learn More</a
          >
        </div>
      </div>
      <div
        class="bounce h-[34rem] w-[32rem] max-md:w-[25rem] max-md:h-[28rem] max-sm:w-[20rem] relative p-4"
      >
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
          class="moveUp w-[12rem] h-[4rem] max-md:w-[10rem] max-sm:w-[8rem] max-sm:h-[3rem] absolute top-20 -left-5"
        />
        <img
          aria-hidden="true"
          src="/flex.avif"
          alt="a card"
          class="moveUp w-[12rem] h-[5rem] max-md:w-[10rem] max-md:h-[4rem] max-sm:w-[8rem] max-sm:h-[3rem] absolute top-[13rem] -left-5"
        />
        <img
          aria-hidden="true"
          src="/intrabank.avif"
          alt="a card"
          class="moveUp w-[11rem] h-[5rem] max-md:w-[9rem] max-md:h-[3.5rem] max-sm:w-[7rem] max-sm:h-[3rem] absolute bottom-[4rem] -left-5"
        />
        <img
          aria-hidden="true"
          src="/target-save.png"
          alt="a card"
          class="moveUp w-[14rem] h-[5.5rem] max-md:w-[12rem] max-md:h-[4rem] max-sm:w-[10rem] max-sm:h-[3.5rem] absolute top-[3rem] -right-5"
        />
        <img
          aria-hidden="true"
          src="/investify.avif"
          alt="a card"
          class="moveUp w-[12rem] h-[4rem] max-md:w-[10rem] max-md:h-[3rem] max-sm:w-[8rem] absolute bottom-[12rem] -right-5"
        />
        <img
          aria-hidden="true"
          src="/housemoney.svg"
          alt="a card"
          class="moveUp w-[12rem] h-[4rem] max-md:w-[10rem] max-md:h-[3rem] max-sm:w-[7rem] absolute bottom-[2rem] -right-5"
        />
      </div>
    </section>
    <div class="flex px-[5%] xl:px-[15%] max-md:justify-center max-sm:flex-col max-sm:text-center max-sm:text-balance gap-4 items-center w-full mb-14">
      <span
        class="flex items-center justify-center min-w-[7rem] min-h-[7rem] bg-white rounded-3xl"
      >
        <IconSecurityLock class="w-[4rem]" />
      </span>
      <div class="flex flex-col gap-2 w-[60%] max-sm:w-full">
        <h2 class="font-bold text-[1.2rem]">Your security is our priority</h2>
        <p>
          IntraCard uses the highest level of Internet Security and it is
          secured by 256 bits SSL security encryption to ensure that your
          information is completely protected from fraud.
        </p>
        <div class="flex items-center max-md:justify-center gap-2">
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
    <section class="py-12 px-[5%] flex flex-col gap-14">
      <div class="flex flex-col gap-2 items-center">
        <h2 class="text-[3rem] max-md:text-[2rem] max-md:text-center font-bold">Many ways to build your savings</h2>
        <p class="text-[1.5rem] max-md:text-center max-md:text-[1.2rem]">
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
        <h2 class="text-[3rem] max-md:text-[2rem] max-md:text-center font-bold">Diverse ways to Invest</h2>
        <p class="text-[1.5rem] max-md:text-center max-md:text-[1.2rem]">
          Grow your money and invest for your future confidently.
        </p>
      </div>
      <div
        class="flex gap-4 w-[80%] max-md:w-full max-md:flex-col h-[23rem] max-md:h-max justify-between bg-[#7913e5] p-8 pb-0 rounded-3xl shadow-lg transition-all overflow-hidden relative"
      >
        <div class="h-full w-1/2 max-md:w-full flex flex-col gap-4 pb-8 justify-between">
          <div class="flex flex-col gap-4">
            <h3 class="text-[2rem] max-md:text-[1.5rem] max-md:text-center font-bold transition-all text-white">
              Earn Up to 35% returns
            </h3>
            <p class="text-[1.2rem] text-gray-200 w-[55%] max-md:w-full max-md:text-center text-pretty">
              Invest securely and confidently on the go. Grow your money
              confidently by investing in pre-vetted investment opportunities.
            </p>
          </div>
          <div class="flex items-center max-md:justify-center gap-2 text-white">
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
    <section class="py-[10rem] px-[7%] w-full flex items-center justify-center">
      <div
        class="flex flex-col gap-4 items-center bg-[#65b338] p-8 rounded-3xl shadow-lg transition-all"
      >
        <h2 class="text-[3rem] max-md:text-[2rem] max-md:text-center font-bold leading-10">
          How much can I earn on my rent?
        </h2>
        <p class="text-[1.5rem] max-md:text-center max-md:text-[1.2rem]">
          Click the button bellow to calculate your rewards.
        </p>
        <a
          href="/rewards"
          class="px-6 py-3 border border-black rounded-xl bg-black text-white text-[1.3rem] max-sm:text-base max-sm:text-nowrap font-medium hover:-translate-y-2 hover:translate-x-1 transition-all"
          >Calculate Now</a
        >
      </div>
    </section>
    <section
      class="pb-[10rem] px-[7%] w-full flex flex-col gap-14 items-center"
    >
      <div class="flex flex-col gap-2 items-center">
        <h2 class="text-[3rem] max-md:text-[2rem] max-md:text-center font-bold">Meet Our Saver of the Month</h2>
        <p class="text-[1.5rem] w-[60%]  max-md:text-center max-md:text-[1.2rem] max-md:w-full text-center">
          Every month, we shine a spotlight on one saver, asking them about
          their savings culture and how Piggyvest has helped them.
        </p>
      </div>
      <div
        class="flex gap-4 w-max h-max border-8 border-white justify-between rounded-3xl shadow-lg transition-all overflow-hidden relative"
      >
        <iframe
          class="w-[40rem] h-[22.5rem] max-md:w-[25rem] max-md:h-[15rem] max-sm:w-[18rem] max-sm:h-[12rem]"
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
      class="w-full px-[5%] xl:px-[15%] py-[2rem] flex flex-wrap gap-8 items-center justify-center"
    >
      <img
        src="/fallbackImg.png"
        alt="feedback"
        class="w-[30rem] h-[30rem] max-md:w-[20rem] max-md:h-[25rem] max-sm:w-[18rem] max-sm:h-[20rem]"
      />
      <div class="w-[40%] max-lg:w-full">
        <h2 class="font-semibold text-[1.8rem] max-md:text-[1.5rem] max-lg:text-center leading-8 mb-6">
          Join 5+ million people who save and invest with us
        </h2>
        <div class="flex gap-4 w-full max-lg:justify-center">
          <a
            href=""
            class="px-6 py-3 border border-black rounded-xl bg-black text-white text-[1.3rem] max-sm:text-base max-sm:text-nowrap font-medium hover:-translate-y-2 hover:translate-x-1 transition-all"
            >Get Started</a
          >
          <a
            href=""
            class="px-6 py-3 border border-black rounded-xl bg-black text-white text-[1.3rem] max-sm:text-base max-sm:text-nowrap font-medium hover:-translate-y-2 hover:translate-x-1 transition-all"
            >Learn More</a
          >
        </div>
      </div>
    </section>
    <section
      class="w-full px-[5%] xl:px-[15%] py-[5rem] flex flex-wrap gap-4 items-center justify-center"
    >
      <h2 class="font-semibold text-[1.8rem]">As featured in</h2>
      <div class="w-full flex flex-wrap gap-4 items-center justify-center">
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

<style scoped>
@keyframes bottomToTop {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}

.moveUp {
  animation: bottomToTop 0.5s ease-in-out;
}

.moveUp:nth-child(3) {
  animation-delay: 0.1s;
}

.moveUp:nth-child(4) {
  animation-delay: 0.2s;
}

.moveUp:nth-child(6) {
  animation-delay: 0.3s;
}

.moveUp:nth-child(7) {
  animation-delay: 0.4s;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5%);
  }
  100% {
    transform: translateY(0);
  }
}

.bounce {
  animation: bounce 4s infinite;

  &:hover {
    animation: none;
  }
}
</style>
