<template>
    <div class="ui-dropdown">
        <select
            :name="name"
            class="ui-dropdown__select"
            @change="onChange"
        >
            <option
                v-for="(option, i) in options"
                :key="`dropdown-option-${i}`"
                :value="option.value"
                :selected="option.active"
            >
                {{ option.label }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'UiDropdown',

    props: {
        options: {
            type: Array,
            default: () => [],
        },

        name: {
            type: String,
            default: '',
        },
    },

    methods: {
        onChange(event) {
            this.$emit('selected-value', event.target.value);
        },
    },
};
</script>

<style lang="scss" scoped>
    .ui-dropdown {
        display: flex;
        align-items: center;
        min-width: 5rem;

        &__select {
            flex: 1;
            height: 100%;
            padding: .6rem 1.6rem;
            border-radius: .6rem;
        }
    }
</style>