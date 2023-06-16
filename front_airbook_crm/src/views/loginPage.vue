<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
  />
  <div class="h-screen flex items-stretch">
    <img
      src="../assets/wave.png"
      class="fixed hidden lg:block inset-0 h-full"
      style="z-index: -1"
    />
    <div
      class="w-screen h-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2"
    >
      <img
        src="../assets/undraw_unlock_re_a558 (1).svg"
        class="hidden lg:block h-1/2 w-1/2 hover:scale-150 transition-all duration-500 transform mx-auto"
      />
      <!--<form
        class="flex flex-col border-4 border-[#4463E3] rounded-lg justify-center items-center"
      >
        <img src="../assets/undraw_pic_profile_re_7g2h (1).svg" class="w-32" />
        <h2
          class="my-8 font-display font-bold text-3xl text-gray-700 text-center"
        >
          Welcome to you
        </h2>
        <div class="relative">
          <i class="fa fa-user text-[#4463E3] text-xl"></i>
          <input
            type="text"
            placeholder="username"
            class="pl-8 border-b-2 font-display focus:outline-none focus:border-[#4463E3] transition-all duration-500 capitalize text-lg"
          />
        </div>
        <div class="relative mt-8">
          <i class="fa fa-lock text-[#4463E3] text-xl"></i>
          <input
            type="password"
            placeholder="password"
            class="pl-8 border-b-2 font-display focus:outline-none focus:border-[#4463E3] transition-all duration-500 capitalize text-lg"
          />
        </div>
        <a href="#" class="self-end mt-4 mr-16 text-gray-500 font-bold"
          >Forgot Password?</a
        >
        <a
          href="#"
          class="py-3 px-20 bg-[#4463E3] rounded-full text-while font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500"
          >Login</a
        >
      </form>-->
      <div
        class="w-[650px] content-center rounded-lg shadow-gray-800 shadow-md bg-transparent border border-white"
      >
        <div class="py-6 px-6 lg:px-8">
          <div class="border-b md:border-gray-100 sm:border-gray-500">
            <h3
              class="mb-1 text-4xl font-extrabold sm:text-gray-800 md:text-[#4463E3]"
            >
              Login
            </h3>
          </div>
          <form class="space-y-6 pt-4" @submit.prevent="login">
            <div>
              <div class="flex justify-start p-0 m-0">
                <label
                  for="username"
                  class="block mb-2 text-sm font-medium w-1/2 sm:text-gray-800 md:text-gray-900 text-left"
                  >Your username</label
                >
              </div>

              <!-- <input type="email" @blur="isGoodFormat" v-model="user.email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,10}$" id="email" class=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" placeholder="name@company.com" required> -->
              <input
                type="text"
                v-model="user.name"
                class="border shadow-lg shadow-[#4463E3] text-sm rounded-lg block w-full p-2.5 bg-transparent border-gray-500 placeholder-gray-500 text-gray-900"
                placeholder="username"
                required
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium sm:text-gray-800 md:text-gray-900 text-left"
                >Your password</label
              >
              <input
                type="password"
                v-model="user.password"
                id="password"
                placeholder="••••••••"
                class="border text-sm shadow-lg shadow-[#4463E3] rounded-lg block w-full p-2.5 bg-transparent border-gray-500 placeholder-gray-500 text-gray-900"
                required
              />
            </div>
            <div class="flex justify-between">
              <!-- <div class="flex items-start">
                                              <div class="flex items-center h-5">
                                                  <input id="remember" v-model="user.remember" type="checkbox" value="" class="w-4 h-4 text-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" >
                                              </div>
                                              <label for="remember" class="ml-2 text-sm font-medium text-gray-600">Remember me</label>
                                          </div> -->
              <a href="#" class="text-sm text-primary hover:underline"
                >Lost Password?</a
              >
            </div>
            <button
              type="submit"
              class="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#4463E3] hover:bg-gray-300 focus:ring-gray-700"
            >
              Login
            </button>

            <!-- <div class="text-sm font-medium text-gray-500">
              Not registered?
              <a href="#" class="hover:underline text-primary"
                >Create account</a
              >
            </div> -->
          </form>
        </div>
      </div>
    </div>

    <img
      src="../assets/wave2.png"
      class="hidden lg:block inset-0 h-full"
      style="z-index: -1"
    />
  </div>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";
import router from "../router";

let name;
const user = ref({
  name: "",
  password: "",
});
const login = () => {
  axios
    .post("http://localhost:3000/user/log", user.value)
    .then((response) => {
      //name = response;
      // console.log(name.data);
      router.push({ name: "Default" });
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
