<template>
  <div class="flex flex-wrap max-w-xl mx-auto bg-gray-100">
    <!-- Cover -->
    <div
      id="theapka-cover"
      class="w-full h-[650px] lg:h-[750px] relative bg-center bg-cover bg-no-repeat"
      :style="{ backgroundImage: `url('${coverImage}')` }"
    >
      <div
        class="w-full h-full opacity-50 bg-gradient-to-b from-gray-500 to-transparent"
      ></div>
      <div
        class="absolute inset-0 flex flex-col pt-12 text-center text-white font-moulpali"
      >
        <div class="drop-shadow-xl text-2xl lg:text-4xl">
          សិរីមង្គលអាពាហ៍ពិពាហ៍
        </div>
        <div class="mt-10 text-3xl lg:text-5xl font-dangrek">
          <div>{{ groomName }}</div>
          <img
            :src="heart"
            alt="hearts"
            class="h-12 lg:h-20 mx-auto my-4"
          />
          <div>{{ brideName }}</div>
        </div>
        <div class="flex-1"></div>
        <div class="max-w-xs mx-auto mb-16 text-lg lg:text-xl">
          <span>សូមគោរពអញ្ជើញ</span>
        </div>
        <!-- Date & Add to Calendar -->
        <div
          class="pb-3 text-base lg:text-2xl font-dangrek bg-gradient-to-t from-gray-900 to-transparent"
        >
          <div>
            <span>{{ formattedDate }}</span>
          </div>
          <div class="my-2 text-lg">{{ location }}</div>
        </div>
      </div>
    </div>

    <!-- Invitation Text -->
    <div class="w-full py-12 text-center bg-white">
      <img
        :src="header_3"
        class="h-6 mx-auto"
        alt=""
      />
      <div class="my-8 text-xl lg:text-2xl font-moulpali">
        យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញ
      </div>
      <div class="px-5 text-sm lg:text-base leading-8 font-kantumruy">
        ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា<br />
        អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធិពរជ័យ<br />
        សិរីសួស្តី ជ័យមង្គល ក្នុងពិធីអាពាហ៍ពិពាហ៍ របស់យើងខ្ញុំទាំងពីរ។
      </div>
      <img
        :src='header_4'
        class="h-6 mx-auto mt-8"
        alt=""
      />
    </div>

    <!-- Schedule Background -->
    <div
      id="theapka-schedule-background"
      class="w-full h-[750px] lg:h-[850px] bg-center bg-cover relative"
      :style="{ backgroundImage: `url('${scheduleImage}')` }"
    >
      <div class="absolute inset-0 bg-white opacity-50"></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center text-black">
          <div class="text-2xl lg:text-3xl font-moulpali mb-8">
            កម្មវិធីមង្គលអាពាហ៍ពិពាហ៍
          </div>
          <a
            :href="mapLink"
            target="_blank"
            class="text-lg lg:text-xl font-bold underline"
            >{{ location }}</a
          >
        </div>
      </div>
    </div>

    <!-- Location -->
    <div class="w-full py-12 text-center bg-white">
      <div class="text-xl font-moulpali mb-6">ទីតាំងកម្មវិធីមង្គល</div>
      <div class="font-dangrek text-lg mb-4">{{ location }}</div>
      <div class="flex justify-center my-6">
        <!-- QR Code will be added here -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="250"
          height="250"
          viewBox="0 0 250 250"
        >
          <rect width="250" height="250" fill="#ffffff" />
          <g transform="scale(8.621)">
            <path
              fill="#000"
              d="M9 0.25L9 0.75A0.25 0.25 0 0 1 8.75 1L8.25 1A0.25 0.25 0 0 0 8 1.25L8 1.75A0.25 0.25 0 0 0 8.25 2L8.75 2A0.25 0.25 0 0 1 9 2.25L9 2.75A0.25 0.25 0 0 1 8.75 3L8.25 3A0.25 0.25 0 0 0 8 3.25L8 3.75A0.25 0.25 0 0 0 8.25 4L9.75 4A0.25 0.25 0 0 1 10 4.25L10 6.75A0.25 0.25 0 0 0 10.25 7L10.75 7A0.25 0.25 0 0 0 11 6.75L11 4.25A0.25 0.25 0 0 1 11.25 4L11.75 4A0.25 0.25 0 0 1 12 4.25L12 4.75A0.25 0.25 0 0 0 12.25 5L12.75 5A0.25 0.25 0 0 1 13 5.25L13 5.75A0.25 0.25 0 0 1 12.75 6L12.25 6A0.25 0.25 0 0 0 12 6.25L12 8.75A0.25 0.25 0 0 0 12.25 9L14.75 9A0.25 0.25 0 0 1 15 9.25L15 10.75A0.25 0.25 0 0 0 15.25 11L16.75 11A0.25 0.25 0 0 1 17 11.25L17 11.75A0.25 0.25 0 0 1 16.75 12L15.25 12A0.25 0.25 0 0 0 15 12.25L15 12.75A0.25 0.25 0 0 0 15.25 13L15.75 13A0.25 0.25 0 0 1 16 13.25L16 13.75A0.25 0.25 0 0 1 15.75 14L14.25 14A0.25 0.25 0 0 1 14 13.75L14 13.25A0.25 0.25 0 0 0 13.75 13L12.25 13A0.25 0.25 0 0 1 12 12.75L12 11.25A0.25 0.25 0 0 1 12.25 11L12.75 11A0.25 0.25 0 0 0 13 10.75L13 10.25A0.25 0.25 0 0 0 12.75 10L11.25 10A0.25 0.25 0 0 0 11 10.25L11 10.75A0.25 0.25 0 0 1 10.75 11L10.25 11A0.25 0.25 0 0 1 10 10.75L10 9.25A0.25 0.25 0 0 1 10.25 9L10.75 9A0.25 0.25 0 0 0 11 8.75L11 8.25A0.25 0.25 0 0 0 10.75 8L6.25 8A0.25 0.25 0 0 0 6 8.25L6 8.75A0.25 0.25 0 0 1 5.75 9L5.25 9A0.25 0.25 0 0 1 5 8.75L5 8.25A0.25 0.25 0 0 0 4.75 8L0.25 8A0.25 0.25 0 0 0 0 8.25L0 10.75A0.25 0.25 0 0 0 0.25 11L0.75 11A0.25 0.25 0 0 1 1 11.25L1 11.75A0.25 0.25 0 0 1 0.75 12L0.25 12A0.25 0.25 0 0 0 0 12.25L0 12.75A0.25 0.25 0 0 0 0.25 13L0.75 13A0.25 0.25 0 0 1 1 13.25L1 13.75A0.25 0.25 0 0 0 1.25 14L3.75 14A0.25 0.25 0 0 1 4 14.25L4 14.75A0.25 0.25 0 0 0 4.25 15L8.75 15A0.25 0.25 0 0 0 9 14.75L9 14.25A0.25 0.25 0 0 1 9.25 14L9.75 14A0.25 0.25 0 0 1 10 14.25L10 15.75A0.25 0.25 0 0 1 9.75 16L9.25 16A0.25 0.25 0 0 0 9 16.25L9 16.75A0.25 0.25 0 0 0 9.25 17L9.75 17A0.25 0.25 0 0 1 10 17.25L10 17.75A0.25 0.25 0 0 1 9.75 18L9.25 18A0.25 0.25 0 0 0 9 18.25L9 18.75A0.25 0.25 0 0 1 8.75 19L7.25 19A0.25 0.25 0 0 1 7 18.75L7 18.25A0.25 0.25 0 0 0 6.75 18L5.25 18A0.25 0.25 0 0 1 5 17.75L5 17.25A0.25 0.25 0 0 1 5.25 17L7.75 17A0.25 0.25 0 0 0 8 16.75L8 16.25A0.25 0.25 0 0 0 7.75 16L3.25 16A0.25 0.25 0 0 1 3 15.75L3 15.25A0.25 0.25 0 0 0 2.75 15L1.25 15A0.25 0.25 0 0 0 1 15.25L1 15.75A0.25 0.25 0 0 1 0.75 16L0.25 16A0.25 0.25 0 0 0 0 16.25L0 20.75A0.25 0.25 0 0 0 0.25 21L0.75 21A0.25 0.25 0 0 0 1 20.75L1 17.25A0.25 0.25 0 0 1 1.25 17L1.75 17A0.25 0.25 0 0 1 2 17.25L2 17.75A0.25 0.25 0 0 0 2.25 18L3.75 18A0.25 0.25 0 0 1 4 18.25L4 18.75A0.25 0.25 0 0 0 4.25 19L6.75 19A0.25 0.25 0 0 1 7 19.25L7 19.75A0.25 0.25 0 0 1 6.75 20L6.25 20A0.25 0.25 0 0 0 6 20.25L6 20.75A0.25 0.25 0 0 0 6.25 21L7.75 21A0.25 0.25 0 0 1 8 21.25L8 22.75A0.25 0.25 0 0 0 8.25 23L9.75 23A0.25 0.25 0 0 1 10 23.25L10 23.75A0.25 0.25 0 0 1 9.75 24L8.25 24A0.25 0.25 0 0 0 8 24.25L8 28.75A0.25 0.25 0 0 0 8.25 29L9.75 29A0.25 0.25 0 0 0 10 28.75L10 28.25A0.25 0.25 0 0 1 10.25 28L10.75 28A0.25 0.25 0 0 1 11 28.25L11 28.75A0.25 0.25 0 0 0 11.25 29L11.75 29A0.25 0.25 0 0 0 12 28.75L12 27.25A0.25 0.25 0 0 1 12.25 27L12.75 27A0.25 0.25 0 0 0 13 26.75L13 26.25A0.25 0.25 0 0 0 12.75 26L11.25 26A0.25 0.25 0 0 0 11 26.25L11 26.75A0.25 0.25 0 0 1 10.75 27L10.25 27A0.25 0.25 0 0 0 10 27.25L10 27.75A0.25 0.25 0 0 1 9.75 28L9.25 28A0.25 0.25 0 0 1 9 27.75L9 25.25A0.25 0.25 0 0 1 9.25 25L9.75 25A0.25 0.25 0 0 0 10 24.75L10 24.25A0.25 0.25 0 0 1 10.25 24L10.75 24A0.25 0.25 0 0 0 11 23.75L11 21.25A0.25 0.25 0 0 1 11.25 21L11.75 21A0.25 0.25 0 0 1 12 21.25L12 21.75A0.25 0.25 0 0 0 12.25 22L12.75 22A0.25 0.25 0 0 1 13 22.25L13 22.75A0.25 0.25 0 0 1 12.75 23L12.25 23A0.25 0.25 0 0 0 12 23.25L12 24.75A0.25 0.25 0 0 0 12.25 25L12.75 25A0.25 0.25 0 0 0 13 24.75L13 24.25A0.25 0.25 0 0 1 13.25 24L13.75 24A0.25 0.25 0 0 1 14 24.25L14 24.75A0.25 0.25 0 0 0 14.25 25L14.75 25A0.25 0.25 0 0 1 15 25.25L15 26.75A0.25 0.25 0 0 1 14.75 27L14.25 27A0.25 0.25 0 0 0 14 27.25L14 27.75A0.25 0.25 0 0 0 14.25 28L14.75 28A0.25 0.25 0 0 1 15 28.25L15 28.75A0.25 0.25 0 0 0 15.25 29L16.75 29A0.25 0.25 0 0 0 17 28.75L17 28.25A0.25 0.25 0 0 1 17.25 28L17.75 28A0.25 0.25 0 0 1 18 28.25L18 28.75A0.25 0.25 0 0 0 18.25 29L22.75 29A0.25 0.25 0 0 0 23 28.75L23 28.25A0.25 0.25 0 0 0 22.75 28L22.25 28A0.25 0.25 0 0 1 22 27.75L22 26.25A0.25 0.25 0 0 1 22.25 26L22.75 26A0.25 0.25 0 0 1 23 26.25L23 26.75A0.25 0.25 0 0 0 23.25 27L23.75 27A0.25 0.25 0 0 0 24 26.75L24 25.25A0.25 0.25 0 0 1 24.25 25L24.75 25A0.25 0.25 0 0 0 25 24.75L25 23.25A0.25 0.25 0 0 1 25.25 23L25.75 23A0.25 0.25 0 0 1 26 23.25L26 24.75A0.25 0.25 0 0 0 26.25 25L28.75 25A0.25 0.25 0 0 0 29 24.75L29 23.25A0.25 0.25 0 0 0 28.75 23L27.25 23A0.25 0.25 0 0 1 27 22.75L27 22.25A0.25 0.25 0 0 1 27.25 22L27.75 22A0.25 0.25 0 0 0 28 21.75L28 20.25A0.25 0.25 0 0 1 28.25 20L28.75 20A0.25 0.25 0 0 0 29 19.75L29 19.25A0.25 0.25 0 0 0 28.75 19L27.25 19A0.25 0.25 0 0 1 27 18.75L27 18.25A0.25 0.25 0 0 0 26.75 18L26.25 18A0.25 0.25 0 0 1 26 17.75L26 17.25A0.25 0.25 0 0 0 25.75 17L24.25 17A0.25 0.25 0 0 1 24 16.75L24 16.25A0.25 0.25 0 0 1 24.25 16L24.75 16A0.25 0.25 0 0 0 25 15.75L25 15.25A0.25 0.25 0 0 1 25.25 15L26.75 15A0.25 0.25 0 0 1 27 15.25L27 15.75A0.25 0.25 0 0 0 27.25 16L28.75 16A0.25 0.25 0 0 0 29 15.75L29 14.25A0.25 0.25 0 0 0 28.75 14L28.25 14A0.25 0.25 0 0 1 28 13.75L28 13.25A0.25 0.25 0 0 0 27.75 13L27.25 13A0.25 0.25 0 0 0 27 13.25L27 13.75A0.25 0.25 0 0 1 26.75 14L26.25 14A0.25 0.25 0 0 1 26 13.75L26 13.25A0.25 0.25 0 0 0 25.75 13L25.25 13A0.25 0.25 0 0 0 25 13.25L25 14.75A0.25 0.25 0 0 1 24.75 15L21.25 15A0.25 0.25 0 0 1 21 14.75L21 14.25A0.25 0.25 0 0 1 21.25 14L23.75 14A0.25 0.25 0 0 0 24 13.75L24 12.25A0.25 0.25 0 0 1 24.25 12L25.75 12A0.25 0.25 0 0 0 26 11.75L26 11.25A0.25 0.25 0 0 1 26.25 11L26.75 11A0.25 0.25 0 0 0 27 10.75L27 10.25A0.25 0.25 0 0 1 27.25 10L27.75 10A0.25 0.25 0 0 0 28 9.75L28 8.25A0.25 0.25 0 0 0 27.75 8L27.25 8A0.25 0.25 0 0 0 27 8.25L27 9.75A0.25 0.25 0 0 1 26.75 10L26.25 10A0.25 0.25 0 0 1 26 9.75L26 8.25A0.25 0.25 0 0 0 25.75 8L25.25 8A0.25 0.25 0 0 0 25 8.25L25 10.75A0.25 0.25 0 0 1 24.75 11L22.25 11A0.25 0.25 0 0 1 22 10.75L22 10.25A0.25 0.25 0 0 1 22.25 10L23.75 10A0.25 0.25 0 0 0 24 9.75L24 8.25A0.25 0.25 0 0 0 23.75 8L23.25 8A0.25 0.25 0 0 0 23 8.25L23 8.75A0.25 0.25 0 0 1 22.75 9L22.25 9A0.25 0.25 0 0 1 22 8.75L22 8.25A0.25 0.25 0 0 0 21.75 8L20.25 8A0.25 0.25 0 0 1 20 7.75L20 7.25A0.25 0.25 0 0 1 20.25 7L20.75 7A0.25 0.25 0 0 0 21 6.75L21 6.25A0.25 0.25 0 0 0 20.75 6L20.25 6A0.25 0.25 0 0 1 20 5.75L20 5.25A0.25 0.25 0 0 1 20.25 5L20.75 5A0.25 0.25 0 0 0 21 4.75L21 2.25A0.25 0.25 0 0 0 20.75 2L20.25 2A0.25 0.25 0 0 1 20 1.75L20 1.25A0.25 0.25 0 0 1 20.25 1L20.75 1A0.25 0.25 0 0 0 21 0.75L21 0.25A0.25 0.25 0 0 0 20.75 0L20.25 0A0.25 0.25 0 0 0 20 0.25L20 0.75A0.25 0.25 0 0 1 19.75 1L16.25 1A0.25 0.25 0 0 1 16 0.75L16 0.25A0.25 0.25 0 0 0 15.75 0L14.25 0A0.25 0.25 0 0 0 14 0.25L14 0.75A0.25 0.25 0 0 1 13.75 1L11.25 1A0.25 0.25 0 0 0 11 1.25L11 1.75A0.25 0.25 0 0 1 10.75 2L10.25 2A0.25 0.25 0 0 1 10 1.75L10 0.25A0.25 0.25 0 0 0 9.75 0L9.25 0A0.25 0.25 0 0 0 9 0.25ZM0 0L7 0L7 7L0 7ZM1 1L1 6L6 6L6 1ZM5 3.5A1.5 1.5 0 0 1 3.5 5A1.5 1.5 0 0 1 2 3.5A1.5 1.5 0 0 1 3.5 2A1.5 1.5 0 0 1 5 3.5ZM22 0L29 0L29 7L22 7ZM23 1L23 6L28 6L28 1ZM27 3.5A1.5 1.5 0 0 1 25.5 5A1.5 1.5 0 0 1 24 3.5A1.5 1.5 0 0 1 25.5 2A1.5 1.5 0 0 1 27 3.5ZM0 22L7 22L7 29L0 29ZM1 23L1 28L6 28L6 23ZM5 25.5A1.5 1.5 0 0 1 3.5 27A1.5 1.5 0 0 1 2 25.5A1.5 1.5 0 0 1 3.5 24A1.5 1.5 0 0 1 5 25.5Z"
            />
          </g>
        </svg>
      </div>
      <a :href="mapLink" target="_blank" class="text-blue-600 underline">
        {{ mapLink }}
      </a>
    </div>

    <!-- Thank You -->
    <div
      id="theapka-thank-you"
      class="w-full h-[750px] bg-center bg-cover relative"
      :style="{ backgroundImage: `url('${thankYouImage}')` }"
    >
      <div class="absolute inset-0 bg-white opacity-30"></div>
      <div class="absolute inset-0 flex items-center justify-center px-4">
        <div
          class="max-w-xl p-6 text-center text-white bg-black bg-opacity-40 rounded-2xl"
        >
          <img
            :src="thank_git"
            class="h-24 mx-auto"
            alt="Thank you"
          />
          <div class="mt-6 text-lg lg:text-2xl font-dangrek leading-9">
            វត្តមានឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា<br />
            ជាកិត្តិយសដ៏ឧត្តុង្គឧត្តម ចំពោះគ្រួសាររបស់យើងខ្ញុំ។
          </div>
          <div class="flex justify-center gap-2 mt-6">
            <img
              :src="flower_2"
              class="h-12"
              alt=""
            />
            <img
              :src="flower_2"
              class="h-12"
              alt=""
            />
            <img
             :src="flower_2"
              class="h-12"
              alt=""
            />
            <img
              :src="flower_2"
              class="h-12"
              alt=""
            />
            <img
              :src="flower_2"
              class="h-12"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from "vue";

  // Data
  const groomName = ref("ង៉ុយទ្រី លីហួរ");
  const brideName = ref("ជិន ស្រីរតន៍");
  const eventDate = ref("2026-01-25 16:00:00");
  const location = ref("ភ្នំពេញ");
  const mapLink = ref("https://goo.gl/maps/m6QhfxtiAx7g51yy6");

  import image_1 from '../assets/images/image_1.jpg'; // import the image
  import image_2 from '../assets/images/image_2.jpg'; // import the image
  import image_3 from '../assets/images/image_3.jpg'; // import the image
  import hearts from '../assets/images/2hearts.gif'; // import the image
  import header3 from '../assets/images/header_3.png'; // import the image
  import header4 from '../assets/images/header_4.png'; // import the image
  import thank from '../assets/images/thank.gif'; // import the image
  import flowerGit from '../assets/images/flower_2.gif'; // import the image

  // Images+
  const coverImage = ref(
    image_1
  );
  const scheduleImage = ref(
    image_2
  );
  const thankYouImage = ref(
    image_3
  );
  const heart = ref(
    hearts
  );
  const header_4 = ref(
    header4
  );
  const header_3 = ref(
    header3
  );
  const thank_git = ref(
    thank
  );
  const flower_2 = ref(
    flowerGit
  );


  // Helper function to convert numbers to Khmer numerals
  const convertToKhmerNumerals = (number) => {
    const khmerNumerals = ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"];
    return number
      .toString()
      .split("")
      .map((d) => khmerNumerals[d] || d)
      .join("");
  };

  // Replace numbers in text with Khmer numerals
  const replaceNumbersWithKhmer = (text) => {
    return text
      .split("")
      .map((c) => {
        const d = parseInt(c, 10);
        return isNaN(d) ? c : convertToKhmerNumerals(d);
      })
      .join("");
  };

  // Formatted date with Khmer numerals - simplified version
  const formattedDate = computed(() => {
    // Create date object
    const date = new Date(eventDate.value);

    // Define Khmer month names
    const khmerMonths = [
      "មករា",
      "កុម្ភៈ",
      "មីនា",
      "មេសា",
      "ឧសភា",
      "មិថុនា",
      "កក្កដា",
      "សីហា",
      "កញ្ញា",
      "តុលា",
      "វិច្ឆិកា",
      "ធ្នូ",
    ];

    // Define Khmer day names
    const khmerDays = [
      "អាទិត្យ",
      "ច័ន្ទ",
      "អង្គារ",
      "ពុធ",
      "ព្រហស្បតិ៍",
      "សុក្រ",
      "សៅរ៍",
    ];

    const day = khmerDays[date.getDay()];
    const dayNumber = date.getDate();
    const month = khmerMonths[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const period = hours >= 12 ? "ល្ងាច" : "ព្រឹក";
    const formattedHours = hours > 12 ? hours - 12 : hours;

    return `ថ្ងៃ${day} ទី ${convertToKhmerNumerals(
      dayNumber
    )} ខែ${month} ឆ្នាំ${convertToKhmerNumerals(
      year
    )} ម៉ោង ${convertToKhmerNumerals(formattedHours)}:${convertToKhmerNumerals(
      minutes
    )} ${period}`;
  });
</script>

<style scoped>
    @keyframes breathing {
          0%, 100% { transform: scale(1); box-shadow: 0 4px 15px 0 rgba(236, 72, 153, 0.4); }
          50% { transform: scale(1.05); box-shadow: 0 6px 20px 0 rgba(236, 72, 153, 0.6); }
      }
      .animate-breathing { animation: breathing 2.5s ease-in-out infinite; }
      [x-cloak] { display: none !important; }
      ::-webkit-scrollbar { width: 10px; }
      ::-webkit-scrollbar-track { background: #f1f1f1; }
      ::-webkit-scrollbar-thumb { background: #888; border-radius: 5px; }
      ::-webkit-scrollbar-thumb:hover { background: #555; }
</style>