<template>
  <header>
    <div>
      <div>
        <img class="h-32 w-full object-cover lg:h-48" src="'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'," alt="header_res" />
      </div>
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    <router-link to="/uigraphics" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">UI Graphics</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">UI Graphics</h2>
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
    <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">Pinned Projects</h2>
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
import { ChevronDoubleRightIcon } from '@heroicons/vue/outline'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid'

const projects = [
  { name: 'UI Design Daily', href: 'https://uidesigndaily.com/', desc:'Awesome UI Components of all types', bgColor: 'bg-pink-600' },
  { name: '100 Daily UI', href:"https://100dailyui.webflow.io/", desc:'Free Figma library of products, elements, and screens', bgColor: 'bg-purple-600' },
  { name: 'Sketch App Sources', href: "https://www.sketchappsources.com/", desc: 'Sketch UIs, wireframes, icons and much more', bgColor: 'bg-yellow-500' },
  { name: 'Humaaans', href: "https://www.humaaans.com/", desc: 'Cool illustrations of people with the ability to mix and match', bgColor: 'bg-green-500' },
  { name: 'Paaatterns', href: "https://products.ls.graphics/paaatterns/", desc: 'Cool illustrations of people with the ability to mix and match', bgColor: 'bg-orange-500' },
  { name: 'Thepatternlibrary', href: "http://thepatternlibrary.com/", desc: 'Free beautiful background patterns', bgColor: 'bg-blue-500' },
  { name: '404 illustration', href: "https://error404.fun/", desc: 'Free illustrations for 404  pages', bgColor: 'bg-cyan-500' },
  { name: 'Drawkit.io', href: "https://www.drawkit.io/", desc: 'Illustrations for designers and startups', bgColor: 'bg-sky-500' },
  { name: 'Absurd.design', href: "https://absurd.design/", desc: 'Free surrealist illustrations for designers and developers', bgColor: 'bg-amber-500' },
  { name: 'Undraw.co', href: "https://undraw.co/", desc: 'Open-source illustrations for any idea you can imagine and create', bgColor: 'bg-red-500' },
  { name: 'Manypixels.co', href: "https://www.manypixels.co/gallery/", desc: 'Monochromatic, Isometric high-quality illustrations', bgColor: 'bg-emerald-500' },
  { name: 'Open Peeps', href: "https://www.openpeeps.com/", desc: 'Hand drawn illustration library', bgColor: 'bg-pink-500' },
  { name: 'UI Space', href:"https://uispace.net/", desc:'Thousands of great UI freebies', bgColor: 'bg-purple-600' },
  { name: 'Animations.co', href: "http://animaticons.co/", desc: 'Beautiful, customizable animated GIF icons', bgColor: 'bg-yellow-500' },
  { name: 'Uplabs', href: "https://www.uplabs.com/", desc: 'High-quality design resources (Free & Premium)', bgColor: 'bg-green-500' },
  { name: 'InvisionApp', href: "https://www.invisionapp.com/inside-design/design-resources/", desc: 'Library of free, high-quality UI kits, icon packs, and mockups', bgColor: 'bg-orange-500' },
  { name: 'Open Doodles', href: "https://www.opendoodles.com/", desc: 'A Free Set of Sketchy Illustrations', bgColor: 'bg-blue-500' },
  { name: 'Avataaars', href: "https://avataaars.com/", desc: 'Free sketch library of avatars illustrations by Pablo Stanley', bgColor: 'bg-cyan-500' },
  { name: 'Blush', href: "https://blush.design/", desc: 'Free customizable illustrations with Figma Plugin', bgColor: 'bg-sky-500' },
  { name: 'Hero Patterns', href: "http://www.heropatterns.com/", desc: 'A collection of repeatable SVG background patterns', bgColor: 'bg-amber-500' },
  { name: 'BEAUBUS Patterns', href: "https://patterns.beaubus.com/", desc: 'A set of 150+ free SVG patterns (backgrounds)', bgColor: 'bg-red-500' },
  { name: 'IsoFlat', href: "https://isoflat.com/", desc: 'A Free collection of Isometric SVG graphic resources', bgColor: 'bg-emerald-500' },
  { name: 'IRA Design', href: "https://iradesign.io/", desc: 'An open-source gradient illustrations collection by creative tim.', bgColor: 'bg-pink-500' },
  { name: 'Transparent Textures', href:"https://www.transparenttextures.com/", desc:'A collection of transparent textures background patterns.', bgColor: 'bg-purple-600' },
  { name: 'Icons8', href: "https://icons8.com/illustrations", desc: 'Free vector illustrations to class up your project', bgColor: 'bg-yellow-500' },
  { name: 'Patternico', href: "https://patternico.com", desc: 'Seamless Pattern Maker', bgColor: 'bg-green-500' },
  { name: 'Freellustrations', href: "https://www.freellustrations.com/", desc: 'Free Background Images for awesome landing Pages', bgColor: 'bg-orange-500' },
  { name: 'Pixeltrue Illustrations', href: "https://www.pixeltrue.com/illustrations", desc: 'Free Animated Illustrations', bgColor: 'bg-blue-500' },
  { name: 'Avataaars', href: "https://avataaars.com/", desc: 'Free sketch library of avatars illustrations by Pablo Stanley', bgColor: 'bg-cyan-500' },
  { name: 'Abstract User Avatar API', href: "https://www.abstractapi.com/user-avatar-api", desc: 'API to create simple yet flexible user avatars from user names or emails', bgColor: 'bg-amber-500' },
  { name: 'Sketchvalley', href: "https://sketchvalley.com/", desc: 'Download free PNG, SVG or AI file', bgColor: 'bg-red-500' },
  { name: 'PatternPad', href: "https://patternpad.com/", desc: 'Free and unlimited unique pattern designs', bgColor: 'bg-emerald-500' },
  { name: 'Dimensions', href: "https://www.dimensions.com/", desc: 'An ongoing reference database of dimensioned drawings documenting the standard measurements and sizes of the everyday objects and spaces', bgColor: 'bg-pink-500' },
  { name: 'Freebiesbug', href:"https://freebiesbug.com/", desc:'Hand-picked resources for web designers and developers, constantly updated', bgColor: 'bg-purple-600' },
  { name: 'Flexiple', href: "https://2.flexiple.com/scale/all-illustrations", desc: 'One new high-quality, open-source illustration each day', bgColor: 'bg-yellow-500' },
  { name: 'Cool Text', href: "https://cooltext.com/", desc: 'Cool Text is a FREE graphics generator for web pages and anywhere else you need an impressive logo without a lot of design work', bgColor: 'bg-green-500' },
  { name: 'Illustration kit', href: "https://illustrationkit.com/", desc: 'Premium open source illustrations added daily', bgColor: 'bg-orange-500' },
  { name: 'Doodad Pattern Generator', href: "https://doodad.dev/pattern-generator/", desc: 'Create unique, seamless, royalty-free patterns', bgColor: 'bg-blue-500' },
  { name: 'Pattern Monster', href: "https://pattern.monster/", desc: 'A simple online pattern generator to create repeatable SVG patterns', bgColor: 'bg-cyan-500' },
  { name: 'Exemplar', href: "https://themeselection.com/products/exemplar-free-avatar-library-for-figma-and-sketch/", desc: 'Free Avatar Library for Figma and Sketch', bgColor: 'bg-sky-500' },
  { name: 'UIBundle', href: "https://uibundle.com", desc: 'Thousands of Free Design Resources like UI Kits, Mockups, Illustrations, Icons, Fonts, 3D assets, Templates and more', bgColor: 'bg-amber-500' },
  { name: 'Openby design', href: "https://openby.design/", desc: 'Custom crafted free UI design resources, for personal and commercial projects. No attribution is required', bgColor: 'bg-red-500' },
  { name: 'Design Stripe', href: "https://designstripe.com/catalog", desc: 'Create beautiful illustrations, no design skills needed', bgColor: 'bg-emerald-500' },
  { name: 'HOLA SVG!', href: "https://holasvg.com/", desc: 'An SVG playground to share SVG stuff', bgColor: 'bg-pink-500' },
  { name: 'Symu.co', href:"https://symu.co/freebies/templates-4/", desc:'Free templates, UI kits, icon, PSD', bgColor: 'bg-purple-600' },
  { name: 'Mesh Gradient', href: "https://meshgradient.in/", desc: 'Generate & download beautiful mesh gradients', bgColor: 'bg-yellow-500' },
]

export default {
  components: {
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
