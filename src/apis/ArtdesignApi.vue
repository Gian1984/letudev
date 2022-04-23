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
              <router-link to="/publicapis" class="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
                <ChevronLeftIcon class="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                Public APIs
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
                    <router-link to="/publicapis" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Public APIs</router-link>
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <ChevronRightIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <router-link to="/artdesignapi" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Art & design</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Public APIs <span class="text-gray-500">/ Art & design </span></h2>
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

  <main class="-mt-32 max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8 mt-24 mb-24">
    <!-- Projects list (only on smallest breakpoint) -->
    <div class="mt-10 sm:hidden">
      <div class="px-4 sm:px-6">
        <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">Art & design</h2>
      </div>
      <ul role="list" class="mt-3 border-t border-gray-200 divide-y divide-gray-100">
        <li v-for="item in apis" :key="item.api">
          <a :href="item.href" target="_blank" class="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6">
                <span class="flex items-center truncate space-x-3">
<!--                  <span :class="[project.bgColorClass, 'w-2.5 h-2.5 flex-shrink-0 rounded-full']" aria-hidden="true" />-->
                  <span class="font-medium text-sm leading-6">
                    {{ item.api }}
                    {{ ' ' }} -
                    <span class="truncate font-normal text-gray-500"> {{ item.desc }}</span>
                  </span>
                </span>
            <ChevronRightIcon class="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </div>

    <!-- Projects table (small breakpoint and up) -->
    <div class="hidden mt-8 sm:block">
      <div class="align-middle inline-block min-w-full border-b border-gray-200">
        <table class="min-w-full">
          <thead>
          <tr class="border-t border-gray-200">
            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <span class="lg:pl-2">Art & design</span>
            </th>
            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Auth</th>
            <th class="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider ">CORS</th>
            <th class="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">HTTPS</th>
            <th class="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" />
          </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-100">
          <tr v-for="item in apis" :key="item.api">
            <td class="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900">
              <div class="flex items-center space-x-3 lg:pl-2">
                <!--              <div :class="[project.bgColorClass, 'flex-shrink-0 w-2.5 h-2.5 rounded-full']" aria-hidden="true" />-->
                <a :href="item.href" target="_blank" class="truncate hover:text-gray-600">
                        <span>
                          {{ item.api }}
                          {{ ' ' }}-
                          <span class="text-gray-500 font-normal"> {{ item.desc }}</span>
                        </span>
                </a>
              </div>
            </td>
            <td class="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-center">
              {{item.auth}}
            </td>
            <td class="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-center">
              {{item.cors}}
            </td>
            <td class="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-center">
              {{ item.https }}
            </td>
            <td class="px-6 py-3 whitespace-nowrap text-right text-sm font-medium">
              <a :href="item.href" target="_blank" class="text-teal-600 hover:text-teal-900">
                <ArrowCircleRightIcon class="h-5 w-5" />
              </a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>

</template>

<script>

import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/solid'
import { CalendarIcon, ArrowCircleRightIcon } from '@heroicons/vue/outline'
import moment from "moment";

const apis = [
  {
    "api": "Améthyste",
    "desc": "Generate images for Discord users",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://api.amethyste.moe/"
  },
  {
    "api": "Art Institute of Chicago",
    "desc": "Art",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://api.artic.edu/docs/"
  },
  {
    "api": "Colormind",
    "desc": "Color scheme generator",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "http://colormind.io/api-access/"
  },
  {
    "api": "ColourLovers",
    "desc": "Get various patterns, palettes and images",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "http://www.colourlovers.com/api"
  },
  {
    "api": "Cooper Hewitt",
    "desc": "Smithsonian Design Museum",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://collection.cooperhewitt.org/api"
  },
  {
    "api": "Dribbble",
    "desc": "Discover the world’s top designers &amp; creatives",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developer.dribbble.com"
  },
  {
    "api": "EmojiHub",
    "desc": "Get emojis by categories and groups",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://github.com/cheatsnake/emojihub"
  },
  {
    "api": "Europeana",
    "desc": "European Museum and Galleries content",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://pro.europeana.eu/resources/apis/search"
  },
  {
    "api": "Harvard Art Museums",
    "desc": "Art",
    "auth": "apiKey",
    "https": "No",
    "cors": "Unknown",
    "href": "https://github.com/harvardartmuseums/api-docs"
  },
  {
    "api": "Icon Horse",
    "desc": "Favicons for any website, with fallbacks",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://icon.horse"
  },
  {
    "api": "Iconfinder",
    "desc": "Icons",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developer.iconfinder.com"
  },
  {
    "api": "Icons8",
    "desc": "Icons (find \"search icon\" hyperlink in page)",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://img.icons8.com/"
  },
  {
    "api": "Lordicon",
    "desc": "Icons with predone Animations",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://lordicon.com/"
  },
  {
    "api": "Metropolitan Museum of Art",
    "desc": "Met Museum of Art",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://metmuseum.github.io/"
  },
  {
    "api": "Noun Project",
    "desc": "Icons",
    "auth": "OAuth",
    "https": "No",
    "cors": "Unknown",
    "href": "http://api.thenounproject.com/index.html"
  },
  {
    "api": "PHP-Noise",
    "desc": "Noise Background Image Generator",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://php-noise.com/"
  },
  {
    "api": "Pixel Encounter",
    "desc": "SVG Icon Generator",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "ttps://pixelencounter.com/api"
  },
  {
    "api": "Rijksmuseum",
    "desc": "RijksMuseum Data",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://data.rijksmuseum.nl/object-metadata/api/"
  },
  {
    "api": "Word Cloud",
    "desc": "Easily create word clouds",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://wordcloudapi.com/"
  },
  {
    "api": "xColors",
    "desc": "Generate &amp; convert colors",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://x-colors.herokuapp.com/"
  }
]

export default {
  components: {
    ChevronRightIcon,
    ChevronLeftIcon,
    CalendarIcon,
    ArrowCircleRightIcon
  },


  setup() {
    return {
      apis,
      moment
    }
  },


}
</script>
