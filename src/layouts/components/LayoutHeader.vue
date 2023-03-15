<template>
    <div class="header flex flex-col items-center justify-center bg-gray-lighter py-12 px-10">
        <div class="logo" @click="onClickLogoDo">
            <LogoIcon />
        </div>
        <p class="mt-7 text-md font-light text-gray">Customize components by yourself</p>
        <div class="flex items-center mt-2">
            <p class="text-md font-medium text-dark mr-2">v{{version}}</p>
            <BaseButton iconLeft="mdi:github" iconSize="30" icon circle iconColor="#000000" />
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import LogoIcon from '@assets/logo.svg';
import BaseButton from '@components/base/BaseButton.vue';
import { version } from '../../../package.json';

export default {
  name: 'LayoutHeader',
  components: {
    LogoIcon,
    BaseButton
  },
  setup() {
    const router = useRouter();

    const onClickLogoDo = () => {
      router.push( { name: 'TheHome' } );
    };

    return {
      version,
      onClickLogoDo
    };
  }
};
</script>

<style lang="scss" scoped>
    .header {
        .logo {
            cursor: pointer;
            max-width: 100%;

            svg {
                width: 400px;
                max-width: 100%;
                max-height: 115px;
            }
        }

        @include mobile {
            .logo {
                svg {
                    max-height: 85px;
                }
            }
        }
    }
</style>