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
                    <router-link to="/designsystems" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Design Systems & Style Guides</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Design Systems & Style Guides</h2>
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
  { name: 'Material Design', href:"https://material.io/", desc:'Google\'s Material Design', bgColor: 'bg-pink-600' },
  { name: 'Ant Design', href:"https://ant.design/", desc:'Design system for enterprise-level products', bgColor: 'bg-purple-600' },
  { name: 'Apple Design Resources', href:"https://developer.apple.com/design/resources/", desc: 'Guides and templates for using Apple design and UI', bgColor: 'bg-yellow-500' },
  { name: 'Primer', href:"https://primer.style/", desc: 'Design, build, and create with GitHub’s design system', bgColor: 'bg-green-500' },
  { name: 'Arco.design', href:"https://arco.design/en-US", desc: 'An enterprise-level design system jointly launched by the Bytedance GIP UED team and the architecture front-end team.', bgColor: 'bg-orange-500' },
  { name: 'Alta UI', href:"https://www.oracle.com/webfolder/ux/middleware/alta/index.html", desc: 'Oracle\'s design system and toolkit', bgColor: 'bg-blue-500' },
  { name: 'Pulse', href:"https://pulse.heartbeat.ua/", desc: 'Design system, guides and React component library.', bgColor: 'bg-cyan-500' },
  { name: 'Bolt', href:"https://boltdesignsystem.com/" , desc: 'Robust Twig and web component powered UI components', bgColor: 'bg-sky-500' },
  { name: 'Clarity Design System', href:"https://clarity.design/", desc: 'UX guidelines, HTML/CSS framework, and Angular components', bgColor: 'bg-amber-500' },
  { name: 'AtlasKit', href:"https://atlaskit.atlassian.com/", desc: 'Atlassian\'s official UI library, built according to the Atlassian Design Guidelines', bgColor: 'bg-red-500' },
  { name: 'Audi Design Resources', href:"https://www.audi.com/ci/en/guides/user-interface/introduction.html", desc: 'Audi UI design system and toolkit', bgColor: 'bg-emerald-500' },
  { name: 'Carbon Design Systems', href:"https://www.carbondesignsystem.com/", desc: 'Carbon is IBM’s open-source design system for products and experiences', bgColor: 'bg-pink-500' },
  { name: 'Yelp Style Guide', href:"https://www.yelp.com/styleguide", desc:'Yelp style guide, components and toolkit', bgColor: 'bg-purple-600' },
  { name: 'Comet', href:"https://comet.discoveryeducation.com/" , desc: 'Scalable design system of visual language, components, and design assets', bgColor: 'bg-yellow-500' },
  { name: 'ETrade Design System', href:"https://etrade.design/", desc: 'Guides and toolkits that blend finance with simplicity and ease of use', bgColor: 'bg-green-500' },
  { name: 'Fundamental Library', href:"https://sap.github.io/fundamental-styles/", desc: 'Open source and community driven project for consistent user interfaces', bgColor: 'bg-orange-500' },
  { name: 'Infor Design', href:"https://design.infor.com/", desc: 'Guidelines and resources to create meaningful experiences for Infor’s products', bgColor: 'bg-blue-500' },
  { name: 'Lexicon', href:"https://liferay.design/lexicon/" , desc: 'An experience language for crafting beautiful UI', bgColor: 'bg-cyan-500' },
  { name: 'Mailchimp UI/UX', href:"https://ux.mailchimp.com/patterns/color" , desc: 'Style guide and components from Mailchimp', bgColor: 'bg-sky-500' },
  { name: 'Marvel Style Guide', href:"https://marvelapp.com/styleguide/overview/introduction", desc: 'Set of design principles and components', bgColor: 'bg-amber-500' },
  { name: 'Microsoft Fluent UI', href:"https://developer.microsoft.com/en-us/fluentui#/", desc: 'Collection of UX frameworks from Microsoft', bgColor: 'bg-red-500' },
  { name: 'Pluralsight Design System', href:"https://design-system.pluralsight.com/", desc: 'Design guide with components for designing with Pluralsight', bgColor: 'bg-emerald-500' },
  { name: 'Polaris', href:"https://polaris.shopify.com/", desc: 'Design system that creates great experiences for all of Shopify’s merchants', bgColor: 'bg-pink-500' },
  { name: 'Mozilla Protocol', href:"https://protocol.mozilla.org/", desc:'Protocol is a design system for Mozilla and Firefox websites', bgColor: 'bg-purple-600' },
  { name: 'SendGrid Style Guide', href:"http://styleguide.sendgrid.com/", desc: 'UI library for developing consistent UI/UX at SendGrid', bgColor: 'bg-yellow-500' },
  { name: 'VTEX Styleguide', href:"https://styleguide.vtex.com/", desc: 'Reusable patterns, components and assets related to product design in VTEX', bgColor: 'bg-green-500' },
  { name: 'Rizzo', href:"https://rizzo.lonelyplanet.com/styleguide/design-elements", desc: 'Style guide with UI components, JS components, widgets, etc', bgColor: 'bg-orange-500' },
  { name: 'Atomize', href:"https://atomizecode.com/", desc: 'UI framework that helps developers collaborate with designers and build consistent user interfaces effortlessly', bgColor: 'bg-blue-500' },
  { name: 'StyleGuides.io', href:"http://styleguides.io/", desc: 'A directory of 500+ styleguides', bgColor: 'bg-cyan-500' },
  { name: 'Done Design System', href:"https://uilibrary.github.io/done-design-system/", desc: 'Open source design system, guides & components', bgColor: 'bg-amber-500' },
  { name: 'Skoda Brand System', href:"https://skoda-brand.com/explore-our-brand" , desc: 'Design guideline for developing applications under the Skoda brand', bgColor: 'bg-red-500' },
  { name: 'Spectrum', href:"https://spectrum.adobe.com/", desc: 'Adobe’s design system that provides components and tools to help product teams work more efficiently, and to make Adobe’s applications more cohesive.', bgColor: 'bg-emerald-500' },
  { name: 'Asphalt', href: "https://asphalt.gojek.io/" , desc:'Gojek’s design language system. A collection of guidelines and components to create amazing user experiences.', bgColor: 'bg-pink-500' },
  { name: 'Laws of UX', href:"https://lawsofux.com/", desc:'A collection of the key maxims that designers must consider when building user interfaces.', bgColor: 'bg-purple-600' },
  { name: 'Checklist Design', href:"https://www.checklist.design/", desc:'Checklist Design is a curated list of checklists ranging from website pages, to UI components, all the way to branding assets.', bgColor: 'bg-yellow-500' },
  { name: 'Humane By Design', href:"https://humanebydesign.com/", desc: 'A resource that provides guidance for designing ethically humane digital products through patterns focused on user well-being.', bgColor: 'bg-green-500' },
  { name: 'Pr1mer Guidelines', href:"https://guidelines.pr1mer.tech", desc: 'An open source set of very general guidelines, inspired by Human Interface. Created and maintained by Pr1mer Tech', bgColor: 'bg-orange-500' },
  { name: 'Patterfly', href:"https://www.patternfly.org/" , desc: 'PatternFly is an open source design system from Red Hat, Inc.', bgColor: 'bg-blue-500' },
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
      moment
    }
  },
}
</script>
