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
                    <router-link to="/resources" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">HTML & CSS Templates</router-link>
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <ChevronRightIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <router-link to="/html&csstemplates" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">HTML & CSS Templates</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">UI Graphics</h2>
              <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                <div class="mt-2 flex text-sm text-gray-500">
                  <CalendarIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  Last update - March 9, 2022
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

const projects = [
  { name: 'HTML5Up', href:"https://html5up.net/", desc:'Very modern, unique responsive HTML5/CSS3 themes', bgColor: 'bg-pink-600' },
  { name: 'Templatemo', href:"https://templatemo.com/", desc:'Minimal, resume, gallery themes and more', bgColor: 'bg-purple-600' },
  { name: 'FreeHTML5', href:"https://freehtml5.co/", desc: 'Free & premium HTML5 and Bootstrap themes', bgColor: 'bg-yellow-500' },
  { name: 'StyleShout', href:"https://www.styleshout.com/free-templates/", desc: 'Brilliantly crafted free website templates', bgColor: 'bg-green-500' },
  { name: 'Start Bootstrap', href:"https://startbootstrap.com/", desc: 'Bootstrap starter themes', bgColor: 'bg-orange-500' },
  { name: 'Zerotheme', href:"https://www.zerotheme.com/", desc: 'HTML5, Bootstrap, Prestashop templates', bgColor: 'bg-blue-500' },
  { name: 'HTML5xCSS3', href:"https://www.html5xcss3.com/", desc: 'Collection of wonderful templates in different categories', bgColor: 'bg-cyan-500' },
  { name: 'Colorlib', href:"https://colorlib.com/wp/templates/", desc: 'Almost any category of theme you can think of', bgColor: 'bg-sky-500' },
  { name: 'Free CSS', href:"https://www.free-css.com/free-css-templates", desc: 'Huge collection of free templates', bgColor: 'bg-amber-500' },
  { name: 'Hubspot', href: "https://www.hubspot.com/resources", desc: 'Templates, infographics, banners and much more', bgColor: 'bg-red-500' },
  { name: 'Mobirise', href:"https://mobirise.com/html-templates/", desc: 'Great looking HTML5/CSS3 templates', bgColor: 'bg-emerald-500' },
  { name: 'Bootswatch', href:"https://bootswatch.com/", desc: 'Free themes for Bootstrap', bgColor: 'bg-pink-500' },
  { name: 'Onepagelove', href:"https://onepagelove.com/", desc:'One-page websites, templates and resources', bgColor: 'bg-purple-600' },
  { name: 'Themes For App', href:"https://themesfor.app/", desc: 'Free Bootstrap themes and landing pages', bgColor: 'bg-yellow-500' },
  { name: 'BootstrapTaste', href:"https://bootstraptaste.com/", desc: 'Premium & Free Bootstrap Templates', bgColor: 'bg-green-500' },
  { name: 'BootstrapMade', href:"https://bootstrapmade.com/", desc: 'Elegant, clean and beautiful free templates using Bootstrap.', bgColor: 'bg-orange-500' },
  { name: 'W3Layouts', href:"https://w3layouts.com/", desc: 'W3Layouts: 3784+ Free Website Templates for 2020', bgColor: 'bg-blue-500' },
  { name: 'Tooplate', href:"https://www.tooplate.com/", desc: 'Tooplate: Free HTML Templates for everyone!', bgColor: 'bg-cyan-500' },
  { name: 'Cruip', href:"https://cruip.com/free-templates/", desc: 'Fully coded HTML templates to help you easily build your startup landing page without hassles.', bgColor: 'bg-sky-500' },
  { name: 'UIdeck', href:"https://uideck.com/", desc: 'Free Landing Page Templates and Bootstrap Themes', bgColor: 'bg-amber-500' },
  { name: 'Splawr', href:"https://splawr.com/" , desc: 'Free web templates to kickstart your idea!', bgColor: 'bg-red-500' },
  { name: 'W3css_templates', href:"https://www.w3schools.com/w3css/w3css_templates.asp", desc: 'Some responsive W3.CSS website templates for you to use.', bgColor: 'bg-emerald-500' },
  { name: 'All-Free-Download', href:"https://all-free-download.com/free-website-templates/free-html-css-templates.html", desc: 'Download free-website-templates', bgColor: 'bg-pink-500' },
  { name: 'Mashup-template', href:"http://www.mashup-template.com/templates.html", desc:'HTML5/CSS3 Free Templates', bgColor: 'bg-purple-600' },
  { name: 'Sneat Bootstrap 5 HTML Admin Template', href:"https://github.com/themeselection/sneat-html-admin-template-free", desc: 'Open-source &amp; Easy to us Bootstrap 5 HTML Admin Template with Elegant Design &amp; Unique Layout.', bgColor: 'bg-yellow-500' },
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
    }
  },
}
</script>
