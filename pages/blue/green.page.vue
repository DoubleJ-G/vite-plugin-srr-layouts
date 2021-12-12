<template>
  <div>
    <h1>
      This page uses BlueLayout by default but overrides it with GreenLayout
    </h1>
    <a href="/">Go Back</a>
  </div>
</template>

<script lang="ts">
import GreenLayout from '../../layouts/GreenLayout.vue';
export default {
  layout: GreenLayout,
};
</script>
