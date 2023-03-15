<template>
    <div class="page-home flex flex-grow items-center justify-content-center">
        <div class="container mx-auto">
            <div v-if="!selectedComponent" class="component-list flex flex-wrap justify-between">
                <BaseCard class="flex items-center justify-center m-2 p-2">
                    <BaseButton class="w-full h-full" iconLeft="material-symbols:smart-button" iconSize="100" icon size="large" @click="onClickButtonDo('button')" />
                    <span>Button</span>
                </BaseCard>
                <BaseCard class="flex items-center justify-center m-2 p-2">
                    <BaseButton class="w-full h-full" iconLeft="iconoir:input-field" iconSize="100" icon size="large" @click="onClickButtonDo('input')" />
                    <span>Input</span>
                </BaseCard>
                <BaseCard class="flex items-center justify-center m-2 p-2">
                    <BaseButton class="w-full h-full" iconLeft="bi:menu-button-wide" iconSize="100" icon size="large" @click="onClickButtonDo('dropdown')" />
                    <span>Dropdown</span>
                </BaseCard>
                <BaseCard class="flex items-center justify-center m-2 p-2">
                    <BaseButton class="w-full h-full" iconLeft="mdi:toggle-switch-off-outline" iconSize="100" icon size="large" @click="onClickButtonDo('switch')" />
                    <span>Switch</span>
                </BaseCard>
                <BaseCard class="flex items-center justify-center m-2 p-2">
                    <BaseButton class="w-full h-full" iconLeft="tabler:checkbox" iconSize="100" icon size="large" @click="onClickButtonDo('checkbox')" />
                    <span>Checkbox</span>
                </BaseCard>
                <BaseCard class="flex items-center justify-center m-2 p-2">
                    <BaseButton class="w-full h-full" iconLeft="carbon:radio-button-checked" iconSize="100" icon size="large" @click="onClickButtonDo('radio')" />
                    <span>Radio Button</span>
                </BaseCard>
                <BaseCard class="flex items-center justify-center m-2 p-2">
                    <BaseButton class="w-full h-full" iconLeft="uil:slider-h" iconSize="100" icon size="large" @click="onClickButtonDo('rangeSlider')" />
                    <span>Range Slider</span>
                </BaseCard>
                <BaseCard class="flex items-center justify-center m-2 p-2">
                    <BaseButton class="w-full h-full" iconLeft="gg:spinner" iconSize="100" icon size="large" @click="onClickButtonDo('spinner')" />
                    <span>Spinner</span>
                </BaseCard>
            </div>
            <ButtonBuilder v-else-if="selectedComponent === 'button'" />
            <InputBuilder v-else-if="selectedComponent === 'input'" />
            <DropdownBuilder v-else-if="selectedComponent === 'dropdown'" />
            <SwitchBuilder v-else-if="selectedComponent === 'switch'" />
            <CheckboxBuilder v-else-if="selectedComponent === 'checkbox'" />
            <RadioBuilder v-else-if="selectedComponent === 'radio'" />
            <RangeSliderBuilder v-else-if="selectedComponent === 'rangeSlider'" />
            <SpinnerBuilder v-else-if="selectedComponent === 'spinner'" />
        </div>
    </div>
</template>

<script>
    import { ref, watch } from 'vue';
    import { useRouter } from 'vue-router';
    import BaseCard from '@components/base/BaseCard.vue';
    import BaseButton from '@components/base/BaseButton.vue';
    import ButtonBuilder from '@components/builders/ButtonBuilder.vue';
    import InputBuilder from '@components/builders/InputBuilder.vue';
    import DropdownBuilder from '@components/builders/DropdownBuilder.vue';
    import SwitchBuilder from '@components/builders/SwitchBuilder.vue';
    import CheckboxBuilder from '@components/builders/CheckboxBuilder.vue';
    import RadioBuilder from '@components/builders/RadioBuilder.vue';
    import RangeSliderBuilder from '@components/builders/RangeSliderBuilder.vue';
    import SpinnerBuilder from '@components/builders/SpinnerBuilder.vue';

    export default {
        name: 'TheHome',
        components: {
            BaseCard,
            BaseButton,
            ButtonBuilder,
            InputBuilder,
            DropdownBuilder,
            SwitchBuilder,
            CheckboxBuilder,
            RadioBuilder,
            RangeSliderBuilder,
            SpinnerBuilder,
        },
        setup( ) {
            const selectedComponent = ref( null );
            const router = useRouter();
            const currentRoute = router.currentRoute;
            
            const onClickButtonDo = ( value ) => {
                selectedComponent.value = value;
                router.push( { name: 'TheHome', query: { customize: value } } );
            };

            watch( currentRoute, ( newValue ) => {
                selectedComponent.value = newValue.query.customize ? newValue.query.customize : null;
            }, { immediate: true, deep: true } );

            return {
                selectedComponent,
                onClickButtonDo
            };
        }
    };
</script>

<style lang="scss" scoped>
.page-home {
    .component-list {
        :deep(.base-card) {
            height: 200px;
            width: 100%;
            max-width: calc( 25% - 2 * 0.5rem );

            .base-card__content {
                position: relative;
                height: 100%;
                background: linear-gradient( to bottom, $primary, lighten( $dark, 75% ) );
                border-radius: 10px;
                transition: all 0.7s ease-in-out;
                overflow: hidden;

                &:hover {
                    border-radius: 50% 2px;

                    > span {
                        bottom: 0;
                        border-top-left-radius: 170px;
                    }
                }

                .base-button {
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    border-radius: 10px;
                    transition: all 0.7s ease-in-out;

                    .icon {
                        color: rgba( $light, 0.8 );
                        transition: transform 0.25s ease-in-out;
                    }

                    &:hover {
                        border-radius: 50% 2px;

                        .icon {
                            transform: scale( 1.2 );
                        }
                    }
                }

                > span {
                    position: absolute;
                    bottom: -45px;
                    width: 100%;
                    padding: 10px;
                    background: rgba( $dark, 0.2 );
                    color: $light;
                    font-size: 14px;
                    font-weight: 300;
                    text-align: center;
                    border-top-left-radius: 0;
                    z-index: 2;
                    transition: bottom 0.25s ease-in-out, border-top-left-radius 2s ease-in-out;
                }
            }
        }

        @include mobile {
            :deep(.base-card) {
                height: 200px;
                width: 100%;
                max-width: calc( 100% - 2 * 0.5rem );
            }
        }
    }
}
</style>
