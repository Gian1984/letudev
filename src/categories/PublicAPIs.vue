
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
  {
    name: 'Authentication & authorization',
    href:'/authapis',
    desc:'All about authentication & authorization.',
    bgColor:'bg-sky-500',
    },
  {
    name: 'Blockchain',
    href:'/blockchainapi',
    desc:'All about blockchain.',
    bgColor:'bg-amber-500',
  },
  {
    name: 'Books',
    href:'/bookapi',
    desc:'All about books.',
    bgColor:'bg-teal-500',
  },
  {
    name: 'Business',
    href:'/businessapi',
    desc:'All about business.',
    bgColor:'bg-yellow-500',
  },
  {
    name: 'Calendars',
    href:'/calendarapi',
    desc:'All about calendars.',
    bgColor:'bg-emerald-500',
  },
  {
    name: 'Cloud Storage & File Sharing',
    href:'/cloudapi',
    desc:'All about cloud storage & file sharing.',
    bgColor:'bg-blue-500',
  },
  {
    name: 'Continuous Integration',
    href:'/integrationapi',
    desc:'All about continuous integration.',
    bgColor:'bg-red-500',
  },
  {
    name: 'Cryptocurrency',
    href:'/cryptocurrencyapi',
    desc:'All about cryptocurrency.',
    bgColor:'bg-orange-500',
  },
  {
    name: 'Currency Exchange',
    href:'/exchangeapi',
    desc:'All about Currency Exchange.',
    bgColor:'bg-pink-600',
  },
  {
    name: 'Data Validation',
    href:'/validationapi',
    desc:'All about data validation.',
    bgColor:'bg-purple-600',
  },
  {
    name: 'Development',
    href:'/developmentapi',
    desc:'All about development.',
    bgColor:'bg-emerald-500',
  },
  {
    name: 'Dictionaries',
    href:'/dictionariesapi',
    desc:'All about dictionaries.',
    bgColor:'bg-sky-500',
  },
  {
    name: 'Documents & Productivity',
    href:'/productivityapi',
    desc:'All about documents & productivity.',
    bgColor:'bg-amber-500',
  },
  {
    name: 'Email',
    href:'/emailapi',
    desc:'All about Email.',
    bgColor:'bg-teal-500',
  },
  {
    name: 'Entertainment',
    href:'/entertainmentapi',
    desc:'All about entertainment',
    bgColor:'bg-blue-500',
  },
  {
    name: 'Environment',
    href:'/environmentapi',
    desc:'All about environment.',
    bgColor:'bg-yellow-500',
  },
  {
    name: 'Events',
    href:'/eventsapi',
    desc:'All about event.',
    bgColor:'bg-cyan-500',
  },
  {
    name: 'Finance',
    href:'/financeapi',
    desc:'All about finance.',
    bgColor:'bg-rose-500',
  },
  {
    name: 'Food & Drink',
    href:'/fooddrinkapi',
    desc:'All about food & drink.',
    bgColor:'bg-emerald-500',
  },
  {
    name: 'Games & Comics',
    href:'/gamescomicsapi',
    desc:'All about games & comics.',
    bgColor:'bg-orange-500',
  },
  {
    name: 'Geocoding',
    href:'/geocodingapi',
    desc:'All about geocoding.',
    bgColor:'bg-indigo-500',
  },
  {
    name: 'Government',
    href:'/governmentapi',
    desc:'All about government.',
    bgColor:'bg-purple-600',
  },
  {
    name: 'Health',
    href:'/healthapi',
    desc:'All about government health.',
    bgColor:'bg-green-500',
  },
  {
    name: 'Jobs',
    href:'/jobsapi',
    desc:'All about jobs.',
    bgColor:'bg-blue-900',
  },
  {
    name: 'Machine Learning',
    href:'/machinelearningapi',
    desc:'All about machine learning.',
    bgColor:'bg-red-500',
  },
  {
    name: 'Music',
    href:'/musicapi',
    desc:'All about music.',
    bgColor:'bg-teal-500',
  },
  {
    name: 'News',
    href:'/newsapi',
    desc:'All about news.',
    bgColor:'bg-rose-500',
  },
  {
    name: 'Open Data',
    href:'/opendataapi',
    desc:'All about open data.',
    bgColor:'bg-amber-500',
  },
  {
    name: 'Open Source Projects',
    href:'/opensourceapi',
    desc:'All about open source projects.',
    bgColor:'bg-pink-600',
  },
  {
    name: 'Patent',
    href:'/patentapi',
    desc:'All about patent projects.',
    bgColor:'bg-emerald-500',
  },
  {
    name: 'Personality',
    href:'/personalityapi',
    desc:'All about personality.',
    bgColor:'bg-cyan-500',
  },
  {
    name: 'Phone',
    href:'/phoneapi',
    desc:'All about phone.',
    bgColor:'bg-indigo-500',
  },
  {
    name: 'Photography',
    href:'/photographyapi',
    desc:'All about photography.',
    bgColor:'bg-orange-500',
  },
  {
    name: 'Programming',
    href:'/programmingapi',
    desc:'All about programming.',
    bgColor:'bg-blue-900',
  },
  {
    name: 'Science & Math',
    href:'/sciencemathapi',
    desc:'All about science & math.',
    bgColor:'bg-rose-500',
  },
  {
    name: 'Security',
    href:'/securityapi',
    desc:'All about security.',
    bgColor:'bg-green-500',
  },
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
