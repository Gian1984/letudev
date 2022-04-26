
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
                    <router-link to="/gamescomicsapi" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Games & Comics</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Public APIs <span class="text-gray-500">/ Games & Comics</span></h2>
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
        <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">Games & Comics</h2>
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
              <span class="lg:pl-2">Games & Comics</span>
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
    "api": "Age of Empires II",
    "desc": "Get information about Age of Empires II resources",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://age-of-empires-2-api.herokuapp.com"
  },
  {
    "api": "AmiiboAPI",
    "desc": "Nintendo Amiibo Information",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://amiiboapi.com/"
  },
  {
    "api": "Animal Crossing: New Horizons",
    "desc": "API for critters, fossils, art, music, furniture and villagers",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "http://acnhapi.com/"
  },
  {
    "api": "Autochess VNG",
    "desc": "Rest Api for Autochess VNG",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://github.com/didadadida93/autochess-vng-api"
  },
  {
    "api": "Barter.VG",
    "desc": "Provides information about Game, DLC, Bundles, Giveaways, Trading",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://github.com/bartervg/barter.vg/wiki"
  },
  {
    "api": "Battle.net",
    "desc": "Diablo III, Hearthstone, StarCraft II and World of Warcraft game data APIs",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://develop.battle.net/documentation/guides/getting-started"
  },
  {
    "api": "Board Game Geek",
    "desc": "Board games, RPG and videogames",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://boardgamegeek.com/wiki/page/BGG_XML_API2"
  },
  {
    "api": "Brawl Stars",
    "desc": "Brawl Stars Game Information",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developer.brawlstars.com"
  },
  {
    "api": "Bugsnax",
    "desc": "Get information about Bugsnax",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.bugsnaxapi.com/"
  },
  {
    "api": "CheapShark",
    "desc": "Steam/PC Game Prices and Deals",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.cheapshark.com/api"
  },
  {
    "api": "Chess.com",
    "desc": "Chess.com read-only REST API",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.chess.com/news/view/published-data-api"
  },
  {
    "api": "Chuck Norris Database",
    "desc": "Jokes",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "http://www.icndb.com/api/"
  },
  {
    "api": "Clash of Clans",
    "desc": "Clash of Clans Game Information",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developer.clashofclans.com"
  },
  {
    "api": "Clash Royale",
    "desc": "Clash Royale Game Information",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developer.clashroyale.com"
  },
  {
    "api": "Comic Vine",
    "desc": "Comics",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://comicvine.gamespot.com/api/documentation"
  },
  {
    "api": "Crafatar",
    "desc": "API for Minecraft skins and faces",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://crafatar.com"
  },
  {
    "api": "Cross Universe",
    "desc": "Cross Universe Card Data",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://crossuniverse.psychpsyo.com/apiDocs.html"
  },
  {
    "api": "Deck of Cards",
    "desc": "Deck of Cards",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "http://deckofcardsapi.com/"
  },
  {
    "api": "Destiny The Game",
    "desc": "Bungie Platform API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://bungie-net.github.io/multi/index.html"
  },
  {
    "api": "Digimon Information",
    "desc": "Provides information about digimon creatures",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://digimon-api.vercel.app/"
  },
  {
    "api": "Digimon TCG",
    "desc": "Search for Digimon cards in digimoncard.io",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://documenter.getpostman.com/view/14059948/TzecB4fH"
  },
  {
    "api": "Disney",
    "desc": "Information of Disney characters",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://disneyapi.dev"
  },
  {
    "api": "Dota 2",
    "desc": "Provides information about Player stats , Match stats, Rankings for Dota 2",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.opendota.com/"
  },
  {
    "api": "Dungeons and Dragons",
    "desc": "Reference for 5th edition spells, classes, monsters, and more",
    "auth": "No",
    "https": "No",
    "cors": "No",
    "href": "https://www.dnd5eapi.co/docs/"
  },
  {
    "api": "Dungeons and Dragons (Alternate)",
    "desc": "Includes all monsters and spells from the SRD (System Reference Document) as well as a search API",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://open5e.com/"
  },
  {
    "api": "Eve Online",
    "desc": "Third-Party Developer Documentation",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://esi.evetech.net/ui"
  },
  {
    "api": "FFXIV Collect",
    "desc": "Final Fantasy XIV data on collectables",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://ffxivcollect.com/"
  },
  {
    "api": "FIFA Ultimate Team",
    "desc": "FIFA Ultimate Team items API",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.easports.com/fifa/ultimate-team/api/fut/item"
  },
  {
    "api": "Final Fantasy XIV",
    "desc": "Final Fantasy XIV Game data API",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://xivapi.com/"
  },
  {
    "api": "Fortnite",
    "desc": "Fortnite Stats",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://fortnitetracker.com/site-api"
  },
  {
    "api": "Forza",
    "desc": "Show random image of car from Forza",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.forza-api.tk"
  },
  {
    "api": "FreeToGame",
    "desc": "Free-To-Play Games Database",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.freetogame.com/api-doc"
  },
  {
    "api": "Fun Facts",
    "desc": "Random Fun Facts",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://asli-fun-fact-api.herokuapp.com/"
  },
  {
    "api": "FunTranslations",
    "desc": "Translate Text into funny languages",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://api.funtranslations.com/"
  },
  {
    "api": "GamerPower",
    "desc": "Game Giveaways Tracker",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.gamerpower.com/api-read"
  },
  {
    "api": "GDBrowser",
    "desc": "Easy way to use the Geometry Dash Servers",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://gdbrowser.com/api"
  },
  {
    "api": "Geek-Jokes",
    "desc": "Fetch a random geeky/programming related joke for use in all sorts of applications",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://github.com/sameerkumar18/geek-joke-api"
  },
  {
    "api": "Genshin Impact",
    "desc": "Genshin Impact game data",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://genshin.dev"
  },
  {
    "api": "Giant Bomb",
    "desc": "Video Games",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.giantbomb.com/api/documentation"
  },
  {
    "api": "GraphQL Pokemon",
    "desc": "GraphQL powered Pokemon API. Supports generations 1 through 8",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://github.com/favware/graphql-pokemon"
  },
  {
    "api": "Guild Wars 2",
    "desc": "Guild Wars 2 Game Information",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://wiki.guildwars2.com/wiki/API:Main"
  },
  {
    "api": "GW2Spidy",
    "desc": "GW2Spidy API, Items data on the Guild Wars 2 Trade Market",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://github.com/rubensayshi/gw2spidy/wiki"
  },
  {
    "api": "Halo",
    "desc": "Halo 5 and Halo Wars 2 Information",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developer.haloapi.com/"
  },
  {
    "api": "Hearthstone",
    "desc": "Hearthstone Cards Information",
    "auth": "X-Mashape-Key",
    "https": "Yes",
    "cors": "Unknown",
    "href": "http://hearthstoneapi.com/"
  },
  {
    "api": "Humble Bundle",
    "desc": "Humble Bundle's current bundles",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://rapidapi.com/Ziggoto/api/humble-bundle"
  },
  {
    "api": "Humor",
    "desc": "Humor, Jokes, and Memes",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://humorapi.com"
  },
  {
    "api": "Hypixel",
    "desc": "Hypixel player stats",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://api.hypixel.net/"
  },
  {
    "api": "Hyrule Compendium",
    "desc": "Data on all interactive items from The Legend of Zelda: BOTW",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://github.com/gadhagod/Hyrule-Compendium-API"
  },
  {
    "api": "Hytale",
    "desc": "Hytale blog posts and jobs",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://hytale-api.com/"
  },
  {
    "api": "IGDB.com",
    "desc": "Video Game Database",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://api-docs.igdb.com"
  },
  {
    "api": "JokeAPI",
    "desc": "Programming, Miscellaneous and Dark Jokes",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://sv443.net/jokeapi/v2/"
  },
  {
    "api": "Jokes One",
    "desc": "Joke of the day and large category of jokes accessible via REST API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://jokes.one/api/joke/"
  },
  {
    "api": "Jservice",
    "desc": "Jeopardy Question Database",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "http://jservice.io"
  },
  {
    "api": "Lichess",
    "desc": "Access to all data of users, games, puzzles and etc on Lichess",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://lichess.org/api"
  },
  {
    "api": "Magic The Gathering",
    "desc": "Magic The Gathering Game Information",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "http://magicthegathering.io/"
  },
  {
    "api": "Mario Kart Tour",
    "desc": "API for Drivers, Karts, Gliders and Courses",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://mario-kart-tour-api.herokuapp.com/"
  },
  {
    "api": "Marvel",
    "desc": "Marvel Comics",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developer.marvel.com"
  },
  {
    "api": "Minecraft Server Status",
    "desc": "API to get Information about a Minecraft Server",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://api.mcsrvstat.us"
  },
  {
    "api": "MMO Games",
    "desc": "MMO Games Database, News and Giveaways",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://www.mmobomb.com/api"
  },
  {
    "api": "mod.io",
    "desc": "Cross Platform Mod API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.mod.io"
  },
  {
    "api": "Mojang",
    "desc": "Mojang / Minecraft API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://wiki.vg/Mojang_API"
  },
  {
    "api": "Monster Hunter World",
    "desc": "Monster Hunter World data",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://docs.mhw-db.com/"
  },
  {
    "api": "Open Trivia",
    "desc": "Trivia Questions",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://opentdb.com/api_config.php"
  },
  {
    "api": "PandaScore",
    "desc": "E-sports games and results",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developers.pandascore.co/"
  },
  {
    "api": "Path of Exile",
    "desc": "Path of Exile Game Information",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.pathofexile.com/developer/docs"
  },
  {
    "api": "PlayerDB",
    "desc": "Query Minecraft, Steam and XBox Accounts",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://playerdb.co/"
  },
  {
    "api": "Pokéapi",
    "desc": "Pokémon Information",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://pokeapi.co"
  },
  {
    "api": "PokéAPI (GraphQL)",
    "desc": "The Unofficial GraphQL for PokeAPI",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://github.com/mazipan/graphql-pokeapi"
  },
  {
    "api": "Pokémon TCG",
    "desc": "Pokémon TCG Information",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://pokemontcg.io"
  },
  {
    "api": "Psychonauts",
    "desc": "Psychonauts World Characters Information and PSI Powers",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://psychonauts-api.netlify.app/"
  },
  {
    "api": "PUBG",
    "desc": "Access in-game PUBG data",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://developer.pubg.com/"
  },
  {
    "api": "Puyo Nexus",
    "desc": "Puyo Puyo information from Puyo Nexus Wiki",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://github.com/deltadex7/puyodb-api-deno"
  },
  {
    "api": "quizapi.io",
    "desc": "Access to various kind of quiz questions",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://quizapi.io/"
  },
  {
    "api": "Raider",
    "desc": "Provides detailed character and guild rankings for Raiding and Mythic+ content in World of Warcraft",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://raider.io/api"
  },
  {
    "api": "RAWG.io",
    "desc": "500,000+ games for 50 platforms including mobiles",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://rawg.io/apidocs"
  },
  {
    "api": "Rick and Morty",
    "desc": "All the Rick and Morty information, including images",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://rickandmortyapi.com"
  },
  {
    "api": "Riot Games",
    "desc": "League of Legends Game Information",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developer.riotgames.com/"
  },
  {
    "api": "RPS 101",
    "desc": "Rock, Paper, Scissors with 101 objects",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://rps101.pythonanywhere.com/api"
  },
  {
    "api": "RuneScape",
    "desc": "RuneScape and OSRS RPGs information",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://runescape.wiki/w/Application_programming_interface"
  },
  {
    "api": "Sakura CardCaptor",
    "desc": "Sakura CardCaptor Cards Information",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://github.com/JessVel/sakura-card-captor-api"
  },
  {
    "api": "Scryfall",
    "desc": "Magic: The Gathering database",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://scryfall.com/docs/api"
  },
  {
    "api": "SpaceTradersAPI",
    "desc": "A playable inter-galactic space trading MMOAPI",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://spacetraders.io?rel=pub-apis"
  },
  {
    "api": "Steam",
    "desc": "Steam Web API documentation",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "No",
    "href": "https://steamapi.xpaw.me/"
  },
  {
    "api": "Steam",
    "desc": "Internal Steam Web API documentation",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://github.com/Revadike/InternalSteamWebAPI/wiki"
  },
  {
    "api": "SuperHeroes",
    "desc": "All SuperHeroes and Villains data from all universes under a single API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://superheroapi.com"
  },
  {
    "api": "TCGdex",
    "desc": "Multi languages Pokémon TCG Information",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.tcgdex.net/docs"
  },
  {
    "api": "Tebex",
    "desc": "Tebex API for information about game purchases",
    "auth": "X-Mashape-Key",
    "https": "Yes",
    "cors": "No",
    "href": "https://docs.tebex.io/plugin/"
  },
  {
    "api": "TETR.IO",
    "desc": "TETR.IO Tetra Channel API",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://tetr.io/about/api/"
  },
  {
    "api": "Tronald Dump",
    "desc": "The dumbest things Donald Trump has ever said",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.tronalddump.io/"
  },
  {
    "api": "Universalis",
    "desc": "Final Fantasy XIV market board data",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://universalis.app/docs/index.html"
  },
  {
    "api": "Valorant (non-official)",
    "desc": "An extensive API containing data of most Valorant in-game items, assets and more",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://valorant-api.com"
  },
  {
    "api": "Warface (non-official)",
    "desc": "Official API proxy with better data structure and more features",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://api.wfstats.cf"
  },
  {
    "api": "Wargaming.net",
    "desc": "Wargaming.net info and stats",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "No",
    "href": "https://developers.wargaming.net/"
  },
  {
    "api": "When is next MCU film",
    "desc": "Upcoming MCU film information",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://github.com/DiljotSG/MCU-Countdown/blob/develop/docs/API.md"
  },
  {
    "api": "xkcd",
    "desc": "Retrieve xkcd comics as JSON",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://xkcd.com/json.html"
  },
  {
    "api": "Yu-Gi-Oh!",
    "desc": "Yu-Gi-Oh! TCG Information",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://db.ygoprodeck.com/api-guide/"
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
