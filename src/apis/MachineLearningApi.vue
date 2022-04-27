
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
                    <router-link to="/machinelearningapi" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Machine Learning</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Public APIs <span class="text-gray-500">/ Machine Learning</span></h2>
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
        <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">Machine Learning</h2>
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
              <span class="lg:pl-2">Machine Learning</span>
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
    "api": "AI For Thai",
    "desc": "Free Various Thai AI API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://aiforthai.in.th/index.php"
  },
  {
    "api": "Clarifai",
    "desc": "Computer Vision",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.clarifai.com/api-guide/api-overview"
  },
  {
    "api": "Cloudmersive",
    "desc": "Image captioning, face recognition, NSFW classification",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.cloudmersive.com/image-recognition-and-processing-api"
  },
  {
    "api": "Deepcode",
    "desc": "AI for code review",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.deepcode.ai"
  },
  {
    "api": "Dialogflow",
    "desc": "Natural Language Processing",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://cloud.google.com/dialogflow/docs/"
  },
  {
    "api": "EXUDE-API",
    "desc": "Used for the primary ways for filtering the stopping, stemming words from the text data",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "http://uttesh.com/exude-api/"
  },
  {
    "api": "Hirak FaceAPI",
    "desc": "Face detection, face recognition with age estimation/gender estimation, accurate, no quota limits",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://faceapi.hirak.site/"
  },
  {
    "api": "Imagga",
    "desc": "Image Recognition Solutions like Tagging, Visual Search, NSFW moderation",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://imagga.com/"
  },
  {
    "api": "Inferdo",
    "desc": "Computer Vision services like Facial detection, Image labeling, NSFW classification",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://rapidapi.com/user/inferdo"
  },
  {
    "api": "IPS Online",
    "desc": "Face and License Plate Anonymization",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.identity.ps/docs"
  },
  {
    "api": "Irisnet",
    "desc": "Realtime content moderation API that blocks or blurs unwanted images in real-time",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://irisnet.de/api/"
  },
  {
    "api": "Keen IO",
    "desc": "Data Analytics",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://keen.io/"
  },
  {
    "api": "Machinetutors",
    "desc": "AI Solutions: Video/Image Classification &amp; Tagging, NSFW, Icon/Image/Audio Search, NLP",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.machinetutors.com/portfolio/MT_api.html"
  },
  {
    "api": "MessengerX.io",
    "desc": "A FREE API for developers to build and monetize personalized ML based chat apps",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://messengerx.rtfd.io"
  },
  {
    "api": "NLP Cloud",
    "desc": "NLP API using spaCy and transformers for NER, sentiments, classification, summarization, and more",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://nlpcloud.io"
  },
  {
    "api": "OpenVisionAPI",
    "desc": "Open source computer vision API based on open source models",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://openvisionapi.com"
  },
  {
    "api": "Perspective",
    "desc": "NLP API to return probability that if text is toxic, obscene, insulting or threatening",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://perspectiveapi.com"
  },
  {
    "api": "Roboflow Universe",
    "desc": "Pre-trained computer vision models",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://universe.roboflow.com"
  },
  {
    "api": "SkyBiometry",
    "desc": "Face Detection, Face Recognition and Face Grouping",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://skybiometry.com/documentation/"
  },
  {
    "api": "Time Door",
    "desc": "A time series analysis API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://timedoor.io"
  },
  {
    "api": "Unplugg",
    "desc": "Forecasting API for timeseries data",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://unplu.gg/test_api.html"
  },
  {
    "api": "WolframAlpha",
    "desc": "Provides specific answers to questions using data and algorithms",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://products.wolframalpha.com/api/"
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
