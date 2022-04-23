
<template>

  <header>
    <div>
      <div class="relative">
        <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"/>
        <div class="mx-auto">
          <div class="relative sm:overflow-hidden" style="min-height: 40vh">
            <div class="absolute inset-0">
              <img class="h-full w-full object-cover" src="../assets/img/mesh.webp" alt="letudev_header"/>
              <div class="absolute inset-0" />
            </div>
            <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span class="block text-white uppercase font-Pacifico">Let  U  dev</span>
                <span class="block text-teal-500 text-2xl">List of useful resources made for all web developers </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>


  <main class="-mt-30 max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8 mt-24 mb-10">


    <div>
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
                    <ChevronRightIcon class="flex-shrink-0 h-4 w-4 text-gray-400" aria-hidden="true" />
                    <router-link to="/resources" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Resources</router-link>
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <ChevronRightIcon class="flex-shrink-0 h-4 w-4 text-gray-400" aria-hidden="true" />
                    <router-link to="/publicapis" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Public APIs</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Public APIs</h2>
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


    <div>
      <label for="name" class="mt-5 block text-sm font-medium text-gray-700">
        Find your resource
      </label>
      <input type="search" v-model="searchQuery" name="name" id="name"  class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" placeholder="Enter a search here!" />
    </div>

    <div>
      <p class="mb-2 text-right" v-if="searchQuery && filterResources.length > 1 ">{{filterResources.length}} results</p>
      <div v-if="!searchQuery"></div>
      <div v-else class="border-2 border-orange-300 rounded-2xl mt-2">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-1 py-2 px-2">
          <div v-for="resource in filterResources" :key="resource.name" class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-teal-500">
            <div class="flex-shrink-0">
              <span :class="[resource.bgColor, 'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white']"></span>
            </div>
            <div class="flex-1 min-w-0">
              <router-link :to="resource.href" class="focus:outline-none">
                <span class="absolute inset-0" aria-hidden="true" />
                <p class="text-sm font-medium text-gray-900">
                  {{ resource.name }}
                </p>
                <p class="text-sm text-gray-500 truncate">
                  {{ resource.desc }}
                </p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h2 class="mt-10 text-gray-500 text-xs font-medium uppercase tracking-wide">Pinned APIs</h2>
    <div class="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div v-for="(resource, index) in resources" :key="index" class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-teal-500">
        <div class="flex-shrink-0">
          <span :class="[resource.bgColor, 'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white']"></span>
        </div>
        <div class="flex-1 min-w-0">
          <router-link :to="resource.href" class="focus:outline-none">
            <span class="absolute inset-0" aria-hidden="true" />
            <p class="text-sm font-medium text-gray-900">
              {{ resource.name }}
            </p>
            <p class="text-sm text-gray-500 truncate">
              {{ resource.desc }}
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon, CalendarIcon } from '@heroicons/vue/outline'
import moment from 'moment'

const resources = [
  {
    name: 'Animals',
    href:'/animalsapi',
    desc:'All about animals.',
    bgColor:'bg-orange-500',
  },
  {
    name: 'Animes',
    href:'/animessapi',
    desc:'All about animes.',
    bgColor:'bg-pink-600',
  },
  {
    name: 'Anti-malware',
    href:'/antimalwaresapi',
    desc:'All about anti-malware.',
    bgColor:'bg-purple-600',
  },
  {
    name: 'Art & design',
    href:'/artdesignapi',
    desc:'All about art & design.',
    bgColor:'bg-green-500',
  },
  // {
  //   name: 'Logos',
  //   href:'/logos',
  //   desc:'Resources Logos',
  //   bgColor:'bg-sky-500',},
  // {
  //   name: 'Favicons',
  //   href:'/favicons',
  //   desc:'Resources Favicons.',
  //   bgColor:'bg-amber-500',
  // },
  // {
  //   name: 'Icon Fonts',
  //   href:'/iconfonts',
  //   desc:'Resources Icon Fonts',
  //   bgColor:'bg-teal-500',
  // },
  // {
  //   name: 'Stock Photos',
  //   href:'/stockphotos',
  //   desc:'Websites that offer free stock photos of all kinds for your websites and apps.',
  //   bgColor:'bg-yellow-500',
  // },
  // {
  //   name: 'Stock Videos',
  //   href:'/stockvideos',
  //   desc:'Websites that offer free stock videos of all kinds for your websites and apps.',
  //   bgColor:'bg-emerald-500',
  // },
  // {
  //   name: 'Stock Music & Sound Effects',
  //   href:'/soundeffects',
  //   desc:'Websites that offer free stock music and/or sound effects.',
  //   bgColor:'bg-blue-500',
  // },
  // {
  //   name: 'Vectors & Clip Art',
  //   href:'/vectorsclip',
  //   desc:'Free vectors, clipart, illustrations, patterns and more.',
  //   bgColor:'bg-red-500',
  // },
  // {
  //   name: 'Product & Image Mockups',
  //   href:'/imagemockups',
  //   desc:'Create mockups of devices and other products.',
  //   bgColor:'bg-orange-500',
  // },
  // {
  //   name: 'HTML & CSS Templates',
  //   href:'/html&csstemplates',
  //   desc:'Websites that offer free beautiful website templates and themes of all types.',
  //   bgColor:'bg-pink-600',
  // },
  // {
  //   name: 'CSS Frameworks',
  //   href:'/cssframeworks',
  //   desc:'CSS/UI frameworks to help build great looking websites and applications.',
  //   bgColor:'bg-purple-600',},
  // {
  //   name: 'CSS Methodologies',
  //   href:'/cssmethodologies',
  //   desc:'CSS methodologies to help write modular, reusable and scalable code.',
  //   bgColor:'bg-emerald-500',
  // },
  // {
  //   name: 'CSS Animations',
  //   href:'/cssanimations',
  //   desc:'CSS animations to build awesome animations for websites and applications.',
  //   bgColor:'bg-sky-500',
  // },
  // {
  //   name: 'Javascript Animation Libraries',
  //   href:'/animationlibraries',
  //   desc:'Javascript animations libraries to build awesome animations for websites and applications.',
  //   bgColor:'bg-amber-500',
  // },
  // {
  //   name: 'Javascript Chart Libraries',
  //   href:'/chartlibraries',
  //   desc:'Libraries that help developers visualize data into charts.',
  //   bgColor:'bg-teal-500',
  // },
  // {
  //   name: 'UI Components & Kits',
  //   href:'/uicomponents',
  //   desc:'Not quite "frameworks", but tools for creating user interfaces with components or UI kits',
  //   bgColor:'bg-blue-500',
  // },
  // {
  //   name: 'React UI Libraries',
  //   href:'/reactuilibraries',
  //   desc:'UI and component libraries for the React JavaScript framework.',
  //   bgColor:'bg-yellow-500',
  // },
  // {
  //   name: 'Vue UI Libraries',
  //   href:'/vueuilibraries',
  //   desc:'UI and component libraries for the Vue JavaScript framework.',
  //   bgColor:'bg-cyan-500',
  // },
  // {
  //   name: 'Angular UI Libraries',
  //   href:'/angularuilibraries',
  //   desc:'UI and component libraries for the Angular JavaScript framework.',
  //   bgColor:'bg-rose-500',
  // },
  // {
  //   name: 'Svelte UI Libraries',
  //   href:'/svelteuilibraries',
  //   desc:'UI and component libraries for the Svelte JavaScript compiler.',
  //   bgColor:'bg-emerald-500',
  // },
  // {
  //   name: 'React Native UI Libraries',
  //   href:'/reactnativeuilibraries',
  //   desc:'UI and component libraries for the React Native Framework.',
  //   bgColor:'bg-orange-500',
  // },
  // {
  //   name: 'Design Systems & Style Guides',
  //   href:'/designsystems',
  //   desc:'Design systems, style guides, toolkits, docs. Some of these are design guides for top companies/websites.',
  //   bgColor:'bg-indigo-500',
  // },
  // {
  //   name: 'Online Design Tools',
  //   href:'/onlinedesigntools',
  //   desc:'All kinds of online tools for design, from photo editors to wireframing, and more.',
  //   bgColor:'bg-purple-600',
  // },
  // {
  //   name: 'Downloadable Design Software',
  //   href:'/designsoftware',
  //   desc:'Free software for UI, photo, 3d modeling, etc. Alternatives to paid software like Photoshop.',
  //   bgColor:'bg-green-500',
  // },
  // {
  //   name: 'Design Inspiration',
  //   href:'/designinspiration',
  //   desc:'Here are some websites to get inspiration for design and UI.',
  //   bgColor:'bg-blue-900',},
  // {
  //   name: 'Image Compression',
  //   href:'/imagecompression',
  //   desc:'Websites that allow you to compress large images.',
  //   bgColor:'bg-red-500',
  // },
  // {
  //   name: 'Chrome Extensions',
  //   href:'/chromeextensions',
  //   desc:'Useful Chrome extensions for Designers and Web-Developers.',
  //   bgColor:'bg-teal-500',
  // },
  // {
  //   name: 'Public APIs',
  //   href:'/publicapis',
  //   desc:'A collective list of free APIs for use in software and web development.',
  //   bgColor:'bg-rose-500',
  // },
  // {
  //   name: 'Others',
  //   href:'/others',
  //   desc:'Uncategorized Stuff.',
  //   bgColor:'bg-amber-500',
  // },
]

export default {
  computed: {
    filterResources() {
      return this.resources.filter(result => {
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

  components:{
    ChevronLeftIcon,
    ChevronRightIcon,
    CalendarIcon
  },

  setup() {
    return {
      resources,
      moment
    }
  },
}
</script>
