
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
                    <router-link to="/securityapi" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Security</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Public APIs <span class="text-gray-500">/ Security</span></h2>
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
        <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">Security</h2>
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
              <span class="lg:pl-2">Security</span>
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
    "api": "Application Environment Verification",
    "desc": "Android library and API to verify the safety of user devices, detect rooted devices and other risks",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://github.com/fingerprintjs/aev"
  },
  {
    "api": "BinaryEdge",
    "desc": "Provide access to BinaryEdge 40fy scanning platform",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://docs.binaryedge.io/api-v2.html"
  },
  {
    "api": "BitWarden",
    "desc": "Best open-source password manager",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://bitwarden.com/help/api/"
  },
  {
    "api": "Botd",
    "desc": "Botd is a browser library for JavaScript bot detection",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://github.com/fingerprintjs/botd"
  },
  {
    "api": "Bugcrowd",
    "desc": "Bugcrowd API for interacting and tracking the reported issues programmatically",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.bugcrowd.com/api/getting-started/"
  },
  {
    "api": "Censys",
    "desc": "Search engine for Internet connected host and devices",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "No",
    "href": "https://search.censys.io/api"
  },
  {
    "api": "Classify",
    "desc": "Encrypting &amp; decrypting text messages",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://classify-web.herokuapp.com/#/api"
  },
  {
    "api": "Complete Criminal Checks",
    "desc": "Provides data of offenders from all U.S. States and Pureto Rico",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://completecriminalchecks.com/Developers"
  },
  {
    "api": "CRXcavator",
    "desc": "Chrome extension risk scoring",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://crxcavator.io/apidocs"
  },
  {
    "api": "Dehash.lt",
    "desc": "Hash decryption MD5, SHA1, SHA3, SHA256, SHA384, SHA512",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://github.com/Dehash-lt/api"
  },
  {
    "api": "EmailRep",
    "desc": "Email address threat and risk prediction",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.emailrep.io/"
  },
  {
    "api": "Escape",
    "desc": "An API for escaping different kind of queries",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://github.com/polarspetroll/EscapeAPI"
  },
  {
    "api": "FilterLists",
    "desc": "Lists of filters for adblockers and firewalls",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://filterlists.com"
  },
  {
    "api": "FingerprintJS Pro",
    "desc": "Fraud detection API offering highly accurate browser fingerprinting",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://dev.fingerprintjs.com/docs"
  },
  {
    "api": "FraudLabs Pro",
    "desc": "Screen order information using AI to detect frauds",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.fraudlabspro.com/developer/api/screen-order"
  },
  {
    "api": "FullHunt",
    "desc": "Searchable attack surface database of the entire internet",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://api-docs.fullhunt.io/#introduction"
  },
  {
    "api": "GitGuardian",
    "desc": "Scan files for secrets (API Keys, database credentials)",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "No",
    "href": "https://api.gitguardian.com/doc"
  },
  {
    "api": "GreyNoise",
    "desc": "Query IPs in the GreyNoise dataset and retrieve a subset of the full IP context data",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.greynoise.io/reference/get_v3-community-ip"
  },
  {
    "api": "HackerOne",
    "desc": "The industry’s first hacker API that helps increase productivity towards creative bug bounty hunting",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://api.hackerone.com/"
  },
  {
    "api": "Hashable",
    "desc": "A REST API to access high level cryptographic functions and methods",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://hashable.space/pages/api/"
  },
  {
    "api": "HaveIBeenPwned",
    "desc": "Passwords which have previously been exposed in data breaches",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://haveibeenpwned.com/API/v3"
  },
  {
    "api": "Intelligence X",
    "desc": "Perform OSINT via Intelligence X",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://github.com/IntelligenceX/SDK/blob/master/Intelligence%20X%20API.pdf"
  },
  {
    "api": "LoginRadius",
    "desc": "Managed User Authentication Service",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.loginradius.com/docs/"
  },
  {
    "api": "Microsoft Security Response Center (MSRC)",
    "desc": "Programmatic interfaces to engage with the Microsoft Security Response Center (MSRC)",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://msrc.microsoft.com/report/developer"
  },
  {
    "api": "Mozilla http scanner",
    "desc": "Mozilla observatory http scanner",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://github.com/mozilla/http-observatory/blob/master/httpobs/docs/api.md"
  },
  {
    "api": "Mozilla tls scanner",
    "desc": "Mozilla observatory tls scanner",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://github.com/mozilla/tls-observatory#api-endpoints"
  },
  {
    "api": "National Vulnerability Database",
    "desc": "U.S. National Vulnerability Database",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://nvd.nist.gov/vuln/Data-Feeds/JSON-feed-changelog"
  },
  {
    "api": "Passwordinator",
    "desc": "Generate random passwords of varying complexities",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://github.com/fawazsullia/password-generator/"
  },
  {
    "api": "PhishStats",
    "desc": "Phishing database",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://phishstats.info/"
  },
  {
    "api": "Privacy.com",
    "desc": "Generate merchant-specific and one-time use credit card numbers that link back to your bank",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://privacy.com/developer/docs"
  },
  {
    "api": "Pulsedive",
    "desc": "Scan, search and collect threat intelligence data in real-time",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://pulsedive.com/api/"
  },
  {
    "api": "SecurityTrails",
    "desc": "Domain and IP related information such as current and historical WHOIS and DNS records",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://securitytrails.com/corp/apidocs"
  },
  {
    "api": "Shodan",
    "desc": "Search engine for Internet connected devices",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developer.shodan.io/"
  },
  {
    "api": "Spyse",
    "desc": "Access data on all Internet assets and build powerful attack surface management applications",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://spyse-dev.readme.io/reference/quick-start"
  },
  {
    "api": "Threat Jammer",
    "desc": "Risk scoring service from curated threat intelligence data",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://threatjammer.com/docs/index"
  },
  {
    "api": "UK Police",
    "desc": "UK Police data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://data.police.uk/docs/"
  },
  {
    "api": "Virushee",
    "desc": "Virushee file/data scanning",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://api.virushee.com/"
  },
  {
    "api": "VulDB",
    "desc": "VulDB API allows to initiate queries for one or more items along with transactional bots",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://vuldb.com/?doc.api"
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
