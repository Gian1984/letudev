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
              <router-link to="/resources" class="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
                <ChevronLeftIcon class="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                Resources
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
                    <router-link to="/designinspiration" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Design Inspiration</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Design Inspiration</h2>
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

  <main class="-mt-32 max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8 mt-24 mb-10">

    <div>
      <label for="name" class="mt-5 block text-sm font-medium text-gray-700">
        Find your resource
      </label>
      <input type="search" v-model="searchQuery" name="name" id="name"  class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" placeholder="Enter a search here!" />
    </div>

    <div>
      <p class="mb-2 text-right" v-if="searchQuery && filterProjects.length > 1 ">{{filterProjects.length}} results</p>
      <div v-if="!searchQuery"></div>
      <div v-else class="border-2 border-orange-300 rounded-2xl mt-2">
        <ul role="list" class="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-1 lg:grid-cols-1 px-2 py-2">
          <li v-for="project in filterProjects" :key="project.name" class="col-span-1 flex shadow-sm rounded-md">
            <div :class="[project.bgColor, 'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md']"></div>
            <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div class="flex-1 px-4 py-2 text-sm truncate">
                <a :href="project.href" target="_blank" class="text-gray-900 font-medium hover:text-gray-600 uppercase">{{ project.name }}</a>
                <p class="text-gray-500">{{ project.desc }} </p>
              </div>
              <div class="flex-shrink-0 pr-2">
                <a :href="project.href" type="button" target="_blank" class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                  <span class="sr-only">Open options</span>
                  <ChevronDoubleRightIcon class="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <h2 class="mt-10 text-gray-500 text-xs font-medium uppercase tracking-wide">Pinned Projects</h2>
    <ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-1 lg:grid-cols-2">
      <li v-for="project in projects" :key="project.name" class="col-span-1 flex shadow-sm rounded-md">
        <div :class="[project.bgColor, 'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md']"></div>
        <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
          <div class="flex-1 px-4 py-2 text-sm truncate">
            <a :href="project.href" target="_blank" class="text-gray-900 font-medium hover:text-gray-600 uppercase">{{ project.name }}</a>
            <p class="text-gray-500">{{ project.desc }} </p>
          </div>
          <div class="flex-shrink-0 pr-2">
            <a :href="project.href" type="button" target="_blank" class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
              <span class="sr-only">Open options</span>
              <ChevronDoubleRightIcon class="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
import { ChevronDoubleRightIcon, CalendarIcon } from '@heroicons/vue/outline'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid'
import moment from "moment";

const projects = [
  { name: 'Behance', href:"https://www.behance.net/", desc:'Design projects featured by different creators', bgColor: 'bg-pink-600' },
  { name: 'Dribbble', href:"https://dribbble.com/" , desc:'Design projects featured by different creators', bgColor: 'bg-purple-600' },
  { name: 'Landingfolio', href:"https://landingfolio.com/", desc: 'Landingfolio features the best landing page inspiration, templates, resources and examples on the web.', bgColor: 'bg-yellow-500' },
  { name: 'Codewell', href:"https://www.codewell.cc/", desc: 'Practice your HTML, CSS, and Javascript skills on real world design templates', bgColor: 'bg-green-500' },
  { name: 'Foxyapps', href:"https://foxyapps.co/" , desc: 'Design inspiration from the best mobile app designs', bgColor: 'bg-orange-500' },
  { name: 'Httpster', href:"https://httpster.net/2020/apr/", desc: "Showcases websites made by people from all over the world", bgColor: 'bg-blue-500' },
  { name: 'Inspofinds', href:"https://inspofinds.com/", desc: 'Latest design work from designers and the design community', bgColor: 'bg-cyan-500' },
  { name: 'Land Book', href:"https://land-book.com/" , desc: 'Displays a large collection of websites to help find inspiration', bgColor: 'bg-sky-500' },
  { name: 'Frontend Mentor', href:"https://www.frontendmentor.io/", desc: 'Real-world UI Challenges using HTML, CSS and Javascript', bgColor: 'bg-amber-500' },
  { name: 'Awwwards', href:"https://www.awwwards.com/", desc: 'A website that rate and collects the best websites in the world in UI', bgColor: 'bg-red-500' },
  { name: 'SaaS Landing Page', href:"https://saaslandingpage.com/" , desc:'Discover the best landing page examples created by top-class SaaS companies', bgColor: 'bg-emerald-500' },
  { name: 'Saaspages.xyz', href:"https://saaspages.xyz" , desc: 'A collection of the best landing pages with a focus on copywriting and design.', bgColor: 'bg-pink-500' },
  { name: 'Screenlane', href:"https://screenlane.com", desc:'Screenlane is a website and newsletter that features the latest web and mobile design inspiration.', bgColor: 'bg-purple-600' },
  { name: 'Lapa ninja', href:"https://www.lapa.ninja/" , desc: 'Best landing page inspiration', bgColor: 'bg-yellow-500' },
  { name: 'Freefrontend', href:"https://freefrontend.com/", desc: 'Free frontend design from css html and javascript. latest work some design part', bgColor: 'bg-green-500' },
  { name: 'Webframe', href:"https://webframe.xyz", desc: 'Discover and be inspired by beautiful webapp designs', bgColor: 'bg-orange-500' },
  { name: 'Collect UI', href:"http://collectui.com/", desc: 'Daily inspiration collected from daily ui archive and beyond. Handpicked, and updating daily.', bgColor: 'bg-blue-500' },
  { name: 'Graphic Burger', href:"https://graphicburger.com/" , desc: 'A site offering a free and pain icons, mock-ups, Ui-Kits, text effect and backgrounds.  This site\'s resource are a mix of free and paid resources.', bgColor: 'bg-cyan-500' },
  { name: 'Really Good Emails', href:"https://reallygoodemails.com/", desc: 'A site offering users a ton of company e-mails from customer service to marketing.', bgColor: 'bg-sky-500' },
  { name: 'Free Design Resource', href:"https://freedesignresources.net/", desc: 'A site offering fonts, mockups, templates graphics and ui kits.', bgColor: 'bg-amber-500' },
  { name: 'Site Inspire', href:"https://www.siteinspire.com/", desc: 'Site Inspire is a showcase of the finest web and interactive design.', bgColor: 'bg-red-500' },
  { name: 'Web Design Inspiration', href:"https://www.webdesign-inspiration.com/", desc: 'A site for web design inspiration, updated daily.', bgColor: 'bg-emerald-500' },
  { name: 'NavNav', href:"https://navnav.co/", desc: 'Responsive navigation examples', bgColor: 'bg-pink-500' },
  { name: 'Calltoidea', href:"https://www.calltoidea.com/"  , desc:'Collection of different web Components for inspiration.', bgColor: 'bg-purple-600' },
  { name: 'MediaQueri.es', href:"https://mediaqueri.es/", desc: 'A collection of inspirational websites using media queries and responsive web design', bgColor: 'bg-yellow-500' },
  { name: 'Mulzli Search', href:"https://search.muz.li", desc: 'Search engine for design inspiration', bgColor: 'bg-green-500' },
  { name: 'DeviantArt', href:"https://www.deviantart.com/", desc: 'Access to 370 million pieces of art for inspiration.', bgColor: 'bg-orange-500' },
  { name: 'Design your way', href:"https://www.designyourway.net/blog/web-and-mobile-design/", desc: 'Collection of different Web and Mobile Designs', bgColor: 'bg-blue-500' },
  { name: 'Humans.fyi', href:"https://humans.fyi/", desc: 'A collection of brilliant personal websites filterable by colors and web technologies used in each website.', bgColor: 'bg-cyan-500' },
  { name: 'SiteSee', href:"https://sitesee.co/" , desc: 'A curated gallery of beautiful and modern websites.', bgColor: 'bg-amber-500' },
  { name: 'UI Garage', href:"https://uigarage.net/", desc: 'Daily handpicked UI inspiration &amp; patterns.', bgColor: 'bg-red-500' },
  { name: 'Ecomm design', href:"https://ecomm.design/", desc: 'eCommerce Website Design Gallery & Tech Inspiration.', bgColor: 'bg-emerald-500' },
  { name: 'Design Nominees', href: "https://www.designnominees.com/", desc:'A showcase of awarding and showcasing the best websites, apps and Games.', bgColor: 'bg-pink-500' },
  { name: 'Design Vault', href:"https://designvault.io/", desc:'A library of screenshots and patterns from real world digital products', bgColor: 'bg-purple-600' },
  { name: 'CSS buttons', href:"https://getcssscan.com/css-buttons-examples", desc:'84 Beautiful CSS buttons examples.', bgColor: 'bg-yellow-500' },
  { name: 'CSS box-shadow', href:"https://getcssscan.com/css-box-shadow-examples", desc: '91 Beautiful CSS box-shadow examples.', bgColor: 'bg-green-500' },
  { name: 'Super Designer', href:"https://superdesigner.co", desc: 'Design tools that give you super powers.', bgColor: 'bg-orange-500' },
 ]

export default {
  computed: {

    filterProjects() {
      return this.projects.filter(result => {
        const myRegex = new RegExp(this.searchQuery, 'gi');
        let resultFacet = this.facet;
        if (resultFacet.length == 0) {
          return (result.desc.match(myRegex) || result.desc.match(myRegex))
        }
        return (result.desc.match(myRegex) || result.desc.match(myRegex)) && (resultFacet.includes(result.id));
      })
    },
  },

  data(){
    return{
      facet: [],
      searchQuery: null,
    }
  },

  components: {
    CalendarIcon,
    ChevronDoubleRightIcon,
    ChevronLeftIcon,
    ChevronRightIcon
  },
  setup() {
    return {
      projects,
      setup() {
        return undefined;
      }
    }
  },
}
</script>
