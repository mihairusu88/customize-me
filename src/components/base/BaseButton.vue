<template>
    <button
        class="base-button button flex justify-center items-center"
        :class="[
            colorClass,
            sizeClass,
            {
                'is-fullwidth': fullwidth,
                'is-rounded': rounded,
                'is-disabled': disabled,
                'is-icon': icon,
                'is-circle': circle,
                'is-active': active,
            }
        ]"
        :disabled="disabled"
        @click="onClickButtonDo">
        <span v-if="iconLeft" class="icon">
            <Icon :icon="iconLeft" :width="iconSize" :height="iconSize" :color="iconColor" />
        </span>
        <span v-if="!icon" class="is-flex">
            <slot></slot>
        </span>
        <span v-if="iconRight" class="icon">
            <Icon :icon="iconRight" :width="iconSize" :height="iconSize" :color="iconColor" />
        </span>
    </button>
</template>

<script>
import { computed, toRefs } from 'vue';
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
import {
    buttonColorValidator as propUtilsButtonColorValidator,
    sizeValidator as propUtilsSizeValidator
} from '@/utils/propValidators';

export default {
    name: 'BaseButton',
    components: {
        Icon
    },
    props: {
        color: {
            type: String,
            default: 'default',
        },
        size: {
            type: String,
            default: 'normal',
        },
        fullwidth: {
            type: Boolean,
            default: false
        },
        iconLeft: {
            type: String,
            default: null
        },
        iconRight: {
            type: String,
            default: null
        },
        iconSize: {
            type: String,
            default: null,
        },
        iconColor: {
            type: String,
            default: null,
        },
        disabled: {
            type: Boolean,
            default: false
        },
        rounded: {
            type: Boolean,
            default: false
        },
        icon: {
            type: Boolean,
            default: false
        },
        circle: {
            type: Boolean,
            default: false
        },
        to: {
            type: Object,
            default: null
        },
        active: {
            type: Boolean,
            default: false
        }
    },
    emits: [ 'click' ],
    setup( props, { emit } ) {
        const { color, size, to } = toRefs( props );
        const router = useRouter();

        const colorClass = computed( () => {
            return propUtilsButtonColorValidator( color.value ) ? `is-${color.value}` : 'is-default';
        } );
        const sizeClass = computed( () => {
            return propUtilsSizeValidator( size.value ) ? `is-${size.value}` : 'is-normal';
        } );

        const onClickButtonDo = function( e ) {
            emit( 'click', e );
            
            if ( to.value ) {
                router.push( to.value );
            }
        };

        return {
            colorClass,
            sizeClass,
            onClickButtonDo
        };
    }
};
</script>

<style lang="scss" scoped>
.base-button {
    position: relative;
    transition: all 250ms ease-in-out;

    &::before {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: currentColor;
        color: inherit;
        border-radius: inherit;
        content: "";
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s cubic-bezier( 0.4, 0, 0.6, 1 );
    }

    &:hover,
    &.is-active {
        &::before {
            opacity: 0.08;
        }
    }
}

.base-button.button.is-large {
    height: 56px;
    font-size: 16px;
}

.base-button.button.is-medium {
    height: 48px;
    font-size: 15px;
}

.base-button.button.is-normal {
    height: 40px;
    font-size: 14px;
}

.base-button.button.is-large.is-icon {
    width: 56px;
}

.base-button.button.is-medium.is-icon {
    width: 48px;
}

.base-button.button.is-normal.is-icon {
    width: 40px;
}

.base-button.button.is-rounded {
    border-radius: 15px;
}

.base-button.button.is-circle {
    border-radius: 9999px !important;
}
</style>