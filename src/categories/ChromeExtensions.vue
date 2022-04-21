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
                    <router-link to="/chromeextensions" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Chrome Extensions</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Chrome Extensions</h2>
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
  { name: 'WhatFont', href:"https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm", desc:'The easiest way to identify fonts on web pages.', bgColor: 'bg-pink-600' },
  { name: 'WhatRuns', href:"https://chrome.google.com/webstore/detail/whatruns/cmkdbmfndkfgebldhnkbfhlneefdaaip?hl=en" , desc:'Discover what runs a website. Frameworks, Analytics Tools, Wordpress Plugins, Fonts - you name it.', bgColor: 'bg-purple-600' },
  { name: 'Web Developer', href:"https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm", desc: 'Adds a toolbar button with various web developer tools.', bgColor: 'bg-yellow-500' },
  { name: 'Awesome Screenshot & Screen Recorder', href:"https://chrome.google.com/webstore/detail/awesome-screenshot-screen/nlipoenfbbikpbjkfpfillcgkoblgpmj?hl=en" , desc: 'Full page screen capture and screen recorder - 2 in 1. Share screencast video instantly', bgColor: 'bg-green-500' },
  { name: 'News for Busy Developers', href:"https://chrome.google.com/webstore/detail/dailydev-news-for-busy-de/jlmpjdjjbgclbocgajdjefcidcncaied" , desc: 'Get programming news with zero effort. Simply open a new tab, and you’re all set. A must-have tool for busy developers!', bgColor: 'bg-orange-500' },
  { name: 'JSONView', href:"https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en", desc: 'Validate and view JSON documents.', bgColor: 'bg-blue-500' },
  { name: 'JSON Lite', href:"https://github.com/lauriro/json-lite", desc: 'Browser extension for viewing JSON files.', bgColor: 'bg-cyan-500' },
  { name: 'Window Resizer', href:"https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh?hl=en" , desc: 'Resize the browser window to emulate various screen resolutions.', bgColor: 'bg-sky-500' },
  { name: 'Responsive Viewer', href:"https://chrome.google.com/webstore/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb?hl=en", desc: 'Show multiple screens once, Responsive design tester', bgColor: 'bg-amber-500' },
  { name: 'BrowserStack', href:"https://chrome.google.com/webstore/detail/browserstack/nkihdmlheodkdfojglpcjjmioefjahjb?hl=en", desc: 'Instantly test your webpage on any desktop or mobile browser.', bgColor: 'bg-red-500' },
  { name: 'VisBug', href:"https://chrome.google.com/webstore/detail/visbug/cdockenadnadldjbbgcallicgledbeoc?hl=en" , desc:'Open source web design debug tool built with JavaScript', bgColor: 'bg-emerald-500' },
  { name: 'Kontrast - WCAG Contrast Checker', href:"https://chrome.google.com/webstore/detail/kontrast-wcag-contrast-ch/haphaaenepedkjngghandlmhfillnhjk?hl=en" , desc: 'Quickly check and adjust contrast in real-time in your browser to meet WCAG 2.1 requirements', bgColor: 'bg-pink-500' },
  { name: 'PerfectPixel', href:"https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi" , desc:'Adds a semi-transparent image overlay over the top of the developed HTML to easily perform pixel perfect comparison between them, useful for replicating UI designs.', bgColor: 'bg-purple-600' },
  { name: 'Pesticide', href:"https://chrome.google.com/webstore/detail/pesticide-for-chrome-with/neonnmencpneifkhlmhmfhfiklgjmloi" , desc: 'Inserts the Pesticide CSS into the current page, outlining each HTML element to better see placement on the page, helpful for building layouts', bgColor: 'bg-yellow-500' },
  { name: 'Site Palette', href:"https://chrome.google.com/webstore/detail/site-palette/pekhihjiehdafocefoimckjpbkegknoh", desc: 'A must-have tool for designers and frontend developers to grab colors for any website', bgColor: 'bg-green-500' },
  { name: 'ColorZilla', href:"https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp", desc: 'Advanced Eyedropper, Color Picker, Gradient Generator and other colorful goodies', bgColor: 'bg-orange-500' },
  { name: 'Lorem Ipsum Generator (Default Text)', href:"https://chrome.google.com/webstore/detail/lorem-ipsum-generator-def/mcdcbjjoakogbcopinefncmkcamnfkdb?hl=en%20", desc: 'Provides an elegant and quick way to create default text or generate Lorem Ipsum. Optimized for quick usage, but it can be customized.', bgColor: 'bg-blue-500' },
  { name: 'JavaScript and CSS Code Beautifier', href:"https://chrome.google.com/webstore/detail/javascript-and-css-code-b/iiglodndmmefofehaibmaignglbpdald?hl=en" , desc: 'Beautify CSS, JavaScript and JSON code when you open a .css/.js/.json file', bgColor: 'bg-cyan-500' },
  { name: 'Imageye - Image downloader', href:"https://chrome.google.com/webstore/detail/imageye-image-downloader/agionbommeaifngbhincahgmoflcikhm", desc: 'Find and download all images on a web page. With Imageye you can find, browse and download all the images present in a web page.', bgColor: 'bg-sky-500' },
  { name: 'GoFullPage - Full Page Screen Capture', href:"https://chrome.google.com/webstore/detail/gofullpage-full-page-scre/fdpohaocaechififmbbbbbknoalclacl", desc: 'Capture a screenshot of your current page in entirety and reliably—without requesting any extra permissions!', bgColor: 'bg-amber-500' },
  { name: 'Stylebot', href:"https://chrome.google.com/webstore/detail/stylebot/oiaejidbmkiecgbjeifoejpgmdaleoha", desc: 'Change the appearance of the web instantly.', bgColor: 'bg-red-500' },
  { name: 'ColorPick Eyedropper', href:"https://chrome.google.com/webstore/detail/colorpick-eyedropper/ohcpnigalekghcmgcdcenkpelffpdolg", desc: 'A zoomed eyedropper &amp; color chooser tool that allows you to select color values from webpages and more.', bgColor: 'bg-emerald-500' },
  { name: 'React Developer Tool', href:"https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi", desc: 'React debugging tools to the Chrome Developer Tools. It allows you to inspect the React component hierarchies in the Chrome Developer Tools.', bgColor: 'bg-pink-500' },
  { name: 'Wappalyzer', href:"https://chrome.google.com/webstore/detail/wappalyzer/gppongmhjkpfnbhagpmjfkannfbllamg"  , desc:'Wappalyzer is a technology profiler that shows you what websites are built with.', bgColor: 'bg-purple-600' },
  { name: 'Fake Filler', href:"https://chrome.google.com/webstore/detail/fake-filler/bnjjngeaknajbdcgpfkgnonkmififhfo", desc: 'Fake Filler a form filler that fills all inputs on a page with fake/dummy data.', bgColor: 'bg-yellow-500' },
  { name: 'Page Ruler Redux', href:"https://chrome.google.com/webstore/detail/page-ruler-redux/giejhjebcalaheckengmchjekofhhmal", desc: 'A Web Developer\\Designer ruler to get perfect pixel dimensions and positioning to measure elements on any web page.', bgColor: 'bg-green-500' },
  { name: 'Web Editor', href:"https://chrome.google.com/webstore/detail/web-editor/pdmlhckofhkhebmcplblcijijgjiakcm" , desc: 'The web editor is the tool that provides you with an enhanced way to inspect any website elements, alter their properties, insert contents, design, and visualize the way you want to see them.', bgColor: 'bg-orange-500' },
  { name: 'CSSViewer', href:"https://chrome.google.com/webstore/detail/cssviewer/ggfgijbpiheegefliciemofobhmofgce", desc: 'A simple CSS property viewer.', bgColor: 'bg-blue-500' },
  { name: 'Fonts Ninja', href:"https://chrome.google.com/webstore/detail/fonts-ninja/eljapbgkmlngdpckoiiibecpemleclhh", desc: 'Identify fonts from any website, bookmark, try, and buy them.', bgColor: 'bg-cyan-500' },
  { name: 'Lighthouse', href:"https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk" , desc: 'An open-source, automated tool for improving the performance, quality, and correctness of your web apps.', bgColor: 'bg-amber-500' },
  { name: 'Debug CSS', href:"https://chrome.google.com/webstore/detail/debug-css/igiofjnckcagmjgdoaakafngegecjnkj", desc: 'Adds outline to all elements on the page to show the culprit element which is changing desired layout. Helps in debugging CSS of the page', bgColor: 'bg-red-500' },
  { name: 'Angular Developer Tool', href:"https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh", desc: 'Angular DevTools allows you to understand the structure of your application and preview the state of the directive and the component instances.', bgColor: 'bg-emerald-500' },
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
