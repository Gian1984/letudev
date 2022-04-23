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
                    <router-link to="/animesapi" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Animes</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Public APIs <span class="text-gray-500">/ Animes </span></h2>
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
        <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">Animes</h2>
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
              <span class="lg:pl-2">Animes</span>
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
    "api": "AniAPI",
    "desc": "Anime discovery, streaming & syncing with trackers",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://aniapi.com/docs/"
  },
  {
    "api": "AniDB",
    "desc": "Anime Database",
    "auth": "apiKey",
    "https": "No",
    "cors": "Unknown",
    "href": "https://wiki.anidb.net/HTTP_API_Definition"
  },
  {
    "api": "AniList",
    "desc": "Anime discovery & tracking",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://github.com/AniList/ApiV2-GraphQL-Docs"
  },
  {
    "api": "AnimeChan",
    "desc": "Anime quotes (over 10k+)",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://github.com/RocktimSaikia/anime-chan"
  },
  {
    "api": "AnimeFacts",
    "desc": "Anime Facts (over 100+)",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://chandan-02.github.io/anime-facts-rest-api/"
  },
  {
    "api": "AnimeNewsNetwork",
    "desc": "Anime industry news",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.animenewsnetwork.com/encyclopedia/api.php"
  },
  {
    "api": "Catboy",
    "desc": "Neko images, funny GIFs & more",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://catboys.com/api"
  },
  {
    "api": "Danbooru Anime",
    "desc": "Thousands of anime artist database to find good anime art",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://danbooru.donmai.us/wiki_pages/help:api"
  },
  {
    "api": "Jikan",
    "desc": "Unofficial MyAnimeList API",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://jikan.moe"
  },
  {
    "api": "Kitsu",
    "desc": "Anime discovery platform",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://kitsu.docs.apiary.io/"
  },
  {
    "api": "MangaDex",
    "desc": "Manga Database and Community",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://api.mangadex.org/docs.html"
  },
  {
    "api": "Mangapi",
    "desc": "Translate manga pages from one language to another",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://rapidapi.com/pierre.carcellermeunier/api/mangapi3/"
  },
  {
    "api": "MyAnimeList",
    "desc": "Anime and Manga Database and Community",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://myanimelist.net/clubs.php?cid=13727"
  },
  {
    "api": "NekosBest",
    "desc": "Neko Images &amp; Anime roleplaying GIFs",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://docs.nekos.best"
  },
  {
    "api": "Shikimori",
    "desc": "Anime discovery, tracking, forum, rates",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://shikimori.one/api/doc"
  },
  {
    "api": "Studio Ghibli",
    "desc": "Resources from Studio Ghibli films",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://ghibliapi.herokuapp.com"
  },
  {
    "api": "Trace Moe",
    "desc": "A useful tool to get the exact scene of an anime from a screenshot",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://soruly.github.io/trace.moe-api/#/"
  },
  {
    "api": "Waifu.im",
    "desc": "Get waifu pictures from an archive of over 4000 images and multiple tags",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://waifu.im/docs"
  },
  {
    "api": "Waifu.pics",
    "desc": "Image sharing platform for anime images",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://waifu.pics/docs"
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
