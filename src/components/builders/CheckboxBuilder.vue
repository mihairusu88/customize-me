<template>
    <div class="checkbox-builder flex flex-wrap flex-row mt-10 mb-10">
        <ComingSoon />
    </div>
</template>

<script>
import ComingSoon from '@components/misc/ComingSoon.vue';

export default {
  name: 'CheckboxBuilder',
  components: {
    ComingSoon
  }
};
</script>