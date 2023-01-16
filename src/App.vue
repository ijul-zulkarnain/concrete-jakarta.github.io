<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
   <nav class=" w-full fixed">
        <ul class=" bg-[#fff]">
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
    <div class=" w-[85%] m-auto fixed z-[] top-20 left-[5.7rem] border-b-2	 border-navbar"></div>

    <div class=" w-full h-[100vh] home">
        <div class=" w-[80%] m-auto pt-[14rem] home-description">
            <h1 class="text-5xl tracking-wide leading-[4.5rem] opacity-70">AN INDIE<br>
                WEB DEVELOPMENT AND<br>
                TECHNOLOGY STUDIO.</h1>
            <span class=" block w-48 h-1 ml-[330px] bg-orange-500 rounded"></span>
            <button class="mt-5 ml-4 text-[1rem] border block rounded-[2rem] p-4 text-center opacity-70 hover:bg-slate-50 hover:text-black duration-[.7s]">Let's discuss your project</button>
        </div>
    </div>
    <!-- end navbar -->

    <div class=" w-full h-[100vh] container-how-we-work">
        <div class=" w-[80%] m-auto pt-[14rem] home-description">
            <span class=" block w-48 h-1 ml-[6px] bg-orange-500 rounded"></span>
            <h1 class="text-5xl tracking-wide leading-[4.5rem] opacity-70">HOW WE UNDERSTAND<br>
                        YOUR NEEDS & HOW WECAN<br>
                        FITIN WITH YOU!</h1>
            <p class=" w-[50%] text-xs opacity-60">We bring in our expertise and create a strategy and plan after understanding your
            needs and goals. We take personal stock in the work which leads to amazing executions!</p>
        </div>
    </div>

    <div class="  w-full h-[100vh] container-how-we-work-listen">

    </div>

    <div class=" w-full h-[100vh] container-technology-stack">
        <div class="  w-[80%] m-auto pt-[6rem] text-center  technology-stack-description">
            <h1 class=" text-4xl tracking-wide leading-[4.5rem] opacity-70 ">ADAPTIVE TECHNOLOGY</h1>
            <h1 class=" text-4xl tracking-wide leading-[4.5rem] opacity-70 ">STACK!</h1>
            <span class=" block w-40 h-1 m-auto bg-orange-500 rounded"></span>
        </div>
        
        <div class=" w-[70%] m-auto pt-11 flex justify-center gap-6 flex-wrap card-technology-stack">

            <div class=" w-32 h-20 bg-white rounded-[10px] card">Laravel</div>
            <div class=" w-32 h-20 bg-white rounded-[10px] card">Laravel</div>
            <div class=" w-32 h-20 bg-white rounded-[10px] card">Laravel</div>
            <div class=" w-32 h-20 bg-white rounded-[10px] card">Laravel</div>
            <div class=" w-32 h-20 bg-white rounded-[10px] card">Laravel</div>
            <div class=" w-32 h-20 bg-white rounded-[10px] card">Laravel</div>
            <div class=" w-32 h-20 bg-white rounded-[10px] card">Laravel</div>
            <div class=" w-32 h-20 bg-white rounded-[10px] card">Laravel</div>
            <div class=" w-32 h-20 bg-white rounded-[10px] card">Laravel</div>
            <div class=" w-32 h-20 bg-white rounded-[10px] card">Laravel</div>
            <div class=" w-32 h-20 bg-white rounded-[10px] card">Laravel</div>
            <div class=" w-32 h-20 bg-white rounded-[10px] card">Laravel</div>
            <div class=" w-32 h-20 bg-white rounded-[10px] card">Laravel</div>
            <div class=" w-32 h-20 bg-white rounded-[10px] card">Laravel</div>
            <div class=" w-32 h-20 bg-white rounded-[10px] card">Laravel</div>
            
        </div>
        <h1>testing git pull</h1>
    </div>

  <RouterView />
</template>

<style scoped>

</style>
