<template>
    <div class="card flex justify-end p-2 mb-4">
        <ul class="flex list-none m-0 p-0 gap-2 items-center">
            <li>
                <button type="button"
                    class="inline-flex border w-8 h-8 p-0 items-center justify-center surface-0 dark:surface-800 border border-surface-200 dark:border-surface-600 rounded"
                    @click="onThemeToggler">
                    <i :class="`dark:text-white pi ${iconClass}`" />
                </button>
            </li>
            <li class="relative">
                <button
                    v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }"
                    type="button"
                    class="inline-flex border w-8 h-8 p-0 items-center justify-center surface-0 dark:surface-800 border border-surface-200 dark:border-surface-600 rounded">
                    <i class="pi pi-palette dark:text-white"></i>
                </button>
                <Configurator />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            iconClass: 'pi-moon'
        }
    },
    methods: {
        onThemeToggler() {
            const root = document.getElementsByTagName('html')[0];

            root.classList.toggle('dark');
            this.iconClass = this.iconClass === 'pi-moon' ? 'pi-sun' : 'pi-moon';
        }
    },
};
</script>
    