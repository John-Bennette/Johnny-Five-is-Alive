<template>
  <div>
    <!-- ...existing code... -->
    <HeaderComponent :title="title" />
    <ContentComponent :content="content" />
    <FooterComponent :footerData="footerData" />
    <!-- ...existing code... -->
  </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import ContentComponent from './ContentComponent.vue';
import FooterComponent from './FooterComponent.vue';

export default {
  components: {
    HeaderComponent,
    ContentComponent,
    FooterComponent,
  },
  props: {
    title: String,
    content: String,
    footerData: Object,
  },
  // ...existing code...
}
</script>
