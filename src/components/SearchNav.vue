<template>
  <Combobox as="div" class="max-h-96 mx-auto fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:my-20  max-w-2xl transform divide-y divide-gray-500 divide-opacity-10 overflow-hidden bg-white bg-opacity-80 shadow-2xl ring-1 ring-black ring-opacity-5 backdrop-blur backdrop-filter transition-all" @update:modelValue="onSelect">
    <div class="relative">
      <SearchIcon class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-900 text-opacity-40" aria-hidden="true" />
      <ComboboxInput class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Search..." @change="query = $event.target.value" />
    </div>

    <ComboboxOptions v-if="query === '' || filteredProjects.length > 0" static class="max-h-80 scroll-py-2 divide-y divide-gray-500 divide-opacity-10 overflow-y-auto">
      <li class="p-2">
        <h2 v-if="query === ''" class="mt-4 mb-2 px-3 text-xs font-semibold text-gray-900">Highlights</h2>
        <ul class="text-sm text-gray-700">
          <ComboboxOption v-for="project in query === '' ? recent : filteredProjects" :key="project.name" :value="project" as="template" v-slot="{ active }">
            <li :class="['flex cursor-default select-none items-center rounded-md px-3 py-2', active && 'bg-gray-900 bg-opacity-5 text-gray-900']">
              <FolderIcon :class="['h-6 w-6 flex-none text-gray-900 text-opacity-40', active && 'text-opacity-100']" aria-hidden="true" />
              <span class="ml-3 flex-auto truncate">{{ project.name }}</span>
              <span v-if="active" class="ml-3 flex-none text-gray-500">Jump to...</span>
            </li>
          </ComboboxOption>
        </ul>
      </li>
    </ComboboxOptions>

    <div v-if="query !== '' && filteredProjects.length === 0" class="py-14 px-6 text-center sm:px-14">
      <FolderIcon class="mx-auto h-6 w-6 text-gray-900 text-opacity-40" aria-hidden="true" />
      <p class="mt-4 text-sm text-gray-900">We couldn't find any projects with that term. Please try again.</p>
    </div>
  </Combobox>
</template>

<script>
import { computed, ref } from 'vue'
import { SearchIcon } from '@heroicons/vue/solid'
import { FolderIcon,  } from '@heroicons/vue/outline'
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,

} from '@headlessui/vue'

const projects = [
  {
    name: 'APIs / Animals',
    href: '/animalsapi'
  },
  {
    name: 'Resources / UI Graphics',
    href:'/uigraphics',

  },
  {
    name: 'Resources / Fonts',
    href:'/fonts',
  },
  {
    name: 'Resources / Colors',
    href:'/colors',
  },
  {
    name: 'Resources / Icons',
    href:'/icons',
  },
  {
    name: 'Resources / Logos',
    href:'/logos',
  },
  {
    name: 'Resources / Favicons',
    href:'/favicons',
  },
  {
    name: 'Resources / Icon Fonts',
    href:'/iconfonts',
  },
  {
    name: 'Resources / Stock Photos',
    href:'/stockphotos',
  },
  {
    name: 'Resources / Stock Videos',
    href:'/stockvideos',
  },
  {
    name: 'Resources / Stock Music & Sound Effects',
    href:'/soundeffects',
  },
  {
    name: 'Resources / Vectors & Clip Art',
    href:'/vectorsclip',
  },
  {
    name: 'Resources / Product & Image Mockups',
    href:'/imagemockups',
  },
  {
    name: 'Resources / HTML & CSS Templates',
    href:'/html&csstemplates',
  },
  {
    name: 'Resources / CSS Frameworks',
    href:'/cssframeworks',
  },
  {
    name: 'Resources / CSS Methodologies',
    href:'/cssmethodologies',
  },
  {
    name: 'Resources / CSS Animations',
    href:'/cssanimations',
  },
  {
    name: 'Resources / Javascript Animation Libraries',
    href:'/animationlibraries',
  },
  {
    name: 'Resources / Javascript Chart Libraries',
    href:'/chartlibraries',
  },
  {
    name: 'Resources / UI Components & Kits',
    href:'/uicomponents',
  },
  {
    name: 'Resources / React UI Libraries',
    href:'/reactuilibraries',
  },
  {
    name: 'Resources / Vue UI Libraries',
    href:'/vueuilibraries',
  },
  {
    name: 'Resources / Angular UI Libraries',
    href:'/angularuilibraries',
  },
  {
    name: 'Resources / Svelte UI Libraries',
    href:'/svelteuilibraries',
  },
  {
    name: 'Resources / React Native UI Libraries',
    href:'/reactnativeuilibraries',
  },
  {
    name: 'Resources / Design Systems & Style Guides',
    href:'/designsystems',
  },
  {
    name: 'Resources / Online Design Tools',
    href:'/onlinedesigntools',
  },
  {
    name: 'Resources / Downloadable Design Software',
    href:'/designsoftware',
  },
  {
    name: 'Resources / Design Inspiration',
    href:'/designinspiration',
  },
  {
    name: 'Resources / Image Compression',
    href:'/imagecompression',
  },
  {
    name: 'Resources / Chrome Extensions',
    href:'/chromeextensions',
  },
  {
    name: 'Resources / Public APIs',
    href:'/publicapis',
  },
  {
    name: 'Resources / Others',
    href:'/others',
  },
  {
    name: 'APIs / Animes',
    href:'/animessapi',
  },
  {
    name: 'APIs / Anti-malware',
    href:'/antimalwaresapi',
  },
  {
    name: 'APIs / Art & design',
    href:'/artdesignapi',
  },
  {
    name: 'APIs / Authentication & authorization',
    href:'/authapis',
  },
  {
    name: 'APIs / Blockchain',
    href:'/blockchainapi',
  },
  {
    name: 'APIs / Books',
    href:'/bookapi',
  },
  {
    name: 'APIs / Business',
    href:'/businessapi',
  },
  {
    name: 'APIs / Calendars',
    href:'/calendarapi',
  },
  {
    name: 'APIs / Cloud Storage & File Sharing',
    href:'/cloudapi',
  },
  {
    name: 'APIs / Continuous Integration',
    href:'/integrationapi',
  },
  {
    name: 'APIs / Cryptocurrency',
    href:'/cryptocurrencyapi',
  },
  {
    name: 'APIs / Currency Exchange',
    href:'/exchangeapi',
  },
  {
    name: 'APIs / Data Validation',
    href:'/validationapi',
  },
  {
    name: 'APIs / Development',
    href:'/developmentapi',
  },
]
const recent = [projects[0],projects[1],projects[4],projects[6],projects[10]]

export default {
  components: {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,

    FolderIcon,
    SearchIcon,

  },
  setup() {
    const open = ref(false)
    const query = ref('')
    const filteredProjects = computed(() =>
        query.value === ''
            ? []
            : projects.filter((project) => {
              return project.name.toLowerCase().includes(query.value.toLowerCase())
            })
    )

    return {
      open,
      query,
      recent,
      filteredProjects,
      onSelect(item) {
        window.location = item.href
      },
    }
  },
}
</script>
