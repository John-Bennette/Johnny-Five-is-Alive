
<template>
  <footer>
    <p>{{ footerData.text }}</p>
  </footer>
</template>

<script>
export default {
  props: {
    footerData: Object,
  },
}
</script>