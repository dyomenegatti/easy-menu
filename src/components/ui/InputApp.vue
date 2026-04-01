<template>
    <v-text-field
        hide-details="auto"
        :label="label"
        :placeholder="resolvedPlaceholder"
        @focus="isFocused = true"
        @blur="isFocused = false"
        :type="type"
        :hint="hint"
        :clearable="clearable"
        :variant="variant"
        :disabled="disabled"
        :prepend-inner-icon="prependInnerIcon"
        :readonly="readonly"
        :rules="rules"
    ></v-text-field>
</template>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
    label: String,
    placeholder: String,
    type: {
        type: String,
        default: 'text',
        required: true
    },
    hint: String,
    clearable: {
        type: Boolean,
        default: true
    },
    variant: String,
    disabled: {
        type: Boolean,
        default: false,
    },
    prependInnerIcon: {
        type: String,
        default: ''
    },
    readonly: {
        type: Boolean,
        default: false,
    },
    rules: {
        type: Array,
        default: () => []
    }
});

const isFocused = ref(false);

const resolvedPlaceholder = computed(() => {
    return isFocused.value ? props.placeholder : '';
});
</script>