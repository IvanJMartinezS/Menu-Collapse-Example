<script setup>
import { Transition, ref } from "vue";
import MenuItems from "./MenuItems";
import MenuItem from "./MenuItem.vue";

const collapsed = ref(false);
</script>

<template>
  <div :class="['menu', collapsed ? 'collapsed' : 'expanded']">
    <div class="header">
      <button class="menu-button" @click="collapsed = !collapsed">
        <font-awesome-icon icon="fa-solid fa-bars" size="2x" />
      </button>
    </div>

    <div class="profile">
      <img src="../assets/ivanjmartinezs.jpg" alt="img-profile-photo" />
      <div class="profile-name" v-if="!collapsed">
        {{ MenuItems.profile.name }}
      </div>
    </div>

    <div class="menu-items">
      <ul>
        <MenuItem
          v-for="menuItem in MenuItems.items"
          :key="menuItem.id"
          :item="menuItem"
          :collapsed="collapsed"
        />
      </ul>
    </div>
  </div>
</template>

<style scoped>
.menu {
  background-color: #222;
  color: white;
  height: 100vh;
  transition: width 0.3s;
  font-family: Arial, Helvetica, sans-serif;
  position: fixed;
  left: 0;
  top: 0;
}

.header {
  display: flex;
  justify-content: end;
}

.menu-button {
  border: none;
  background-color: transparent;
  color: white;
  padding: 10px;
}

/* we will explain what these classes do next! */
.collapsed {
  width: 80px;
}

.expanded {
  width: 350px;
}

.profile {
  padding: 10px;
  text-align: center;
}
.profile img {
  border-radius: 50%;
  min-width: 0px;
  max-width: 200px;
  width: 100%;
}

.profile-name {
  padding: 10px 0;
  font-size: 18px;
}

.menu-items ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>