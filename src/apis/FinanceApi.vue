
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
                    <router-link to="/financeapi" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Finance</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Public APIs <span class="text-gray-500">/ Finance</span></h2>
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
        <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">Finance</h2>
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
              <span class="lg:pl-2">Finance</span>
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
    "api": "Abstract VAT Validation",
    "desc": "Validate VAT numbers and calculate VAT rates",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.abstractapi.com/vat-validation-rates-api"
  },
  {
    "api": "Aletheia",
    "desc": "Insider trading data, earnings call analysis, financial statements, and more",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://aletheiaapi.com/"
  },
  {
    "api": "Alpaca",
    "desc": "Realtime and historical market data on all US equities and ETFs",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://alpaca.markets/docs/api-documentation/api-v2/market-data/alpaca-data-api-v2/"
  },
  {
    "api": "Alpha Vantage",
    "desc": "Realtime and historical stock data",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.alphavantage.co/"
  },
  {
    "api": "apilayer marketstack",
    "desc": "Real-Time, Intraday &amp; Historical Market Data API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://marketstack.com/"
  },
  {
    "api": "Banco do Brasil",
    "desc": "All Banco do Brasil financial transaction APIs",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://developers.bb.com.br/home"
  },
  {
    "api": "Billplz",
    "desc": "Payment platform",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.billplz.com/api"
  },
  {
    "api": "Binlist",
    "desc": "Public access to a database of IIN/BIN information",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://boleto.cloud/"
  },
  {
    "api": "Boleto.Cloud",
    "desc": "A api to generate boletos in Brazil",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://sandbox.developerhub.citi.com/api-catalog-list"
  },
  {
    "api": "Citi",
    "desc": "All Citigroup account and statement data APIs",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.econdb.com/api/"
  },
  {
    "api": "Econdb",
    "desc": "Global macroeconomic data",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://fiscaldata.treasury.gov/api-documentation/"
  },
  {
    "api": "Fed Treasury",
    "desc": "U.S. Department of the Treasury Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://finage.co.uk"
  },
  {
    "api": "Finage",
    "desc": "Finage is a stock, currency, cryptocurrency, indices, and ETFs real-time &amp; historical data provider",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://site.financialmodelingprep.com/developer/docs"
  },
  {
    "api": "Financial Modeling Prep",
    "desc": "Realtime and historical stock data",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://site.financialmodelingprep.com/developer/docs"
  },
  {
    "api": "Finnhub",
    "desc": "Real-Time RESTful APIs and Websocket for Stocks, Currencies, and Crypto",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://finnhub.io/docs/api"
  },
  {
    "api": "FRED",
    "desc": "Economic data from the Federal Reserve Bank of St. Louis",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://fred.stlouisfed.org/docs/api/fred/"
  },
  {
    "api": "Front Accounting APIs",
    "desc": "Front accounting is multilingual and multicurrency software for small businesses",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://frontaccounting.com/fawiki/index.php?n=Devel.SimpleAPIModule"
  },
  {
    "api": "Hotstoks",
    "desc": "Stock market data powered by SQL",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://hotstoks.com?utm_source=public-apis"
  },
  {
    "api": "IEX Cloud",
    "desc": "Realtime &amp; Historical Stock and Market Data",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://iexcloud.io/docs/api/"
  },
  {
    "api": "IG",
    "desc": "Spreadbetting and CFD Market Data",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://labs.ig.com/gettingstarted"
  },
  {
    "api": "Indian Mutual Fund",
    "desc": "Get complete history of India Mutual Funds Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.mfapi.in/"
  },
  {
    "api": "Intrinio",
    "desc": "A wide selection of financial data feeds",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://intrinio.com/"
  },
  {
    "api": "Klarna",
    "desc": "Klarna payment and shopping service",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.klarna.com/klarna-payments/api/payments-api/"
  },
  {
    "api": "MercadoPago",
    "desc": "Mercado Pago API reference - all the information you need to develop your integrations",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.mercadopago.com.br/developers/es/reference"
  },
  {
    "api": "Mono",
    "desc": "Connect with users’ bank accounts and access transaction data in Africa",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://mono.co/"
  },
  {
    "api": "Moov",
    "desc": "The Moov API makes it simple for platforms to send, receive, and store money",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.moov.io/api/"
  },
  {
    "api": "Nordigen",
    "desc": "Connect to bank accounts using official bank APIs and get raw transaction data",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://nordigen.com/en/account_information_documenation/integration/quickstart_guide/"
  },
  {
    "api": "OpenFIGI",
    "desc": "Equity, index, futures, options symbology from Bloomberg LP",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.openfigi.com/api"
  },
  {
    "api": "Plaid",
    "desc": "Connect with user's bank accounts and access transaction data",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://plaid.com/"
  },
  {
    "api": "Polygon",
    "desc": "Historical stock market data",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://polygon.io/"
  },
  {
    "api": "Portfolio Optimizer",
    "desc": "Portfolio analysis and optimization",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://portfoliooptimizer.io/"
  },
  {
    "api": "Razorpay IFSC",
    "desc": "Indian Financial Systems Code (Bank Branch Codes)",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://razorpay.com/docs/"
  },
  {
    "api": "Real Time Finance",
    "desc": "Websocket API to access realtime stock data",
    "auth": "apiKey",
    "https": "No",
    "cors": "Unknown",
    "href": "https://github.com/Real-time-finance/finance-websocket-API/"
  },
  {
    "api": "SEC EDGAR Data",
    "desc": "API to access annual reports of public US companies",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.sec.gov/edgar/sec-api-documentation"
  },
  {
    "api": "SmartAPI",
    "desc": "Gain access to set of  and create end-to-end broking services",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://smartapi.angelbroking.com/"
  },
  {
    "api": "StockData",
    "desc": "Real-Time, Intraday &amp; Historical Market Data, News and Sentiment API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.StockData.org"
  },
  {
    "api": "Styvio",
    "desc": "Realtime and historical stock data and current stock sentiment",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.Styvio.com"
  },
  {
    "api": "Tradier",
    "desc": "US equity/option market data (delayed, intraday, historical)",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://developer.tradier.com"
  },
  {
    "api": "Twelve Data",
    "desc": "Stock market data (real-time &amp; historical)",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://twelvedata.com/"
  },
  {
    "api": "WallstreetBets",
    "desc": "WallstreetBets Stock Comments Sentiment Analysis",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://dashboard.nbshare.io/apps/reddit/api/"
  },
  {
    "api": "Yahoo Finance",
    "desc": "Real time low latency Yahoo Finance API for stock market, crypto currencies, and currency exchange",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.yahoofinanceapi.com/"
  },
  {
    "api": "YNAB",
    "desc": "Budgeting &amp; Planning",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://api.youneedabudget.com/"
  },
  {
    "api": "Zoho Books",
    "desc": "Online accounting software, built for your business",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.zoho.com/books/api/v3/"
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
