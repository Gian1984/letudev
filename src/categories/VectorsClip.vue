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
                    <router-link to="/vectorsclip" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Vectors & Clip Art</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Vectors & Clip Art</h2>
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
  { name: 'Vecteezy', href: "https://www.vecteezy.com/", desc:'Find and download free vector art', bgColor: 'bg-pink-600' },
  { name: 'Freepik', href:"https://www.freepik.com", desc:'ree vectors, stock photos, PSD and icons', bgColor: 'bg-purple-600' },
  { name: 'Free Vectors', href: "https://www.freevectors.net/", desc: 'Community of vector lovers who share free vector graphics', bgColor: 'bg-yellow-500' },
  { name: 'PNGTree', href: "https://pngtree.com/free-vectors", desc: 'Png, backgrounds, templates, text effects', bgColor: 'bg-green-500' },
  { name: 'Vector4Free', href: "https://www.vector4free.com/", desc: 'Free vector graphics', bgColor: 'bg-orange-500' },
  { name: 'Freeble', href: "http://freebbble.com/", desc: 'Vectors, patterns, mockups and more', bgColor: 'bg-blue-500' },
  { name: 'Lukaszadam', href: "https://lukaszadam.com/", desc: 'Free Vector artworks', bgColor: 'bg-cyan-500' },
  { name: 'Illlustrations', href: "https://illlustrations.co/", desc: 'Beautiful 100 Illustrations - png, svg', bgColor: 'bg-sky-500' },
  { name: 'Clipart', href: "https://www.clipart.email/", desc: 'Choose great clipart, png, coloring pages, drawings and more for your projects from the free collection!', bgColor: 'bg-amber-500' },
  { name: 'Growwwkit illustrations', href:"https://growwwkit.com/illustrations/phonies", desc: 'A set of 8 simple, black &amp; white, stylish illustrations', bgColor: 'bg-red-500' },
  { name: 'Trianglify.io', href: "https://trianglify.io/", desc: 'Generate low-poly backgrounds, textures, and vectors', bgColor: 'bg-emerald-500' },
  { name: 'Blob', href: "https://blobs.app/", desc: 'Generate Blob shapes for Web and Flutter apps', bgColor: 'bg-pink-500' },
  { name: 'HiClipart', href:"https://www.hiclipart.com/", desc:'A community for designers to share &amp; download transparent background PNG cliparts', bgColor: 'bg-purple-600' },
  { name: 'Stories by Freepik', href:"https://stories.freepik.com/", desc: 'A collection of free and customizable illustrations for projects', bgColor: 'bg-yellow-500' },
  { name: 'Black Illustrations', href: "https://www.blackillustrations.com/", desc: 'Beautiful illustrations of black people (free and premium)', bgColor: 'bg-green-500' },
  { name: 'Delesign', href: "https://delesign.com/free-designs/graphics", desc: 'A collection of free illustrations and more', bgColor: 'bg-orange-500' },
  { name: 'Custom Shape Dividers', href:"https://www.shapedivider.app/", desc: 'Free tool to make it easier for designers and developers to export a beautiful SVG shape divider', bgColor: 'bg-blue-500' },
  { name: 'Servier Medical Art', href:"https://smart.servier.com", desc: '3000 free medical images to illustrate your publications and PowerPoint presentations', bgColor: 'bg-cyan-500' },
  { name: 'Clker', href: "http://www.clker.com", desc: 'Free clip art you can use for anything you like', bgColor: 'bg-sky-500' },
  { name: 'SVG wave', href: "https://svgwave.in/", desc: 'SVG wave generator for UI designs', bgColor: 'bg-amber-500' },
  { name: 'Heritage Library', href:"https://www.heritagetype.com/collections/free-vintage-illustrations", desc: 'Vintage Illustrations (vector and png)', bgColor: 'bg-red-500' },
  { name: 'ROBOHASH', href:"https://robohash.org/", desc:'Generate unique images from any text', bgColor: 'bg-emerald-500' },
  { name: 'Tabbied', href:"https://tabbied.com/", desc:'Create and customize minimally generated patterns/artwork to use for background images, print and other projects.', bgColor: 'bg-pink-500' },
  { name: 'Haikei', href:"https://app.haikei.app/", desc:'An awesome multishape web app.', bgColor: 'bg-purple-600' },
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
