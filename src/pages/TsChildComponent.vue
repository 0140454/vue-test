<template>
  <div />
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "TsChildComponent",
  setup() {
    const work = () => {
      console.log("TsChildComponent");
    };

    return { work };
  },
});
</script>

<style lang="scss" module></style>
