<template>
    <div class="button-builder flex flex-wrap flex-row mt-10 mb-10">
        <div class="component-side flex flex-grow">
            <BaseCard 
                class="component-card flex-col flex-grow"
                :class="{
                    'component-card--has-code-displayed': showCode,
                    'component-card--has-multiple-code-displayed': showCode && sourceType === 'react',
                }">
                <template v-slot:title>
                    <span class="mr-auto ml-1">Button Component</span>
                    <BaseButton class="text-xs"
                        iconLeft="vscode-icons:file-type-vue"
                        :active="showCode && sourceType === 'vue'"
                        iconSize="24"
                        icon
                        circle
                        @click="onClickToggleCodeDo('vue')"/>
                    <BaseButton class="text-xs"
                        iconLeft="vscode-icons:file-type-reactjs"
                        :active="showCode && sourceType === 'react'"
                        iconSize="24"
                        icon
                        circle
                        @click="onClickToggleCodeDo('react')"/>
                    <BaseButton class="text-xs"
                        iconLeft="vscode-icons:file-type-html"
                        :active="showCode && sourceType === 'html'"
                        iconSize="24"
                        icon
                        circle
                        @click="onClickToggleCodeDo('html')"/>
                </template>
                <button v-if="!showCode" ref="buttonRef" :style="buttonProps">Button Component</button>
                <BaseCodePreview v-if="showCode" class="flex-grow" :modelValue="buttonSource" />
                <BaseCodePreview v-if="showCode && sourceType === 'react'" class="flex-grow w-full" :modelValue="buttonSourceStyle" />
            </BaseCard>
        </div>
        <div class="props-side flex flex-col flex-grow">
            <BaseCard class="flex-grow">
                <template v-slot:title>
                    <h5 class="text-m">Background</h5>
                </template>
                <div class="flex items-center">
                    <BaseColorPicker v-model="buttonProps.backgroundColor" @update:pureColor="onInputBackgroundColor" />
                </div>
            </BaseCard>
            <BaseCard class="flex-grow mt-4">
                <template v-slot:title>
                    <h5 class="text-m">Color</h5>
                </template>
                <div class="flex items-center">
                    <BaseColorPicker v-model="buttonProps.color" @update:pureColor="onInputColor" />
                </div>
            </BaseCard>
            <BaseCard class="flex-grow mt-4">
                <template v-slot:title>
                    <h5 class="text-m">Font</h5>
                </template>
                <div class="flex flex-grow justify-between">
                    <div class="flex flex-col">
                        <h5 class="text-sm mr-2 mb-2">Size</h5>
                        <div class="flex items-center">
                            <BaseInputSlider min="0" max="100" step="1" v-model="fontSizeModel" @update:modelValue="onInputFontSize" />
                            <span class="text-sm ml-2">{{ buttonProps.fontSize }}</span>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <h5 class="text-sm mr-2 mb-2">Weight</h5>
                        <div class="flex items-center">
                            <BaseInputSlider min="100" max="900" step="100" v-model="buttonProps.fontWeight" @update:modelValue="onInputFontWeight" />
                            <span class="text-sm ml-2">{{ buttonProps.fontWeight }}</span>
                        </div>
                    </div>
                </div>
            </BaseCard>
            <BaseCard class="flex-grow mt-4">
                <template v-slot:title>
                    <h5 class="text-m">Border</h5>
                </template>
                <div class="flex flex-grow justify-between">
                    <div class="flex flex-col justify-start">
                        <h5 class="text-sm mr-2 mb-2">Width</h5>
                        <div class="flex items-center mt-auto">
                            <BaseInputSlider min="0" max="100" step="1" v-model="borderWidthModel" @update:modelValue="onInputBorder" />
                            <span class="text-sm ml-2">{{ buttonProps.borderWidth }}</span>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <h5 class="text-sm mr-2 mb-2">Style</h5>
                        <div class="flex items-center">
                            <BaseSelect v-model:modelValue="borderStyleModel" :items="borderStyles" @update:modelValue="onInputBorderStyle"  />
                        </div>
                    </div>
                    <div class="flex flex-col justify-start">
                        <h5 class="text-sm mr-2 mb-2">Color</h5>
                        <div class="flex items-center mt-auto">
                            <BaseColorPicker v-model="buttonProps.borderColor" @update:pureColor="onInputBorderColor" />
                        </div>
                    </div>
                </div>
            </BaseCard>
            <BaseCard class="flex-grow mt-4">
                <template v-slot:title>
                    <h5 class="text-m">Border Radius</h5>
                </template>
                <div class="flex flex-grow flex-wrap justify-between">
                    <div class="flex flex-col">
                        <h5 class="text-sm mr-2 mb-2">Top Left</h5>
                        <div class="flex items-center">
                            <BaseInputSlider min="0" max="100" step="1" v-model="borderTopLeftRadiusModel" @update:modelValue="onInputBorderTopLeftRadius" />
                            <span class="text-sm ml-2">{{ buttonProps.borderTopLeftRadius }}</span>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <h5 class="text-sm mr-2 mb-2">Top Right</h5>
                        <div class="flex items-center">
                            <BaseInputSlider min="0" max="100" step="1" v-model="borderTopRightRadiusModel" @update:modelValue="onInputBorderTopRightRadius" />
                            <span class="text-sm ml-2">{{ buttonProps.borderTopRightRadius }}</span>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <h5 class="text-sm mr-2 mb-2">Bottom Right</h5>
                        <div class="flex items-center">
                            <BaseInputSlider min="0" max="100" step="1" v-model="borderBottomLeftRadiusModel" @update:modelValue="onInputBorderBottomRightRadius" />
                            <span class="text-sm ml-2">{{ buttonProps.borderBottomRightRadius }}</span>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <h5 class="text-sm mr-2 mb-2">Bottom Left</h5>
                        <div class="flex items-center">
                            <BaseInputSlider min="0" max="100" step="1" v-model="borderBottomRightRadiusModel" @update:modelValue="onInputBorderBottomLeftRadius" />
                            <span class="text-sm ml-2">{{ buttonProps.borderBottomLeftRadius }}</span>
                        </div>
                    </div>
                </div>
            </BaseCard>
            <BaseCard class="flex-grow mt-4">
                <template v-slot:title>
                    <h5 class="text-m">Box Shadow</h5>
                </template>
                <div class="flex flex-grow flex-wrap justify-between">
                    <div class="flex flex-col justify-start">
                        <h5 class="text-sm mr-2 mb-2">Offset X</h5>
                        <div class="flex items-center mt-auto">
                            <BaseInputSlider min="0" max="100" step="1" v-model="boxShadowOffsetXModel" @update:modelValue="onInputBoxShadowOffsetX" />
                            <span class="text-sm ml-2">{{ boxShadow[0] }}</span>
                        </div>
                    </div>
                    <div class="flex flex-col justify-start">
                        <h5 class="text-sm mr-2 mb-2">Offset Y</h5>
                        <div class="flex items-center mt-auto">
                            <BaseInputSlider min="0" max="100" step="1" v-model="boxShadowOffsetYModel" @update:modelValue="onInputBoxShadowOffsetY" />
                            <span class="text-sm ml-2">{{ boxShadow[1] }}</span>
                        </div>
                    </div>
                    <div class="flex flex-col justify-start">
                        <h5 class="text-sm mr-2 mb-2">Blur Radius</h5>
                        <div class="flex items-center mt-auto">
                            <BaseInputSlider min="0" max="100" step="1" v-model="boxShadowBlurRadiusModel" @update:modelValue="onInputBoxShadowBlurRadius" />
                            <span class="text-sm ml-2">{{ boxShadow[2] }}</span>
                        </div>
                    </div>
                    <div class="flex flex-col justify-start">
                        <h5 class="text-sm mr-2 mb-2">Spread Radius</h5>
                        <div class="flex items-center mt-auto">
                            <BaseInputSlider min="0" max="100" step="1" v-model="boxShadowSpreadRadiusModel" @update:modelValue="onInputBoxShadowSpreadRadius" />
                            <span class="text-sm ml-2">{{ boxShadow[3] }}</span>
                        </div>
                    </div>
                    <div class="flex flex-col justify-start">
                        <h5 class="text-sm mr-2 mb-2">Color</h5>
                        <div class="flex items-center mt-auto">
                            <BaseColorPicker v-model="boxShadowColorModel" @update:pureColor="onInputBoxShadowColor" />
                        </div>
                    </div>
                </div>
            </BaseCard>
        </div>
    </div>
</template>

<script>
import { reactive, ref, watch } from 'vue';
import { convertStringToNumber, convertNumberToPx, buildCssProps } from '@utils/converters';
import BaseButton from '@components/base/BaseButton.vue';
import BaseCard from '@components/base/BaseCard.vue';
import BaseColorPicker from '@components/base/BaseColorPicker.vue';
import BaseInputSlider from '@components/base/BaseInputSlider.vue';
import BaseSelect from '@components/base/BaseSelect.vue';
import BaseCodePreview from '@components/base/BaseCodePreview.vue';
import ButtonSourceVue from './ButtonBuilder/ButtonSourceVue.vue?raw';
import ButtonSourceReact from './ButtonBuilder/ButtonSourceReact.jsx?raw';
import ButtonSourceReactStyle from './ButtonBuilder/ButtonSourceReactStyle.css?raw';
import ButtonSourceHtml from './ButtonBuilder/ButtonSourceHtml.html?raw';

export default {
  name: 'ButtonBuilder',
  components: {
    BaseButton,
    BaseCard,
    BaseColorPicker,
    BaseInputSlider,
    BaseSelect,
    BaseCodePreview
  },
  setup() {
    const buttonProps = reactive( {
      'backgroundColor': '#019EBF',
      'color': '#FFFFFF',
      'fontSize': '16px',
      'fontWeight': '500',
      'borderWidth': '2px',
      'borderStyle': 'solid',
      'borderColor': '#000000',
      'borderTopLeftRadius': '15px',
      'borderTopRightRadius': '15px',
      'borderBottomRightRadius': '15px',
      'borderBottomLeftRadius': '15px',
      'boxShadow': '0px 0px 15px 0px #000000',
      'padding': '15px',
    } );

    const buttonRef = ref( null );
    const showCode = ref( false );
    const sourceType = ref( 'vue' );
    const buttonSources = ref( { 
        vue: ButtonSourceVue, 
        react: ButtonSourceReact,
        reactStyle: ButtonSourceReactStyle,
        html: ButtonSourceHtml
    } );
    
    const whiteSpaces = {
        vue: '        ',
        react: '    ',
        html: '        ',
    }; 
    const cssProps = buildCssProps( buttonProps, whiteSpaces[sourceType.value] );
    let buttonSource = ref( buttonSources.value[sourceType.value].replace( '@cssProps', cssProps ) );
    let buttonSourceStyle = ref( buttonSources.value['reactStyle'].replace( '@cssProps', cssProps ) );

    watch( buttonProps, ( newValue ) => {
        const cssProps = buildCssProps( newValue, whiteSpaces[sourceType.value] );
        buttonSource.value = buttonSources.value[sourceType.value].replace( '@cssProps', cssProps );
        buttonSourceStyle.value = buttonSources.value['reactStyle'].replace( '@cssProps', cssProps );
    } );

    watch( sourceType, ( newValue ) => {
        const cssProps = buildCssProps( buttonProps, whiteSpaces[sourceType.value] );
        buttonSource.value = buttonSources.value[newValue].replace( '@cssProps', cssProps );
        buttonSourceStyle.value = buttonSources.value['reactStyle'].replace( '@cssProps', cssProps );
    } );

    const fontSizeModel = ref( convertStringToNumber( buttonProps.fontSize ) );
    const borderWidthModel = ref( convertStringToNumber( buttonProps.borderWidth ) );

    // Border
    const borderTopLeftRadiusModel = ref( convertStringToNumber( buttonProps.borderTopLeftRadius ) );
    const borderTopRightRadiusModel = ref( convertStringToNumber( buttonProps.borderTopRightRadius ) );
    const borderBottomRightRadiusModel = ref( convertStringToNumber( buttonProps.borderBottomRightRadius ) );
    const borderBottomLeftRadiusModel = ref( convertStringToNumber( buttonProps.borderBottomLeftRadius ) );
    const borderStyles = ref( [ { id: 1, value: 'solid' }, { id: 2, value: 'dashed' }, { id: 3, value: 'dotted' }, { id: 4, value: 'double' } ] );
    const borderStyleModel = ref( borderStyles.value.find( item => item.value === 'solid' ) );

    // Box Shadow
    const boxShadow = buttonProps.boxShadow.split( ' ' ) ;
    const boxShadowOffsetXModel = ref( convertStringToNumber( boxShadow[0] ) );
    const boxShadowOffsetYModel = ref( convertStringToNumber( boxShadow[1] ) );
    const boxShadowBlurRadiusModel = ref( convertStringToNumber( boxShadow[2] ) );
    const boxShadowSpreadRadiusModel = ref( convertStringToNumber( boxShadow[3] ) );
    const boxShadowColorModel = ref( boxShadow[4] );

    const onInputBackgroundColor = ( color ) => {
      buttonProps.backgroundColor = color;
    };

    const onInputColor = ( color ) => {
      buttonProps.color = color;
    };

    const onInputFontSize = ( value ) => {
      buttonProps.fontSize = convertNumberToPx( value );
    };

    const onInputFontWeight = ( value ) => {
      buttonProps.fontWeight = value;
    };

    // Border
    const onInputBorder = ( value ) => {
      buttonProps.borderWidth = convertNumberToPx( value );
    };

    const onInputBorderColor = ( color ) => {
      buttonProps.borderColor = color;
    };

     const onInputBorderStyle = ( value ) => {
      buttonProps.borderStyle = value.value;
    };

    const onInputBorderTopLeftRadius = ( value ) => {
      buttonProps.borderTopLeftRadius = convertNumberToPx( value );
    };

    const onInputBorderTopRightRadius = ( value ) => {
      buttonProps.borderTopRightRadius = convertNumberToPx( value );
    };

    const onInputBorderBottomRightRadius = ( value ) => {
      buttonProps.borderBottomRightRadius = convertNumberToPx( value );
    };

    const onInputBorderBottomLeftRadius = ( value ) => {
      buttonProps.borderBottomLeftRadius = convertNumberToPx( value );
    };

    // Box Shadow
    const onInputBoxShadowOffsetX = ( value ) => {
        boxShadow[0] = convertNumberToPx( value );
        buttonProps.boxShadow = String( boxShadow.join( ' ' ) );
    };

    const onInputBoxShadowOffsetY = ( value ) => {
        boxShadow[1] = convertNumberToPx( value );
        buttonProps.boxShadow = String( boxShadow.join( ' ' ) );
    };

    const onInputBoxShadowBlurRadius = ( value ) => {
        boxShadow[2] = convertNumberToPx( value );
        buttonProps.boxShadow = String( boxShadow.join( ' ' ) );
    };

    const onInputBoxShadowSpreadRadius = ( value ) => {
        boxShadow[3] = convertNumberToPx( value );
        buttonProps.boxShadow = String( boxShadow.join( ' ' ) );
    };

    const onInputBoxShadowColor = ( value ) => {
        boxShadow[4] = value;
        buttonProps.boxShadow = String( boxShadow.join( ' ' ) );
    };

    const onClickToggleCodeDo = ( sourceTypeValue = null ) => {
        if ( !sourceTypeValue ) return;
    
        if ( sourceTypeValue === sourceType.value ) {
            showCode.value = !showCode.value; 

            return;
        }

        sourceType.value = sourceTypeValue;
        showCode.value = true;
    };

    return {
      showCode,
      sourceType,
      buttonSource,
      buttonSourceStyle,
      buttonProps,
      buttonRef,
      fontSizeModel,
      borderWidthModel,
      borderTopLeftRadiusModel,
      borderTopRightRadiusModel,
      borderBottomRightRadiusModel,
      borderBottomLeftRadiusModel,
      borderStyleModel,
      borderStyles,
      onInputBackgroundColor,
      onInputColor,
      onInputFontSize,
      onInputFontWeight,
      onInputBorder,
      onInputBorderColor,
      onInputBorderStyle,
      onInputBorderTopLeftRadius,
      onInputBorderTopRightRadius,
      onInputBorderBottomRightRadius,
      onInputBorderBottomLeftRadius,
      boxShadow,
      boxShadowOffsetXModel,
      boxShadowOffsetYModel,
      boxShadowBlurRadiusModel,
      boxShadowSpreadRadiusModel,
      boxShadowColorModel,
      onInputBoxShadowOffsetX,
      onInputBoxShadowOffsetY,
      onInputBoxShadowBlurRadius,
      onInputBoxShadowSpreadRadius,
      onInputBoxShadowColor,
      convertStringToNumber,
      onClickToggleCodeDo
    };
  }
};
</script>

<style lang="scss" scoped>
.button-builder {
    .component-side,
    .props-side {
        position: relative;
        width: calc( 50% - 0.5em );
    }

    .component-side {
        margin-right: 0.5rem;
    }

    .props-side {
        margin-left: 0.5rem;

        .base-card {
            .base-card__content {
                > div {
                    flex-wrap: wrap;

                    .flex-col {
                        max-width: 50%;
                    }
                }
            }
        }
    }

    :deep(.base-card) {
        .base-card__title {
            padding: 10px;
            text-align: center;
        }

        .base-card__content {
            padding: 15px;
        }
    }

    :deep(.component-card) {
        display: flex !important;

        .base-card__title {
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
            
        .base-card__content {
            display: flex;
            padding: 20px;
            flex-direction: column;
            flex-grow: 1;
            justify-content: center;
            align-items: center;

            .base-code-preview-container {
                .base-code-preview {
                    height: 100% !important;
                    width: 100% !important;
                }
            }
        }

        &.component-card--has-code-displayed {
            .base-card__content {
                padding: 0;

                .base-code-preview-container {
                    .base-code-preview {
                        border-top-left-radius: 0 !important;
                        border-top-right-radius: 0 !important;
                    }
                }
            }
        }

        &.component-card--has-multiple-code-displayed {
            .base-card__content {
                .base-code-preview-container {
                    &:first-child {
                        margin-bottom: 5px;

                        .base-code-preview {
                            border-top-left-radius: 0 !important;
                            border-top-right-radius: 0 !important;
                            border-bottom-left-radius: 0 !important;
                            border-bottom-right-radius: 0 !important;
                        }
                    }

                    &:last-child {
                        .base-code-preview {
                            border-top-left-radius: 0 !important;
                            border-top-right-radius: 0 !important;
                        }
                    }
                }
            }
        }
    }

    @include mobile {
        .component-side,
        .props-side {
            width: 100%;
            margin-right: 0;
            margin-left: 0;
        }

        .component-side {
            margin-bottom: 0.5rem;
        }

        .props-side {
            margin-top: 0.5rem;

            .base-card {
                .base-card__content {
                    > div {
                        flex-wrap: wrap;

                        .flex-col {
                            margin-bottom: 0.5rem;
                            max-width: 50%;

                            &:last-child {
                                margin-bottom: 0;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>