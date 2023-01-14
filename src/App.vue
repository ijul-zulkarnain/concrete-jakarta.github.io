<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
   <nav class=" w-full fixed">
        <ul class=" bg-slate-300">
            <li><a href="">Home</a></li>
            <li><a href="">Product</a></li>
            <li><a href="">Service</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact Us</a></li>
        </ul>

        <div class="menu-toggle" id="toggle">
            <input type="checkbox">
            <span class=""></span>
            <span class=""></span>
            <span class=""></span>
        </div>

        <div class="title-navabar">
            <img class=" w-36 ml-[170px]" src="./img/logo.png" alt="">
        </div>

        <div class=" hover:text-slate-500 cursor-pointer duration-100 contact-us">
            <a>Contact Us </a>
        </div>
    </nav>
    <div class=" w-[85%] m-auto fixed top-20 left-[5.7rem] border-b-2	 border-navbar"></div>

    <div class=" w-full h-[100vh] home">
        <div class=" w-[80%] m-auto pt-[16rem] home-description">
            <h1 class="text-5xl tracking-wide leading-[4.5rem] opacity-70">AN INDIE<br>
                WEB DEVELOPMENT AND<br>
                TECHNOLOGY <span>STUDIO</span></h1>
            <button class="mt-5 ml-4 text-[1rem] border block rounded-[2rem] p-4 text-center opacity-70 hover:bg-slate-50 hover:text-black duration-[.7s]">Let's discuss your project</button>
        </div>
    </div>
    <!-- end navbar -->
  <RouterView />
</template>

<style scoped>

</style>
