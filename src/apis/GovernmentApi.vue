
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
                    <router-link to="/governmentapi" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Government</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Public APIs <span class="text-gray-500">/ Government</span></h2>
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
        <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">Government</h2>
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
              <span class="lg:pl-2">Government</span>
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
    "api": "Bank Negara Malaysia Open Data",
    "desc": "Malaysia Central Bank Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://apikijangportal.bnm.gov.my/"
  },
  {
    "api": "BCLaws",
    "desc": "Access to the laws of British Columbia",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "https://www.bclaws.gov.bc.ca/civix/template/complete/api/index.html"
  },
  {
    "api": "Brazil",
    "desc": "Community driven API for Brazil Public Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://brasilapi.com.br/"
  },
  {
    "api": "Brazil Central Bank Open Data",
    "desc": "Brazil Central Bank Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://dadosabertos.bcb.gov.br/"
  },
  {
    "api": "Brazil Receita WS",
    "desc": "Consult companies by CNPJ for Brazilian companies",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.receitaws.com.br/"
  },
  {
    "api": "Brazilian Chamber of Deputies Open Data",
    "desc": "Provides legislative information in Apis XML and JSON, as well as files in various formats",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://dadosabertos.camara.leg.br/swagger/api.html"
  },
  {
    "api": "Census.gov",
    "desc": "The US Census Bureau provides various APIs and data sets on demographics and businesses",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.census.gov/data/developers/data-sets.html"
  },
  {
    "api": "City, Berlin",
    "desc": "Berlin(DE) City Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://daten.berlin.de/"
  },
  {
    "api": "City, Gdańsk",
    "desc": "Gdańsk (PL) City Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://ckan.multimediagdansk.pl/en"
  },
  {
    "api": "City, Gdynia",
    "desc": "Gdynia (PL) City Open Data",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "http://otwartedane.gdynia.pl/en/api_doc.html"
  },
  {
    "api": "City, Helsinki",
    "desc": "Helsinki(FI) City Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://hri.fi/en_gb/"
  },
  {
    "api": "City, Lviv",
    "desc": "Lviv(UA) City Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://opendata.city-adm.lviv.ua/"
  },
  {
    "api": "City, Nantes Open Data",
    "desc": "Nantes(FR) City Open Data",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://data.nantesmetropole.fr/pages/home/"
  },
  {
    "api": "City, New York Open Data",
    "desc": "New York (US) City Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://opendata.cityofnewyork.us/"
  },
  {
    "api": "City, Prague Open Data",
    "desc": "Prague(CZ) City Open Data",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "http://opendata.praha.eu/en"
  },
  {
    "api": "City, Toronto Open Data",
    "desc": "Toronto (CA) City Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://open.toronto.ca/"
  },
  {
    "api": "Code.gov",
    "desc": "The primary platform for Open Source and code sharing for the U.S. Federal Government",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://code.gov"
  },
  {
    "api": "Colorado Information Marketplace",
    "desc": "Colorado State Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://data.colorado.gov/"
  },
  {
    "api": "Data USA",
    "desc": "US Public Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://datausa.io/about/api/"
  },
  {
    "api": "Data.gov",
    "desc": "US Government Data",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://api.data.gov/"
  },
  {
    "api": "Data.parliament.uk",
    "desc": "Contains live datasets including information about petitions, bills, MP votes, attendance and more",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "https://explore.data.parliament.uk/?learnmore=Members"
  },
  {
    "api": "Deutscher Bundestag DIP",
    "desc": "This API provides read access to DIP entities (e.g. activities, persons, printed material)",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://dip.bundestag.de/documents/informationsblatt_zur_dip_api_v01.pdf"
  },
  {
    "api": "District of Columbia Open Data",
    "desc": "Contains D.C. government public datasets, including crime, GIS, financial data, and so on",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "http://opendata.dc.gov/pages/using-apis"
  },
  {
    "api": "EPA",
    "desc": "Web services and data sets from the US Environmental Protection Agency",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.epa.gov/developers/data-data-products#apis"
  },
  {
    "api": "FBI Wanted",
    "desc": "Access information on the FBI Wanted program",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.fbi.gov/wanted/api"
  },
  {
    "api": "FEC",
    "desc": "Information on campaign donations in federal elections",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://api.open.fec.gov/developers/"
  },
  {
    "api": "Federal Register",
    "desc": "The Daily Journal of the United States Government",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.federalregister.gov/reader-aids/developer-resources/rest-api"
  },
  {
    "api": "Food Standards Agency",
    "desc": "UK food hygiene rating data API",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "http://ratings.food.gov.uk/open-data/en-GB"
  },
  {
    "api": "Gazette Data, UK",
    "desc": "UK official public record API",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.thegazette.co.uk/data"
  },
  {
    "api": "Gun Policy",
    "desc": "International firearm injury prevention and policy",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.gunpolicy.org/api"
  },
  {
    "api": "INEI",
    "desc": "Peruvian Statistical Government Open Data",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "http://iinei.inei.gob.pe/microdatos/"
  },
  {
    "api": "Interpol Red Notices",
    "desc": "Access and search Interpol Red Notices",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://interpol.api.bund.dev/"
  },
  {
    "api": "Istanbul (İBB) Open Data",
    "desc": "Data sets from the İstanbul Metropolitan Municipality (İBB)",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://data.ibb.gov.tr"
  },
  {
    "api": "National Park Service, US",
    "desc": "Data from the US National Park Service",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.nps.gov/subjects/developer/"
  },
  {
    "api": "Open Government, ACT",
    "desc": "Australian Capital Territory Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.data.act.gov.au/"
  },
  {
    "api": "Open Government, Argentina",
    "desc": "Argentina Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://datos.gob.ar/"
  },
  {
    "api": "Open Government, Australia",
    "desc": "Australian Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.data.gov.au/"
  },
  {
    "api": "Open Government, Austria",
    "desc": "Austria Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.data.gv.at/"
  },
  {
    "api": "Open Government, Belgium",
    "desc": "Belgium Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://data.gov.be/"
  },
  {
    "api": "Open Government, Canada",
    "desc": "Canadian Government Open Data",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "http://open.canada.ca/en"
  },
  {
    "api": "Open Government, Colombia",
    "desc": "Colombia Government Open Data",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "https://www.dane.gov.co/"
  },
  {
    "api": "Open Government, Cyprus",
    "desc": "Cyprus Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://data.gov.cy/?language=en"
  },
  {
    "api": "Open Government, Czech Republic",
    "desc": "Czech Republic Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://data.gov.cz/english/"
  },
  {
    "api": "Open Government, Denmark",
    "desc": "Denmark Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.opendata.dk/"
  },
  {
    "api": "Open Government, Estonia",
    "desc": "Estonia Government Open Data",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://avaandmed.eesti.ee/instructions/opendata-dataset-api"
  },
  {
    "api": "Open Government, Finland",
    "desc": "Finland Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.avoindata.fi/en"
  },
  {
    "api": "Open Government, France",
    "desc": "French Government Open Data",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.data.gouv.fr/"
  },
  {
    "api": "Open Government, Germany",
    "desc": "Germany Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.govdata.de/daten/-/details/govdata-metadatenkatalog"
  },
  {
    "api": "Open Government, Greece",
    "desc": "Greece Government Open Data",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://data.gov.gr/"
  },
  {
    "api": "Open Government, India",
    "desc": "Indian Government Open Data",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://data.gov.in/"
  },
  {
    "api": "Open Government, Ireland",
    "desc": "Ireland Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://data.gov.ie/pages/developers"
  },
  {
    "api": "Open Government, Italy",
    "desc": "Italy Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.dati.gov.it/"
  },
  {
    "api": "Open Government, Korea",
    "desc": "Korea Government Open Data",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.data.go.kr/"
  },
  {
    "api": "Open Government, Lithuania",
    "desc": "Lithuania Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://data.gov.lt/public/api/1"
  },
  {
    "api": "Open Government, Luxembourg",
    "desc": "Luxembourgish Government Open Data",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://data.public.lu/"
  },
  {
    "api": "Open Government, Mexico",
    "desc": "Mexican Statistical Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.inegi.org.mx/datos/"
  },
  {
    "api": "Open Government, Mexico",
    "desc": "Mexico Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://datos.gob.mx/"
  },
  {
    "api": "Open Government, Netherlands",
    "desc": "Netherlands Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://data.overheid.nl/en/ondersteuning/data-publiceren/api"
  },
  {
    "api": "Open Government, New South Wales",
    "desc": "New South Wales Government Open Data",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://api.nsw.gov.au/"
  },
  {
    "api": "Open Government, New Zealand",
    "desc": "New Zealand Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.data.govt.nz/"
  },
  {
    "api": "Open Government, Norway",
    "desc": "Norwegian Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://data.norge.no/dataservices"
  },
  {
    "api": "Open Government, Peru",
    "desc": "Peru Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.datosabiertos.gob.pe/"
  },
  {
    "api": "Open Government, Poland",
    "desc": "Poland Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://dane.gov.pl/en"
  },
  {
    "api": "Open Government, Portugal",
    "desc": "Portugal Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://dados.gov.pt/en/docapi/"
  },
  {
    "api": "Open Government, Queensland Government",
    "desc": "Queensland Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.data.qld.gov.au/"
  },
  {
    "api": "Open Government, Romania",
    "desc": "Romania Government Open Data",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "http://data.gov.ro/"
  },
  {
    "api": "Open Government, Saudi Arabia",
    "desc": "Saudi Arabia Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://data.gov.sa"
  },
  {
    "api": "Open Government, Singapore",
    "desc": "Singapore Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://data.gov.sg/developer"
  },
  {
    "api": "Open Government, Slovakia",
    "desc": "Slovakia Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://data.gov.sk/en/"
  },
  {
    "api": "Open Government, Slovenia",
    "desc": "Slovenia Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://podatki.gov.si/"
  },
  {
    "api": "Open Government, South Australian Government",
    "desc": "South Australian Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://data.sa.gov.au/"
  },
  {
    "api": "Open Government, Spain",
    "desc": "Spain Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://datos.gob.es/en"
  },
  {
    "api": "Open Government, Sweden",
    "desc": "Sweden Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.dataportal.se/en/dataservice/91_29789/api-for-the-statistical-database"
  },
  {
    "api": "Open Government, Switzerland",
    "desc": "Switzerland Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://handbook.opendata.swiss/de/content/nutzen/api-nutzen.html"
  },
  {
    "api": "Open Government, Taiwan",
    "desc": "Taiwan Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://data.gov.tw/"
  },
  {
    "api": "Open Government, Thailand",
    "desc": "Thailand Government Open Data",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://data.go.th/"
  },
  {
    "api": "Open Government, UK",
    "desc": "UK Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://data.gov.uk/"
  },
  {
    "api": "Open Government, USA",
    "desc": "United States Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.data.gov/"
  },
  {
    "api": "Open Government, Victoria State Government",
    "desc": "Victoria State Government Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.data.vic.gov.au/"
  },
  {
    "api": "Open Government, West Australia",
    "desc": "West Australia Open Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://data.wa.gov.au/"
  },
  {
    "api": "PRC Exam Schedule",
    "desc": "Unofficial Philippine Professional Regulation Commission's examination schedule",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://api.whenisthenextboardexam.com/docs/"
  },
  {
    "api": "Represent by Open North",
    "desc": "Find Canadian Government Representatives",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://represent.opennorth.ca/"
  },
  {
    "api": "UK Companies House",
    "desc": "UK Companies House Data from the UK government",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developer.company-information.service.gov.uk/"
  },
  {
    "api": "US Presidential Election Data by TogaTech",
    "desc": "Basic candidate data and live electoral vote counts for top two parties in US presidential election",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://uselection.togatech.org/api/"
  },
  {
    "api": "USA.gov",
    "desc": "Authoritative information on U.S. programs, events, services and more",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.usa.gov/developer"
  },
  {
    "api": "USAspending.gov",
    "desc": "US federal spending data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://api.usaspending.gov/"
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
