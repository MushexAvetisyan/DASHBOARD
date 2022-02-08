<template>
  <li class="accordion__item">
    <div
      class="accordion__trigger"
      :class="{ accordion__trigger_active: visible }"
      @click="open"
    >
      <slot name="accordion-trigger"></slot>
    </div>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div class="accordion__content" v-show="visible">
        <ul>
          <slot name="accordion-content"></slot>
          <div class="eye">
            <img
              src="../../../assets/images/download.svg"
              alt=""
              style="width: 50px; height: 50px"
            />
            <router-link to="/MyTransitions">
              <img
                src="../../../assets/images/eye.svg"
                alt=""
                style="width: 50px; height: 50px"
              />
            </router-link>
            <router-link to="/MyTransitions">
              <img
                src="../../../assets/images/Done.svg"
                alt=""
                style="width: 50px; height: 50px"
              />
            </router-link>
          </div>
        </ul>
      </div>
    </transition>
  </li>
</template>

<script>
export default {
  props: {},
  inject: ["Accordion"],
  data() {
    return {
      index: null,
    };
  },
  computed: {
    visible() {
      return this.index == this.Accordion.active;
    },
  },
  methods: {
    open() {
      if (this.visible) {
        this.Accordion.active = null;
      } else {
        this.Accordion.active = this.index;
      }
    },
    start(el) {
      el.style.height = el.scrollHeight + "px";
    },
    end(el) {
      el.style.height = "";
    },
  },
  created() {
    this.index = this.Accordion.count++;
  },
};
</script>

<style lang="scss" scoped>
.accordion__item {
  cursor: pointer;
  padding: 20px 0 30px 0;
  border-bottom: 1px solid #ebebeb;
  position: relative;
}

.accordion__content {
  cursor: auto;
  .eye {
    width: 95px;
    position: relative;
    left: 45%;
    bottom: 150px;
    height: 20px;
    img {
      margin-top: 2px;
    }
  }
}

.eyes {
  float: right;
  position: relative;
  bottom: 150px;
}

.accordion__trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.5s ease, opacity 0.5s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
