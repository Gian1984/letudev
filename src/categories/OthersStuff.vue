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
                    <router-link to="/others" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Others</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Others</h2>
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
  { name: 'Vertopal', href:"https://www.vertopal.com/", desc:'Free online platform for converting computer files to a variety of file formats', bgColor: 'bg-pink-600' },
  { name: 'Everysize Kibalabs', href:"https://everysize.kibalabs.com/", desc:'Check your awesome responsive webpage looks great in every size', bgColor: 'bg-purple-600' },
  { name: 'Devhints', href:"https://devhints.io/", desc: 'This is a modest collection of cheatsheets on Internet', bgColor: 'bg-yellow-500' },
  { name: 'The Web Toolbox', href:"https://thewebtoolbox.cc/", desc: 'A collection of handy, free-to-use tools for web developers, programmers and designers.', bgColor: 'bg-green-500' },
  { name: 'WebDevTrick', href:"https://webdevtrick.com/" , desc: 'A famous blog for many amazing HTML, CSS, JQuery designs.', bgColor: 'bg-orange-500' },
  { name: 'Css-tricks', href:"https://css-tricks.com/", desc:'Free CSS tricks and some unique ideas for beginners and advanced', bgColor: 'bg-blue-500' },
  { name: 'Material Design Resources', href:"https://material.io/resources" , desc: 'Use Material tools, downloads, and interactive projects to simplify your workflow.', bgColor: 'bg-cyan-500' },
  { name: 'Nodesign', href:"https://nodesign.dev" , desc: 'A collection of tools for developers who have little to no artistic talent', bgColor: 'bg-sky-500' },
  { name: 'A11ygator', href:"https://a11ygator.chialab.io/" , desc: 'Web tool to scan websites against WCAG rules', bgColor: 'bg-amber-500' },
  { name: 'Commitizen', href:"http://commitizen.github.io/cz-cli/", desc: 'Command line tool to formatted commit messages according to the standards', bgColor: 'bg-red-500' },
  { name: 'CleanCss', href:"https://www.cleancss.com/", desc: 'Tool For Code Formatter, Minifier, File Converter', bgColor: 'bg-emerald-500' },
  { name: 'Tiny helpers', href:"https://tiny-helpers.dev/", desc: 'A collection of free single-purpose online tools for web developers', bgColor: 'bg-pink-500' },
  { name: 'CSS Ribbon Generator', href:"https://www.cssportal.com/css-ribbon-generator/", desc:'This generator will assist in creating a pure CSS corner ribbon.', bgColor: 'bg-purple-600' },
  { name: 'Can I Use', href:"https://caniuse.com/"  , desc: 'Check cross-browser compatibility of frontend technologies.', bgColor: 'bg-yellow-500' },
  { name: 'Kangax', href:"https://kangax.github.io/compat-table/es6/", desc: 'Check JavaScript versions (ES5, ES6, ES2016+ etc.) compatibility across different compilers, servers/runtimes and platforms (Desktop and Mobile).', bgColor: 'bg-green-500' },
  { name: 'Mydevice', href:"https://www.mydevice.io/", desc: 'Most commonly used device resolutions including phones and tablets', bgColor: 'bg-orange-500' },
  { name: 'Codepen', href:"https://codepen.io/", desc: 'Build, test and discover frontend code.', bgColor: 'bg-blue-500' },
  { name: 'Responsively', href:"https://responsively.app" , desc: 'A tool for designers and frontend developers to design and debug their in all platforms with ease', bgColor: 'bg-cyan-500' },
  { name: 'Html2pdf', href:"https://ekoopmans.github.io/html2pdf.js/", desc: 'Client-side HTML-to-PDF rendering using pure JS.', bgColor: 'bg-sky-500' },
  { name: 'CSS Reference', href:"https://cssreference.io/", desc: 'A collection of all css properties and definitions in detail', bgColor: 'bg-amber-500' },
  { name: 'Critical Path CSS Generator', href:"https://www.sitelocity.com/critical-path-css-generator", desc: 'Generate critical css for your web pages', bgColor: 'bg-red-500' },
  { name: 'SVG Gobbler', href:"https://github.com/rossmoody/svg-gobbler", desc: 'Browser extension to find SVGs on a webpage and download, copy to clipboard, or export as PNG.', bgColor: 'bg-emerald-500' },
  { name: 'Shortcode', href:"https://shortcode.dev" , desc: 'A collection of useful snippets and code examples for HTML, CSS, JavaScript, Node, Artisan, Blade and more.', bgColor: 'bg-pink-500' },
  { name: 'PlayCode', href:"https://playcode.io/" , desc:'Javascript playground.', bgColor: 'bg-purple-600' },
  { name: 'All The Tag', href:"https://allthetags.com/" , desc: 'All HTML tags briefly explained.', bgColor: 'bg-yellow-500' },
  { name: 'Vue Telemetry', href:"https://vuetelemetry.com/", desc: 'Reveal the Vue plugins and technology stack powering any website or explore a database of 5500+ websites.', bgColor: 'bg-green-500' },
  { name: 'Grid.js', href:"https://gridjs.io/", desc: 'Grid.js is a Free and open-source HTML table plugin written in TypeScript. It works with most JavaScript frameworks, including React, Angular, Vue and VanillaJs.', bgColor: 'bg-orange-500' },
  { name: 'Gerillass', href:"https://gerillass.com/", desc: 'Gerillass is a website development tool built on top of Sass with a set of Sass mixins and functions for frontend developers to generate scalable CSS outputs.', bgColor: 'bg-blue-500' },
  { name: 'Sketchize', href:"https://www.sketchize.com/", desc: 'Sketchize is built for UI/UX Designers to help them design lovely apps for mobile, tablet, and desktop devices.', bgColor: 'bg-cyan-500' },
  { name: '{CSS}Portal', href:"https://www.cssportal.com/", desc: 'CSSPortal is home to a large range of CSS generators, tools and resources.', bgColor: 'bg-amber-500' },
  { name: 'DevDocs', href:"https://devdocs.io/", desc: 'DevDocs combines multiple API documentations in a fast, organized, and searchable interface.', bgColor: 'bg-red-500' },
  { name: 'Papersizes', href:"https://papersizes.io/", desc: 'he best resource for International Paper Sizes, Dimensions &amp; Formats.', bgColor: 'bg-emerald-500' },
  { name: 'Flexboxfroggy', href: "http://flexboxfroggy.com/", desc:'Help Froggy and friends by writing CSS code!', bgColor: 'bg-pink-500' },
  { name: 'Designbetter Books', href:"https://www.designbetter.co/books", desc:'Essential reading on the practices that propel the best design teams forward.', bgColor: 'bg-purple-600' },
  { name: 'OverAPI', href:"https://overapi.com/", desc:'Collection Of All Cheat Sheets.', bgColor: 'bg-yellow-500' },
  { name: 'Pageclip', href:"https://pageclip.co/" , desc: 'A server for your Static HTML forms', bgColor: 'bg-green-500' },
  { name: 'Shields', href:"https://shields.io", desc: 'Create badges with your own customization.', bgColor: 'bg-orange-500' },
  { name: 'Williamsharkey', href:"http://williamsharkey.com/Shapes.html" , desc: 'Random SVG Graphic Generator', bgColor: 'bg-blue-500' },
  { name: 'Bootstrap CheatSheet', href:"https://bootstrap-cheatsheet.themeselection.com/" , desc: 'An interactive list of Bootstrap classes, variables, and mixins. The only Bootstrap CheatSheet you will ever need.', bgColor: 'bg-cyan-500' },
  { name: 'QR Code Generator', href:"https://markodenic.com/tools/qr-code-generator/", desc: 'Use QR Code Generator to easily create a QR code for your project.', bgColor: 'bg-sky-500' },
  { name: 'PapersDB', href:"https://papersdb.com/", desc: 'The Biggest Paper Database with Sizes, Dimensions and Formats in Metric and Imperial units.', bgColor: 'bg-amber-500' },
  { name: 'SmallDev', href:"https://SmallDev.tools/", desc: 'Free tool for developers to help with Beautify & Minify HTML/CSS/Javascript, and many other handy tools. With a delightful interface', bgColor: 'bg-red-500' },
  { name: 'Angry Tools', href:"https://angrytools.com/", desc: 'Free web tools for speed up your development.', bgColor: 'bg-emerald-500' },
  { name: 'Rapid API', href:"https://rapidapi.com/hub", desc: 'Discover and connect to thousands of APIs.', bgColor: 'bg-pink-500' },
  { name: 'Readme.so', href:"https://readme.so", desc:'The easisest way to create a README.', bgColor: 'bg-purple-600' },
  { name: 'Showcode', href:"https://showcode.app" , desc:'Beautiful code screenshot generator.', bgColor: 'bg-pink-600' },
  { name: 'Tldraw', href:"https://www.tldraw.com", desc:'A tiny little drawing app.', bgColor: 'bg-purple-600' },
  { name: 'Devices.css', href:"http://marvelapp.github.io/devices.css/", desc: 'Pure CSS phones and tablets by Marvel App.', bgColor: 'bg-yellow-500' },
  { name: 'Troopl', href:"https://troopl.com", desc: 'Build and publish a free portfolio in minutes.', bgColor: 'bg-green-500' },
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
