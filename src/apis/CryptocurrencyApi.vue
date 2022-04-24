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
                    <router-link to="/cryptocurrencyapi" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Cryptocurrency</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Public APIs <span class="text-gray-500">/ Cryptocurrency </span></h2>
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
        <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">Cryptocurrency</h2>
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
              <span class="lg:pl-2">Cryptocurrency</span>
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
