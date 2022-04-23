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
                    <router-link to="/businessapi" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Business</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Public APIs <span class="text-gray-500">/ Business </span></h2>
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
        <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">Business</h2>
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
              <span class="lg:pl-2">Business</span>
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

const apis =[
  {
    "api": "Apache Superset",
    "desc": "API to manage your BI dashboards and data sources on Superset",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://superset.apache.org/docs/api"
  },
  {
    "api": "Charity Search",
    "desc": "Non-profit charity data",
    "auth": "apiKey",
    "https": "No",
    "cors": "Unknown",
    "href": "http://charityapi.orghunter.com/"
  },
  {
    "api": "Clearbit Logo",
    "desc": "Search for company logos and embed them in your projects",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://clearbit.com/docs#logo-api"
  },
  {
    "api": "Domainsdb.info",
    "desc": "Registered Domain Names Search",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://domainsdb.info/"
  },
  {
    "api": "Freelancer",
    "desc": "Hire freelancers to get work done",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developers.freelancer.com"
  },
  {
    "api": "Gmail",
    "desc": "Flexible, RESTful access to the user's inbox",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developers.google.com/gmail/api/"
  },
  {
    "api": "Google Analytics",
    "desc": "Collect, configure and analyze your data to reach the right audience",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developers.google.com/gmail/api/"
  },
  {
    "api": "Instatus",
    "desc": "Post to and update maintenance and incidents on your status page through an HTTP REST API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://instatus.com/help/api"
  },
  {
    "api": "Mailchimp",
    "desc": "Send marketing campaigns and transactional mails",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://mailchimp.com/developer/"
  },
  {
    "api": "mailjet",
    "desc": "Marketing email can be sent and mail templates made in MJML or HTML can be sent using API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.mailjet.com/"
  },
  {
    "api": "markerapi",
    "desc": "Trademark Search",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "https://markerapi.com"
  },
  {
    "api": "ORB Intelligence",
    "desc": "Company lookup",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://api.orb-intelligence.com/docs/"
  },
  {
    "api": "Redash",
    "desc": "Access your queries and dashboards on Redash",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://redash.io/help/user-guide/integrations-and-api/api"
  },
  {
    "api": "Smartsheet",
    "desc": "Allows you to programmatically access and Smartsheet data and account information",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "No",
    "href": "https://smartsheet.redoc.ly/"
  },
  {
    "api": "Square",
    "desc": "Easy way to take payments, manage refunds, and help customers checkout online",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developer.squareup.com/reference/square"
  },
  {
    "api": "SwiftKanban",
    "desc": "Kanban software, Visualize Work, Increase Organizations Lead Time, Throughput &amp; Productivity",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.digite.com/knowledge-base/swiftkanban/article/api-for-swift-kanban-web-services/#restapi"
  },
  {
    "api": "Tenders in Hungary",
    "desc": "Get data for procurements in Hungary in JSON format",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://tenders.guru/hu/api"
  },
  {
    "api": "Tenders in Poland",
    "desc": "Get data for procurements in Poland in JSON format",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://tenders.guru/pl/api"
  },
  {
    "api": "Tenders in Romania",
    "desc": "Get data for procurements in Romania in JSON format",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://tenders.guru/ro/api"
  },
  {
    "api": "Tenders in Spain",
    "desc": "Get data for procurements in Spain in JSON format",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://tenders.guru/es/api"
  },
  {
    "api": "Tenders in Ukraine",
    "desc": "Get data for procurements in Ukraine in JSON format",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://tenders.guru/ua/api"
  },
  {
    "api": "Tomba email finder",
    "desc": "Email Finder for B2B sales and email marketing and email verifier",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://tomba.io/api"
  },
  {
    "api": "Trello",
    "desc": "Boards, lists and cards to help you organize and prioritize your projects",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developers.trello.com/"
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
