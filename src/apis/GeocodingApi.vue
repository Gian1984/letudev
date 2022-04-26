
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
                    <router-link to="/geocodingapi" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Geocoding</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Public APIs <span class="text-gray-500">/ Geocoding</span></h2>
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
        <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">Geocoding</h2>
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
              <span class="lg:pl-2">Geocoding</span>
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
    "api": "Abstract IP Geolocation",
    "desc": "Geolocate website visitors from their IPs",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.abstractapi.com/ip-geolocation-api"
  },
  {
    "api": "Actinia Grass GIS",
    "desc": "Actinia is an open source REST API for geographical data that uses GRASS GIS",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://actinia.mundialis.de/api_docs/"
  },
  {
    "api": "administrative-divisons-db",
    "desc": "Get all administrative divisions of a country",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://github.com/kamikazechaser/administrative-divisions-db"
  },
  {
    "api": "adresse.data.gouv.fr",
    "desc": "Address database of France, geocoding and reverse",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://adresse.data.gouv.fr"
  },
  {
    "api": "Airtel IP",
    "desc": "IP Geolocation API. Collecting data from multiple sources",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://sys.airtel.lv/ip2country/1.1.1.1/?full=true"
  },
  {
    "api": "Apiip",
    "desc": "Get location information by IP address",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://apiip.net/"
  },
  {
    "api": "apilayer ipstack",
    "desc": "Locate and identify website visitors by IP address",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://ipstack.com/"
  },
  {
    "api": "Battuta",
    "desc": "A (country/region/city) in-cascade location API",
    "auth": "apiKey",
    "https": "No",
    "cors": "Unknown",
    "href": "http://battuta.medunes.net"
  },
  {
    "api": "BigDataCloud",
    "desc": "Provides fast and accurate IP geolocation APIs along with security checks and confidence area",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.bigdatacloud.com/ip-geolocation-apis"
  },
  {
    "api": "Bing Maps",
    "desc": "Create/customize digital maps based on Bing Maps data",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.microsoft.com/maps/"
  },
  {
    "api": "bng2latlong",
    "desc": "Convert British OSGB36 easting and northing (British National Grid) to WGS84 latitude and longitude",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.getthedata.com/bng2latlong"
  },
  {
    "api": "Cartes.io",
    "desc": "Create maps and markers for anything",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://github.com/M-Media-Group/Cartes.io/wiki/API"
  },
  {
    "api": "Cep.la",
    "desc": "Brazil RESTful API to find information about streets, zip codes, neighborhoods, cities and states",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "http://cep.la/"
  },
  {
    "api": "CitySDK",
    "desc": "Open APIs for select European cities",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "http://www.citysdk.eu/citysdk-toolkit/"
  },
  {
    "api": "Country",
    "desc": "Get your visitor's country from their IP",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "http://country.is/"
  },
  {
    "api": "CountryStateCity",
    "desc": "World countries, states, regions, provinces, cities &amp; towns in JSON, SQL, XML, YAML, &amp; CSV format",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://countrystatecity.in/"
  },
  {
    "api": "Ducks Unlimited",
    "desc": "API explorer that gives a query URL with a JSON response of locations and cities",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://gis.ducks.org/datasets/du-university-chapters/api"
  },
  {
    "api": "FreeGeoIP",
    "desc": "Free geo ip information, no registration required. 15k/hour rate limit",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://freegeoip.app/"
  },
  {
    "api": "GeoApi",
    "desc": "French geographical data",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://api.gouv.fr/api/geoapi.html"
  },
  {
    "api": "Geoapify",
    "desc": "Forward and reverse geocoding, address autocomplete",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.geoapify.com/api/geocoding-api/"
  },
  {
    "api": "Geocod.io",
    "desc": "Address geocoding / reverse geocoding in bulk",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.geocod.io/"
  },
  {
    "api": "Geocode.xyz",
    "desc": "Provides worldwide forward/reverse geocoding, batch geocoding and geoparsing",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://geocode.xyz/api"
  },
  {
    "api": "Geocodify.com",
    "desc": "Worldwide geocoding, geoparsing and autocomplete for addresses",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://geocodify.com/"
  },
  {
    "api": "Geodata.gov.gr",
    "desc": "Open geospatial data and API service for Greece",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://geodata.gov.gr/en/"
  },
  {
    "api": "GeoDataSource",
    "desc": "Geocoding of city name by using latitude and longitude coordinates",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.geodatasource.com/web-service"
  },
  {
    "api": "GeoDB Cities",
    "desc": "Get global city, region, and country data",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "http://geodb-cities-api.wirefreethought.com/"
  },
  {
    "api": "GeographQL",
    "desc": "A Country, State, and City GraphQL API",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://geographql.netlify.app"
  },
  {
    "api": "GeoJS",
    "desc": "IP geolocation with ChatOps integration",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.geojs.io/"
  },
  {
    "api": "Geokeo",
    "desc": "Geokeo geocoding service- with 2500 free api requests daily",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://geokeo.com"
  },
  {
    "api": "GeoNames",
    "desc": "Place names and other geographical data",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "http://www.geonames.org/export/web-services.html"
  },
  {
    "api": "geoPlugin",
    "desc": "IP geolocation and currency conversion",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.geoplugin.com"
  },
  {
    "api": "Google Earth Engine",
    "desc": "A cloud-based platform for planetary-scale environmental data analysis",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developers.google.com/earth-engine/"
  },
  {
    "api": "Google Maps",
    "desc": "Create/customize digital maps based on Google Maps data",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developers.google.com/maps/"
  },
  {
    "api": "Graph Countries",
    "desc": "Country-related data like currencies, languages, flags, regions+subregions and bordering countries",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://github.com/lennertVanSever/graphcountries"
  },
  {
    "api": "HelloSalut",
    "desc": "Get hello translation following user language",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://fourtonfish.com/project/hellosalut-api/"
  },
  {
    "api": "HERE Maps",
    "desc": "Create/customize digital maps based on HERE Maps data",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developer.here.com"
  },
  {
    "api": "Hirak IP to Country",
    "desc": "Ip to location with country code, currency code &amp; currency name, fast response, unlimited requests",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://iplocation.hirak.site/"
  },
  {
    "api": "Hong Kong GeoData Store",
    "desc": "API for accessing geo-data of Hong Kong",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://geodata.gov.hk/gs/"
  },
  {
    "api": "IBGE",
    "desc": "Aggregate services of IBGE (Brazilian Institute of Geography and Statistics)",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://servicodados.ibge.gov.br/api/docs/"
  },
  {
    "api": "IP 2 Country",
    "desc": "Map an IP to a country",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://ip2country.info"
  },
  {
    "api": "IP Address Details",
    "desc": "Find geolocation with ip address",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://ipinfo.io/"
  },
  {
    "api": "IP Vigilante",
    "desc": "Free IP Geolocation API",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.ipvigilante.com/"
  },
  {
    "api": "ip-api",
    "desc": "Find location with IP address or domain",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "https://ip-api.com/docs"
  },
  {
    "api": "IP2Location",
    "desc": "IP geolocation web service to get more than 55 parameters",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.ip2location.com/web-service/ip2location"
  },
  {
    "api": "IP2Proxy",
    "desc": "Detect proxy and VPN using IP address",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.ip2location.com/web-service/ip2proxy"
  },
  {
    "api": "ipapi.co",
    "desc": "Find IP address location information",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://ipapi.co/api/#introduction"
  },
  {
    "api": "ipapi.com",
    "desc": "Real-time Geolocation &amp; Reverse IP Lookup REST API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://ipapi.com/"
  },
  {
    "api": "IPGEO",
    "desc": "Unlimited free IP Address API with useful information",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://api.techniknews.net/ipgeo/"
  },
  {
    "api": "ipgeolocation",
    "desc": "IP Geolocation AP with free plan 30k requests per month",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://ipgeolocation.io/"
  },
  {
    "api": "IPInfoDB",
    "desc": "Free Geolocation tools and APIs for country, region, city and time zone lookup by IP address",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.ipinfodb.com/api"
  },
  {
    "api": "Kakao Maps",
    "desc": "Kakao Maps provide multiple APIs for Korean maps",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://apis.map.kakao.com"
  },
  {
    "api": "keycdn IP Location Finder",
    "desc": "Get the IP geolocation data through the simple REST API. All the responses are JSON encoded",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://tools.keycdn.com/geo"
  },
  {
    "api": "LocationIQ",
    "desc": "Provides forward/reverse geocoding and batch geocoding",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://locationiq.org/docs/"
  },
  {
    "api": "Longdo Map",
    "desc": "Interactive map with detailed places and information portal in Thailand",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://map.longdo.com/docs/"
  },
  {
    "api": "Mapbox",
    "desc": "Create/customize beautiful digital maps",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.mapbox.com/"
  },
  {
    "api": "MapQuest",
    "desc": "To access tools and resources to map the world",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "No",
    "href": "https://developer.mapquest.com/"
  },
  {
    "api": "Mexico",
    "desc": "Mexico RESTful zip codes API",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://github.com/IcaliaLabs/sepomex"
  },
  {
    "api": "Nominatim",
    "desc": "Provides worldwide forward / reverse geocoding",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://nominatim.org/release-docs/latest/api/Overview/"
  },
  {
    "api": "One Map, Singapore",
    "desc": "Singapore Land Authority REST API services for Singapore addresses",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.onemap.gov.sg/docs/"
  },
  {
    "api": "OnWater",
    "desc": "Determine if a lat/lon is on water or land",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://onwater.io/"
  },
  {
    "api": "Open Topo Data",
    "desc": "Elevation and ocean depth for a latitude and longitude",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://www.opentopodata.org"
  },
  {
    "api": "OpenCage",
    "desc": "Forward and reverse geocoding using open data",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://opencagedata.com"
  },
  {
    "api": "openrouteservice.org",
    "desc": "Directions, POIs, isochrones, geocoding (+reverse), elevation, and more",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://openrouteservice.org/"
  },
  {
    "api": "OpenStreetMap",
    "desc": "Navigation, geolocation and geographical data",
    "auth": "OAuth",
    "https": "No",
    "cors": "Unknown",
    "href": "http://wiki.openstreetmap.org/wiki/API"
  },
  {
    "api": "Pinball Map",
    "desc": "A crowdsourced map of public pinball machines",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://pinballmap.com/api/v1/docs"
  },
  {
    "api": "positionstack",
    "desc": "Forward & Reverse Batch Geocoding REST API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://positionstack.com/"
  },
  {
    "api": "Postali",
    "desc": "Mexico Zip Codes API",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://postali.app/api"
  },
  {
    "api": "PostcodeData.nl",
    "desc": "Provide geolocation data based on postcode for Dutch addresses",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "http://api.postcodedata.nl/v1/postcode/?postcode=1211EP&amp;streetnumber=60&amp;ref=domeinnaam.nl&amp;type=json"
  },
  {
    "api": "Postcodes.io",
    "desc": "Postcode lookup & Geolocation for the UK",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://postcodes.io"
  },
  {
    "api": "Queimadas INPE",
    "desc": "Access to heat focus data (probable wildfire)",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://queimadas.dgi.inpe.br/queimadas/dados-abertos/"
  },
  {
    "api": "REST Countries",
    "desc": "Get information about countries via a RESTful API",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://restcountries.com"
  },
  {
    "api": "RoadGoat Cities",
    "desc": "Cities content &amp; photos API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "No",
    "href": "https://www.roadgoat.com/business/cities-api"
  },
  {
    "api": "Rwanda Locations",
    "desc": "Rwanda Provences, Districts, Cities, Capital City, Sector, cells, villages and streets",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://rapidapi.com/victorkarangwa4/api/rwanda"
  },
  {
    "api": "SLF",
    "desc": "German city, country, river, database",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://github.com/slftool/slftool.github.io/blob/master/API.md"
  },
  {
    "api": "SpotSense",
    "desc": "Add location based interactions to your mobile app",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://spotsense.io/"
  },
  {
    "api": "Telize",
    "desc": "Telize offers location information from any IP address",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://rapidapi.com/fcambus/api/telize/"
  },
  {
    "api": "TomTom",
    "desc": "Maps, Directions, Places and Traffic APIs",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://developer.tomtom.com/"
  },
  {
    "api": "Uebermaps",
    "desc": "Discover and share maps with friends",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://uebermaps.com/api/v2"
  },
  {
    "api": "US ZipCode",
    "desc": "Validate and append data for any US ZipCode",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.smarty.com/docs/cloud/us-zipcode-api"
  },
  {
    "api": "Utah AGRC",
    "desc": "Utah Web API for geocoding Utah addresses",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://api.mapserv.utah.gov"
  },
  {
    "api": "ViaCep",
    "desc": "Brazil RESTful zip codes API",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://viacep.com.br"
  },
  {
    "api": "What3Words",
    "desc": "Three words as rememberable and unique coordinates worldwide",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://what3words.com"
  },
  {
    "api": "Yandex.Maps Geocoder",
    "desc": "Use geocoding to get an object's coordinates from its address",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://yandex.com/dev/maps/geocoder"
  },
  {
    "api": "ZipCodeAPI",
    "desc": "US zip code distance, radius and location API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.zipcodeapi.com"
  },
  {
    "api": "Zippopotam.us",
    "desc": "Get information about place such as country, city, state, etc",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "http://www.zippopotam.us"
  },
  {
    "api": "Ziptastic",
    "desc": "Get the country, state, and city of any US zip-code",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://ziptasticapi.com/"
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
