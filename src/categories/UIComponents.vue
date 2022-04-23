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
                    <router-link to="/uicomponents" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">UI Components & Kits</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">UI Components & Kits</h2>
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
  { name: 'Bit', href:"https://bit.dev/components", desc:'Provides a huge library of reuseable UI Components for React, Angular, Vue, React Native. Also can be used for sharing UI Components among other team members', bgColor: 'bg-pink-600' },
  { name: 'UILang', href:"http://uilang.com/", desc:'A minimal, UI-focused programming language for web designers', bgColor: 'bg-purple-600' },
  { name: 'Medialoot CSS Components', href:"https://medialoot.com/free-themes/css-components/", desc: 'Calendars, price grids and other UI components', bgColor: 'bg-yellow-500' },
  { name: 'Froala Design Blocks', href:"https://froala.com/design-blocks", desc: 'Over 170 responsive design blocks ready to be used in your web or mobile apps', bgColor: 'bg-green-500' },
  { name: 'Flowbite', href:"https://flowbite.com", desc: 'Open-source library of Tailwind CSS components', bgColor: 'bg-orange-500' },
  { name: 'daisyUI', href:"https://daisyui.com/", desc: 'Tailwind CSS Components', bgColor: 'bg-blue-500' },
  { name: 'Mui Treasury', href:"https://mui-treasury.com", desc: 'An open-source project that provides a collection of ready-to-use components based on Material-UI.', bgColor: 'bg-cyan-500' },
  { name: 'Material Design For Bootstrap', href:"https://fezvrasta.github.io/bootstrap-material-design/", desc: 'Open source toolkit for building material design with Bootstrap', bgColor: 'bg-sky-500' },
  { name: 'Photonkit', href:"http://photonkit.com/", desc: 'Desktop UI library for Electron', bgColor: 'bg-amber-500' },
  { name: 'Flat UI', href:"https://designmodo.github.io/Flat-UI/", desc: 'Minimal free user interface kit', bgColor: 'bg-red-500' },
  { name: 'Shards', href:"https://designrevision.com/downloads/shards/", desc: 'A free and modern UI toolkit for web makers based on Bootstrap', bgColor: 'bg-emerald-500' },
  { name: 'Themesberg', href:"https://themesberg.com/templates/free", desc: 'Free and open-source website themes, templates, and UI kits based on Bootstrap and React', bgColor: 'bg-pink-500' },
  { name: 'Creative Tim', href:"https://www.creative-tim.com/", desc:'All types of UI libraries and kits including JS frameworks like React', bgColor: 'bg-purple-600' },
  { name: 'Brumm Shadow Maker', href:"https://brumm.af/shadows" , desc: 'An online tool to make css shadows', bgColor: 'bg-yellow-500' },
  { name: 'AdminLTE', href:"https://adminlte.io/", desc: 'Best open source admin dashboard & control panel theme', bgColor: 'bg-green-500' },
  { name: 'SpinKit', href:"https://tobiasahlin.com/spinkit/", desc: 'Simple CSS Spinners', bgColor: 'bg-orange-500' },
  { name: 'Epic Spinners', href: "https://epic-spinners.epicmax.co/", desc: 'CSS spinners collection with Vue.js integration.', bgColor: 'bg-blue-500' },
  { name: 'Loading.io', href:"https://loading.io/", desc: 'Online service provider for creating simple animations, spinners, progress bar and more', bgColor: 'bg-cyan-500' },
  { name: 'Moving Letters', href:"https://tobiasahlin.com/moving-letters/", desc: 'Animated Text with JavaScript and anime.js', bgColor: 'bg-sky-500' },
  { name: 'CSS Layout', href:"https://csslayout.io/", desc: 'A collection of popular web layouts and patterns in pure CSS', bgColor: 'bg-amber-500' },
  { name: 'CSS Grid Generator', href:"https://cssgrid-generator.netlify.app/", desc: 'An open-source project that allow users to quickly create dynamic layout based on CSS Grid.', bgColor: 'bg-red-500' },
  { name: 'Codyhouse', href: "https://codyhouse.co/", desc: 'Kick-start your web projects with CodyHouse\'s front-end framework and library of accessible HTML, CSS, JavaScript components', bgColor: 'bg-emerald-500' },
  { name: 'Tailwind Starter Kit', href:"https://github.com/creativetimofficial/tailwind-starter-kit", desc: 'Tailwind Starter Kit a beautiful extension for TailwindCSS, Free and Open Source', bgColor: 'bg-pink-500' },
  { name: 'Tailwindtoolbox', href:"https://www.tailwindtoolbox.com/" , desc:'Open source starter templates and components, a plugins directory and useful tools/utilities to kick start your Tailwind CSS project.', bgColor: 'bg-purple-600' },
  { name: 'Tailwindcomponents', href:"https://tailwindcomponents.com/", desc: 'A free repository for community components using TailwindCSS', bgColor: 'bg-yellow-500' },
  { name: 'Sweetalert', href:"https://sweetalert.js.org/", desc: 'SweetAlert makes popup messages easy and pretty.', bgColor: 'bg-green-500' },
  { name: 'Sweetalert2', href:"https://sweetalert2.github.io/", desc: 'A beautiful, responsive, customizable, accessible replacement for javascript\'s popup boxes', bgColor: 'bg-orange-500' },
  { name: 'Tailblocks', href: "https://mertjf.github.io/tailblocks/", desc: 'Open source ready-to-use Tailwind CSS components.', bgColor: 'bg-blue-500' },
  { name: 'Soft Components', href:"https://soft-components-docs.web.app/", desc: 'A set of framework-agnostic web components based on neumorphic design.', bgColor: 'bg-cyan-500' },
  { name: 'Fast', href: "https://www.fast.design/", desc: 'An interface system that can be used with modern Web Frameworks such as React, Vue and Angular.', bgColor: 'bg-amber-500' },
  { name: 'LottieFiles', href:"https://lottiefiles.com/", desc: 'Interactive animations in many formats like json,gif and mp4, libraries and plugins for Web &amp; Mobile .', bgColor: 'bg-red-500' },
  { name: 'Tailwindow', href:"https://component.tailwindow.com/", desc: 'Components created using Tailwind CSS utilities class, so it can be customized to make themes easily.', bgColor: 'bg-emerald-500' },
  { name: 'Kutty', href: "https://kutty.netlify.app/", desc:'A set of accessible and reusable prebuilt Tailwind components that are commonly used in web applications.', bgColor: 'bg-pink-500' },
  { name: 'Tailwind Templates', href:"https://tailwindtemplates.io/", desc:'A free collection of Tailwindcss Templates - tailwind components for rapid UI development.', bgColor: 'bg-purple-600' },
  { name: 'Stitches', href:"https://stitches.hyperyolo.com/", desc:'An HTML template generator using functional css.', bgColor: 'bg-yellow-500' },
  { name: 'Meraki UI Components', href:"https://merakiui.com/", desc: 'Beautiful Tailwindcss components that support RTL languages & fully responsive based on Flexbox & CSS Grid.', bgColor: 'bg-green-500' },
  { name: 'Daemonites Material Design For Bootstrap', href:"https://http://daemonite.github.io/material/", desc: 'Daemonite\'s Material UI is a cross-platform and fully responsive front-end interface based on Google Material Design developed using Bootstrap 4', bgColor: 'bg-orange-500' },
  { name: 'Stitches', href:"https://stitches.dev/" , desc: 'CSS-in-JS with near-zero runtime, SSR, multi-variant support, and a best-in-class developer experience.', bgColor: 'bg-blue-500' },
  { name: 'Headless UI', href:"https://headlessui.dev/" , desc: 'Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.', bgColor: 'bg-cyan-500' },
  { name: 'Styled components', href: "https://styled-components.com/", desc: 'Build beautifully UI Components, for your applications &amp; websites.', bgColor: 'bg-sky-500' },
  { name: 'Figma Bootstrap 5 UI Kit', href:"https://drive.google.com/file/d/1SZOTxXYfCMujqP2P684Vd5QIrlk5bwe6/view?usp=sharing", desc: 'UI Kit comprising 300+ organized Bootstrap 5 components built with atomic design system &amp; auto layout.', bgColor: 'bg-amber-500' },
  { name: 'Notiflix', href: "https://notiflix.github.io", desc: 'JavaScript library for client-side non-blocking notifications, popup boxes, loading indicators, and more that makes your web projects much better', bgColor: 'bg-red-500' },
  { name: 'CoreUI', href:"https://coreui.io", desc: 'Bootstrap Admin Dashboard Template &amp; UI Components Library', bgColor: 'bg-emerald-500' },
  { name: 'AgnosticUI', href:"https://www.agnosticui.com/", desc: 'Accessible React component primitives that also work with Vue 3, Svelte, and Angular', bgColor: 'bg-pink-500' },
  { name: 'SVGR', href:"https://react-svgr.com/", desc:'SVGR is an universal tool to transform a raw SVG into a ready-to-use React components. Available online, in CLI, Node.js, as a webpack/rollup/parcel plugin...', bgColor: 'bg-purple-600' },
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
