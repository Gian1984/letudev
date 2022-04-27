
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
                    <router-link to="/healthapi" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Health</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Public APIs <span class="text-gray-500">/ Health</span></h2>
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
        <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">Health</h2>
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
              <span class="lg:pl-2">Health</span>
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
    "api": "CMS.gov",
    "desc": "Access to the data from the CMS - medicare.gov",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://data.cms.gov/provider-data/"
  },
  {
    "api": "Coronavirus",
    "desc": "HTTP API for Latest Covid-19 Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://pipedream.com/@pravin/http-api-for-latest-wuhan-coronavirus-data-2019-ncov-p_G6CLVM/readme"
  },
  {
    "api": "Coronavirus in the UK",
    "desc": "UK Government coronavirus data, including deaths and cases by region",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://coronavirus.data.gov.uk/details/developers-guide"
  },
  {
    "api": "Covid Tracking Project",
    "desc": "Covid-19  data for the US",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://covidtracking.com/data/api/version-2"
  },
  {
    "api": "Covid-19",
    "desc": "Covid 19 spread, infection and recovery",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://covid19api.com/"
  },
  {
    "api": "Covid-19",
    "desc": "Covid 19 cases, deaths and recovery per country",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://github.com/M-Media-Group/Covid-19-API"
  },
  {
    "api": "Covid-19 Datenhub",
    "desc": "Maps, datasets, applications and more in the context of COVID-19",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://npgeo-corona-npgeo-de.hub.arcgis.com"
  },
  {
    "api": "Covid-19 Government Response",
    "desc": "Government measures tracker to fight against the Covid-19 pandemic",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://covidtracker.bsg.ox.ac.uk"
  },
  {
    "api": "Covid-19 India",
    "desc": "Covid 19 statistics state and district wise about cases, vaccinations, recovery within India",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://data.covid19india.org/"
  },
  {
    "api": "Covid-19 JHU CSSE",
    "desc": "Open-source API for exploring Covid19 cases based on JHU CSSE",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://nuttaphat.com/covid19-api/"
  },
  {
    "api": "Covid-19 Live Data",
    "desc": "Global and countrywise data of Covid 19 daily Summary, confirmed cases, recovered and deaths",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://github.com/mathdroid/covid-19-api"
  },
  {
    "api": "Covid-19 Philippines",
    "desc": "Unofficial Covid-19 Web API for Philippines from data collected by DOH",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://github.com/Simperfy/Covid-19-API-Philippines-DOH"
  },
  {
    "api": "COVID-19 Tracker Canada",
    "desc": "Details on Covid-19 cases across Canada",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://api.covid19tracker.ca/docs/1.0/overview"
  },
  {
    "api": "COVID-19 Tracker Sri Lanka",
    "desc": "Provides situation of the COVID-19 patients reported in Sri Lanka",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.hpb.health.gov.lk/en/api-documentation"
  },
  {
    "api": "COVID-ID",
    "desc": "Indonesian government Covid data per province",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://data.covid19.go.id/public/api/prov.json"
  },
  {
    "api": "Dataflow Kit COVID-19",
    "desc": "COVID-19 live statistics into sites per hour",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://covid-19.dataflowkit.com"
  },
  {
    "api": "FoodData Central",
    "desc": "National Nutrient Database for Standard Reference",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://fdc.nal.usda.gov/"
  },
  {
    "api": "Healthcare.gov",
    "desc": "Educational content about the US Health Insurance Marketplace",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.healthcare.gov/developers/"
  },
  {
    "api": "Humanitarian Data Exchange",
    "desc": "Humanitarian Data Exchange (HDX) is open platform for sharing data across crises and organisations",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://data.humdata.org/"
  },
  {
    "api": "Infermedica",
    "desc": "NLP based symptom checker and patient triage API for health diagnosis from text",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://developer.infermedica.com/docs/"
  },
  {
    "api": "LAPIS",
    "desc": "SARS-CoV-2 genomic sequences from public sources",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://cov-spectrum.ethz.ch/public"
  },
  {
    "api": "Lexigram",
    "desc": "NLP that extracts mentions of clinical concepts from text, gives access to clinical ontology",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.lexigram.io/"
  },
  {
    "api": "Makeup",
    "desc": "Makeup Information",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "http://makeup-api.herokuapp.com/"
  },
  {
    "api": "MyVaccination",
    "desc": "Vaccination data for Malaysia",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://documenter.getpostman.com/view/16605343/Tzm8GG7u"
  },
  {
    "api": "NPPES",
    "desc": "National Plan &amp; Provider Enumeration System, info on healthcare providers registered in US",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://npiregistry.cms.hhs.gov/registry/help-api"
  },
  {
    "api": "Nutritionix",
    "desc": "Worlds largest verified nutrition database",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developer.nutritionix.com/"
  },
  {
    "api": "Open Data NHS Scotland",
    "desc": "Medical reference data and statistics by Public Health Scotland",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.opendata.nhs.scot"
  },
  {
    "api": "Open Disease",
    "desc": "API for Current cases and more stuff about COVID-19 and Influenza",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://disease.sh/"
  },
  {
    "api": "openFDA",
    "desc": "Public FDA data about drugs, devices and foods",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://open.fda.gov"
  },
  {
    "api": "Orion Health",
    "desc": "Medical platform which allows the development of applications for different healthcare scenarios",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developer.orionhealth.io/"
  },
  {
    "api": "Quarantine",
    "desc": "Coronavirus API with free COVID-19 live updates",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://quarantine.country/coronavirus/api/"
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
