<template>
  <div>
    <first-dialog
    ></first-dialog>
  </div>
</template>


<script>
import firstDialog from "./firstDialog.vue";
export default {
  components: { firstDialog },
  name: "CreateRoutinePopUp",
  data: () => ({
    props: ["createRoutineDialog"],
  }),
};
</script>

<style scoped>
#sub {
  background-color: #f0f0f0;
}
</style>
