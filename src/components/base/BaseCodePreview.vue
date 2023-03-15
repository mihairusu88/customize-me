<template>
    <div 
        class="base-code-preview-container relative w-full"
        :class="{'base-code-preview-container--is-copied': isCopiedToClipboard}">
        <BaseButton class="base-code-preview__copy-button text-xs"
            iconLeft="material-symbols:content-copy-outline"
            iconColor="#FFFFFF"
            iconSize="24"
            icon
            circle
            @click="onClickCopyButtonDo()"/>
        <span class="base-code-preview__copy-notification flex items-center">
            <Icon class="mr-1" icon="material-symbols:check" width="20px" height="20px" />
            Copied to clipboard!
        </span>
        <prism-editor ref="baseCodePreviewRef"
            class="base-code-preview"
            :modelValue="modelValue"
            :highlight="highlighter"
            :readonly="readOnly"
            :line-numbers="lineNumbers"
            :tabSize="2" />
    </div>
</template>

<script>
import { toRefs, ref } from 'vue';
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css'; // import the styles somewhere
// eslint-disable-next-line no-unused-vars
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css'; 
import { Icon } from '@iconify/vue';
import BaseButton from '@components/base/BaseButton.vue';

export default {
  name: 'BaseCodePreview',
  components: {
    PrismEditor,
    BaseButton,
    Icon
  },
  props: {
    modelValue: {
      type: String,
      default: null
    },
    readOnly: {
      type: Boolean,
      default: true
    },
    lineNumbers: {
      type: Boolean,
      default: true
    }
  },
  setup( props ) {
    const { modelValue, lineNumbers, readOnly } = toRefs( props );
    const highlighter = ( code ) => {
      return highlight( code, languages.js );
    };
    const isCopiedToClipboard = ref( false );

    const onClickCopyButtonDo = () => {
      isCopiedToClipboard.value = true;
      navigator.clipboard.writeText( baseCodePreviewRef.value.codeData );
      setTimeout( () => {
        isCopiedToClipboard.value = false;
      }, 2000 );
    };

    const baseCodePreviewRef = ref( null );

    return {
      modelValue,
      lineNumbers,
      readOnly,
      baseCodePreviewRef,
      highlighter,
      isCopiedToClipboard,
      onClickCopyButtonDo
    };
  },
};
</script>

<style lang="scss" scoped>
.base-code-preview-container {
    .base-code-preview {
        padding: 10px 5px;
        background: lighten( $dark, 18% );
        color: lighten( $primary, 45% );
        font-size: 14px;
        font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
        border-radius: 15px;
    }

    .base-code-preview__copy-button {
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 2;
        opacity: 0.7;

        &:hover {
            background: rgba( $light, 0.2 );
        }
    }

    .base-code-preview__copy-notification {
        position: absolute;
        top: 15px;
        right: 60px;
        padding: 5px 10px;
        background: $success;
        color: $light;
        font-size: 12px;
        z-index: 2;
        border-radius: 15px;
        opacity: 0;
        transition: all 250ms ease-in-out;
    }

    &.base-code-preview-container--is-copied {
        .base-code-preview__copy-notification {
            opacity: 1;
        }
    }
}
</style>