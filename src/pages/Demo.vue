<template>
  <div>
    <js-child-component />
    <ts-child-component ref="tsChild" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "@vue/composition-api";
import JsChildComponent from "./JsChildComponent.vue";
import TsChildComponent from "./TsChildComponent.vue";

export default defineComponent({
  name: "Demo",
  components: {
    JsChildComponent,
    TsChildComponent,
  },
  setup() {
    const tsChild = ref<InstanceType<typeof TsChildComponent>>();

    onMounted(() => {
      tsChild.value!.work();
    });

    return { tsChild };
  },
});
</script>

<style lang="scss" module></style>
