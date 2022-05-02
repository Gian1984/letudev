
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
                    <router-link to="/personalityapi" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Personality</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Public APIs <span class="text-gray-500">/ Personality</span></h2>
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
        <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">Personality</h2>
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
              <span class="lg:pl-2">Personality</span>
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
    "api": "Advice Slip",
    "desc": "Generate random advice slips",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "http://api.adviceslip.com/"
  },
  {
    "api": "Biriyani As A Service",
    "desc": "Biriyani images placeholder",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://biriyani.anoram.com/"
  },
  {
    "api": "Dev.to",
    "desc": "Access Forem articles, users and other resources via API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developers.forem.com/api"
  },
  {
    "api": "Dictum",
    "desc": "API to get access to the collection of the most inspiring expressions of mankind",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://github.com/fisenkodv/dictum"
  },
  {
    "api": "FavQs.com",
    "desc": "FavQs allows you to collect, discover and share your favorite quotes",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://favqs.com/api"
  },
  {
    "api": "FOAAS",
    "desc": "Fuck Off As A Service",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "http://www.foaas.com/"
  },
  {
    "api": "Forismatic",
    "desc": "Inspirational Quotes",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "http://forismatic.com/en/api/"
  },
  {
    "api": "icanhazdadjoke",
    "desc": "The largest selection of dad jokes on the internet",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://icanhazdadjoke.com/api"
  },
  {
    "api": "Inspiration",
    "desc": "Motivational and Inspirational quotes",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://inspiration.goprogram.ai/docs/"
  },
  {
    "api": "kanye.rest",
    "desc": "REST API for random Kanye West quotes",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://kanye.rest"
  },
  {
    "api": "kimiquotes",
    "desc": "Team radio and interview quotes by Finnish F1 legend Kimi Räikkönen",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://kimiquotes.herokuapp.com/doc"
  },
  {
    "api": "Medium",
    "desc": "Community of readers and writers offering unique perspectives on ideas",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://github.com/Medium/medium-api-docs"
  },
  {
    "api": "Programming Quotes",
    "desc": "Programming Quotes API for open source projects",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://github.com/skolakoda/programming-quotes-api"
  },
  {
    "api": "Quotable Quotes",
    "desc": "Quotable is a free, open source quotations API",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://github.com/lukePeavey/quotable"
  },
  {
    "api": "Quote Garden",
    "desc": "REST API for more than 5000 famous quotes",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://pprathameshmore.github.io/QuoteGarden/"
  },
  {
    "api": "quoteclear",
    "desc": "Ever-growing list of James Clear quotes from the 3-2-1 Newsletter",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://quoteclear.web.app/"
  },
  {
    "api": "Quotes on Design",
    "desc": "Inspirational Quotes",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://quotesondesign.com/api/"
  },
  {
    "api": "Stoicism Quote",
    "desc": "Quotes about Stoicism",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://github.com/tlcheah2/stoic-quote-lambda-public-api"
  },
  {
    "api": "They Said So Quotes",
    "desc": "Quotes Trusted by many fortune brands around the world",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://theysaidso.com/api/"
  },
  {
    "api": "Traitify",
    "desc": "Assess, collect and analyze Personality",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://app.traitify.com/developer"
  },
  {
    "api": "Udemy(instructor)",
    "desc": "API for instructors on Udemy",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.udemy.com/developers/instructor/"
  },
  {
    "api": "Vadivelu HTTP Codes",
    "desc": "On demand HTTP Codes with images",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://vadivelu.anoram.com/"
  },
  {
    "api": "Zen Quotes",
    "desc": "Large collection of Zen quotes for inspiration",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://zenquotes.io/"
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
