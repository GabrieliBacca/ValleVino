<template>
  <button @click="activate">teste</button>
  <span v-show="active">ativado</span>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {
      active: false,
    };
  },
  methods: {
    activate() {
      this.active = !this.activate;
    },
  },
};
</script>

<!-- 
---------------------------
|                         |
|           CSS           |
|                         |
--------------------------- 
-->

<style scoped></style>
