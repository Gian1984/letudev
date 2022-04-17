<!-- This example requires Tailwind CSS v2.0+ -->
<template>


  <div class="bg-white">
    <div class="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <!-- Product -->
      <div class="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
        <!-- Product image -->
        <div class="lg:row-end-1 lg:col-span-4">
          <div class="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden">
            <img src="../assets/img/futuristic.webp" alt="my_self" class="object-center object-cover" />
          </div>
        </div>

        <!-- Product details -->
        <div class="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
          <div class="flex flex-col-reverse">
            <div class="mt-4">
              <h1 class="text-xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Gianluca Tiengo</h1>

              <h2 id="information-heading" class="sr-only">Product information</h2>
              <div class="mt-2 flex text-sm text-gray-500">
                <CalendarIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                Last update - March 9, 2022
              </div>
            </div>
          </div>

          <p class="text-gray-500 mt-6 text-sm sm:text-base">I'm a web developer from Turin, Italy and currently living in Brussels. I enjoy building everything from small business to rich interactive apps. </p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
            <a href="https://www.gianlucatiengo.com/" target="_blank" class="w-full bg-teal-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-teal-500">My web site <span class="ml-1" aria-hidden="true"> &rarr;</span></a>
<!--            <button type="button" class="w-full bg-indigo-50 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Preview</button>-->
          </div>

          <div class="border-t border-gray-200 mt-10 pt-10">
            <h3 class="text-sm font-medium text-gray-900">Profile</h3>
            <div class="mt-4 prose prose-sm text-gray-500 text-sm">
              <ul role="list">
                <li class="my-2">- I create successful responsive website that are fast, easy to use, and build with the best practices</li>
                <li class="my-2">- The main area of expertise is full-stack development HTMl, CSS, JS, PHP, building small and medium web apps, animations.</li>
                <li class="my-2">- I have also experience with popular open-source CMS like Wordpress. </li>
              </ul>
            </div>
          </div>

          <div class="border-t border-gray-200 mt-10 pt-10">
            <h3 class="text-sm font-medium text-gray-900">License</h3>
            <p class="mt-4 text-sm text-gray-500">For personal and professional use. Feel free to share all the resources that you can find here!</p>
          </div>

          <div class="border-t border-gray-200 mt-10 pt-10">
            <h3 class="text-sm font-medium text-gray-900">Follow me</h3>
            <ul role="list" class="flex items-center space-x-6 mt-4">
              <li>
                <a href="https://www.linkedin.com/in/gianluca-tiengo/" target="_blank" class="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-gray-500">
                  <span class="sr-only">Follow on Linkedin</span>
                  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/truefreedom84" target="_blank" class="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-gray-500">
                  <span class="sr-only">Follow on Twitter</span>
                  <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="w-full max-w-2xl mx-auto mt-16 lg:max-w-none lg:mt-0 lg:col-span-4">
          <TabGroup as="div">
            <div class="border-b border-gray-200">
              <TabList class="-mb-px flex space-x-8">
                <Tab as="template" v-slot="{ selected }">
                  <button :class="[selected ? 'border-teal-600 text-teal-600' : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300', 'whitespace-nowrap py-6 border-b-2 font-medium text-sm']">My stack</button>
                </Tab>
                <Tab as="template" v-slot="{ selected }">
                  <button :class="[selected ? 'border-teal-600 text-teal-600' : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300', 'whitespace-nowrap py-6 border-b-2 font-medium text-sm']">About me</button>
                </Tab>
                <Tab as="template" v-slot="{ selected }">
                  <button :class="[selected ? 'border-teal-600 text-teal-600' : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300', 'whitespace-nowrap py-6 border-b-2 font-medium text-sm']">Next on track</button>
                </Tab>
              </TabList>
            </div>
            <TabPanels as="template">
              <TabPanel class="-mb-10">
                <h3 class="sr-only">My favourite stack</h3>

                <div v-for="(stack, stackIdx) in stacks.featured" :key="stack.id" class="flex text-sm text-gray-500 space-x-4">
                  <div class="flex-none py-10">
                    <img :src="stack.avatarSrc" alt="" class="w-10 h-10" />
                  </div>
                  <div :class="[stackIdx === 0 ? '' : 'border-t border-gray-200', 'py-10']">
                    <h3 class="font-medium text-gray-900">{{ stack.author }}</h3>
                    <div class="mt-4 prose prose-sm max-w-none text-gray-500" v-html="stack.content" />
                  </div>
                </div>
              </TabPanel>

              <TabPanel class="pt-10">
                <h3 class="sr-only">About me</h3>

                <div class="prose prose-sm max-w-none text-gray-500" v-html="About.content" />
              </TabPanel>
            </TabPanels>

            <TabPanel as="dl" class="text-sm text-gray-500">
              <h3 class="sr-only">Next on track</h3>

              <div v-for="(next, nextIdx) in nexts.featured" :key="next.id" class="flex text-sm text-gray-500 space-x-4">
                <div :class="[nextIdx === 0 ? '' : 'border-t border-gray-200', 'py-10']">
                  <h3 class="font-medium text-gray-900">{{ next.author }}</h3>
                  <p class="flex mt-0.5">
                    <CalendarIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <time :datetime="next.datetime">{{ next.date }}</time>
                  </p>

                  <div class="mt-4 prose prose-sm max-w-none text-gray-500" v-html="next.content" />
                </div>
              </div>
            </TabPanel>
          </TabGroup>
        </div>
      </div>
    </div>
  </div>


  <div class="bg-teal-600">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:py-16 lg:px-8 py-12">
      <p class="text-center text-base font-semibold uppercase text-white tracking-wider">
        I am looking for partnerships or sponsors who would like to help me keep this page open. Whether it is, a small discount on your applications reserved for users of this site, or a coffee for me, don't hesitate to get in touch! I will be grateful!
      </p>
      <div class="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
        <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
          <img class="max-h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Workcation" />
        </div>
        <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
          <img class="max-h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
        </div>
        <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
          <img class="max-h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
        </div>
        <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
          <img class="max-h-12" src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg" alt="Laravel" />
        </div>
        <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
          <img class="max-h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
        </div>
        <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
          <img class="max-h-12" src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg" alt="Statamic" />
        </div>
      </div>
    </div>
  </div>


  <section class="text-gray-600 body-font relative">
    <div class="absolute inset-0 bg-gray-300">
      <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80598.44841121738!2d4.305377849792255!3d50.855211410206046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3a4ed73c76867%3A0xc18b3a66787302a7!2sBruxelles%2C%20Belgique!5e0!3m2!1sfr!2sit!4v1650206261181!5m2!1sfr!2sit' style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe>
    </div>
    <form action="mailto:gl.tiengo@gmail.com" method="GET">
    <div class="container px-2 py-24 mx-auto flex">
        <div class="lg:w-1/3 md:w-1/2 bg-white p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 class="text-gray-900 text-sm mb-1 font-medium title-font">Get in touch!</h2>
          <p class="leading-relaxed mb-5 text-gray-600 text-sm sm:text-sm">My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-xs text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required>
          </div>
          <div class="relative mb-4">
            <label for="subject" class="leading-7 text-xs text-gray-600">Subject</label>
            <input name="subject" id="subject" type="text" class="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required>
          </div>
          <div class="relative mb-4">
            <label for="body" class="leading-7 text-xs text-gray-600">Message</label>
            <textarea id="body" name="body" class="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 h-32 text-sm outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
          </div>
          <button type="submit" value="Send" class="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-sm">Send</button>
        </div>
    </div>
    </form>
  </section>


  <div class="bg-white">
    <div class="max-w-7xl mx-auto pt-10 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-8 sm:space-y-12">
        <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
          <h2 class="text-xl font-extrabold tracking-tight sm:text-4xl">The People</h2>
          <p class="text-sm sm:text-base text-gray-500">As soon as i'll be able to set up the registration system, i want to mention all the people who will have contributed to the development of this that doesn't want to be a simple application, it is a place meant to be a welcoming home for all the programmers who pass by here. Thanks!</p>
        </div>
        <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
          <li v-for="person in people" :key="person.name">
            <div class="space-y-4">
              <img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" :src="person.imageUrl" alt="" />
              <div class="space-y-2">
                <div class="text-xs font-medium lg:text-sm">
                  <h3>{{ person.name }}</h3>
                  <p class="text-teal-600">{{ person.role }}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { CalendarIcon } from '@heroicons/vue/solid'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/vue'

const stacks = {
  average: 4,
  featured: [
    {
      id: 1,
      content: `
        <p>The Progressive JavaScript Framework. An approachable, performant and versatile framework for building web user interfaces.</p>
      `,
      author: 'Vue JS',
      avatarSrc:
          './img/vue_logo.webp',
    },
    {
      id: 2,
      content: `
        <p>Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.</p>
      `,
      author: 'Laravel',
      avatarSrc:
          './img/laravel.webp',
    },
    {
      id: 3,
      content: `
        <p>Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.</p>
      `,
      author: 'Tailwind CSS/UI',
      avatarSrc:
          './img/tailwind.webp',
    },
    // More reviews...
  ],
}
const nexts = {
  average: 4,
  featured: [
    {
      id: 1,
      content: `
        <p>I try my best to add as quickly as possible all the resources available to me at this time.</p>
      `,
      date: 'April 17, 2022',
      author: '1 - Complete all resources',
    },
    {
      id: 2,
      content: `
        <p>The section on links to API services is very long and transcribing it on this site takes a lot of time. I hope to be able to expedite it.</p>
      `,
      date: 'April 17, 2022',
      author: '2 - Add APIs section',
    },
    {
      id: 3,
      content: `
        <p>Soon I hope to launch a newsletter section so that I can keep you up to date on updates related to the platform..</p>
      `,
      date: 'April 17, 2022',
      author: '3 - Add Newsletter',
    },
    {
      id: 3,
      content: `
        <p>I'm still pondering how to set up the ability for you to share guides, articles, or how to update the list of available resources. I will keep you updated on developments.</p>
      `,
      date: 'April 17, 2022',
      author: '4 - Add Articles section ',
    },
  ],
}

const About = {
  href: '#',
  summary:
      'For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.',
  content: `
    <h4 class="text-sm font-medium text-gray-900"">Dear Reader,</h4><br>

    <p class="text-gray-500 text-sm">
        During my life, for pleasure or for necessity, I have always had to learn and adapt,
        change jobs and habits. After high school, I became a hairdresser, but following an occupational disease,
        I had to reinvent myself. So I trained as an accounting assistant and started working in a watchmaking laboratory.
        Then I decided to take training in this sector, and enrolled in the watchmaking school to deepen my knowledge.
        I always been a tech passionate, This is why I joined a coding bootcamp training to combine passion and employment.
        I would like to take this wonderful opportunity to learn more, go further and be able to reinvent myself, once again.
    </p>
  `,
}


const people = [
  {
    name: 'Gianluca Tiengo',
    role: 'Founder',
    imageUrl:
        './img/avatars/gianluca.webp',
  },
]

export default {

  components: {
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    CalendarIcon
  },

  setup() {
    return {
      people,
      stacks,
      nexts,
      About,
    }
  },
}
</script>
