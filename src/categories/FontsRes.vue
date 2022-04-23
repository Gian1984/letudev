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
                    <router-link to="/fonts" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Fonts</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Fonts</h2>
              <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                <div class="mt-2 flex text-sm text-gray-500">
                  <CalendarIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  Last update - {{moment().format('MMMM DD')}}, {{moment().format('YYYY')}}
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
import moment from "moment";

const projects = [
  { name: 'Google Fonts', href: "https://fonts.google.com/", desc:'Library of around 1000 free licensed font families', bgColor: 'bg-pink-600' },
  { name: 'DaFont', href:"https://www.dafont.com/", desc:'Archive of freely downloadable fonts', bgColor: 'bg-purple-600' },
  { name: 'Use & Modify', href: "https://usemodify.com/", desc: 'Personal selection of beautiful, classy, punk, professional, incomplete, weird typefaces', bgColor: 'bg-yellow-500' },
  { name: '1001 Free Fonts', href: "https://www.1001freefonts.com/", desc: 'I think the name speaks for itself', bgColor: 'bg-green-500' },
  { name: 'Font Squirrel', href: "https://www.fontsquirrel.com/", desc: 'Font Squirrel scours the internet for high quality, legitimately free fonts', bgColor: 'bg-orange-500' },
  { name: 'Font Fabric', href: "https://www.fontfabric.com/free-fonts/", desc: 'A digital type foundry crafting retail fonts and custom typography for various brands', bgColor: 'bg-blue-500' },
  { name: 'Tiff', href: "https://tiff.herokuapp.com/", desc: 'A type diff tool that visually contrasts the differences between two fonts', bgColor: 'bg-cyan-500' },
  { name: 'TypeKit Practice', href: "https://practice.typekit.com/", desc: 'Learn about typography practices', bgColor: 'bg-sky-500' },
  { name: 'Fontjoy', href: "https://fontjoy.com/", desc: 'Generate font pairing in one click', bgColor: 'bg-amber-500' },
  { name: 'Golden Ratio', href: "https://grtcalculator.com/", desc: 'Golden Ratio Typography Calculator', bgColor: 'bg-red-500' },
  { name: 'FontGet', href: "https://www.fontget.com/", desc: 'Has a variety of fonts available to download and sorted neatly with tags', bgColor: 'bg-emerald-500' },
  { name: 'FontPair', href: "https://fontpair.co/", desc: 'Helps you pair Google Fonts together', bgColor: 'bg-pink-500' },
  { name: 'Font Space', href:"https://www.fontspace.com/", desc:'A designer-centered free font website that has quick customizable previews', bgColor: 'bg-purple-600' },
  { name: 'Abstract Fonts', href: "http://www.abstractfonts.com/", desc: 'Fonts free for personal and commercial use', bgColor: 'bg-yellow-500' },
  { name: 'Free Typography', href: "https://freetypography.com/" , desc: 'A list of high quality fonts', bgColor: 'bg-green-500' },
  { name: 'Leon Sans', href: "https://github.com/cmiscm/leonsans/", desc: 'A geometric sans-serif typeface made with code', bgColor: 'bg-orange-500' },
  { name: 'Lexend', href: "https://www.lexend.com/", desc: 'A variable font empirically shown to significantly improve reading-proficiency', bgColor: 'bg-blue-500' },
  { name: 'Fonts for Apple Platforms', href: "https://developer.apple.com/fonts/", desc: 'Get the details, frameworks, and tools you need to use system fonts for Apple platforms in your apps', bgColor: 'bg-cyan-500' },
  { name: 'SFWin', href: "https://github.com/blaisck/sfwin/", desc: 'San Francisco Fonts for Windows 10 and non-Apple Platform<', bgColor: 'bg-sky-500' },
  { name: 'Font Flipper', href: "https://fontflipper.com/", desc: 'Preview 800+ Google Fonts on top of your own designs, without having to download the fonts', bgColor: 'bg-amber-500' },
  { name: 'Fonts Arena', href: "https://fontsarena.com/", desc: 'Free curated fonts', bgColor: 'bg-red-500' },
  { name: 'Befonts', href: "https://befonts.com/", desc: 'High quality fonts for free', bgColor: 'bg-emerald-500' },
  { name: 'Arabic fonts', href: "https://arabicfonts.net/", desc: 'Arabic fonts for free', bgColor: 'bg-pink-500' },
  { name: 'FontDrop', href:"https://fontdrop.info" , desc:'Simple and easy way to view the contents of font files', bgColor: 'bg-purple-600' },
  { name: 'Open Foundry', href: "https://open-foundry.com", desc: 'FREE platform for curated open-source typefaces', bgColor: 'bg-yellow-500' },
  { name: 'Glyphter', href: "https://glyphter.com", desc: 'Upload your own SVGS and turn them into font files. Useful if you want a smaller library loaded', bgColor: 'bg-green-500' },
  { name: 'Google Webfonts Helper', href: "https://google-webfonts-helper.herokuapp.com/fonts", desc: 'A Hassle-Free Way to Self-Host Google Fonts', bgColor: 'bg-orange-500' },
  { name: 'Rough Font Awesome', href: "https://djamshed.github.io/rough-awesome-font/dist/", desc: 'When RoughJS meets Font Awesome', bgColor: 'bg-blue-500' },
  { name: 'FFonts', href: "https://ffonts.net", desc: 'Stylish fonts for free', bgColor: 'bg-cyan-500' },
  { name: 'Malayalam Fonts', href: "https://smc.org.in/fonts/", desc: 'Malayalam fonts for free which are maintained by Swathanthra Malayalam Computing(SMC)', bgColor: 'bg-amber-500' },
  { name: 'Dev Fonts', href: "https://devfonts.gafi.dev/", desc: 'Find and use the coding fonts for free', bgColor: 'bg-red-500' },
  { name: 'Font M', href: "https://fontm.com/", desc: 'Free font you can download for material coding and design', bgColor: 'bg-emerald-500' },
  { name: 'W Fonts', href: "https://www.wfonts.com/", desc: 'Download Free fonts', bgColor: 'bg-pink-500' },
  { name: 'Modern fluid typography editor', href:"https://modern-fluid-typography.vercel.app/", desc:'Fluid typography is a modern way of approaching responsive typography.', bgColor: 'bg-purple-600' },
  { name: 'UrbanFonts', href: "https://www.urbanfonts.com/", desc: 'A collection of over 8000 free fonts and dingbats', bgColor: 'bg-yellow-500' },
]

export default {
  computed: {

    filterProjects() {
      return this.projects.filter(result => {
        const myRegex = new RegExp(this.searchQuery, 'gi');
        let resultFacet = this.facet;
        if (resultFacet.length == 0) {
          return (result.name.match(myRegex) || result.name.match(myRegex))
        }
        return (result.name.match(myRegex) || result.name.match(myRegex)) && (resultFacet.includes(result.id));
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
      moment
    }
  },
}
</script>
