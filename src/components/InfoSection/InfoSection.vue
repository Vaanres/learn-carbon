<template>
  <section class="bx--row info-section">
    <div class="bx--col-md-8 bx--col-lg-4 bx--col-xlg-3">
      <h3 class="info-section__heading">{{ heading }}</h3>
      <InfoCard />
    </div>
    <slot />
  </section>
</template>
<script>
import InfoCard from "./InfoCard";

export default {
  name: "InfoSection",
  components: { InfoCard },
  props: {
    heading: String
  }
};
</script>
<style lang="scss" scoped></style>
