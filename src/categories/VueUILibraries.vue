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
                    <router-link to="/vueuilibraries" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Vue UI Libraries</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Vue UI Libraries</h2>
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
  { name: 'Vuetify', href:"https://vuetifyjs.com/en/", desc:'Material design component framework', bgColor: 'bg-pink-600' },
  { name: 'Bootstrap Vue', href:"https://bootstrap-vue.org/", desc:'Use Bootstrap components with Vue', bgColor: 'bg-purple-600' },
  { name: 'Buefy', href:"https://buefy.org/", desc: 'Lightweight UI components based on Bulma', bgColor: 'bg-yellow-500' },
  { name: 'Semantic UI Vue', href:"https://semi.design/en-US", desc: 'Semantic UI Vue is the Vue integration for Semantic UI', bgColor: 'bg-green-500' },
  { name: 'Arco Design Vue', href:"https://arco.design/vue/en-US/docs/start", desc: 'A comprehensive Vue UI components library based on the Arco Design system.', bgColor: 'bg-orange-500' },
  { name: 'VEUI', href:"https://veui.dev/en-US", desc: 'VEUI is an enterprise UI component library, based on Vue.js.', bgColor: 'bg-blue-500' },
  { name: 'Grace', href:"https://github.com/Trendyol/grace", desc: 'Design System For Vue Applications.', bgColor: 'bg-cyan-500' },
  { name: 'Quasar', href:"https://quasar.dev/" , desc: 'High-performance Material Design component suite with builders for SPA, SSR, PWA, Mobile (Cordova & Capacitor), Desktop (Electron) and Browser extensions', bgColor: 'bg-sky-500' },
  { name: 'Element', href:"https://element.eleme.io/#/en-US", desc: 'Desktop UI library for Vue', bgColor: 'bg-amber-500' },
  { name: 'Fish UI', href:"https://myliang.github.io/fish-ui/#/components/index", desc: 'Vue UI toolkit for the web', bgColor: 'bg-red-500' },
  { name: 'Keen UI', href:"https://josephuspaye.github.io/Keen-UI", desc: 'VueUI library with a simple API, inspired by Google\'s Material Design', bgColor: 'bg-emerald-500' },
  { name: 'Materio Vuetify Vuejs Admin Template', href:"https://github.com/themeselection/materio-vuetify-vuejs-admin-template-free", desc: 'Open-source & Easy to use Vuetify Vuejs Admin Template with Elegant Design &amp; Unique Layou', bgColor: 'bg-pink-500' },
  { name: 'Onsen Vue', href:"https://onsen.io/vue/", desc:'Distributes Components for hybrid mobile apps with Vue and Onsen UI', bgColor: 'bg-purple-600' },
  { name: 'Vuejsexamples', href:"https://vuejsexamples.com"  , desc: 'A nice collection of useful vuejs UI components', bgColor: 'bg-yellow-500' },
  { name: 'Inkline', href:"https://inkline.io", desc: 'Inkline is a modern UI/UX Framework for Vue.js designed for creating flawless responsive web applications', bgColor: 'bg-green-500' },
  { name: 'Vuesax', href:"https://vuesax.com/", desc: 'Unique and reusable UI components', bgColor: 'bg-orange-500' },
  { name: 'Antdv', href:"https://antdv.com/", desc: 'UI library for Vue based on Ant Design', bgColor: 'bg-blue-500' },
  { name: 'Shards Vue', href:"https://designrevision.com/downloads/shards-vue/" , desc: 'A high-quality & free Vue UI kit featuring a modern design system with dozens of custom components', bgColor: 'bg-cyan-500' },
  { name: 'Prime Vue', href:"https://www.primefaces.org/primevue/", desc: 'Powerful yet simple to use, versatile, performant Vue UI Component Library to help you build stunning user interfaces.', bgColor: 'bg-sky-500' },
  { name: 'Chakra UI Vue', href:"https://vue.chakra-ui.com/", desc: 'Chakra UI is a simple modular and accessible component library that gives you the building blocks to build Vue applications with speed.', bgColor: 'bg-amber-500' },
  { name: 'View UI', href:"https://www.iviewui.com/", desc: 'Dozens of useful and beautiful Vue components made for people with all skill levels with extensive documentation.', bgColor: 'bg-red-500' },
  { name: 'Particles.vue', href:"https://github.com/matteobruni/tsparticles/tree/main/components/vue", desc: 'A lightweight Vue 2.x component for creating particles', bgColor: 'bg-emerald-500' },
  { name: 'Particles.vue3', href:"https://github.com/matteobruni/tsparticles/tree/main/components/vue3", desc: 'A lightweight Vue 3.x component for creating particles', bgColor: 'bg-pink-500' },
  { name: 'TC Components', href:"https://components.timos.design" , desc:'A library of high-quality ready to use components that will help you speed up your development workflow.', bgColor: 'bg-purple-600' },
  { name: 'Vant', href:"https://youzan.github.io/vant" , desc: 'Lightweight Mobile UI Components built on Vue.', bgColor: 'bg-yellow-500' },
  { name: 'Equal UI', href:"https://quatrochan.github.io/Equal/", desc: 'Open-source Vue 3 components system for your next project based on TypeScript', bgColor: 'bg-green-500' },
  { name: 'Mint UI', href:"https://mint-ui.github.io/#!/en", desc: 'Mobile UI elements for Vue.js', bgColor: 'bg-orange-500' },
  { name: 'Cube UI', href:"https://didi.github.io/cube-ui/#/en-US", desc: 'A fantastic mobile ui lib implement by Vue.js', bgColor: 'bg-blue-500' },
  { name: 'Muse UI', href:"https://muse-ui.org/#/en-US", desc: 'Based on the Vue 2.0 elegant Material Design UI component library', bgColor: 'bg-cyan-500' },
  { name: 'AT-UI', href:"https://at-ui.github.io/at-ui/#/en" , desc: 'AT-UI is a modular front-end UI framework for developing fast and powerful web interfaces based on Vue.js.', bgColor: 'bg-amber-500' },
  { name: 'Vuikit', href:"https://vuikit.js.org/", desc: 'A consistent and responsive Vue UI library, based on the front-end framework UIkit.', bgColor: 'bg-red-500' },
  { name: 'Wave UI', href:"https://antoniandre.github.io/wave-ui/", desc: 'A Vue.js UI framework with only the bright side.', bgColor: 'bg-emerald-500' },
  { name: 'VueTailwind', href:"https://www.vue-tailwind.com/", desc:'Set of Lightview and fully customizable Vue Components optimized for TailwindCSS.', bgColor: 'bg-pink-500' },
  { name: 'Oruga', href:"https://oruga.io/" , desc:'Oruga is a lightweight library of UI components for Vue.js without CSS framework dependency.', bgColor: 'bg-purple-600' },
  { name: 'BalmUI', href:"https://material.balmjs.com/#/", desc:'BalmUI is a modular and customizable Material Design UI library for Vue.js.', bgColor: 'bg-yellow-500' },
  { name: 'Weex UI', href:"https://github.com/apache/incubator-weex-ui", desc: 'A rich interaction, lightweight, high performance UI library based on Weex.', bgColor: 'bg-green-500' },
  { name: 'Varlet', href:"https://github.com/haoziqaq/varlet", desc: 'Varlet is a Material design mobile component library developed based on Vue3, developed and maintained by partners in the community.', bgColor: 'bg-orange-500' },
  { name: 'Naive UI', href:"https://www.naiveui.com/en-US/os-theme" , desc: 'A Vue 3 Component Library. Fairly Complete. Customizable Themes. Uses TypeScript. Not too Slow.', bgColor: 'bg-blue-500' },
  { name: 'Vuestic', href:"https://vuestic.dev/" , desc: 'Free and Open Source UI Library for Vue 3', bgColor: 'bg-cyan-500' },
  { name: 'Vue Final Modal', href:"https://vue-final-modal.org/", desc: 'Vue Final Modal is a tiny, renderless, mobile-friendly, feature-rich modal component for Vue.js.', bgColor: 'bg-sky-500' },
  { name: 'Vuetensils', href:"https://vuetensils.stegosource.com/", desc: 'Vuetensils is a lightweight component library for Vue 2.x that brings some of most common UI features, but only the bare minimum styles to avoid adding any extra bloat.', bgColor: 'bg-amber-500' },
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
      moment
    }
  },
}
</script>
