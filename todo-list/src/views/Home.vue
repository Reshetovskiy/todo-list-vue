<template>
  <div class="section">
    <div class="actions-section">
      <div class="new-task">
        <input
          class="new-task__input input"
          v-model="newTask"
          @keyup.enter="addTask"
          type="text">
        <span class="new-task__button">
          <button
            @click="addTask"
            class="btn">
           <i class="fa fa-plus"></i>
            <span class="new-task__button-desc">Добавить</span>
          </button>
        </span>
      </div>
      <div class="actions-block">
        <div class="count-block">
          {{tasks.length}}/ {{unComplete}}
        </div>
        <button
          class="btn btn--red"
          @click="tasks = []">
          <i class="fa fa-trash"></i> Видалити всі
        </button>
        <button
          class="btn btn--yellow"
          @click="clearChecked">
          <i class="fa fa-trash"></i> Видалити вибрані
        </button>
      </div>
    </div>
    <div class="tasks-list">
      <TaskItem
      v-for="(task, index) in tasks" :key="index"
      :task="task"
      @remove="removeTask(index)"
      @complete="checkedTask(task)"
      @endEditing="editingTask(task)"
      @edit="task.editing = !task.editing"/>
    </div>
  </div>
</template>

<script>
import * as localStorage from '@/utils/localStorage';
import TaskItem from "@/components/TaskItem";
import {readFromStorage, writeToStorage} from "@/utils/localStorage";
export default {
  name: 'Home',
  data: () => {
    return {
      newTask: '',
      tasks: readFromStorage('tasks')
    }
  },
  components: {TaskItem},
  computed: {
    unComplete() {
      return this.tasks.filter(this.inProgress).length;
    }
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.tasks.push({
          title: this.newTask,
          checked: false,
          editing: false
        });
        writeToStorage('tasks', this.tasks)
        this.newTask = '';
      }
    },
    checkedTask(task) {
      task.checked = !task.checked
      writeToStorage('tasks', this.tasks)
    },
    clearChecked() {
      this.tasks = this.tasks.filter(this.inProgress);
      writeToStorage('tasks', this.tasks)
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
      writeToStorage('tasks', this.tasks)
    },
    editingTask(task) {
      task.editing = false
      writeToStorage('tasks', this.tasks)
    },
    inProgress(task) {
      return ! task.checked;
    },

  },
}
</script>
