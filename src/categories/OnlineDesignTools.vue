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
                    <router-link to="/onlinedesigntools" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Online Design Tools</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Online Design Tools</h2>
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
  { name: 'Figma', href:"https://www.figma.com/graphic-design-tool/", desc:'Online graphic design tool (Free & paid options)', bgColor: 'bg-pink-600' },
  { name: 'Vectr', href:"https://vectr.com/", desc:'Free vector graphics software', bgColor: 'bg-purple-600' },
  { name: 'Taler', href:"https://www.taler.app/", desc: 'Create social media banner designs in minutes from hundreds of customizable templates', bgColor: 'bg-yellow-500' },
  { name: 'Canva', href:"https://www.canva.com/", desc: 'Create beautiful designs (Free & Paid)', bgColor: 'bg-green-500' },
  { name: 'Get Waves', href:"https://getwaves.io/", desc: 'A free SVG wave generator to make unique SVG waves for web design', bgColor: 'bg-orange-500' },
  { name: 'Clippy', href:"https://bennettfeely.com/clippy/", desc: 'Easy CSS clip-path maker', bgColor: 'bg-blue-500' },
  { name: 'Fancy Border Radius', href:"https://9elements.github.io/fancy-border-radius/full-control.html", desc: 'Eight values specifying border-radius in CSS ( border-radius generator )', bgColor: 'bg-cyan-500' },
  { name: 'Wireframe.cc', href:"https://wireframe.cc/" , desc: 'Wireframing tool (free & paid)', bgColor: 'bg-sky-500' },
  { name: 'Fotor', href:"https://www.fotor.com/", desc: 'Photo editor and design maker', bgColor: 'bg-amber-500' },
  { name: 'Pixlr', href:"https://www.pixlr.com/", desc: 'Online photo editor', bgColor: 'bg-red-500' },
  { name: 'Animoto Video Maker', href:"https://animoto.com/apps/online-video-maker", desc: 'Make videos online', bgColor: 'bg-emerald-500' },
  { name: 'RemoveBG', href:"https://www.remove.bg/", desc: 'Remove image backgrounds', bgColor: 'bg-pink-500' },
  { name: 'Photo Creator', href:"https://photos.icons8.com/creator", desc:'Create your own photos instead of searching for stock', bgColor: 'bg-purple-600' },
  { name: 'Visme', href:"https://www.visme.co/" , desc: 'Create presentations, infographics and more', bgColor: 'bg-yellow-500' },
  { name: 'Infogram', href:"https://infogram.com/", desc:'Create infograms', bgColor: 'bg-green-500' },
  { name: 'ChartGo', href:"https://www.chartgo.com/", desc: 'Create charts and graphs online', bgColor: 'bg-orange-500' },
  { name: 'Cartoon Photo', href:"https://cartoon.pho.to/", desc: 'Turn photos into cartoons', bgColor: 'bg-blue-500' },
  { name: 'Whimsical', href:"https://whimsical.com/" , desc: 'Wireframes, diagrams and more (4 free)', bgColor: 'bg-cyan-500' },
  { name: 'Whiteboard', href:"https://witeboard.com/", desc: 'Online drawing tool', bgColor: 'bg-sky-500' },
  { name: 'Octopus', href:"https://octopus.do/", desc: 'Sitemap builder', bgColor: 'bg-amber-500' },
  { name: 'Onlineboard', href:"https://onlineboard.eu", desc: 'Real-time shareable whiteboard for brainstorming', bgColor: 'bg-red-500' },
  { name: 'CTA Button Maker', href:"https://www.clickminded.com/button-generator/", desc: 'Create call to action buttons', bgColor: 'bg-emerald-500' },
  { name: 'Blobmaker', href:"https://www.blobmaker.app/", desc: 'Blobmaker is a free generative design tool, to help you quickly create random, unique, and organic-looking SVG shapes.', bgColor: 'bg-pink-500' },
  { name: 'Personas', href:"https://personas.draftbit.com/" , desc:'A playful avatar generator for the modern age', bgColor: 'bg-purple-600' },
  { name: 'Photopea', href:"https://www.photopea.com", desc: 'An Online Photoshop editor', bgColor: 'bg-yellow-500' },
  { name: 'Excalidraw', href:"https://excalidraw.com/", desc: 'Virtual whiteboard for sketching hand-drawn like diagrams', bgColor: 'bg-green-500' },
  { name: 'Diagrams', href:"https://www.diagrams.net/", desc: 'Diagram software and Flowchart make', bgColor: 'bg-orange-500' },
  { name: 'Mermaid', href:"https://github.com/mermaid-js/mermaid", desc:'Renders Markdown-inspired text definitions to create and modify diagrams (like flowchart, sequence diagram, gantt, or user journey) dynamically. (FOSS)', bgColor: 'bg-blue-500' },
  { name: 'MapInSeconds', href:"http://mapinseconds.com/", desc: 'Simple way to visualize your data with a map', bgColor: 'bg-cyan-500' },
  { name: 'Grid Malven', href:"http://grid.malven.co/", desc: 'A css grid cheatsheet to reference when creating a css grid', bgColor: 'bg-amber-500' },
  { name: 'Flex Malven', href:"http://flexbox.malven.co/", desc: 'A flexbox grid cheatsheet to reference when working with flexbox', bgColor: 'bg-red-500' },
  { name: 'Smart Upscaler', href:"https://icons8.com/upscaler", desc: 'Upscale images by 2-4x resolution', bgColor: 'bg-emerald-500' },
  { name: 'GetAvataaars', href: "https://getavataaars.com/", desc:'Fun and Colorful free avatars web generator tool by Fang-Pen Lin using Pablo Stanley sketch library', bgColor: 'bg-pink-500' },
  { name: 'Big Heads', href:"https://github.com/RobertBroersma/bigheads", desc:'Easily generate avatars for your projects with Big Heads by Robert Broersma.', bgColor: 'bg-purple-600' },
  { name: 'Webflow', href:"https://webflow.com/", desc:'Break the code barrier, Build better business websites, faster. Without coding.', bgColor: 'bg-yellow-500' },
  { name: 'Trace', href:"https://stickermule.com/trace", desc: 'Instantly remove the background from your photos', bgColor: 'bg-green-500' },
  { name: 'Neumorphism.io', href:"https://neumorphism.io/#55b9f3", desc: 'Generate Soft-UI CSS shadow code', bgColor: 'bg-orange-500' },
  { name: 'DB Designer', href:"https://app.dbdesigner.net/" , desc: 'Design your database for free online', bgColor: 'bg-blue-500' },
  { name: 'Ui Bakery', href:"https://uibakery.io/" , desc: 'Create full-fledged web apps visually', bgColor: 'bg-cyan-500' },
  { name: 'Faux', href:"http://knutsynstad.com/fauxcode/", desc: 'Turn real code into faux code', bgColor: 'bg-sky-500' },
  { name: 'Unscreen', href:"https://www.unscreen.com/", desc: 'Remove Video Background 100% Automatically and Free', bgColor: 'bg-amber-500' },
  { name: 'Kodeshot', href:"https://www.kodeshot.net/", desc: 'Convert your source code into nice pictures for your articles, tweets, messages, posts...', bgColor: 'bg-red-500' },
  { name: 'Wix', href:"https://www.wix.com/", desc: 'Create a Website You’re Proud Of', bgColor: 'bg-emerald-500' },
  { name: 'GTmetrix', href:"https://gtmetrix.com/", desc: 'Website Speed and Performance Optimization', bgColor: 'bg-pink-500' },
  { name: 'Framer', href:"https://www.framer.com/", desc:'Is prototyping tool for teams', bgColor: 'bg-purple-600' },
  { name: 'Draw.io', href:"https://www.draw.io/", desc:'Creating and Edit SVG Online', bgColor: 'bg-pink-600' },
  { name: 'CSS Arrow', href:"http://www.cssarrowplease.com/", desc:'Create and export CSS code for a custom box with an arrow extending out from the side. Great for tooltips, flyouts and the like.', bgColor: 'bg-purple-600' },
  { name: 'Lucidchart', href:"https://www.lucidchart.com/pages/", desc: 'Diagramming and visualization tools that allows creating databases, flowcharts, boards, floor-maps, and much more. 3 multi-page documents on the free tier', bgColor: 'bg-yellow-500' },
  { name: 'Carbon', href:"https://carbon.now.sh" , desc: 'Create and share beautiful images of your source code by typing or drop a file.', bgColor: 'bg-green-500' },
  { name: 'PixCleaner', href:"https://www.pixcleaner.com/", desc: 'Accurate and hassle free background removal tool', bgColor: 'bg-orange-500' },
  { name: 'Glass UI', href:"https://ui.glass/generator", desc: 'A modern CSS UI library based on the glassmorphism design principles that will help you quickly design and build beautiful websites and applications.', bgColor: 'bg-blue-500' },
  { name: 'Glassmorphism', href:"https://glassmorphism.com/", desc: 'An incredible online tool for generating quick glassmorphic UI in CSS code snippets.', bgColor: 'bg-cyan-500' },
  { name: 'TableConvert', href:"https://tableconvert.com/", desc: 'Table Convert Online is a web-based tool to converts Excel, URL, HTML, Markdown table and CSV to Markdown table, CSV/TSV, JSON, XML, YAML, insert SQL, HTML, Excel and LaTeX table.', bgColor: 'bg-sky-500' },
  { name: 'Doodle Ipsum', href:"https://doodleipsum.com/", desc: 'The lorem ipsum of illustrations. Just customize your doodles, grab the code, and use them on your web prototypes, landing pages, or no-code tools.', bgColor: 'bg-amber-500' },
  { name: 'Figen', href:"https://figen.cc/" , desc: 'Post Cover &amp; Background Generator Tool', bgColor: 'bg-red-500' },
  { name: 'Windframe', href:"https://www.devwares.com/windframe/" , desc: 'A tool to rapidly prototype and build stunning websites using Tailwind CSS (Free & Premium)', bgColor: 'bg-emerald-500' },
  { name: 'Slickr', href:"https://slickr.vercel.app/", desc: 'A tool for designing cover image for your blog.', bgColor: 'bg-pink-500' },
  { name: 'Shadow Palette Generator', href:"https://www.joshwcomeau.com/shadow-palette/", desc:'Create a set of lush, realistic CSS shadows', bgColor: 'bg-purple-600' },
  { name: 'Ray.so', href:"https://ray.so/" , desc: 'Online tool to create beautiful images of your code.', bgColor: 'bg-yellow-500' },
  { name: 'Codepng', href:"https://www.codepng.app/", desc: 'Convert your source code into awesome shareable images.', bgColor: 'bg-green-500' },
  { name: 'CSS Grid Generator', href:"https://grid.layoutit.com/", desc: 'A tool for creating CSS Grid Layouts', bgColor: 'bg-sky-500' },
  { name: 'JSONT', href:"https://www.jsont.run/", desc: 'Simple and powerful online JSON formatting tool', bgColor: 'bg-amber-500' },
  { name: 'Jitter', href:"https://jitter.video/" , desc: 'Online tool to create motion graphics/design', bgColor: 'bg-red-500' },
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
