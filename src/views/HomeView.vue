<template>
  <header>
    <div>
      <div class="relative">
        <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
        <div class="mx-auto">
          <div class="relative sm:overflow-hidden">
            <div class="absolute inset-0">
              <img class="h-full w-full object-cover" src="../assets/img/mesh.webp" alt="People working on laptops" />
              <div class="absolute inset-0" />
            </div>
            <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span class="block text-white uppercase">Let U dev</span>
                <span class="block text-teal-600">List of useful resources made for all web developers </span>
              </h1>
              <p class="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-600 sm:max-w-3xl">List of useful resources made for all web developers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <main>
    <div class="bg-white">
      <div class="max-w-2xl mx-auto pt-12 px-4 sm:pt-24 sm:px-6 lg:max-w-7xl lg:px-8">



        <div class="bg-white">
          <div class="max-w-2xl mx-auto py-6 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:py-6 lg:max-w-7xl lg:grid-cols-2">
            <div>
              <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Start where you are, use what you have, and do what you can.</h2>
              <p class="mt-4 text-gray-500 text-sm sm:text-base ">
                One of the important skills you need to learn as a Self-taught developer is to be resourceful, my father taught me this skill when I was still very young, and I didn’t know it would take me far in life, and I want you to do the same.<br><br>
                <span class="font-bold text-orange-500">re-source-ful</span><br>
                <i>— having the ability to find clever ways to overcome difficulties.</i><br><br>
                Here are some important resources that every developer needs to know.
                I am not affiliated with any of it, I am just using them personally and would want to share it with you, especially to all Self-taught developer.<br>
                It is important for us developers to always be learning, to always be updated, and to continue to grow to become the best developer that we can be.<br>
                Junior developers nowadays are lucky to have a lot of resources available online, you just have to be patient enough to find them. When I started four years ago, I didn’t even know any self-taught developer at that time, I didn’t know how to do it.
                I didn’t even know if it was possible until I made myself one.<br>
                So be resourceful and take advantage to all of it, you don’t have to spend so much just to learn, to be honest, you just have to be smart and be resourceful.
              </p>
            </div>
            <div class="hidden sm:block ">
              <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                <img src="../assets/img/father.webp" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="bg-gray-100 rounded-lg" />
                <img src="../assets/img/goals.webp" alt="Top down view of walnut card tray with embedded magnets and card groove." class="bg-gray-100 rounded-lg" />
                <img src="../assets/img/developer.webp" alt="Side of walnut card tray with card groove and recessed card area." class="bg-gray-100 rounded-lg" />
                <img src="../assets/img/idea.webp" alt="Walnut card tray filled with cards and card angled in dedicated groove." class="bg-gray-100 rounded-lg" />
              </div>
            </div>
          </div>
        </div>




        <router-link to="/resources" class="sm:mt-16 hidden text-sm font-semibold text-orange-600 hover:text-orange-500 sm:block">Browse all resources<span aria-hidden="true"> &rarr;</span></router-link>
        <div class="mt-2 grid items-start grid-cols-1 gap-y-16 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          <div v-for="feature in features" :key="feature.name" class="flex flex-col-reverse">
            <router-link :to="feature.href">
              <div class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                <img :src="feature.imageSrc" :alt="feature.imageAlt" class="object-center object-cover" />
              </div>
              <div class="mt-2 flex">
                <router-link :to="feature.href" class="bg-teal-500 hover:bg-teal-700 text-white text-sm py-1 px-2 rounded-full flex">
                  discover
                  <ChevronRightIcon class=" h-5 w-5" aria-hidden="true" />
                </router-link>
              </div>
              <div class="mt-6">
                <h3 class="text-sm font-medium text-gray-900">{{ feature.name }}</h3>
                <p class="mt-2 text-sm text-gray-500">{{ feature.description }}</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white">
      <div class="max-w-2xl mx-auto pt-12 px-4 sm:px-6 sm:pt-24 lg:max-w-7xl lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Protect your device</h2>
          <p class="mt-4 text-gray-500">As a digital creative, your laptop or tablet is at the center of your work. Keep your device safe with a fabric sleeve that matches in quality and looks.</p>
        </div>

        <div class="mt-16 space-y-16">
          <div v-for="(feature, featureIdx) in featuress" :key="feature.name" class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center">
            <div :class="[featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9', 'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4']">
              <h3 class="text-lg font-medium text-gray-900">{{ feature.name }}</h3>
              <p class="mt-2 text-sm text-gray-500">{{ feature.description }}</p>
            </div>
            <div :class="[featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1', 'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8']">
              <div class="aspect-w-5 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">
                <img :src="feature.imageSrc" :alt="feature.imageAlt" class="object-center object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

</template>

<script>
import { ChevronRightIcon } from '@heroicons/vue/solid'


const featuress = [
  {
    name: 'Minimal and thoughtful',
    description:
        'Our laptop sleeve is compact and precisely fits 13" devices. The zipper allows you to access the interior with ease, and the front pouch provides a convenient place for your charger cable.',
    imageSrc: new URL('../assets/img/development.webp', import.meta.url).href,
    imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
  },
  {
    name: 'Refined details',
    description:
        'We design every detail with the best materials and finishes. This laptop sleeve features durable canvas with double-stitched construction, a felt interior, and a high quality zipper that hold up to daily use.',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg',
    imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
  },
]

const features = [
  {
    name: 'Public APIs',
    description: 'Looking for one that fits your needs can be incredibly time-consuming. Here A collective list of free APIs for use in software and web development.',
    imageSrc: new URL('../assets/img/development.webp', import.meta.url).href,
    imageAlt: 'Green cardstock box containing white, beige, and brown cards.',
    href:'',
  },
  {
    name: 'UI Graphics',
    description: 'Websites and resources with modern UI components in different formats such as PSD, Sketch, Figma, etc. They are great for ideas for web components/UI.',
    imageSrc: new URL('../assets/img/designing.webp', import.meta.url).href,
    imageAlt: 'Green cardstock box open with 50 cards inside.',
    href:'/uigraphics',
  },
  {
    name: 'CSS/UI frameworks',
    description: 'CSS/UI frameworks to help build great looking websites and applications such as Tailwind CSS, Materialize, Bulma and others.',
    imageSrc: new URL('../assets/img/loading.webp', import.meta.url).href,
    imageAlt: 'CSS/UI frameworks to help build great looking websites and applications',
    href:'/cssframeworks',
  },
  {
    name: 'Javascript Chart Libraries',
    description: 'Libraries that help developers visualize data into charts such as ChartJS, FrappeJS and others.',
    imageSrc: new URL('../assets/img/improved.webp', import.meta.url).href,
    imageAlt: 'Libraries that help developers visualize data into charts such as ChartJS, FrappeJS and others.',
    href:'/chartlibraries',
  },
]



export default {

  components:{
    ChevronRightIcon
  },

  setup() {
    return {
      features,
      featuress,
    }
  },
}
</script>
