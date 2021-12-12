<template>
  <div>
    <js-child-component />
    <ts-child-component
      ref="tsChild"
      @click="onClickChildComponent"
      :style="componentStyle"
    />
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
    const onClickChildComponent = () => {
      console.log("onClickChildComponent");
    };
    const componentStyle = ref("color: black;");

    onMounted(() => {
      tsChild.value!.work();
    });

    return { tsChild, onClickChildComponent, componentStyle };
  },
});
</script>

<style lang="scss" module></style>
