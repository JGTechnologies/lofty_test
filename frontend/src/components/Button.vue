<template>
  <button
    class="btn"
    :style="{
      background: background,
      color: color
    }"
    @click="$emit('clicked')"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    background: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
</style>
