<script setup lang="ts">
import Select from './components/Select.vue';
import { defineComponent, onMounted, ref } from 'vue';
import { generateFakeData, Item } from './models/item.model';
import { useMainStore } from './store/index';

 
    const items = ref<Item[]>([]);
    const mainStore = useMainStore();

    onMounted(() => {
      items.value = mainStore.items;
    });
    function createItem() {
      mainStore.createNewItem(generateFakeData());
    }
    function deleteItem(id: string) {
      mainStore.deleteItem(id);
    }
    function updateItem(id: string) {
      mainStore.updateItem(id, generateFakeData());
    }


</script>


<template>
  <div>
    <div style="width: 100%">
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />VB-MAPP
      </a>
    </div>

    <Select />

    <button @click="createItem">New Item</button>
    <div>
      <div
        v-for="(item, index) in items"
        :key="index"
        style="
          background-color: #f5f5f5;
          padding: 10px;
          margin-bottom: 10px;
          margin-top: 10px;
        "
      >
        <code>{{ item }}</code>
        <button @click="deleteItem(item.id)">Delete</button>
        <button @click="updateItem(item.id)">Update</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;

  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
