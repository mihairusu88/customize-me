<template>
    <input class="base-slider"
        type="range"
        :min="min"
        :max="max"
        :step="step"
        :value="modelValue"
        @input="onInputDo" />
</template>

<script>
import { toRefs, ref } from 'vue';

export default {
  name: 'BaseInputSlider',
  props: {
      min: {
          type: [ Number, String ],
          default: null
      },
      max: {
          type: [ Number, String ],
          default: null
      },
      step: {
          type: [ Number, String ],
          default: null
      },
      modelValue: {
          type: [ Number, String ],
          default: null
      }
  },
  setup( props, context ) {
    const { min, max, step, modelValue } = toRefs( props );
    const percent = ref( `${modelValue.value * 100 / max.value}%` );

    const onInputDo = ( e ) => {
      percent.value = `${e.target.value * 100 / max.value}%`;
      context.emit( 'update:modelValue', e.target.value );
    };

    return {
      min,
      max,
      step,
      modelValue,
      onInputDo,
      percent
    };
  },
};
</script>

<style lang="scss" scoped>

input[type="range"] {
    height: 7px;
    width: 100px;
    margin-right: 15px;
    background: rgba( $dark, 0.15 );
    -webkit-appearance: none;
    border-radius: 5px;
    background-image: linear-gradient( var( --color--primary ), var( --color--primary ) );
    background-size: v-bind( percent ) 100%;
    background-repeat: no-repeat;
}

/* Input Thumb */
input[type="range"]::-webkit-slider-thumb {
    height: 20px;
    width: 20px;
    background: var( --color--primary );
    -webkit-appearance: none;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 2px 4px rgba( $primary, 0.3 );
}

input[type="range"]::-moz-range-thumb {
    height: 20px;
    width: 20px;
    background: var( --color--primary );
    -webkit-appearance: none;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 2px 4px rgba( $primary, 0.3 );
}

input[type="range"]::-ms-thumb {
    height: 20px;
    width: 20px;
    background: var( --color--primary );
    -webkit-appearance: none;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 2px 4px rgba( $primary, 0.3 );
}

input[type=range]::-webkit-slider-runnable-track {
    border: none;
    background: transparent;
    -webkit-appearance: none;
    box-shadow: none;
}

input[type=range]::-moz-range-track {
    border: none;
    background: transparent;
    -webkit-appearance: none;
    box-shadow: none;
}

input[type="range"]::-ms-track {
    border: none;
    background: transparent;
    -webkit-appearance: none;
    box-shadow: none;
}

</style>

