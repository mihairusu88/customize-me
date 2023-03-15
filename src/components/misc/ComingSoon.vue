<template>
    <div class="flex justify-center items-center w-full mt-10">
        <span class="text-3xl uppercase font-bold">Coming Soon...</span>
        <Icon icon="bi:rocket" width="100" height="100" color="#019EBF" />
    </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  name: 'CommingSoon',
  components: {
    Icon
  }
};
</script>