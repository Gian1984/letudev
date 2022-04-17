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
                    <router-link to="/reactuilibraries" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">React UI Libraries</router-link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">React UI Libraries</h2>
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
  { name: 'Material UI', href:"https://material-ui.com/", desc:'React components for faster and easier web development, based on Material Design', bgColor: 'bg-pink-600' },
  { name: 'Chakra UI', href:"https://chakra-ui.com/", desc:'Build accessible React apps &amp; websites with speed.', bgColor: 'bg-purple-600' },
  { name: 'React Bootstrap', href:"https://react-bootstrap.github.io/", desc: 'Bootstrap rebuilt for React. Include Bootstrap components right in your JavaScript', bgColor: 'bg-yellow-500' },
  { name: 'Semi Design', href:"https://semi.design/en-US", desc: 'A modern, comprehensive, flexible design system that gives you all modular blocks you need to build sensible web apps & SaaS products.', bgColor: 'bg-green-500' },
  { name: 'Mantine', href:"https://mantine.dev/", desc: 'React components and hooks library with native dark theme support focused on usability, accessibility and developer experience.', bgColor: 'bg-orange-500' },
  { name: 'NextUI', href:"https://nextui.org/", desc: 'Beautiful, fast and modern React UI library that allows you to create beatiful websites regardless of your design experience.', bgColor: 'bg-blue-500' },
  { name: 'Arco Design', href:"https://arco.design/en-US", desc: 'A comprehensive React UI components library based on the Arco Design system.', bgColor: 'bg-cyan-500' },
  { name: 'Ui-playbook', href:"https://uiplaybook.dev/" , desc: 'The documented collection of UI components', bgColor: 'bg-sky-500' },
  { name: 'ReactStrap', href:"https://reactstrap.github.io/", desc: 'Another Bootstrap UI library for React', bgColor: 'bg-amber-500' },
  { name: 'React Admin', href:"https://marmelab.com/react-admin/", desc: 'A frontend Framework for building admin applications. Supports API\'s out of the box', bgColor: 'bg-red-500' },
  { name: 'BlueprintJS', href:"https://blueprintjs.com/", desc: 'React-based UI toolkit for the web', bgColor: 'bg-emerald-500' },
  { name: 'React Semantic UI', href:"https://react.semantic-ui.com/", desc: 'UI components based off of the Semantic UI framework', bgColor: 'bg-pink-500' },
  { name: 'Shards React', href:"https://designrevision.com/downloads/shards-react/", desc:'React UI kit featuring a modern design system with dozens of custom components', bgColor: 'bg-purple-600' },
  { name: 'React Virtualized', href:"https://bvaughn.github.io/react-virtualized" , desc: 'UI set for data. Includes tables, lists, sorting, etc.', bgColor: 'bg-yellow-500' },
  { name: 'React Toolbox', href:"http://react-toolbox.io/#/", desc: 'Material design UI library for React', bgColor: 'bg-green-500' },
  { name: 'Elastic UI', href:"https://elastic.github.io/eui/#/", desc: 'Distributes UI React components and static assets for use in building web layouts', bgColor: 'bg-orange-500' },
  { name: 'React Desktop', href:"http://reactdesktop.js.org/", desc: 'Desktop styled components in React. Includes MacOS and Windows based components', bgColor: 'bg-blue-500' },
  { name: 'Onsen React', href:"https://onsen.io/react/" , desc: 'Distributes Components for hybrid mobile apps with React and Onsen UI', bgColor: 'bg-cyan-500' },
  { name: 'Evergreen', href:"https://evergreen.segment.com/", desc: 'Design system for React', bgColor: 'bg-sky-500' },
  { name: 'Rebass', href:"https://rebassjs.org/", desc: 'React primitive UI components built with styled system', bgColor: 'bg-amber-500' },
  { name: 'Grommet', href:"https://v2.grommet.io/", desc: 'Mobile first UI component library', bgColor: 'bg-red-500' },
  { name: 'Landing Page Template', href:"https://github.com/cruip/open-react-template/", desc: 'Open source landing page template for react', bgColor: 'bg-emerald-500' },
  { name: 'Elemental UI', href:"http://elemental-ui.com/", desc: 'A UI Toolkit for React.js Websites and Apps', bgColor: 'bg-pink-500' },
  { name: 'Ant Design', href:"https://ant.design/" , desc:'Open source design React UI library.', bgColor: 'bg-purple-600' },
  { name: 'Bumbag', href:"https://bumbag.style/", desc: 'Bumbag is a friendly React UI Kit suitable for MVPs or large-scale applications.', bgColor: 'bg-yellow-500' },
  { name: 'Primereact', href:"https://www.primefaces.org/primereact/", desc: 'The ultimate collection of design-agnostic, flexible and accessible React UI Components', bgColor: 'bg-green-500' },
  { name: 'Primer Components', href:"https://primer.style/components/", desc: 'Primer Components are React components which implement GitHub Primer Design System', bgColor: 'bg-orange-500' },
  { name: 'Orbit', href:"https://orbit.kiwi/", desc: 'Design system and React UI components for travel projects.', bgColor: 'bg-blue-500' },
  { name: 'Base Web', href:"https://baseweb.design/", desc: 'Base Web provides a robust suite of components out of the box', bgColor: 'bg-cyan-500' },
  { name: 'Backpack UI', href:"http://lonelyplanet.github.io/backpack-ui/?path=/story/styles--design-tokens", desc: 'Backpack is the Lonely Planet toolset that we use to build front end apps.', bgColor: 'bg-amber-500' },
  { name: 'Reaviz', href:"https://reaviz.io", desc: 'Data visualization library for React based on D3', bgColor: 'bg-red-500' },
  { name: 'React Suite', href:"https://rsuitejs.com/en/", desc: 'A suite of React components, sensible UI design, and a friendly development experience.', bgColor: 'bg-emerald-500' },
  { name: 'React Spring', href: "https://www.react-spring.io/", desc:'Spring-physics based animation library for React applications.', bgColor: 'bg-pink-500' },
  { name: 'Recharts', href:"http://recharts.org/en-US/", desc:'A composable charting library built on React components.', bgColor: 'bg-purple-600' },
  { name: 'Vercel UI', href:"https://github.com/geist-org/react", desc:'Modern and minimalist React UI library', bgColor: 'bg-yellow-500' },
  { name: 'Framer Motion', href:"https://www.framer.com/motion/", desc: 'A React library to power production-ready animations.', bgColor: 'bg-green-500' },
  { name: 'React Spectrum', href:"https://react-spectrum.adobe.com/react-spectrum/index.html", desc: 'A React implementation of Spectrum, Adobe’s design system.', bgColor: 'bg-orange-500' },
  { name: 'React tsParticles', href:"https://github.com/matteobruni/tsparticles/tree/main/components/react" , desc: 'A lightweight React component for creating particles', bgColor: 'bg-blue-500' },
  { name: 'Particles-bg', href:"https://github.com/lindelof/particles-bg" , desc: 'A React particles animation background component', bgColor: 'bg-cyan-500' },
  { name: 'Treact', href:"https://treact.owaiskhan.me", desc: 'Gallery of free and modern React templates and UI components developed using TailwindCSS as the front-end framework', bgColor: 'bg-sky-500' },
  { name: 'OAH-Admin', href:"https://gatsby-admin.paljs.com/extra-components/progress/", desc: 'A free React admin dashboard template based on Gatsby with oah-ui components and elements package.', bgColor: 'bg-amber-500' },
  { name: 'Carolina Admin Dashboard', href:"https://demo.uifort.com/carolina-react-admin-dashboard-material-ui-free-demo/LandingPage", desc: 'Free React admin template is powered by Material-UI components framework and features a clean and fresh design following Google\'s Material Design specifications.', bgColor: 'bg-red-500' },
  { name: 'Tabler', href:"https://github.com/tabler/tabler-react", desc: 'Tabler is a free React admin dashboard template ideal for any kind of back-end web application.', bgColor: 'bg-emerald-500' },
  { name: 'Sha-el-design', href:"https://github.com/sha-el/sha-el-design", desc: 'React components for easier customization and smooth development flow.', bgColor: 'bg-pink-500' },
  { name: 'React-WeUI', href:"https://weui.github.io/react-weui/docs/#/react-weui/docs/page/0/articles/0", desc:'React-WeUI made from our love of React and WeChat\'s WeUI Design.', bgColor: 'bg-purple-600' },
  { name: 'Material UI', href:"https://material-ui.com/", desc:'React components for faster and easier web development, based on Material Design', bgColor: 'bg-pink-600' },
  { name: 'Supabase UI', href:"https://ui.supabase.io/", desc:'An open-source UI component library inspired by Tailwind and AntDesign.', bgColor: 'bg-purple-600' },
  { name: 'Ring UI', href:"https://github.com/JetBrains/ring-ui", desc: 'A collection of JetBrains Web UI components.', bgColor: 'bg-yellow-500' },
  { name: 'React95', href:"https://react95.io/", desc: 'Refreshed Windows 95 style UI components for your React app.', bgColor: 'bg-green-500' },
  { name: 'Reakit', href:"https://reakit.io/" , desc: 'Reakit is a lower level component library for building accessible high level UI libraries, design systems and applications with React.', bgColor: 'bg-orange-500' },
  { name: 'Zent', href:"https://github.com/youzan/zent", desc: 'A collection of essential UI components written with React.', bgColor: 'bg-blue-500' },
  { name: 'Gestalt', href:"https://github.com/pinterest/gestalt", desc: 'A set of React UI components that supports Pinterest’s design language.', bgColor: 'bg-cyan-500' },
  { name: 'Xstyled', href:"https://xstyled.dev/", desc: 'A CSS-in-JS framework built for React with props based utilities like display, fontSize or rotate.', bgColor: 'bg-sky-500' },
  { name: '@use-gesture', href:"https://github.com/pmndrs/use-gesture", desc: 'Bread n butter utility for component-tied mouse/touch gestures in React.', bgColor: 'bg-amber-500' },
  { name: 'React Rainbow', href:"https://react-rainbow.io/", desc: 'React Rainbow is a collection of components that will reliably help you build your application in a snap.', bgColor: 'bg-red-500' },
  { name: 'React Use Smooth Scroll', href:"https://github.com/saidMounaim/React-Use-Smooth-Scroll", desc: 'React Provider Component to add a smooth scroll effect', bgColor: 'bg-emerald-500' },
  { name: 'Choc UI', href:"https://choc-ui.com/", desc: 'Choc UI is a set of accessible and reusable components that are commonly used in web applications.', bgColor: 'bg-pink-500' },
  { name: 'Elementz', href:"https://elementz.style/", desc:'A React Component library for buliding modern applications easily &amp; quickly.', bgColor: 'bg-purple-600' },
  { name: 'Radix UI', href:"https://www.radix-ui.com/" , desc: 'Unstyled, accessible components for building high‑quality design systems and web apps in React', bgColor: 'bg-yellow-500' },
  { name: 'Materio MUI React NextJS Admin Template', href:"https://github.com/themeselection/materio-mui-react-nextjs-admin-template-free", desc: 'Most Powerful & Comprehensive Open-source MUI React NextJS Admin Dashboard Template built for developers.', bgColor: 'bg-green-500' },
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
