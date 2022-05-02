
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
                    <router-link to="/photographyapi" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Photography</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Public APIs <span class="text-gray-500">/ Photography</span></h2>
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
        <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">Photography</h2>
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
              <span class="lg:pl-2">Photography</span>
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
    "api": "apilayer screenshotlayer",
    "desc": "URL 2 Image",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://screenshotlayer.com"
  },
  {
    "api": "APITemplate.io",
    "desc": "Dynamically generate images and PDFs from templates with a simple API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://apitemplate.io"
  },
  {
    "api": "Bruzu",
    "desc": "Image generation with query string",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://docs.bruzu.com"
  },
  {
    "api": "CheetahO",
    "desc": "Photo optimization and resize",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://cheetaho.com/docs/getting-started/"
  },
  {
    "api": "Dagpi",
    "desc": "Image manipulation and processing",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://dagpi.xyz"
  },
  {
    "api": "Duply",
    "desc": "Generate, Edit, Scale and Manage Images and Videos Smarter &amp; Faster",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://duply.co/docs#getting-started-api"
  },
  {
    "api": "DynaPictures",
    "desc": "Generate Hundreds of Personalized Images in Minutes",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://dynapictures.com/docs/"
  },
  {
    "api": "Flickr",
    "desc": "Flickr Services",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.flickr.com/services/api/"
  },
  {
    "api": "Getty Images",
    "desc": "Build applications using the world's most powerful imagery",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "http://developers.gettyimages.com/en/"
  },
  {
    "api": "Gfycat",
    "desc": "Jiffier GIFs",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developers.gfycat.com/api/"
  },
  {
    "api": "Giphy",
    "desc": "Get all your gifs",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developers.giphy.com/docs/"
  },
  {
    "api": "Google Photos",
    "desc": "Integrate Google Photos with your apps or devices",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developers.google.com/photos"
  },
  {
    "api": "Imgur",
    "desc": "Images",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://apidocs.imgur.com/"
  },
  {
    "api": "Imsea",
    "desc": "Free image search",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://imsea.herokuapp.com/"
  },
  {
    "api": "Lorem Picsum",
    "desc": "Images from Unsplash",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://picsum.photos/"
  },
  {
    "api": "ObjectCut",
    "desc": "Image Background removal",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://objectcut.com/"
  },
  {
    "api": "Pexels",
    "desc": "Free Stock Photos and Videos",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.pexels.com/api/"
  },
  {
    "api": "PhotoRoom",
    "desc": "Remove background from images",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.photoroom.com/api/"
  },
  {
    "api": "Pixabay",
    "desc": "Photography",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://pixabay.com/sk/service/about/api/"
  },
  {
    "api": "PlaceKeanu",
    "desc": "Resizable Keanu Reeves placeholder images with grayscale and young Keanu options",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://placekeanu.com/"
  },
  {
    "api": "Readme typing SVG",
    "desc": "Customizable typing and deleting text SVG",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://github.com/DenverCoder1/readme-typing-svg"
  },
  {
    "api": "Remove.bg",
    "desc": "Image Background removal",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.remove.bg/api"
  },
  {
    "api": "ReSmush.it",
    "desc": "Photo optimization",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "https://resmush.it/api"
  },
  {
    "api": "shutterstock",
    "desc": "Stock Photos and Videos",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://api-reference.shutterstock.com/"
  },
  {
    "api": "Sirv",
    "desc": "Image management solutions like optimization, manipulation, hosting",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://apidocs.sirv.com/"
  },
  {
    "api": "Unsplash",
    "desc": "Photography",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://unsplash.com/developers"
  },
  {
    "api": "Wallhaven",
    "desc": "Wallpapers",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://wallhaven.cc/help/api"
  },
  {
    "api": "Webdam",
    "desc": "Images",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.damsuccess.com/hc/en-us/articles/202134055-REST-API"
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
