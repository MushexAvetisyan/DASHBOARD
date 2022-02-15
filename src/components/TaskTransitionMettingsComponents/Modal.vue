<template>
  <div class="modalComponent">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header">
                <span class="modal-close-button" @click="$emit('close')"
                  >X</span
                >
              </slot>
            </div>

            <div class="modal-body">
              <slot name="body">
                <input type="text" placeholder="Type your note here" @change="onChange"/>
              </slot>
            </div>

            <div class="modal-footer">
              <slot name="footer">
                <button class="modal-default-button" @click="$emit('change', )">
                  Save
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data: () => ({

  }),
  methods: {
    onChange(event) {
      this.$emit('onChange', event.target.value)
    }
  }
};
</script>

<style scoped lang="scss">
.modal-mask {
  position: absolute;
  z-index: 9998;
  right: 285px;
  bottom: 50px;
  height: 100%;
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 400px;
  height: 165px;
  margin: 0 auto;
  padding: 15px 15px;
  background-color: #fff;
  border-radius: 25px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 33%);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
  input {
    width: 75%;
    height: 30px;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    margin-top: 25px;
  }
}

.modal-close-button {
  float: right;
  color: black;
  cursor: pointer;
  font-size: 25px;
  font-weight: 600;
}
.modal-default-button {
  float: right;
  margin-top: 25px;
  border: none;
  background: none;
  color: #6d32a5;
  font-weight: 700;
  cursor: pointer;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
