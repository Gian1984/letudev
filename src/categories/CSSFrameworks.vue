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
                    <router-link to="/cssframeworks" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">CSS Frameworks</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">CSS Frameworks</h2>
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
  { name: 'Tailwind CSS', href:"https://tailwindcss.com/", desc:'Low level, utility-first framework', bgColor: 'bg-pink-600' },
  { name: 'Bootstrap', href:"https://getbootstrap.com/", desc:'Popular UI framework with tons of components that use both CSS and JS', bgColor: 'bg-purple-600' },
  { name: 'Materialize', href:"https://materializecss.com/", desc:'A modern responsive front-end framework based on Material Design', bgColor: 'bg-yellow-500' },
  { name: 'Material Design Lite', href:"https://getmdl.io/", desc: 'Light framework based on Material Design. No JS dependency', bgColor: 'bg-green-500' },
  { name: 'Bulma', href:"https://bulma.io/", desc: 'Modern CSS framework with no JS', bgColor: 'bg-orange-500' },
  { name: 'Skeleton', href:"http://getskeleton.com/", desc: 'Extremely light framework for basic UI elements', bgColor: 'bg-blue-500' },
  { name: 'Uniform CSS', href:"https://uniformcss.com/", desc: 'Fully configurable utility generator and CSS framework built entirely in Sass', bgColor: 'bg-cyan-500' },
  { name: 'Semantic UI', href:"https://semantic-ui.com/", desc:'Empowers designers and developers by creating a shared vocabulary for UI', bgColor: 'bg-sky-500' },
  { name: 'Fomantic UI', href:"https://fomantic-ui.com/", desc: 'A community fork of Semantic-UI', bgColor: 'bg-amber-500' },
  { name: 'Foundation', href:"https://get.foundation/", desc: 'Mobile first framework with clean markup', bgColor: 'bg-red-500' },
  { name: 'Pure CSS', href:"https://purecss.io/", desc: 'A set of small, responsive CSS modules', bgColor: 'bg-emerald-500' },
  { name: 'UIKit', href:"https://getuikit.com/", desc: 'Lightweight and modular front-end framework', bgColor: 'bg-pink-500' },
  { name: 'Susy', href:"https://www.oddbird.net/susy/" , desc:'Lightweight, grid-layout engine for Sass', bgColor: 'bg-purple-600' },
  { name: 'Milligram.io', href: "https://milligram.io/", desc: 'Minimalist CSS framework', bgColor: 'bg-yellow-500' },
  { name: 'Vanilla Framework', href:"https://vanillaframework.io/", desc: 'Simple, extensible CSS framework written in Sass', bgColor: 'bg-green-500' },
  { name: 'Spectre CSS', href: "https://picturepan2.github.io/spectre/", desc: 'Lightweight, modern CSS framework', bgColor: 'bg-orange-500' },
  { name: 'Picnic CSS', href:"https://picnicss.com/", desc: 'Lightweight and beautiful library', bgColor: 'bg-blue-500' },
  { name: 'Wing', href:"https://kbrsh.github.io/wing/", desc: 'A beautiful CSS framework designed for minimalists', bgColor: 'bg-cyan-500' },
  { name: 'Chota', href:"https://jenil.github.io/chota/", desc: 'A micro (~3kb) CSS framework', bgColor: 'bg-sky-500' },
  { name: 'Blueprint CSS', href:"https://blueprintcss.dev/", desc: 'A lightweight layout library for building great responsive mobile first UIs that work everywhere', bgColor: 'bg-amber-500' },
  { name: 'W3.CSS', href:"https://www.w3schools.com/w3css/", desc: 'A modern CSS framework with support for desktop, tablet, and mobile design by default. Designed to be independent of jQuery or any other JavaScript library', bgColor: 'bg-red-500' },
  { name: '98.css', href: "https://jdan.github.io/98.css/", desc: 'A design system for building faithful recreations of old UIs', bgColor: 'bg-emerald-500' },
  { name: 'NES CSS', href:"https://nostalgic-css.github.io/NES.css/", desc: 'NES-style CSS Framework', bgColor: 'bg-pink-500' },
  { name: 'Shoelace.css', href:"https://www.shoelace.style/", desc:'Lightweight, forward-thinking CSS library built with future CSS syntax.', bgColor: 'bg-purple-600' },
  { name: 'MVP.css', href:"https://andybrewer.github.io/mvp/", desc: 'A minimalist stylesheet for HTML elements. No class names, no frameworks, just semantic HTML and you\'re done', bgColor: 'bg-yellow-500' },
  { name: 'Blaze.css', href:"http://blazecss.com/", desc: 'Open source modular CSS toolkit providing great structure for building websites quickly', bgColor: 'bg-green-500' },
  { name: 'Turret CSS', href:"https://turretcss.com/", desc: 'Turret CSS is a styles framework for development of responsive websites.', bgColor: 'bg-orange-500' },
  { name: 'Cutestrap', href:"https://www.cutestrap.com/", desc: 'A strong, independent CSS Framework.', bgColor: 'bg-blue-500' },
  { name: 'XP.css', href: "https://botoxparty.github.io/XP.css/", desc: 'XP.css is an extension of 98.css. A CSS library for building interfaces that look like old UIs.', bgColor: 'bg-cyan-500' },
  { name: 'Framework7', href:"https://framework7.io/" , desc: 'A free and open source framework to develop mobile, desktop or web apps with native look and feel.', bgColor: 'bg-amber-500' },
  { name: 'Hint.css', href:"https://kushagra.dev/lab/hint/", desc: 'A pure CSS tooltip library for your lovely websites.', bgColor: 'bg-red-500' },
  { name: 'Imagehover.io', href:"http://imagehover.io/" , desc: 'Pure CSS Image Hover Effect Library', bgColor: 'bg-emerald-500' },
  { name: 'Mini.css', href:"https://minicss.org/", desc: 'A minimal, responsive, style-agnostic CSS framework', bgColor: 'bg-pink-500' },
  { name: 'Tachyons', href:"https://tachyons.io/", desc:'Create fast loading, highly readable, and 100% responsive interfaces with as little css as possible.', bgColor: 'bg-purple-600' },
  { name: 'Material Bootstrap', href: "https://fezvrasta.github.io/bootstrap-material-design/", desc: 'Material Design with Bootstrap', bgColor: 'bg-yellow-500' },
  { name: 'Ivory', href:"https://github.com/IVORY-UI/ivory", desc: 'A modern CSS framework for developing powerful web interfaces faster and easier', bgColor: 'bg-green-500' },
  { name: 'Halfmoon UI', href:"https://www.gethalfmoon.com/", desc: 'A responsive and lightweight framework, designed for quickly building beautiful dashboards and product pages.', bgColor: 'bg-orange-500' },
  { name: 'Metro 4', href:"https://metroui.org.ua/index.html", desc: 'Create your site quickly and effectively with Metro 4. impressive components library built on html, css, javascript.', bgColor: 'bg-blue-500' },
  { name: 'Css-doodle', href:"https://css-doodle.com/", desc: 'A web component for drawing patterns with CSS', bgColor: 'bg-cyan-500' },
  { name: 'Latex.css', href:"https://latex.now.sh/", desc: 'Make your website look like a LaTeX document', bgColor: 'bg-sky-500' },
  { name: 'Paper CSS', href:"https://github.com/cognitom/paper-css", desc: 'Front-end printing solution', bgColor: 'bg-amber-500' },
  { name: 'Windi CSS', href: "https://windicss.org/", desc: 'Next generation compiler for Tailwind CSS', bgColor: 'bg-red-500' },
  { name: 'Cirrus CSS', href:"https://cirrus-ui.netlify.app/" , desc: 'A component and utility centric SCSS framework designed for rapid prototyping.', bgColor: 'bg-emerald-500' },
  { name: 'Gutenberg', href:"https://github.com/BafS/Gutenberg", desc: 'Modern framework to print the web correctly.', bgColor: 'bg-pink-500' },
  { name: 'Lit', href:"https://github.com/ajusa/lit", desc:'World\'s smallest responsive fire css framework (395 bytes).', bgColor: 'bg-purple-600' },
  { name: 'Arwes', href: "https://github.com/arwes/arwes", desc: 'Arwes is a web framework to build user interfaces based on futuristic science fiction designs, animations, and sound effects.', bgColor: 'bg-yellow-500' },
  { name: 'Bojler', href:"https://bojler.slicejack.com/", desc:'An email framework for developing responsive and lightweight email templates that will render correctly across each of the most popular email clients.', bgColor: 'bg-pink-600' },
  { name: 'Tacit', href:"https://github.com/yegor256/tacit", desc:'Primitive CSS Framework for dummies, without classes.', bgColor: 'bg-purple-600' },
  { name: 'Terminal CSS', href:"https://terminalcss.xyz/", desc:'A modern and minimal CSS framework for terminal lovers.', bgColor: 'bg-yellow-500' },
  { name: 'Sakura', href:"https://oxal.org/projects/sakura/", desc: 'A minimal classless css framework / theme.', bgColor: 'bg-green-500' },
  { name: 'PSone', href:"https://github.com/micah5/PSone.css", desc: 'PS1 style CSS Framework, inspired by NES.css.', bgColor: 'bg-orange-500' },
  { name: 'Marx', href:"https://github.com/mblode/marx", desc: 'Marx is the classless CSS reset to be used in any projects (namely small ones).', bgColor: 'bg-blue-500' },
  { name: 'Tufte', href:"https://github.com/edwardtufte/tufte-css", desc: 'Style your webpage like Edward Tufte’s handouts.', bgColor: 'bg-cyan-500' },
  { name: 'Axentix', href:"https://useaxentix.com/" , desc:'Axentix is an open source Framework based on CSS Grid using HTML, CSS and JS.', bgColor: 'bg-sky-500' },
  { name: 'Raster Simple Grid System', href:"https://rsms.me/raster/", desc: 'Minimal and straight-forward CSS grid system utilizing descriptive HTML rather than semantic CSS.', bgColor: 'bg-amber-500' },
  { name: 'Flowrift', href:"https://flowrift.com/c/banner", desc: 'Flowrift is a library made of beautifully designed Tailwind CSS UI blocks.', bgColor: 'bg-red-500' },
  { name: 'Twind', href:"https://twind.dev/", desc: 'The smallest, fastest, most feature complete tailwind-in-js solution in existence', bgColor: 'bg-emerald-500' },
  { name: 'Pico.css', href:"https://picocss.com/", desc: 'Elegant styles for all natives HTML elements without .classes and dark mode automatically enabled.', bgColor: 'bg-pink-500' },
  { name: 'Clay.css', href:"https://github.com/codeAdrian/clay.css" , desc:'Extensible and configurable micro CSS util class and SASS mixin for adding claymorphism styles to your components.', bgColor: 'bg-purple-600' },
]

export default {
  computed: {

    filterProjects() {
      return this.projects.filter(result => {
        const myRegex = new RegExp(this.searchQuery, 'gi');
        let resultFacet = this.facet;
        if (resultFacet.length == 0) {
          return (result.name.match(myRegex) || result.name.match(myRegex))
        }
        return (result.name.match(myRegex) || result.name.match(myRegex)) && (resultFacet.includes(result.id));
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
