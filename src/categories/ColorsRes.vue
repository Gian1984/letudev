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
                    <router-link to="/colors" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Colors</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Colors</h2>
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
  { name: 'Color Brewer 2', href: "https://colorbrewer2.org/", desc:'The original color palette generator, also supporting color blindness. Probably the scientifically best option. Also probably not the prettiest.', bgColor: 'bg-pink-600' },
  { name: 'Huetone', href:"https://github.com/ardov/huetone", desc:'A tool to create accessible color systems.', bgColor: 'bg-purple-600' },
  { name: 'Colormind.io', href: "http://colormind.io", desc: 'Color palette generator', bgColor: 'bg-yellow-500' },
  { name: 'ColorCurves.app', href: "https://colorcurves.app" , desc: 'Color palette generator that uses curves to generate color palettes', bgColor: 'bg-green-500' },
  { name: 'ColorGradient', href: 'https://colorgradient.dev/', desc: 'A free tool to create simple and complex CSS Gradients visually', bgColor: 'bg-orange-500' },
  { name: 'Coolors', href: 'https://coolors.co', desc: 'Create the perfect palette or get inspired by thousands of beautiful color schemes', bgColor: 'bg-blue-500' },
  { name: 'HTML Color Codes', href: 'https://htmlcolorcodes.com/', desc: 'HTML color codes, Hex color codes, RGB and HSL values with our color picker, color chart and HTML color names', bgColor: 'bg-cyan-500' },
  { name: 'Colors & Fonts', href: "https://www.colorsandfonts.com/", desc: 'A curated library of colors, fonts and resources', bgColor: 'bg-sky-500' },
  { name: 'Palette List', href: "https://www.palettelist.com/", desc: 'Pick 2 colors you like and the tool generates thousands of palettes for you.', bgColor: 'bg-amber-500' },
  { name: 'Google Material Color Tool', href: "https://material.io/resources/color/", desc: 'Official Google Material Color Palette Tool', bgColor: 'bg-red-500' },
  { name: 'Material Palette', href: "https://www.materialpalette.com/", desc: 'Free to pick palettes, icons and colors for Material Design', bgColor: 'bg-emerald-500' },
  { name: 'ColorSpace', href: "https://mycolor.space/", desc: 'Generate nice color palettes from one color', bgColor: 'bg-pink-500' },
  { name: 'FlatUIColors', href:"https://flatuicolors.com", desc:'Beautiful set of color palettes in various flavors', bgColor: 'bg-purple-600' },
  { name: 'Adobe Color', href: "https://color.adobe.com/create", desc: 'Create color palettes, extract gradients from images, etc.', bgColor: 'bg-yellow-500' },
  { name: 'Colorsinspo', href: "https://colorsinspo.com/", desc: 'All-in-one resource for finding everything about colors', bgColor: 'bg-green-500' },
  { name: 'ColorsWall', href: "https://colorswall.com/", desc: 'Place to store your color palettes and generate palette in one click', bgColor: 'bg-orange-500' },
  { name: 'Happyhues', href: "https://www.happyhues.co/", desc: 'Happy Hues is a color palette inspiration site that acts as a real-world example as to how the colors could be used in your design projects by Mackenzie Child', bgColor: 'bg-blue-500' },
  { name: 'Adobe Trends', href: "https://color.adobe.com/trends", desc: 'Discover current color trends in different industries from the creative communities on Behance and Adobe Stock', bgColor: 'bg-cyan-500' },
  { name: 'Color Hunt', href: "https://colorhunt.co/", desc: 'A free and open platform for color inspiration with thousands of trendy hand-picked color palettes', bgColor: 'bg-sky-500' },
  { name: 'Gradient Hunt', href: "https://gradienthunt.com/", desc: 'A free and open platform for gradient inspiration with thousands of trendy hand-picked color gradients', bgColor: 'bg-amber-500' },
  { name: 'Web Gradients', href: "https://webgradients.com/", desc: 'A free website to find good CSS gradients', bgColor: 'bg-red-500' },
  { name: 'ColorBox', href: "https://www.colorbox.io", desc: 'A free website to produce color set', bgColor: 'bg-emerald-500' },
  { name: 'CSS gradient', href: "https://cssgradient.io/", desc: ' free website to make custom gradient and some examples of gradient', bgColor: 'bg-pink-500' },
  { name: 'Gradienta', href:"https://gradienta.io/", desc:'A pure css and jpg gradients', bgColor: 'bg-purple-600' },
  { name: 'UI Gradients', href: "https://uigradients.com/", desc: 'UI gradients color generator', bgColor: 'bg-yellow-500' },
  { name: 'Palette Generator', href: "https://palettegenerator.colorion.co/", desc: 'Generate new color palette with every spacebar press', bgColor: 'bg-green-500' },
  { name: 'Material Palettes', href: "https://material.colorion.co/", desc: '1000+ Material Design palettes', bgColor: 'bg-orange-500' },
  { name: 'Grabient', href: "https://www.grabient.com/", desc: 'Gradient Selector', bgColor: 'bg-blue-500' },
  { name: 'ShadeSwash', href: "https://shadeswash.netlify.app/", desc: 'Quickly generate shades of any color', bgColor: 'bg-cyan-500' },
  { name: 'BrandColors', href: "http://brandcolors.net/", desc: 'The biggest collection of official brand color codes', bgColor: 'bg-amber-500' },
  { name: 'Brand Palettes', href: "https://brandpalettes.com/", desc: 'Logo Color Codes and Palettes', bgColor: 'bg-red-500' },
  { name: 'Material Design Palette Generator', href: "http://mcg.mbitson.com" , desc: 'Generate theme and color palette Material Design-like', bgColor: 'bg-emerald-500' },
  { name: 'Colorate', href: "https://colorate.azurewebsites.net/", desc: 'Color scheme tool for designers and developers. This will help you draw inspiration and serve as a resource for your color work.', bgColor: 'bg-pink-500' },
  { name: '0to255', href:"https://www.0to255.com/", desc:'A color tool that makes it easy to lighten and darken colors. It’s perfect for hover states, borders, gradients, and more.', bgColor: 'bg-purple-600' },
  { name: 'Color Blender', href: "https://meyerweb.com/eric/tools/color-blend", desc: 'A tool that shows the midpoint colors between two colors', bgColor: 'bg-yellow-500' },
  { name: 'Gradient Buttons', href: "https://gradientbuttons.colorion.co/" , desc: 'Ready to use copy/paste gradient buttons', bgColor: 'bg-green-500' },
  { name: 'Khroma', href: "http://khroma.co/", desc: 'Khroma uses AI to learn which colors you like and creates limitless palettes for you to discover, search, and save.', bgColor: 'bg-orange-500' },
  { name: 'Whocanuse', href: "https://whocanuse.com", desc: 'A tool that brings attention and understanding to how color contrast can affect different people with visual impairments.', bgColor: 'bg-blue-500' },
  { name: 'Colorable', href: "https://colorable.jxnblk.com/", desc: 'Color combination contrast tester', bgColor: 'bg-cyan-500' },
  { name: 'Color Hex Picker', href: 'https://colorhexpicker.com', desc: 'Tool to get hex code along with name of the color.', bgColor: 'bg-sky-500' },
  { name: 'Saruwakakun', href: "https://saruwakakun.com/en/color-ideas", desc: 'The stunning color scheme for website &amp; App Designs with previews', bgColor: 'bg-amber-500' },
  { name: 'Paletton', href: "https://paletton.com/", desc: 'Paletton.com is a designer color tool designed for creating color combinations that work together well', bgColor: 'bg-red-500' },
  { name: 'Colorzilla', href: "https://www.colorzilla.com/" , desc: 'A powerful online Photoshop-like CSS gradient editor', bgColor: 'bg-emerald-500' },
  { name: 'CSS Gradient Editor', href: "https://www.cssgradienteditor.com", desc: 'You may only need this tool for creating CSS gradient backgrounds and patterns.', bgColor: 'bg-pink-500' },
  { name: 'Image Color Picker', href:"https://image-color.com/", desc:'Image color picker and palette generator', bgColor: 'bg-purple-600' },
  { name: 'CombineCOLORS', href: "https://combinecolors.com/", desc: 'Color mixing tool', bgColor: 'bg-yellow-500' },
  { name: 'Color Lovers', href: "https://www.colourlovers.com/palettes", desc:'It will show the color schemes which are popular in the outside world.', bgColor: 'bg-pink-600' },
  { name: 'HTML CSS Color', href:"https://www.htmlcsscolor.com/", desc:'Free online Color (USA) or Colour (British) tools: information, gradient generator, color wheels etc.', bgColor: 'bg-purple-600' },
  { name: 'HEX Color Codes', href: "https://hexcolorcodes.org/", desc: 'It gets HTML color codes, Hex color codes, RGB and HSL values with our color picker, color chart and HTML color names.', bgColor: 'bg-yellow-500' },
  { name: 'CoolHue 2.0', href: "https://webkul.github.io/coolhue/" , desc: 'A free tool that shows different gradient examples in CSS and PNG format', bgColor: 'bg-green-500' },
  { name: 'Colors.lol', href: "https://colors.lol/", desc: 'Interesting color palettes generated by a Twitter bot, there are hex codes and descriptive names for each color.', bgColor: 'bg-orange-500' },
  { name: 'Colors Dopely', href: "https://colors.dopely.top/", desc: 'Super-fast and simple color palette generator, palettes can be saved and shared in seconds.', bgColor: 'bg-blue-500' },
  { name: 'UIColor Picker', href: "https://uicolorpicker.com/", desc: 'A collection of UI Colors with hex codes available to be copied in just one click.', bgColor: 'bg-cyan-500' },
  { name: 'Color Hex', href: 'https://www.color-hex.com', desc: 'Color-hex gives information about colors including color models (RGB,HSL,HSV and CMYK) and generates a simple css code for the selected color.', bgColor: 'bg-sky-500' },
  { name: 'FarbVelo', href: "https://farbvelo.elastiq.ch/", desc: 'A random color palette generator', bgColor: 'bg-amber-500' },
  { name: 'Veranda Color', href: "https://verandacolor.com" , desc: 'Browse color palettes made by other designers, generate and submit your own', bgColor: 'bg-red-500' },
  { name: 'Duo', href: "https://duo.alexpate.uk/", desc: 'Duo is a collection of colour combinations that I’ve curated from personal projects or that I’ve come across on the web.', bgColor: 'bg-emerald-500' },
  { name: 'Lospec Palette List', href: "https://lospec.com/palette-list" , desc: 'The Lospec Palette List is a database of palettes for pixel art.', bgColor: 'bg-pink-500' },
  { name: 'Eggradients', href:"https://www.eggradients.com/", desc:'Gradient Background Colors with eggs.', bgColor: 'bg-purple-600' },
  { name: 'Gradientos', href: "https://www.gradientos.app/", desc: 'Find and test gradients easily.', bgColor: 'bg-yellow-500' },
  { name: 'Encycolorpedia', href: "https://encycolorpedia.com/", desc: 'Website for referencing web colors. Color knowledge, Web colors, Hex color codes.', bgColor: 'bg-green-500' },
  { name: 'Croma', href: "https://croma.app/", desc: 'A website for pick colors quickly from image or manually. It\'s color picker is easier to use.', bgColor: 'bg-orange-500' },
  { name: 'Color Designer', href: "https://colordesigner.io/gradient-generator", desc: 'A gradient generetor from one color.', bgColor: 'bg-blue-500' },
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
