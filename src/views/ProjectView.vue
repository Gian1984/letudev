<!-- This example requires Tailwind CSS v2.0+ -->
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
      <div class="max-w-7xl mx-auto pt-10 px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <p class="text-xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Let's share.</p>
          <p class="mt-4 text-sm sm:text-base text-gray-500">A place for programmers to share ideas and help each other grow. All developers are welcome to submit stories, tutorials, questions...</p>
        </div>
      </div>
    </div>

    <div class="relative bg-white pb-10 sm:pb-5">
      <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div class="relative sm:py-16 lg:py-24">
          <div aria-hidden="true" class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
            <div class="absolute inset-y-0 right-1/2 w-full rounded-r-3xl lg:right-72" />
          </div>
          <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-4 lg:max-w-3xl">
            <!-- Testimonial card-->
            <div class="relative pt-64 pb-10 overflow-hidden">
              <img class="absolute inset-0 h-full w-full object-cover" src="../assets/img/share.webp" alt="share_information" />
            </div>
          </div>
        </div>

        <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          <!-- Content area -->
          <div class="sm:pt-16">
            <div class="text-gray-500 space-y-6">
              <h2 class="text-l font-extrabold tracking-tight text-gray-900 sm:text-2xl">Knowledge sharing</h2>
              <p class="mt-4 text-sm sm:text-base text-gray-500">
                Knowledge might be power, but it’s much more powerful when it’s shared! If only one person knows how to do something, that prevents others from developing and can hinder your organisation’s progress. Plus, what happens if they hoard knowledge and decide to leave!?
                But that’s enough doom and gloom because when you manage knowledge properly and give people a platform to share and access it, you’re opening the door to a whole host of benefits!
                Software development is such a challenging field that it’s almost impossible to succeed in it without having some sort of support system. With the many popular languages, frameworks, tools, and libraries available, having someone who can guide or mentor you will significantly increase your chances of success in this field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>



    <section class="bg-teal-500 overflow-hidden">
      <div class="relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
        <div class="relative lg:flex lg:items-center">
          <div class="relative lg:ml-10 mt-4">
            <svg class="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-teal-200 opacity-50" stroke="currentColor" fill="none" viewBox="0 0 144 144" aria-hidden="true">
              <path stroke-width="2" d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z" />
            </svg>
            <blockquote class="relative">
              <div class="sm:text-2xl text-xl leading-9 font-medium text-white">
                <p>
                  Our main goal is to become your daily tool to discover new resources and facilitate your professional growth as a developer. We are convinced that everything starts from the dedication and pleasure of doing this job.
                </p>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>



    <div class="bg-white pb-20 mt-10 sm:mt-24 px-4 sm:px-6 lg:px-8">
      <div class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 class="text-xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Be a part of</h2>
          <div class="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
            <p class="text-sm sm:text-base text-gray-500">
              Communities help developers connect with others who share the same experience, failures, and successes within the industry. Here is a list of some of the best online communities for software developers.
            </p>
          </div>
        </div>
        <div class="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          <div v-for="post in posts" :key="post.title">
            <a href="#" class="mt-2 block">
              <p class="text-l font-semibold text-gray-900">
                {{ post.title }}
              </p>
              <p class="mt-3 text-sm sm:text-bas text-gray-500">
                {{ post.description }}
              </p>
            </a>
            <div class="mt-3">
              <a :href="post.href" target="_blank" class="text-sm font-semibold text-orange-600 hover:text-orange-500">Check it out<span aria-hidden="true"> &rarr;</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<script>

const posts = [
  {
    title: 'GitHub',
    href: 'https://github.com',
    description:
        'Github is supporting a community where more than 40 million people learn, share, and work together to build software. The GitHub Community Forum is a place where you can share ideas and follow discussions on topics that might interest you.',
  },
  {
    title: 'Stack Overflow',
    href: 'https://stackoverflow.com',
    description: 'Stack Overflow is an open community for anyone that codes. They help you get answers to your toughest coding questions, share knowledge with your coworkers in private, and find your next dream job.',
  },
  {
    title: 'HackerNews',
    href: 'https://news.ycombinator.com/',
    description:
        'Hacker News is a social news website focusing on computer science and entrepreneurship. As mentioned on their website, you can post anything that gratifies one’s intellectual curiosity. Share your stories and gain insights from other developers.',
  },
  {
    title: 'Hackernoon',
    href: 'https://hackernoon.com/',
    description:
        'Hackernoon is an Independent Tech Media Site. It is surfed by Technologists, Software Developers, Bitcoiners, and Blockchain Enthusiasts. There are a ton of stories about Software Engineering, coding languages, and security topics that will grab your attention.',
  },
  {
    title: 'Hashnode',
    href: 'https://hashnode.com/',
    description:
        'Hashnode is a place to connect with the best developers from across the world. It helps devs solve real-life issues. You can publish stories and share them with the developer community or showcase your recent projects.',
  },
  {
    title: 'freeCodeCamp',
    href: 'https://www.freecodecamp.org/',
    description:
        'freeCodeCamp is a nonprofit community that helps you learn to code by building projects. Each month they help millions of people learn about coding and technology. They offer certifications that take around 300 hours of dedicated learning.',
  },
  {
    title: 'Women Who Code',
    href: 'https://www.womenwhocode.com/',
    description:
        'Women Who Code is one of the developer communities that is built to empower women in tech. You can find coding resources, Leadership opportunities, job vacancies, and events that can advance your technical skills through their global devs community.',
  },
  {
    title: 'CodeProject',
    href: 'https://www.codeproject.com/',
    description:
        'CodeProject is a one of the biggest developer communities with 14+ million Software Developers joined together with specific common goals: to learn, to teach, and to have fun. Members from all over the world come together to share code, tutorials and knowledge.',
  },
  {
    title: 'Digital Ocean',
    href: 'https://www.digitalocean.com/',
    description:
        'Digital Ocean is a platform where Developers are supporting developers. If you have questions, a big idea, or something to share, their community is designed to help you. They want the open-source community to thrive. There are a lot of tutorials and questions you can browse.',
  },
  {
    title: 'Reddit',
    href: 'https://www.reddit.com/',
    description:
        'Reddit is home to thousands of communities, endless conversation, and authentic human connection. There are 130,000+ active communities or as Redditors called them “Subreddits” that you can follow. And of course, there are enormous subreddits for Developers.',
  },
]


export default {
  setup() {
    return {
      posts,
    }
  },
}
</script>
