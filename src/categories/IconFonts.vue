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
                    <router-link to="/iconfonts.vue" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Icon Fonts</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Icon Fonts</h2>
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
  { name: 'Font Awesome', href: "https://fontawesome.com/", desc:'The web\'s most popular icon set and toolkit', bgColor: 'bg-pink-600' },
  { name: 'Line Awesome', href:"https://icons8.com/line-awesome", desc:'Swap in replacement of Font Awesome with modern line icons', bgColor: 'bg-purple-600' },
  { name: 'Material Icons', href: "https://material.io/resources/icons/", desc: 'Material design icon library', bgColor: 'bg-yellow-500' },
  { name: 'IonIcons', href: "http://ionicons.com/" , desc: 'Beautifully crafted open source icons from Ionic team', bgColor: 'bg-green-500' },
  { name: 'Zurb Foundation Icons', href: "https://zurb.com/playground/foundation-icon-fonts-3", desc: 'Customizable Foundation icons', bgColor: 'bg-orange-500' },
  { name: 'Fontisto Icons', href: "https://fontisto.com/", desc: 'Fontisto the iconic font and css toolkit · 616+ free icons', bgColor: 'bg-blue-500' },
  { name: 'Boxicons', href: "https://boxicons.com/", desc: 'Boxicons is a free collection of carefully crafted open source icons', bgColor: 'bg-cyan-500' },
  { name: 'Icofont', href: "https://icofont.com/", desc: '2100+ free icons to spice up your creative designs', bgColor: 'bg-sky-500' },
  { name: 'Material Palette', href: "https://www.materialpalette.com/icons", desc: 'Free to pick palettes, icons and colors for Material Design', bgColor: 'bg-amber-500' },
  { name: 'Material Design Iconic Font', href: "http://zavoloklom.github.io/material-design-iconic-font/index.html", desc: 'Material design icon font', bgColor: 'bg-red-500' },
  { name: 'Vscode Codicons', href: "https://microsoft.github.io/vscode-codicons/dist/codicon.html", desc: 'The icon font from Visual Studio Code', bgColor: 'bg-emerald-500' },
  { name: 'Devicon', href: "https://devicon.dev", desc: 'Devicon is a set of icons representing programming languages, designing &amp; development tools', bgColor: 'bg-pink-500' },
  { name: 'PaymentFont', href:"https://github.com/AlexanderPoellmann/PaymentFont", desc:'A sleek web font for payment operators and methods. Featuring 116 icons', bgColor: 'bg-purple-600' },
  { name: 'Weather Icons', href: "https://erikflowers.github.io/weather-icons/", desc: 'Weather Icons is the only icon font with 222 weather themed icons', bgColor: 'bg-yellow-500' },
  { name: 'Stroke 7', href: "https://themes-pixeden.com/font-demos/7-stroke/index.html", desc: '202 thin stroke icons inspired by iOS 7', bgColor: 'bg-green-500' },
  { name: 'Jam Icons', href: "https://jam-icons.com/", desc: '890+ handcrafted icons to make your web app awesome', bgColor: 'bg-orange-500' },
  { name: 'Fontello', href: "http://fontello.com/", desc: '200+ web icons where you can customize the names or codes of icons.', bgColor: 'bg-blue-500' },
  { name: 'Linea', href: "https://linea.io/", desc: 'Linea: Featuring 750+ Free Icons', bgColor: 'bg-cyan-500' },
  { name: 'Unicons', href: "https://iconscout.com/unicons", desc: 'A set of 1100+ Free line style icons available as web font, SVG icons, and as components for JS frameworks like React, Vue and React Native.', bgColor: 'bg-sky-500' },
  { name: 'Mobirise Icons', href: "https://mobiriseicons.com/", desc: 'A free, open source set of 150 elegant, pixel-perfect linear icons, available as web icon font and SVG icons.', bgColor: 'bg-amber-500' },
  { name: 'Hero Icons', href: "https://heroicons.dev/", desc: 'Free Open Source Svg Icon Library', bgColor: 'bg-red-500' },
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
