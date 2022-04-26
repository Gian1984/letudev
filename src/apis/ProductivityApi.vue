
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
                    <router-link to="/productivityapi" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Documents & Productivity</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Public APIs <span class="text-gray-500">/ Documents & Productivity</span></h2>
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
        <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">Documents & Productivity</h2>
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
              <span class="lg:pl-2">Documents & Productivity</span>
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
    "api": "Airtable",
    "desc": "Integrate with Airtable",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://airtable.com/api"
  },
  {
    "api": "Api2Convert",
    "desc": "Online File Conversion API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.api2convert.com/"
  },
  {
    "api": "apilayer pdflayer",
    "desc": "HTML/URL to PDF",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://pdflayer.com"
  },
  {
    "api": "Asana",
    "desc": "Programmatic access to all data in your asana system",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://developers.asana.com/docs"
  },
  {
    "api": "ClickUp",
    "desc": "ClickUp is a robust, cloud-based project management tool for boosting productivity",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://clickup.com/api"
  },
  {
    "api": "Clockify",
    "desc": "Clockify's REST-based API can be used to push/pull data to/from it &amp; integrate it with other systems",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://clockify.me/developers-api"
  },
  {
    "api": "CloudConvert",
    "desc": "Online file converter for audio, video, document, ebook, archive, image, spreadsheet, presentation",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://cloudconvert.com/api/v2"
  },
  {
    "api": "Cloudmersive Document and Data Conversion",
    "desc": "HTML/URL to PDF/PNG, Office documents to PDF, image conversion",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://cloudmersive.com/convert-api"
  },
  {
    "api": "Code::Stats",
    "desc": "Automatic time tracking for programmers",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "No",
    "href": "https://codestats.net/api-docs"
  },
  {
    "api": "CraftMyPDF",
    "desc": "Generate PDF documents from templates with a drop-and-drop editor and a simple API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "No",
    "href": "https://craftmypdf.com"
  },
  {
    "api": "Flowdash",
    "desc": "Automate business workflows",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.flowdash.com/docs/api-introduction"
  },
  {
    "api": "Html2PDF",
    "desc": "HTML/URL to PDF",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://html2pdf.app/"
  },
  {
    "api": "iLovePDF",
    "desc": "Convert, merge, split, extract text and add page numbers for PDFs. Free for 250 documents/month",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://developer.ilovepdf.com/"
  },
  {
    "api": "JIRA",
    "desc": "JIRA is a proprietary issue tracking product that allows bug tracking and agile project management",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developer.atlassian.com/server/jira/platform/rest-apis/"
  },
  {
    "api": "Mattermost",
    "desc": "An open source platform for developer collaboration",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://api.mattermost.com/"
  },
  {
    "api": "Mercury",
    "desc": "Web parser",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://mercury.postlight.com/web-parser/"
  },
  {
    "api": "Monday",
    "desc": "Programmatically access and update data inside a monday.com account",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://api.developer.monday.com/docs"
  },
  {
    "api": "Notion",
    "desc": "Integrate with Notion",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developers.notion.com/docs/getting-started"
  },
  {
    "api": "PandaDoc",
    "desc": "DocGen and eSignatures API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "No",
    "href": "https://developers.pandadoc.com"
  },
  {
    "api": "Pocket",
    "desc": "Bookmarking service",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://getpocket.com/developer/"
  },
  {
    "api": "Podio",
    "desc": "File sharing and productivity",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developers.podio.com"
  },
  {
    "api": "PrexView",
    "desc": "Data from XML or JSON to PDF, HTML or Image",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://prexview.com"
  },
  {
    "api": "Restpack",
    "desc": "Provides screenshot, HTML to PDF and content extraction APIs",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://restpack.io/"
  },
  {
    "api": "Todoist",
    "desc": "Todo Lists",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developer.todoist.com"
  },
  {
    "api": "Vector Express v2.0",
    "desc": "Free vector file converting API",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://vector.express"
  },
  {
    "api": "WakaTime",
    "desc": "Automated time tracking leaderboards for programmers",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://wakatime.com/developers"
  },
  {
    "api": "Zube",
    "desc": "Full stack project management",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://zube.io/docs/api"
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
