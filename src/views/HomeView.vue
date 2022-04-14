<template>
  <header>
    <div>
      <div class="relative">
        <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"/>
        <div class="mx-auto">
          <div class="relative sm:overflow-hidden" style="min-height: 40vh">
            <div class="absolute inset-0">
              <img class="h-full w-full object-cover" src="../assets/img/mesh.webp" alt="letudev_header"/>
              <div class="absolute inset-0" />
            </div>
            <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span class="block text-white uppercase font-Pacifico">Let  U  dev</span>
                <span class="block text-teal-500 text-2xl">List of useful resources made for all web developers </span>
              </h1>
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
              <h2 class="text-xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Start where you are, use what you have, and do what you can.</h2>
              <p class="mt-4 text-gray-500 text-sm sm:text-base">
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
              <router-link to="/resources" class="mt-5 block lg:hidden sm:mt-16 text-sm font-semibold text-orange-600 hover:text-orange-500 sm:block">Browse all resources<span aria-hidden="true"> &rarr;</span></router-link>
              <h2 class="mt-10 block lg:hidden text-xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Here some highlights</h2>
            </div>
            <div class="hidden sm:block">
              <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                <img src="../assets/img/father.webp" alt="father_teaching" class="bg-gray-100 rounded-lg" />
                <img src="../assets/img/goals.webp" alt="set_your_goals" class="bg-gray-100 rounded-lg" />
                <img src="../assets/img/developer.webp" alt="develop_your_knowledge" class="bg-gray-100 rounded-lg" />
                <img src="../assets/img/idea.webp" alt="great_idea" class="bg-gray-100 rounded-lg" />
              </div>
            </div>
          </div>
        </div>


        <h2 class="mt-16 hidden sm:block  text-xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Here some highlights</h2>
        <router-link to="/resources" class="sm:mt-5 hidden text-sm font-semibold text-orange-600 hover:text-orange-500 sm:block">Browse all resources<span aria-hidden="true"> &rarr;</span></router-link>
        <div class="mt-2 mb-16 grid items-start grid-cols-1 gap-y-16 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          <div v-for="feature in features" :key="feature.name" class="flex flex-col-reverse">
            <router-link :to="feature.href">
              <div class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                <img :src="feature.imageSrc" :alt="feature.imageAlt" class="object-center object-cover" />
              </div>
              <div class="mt-2 flex">
                <router-link :to="feature.href" class="bg-teal-500 hover:bg-teal-700 text-white text-sm py-1 px-2 rounded-full flex">
                  <span class="ml-2">discover</span>
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

    <div>
      <div class="max-w-7xl mx-auto sm:pt-12 sm:px-2 sm:py- lg:px-4">
        <div class="max-w-2xl mx-auto px-4 lg:max-w-none">
          <div class="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
            <div>
              <h2 class="text-xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Skill up everyday</h2>
              <p class="mt-4 text-sm sm:text-base text-gray-500">
                Being a developer today just might be one of the coolest jobs in the universe. It's like being a painter during the Renaissance or an astronaut during the Space Race. As web developers we are not only witnessing, but participating in daily revolutions in technology. The landscape is radically changing and inventions and discoveries are happening at an ever increasing pace.
                Because of this, there's almost no stability, which means that there are more opportunities than there are people to take advantage of them. It's not exactly a bad problem to have, but it also means that we can't afford to stop learning. So, to help you stay on top of your game, I've rounded up some essential learning resources web development.
              </p>
            </div>
            <div class=" aspect-w-3 aspect-h-2 bg-gray-100 rounded-lg overflow-hidden">
              <img src="../assets/img/learn.webp" alt="learn_image" class="object-center object-cover" />
            </div>
          </div>
          <ul role="list" class="sm:mt-16 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <li v-for="incentive in incentives" :key="incentive.email" class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
              <div class="w-full flex items-center justify-between p-6 space-x-6">
                <div class="flex-1">
                  <div class="flex items-center space-x-3">
                    <h3 class="text-gray-900 text-sm font-medium truncate">{{ incentive.name }}</h3>
                  </div>
                  <p class="mt-2 text-gray-500 text-sm">{{ incentive.title }}</p>
                </div>
              </div>
              <div>
                <div class="relative">
                    <div class="inline-flex flex mx-auto">
                      <div v-for="link in incentive.link" :key="link.name">
                        <a :href="link.href" target="_blank" type="button" class="relative inline-flex items-center px-4 py-2 rounded-l-md  bg-white text-sm font-medium text-orange-500 hover:bg-gray-50 hover:text-orange-700 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">{{link.name}}</a>
                      </div>
                    </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="bg-white">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="bg-teal-500 shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div class="lg:self-center">
              <h2 class="text-xl font-extrabold tracking-tight text-white sm:text-4xl">
                <span class="block">Never give up!</span>
              </h2>
              <p class="mt-4 text-sm sm:text-base text-white">
                Through our coding journeys, it can get tough sometimes. You may encounter a concept that you don’t understand, or your code doesn’t work. You have tried everything, searched on StackOverflow, read every single piece of the documentation but you can’t seem to solve the problem.
                You might feel frustrated, overwhelmed, and you just want to throw in the towel. You start thinking, “This is not worth it” and are very tempted to give up.
                Nonetheless, you may have invested a lot of time, energy, and even money into learning how to code. You may have invested your hard earned money in a bootcamp, enrolling in online courses, or also attending university.
                No worries, you are not alone. I have been there.
              </p>
            </div>
          </div>
          <div class="px-6 sm:pt-16 sm:px-16 lg:py-16">
            <div class="lg:self-center">
              <div class="my-auto">
                <img class="object-cover" src="../assets/img/graduation.webp" alt="never_give_up" />
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

const features = [
  {
    name: 'Public APIs',
    description: 'Looking for one that fits your needs can be incredibly time-consuming. Here A collective list of free APIs for use in software and web development.',
    imageSrc: './img/development.webp',
    imageAlt: 'Green cardstock box containing white, beige, and brown cards.',
    href:'',
  },
  {
    name: 'UI Graphics',
    description: 'Websites and resources with modern UI components in different formats such as PSD, Sketch, Figma, etc. They are great for ideas for web components/UI.',
    imageSrc: './img/designing.webp',
    imageAlt: 'Green cardstock box open with 50 cards inside.',
    href:'/uigraphics',
  },
  {
    name: 'CSS/UI frameworks',
    description: 'CSS/UI frameworks to help build great looking websites and applications such as Tailwind CSS, Materialize, Bulma and others.',
    imageSrc: './img/loading.webp',
    imageAlt: 'CSS/UI frameworks to help build great looking websites and applications',
    href:'/cssframeworks',
  },
  {
    name: 'Javascript Chart Libraries',
    description: 'Libraries that help developers visualize data into charts such as ChartJS, FrappeJS and others.',
    imageSrc: './img/improved.webp',
    imageAlt: 'Libraries that help developers visualize data into charts such as ChartJS, FrappeJS and others.',
    href:'/chartlibraries',
  },
]

const incentives = [
  {
    name: '1 - Online App',
    title: 'Start with free programming and coding education app. An interactive way to learn & practice programming online. Improve coding skills to advance in your education and career',
    link:[
      {name:'Sololearn',href:'https://www.sololearn.com/home'},
      {name:'Khan Academy',href:'https://www.khanacademy.org/'},
      {name:'Openclassrooms',href:'https://openclassrooms.com/en/'}
    ]
  },
  {
    name: '2 - Boot camps',
    title: 'Boot camps are a way to go from novice to expert in just a few months. They cost several thousand dollars or more and require full-time attendance, but there\'s no better way to ramp up quickly.',
    link:[
      {name:'42',href:'https://42.fr/en/homepage/'},
      {name:'BeCode',href:'https://becode.org/learn/junior-web-developer/'},
      {name:'Le Wagon',href:'https://www.lewagon.com/'}
    ]
  },
  {
    name: '3 - Podcasts',
    title: 'Sadly, the space here is pretty sparse, but not enough to write it off completely. Only two podcasts are producing regular content and have been around for a while.',
    link:[
      {name:'Javascriptjabber',href:'https://javascriptjabber.com/'},
      {name:'Shoptalkshow',href:'https://shoptalkshow.com/'},
    ]
  },
  {
    name: '4 - User Groups',
    title: 'One of the best ways to learn is to associate with others who are just as passionate. Many developers have demonstrated their commitment to learning by spending their free time to improve themselves.',
    link:[
      {name:'Discord channels',href:'https://dev.to/htnguy/top-10-discord-servers-for-developers-559o'},
    ]
  },
  {
    name: '5 - User Groups',
    title: 'One of the best ways to learn is to associate with others who are just as passionate. Many developers have demonstrated their commitment to learning by spending their free time to improve themselves.',
    link:[
      {name:'Discord channels',href:'https://dev.to/htnguy/top-10-discord-servers-for-developers-559o'},
    ]
  },
  {
    name: '6 - Stack Overflow',
    title: 'Hands down this is the best place to learn things and get issues solved. In combination with one of the aforementioned online coding tools, you can find a solution for just about any problem here.',
    link:[
      {name:'Stackoverflow',href:'https://stackoverflow.com/'},
    ]
  },
  // More people...
]




export default {

  components:{
    ChevronRightIcon,
  },

  setup() {
    return {
      features,
      incentives,
    }
  },
}
</script>
