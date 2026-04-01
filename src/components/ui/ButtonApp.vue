<template>
    <v-btn
        :size="props.size"
        :block="props.block"
        :rounded="props.rounded"
        :variant="props.variant"
        :icon="isIconOnly"
        :color="props.color"
        :disabled="props.disabled"
        @click="emitirEvento"
    >
        <template v-if="isIconOnly">
            <v-icon :icon="props.icon" />
        </template>

        <template v-else>
            {{ props.title }}
        </template>
    </v-btn>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    title: {
        type: String,
        default: '',
    },
    mode: {
        type: String,
        default: 'text',
        validator: (value) => ['text', 'icon'].includes(value),
    },
    icon: {
        type: String,
        default: 'mdi-check',
    },
    size: {
        type: [String, Number],
        default: 'default',
    },
    block: {
        type: Boolean,
        default: false,
    },
    rounded: {
        type: [Boolean, String, Number],
        default: false,
    },
    variant: {
        type: String,
        default: 'elevated',
    },
    color: {
        type: String,
        default: undefined,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});

const isIconOnly = computed(() => props.mode === 'icon');

const emit = defineEmits(['click']);

function emitirEvento(event) {
    emit('click', event);
}
</script>