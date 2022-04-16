<template>
  <header>
    <div>
      <div>
        <img class="h-32 w-full object-cover lg:h-48" src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="header_res" />
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div>
          <div>
            <nav class="sm:hidden" aria-label="Back">
              <router-link to="/resources" class="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
                <ChevronLeftIcon class="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                Resources
              </router-link>
            </nav>
            <nav class="hidden sm:flex" aria-label="Breadcrumb">
              <ol role="list" class="flex items-center space-x-4">
                <li>
                  <div class="flex">
                    <router-link to="/" class="text-sm font-medium text-gray-500 hover:text-gray-700">Home</router-link>
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <ChevronRightIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <router-link to="/resources" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Resources</router-link>
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <ChevronRightIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <router-link to="/cssanimations" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">CSS Animations</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">CSS Animations</h2>
              <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                <div class="mt-2 flex text-sm text-gray-500">
                  <CalendarIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  Last update - March 9, 2022
                </div>
              </div>
            </div>
            <!--            <div class="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">-->
            <!--              <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Edit</button>-->
            <!--              <button type="button" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Publish</button>-->
            <!--            </div>-->
          </div>
        </div>
      </div>
    </div>
  </header>

  <main class="-mt-32 max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8 mt-24 mb-10">

    <div>
      <label for="name" class="mt-5 block text-sm font-medium text-gray-700">
        Find your resource
      </label>
      <input type="search" v-model="searchQuery" name="name" id="name"  class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" placeholder="Enter a search here!" />
    </div>

    <div>
      <p class="mb-2 text-right" v-if="searchQuery && filterProjects.length > 1 ">{{filterProjects.length}} results</p>
      <div v-if="!searchQuery"></div>
      <div v-else class="border-2 border-orange-300 rounded-2xl mt-2">
        <ul role="list" class="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-1 lg:grid-cols-1 px-2 py-2">
          <li v-for="project in filterProjects" :key="project.name" class="col-span-1 flex shadow-sm rounded-md">
            <div :class="[project.bgColor, 'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md']"></div>
            <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div class="flex-1 px-4 py-2 text-sm truncate">
                <a :href="project.href" target="_blank" class="text-gray-900 font-medium hover:text-gray-600 uppercase">{{ project.name }}</a>
                <p class="text-gray-500">{{ project.desc }} </p>
              </div>
              <div class="flex-shrink-0 pr-2">
                <a :href="project.href" type="button" target="_blank" class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                  <span class="sr-only">Open options</span>
                  <ChevronDoubleRightIcon class="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <h2 class="mt-10 text-gray-500 text-xs font-medium uppercase tracking-wide">Pinned Projects</h2>
    <ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-1 lg:grid-cols-2">
      <li v-for="project in projects" :key="project.name" class="col-span-1 flex shadow-sm rounded-md">
        <div :class="[project.bgColor, 'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md']"></div>
        <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
          <div class="flex-1 px-4 py-2 text-sm truncate">
            <a :href="project.href" target="_blank" class="text-gray-900 font-medium hover:text-gray-600 uppercase">{{ project.name }}</a>
            <p class="text-gray-500">{{ project.desc }} </p>
          </div>
          <div class="flex-shrink-0 pr-2">
            <a :href="project.href" type="button" target="_blank" class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
              <span class="sr-only">Open options</span>
              <ChevronDoubleRightIcon class="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
import { ChevronDoubleRightIcon, CalendarIcon } from '@heroicons/vue/outline'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid'

const projects = [
  { name: 'Animate.css', href:"https://animate.style/", desc:'Just-add-water CSS animations', bgColor: 'bg-pink-600' },
  { name: 'Bounce.js', href:"http://bouncejs.com/", desc:'Bounce.js is a tool and JS library that lets you create beautiful CSS3 powered animations', bgColor: 'bg-purple-600' },
  { name: 'Anime.js', href:"https://animejs.com/", desc:'Anime.js (/ˈæn.ə.meɪ/) is a lightweight JavaScript animation library with a simple, yet powerful API. It works with CSS properties, SVG, DOM attributes and JavaScript Objects', bgColor: 'bg-yellow-500' },
  { name: 'Magic Animations', href:"https://www.minimamente.com/project/magic/", desc: 'Animations has been one of the most impressive animation libraries availabl', bgColor: 'bg-green-500' },
  { name: 'Zdog', href:"https://zzz.dog/", desc: 'Round, flat, designer-friendly pseudo-3D engine for canvas & SVG', bgColor: 'bg-orange-500' },
  { name: 'CSShake', href:"http://elrumordelaluz.github.io/csshake/", desc: 'CSShake delivers exactly what it says on the box — a CSS library designed specifically for shaking elements within your web page', bgColor: 'bg-blue-500' },
  { name: 'Hover.css', href:"http://ianlunn.github.io/Hover/", desc: 'Hover.css is a CSS animation library designed for use with buttons and other UI elements in your website', bgColor: 'bg-cyan-500' },
  { name: 'AniJS', href:"http://anijs.github.io/", desc:'AniJS is an animation library that allows you to add animations to elements in a simple ‘sentence-like’ structure', bgColor: 'bg-sky-500' },
  { name: 'Animista', href:"http://animista.net/", desc: 'CSS Animations On Demand', bgColor: 'bg-amber-500' },
  { name: 'Tachyons-animate', href:"https://github.com/anater/tachyons-animate", desc: 'Tachyons itself is an atomic CSS library with a ton of utility classes for essentially designing anything by adding classes to what you need', bgColor: 'bg-red-500' },
  { name: 'Sequence.js', href:"https://www.sequencejs.com/", desc: 'Sequence.js is a JavaScript library that provides a responsive CSS framework for creating unique sliders, presentations, banners, and other step-based applications', bgColor: 'bg-emerald-500' },
  { name: 'Infinite', href:"https://tilomitra.github.io/infinite/", desc: 'These animations, like rotations and pulses, that are specifically designed to run and repeat forever', bgColor: 'bg-pink-500' },
  { name: 'OBNOXIOUS.CSS', href:"http://tholman.com/obnoxious/" , desc:'Animations for the strong of heart, and weak of mind', bgColor: 'bg-purple-600' },
  { name: 'MOTION UI', href:"https://zurb.com/playground/motion-ui", desc: 'A Sass library for creating flexible CSS transitions and animations', bgColor: 'bg-yellow-500' },
  { name: 'Keyframes.app', href:"https://keyframes.app/", desc: 'A graphical user interface for generating custom CSS keyframe animations', bgColor: 'bg-green-500' },
  { name: 'Thoughtbot', href: "https://thoughtbot.com/blog/transitions-and-transforms", desc: 'CSS Transitions and Transformations for Beginners', bgColor: 'bg-orange-500' },
  { name: 'SVG Artista', href:"https://svgartista.net/", desc: 'A useful tool to animate stroke and fill properties in SVG images with plain CSS code', bgColor: 'bg-blue-500' },
  { name: 'AnimXYZ', href:"https://animxyz.com/", desc: 'AnimXYZ helps you create, customize, and compose animations for your website. Built for Vue, React, SCSS, and CSS', bgColor: 'bg-cyan-500' },
  { name: 'Whirl', href:"https://github.com/jh3y/whirl", desc: 'CSS loading animations with minimal effort!', bgColor: 'bg-sky-500' },
  { name: 'Hamburgers', href:"https://jonsuh.com/hamburgers/", desc: 'Hamburgers is a collection of tasty CSS-animated hamburger icons. Also included is the source as a Sass library. It’s modular and customizable, so cook up your own hamburger.', bgColor: 'bg-amber-500' },
  { name: 'CSS Loaders & Spinners', href:"https://cssloaders.github.io/", desc: 'This is a library having a collection of different types of CSS loaders, spinners', bgColor: 'bg-red-500' },
  { name: 'Motion One', href:"https://motion.dev/", desc:'A new animation library, built on the Web Animations API for the smallest filesize and the fastest performance.', bgColor: 'bg-emerald-500' },
  { name: 'Pocoloco', href:"https://pocoloco.io/", desc: 'Generate dynamic backgrounds for your website', bgColor: 'bg-pink-500' },
  { name: 'AniX', href:"https://drawcall.github.io/AniX/", desc:'Super easy and lightweight css animation library.', bgColor: 'bg-purple-600' },
]

export default {
  computed: {

    filterProjects() {
      return this.projects.filter(result => {
        const myRegex = new RegExp(this.searchQuery, 'gi');
        let resultFacet = this.facet;
        if (resultFacet.length == 0) {
          return (result.desc.match(myRegex) || result.desc.match(myRegex))
        }
        return (result.desc.match(myRegex) || result.desc.match(myRegex)) && (resultFacet.includes(result.id));
      })
    },
  },

  data(){
    return{
      facet: [],
      searchQuery: null,
    }
  },

  components: {
    CalendarIcon,
    ChevronDoubleRightIcon,
    ChevronLeftIcon,
    ChevronRightIcon
  },
  setup() {
    return {
      projects,
    }
  },
}
</script>
