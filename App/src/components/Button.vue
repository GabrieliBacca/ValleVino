<template>
  <button @click="activate" id="bt">teste</button>

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

<style scoped>
#bt {
  background-color: var(--color-background-dark);
  color: var(--color-background);
  font-size: 24px;
  font-family: baskerville;
  padding: 5px;
  width: 330px;
  height: 56px;
  border-radius: 8px;
}
</style>
