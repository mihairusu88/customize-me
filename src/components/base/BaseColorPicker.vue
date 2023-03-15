<template>
    <div class="base-color-picker">
        <color-picker :pureColor="modelValue" shape="circle" format="hex" :disableHistory="true" :disableAlpha="true" @update:pureColor="onUpdatePureColorDo" />
        <span class="text-sm ml-1">{{ modelValue }}</span>
    </div>
</template>

<script>
import { toRefs } from 'vue';
import { ColorPicker } from 'vue3-colorpicker';
import 'vue3-colorpicker/style.css';

export default {
  name: 'BaseColorPicker',
  components: {
    ColorPicker
  },
  props: {
    modelValue: {
      type: String,
      default: null
    }
  },
  setup( props, context ) {
    const { modelValue } = toRefs( props );

    const onUpdatePureColorDo = ( color ) => {
      context.emit( 'update:pureColor', color );
    };

    return {
      modelValue,
      onUpdatePureColorDo
    };
  }
};
</script>

<style lang="scss" scoped>
.base-color-picker {
    ::v-deep(.vc-color-wrap) {
        height: 30px;
        width: 30px;
        border-color: $light;
        border-width: 3px;
        box-shadow: 0 0 8px 0 rgba( $dark, 0.3 );
    }
}
</style>