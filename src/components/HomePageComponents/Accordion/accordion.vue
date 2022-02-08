<template>
  <div class="accord">
    <h4>RECENT TRANSITIONS</h4>
    <ul class="accordion">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      Accordion: {
        count: 0,
        active: null,
      },
    };
  },
  provide() {
    return { Accordion: this.Accordion };
  },
};
</script>

<style lang="scss" scoped>
.accord {
  margin-top: 40px;
  width: 80%;
  background-color: white;
  border-radius: 20px;
  padding-bottom: 35px;
  h4 {
    text-align: left;
    color: #a3a6b9;
    font-size: 14px;
    padding: 25px 0 0 25px;
  }
}
.accordion {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  width: 100%;

  &__item:last-child {
    border-bottom: none;
  }
}
</style>
