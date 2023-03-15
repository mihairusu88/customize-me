<template>
    <div class="base-select z-10 w-full">
        <Listbox :modelValue="modelValue" @update:modelValue="onUpdateModelValueDo">
            <div class="relative mt-1">
                <ListboxButton
                    class="relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none sm:text-sm">
                    <span class="block truncate">{{ modelValue.value }}</span>
                    <span
                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon
                            class="h-5 w-5 text-gray-400"
                            aria-hidden="true"/>
                    </span>
                </ListboxButton>

                <transition
                    leave-active-class="transition duration-100 ease-in"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0">
                    <ListboxOptions
                        class="absolute mt-1 w-full overflow-auto rounded-md bg-light py-1 text-base shadow-lg focus:outline-none sm:text-sm">
                        <ListboxOption
                            v-slot="{ active, selected }"
                            v-for="item in items"
                            :key="item.id"
                            :value="item"
                            as="template">
                            <li
                                :class="[
                                    active ? 'bg-gray-lighter text-primary' : 'text-gray',
                                    'relative cursor-pointer select-none py-2 pl-10 pr-4',
                                ]">
                                <span
                                    :class="[
                                        selected ? 'font-medium' : 'font-normal',
                                        'block truncate',
                                    ]">{{ item.value }}</span>
                                <span
                                    v-if="selected"
                                    class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
                                    <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                </span>
                            </li>
                        </ListboxOption>
                    </ListboxOptions>
                </transition>
            </div>
        </Listbox>
    </div>
</template>

<script>
import { toRefs } from 'vue';
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid';
  
export default {
  name: 'BaseSelect',
  components: {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    CheckIcon,
    ChevronUpDownIcon
  },
  props: {
    modelValue: {
      type: Object,
      default: null
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  setup( props, context ) {
    const { modelValue, items } = toRefs( props );
    const onUpdateModelValueDo = ( value ) => {
      console.log( 'here', value );
      const selectedValue = items.value.find( item => item.value === value.value );
      context.emit( 'update:modelValue', selectedValue );
    };

    return {
      modelValue,
      onUpdateModelValueDo
    };
  },
};
</script>
<style lang="scss" scoped>
.base-select {
    width: 200px;
    max-width: 100%;
}
</style>