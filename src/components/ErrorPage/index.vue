<template>
  <div class="h-screen flex flex-col t-bg-white">
    <main class="flex-grow flex flex-col justify-center items-center max-w-7xl w-full mx-auto px-4 lg:px-8">
      <div class="flex-shrink-0 flex justify-center">
        <div class="inline-flex">
          <img class="w-auto image-error" src="@/assets/images/error.png" alt="Đã có lỗi xảy ra" />
        </div>
      </div>
      <div class="py-16 z-10">
        <div class="text-center">
          <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl -mt-8">
            {{ props.title }}
          </h1>
          <p class="text-base text-gray-500">{{ props.desc }}</p>
          <div>
            <a class="font-bold text-xl text-green-600" @click="router.push({ name: RouteName.HOMEPAGE })">
              Trang chủ<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

import { RouteName } from '@/shared/constants';

interface Props {
  title?: string;
  desc?: string;
}

const router = useRouter();
const props = withDefaults(defineProps<Props>(), {
  title: 'Không tìm thấy trang',
  desc: 'Rất tiếc, chúng tôi không thể tìm thấy trang bạn yêu cầu',
});
</script>

<style lang="scss" src="./styles.scss" scoped></style>
