<template>
  <info-section heading="The Principles" class="landing-page__r3">
    <info-card
      heading="Carbon is Open"
      body="It's a distributed effort, guided by the principles of the open-source movement. Carbon's users are also it's makers, and everyone is encouraged to contribute."
      :icon="PersonFavorite32"
    />
    <info-card
      heading="Carbon is Modular"
      body="Carbon's modularity ensures maximum flexibility in execution. It's components are designed to work seamlessly with each other, in whichever combination suits the needs of the user."
      :icon="Application32"
    />
    <info-card
      heading="Carbon is Consistent"
      body="Based on the comprehensive IBM Design Language, every element and component of Carbon was designed from the ground up to work elegantly together to ensure consistent, cohesive user experiences."
      :icon="Globe32"
    />
  </info-section>
</template>

<script>
import Globe32 from "@carbon/icons-vue/lib/globe/32";
import PersonFavorite32 from "@carbon/icons-vue/lib/person--favorite/32";
import Application32 from "@carbon/icons-vue/lib/application/32";

import { InfoSection, InfoCard } from "../../components/InfoSection";
export default {
  name: "LandingPage",
  components: { InfoSection, InfoCard },
  created() {
    // Add icons to this

    Object.assign(this, {
      Globe32,
      PersonFavorite32,
      Application32
    });
  }
};
</script>

<style lang="scss">
@import "../../styles/_carbon-utils";
.info-section__heading {
  @include carbon--type-style("heading-01");
}
</style>
