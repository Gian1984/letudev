
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
                    <router-link to="/programmingapi" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Science & Math</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Public APIs <span class="text-gray-500">/ Science & Math</span></h2>
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
        <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">Science & Math</h2>
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
              <span class="lg:pl-2">Science & Math</span>
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
    "api": "arcsecond.io",
    "desc": "Multiple astronomy data sources",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://api.arcsecond.io/"
  },
  {
    "api": "arXiv",
    "desc": "Curated research-sharing platform: physics, mathematics, quantitative finance, and economics",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://arxiv.org/help/api/user-manual"
  },
  {
    "api": "CORE",
    "desc": "Access the world's Open Access research papers",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://core.ac.uk/services#api"
  },
  {
    "api": "GBIF",
    "desc": "Global Biodiversity Information Facility",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.gbif.org/developer/summary"
  },
  {
    "api": "iDigBio",
    "desc": "Access millions of museum specimens from organizations around the world",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://github.com/idigbio/idigbio-search-api/wiki"
  },
  {
    "api": "inspirehep.net",
    "desc": "High Energy Physics info. system",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://github.com/inspirehep/rest-api-doc"
  },
  {
    "api": "isEven (humor)",
    "desc": "Check if a number is even",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://isevenapi.xyz/"
  },
  {
    "api": "ISRO",
    "desc": "ISRO Space Crafts Information",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://isro.vercel.app"
  },
  {
    "api": "ITIS",
    "desc": "Integrated Taxonomic Information System",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.itis.gov/ws_description.html"
  },
  {
    "api": "Launch Library 2",
    "desc": "Spaceflight launches and events database",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://thespacedevs.com/llapi"
  },
  {
    "api": "Materials Platform for Data Science",
    "desc": "Curated experimental data for materials science",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "No",
    "href": "https://mpds.io"
  },
  {
    "api": "Minor Planet Center",
    "desc": "Asterank.com Information",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "http://www.asterank.com/mpc"
  },
  {
    "api": "NASA",
    "desc": "NASA data, including imagery",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://api.nasa.gov"
  },
  {
    "api": "NASA ADS",
    "desc": "NASA Astrophysics Data System",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://ui.adsabs.harvard.edu/help/api/api-docs.html"
  },
  {
    "api": "Newton",
    "desc": "Symbolic and Arithmetic Math Calculator",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://newton.vercel.app"
  },
  {
    "api": "Noctua",
    "desc": "REST API used to access NoctuaSky features",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://api.noctuasky.com/api/v1/swaggerdoc/"
  },
  {
    "api": "Numbers",
    "desc": "Number of the day, random number, number facts and anything else you want to do with numbers",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "No",
    "href": "https://math.tools/api/numbers/"
  },
  {
    "api": "Numbers",
    "desc": "Facts about numbers",
    "auth": "No",
    "https": "No",
    "cors": "No",
    "href": "http://numbersapi.com"
  },
  {
    "api": "Ocean Facts",
    "desc": "Facts pertaining to the physical science of Oceanography",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://oceanfacts.herokuapp.com/"
  },
  {
    "api": "Open Notify",
    "desc": "ISS astronauts, current location, etc",
    "auth": "No",
    "https": "No",
    "cors": "No",
    "href": "http://open-notify.org/Open-Notify-API/"
  },
  {
    "api": "Open Science Framework",
    "desc": "Repository and archive for study designs, research materials, data, manuscripts, etc",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developer.osf.io"
  },
  {
    "api": "Purple Air",
    "desc": "Real Time Air Quality Monitoring",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www2.purpleair.com/"
  },
  {
    "api": "Remote Calc",
    "desc": "Decodes base64 encoding and parses it to return a solution to the calculation in JSON",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://github.com/elizabethadegbaju/remotecalc"
  },
  {
    "api": "SHARE",
    "desc": "A free, open, dataset about research and scholarly activities",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://share.osf.io/api/v2/"
  },
  {
    "api": "SpaceX",
    "desc": "Company, vehicle, launchpad and launch data",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://github.com/r-spacex/SpaceX-API"
  },
  {
    "api": "SpaceX",
    "desc": "GraphQL, Company, Ships, launchpad and launch data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://api.spacex.land/graphql/"
  },
  {
    "api": "Sunrise and Sunset",
    "desc": "Sunset and sunrise times for a given latitude and longitude",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://sunrise-sunset.org/api"
  },
  {
    "api": "Times Adder",
    "desc": "With this API you can add each of the times introduced in the array sended",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://github.com/FranP-code/API-Times-Adder"
  },
  {
    "api": "TLE",
    "desc": "Satellite information",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://tle.ivanstanojevic.me/#/docs"
  },
  {
    "api": "USGS Earthquake Hazards Program",
    "desc": "Earthquakes data real-time",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://earthquake.usgs.gov/fdsnws/event/1/"
  },
  {
    "api": "USGS Water Services",
    "desc": "Water quality and level info for rivers and lakes",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://waterservices.usgs.gov/"
  },
  {
    "api": "World Bank",
    "desc": "World Data",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://datahelpdesk.worldbank.org/knowledgebase/topics/125589"
  },
  {
    "api": "xMath",
    "desc": "Random mathematical expressions",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://x-math.herokuapp.com/"
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
