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
                    <router-link to="/icons" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Icons</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Icons</h2>
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
  { name: 'UXWing', href: "https://uxwing.com/", desc:'Well Optimized, Free icons for commercial use', bgColor: 'bg-pink-600' },
  { name: 'Shapedfonts Iconclub', href:"https://shapedfonts.com/iconclub/", desc:'8000+ free icons', bgColor: 'bg-purple-600' },
  { name: 'Feather Icons', href: "https://feathericons.com/", desc: 'Beautiful, customizable open source icons', bgColor: 'bg-yellow-500' },
  { name: 'Tabler Icons', href: "https://tablericons.com/" , desc: '470+ highly customizable open source SVG icon', bgColor: 'bg-green-500' },
  { name: 'Xicons', href: 'https://www.xicons.org/#/', desc: 'SVG Vue/React components integrated from fluentui-system-icons, ionicons, etc. (Vue3, Vue2, React, SVG)', bgColor: 'bg-orange-500' },
  { name: 'Iconoir', href: "https://iconoir.com/", desc: 'Free library of 900+ open source icons<', bgColor: 'bg-blue-500' },
  { name: 'Simple Icons', href: "https://simpleicons.org/", desc: '1307 Free SVG icons for popular brands', bgColor: 'bg-cyan-500' },
  { name: 'Linear Icons', href: "https://linearicons.com/free", desc: '1000+ Ultra crisp vector icons', bgColor: 'bg-sky-500' },
  { name: 'Icons8', href: "https://icons8.com/", desc: 'Free icons, photos, vectors and tools', bgColor: 'bg-amber-500' },
  { name: 'Flat Icon', href: "https://www.flaticon.com/", desc: 'The largest database of free icons in PNG, SVG, EPS, PSD and BASE 64 formats', bgColor: 'bg-red-500' },
  { name: 'The Noun Project', href: "https://thenounproject.com/", desc: 'Over 2 Million curated icons, created by a global community', bgColor: 'bg-emerald-500' },
  { name: 'Iconscout', href: "https://iconscout.com/", desc: 'Free Download Icons illustrations stock photos at one place<', bgColor: 'bg-pink-500' },
  { name: 'IconSear.ch', href:"https://iconsear.ch/search.html", desc:'Search engine with over 50,000 SVG icons indexed', bgColor: 'bg-purple-600' },
  { name: 'Nucleo App', href: "https://nucleoapp.com/", desc: 'Nucleo is a beautiful library of 27500 icons, and a powerful application to collect, customize and export all your icons. (Free &amp; Paid)', bgColor: 'bg-yellow-500' },
  { name: 'Icon-icons.com', href: "https://icon-icons.com/", desc: 'Free Icons PNG, ICO, ICNS and Vector file SVG', bgColor: 'bg-green-500' },
  { name: 'Bootstrap Icons', href: "https://icons.getbootstrap.com", desc: 'Free Icons built for Bootstrap but they\'ll work in any project<', bgColor: 'bg-orange-500' },
  { name: 'Remix Icon', href: "https://remixicon.com/", desc: 'Simply Delightful Icon System', bgColor: 'bg-blue-500' },
  { name: 'Iconmonstr', href: "https://iconmonstr.com/", desc: 'Discover 4496+ free icons in 313 collections', bgColor: 'bg-cyan-500' },
  { name: 'Vivid.js', href: "https://webkul.github.io/vivid/", desc: 'Ready to use Free and Open Source SVG Icons Pack JavaScript Library', bgColor: 'bg-sky-500' },
  { name: 'Iconfinder', href: "https://www.iconfinder.com/", desc: 'Free and premium vector icons in SVG, PNG, CSH and AI format', bgColor: 'bg-amber-500' },
  { name: 'Lordicon', href: "https://lordicon.com/icons#free", desc: '50 free animated interactive icons', bgColor: 'bg-red-500' },
  { name: 'UseAnimations', href: "https://useanimations.com/", desc: 'Free Animated Icons in SVG and Json Format(for lottie)', bgColor: 'bg-emerald-500' },
  { name: 'Css.gg', href: "https://css.gg/", desc: '700+ Open-source CSS, SVG and Figma UI Icons Available in SVG Sprite, styled-components, NPM & API', bgColor: 'bg-pink-500' },
  { name: 'IconBros', href:"https://www.iconbros.com", desc:'7843+ free icons grouped in 182 collections', bgColor: 'bg-purple-600' },
  { name: 'Material Design Icons', href: "https://materialdesignicons.com/", desc: 'An icon collection allowing designers and developers targeting various platforms to download icons in the format, color and size they need for any project.', bgColor: 'bg-yellow-500' },
  { name: 'Heroicons', href: "https://heroicons.dev/", desc: 'Free, open source icons from the creators of Tailwind CSS.', bgColor: 'bg-green-500' },
  { name: 'Zondicons', href: "https://www.zondicons.com/icons.html", desc: 'A set of free premium SVG icons for you to use on your digital products.', bgColor: 'bg-orange-500' },
  { name: 'Endless Icons', href: "http://endlessicons.com/", desc: 'A website offering a number of free icons. Icons are tagged and also compressed into kits.', bgColor: 'bg-blue-500' },
  { name: 'Icomoon', href: "https://icomoon.io/app/", desc: 'Browse 5500+ Free Icons. Add any set you wish to easily browse and search its icons.', bgColor: 'bg-cyan-500' },
  { name: 'Eva Icons', href: "https://akveo.github.io/eva-icons/#/", desc: 'Eva Icons is a pack of more than 480 beautifully crafted Open Source icons for common actions and items.', bgColor: 'bg-amber-500' },
  { name: 'Cryptoicons', href: "http://cryptoicons.co/", desc: 'A set of 430 crypto and fiat currency icons. Completely free.', bgColor: 'bg-red-500' },
  { name: 'Ikonate', href: "https://ikonate.com/" , desc: 'Fully customizable &amp; accessible vector icons', bgColor: 'bg-emerald-500' },
  { name: 'Appicon', href: "https://appicon.co/", desc: 'Quickly generate app icons in different sizes for your IOS, macOS and Android projects', bgColor: 'bg-pink-500' },
  { name: 'LineIcons', href:"https://lineicons.com", desc:'Evericons is a big pack of over 460 free icons designed by Aleksey Popov.', bgColor: 'bg-purple-600' },
  { name: 'SVG Repo', href: "https://www.svgrepo.com/", desc: 'Download free SVG Vectors for commercial use.', bgColor: 'bg-yellow-500' },
  { name: 'Convertio', href: "https://convertio.co/png-svg/" , desc: 'Convert PNG files to SVG online & free. (One of the services provided by it.)', bgColor: 'bg-green-500' },
  { name: 'CSS ICON', href: "https://cssicon.space/", desc: 'Icon set made with pure css code, no dependencies, "grab and go" icons', bgColor: 'bg-orange-500' },
  { name: 'Unified icons', href: "https://iconify.design/", desc: 'Thousands of icons, one unified framework. One library, over 40,000 vector icons.', bgColor: 'bg-blue-500' },
  { name: 'System UIcons', href: "https://systemuicons.com/", desc: '220+ icons in a growing collection.', bgColor: 'bg-cyan-500' },
  { name: 'IconPark', href: "https://github.com/bytedance/IconPark", desc: 'Transform an SVG icon into multiple themes, and generate React icons，Vue icons，svg icons', bgColor: 'bg-sky-500' },
  { name: 'Radix Icons', href: "https://icons.modulz.app/", desc: 'A crisp set of 15×15 icons designed by the Modulz team. All icons available as individual react component,SVG and more.', bgColor: 'bg-amber-500' },
  { name: 'EOS Icons', href: "https://icons.eosdesignsystem.com/", desc: 'A pixel-perfect, open source iconic font available as ligature and SVG.', bgColor: 'bg-red-500' },
  { name: 'Ionicons', href: "https://ionicons.com" , desc: 'Beautifully crafted open source icons for use in web, iOS, Android, and desktop apps.', bgColor: 'bg-emerald-500' },
  { name: 'Phosphor Icons', href: "https://phosphoricons.com", desc: 'Phosphor is a flexible icon family for interfaces, diagrams, presentations', bgColor: 'bg-pink-500' },
  { name: 'Teeny Icons', href:"https://teenyicons.com/", desc:'TeenyIcons is a set icons in SVG format easy to use in html', bgColor: 'bg-purple-600' },
  { name: 'Lucide', href: "https://lucide.netlify.app/", desc: 'Lucide is an open-source icon library, a fork of Feather Icons.', bgColor: 'bg-yellow-500' },
  { name: 'Icones', href: "https://icones.js.org/", desc:'Icon Explorer with Instant searching, powered by Iconify.', bgColor: 'bg-pink-600' },
  { name: 'Shitty Icons', href:"https://shittyicons.com/", desc:'Collection of Free icons.', bgColor: 'bg-purple-600' },
  { name: 'Iconhub', href: "https://iconhub.io/", desc: 'Just practical stunning icons for everyone', bgColor: 'bg-yellow-500' },
  { name: '3DICONS', href: "https://3dicons.co" , desc: 'Beautifully crafted open source 3D icons', bgColor: 'bg-green-500' },
  { name: 'IconsDb', href: "https://www.iconsdb.com/", desc: 'Free Custom Icons', bgColor: 'bg-orange-500' },
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
