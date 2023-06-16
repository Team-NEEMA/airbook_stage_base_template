<template>
  <div class="h-screen flex items-stretch">
    <div class=""></div>
    <div class="h-full w-[300px]">
      <logo />
      <SideBar />
    </div>
    <div class="h-full w-full bg-white">
      <NavBar />
      <div class="mt-7"><router-view></router-view></div>
    </div>
  </div>
</template>

<script setup>
import SideBar from "../components/SideBar.vue";
import NavBar from "../components/NavBar.vue";
import logo from "../components/logo.vue";
</script>
