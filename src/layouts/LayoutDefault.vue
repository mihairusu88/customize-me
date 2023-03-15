<template>
    <div class="layout-default">
        <LayoutHeader />
        <transition name="fade" mode="out-in">
            <slot></slot>
        </transition>
    </div>
</template>

<script>
    import LayoutHeader from '@/layouts/components/LayoutHeader.vue';

    export default {
        name: 'LayoutDefault',
        components: {
            LayoutHeader
        }
    };
</script>

<style lang="scss" scoped>
    .layout-default {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
</style>