<template>
<div class="task">
  <div class="task__desc">
    <div @dblclick="$emit('edit')">
    <input
      :class="`input task__input ${task.checked ? 'checked' : ''}`"
      v-model="task.title"
      :disabled="!task.editing"
      @keyup.enter="$emit('endEditing')"
      @blur="$emit('endEditing')"
      type="text">
  </div>
  </div>
 <div class="task__actions actions-task">
   <button
     class="btn actions-task__btn"
     @click.self="$emit('complete')">
     <i :class="`fa ${task.checked ? 'fa-check-square' : 'fa-square'}`"></i>
   </button>
   <button
     class="btn actions-task__btn"
     @click="$emit('edit')">
     <i class="fa fa-pencil"></i>
   </button>
   <button
     class="btn btn--red actions-task__btn"
     @click="$emit('remove')">
     <i class="fa fa-trash"></i>
   </button>
 </div>
</div>
</template>

<script>
export default {
name: "TaskItem",
  props: {
    task: {
      type: Object,
      default: () => {}
    },
  },
  data() {
    return {
      currentTask: this.task
    }
  },

}
</script>

<style scoped lang="sass">
  .task
    display: flex
    &__actions
      display: flex
</style>
