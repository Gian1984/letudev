<template>
  <nav>
    <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <router-link to="/"><img class="block lg:hidden h-8 w-auto" src="./assets/img/letudev_logo_mini.png" alt="letudev_logo" /></router-link>
              <router-link to="/"><img class="hidden lg:block h-8 w-auto" src="./assets/img/letudev_logo_mini.png" alt="letudev_logo" /></router-link>
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <!-- Current: "border-teal-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
              <router-link to="/" class="border-teal-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"> Home </router-link>
              <router-link to="/resources" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"> Resources </router-link>
              <router-link to="/project" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"> Project </router-link>
              <router-link to="/about" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"> About </router-link>
            </div>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:items-center">
            <button @click="searchNav = !searchNav" type="button" class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
              <span class="sr-only">View notifications</span>
              <SearchIcon class="h-6 w-6" aria-hidden="true" />
            </button>


            <!-- Profile dropdown -->
<!--            <Menu as="div" class="ml-3 relative">-->
<!--              <div>-->
<!--                <MenuButton class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">-->
<!--                  <span class="sr-only">Open user menu</span>-->
<!--                  <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="user" />-->
<!--                </MenuButton>-->
<!--              </div>-->
<!--              <transition enter-active-class="transition ease-out duration-200" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">-->
<!--                <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">-->
<!--                  <MenuItem v-slot="{ active }">-->
<!--                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</a>-->
<!--                  </MenuItem>-->
<!--                  <MenuItem v-slot="{ active }">-->
<!--                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>-->
<!--                  </MenuItem>-->
<!--                  <MenuItem v-slot="{ active }">-->
<!--                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</a>-->
<!--                  </MenuItem>-->
<!--                </MenuItems>-->
<!--              </transition>-->
<!--            </Menu>-->
          </div>
          <div class="-mr-2 flex items-center sm:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
              <span class="sr-only">Open main menu</span>
              <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div class="pt-2 pb-3 space-y-1">
          <!-- Current: "bg-teal-50 border-teal-500 text-teal-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
          <DisclosureButton class="bg-teal-50 border-teal-500 text-teal-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            <router-link to="/">
             Home
            </router-link>
          </DisclosureButton>
          <DisclosureButton class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            <router-link to="/project">
              Project
            </router-link>
          </DisclosureButton>
          <DisclosureButton class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            <router-link to="/resources">
              Resources
            </router-link>
          </DisclosureButton>
          <DisclosureButton class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            <router-link to="/about">
              About
            </router-link>
          </DisclosureButton>
        </div>
<!--        <div class="pt-4 pb-3 border-t border-gray-200">-->
<!--          <div class="flex items-center px-4">-->
<!--            <div class="flex-shrink-0">-->
<!--              <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="user_icon" />-->
<!--            </div>-->
<!--            <div class="ml-3">-->
<!--              <div class="text-base font-medium text-gray-800">Tom Cook</div>-->
<!--              <div class="text-sm font-medium text-gray-500">tom@example.com</div>-->
<!--            </div>-->
<!--            <button type="button" class="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">-->
<!--              <span class="sr-only">View notifications</span>-->
<!--              <BellIcon class="h-6 w-6" aria-hidden="true" />-->
<!--            </button>-->
<!--          </div>-->
<!--          <div class="mt-3 space-y-1">-->
<!--            <DisclosureButton as="a" href="#" class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Your Profile</DisclosureButton>-->
<!--            <DisclosureButton as="a" href="#" class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Settings</DisclosureButton>-->
<!--            <DisclosureButton as="a" href="#" class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Sign out</DisclosureButton>-->
<!--          </div>-->
<!--        </div>-->
      </DisclosurePanel>
    </Disclosure>
  </nav>

  <RouterView />
  <div v-if="searchNav" >
    <div class="max-h-96 mx-auto fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:my-20 overflow-hidden bg-white bg-opacity-20 ring-opacity-5 backdrop-blur backdrop-filter text-black">
      <button class="rounded-full bg-teal-500 p-1" @click="searchNav = !searchNav">
      <XIcon class="h-4 w-4 text-white"/>
      </button>
    </div>
    <SearchNav />
  </div>


  <footer class="bg-gray-300" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">

      <!-- Begin Mailchimp Signup Form -->



      <div class="lg:flex lg:items-center lg:justify-between xl:mt-0">
        <div>
          <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Subscribe to our newsletter</h3>
          <p class="mt-2 text-base text-gray-500">The latest news, articles, and resources, sent to your inbox weekly.</p>
        </div>
        <div class="mt-4 sm:flex sm:max-w-md lg:mt-0">
          <!-- Begin Mailchimp Signup Form -->
          <div id="mc_embed_signup">
            <form action="https://gianlucatiengo.us5.list-manage.com/subscribe/post?u=7851ded2a72d6b932d7a941ae&amp;id=994e02591b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate mt-4 sm:flex sm:max-w-md lg:mt-0" target="_blank" novalidate>
              <div id="mc_embed_signup_scroll">
                <div class="mc-field-group">
                  <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="Email address">
                </div>
                <div id="mce-responses" class="clear foot">
                  <div class="response" id="mce-error-response" style="display:none"></div>
                  <div class="response" id="mce-success-response" style="display:none"></div>
                </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_7851ded2a72d6b932d7a941ae_994e02591b" tabindex="-1" value=""></div>
                <div class="optionalParent">
                  <div class="clear foot">
                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button bg-teal-600 hover:bg-teal-700">
                    <p class="brandingLogo"><a href="http://eepurl.com/hZQM4b" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" alt="mailchimp"></a></p>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <!--End mc_embed_signup-->
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div v-for="item in navigation.main" :key="item.name" class="px-5 py-2">
            <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">
              {{ item.name }}
            </a>
          </div>
        </nav>
        <div class="border-t border-gray-200 pt-8 mt-8 flex justify-center space-x-6">
          <a v-for="item in navigation.social" :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">{{ item.name }}</span>
            <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
        <p class="mt-5 text-base text-gray-400 md:order-1 text-center">&copy; 2022 <a href="https://www.gianlucatiengo.com/" target="_blank" class="text-teal-600 hover:text-teal-700"> Gianluca Tiengo</a>. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import {  MenuIcon, XIcon } from '@heroicons/vue/outline'
import { defineComponent, h } from 'vue'
import { ChevronDownIcon, SearchIcon } from '@heroicons/vue/solid'
import SearchNav from "./components/SearchNav.vue";

const navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
  ],
  support: [
    { name: 'Resources', href: '/resources' },
  ],
  company: [
    { name: 'About', href: '/about' },
  ],
  legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
              h('path', {
                'fill-rule': 'evenodd',
                d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
                'clip-rule': 'evenodd',
              }),
            ]),
      }),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
              h('path', {
                'fill-rule': 'evenodd',
                d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
                'clip-rule': 'evenodd',
              }),
            ]),
      }),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/truefreedom84',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
              h('path', {
                d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
              }),
            ]),
      }),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Gian1984',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
              h('path', {
                'fill-rule': 'evenodd',
                d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
                'clip-rule': 'evenodd',
              }),
            ]),
      }),
    },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/gianluca-tiengo/',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 21 21' }, [
              h('path', {
                'fill-rule': 'evenodd',
                d: 'M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z',
                'clip-rule': 'evenodd',
              }),
            ]),
      }),
    },
  ],
}

export default {
  data() {
    return{
      searchNav: false
    }
  },

  components: {
    ChevronDownIcon,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    SearchIcon,
    MenuIcon,
    XIcon,
    SearchNav
  },

  setup() {
    return {
      navigation,
    }
  },
}
</script>

<style>
button:focus {
  outline: none !important;
}

#mce-EMAIL{
  outline: none !important;
  border-radius: 8px !important;
}

#mc-embedded-subscribe{
  border-radius: 25px !important;
  background-color: #0d9488 !important;
}

#mc-embedded-subscribe:hover{
  background-color: #14b8a6 !important;
}


</style>

