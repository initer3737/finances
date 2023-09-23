<script setup lang="ts">
defineProps<{
    Icon: string;
    variant: string;
}>();
</script>

<template>
    <div>
        <i :class="`bi bi-${Icon} ${variant}`"></i>
        <slot></slot>
    </div>
</template>
