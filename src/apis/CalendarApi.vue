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
                    <router-link to="/calendarapi" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Calendars</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Public APIs <span class="text-gray-500">/ Calendars </span></h2>
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
              <span class="lg:pl-2">Calendars</span>
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
    "api": "Abstract Public Holidays",
    "desc": "Data on national, regional, and religious holidays via API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.abstractapi.com/holidays-api"
  },
  {
    "api": "Calendarific",
    "desc": "Worldwide Holidays",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://calendarific.com/"
  },
  {
    "api": "Church Calendar",
    "desc": "Catholic liturgical calendar",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "http://calapi.inadiutorium.cz/"
  },
  {
    "api": "Czech Namedays Calendar",
    "desc": "Lookup for a name and returns nameday date",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "https://svatky.adresa.info"
  },
  {
    "api": "Festivo Public Holidays",
    "desc": "Fastest and most advanced public holiday and observance service on the market",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://docs.getfestivo.com/docs/products/public-holidays-api/intro"
  },
  {
    "api": "Google Calendar",
    "desc": "Display, create and modify Google calendar events",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developers.google.com/google-apps/calendar/"
  },
  {
    "api": "Hebrew Calendar",
    "desc": "Convert between Gregorian and Hebrew, fetch Shabbat and Holiday times, etc",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "https://www.hebcal.com/home/developer-apis"
  },
  {
    "api": "Holidays",
    "desc": "Historical data regarding holidays",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://holidayapi.com/"
  },
  {
    "api": "LectServe",
    "desc": "Protestant liturgical calendar",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "http://www.lectserve.com"
  },
  {
    "api": "Nager.Date",
    "desc": "Public holidays for more than 90 countries",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://date.nager.at"
  },
  {
    "api": "Namedays Calendar",
    "desc": "Provides namedays for multiple countries",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://nameday.abalin.net"
  },
  {
    "api": "Non-Working Days",
    "desc": "Database of ICS files for non working days",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://github.com/gadael/icsdb"
  },
  {
    "api": "Non-Working Days",
    "desc": "Simple REST API for checking working, non-working or short days for Russia, CIS, USA and other",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://isdayoff.ru"
  },
  {
    "api": "Russian Calendar",
    "desc": "Check if a date is a Russian holiday or not",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://github.com/egno/work-calendar"
  },
  {
    "api": "UK Bank Holidays",
    "desc": "Bank holidays in England and Wales, Scotland and Northern Ireland",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.gov.uk/bank-holidays.json"
  }
]

const storeShare = [
  {
    "api": "AnonFiles",
    "desc": "Upload and share your files anonymously",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://anonfiles.com/docs/api"
  },
  {
    "api": "BayFiles",
    "desc": "Upload and share your files",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://bayfiles.com/docs/api"
  },
  {
    "api": "Box",
    "desc": "File Sharing and Storage",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developer.box.com/"
  },
  {
    "api": "ddownload",
    "desc": "File Sharing and Storage",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://ddownload.com/api"
  },
  {
    "api": "Dropbox",
    "desc": "File Sharing and Storage",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.dropbox.com/developers"
  },
  {
    "api": "File.io",
    "desc": "Super simple file sharing, convenient, anonymous and secure",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.file.io"
  },
  {
    "api": "GoFile",
    "desc": "Unlimited size file uploads for free",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://gofile.io/api"
  },
  {
    "api": "Google Drive",
    "desc": "File Sharing and Storage",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developers.google.com/drive/"
  },
  {
    "api": "Gyazo",
    "desc": "Save &amp; Share screen captures instantly",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://gyazo.com/api/docs"
  },
  {
    "api": "Imgbb",
    "desc": "Simple and quick private image sharing",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://api.imgbb.com/"
  },
  {
    "api": "OneDrive",
    "desc": "File Sharing and Storage",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developer.microsoft.com/onedrive"
  },
  {
    "api": "Pantry",
    "desc": "Free JSON storage for small projects",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://getpantry.cloud/"
  },
  {
    "api": "Pastebin",
    "desc": "Plain Text Storage",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://pastebin.com/doc_api"
  },
  {
    "api": "Pinata",
    "desc": "IPFS Pinning Services API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.pinata.cloud/"
  },
  {
    "api": "Quip",
    "desc": "File Sharing and Storage for groups",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://quip.com/dev/automation/documentation"
  },
  {
    "api": "Storj",
    "desc": "Decentralized Open-Source Cloud Storage",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.storj.io/dcs/"
  },
  {
    "api": "The Null Pointer",
    "desc": "No-bullshit file hosting and URL shortening service",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://0x0.st"
  },
  {
    "api": "Web3 Storage",
    "desc": "File Sharing and Storage for Free with 1TB Space",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://web3.storage/"
  }
]

const integrations = [
  {
    "api": "Azure DevOps Health",
    "desc": "Resource health helps you diagnose and get support when an Azure issue impacts your resources",
    "auth": "apiKey",
    "https": "No",
    "cors": "No",
    "href": "https://docs.microsoft.com/en-us/rest/api/resourcehealth"
  },
  {
    "api": "Bitrise",
    "desc": "Build tool and processes integrations to create efficient development pipelines",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://api-docs.bitrise.io/"
  },
  {
    "api": "Buddy",
    "desc": "The fastest continuous integration and continuous delivery platform",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://buddy.works/docs/api/getting-started/overview"
  },
  {
    "api": "CircleCI",
    "desc": "Automate the software development process using continuous integration and continuous delivery",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://circleci.com/docs/api/v1-reference/"
  },
  {
    "api": "Codeship",
    "desc": "Codeship is a Continuous Integration Platform in the cloud",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.cloudbees.com/docs/cloudbees-codeship/latest/api-overview/"
  },
  {
    "api": "Travis CI",
    "desc": "Sync your GitHub projects with Travis CI to test your code in minutes",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.travis-ci.com/api/"
  }
]

const cryptocurrencies = [
  {
    "api": "0x",
    "desc": "API for querying token and pool stats across various liquidity pools",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://0x.org/api"
  },
  {
    "api": "1inch",
    "desc": "API for querying decentralize exchange",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://1inch.io/api/"
  },
  {
    "api": "Alchemy Ethereum",
    "desc": "Ethereum Node-as-a-Service Provider",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://docs.alchemy.com/alchemy/"
  },
  {
    "api": "apilayer coinlayer",
    "desc": "Real-time Crypto Currency Exchange Rates",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://coinlayer.com"
  },
  {
    "api": "Binance",
    "desc": "Exchange for Trading Cryptocurrencies based in China",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://github.com/binance/binance-spot-api-docs"
  },
  {
    "api": "Bitcambio",
    "desc": "Get the list of all traded assets in the exchange",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://nova.bitcambio.com.br/api/v3/docs#a-public"
  },
  {
    "api": "BitcoinAverage",
    "desc": "Digital Asset Price Data for the blockchain industry",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://apiv2.bitcoinaverage.com/"
  },
  {
    "api": "BitcoinCharts",
    "desc": "Financial and Technical Data related to the Bitcoin Network",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://bitcoincharts.com/about/exchanges/"
  },
  {
    "api": "Bitfinex",
    "desc": "Cryptocurrency Trading Platform",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.bitfinex.com/docs"
  },
  {
    "api": "Bitmex",
    "desc": "Real-Time Cryptocurrency derivatives trading platform based in Hong Kong",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.bitmex.com/app/apiOverview"
  },
  {
    "api": "Bittrex",
    "desc": "Next Generation Crypto Trading Platform",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://bittrex.github.io/api/v3"
  },
  {
    "api": "Block",
    "desc": "Bitcoin Payment, Wallet &amp; Transaction Data",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://block.io/docs/basic"
  },
  {
    "api": "Blockchain",
    "desc": "Bitcoin Payment, Wallet &amp; Transaction Data",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.blockchain.com/api"
  },
  {
    "api": "blockfrost Cardano",
    "desc": "Interaction with the Cardano mainnet and several testnets",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://blockfrost.io/"
  },
  {
    "api": "Brave NewCoin",
    "desc": "Real-time and historic crypto data from more than 200+ exchanges",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://bravenewcoin.com/developers"
  },
  {
    "api": "BtcTurk",
    "desc": "Real-time cryptocurrency data, graphs and API that allows buy&amp;sell",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://docs.btcturk.com/"
  },
  {
    "api": "Bybit",
    "desc": "Cryptocurrency data feed and algorithmic trading",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://bybit-exchange.github.io/docs/linear/#t-introduction"
  },
  {
    "api": "CoinAPI",
    "desc": "All Currency Exchanges integrate under a single api",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "No",
    "href": "https://docs.coinapi.io/"
  },
  {
    "api": "Coinbase",
    "desc": "Bitcoin, Bitcoin Cash, Litecoin and Ethereum Prices",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developers.coinbase.com"
  },
  {
    "api": "Coinbase Pro",
    "desc": "Cryptocurrency Trading Platform",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.pro.coinbase.com/#api"
  },
  {
    "api": "CoinCap",
    "desc": "Real time Cryptocurrency prices through a RESTful API",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.coincap.io/"
  },
  {
    "api": "CoinDCX",
    "desc": "Cryptocurrency Trading Platform",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.coindcx.com/"
  },
  {
    "api": "CoinDesk",
    "desc": "CoinDesk's Bitcoin Price Index (BPI) in multiple currencies",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://old.coindesk.com/coindesk-api/"
  },
  {
    "api": "CoinGecko",
    "desc": "Cryptocurrency Price, Market, and Developer/Social Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "http://www.coingecko.com/api"
  },
  {
    "api": "Coinigy",
    "desc": "Interacting with Coinigy Accounts and Exchange Directly",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://coinigy.docs.apiary.io"
  },
  {
    "api": "Coinlib",
    "desc": "Crypto Currency Prices",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://coinlib.io/apidocs"
  },
  {
    "api": "Coinlore",
    "desc": "Cryptocurrencies prices, volume and more",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.coinlore.com/cryptocurrency-data-api"
  },
  {
    "api": "CoinMarketCap",
    "desc": "Cryptocurrencies Prices",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://coinmarketcap.com/api/"
  },
  {
    "api": "Coinpaprika",
    "desc": "Cryptocurrencies prices, volume and more",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://api.coinpaprika.com"
  },
  {
    "api": "CoinRanking",
    "desc": "Live Cryptocurrency data",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developers.coinranking.com/api/documentation"
  },
  {
    "api": "Coinremitter",
    "desc": "Cryptocurrencies Payment &amp; Prices",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://coinremitter.com/docs"
  },
  {
    "api": "CoinStats",
    "desc": "Crypto Tracker",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://documenter.getpostman.com/view/5734027/RzZ6Hzr3?version=latest"
  },
  {
    "api": "CryptAPI",
    "desc": "Cryptocurrency Payment Processor",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.cryptapi.io/"
  },
  {
    "api": "CryptingUp",
    "desc": "Cryptocurrency data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.cryptingup.com/apidoc/#introduction"
  },
  {
    "api": "CryptoCompare",
    "desc": "Cryptocurrencies Comparison",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.cryptocompare.com/api#"
  },
  {
    "api": "CryptoMarket",
    "desc": "Cryptocurrencies Trading platform",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://api.exchange.cryptomkt.com/"
  },
  {
    "api": "Cryptonator",
    "desc": "Cryptocurrencies Exchange Rates",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.cryptonator.com/api/"
  },
  {
    "api": "dYdX",
    "desc": "Decentralized cryptocurrency exchange",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.dydx.exchange/"
  },
  {
    "api": "Ethplorer",
    "desc": "Ethereum tokens, balances, addresses, history of transactions, contracts, and custom structures",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://github.com/EverexIO/Ethplorer/wiki/Ethplorer-API"
  },
  {
    "api": "EXMO",
    "desc": "Cryptocurrencies exchange based in UK",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://documenter.getpostman.com/view/10287440/SzYXWKPi"
  },
  {
    "api": "FTX",
    "desc": "Complete REST, websocket, and FTX APIs to suit your algorithmic trading needs",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://docs.ftx.com/"
  },
  {
    "api": "Gateio",
    "desc": "API provides spot, margin and futures trading operations",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.gate.io/api2"
  },
  {
    "api": "Gemini",
    "desc": "Cryptocurrencies Exchange",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.gemini.com/rest-api/"
  },
  {
    "api": "Hirak Exchange Rates",
    "desc": "Exchange rates between 162 currency &amp; 300 crypto currency update each 5 min, accurate, no limits",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://rates.hirak.site/"
  },
  {
    "api": "Huobi",
    "desc": "Seychelles based cryptocurrency exchange",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://huobiapi.github.io/docs/spot/v1/en/"
  },
  {
    "api": "icy.tools",
    "desc": "GraphQL based NFT API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developers.icy.tools/"
  },
  {
    "api": "Indodax",
    "desc": "Trade your Bitcoin and other assets with rupiah",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://github.com/btcid/indodax-official-api-docs"
  },
  {
    "api": "INFURA Ethereum",
    "desc": "Interaction with the Ethereum mainnet and several testnets",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://infura.io/product/ethereum"
  },
  {
    "api": "Kraken",
    "desc": "Cryptocurrencies Exchange",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.kraken.com/rest/"
  },
  {
    "api": "KuCoin",
    "desc": "Cryptocurrency Trading Platform",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.kucoin.com/"
  },
  {
    "api": "Localbitcoins",
    "desc": "P2P platform to buy and sell Bitcoins",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://localbitcoins.com/api-docs/"
  },
  {
    "api": "Mempool",
    "desc": "Bitcoin API Service focusing on the transaction fee",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://mempool.space/api"
  },
  {
    "api": "MercadoBitcoin",
    "desc": "Brazilian Cryptocurrency Information",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.mercadobitcoin.com.br/api-doc/"
  },
  {
    "api": "Messari",
    "desc": "Provides API endpoints for thousands of crypto assets",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://messari.io/api"
  },
  {
    "api": "Nexchange",
    "desc": "Automated cryptocurrency exchange service",
    "auth": "No",
    "https": "No",
    "cors": "Yes",
    "href": "https://nexchange2.docs.apiary.io/"
  },
  {
    "api": "Nomics",
    "desc": "Historical and realtime cryptocurrency prices and market data",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://nomics.com/docs/"
  },
  {
    "api": "NovaDax",
    "desc": "NovaDAX API to access all market data, trading management endpoints",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://doc.novadax.com/en-US/#introduction"
  },
  {
    "api": "OKEx",
    "desc": "Cryptocurrency exchange based in Seychelles",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.okex.com/docs/"
  },
  {
    "api": "Poloniex",
    "desc": "US based digital asset exchange",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.poloniex.com"
  },
  {
    "api": "Solana JSON RPC",
    "desc": "Provides various endpoints to interact with the Solana Blockchain",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.solana.com/developing/clients/jsonrpc-api"
  },
  {
    "api": "Technical Analysis",
    "desc": "Cryptocurrency prices and technical analysis",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "No",
    "href": "https://technical-analysis-api.com"
  },
  {
    "api": "VALR",
    "desc": "Cryptocurrency Exchange based in South Africa",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.valr.com/"
  },
  {
    "api": "WorldCoinIndex",
    "desc": "Cryptocurrencies Prices",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.worldcoinindex.com/apiservice"
  },
  {
    "api": "ZMOK",
    "desc": "Ethereum JSON RPC API and Web3 provider",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://zmok.io"
  }
]

const currencyExchange = [
  {
    "api": "1Forge",
    "desc": "Forex currency market data",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://1forge.com/forex-data-api/api-documentation"
  },
  {
    "api": "Amdoren",
    "desc": "Free currency API with over 150 currencies",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.amdoren.com/currency-api/"
  },
  {
    "api": "apilayer fixer.io",
    "desc": "Exchange rates and currency conversion",
    "auth": "apiKey",
    "https": "No",
    "cors": "Unknown",
    "href": "https://fixer.io"
  },
  {
    "api": "Bank of Russia",
    "desc": "Exchange rates and currency conversion",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.cbr.ru/development/SXML/"
  },
  {
    "api": "Currency-api",
    "desc": "Free Currency Exchange Rates API with 150+ Currencies &amp; No Rate Limits",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://github.com/fawazahmed0/currency-api#readme"
  },
  {
    "api": "CurrencyFreaks",
    "desc": "Provides current and historical currency exchange rates with free plan 1K requests/month",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://currencyfreaks.com/"
  },
  {
    "api": "Currencylayer",
    "desc": "Exchange rates and currency conversion",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://currencylayer.com/documentation"
  },
  {
    "api": "CurrencyScoop",
    "desc": "Real-time and historical currency rates JSON API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://currencyscoop.com/api-documentation"
  },
  {
    "api": "Czech National Bank",
    "desc": "A collection of exchange rates",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.cnb.cz/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.xml"
  },
  {
    "api": "Economia.Awesome",
    "desc": "Portuguese free currency prices and conversion with no rate limits",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.awesomeapi.com.br/api-de-moedas"
  },
  {
    "api": "ExchangeRate-API",
    "desc": "Free currency conversion",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.exchangerate-api.com"
  },
  {
    "api": "Exchangerate.host",
    "desc": "Free foreign exchange &amp; crypto rates API",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://exchangerate.host"
  },
  {
    "api": "Exchangeratesapi.io",
    "desc": "Exchange rates with currency conversion",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://exchangeratesapi.io"
  },
  {
    "api": "Frankfurter",
    "desc": "Exchange rates, currency conversion and time series",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.frankfurter.app/docs"
  },
  {
    "api": "FreeForexAPI",
    "desc": "Real-time foreign exchange rates for major currency pairs",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://freeforexapi.com/Home/Api"
  },
  {
    "api": "National Bank of Poland",
    "desc": "A collection of currency exchange rates (data in XML and JSON)",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "http://api.nbp.pl/en.html"
  },
  {
    "api": "VATComply.com",
    "desc": "Exchange rates, geolocation and VAT number validation",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.vatcomply.com/documentation"
  }
]

const dataValidation = [
  {
    "api": "Lob.com",
    "desc": "US Address Verification",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://lob.com/"
  },
  {
    "api": "Postman Echo",
    "desc": "Test api server to receive and return value from HTTP method",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.postman-echo.com"
  },
  {
    "api": "PurgoMalum",
    "desc": "Content validator against profanity &amp; obscenity",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "http://www.purgomalum.com"
  },
  {
    "api": "US Autocomplete",
    "desc": "Enter address data quickly with real-time address suggestions",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.smarty.com/docs/cloud/us-autocomplete-pro-api"
  },
  {
    "api": "US Extract",
    "desc": "Extract postal addresses from any text including emails",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.smarty.com/products/apis/us-extract-api"
  },
  {
    "api": "US Street Address",
    "desc": "Validate and append data for any US postal address",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.smarty.com/docs/cloud/us-street-api"
  },
  {
    "api": "vatlayer",
    "desc": "VAT number validation",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://vatlayer.com/documentation"
  }
]

const development = [
  {
    "api": "24 Pull Requests",
    "desc": "Project to promote open source collaboration during December",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://24pullrequests.com/api"
  },
  {
    "api": "Abstract Screenshot",
    "desc": "Take programmatic screenshots of web pages from any website",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.abstractapi.com/website-screenshot-api"
  },
  {
    "api": "Agify.io",
    "desc": "Estimates the age from a first name",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://agify.io"
  },
  {
    "api": "API Grátis",
    "desc": "Multiples services and public APIs",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://apigratis.com.br/"
  },
  {
    "api": "ApicAgent",
    "desc": "Extract device details from user-agent string",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.apicagent.com"
  },
  {
    "api": "ApiFlash",
    "desc": "Chrome based screenshot API for developers",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://apiflash.com/"
  },
  {
    "api": "apilayer userstack",
    "desc": "Secure User-Agent String Lookup JSON API",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://userstack.com/"
  },
  {
    "api": "APIs.guru",
    "desc": "Wikipedia for Web APIs, OpenAPI/Swagger specs for public APIs",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://apis.guru/api-doc/"
  },
  {
    "api": "Azure DevOps",
    "desc": "The Azure DevOps basic components of a REST API request/response pair",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.microsoft.com/en-us/rest/api/azure/devops"
  },
  {
    "api": "Base",
    "desc": "Building quick backends",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.base-api.io/"
  },
  {
    "api": "Beeceptor",
    "desc": "Build a mock Rest API endpoint in seconds",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://beeceptor.com/"
  },
  {
    "api": "Bitbucket",
    "desc": "Bitbucket API",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developer.atlassian.com/bitbucket/api/2/reference/"
  },
  {
    "api": "Blague.xyz",
    "desc": "La plus grande API de Blagues FR/The biggest FR jokes API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://blague.xyz/"
  },
  {
    "api": "Blitapp",
    "desc": "Schedule screenshots of web pages and sync them to your cloud",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://blitapp.com/api/"
  },
  {
    "api": "Blynk-Cloud",
    "desc": "Control IoT Devices from Blynk IoT Cloud",
    "auth": "apiKey",
    "https": "No",
    "cors": "Unknown",
    "href": "https://blynkapi.docs.apiary.io/#"
  },
  {
    "api": "Bored",
    "desc": "Find random activities to fight boredom",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.boredapi.com/"
  },
  {
    "api": "Brainshop.ai",
    "desc": "Make A Free A.I Brain",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://brainshop.ai/"
  },
  {
    "api": "Browshot",
    "desc": "Easily make screenshots of web pages in any screen size, as any device",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://browshot.com/api/documentation"
  },
  {
    "api": "CDNJS",
    "desc": "Library info on CDNJS",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://api.cdnjs.com/libraries/jquery"
  },
  {
    "api": "Changelogs.md",
    "desc": "Structured changelog metadata from open source projects",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://changelogs.md"
  },
  {
    "api": "Ciprand",
    "desc": "Secure random string generator",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://github.com/polarspetroll/ciprand"
  },
  {
    "api": "Cloudflare Trace",
    "desc": "Get IP Address, Timestamp, User Agent, Country Code, IATA, HTTP Version, TLS/SSL Version &amp; More",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://github.com/fawazahmed0/cloudflare-trace-api"
  },
  {
    "api": "Codex",
    "desc": "Online Compiler for Various Languages",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://github.com/Jaagrav/CodeX"
  },
  {
    "api": "Contentful Images",
    "desc": "Used to retrieve and apply transformations to images",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.contentful.com/developers/docs/references/images-api/"
  },
  {
    "api": "CORS Proxy",
    "desc": "Get around the dreaded CORS error by using this proxy as a middle man",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://github.com/burhanuday/cors-proxy"
  },
  {
    "api": "CountAPI",
    "desc": "Free and simple counting service. You can use it to track page hits and specific events",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://countapi.xyz"
  },
  {
    "api": "Databricks",
    "desc": "Service to manage your databricks account,clusters, notebooks, jobs and workspaces",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://docs.databricks.com/dev-tools/api/latest/index.html"
  },
  {
    "api": "DigitalOcean Status",
    "desc": "Status of all DigitalOcean services",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://status.digitalocean.com/api"
  },
  {
    "api": "Docker Hub",
    "desc": "Interact with Docker Hub",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://docs.docker.com/docker-hub/api/latest/"
  },
  {
    "api": "DomainDb Info",
    "desc": "Domain name search to find all domains containing particular words/phrases/etc",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://api.domainsdb.info/"
  },
  {
    "api": "ExtendsClass JSON Storage",
    "desc": "A simple JSON store API",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://extendsclass.com/json-storage.html"
  },
  {
    "api": "GeekFlare",
    "desc": "Provide numerous capabilities for important testing and monitoring methods for websites",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://apidocs.geekflare.com/docs/geekflare-api"
  },
  {
    "api": "Genderize.io",
    "desc": "Estimates a gender from a first name",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://genderize.io"
  },
  {
    "api": "GETPing",
    "desc": "Trigger an email notification with a simple GET request",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.getping.info"
  },
  {
    "api": "Ghost",
    "desc": "Get Published content into your Website, App or other embedded media",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://ghost.org/"
  },
  {
    "api": "GitHub",
    "desc": "Make use of GitHub repositories, code and user info programmatically",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://docs.github.com/en/free-pro-team@latest/rest"
  },
  {
    "api": "Gitlab",
    "desc": "Automate GitLab interaction programmatically",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.gitlab.com/ee/api/"
  },
  {
    "api": "Gitter",
    "desc": "Chat for Developers",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developer.gitter.im/docs/welcome"
  },
  {
    "api": "Glitterly",
    "desc": "Image generation API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://developers.glitterly.app"
  },
  {
    "api": "Google Docs",
    "desc": "API to read, write, and format Google Docs documents",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developers.google.com/docs/api/reference/rest"
  },
  {
    "api": "Google Firebase",
    "desc": "Google's mobile application development platform that helps build, improve, and grow app",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://firebase.google.com/docs"
  },
  {
    "api": "Google Fonts",
    "desc": "Metadata for all families served by Google Fonts",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developers.google.com/fonts/docs/developer_api"
  },
  {
    "api": "Google Keep",
    "desc": "API to read, write, and format Google Keep notes",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developers.google.com/keep/api/reference/rest"
  },
  {
    "api": "Google Sheets",
    "desc": "API to read, write, and format Google Sheets data",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developers.google.com/sheets/api/reference/rest"
  },
  {
    "api": "Google Slides",
    "desc": "API to read, write, and format Google Slides presentations",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developers.google.com/slides/api/reference/rest"
  },
  {
    "api": "Gorest",
    "desc": "Online REST API for Testing and Prototyping",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://gorest.co.in/"
  },
  {
    "api": "Hasura",
    "desc": "GraphQL and REST API Engine with built in Authorization",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://hasura.io/opensource/"
  },
  {
    "api": "Heroku",
    "desc": "REST API to programmatically create apps, provision add-ons and perform other task on Heroku",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://devcenter.heroku.com/articles/platform-api-reference/"
  },
  {
    "api": "host-t.com",
    "desc": "Basic DNS query via HTTP GET request",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://host-t.com"
  },
  {
    "api": "Host.io",
    "desc": "Domains Data API for Developers",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://host.io"
  },
  {
    "api": "HTTP2.Pro",
    "desc": "Test endpoints for client and server HTTP/2 protocol support",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://http2.pro/doc/api"
  },
  {
    "api": "Httpbin",
    "desc": "A Simple HTTP Request &amp; Response Service",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://httpbin.org/"
  },
  {
    "api": "Httpbin Cloudflare",
    "desc": "A Simple HTTP Request &amp; Response Service with HTTP/3 Support by Cloudflare",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://cloudflare-quic.com/b/"
  },
  {
    "api": "Hunter",
    "desc": "API for domain search, professional email finder, author finder and email verifier",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://hunter.io/api"
  },
  {
    "api": "IBM Text to Speech",
    "desc": "Convert text to speech",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://cloud.ibm.com/docs/text-to-speech/getting-started.html"
  },
  {
    "api": "Icanhazepoch",
    "desc": "Get Epoch time",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://icanhazepoch.com"
  },
  {
    "api": "Icanhazip",
    "desc": "IP Address API",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://major.io/icanhazip-com-faq/"
  },
  {
    "api": "IFTTT",
    "desc": "IFTTT Connect API",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://platform.ifttt.com/docs/connect_api"
  },
  {
    "api": "Image-Charts",
    "desc": "Generate charts, QR codes and graph images",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://documentation.image-charts.com/"
  },
  {
    "api": "import.io",
    "desc": "Retrieve structured data from a website or RSS feed",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "http://api.docs.import.io/"
  },
  {
    "api": "ip-fast.com",
    "desc": "IP address, country and city",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://ip-fast.com/docs/"
  },
  {
    "api": "IP2WHOIS Information Lookup",
    "desc": "WHOIS domain name lookup",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.ip2whois.com/"
  },
  {
    "api": "ipfind.io",
    "desc": "Geographic location of an IP address or any domain name along with some other useful information",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://ipfind.io"
  },
  {
    "api": "IPify",
    "desc": "A simple IP Address API",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.ipify.org/"
  },
  {
    "api": "IPinfo",
    "desc": "Another simple IP Address API",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://ipinfo.io/developers"
  },
  {
    "api": "jsDelivr",
    "desc": "Package info and download stats on jsDelivr CDN",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://github.com/jsdelivr/data.jsdelivr.com"
  },
  {
    "api": "JSON 2 JSONP",
    "desc": "Convert JSON to JSONP (on-the-fly) for easy cross-domain data requests using client-side JavaScript",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://json2jsonp.com/"
  },
  {
    "api": "JSONbin.io",
    "desc": "Free JSON storage service. Ideal for small scale Web apps, Websites and Mobile apps",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://jsonbin.io"
  },
  {
    "api": "Kroki",
    "desc": "Creates diagrams from textual descriptions",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://kroki.io"
  },
  {
    "api": "License-API",
    "desc": "Unofficial REST API for choosealicense.com",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://github.com/cmccandless/license-api/blob/master/README.md"
  },
  {
    "api": "Logs.to",
    "desc": "Generate logs",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://logs.to/"
  },
  {
    "api": "Lua Decompiler",
    "desc": "Online Lua 5.1 Decompiler",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://lua-decompiler.ferib.dev/"
  },
  {
    "api": "MAC address vendor lookup",
    "desc": "Retrieve vendor details and other information regarding a given MAC address or an OUI",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://macaddress.io/api"
  },
  {
    "api": "Micro DB",
    "desc": "Simple database service",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://m3o.com/db"
  },
  {
    "api": "MicroENV",
    "desc": "Fake Rest API for developers",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://microenv.com/"
  },
  {
    "api": "Mocky",
    "desc": "Mock user defined test JSON for REST API endpoints",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://designer.mocky.io/"
  },
  {
    "api": "MY IP",
    "desc": "Get IP address information",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.myip.com/api-docs/"
  },
  {
    "api": "Nationalize.io",
    "desc": "Estimate the nationality of a first name",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://nationalize.io"
  },
  {
    "api": "Netlify",
    "desc": "Netlify is a hosting service for the programmable web",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.netlify.com/api/get-started/"
  },
  {
    "api": "NetworkCalc",
    "desc": "Network calculators, including subnets, DNS, binary, and security tools",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://networkcalc.com/api/docs"
  },
  {
    "api": "npm Registry",
    "desc": "Query information about your favorite Node.js libraries programatically",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md"
  },
  {
    "api": "OneSignal",
    "desc": "Self-serve customer engagement solution for Push Notifications, Email, SMS &amp; In-App",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://documentation.onesignal.com/docs/onesignal-api"
  },
  {
    "api": "Open Page Rank",
    "desc": "API for calculating and comparing metrics of different websites using Page Rank algorithm",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.domcop.com/openpagerank/"
  },
  {
    "api": "OpenAPIHub",
    "desc": "The All-in-one API Platform",
    "auth": "X-Mashape-Key",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://hub.openapihub.com/"
  },
  {
    "api": "OpenGraphr",
    "desc": "Really simple API to retrieve Open Graph data from an URL",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://opengraphr.com/docs/1.0/overview"
  },
  {
    "api": "oyyi",
    "desc": "API for Fake Data, image/video conversion, optimization, pdf optimization and thumbnail generation",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://oyyi.xyz/docs/1.0"
  },
  {
    "api": "PageCDN",
    "desc": "Public API for javascript, css and font libraries on PageCDN",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://pagecdn.com/docs/public-api"
  },
  {
    "api": "Postman",
    "desc": "Tool for testing APIs",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a"
  },
  {
    "api": "ProxyCrawl",
    "desc": "Scraping and crawling anticaptcha service",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://proxycrawl.com"
  },
  {
    "api": "ProxyKingdom",
    "desc": "Rotating Proxy API that produces a working proxy on every request",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://proxykingdom.com"
  },
  {
    "api": "Pusher Beams",
    "desc": "Push notifications for Android &amp; iOS",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://pusher.com/beams"
  },
  {
    "api": "QR code",
    "desc": "Create an easy to read QR code and URL shortener",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.qrtag.net/api/"
  },
  {
    "api": "QR code",
    "desc": "Generate and decode / read QR code graphics",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "http://goqr.me/api/"
  },
  {
    "api": "Qrcode Monkey",
    "desc": "Integrate custom and unique looking QR codes into your system or workflow",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.qrcode-monkey.com/qr-code-api-with-logo/"
  },
  {
    "api": "QuickChart",
    "desc": "Generate chart and graph images",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://quickchart.io/"
  },
  {
    "api": "Random Stuff",
    "desc": "Can be used to get AI Response, jokes, memes, and much more at lightning-fast speed",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://api-docs.pgamerx.com/"
  },
  {
    "api": "Rejax",
    "desc": "Reverse AJAX service to notify clients",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "No",
    "href": "https://rejax.io/"
  },
  {
    "api": "ReqRes",
    "desc": "A hosted REST-API ready to respond to your AJAX requests",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://reqres.in/"
  },
  {
    "api": "RSS feed to JSON",
    "desc": "Returns RSS feed in JSON format using feed URL",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://rss-to-json-serverless-api.vercel.app"
  },
  {
    "api": "SavePage.io",
    "desc": "A free, RESTful API used to screenshot any desktop, or mobile website",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.savepage.io"
  },
  {
    "api": "ScrapeNinja",
    "desc": "Scraping API with Chrome fingerprint and residential proxies",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://scrapeninja.net"
  },
  {
    "api": "ScraperApi",
    "desc": "Easily build scalable web scrapers",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.scraperapi.com"
  },
  {
    "api": "scraperBox",
    "desc": "Undetectable web scraping API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://scraperbox.com/"
  },
  {
    "api": "scrapestack",
    "desc": "Real-time, Scalable Proxy &amp; Web Scraping REST API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://scrapestack.com/"
  },
  {
    "api": "ScrapingAnt",
    "desc": "Headless Chrome scraping with a simple API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://scrapingant.com"
  },
  {
    "api": "ScrapingDog",
    "desc": "Proxy API for Web scraping",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.scrapingdog.com/"
  },
  {
    "api": "ScreenshotAPI.net",
    "desc": "Create pixel-perfect website screenshots",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://screenshotapi.net/"
  },
  {
    "api": "Serialif Color",
    "desc": "Color conversion, complementary, grayscale and contrasted text",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://color.serialif.com/"
  },
  {
    "api": "serpstack",
    "desc": "Real-Time &amp; Accurate Google Search Results API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://serpstack.com/"
  },
  {
    "api": "Sheetsu",
    "desc": "Easy google sheets integration",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://sheetsu.com/"
  },
  {
    "api": "SHOUTCLOUD",
    "desc": "ALL-CAPS AS A SERVICE",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "http://shoutcloud.io/"
  },
  {
    "api": "Sonar",
    "desc": "Project Sonar DNS Enumeration API",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://github.com/Cgboal/SonarSearch"
  },
  {
    "api": "SonarQube",
    "desc": "SonarQube REST APIs to detect bugs, code smells &amp; security vulnerabilities",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://sonarcloud.io/web_api"
  },
  {
    "api": "StackExchange",
    "desc": "Q&amp;A forum for developers",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://api.stackexchange.com/"
  },
  {
    "api": "Statically",
    "desc": "A free CDN for developers",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://statically.io/"
  },
  {
    "api": "Supportivekoala",
    "desc": "Autogenerate images with template",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://developers.supportivekoala.com/"
  },
  {
    "api": "Tyk",
    "desc": "Api and service management platform",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://tyk.io/open-source/"
  },
  {
    "api": "Wandbox",
    "desc": "Code compiler supporting 35+ languages mentioned at wandbox.org",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://github.com/melpon/wandbox/blob/master/kennel2/API.rst"
  },
  {
    "api": "WebScraping.AI",
    "desc": "Web Scraping API with built-in proxies and JS rendering",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://webscraping.ai/"
  },
  {
    "api": "ZenRows",
    "desc": "Web Scraping API that bypasses anti-bot solutions while offering JS rendering, and rotating proxies",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.zenrows.com/"
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
      storeShare,
      integrations,
      cryptocurrencies,
      currencyExchange,
      dataValidation,
      development,
      moment
    }
  },


}
</script>
