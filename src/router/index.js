import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import HomeView from "../views/HomeView.vue"
import ResourcesView from "../views/ResourcesView.vue"
import AngularUILibraries from "../categories/AngularUILibraries.vue"
import ChartLibraries from "../categories/ChartLibraries.vue"
import ChromeExtensions from "../categories/ChromeExtensions.vue"
import Colors from "../categories/Colors.vue"
import CSSAnimations from "../categories/CSSAnimations.vue"
import CSSFrameworks from "../categories/CSSFrameworks.vue"
import CSSMethodologies from "../categories/CSSMethodologies.vue"
import DesignInspiration from "../categories/DesignInspiration.vue"
import DesignSoftware from "../categories/DesignSoftware.vue"
import DesignSystems from "../categories/DesignSystems.vue"
import Favicons from "../categories/Favicons.vue"
import Fonts from "../categories/FontsRes.vue"
import HTMLCSSTemplates from "../categories/HTML&CSSTemplates.vue"
import IconFonts from "../categories/IconFonts.vue"
import Icons from "../categories/Icons.vue"
import ImageCompression from "../categories/ImageCompression.vue"
import ImageMockups from "../categories/ImageMockups.vue"
import Logos from "../categories/Logos.vue"
import OnlineDesignTools from "../categories/OnlineDesignTools.vue"
import Others from "../categories/Others.vue"
import ReactNativeUILibraries from "../categories/ReactNativeUILibraries.vue"
import ReactUILibraries from "../categories/ReactUILibraries.vue"
import SoundEffects from "../categories/SoundEffects.vue"
import StockPhotos from "../categories/StockPhotos.vue"
import StockVideos from "../categories/StockVideos.vue"
import SvelteUILibraries from "../categories/SvelteUILibraries.vue"
import UIComponents from "../categories/UIComponents.vue"
import UIGraphics from "../categories/UIGraphics.vue"
import VectorsClip from "../categories/VectorsClip.vue"
import VueUILibraries from "../categories/VueUILibraries.vue"
import AnimationLibraries from "../categories/AnimationLibraries.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home Page - Example App',
        metaTags: [
          {
            name: 'description',
            content: 'The home page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The home page of our example app.'
          }
        ]
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        title: 'About Page - Example App',
        metaTags: [
          {
            name: 'description',
            content: 'The about page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The about page of our example app.'
          }
        ]
      },
    },
    {
      path:'/resources',
      name:'resources',
      component: ResourcesView,
      meta: {
        title: 'Resources Page - Example App',
        metaTags: [
          {
            name: 'description',
            content: 'The resources page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The resources page of our example app.'
          }
        ]
      },
    },
    {
      path:'/angularuilibraries',
      name:'angularuilibraries',
      component: AngularUILibraries,
      meta: {
        title: 'Resources Angular UI Libraries',
        metaTags: [
          {
            name: 'description',
            content: 'UI and component libraries for the Angular JavaScript framework.'
          },
          {
            property: 'og:description',
            content: 'UI and component libraries for the Angular JavaScript framework.'
          }
        ]
      },
    },
    {
      path:'/chartlibraries',
      name:'chartlibraries',
      component: ChartLibraries,
      meta: {
        title: 'Resources Chart Libraries',
        metaTags: [
          {
            name: 'description',
            content: 'Libraries that help developers visualize data into charts.'
          },
          {
            property: 'og:description',
            content: 'Libraries that help developers visualize data into charts.'
          }
        ]
      },
    },
    {
      path:'/chromeextensions',
      name:'chromeextensions',
      component: ChromeExtensions,
      meta: {
        title: 'Resources Chrome Extensions',
        metaTags: [
          {
            name: 'description',
            content: 'Useful Chrome extensions for Designers and Web-Developers.'
          },
          {
            property: 'og:description',
            content: 'Useful Chrome extensions for Designers and Web-Developers.'
          }
        ]
      },
    },
    {
      path:'/colors',
      name:'colors',
      component: Colors,
      meta: {
        title: 'Resources Colors',
        metaTags: [
          {
            name: 'description',
            content: 'Websites and resources that help with choices related to colors.'
          },
          {
            property: 'og:description',
            content: 'Websites and resources that help with choices related to colors.'
          }
        ]
      },
    },
    {
      path:'/cssanimations',
      name:'cssanimations',
      component: CSSAnimations,
      meta: {
        title: 'Resources CSS Animations',
        metaTags: [
          {
            name: 'description',
            content: 'CSS animations to build awesome animations for websites and applications.'
          },
          {
            property: 'og:description',
            content: 'CSS animations to build awesome animations for websites and applications.'
          }
        ]
      },
    },
    {
      path:'/cssframeworks',
      name:'cssframeworks',
      component: CSSFrameworks,
      meta: {
        title: 'Resources CSS Frameworks',
        metaTags: [
          {
            name: 'description',
            content: 'CSS/UI frameworks to help build great looking websites and applications.'
          },
          {
            property: 'og:description',
            content: 'CSS/UI frameworks to help build great looking websites and applications.'
          }
        ]
      },
    },
    {
      path:'/cssmethodologies',
      name:'cssmethodologies',
      component: CSSMethodologies,
      meta: {
        title: 'Resources CSS Methodologies',
        metaTags: [
          {
            name: 'description',
            content: 'CSS methodologies to help write modular, reusable and scalable code.'
          },
          {
            property: 'og:description',
            content: 'CSS methodologies to help write modular, reusable and scalable code.'
          }
        ]
      },
    },
    {
      path:'/designinspiration',
      name:'designinspiration',
      component: DesignInspiration,
      meta: {
        title: 'Resources Design Inspiration',
        metaTags: [
          {
            name: 'description',
            content: 'Here are some websites to get inspiration for design and UI.'
          },
          {
            property: 'og:description',
            content: 'Here are some websites to get inspiration for design and UI.'
          }
        ]
      },
    },
    {
      path:'/designsoftware',
      name:'designsoftware',
      component: DesignSoftware,
      meta: {
        title: 'Resources Design Software',
        metaTags: [
          {
            name: 'description',
            content: 'Free software for UI, photo, 3d modeling, etc. Alternatives to paid software like Photoshop.'
          },
          {
            property: 'og:description',
            content: 'Free software for UI, photo, 3d modeling, etc. Alternatives to paid software like Photoshop.'
          }
        ]
      },
    },
    {
      path:'/designsystems',
      name:'designsystems',
      component: DesignSystems,
      meta: {
        title: 'Resources Design Systems',
        metaTags: [
          {
            name: 'description',
            content: 'Design systems, style guides, toolkits, docs. Some of these are design guides for top companies/websites.'
          },
          {
            property: 'og:description',
            content: 'Design systems, style guides, toolkits, docs. Some of these are design guides for top companies/websites.'
          }
        ]
      },
    },
    {
      path:'/favicons',
      name:'favicons',
      component: Favicons,
      meta: {
        title: 'Resources Favicons',
        metaTags: [
          {
            name: 'description',
            content: 'Resources Favicons.'
          },
          {
            property: 'og:description',
            content: 'Resources Favicons.'
          }
        ]
      },
    },
    {
      path:'/fonts',
      name:'fonts',
      component: Fonts,
      meta: {
        title: 'Resources Fonts',
        metaTags: [
          {
            name: 'description',
            content: 'Websites that offer free fonts as well as font-based tools.'
          },
          {
            property: 'og:description',
            content: 'Websites that offer free fonts as well as font-based tools.'
          }
        ]
      },
    },
    {
      path:'/html&csstemplates',
      name:'html&csstemplates',
      component: HTMLCSSTemplates,
      meta: {
        title: 'Resources HTML & CSS Templates',
        metaTags: [
          {
            name: 'description',
            content: 'Websites that offer free beautiful website templates and themes of all types.'
          },
          {
            property: 'og:description',
            content: 'Websites that offer free beautiful website templates and themes of all types.'
          }
        ]
      },
    },
    {
      path:'/iconfonts',
      name:'iconfonts',
      component: IconFonts,
      meta: {
        title: 'Resources Icon Fonts',
        metaTags: [
          {
            name: 'description',
            content: 'Resources Icon Fonts.'
          },
          {
            property: 'og:description',
            content: 'Resources Icon Fonts.'
          }
        ]
      },
    },
    {
      path:'/icons',
      name:'icon',
      component: Icons,
      meta: {
        title: 'Resources Icon',
        metaTags: [
          {
            name: 'description',
            content: 'Resources for Icons including png, svg and more.'
          },
          {
            property: 'og:description',
            content: 'Resources for Icons including png, svg and more.'
          }
        ]
      },
    },
    {
      path:'/imagecompression',
      name:'imagecompression',
      component: ImageCompression,
      meta: {
        title: 'Resources Image Compression',
        metaTags: [
          {
            name: 'description',
            content: 'Websites that allow you to compress large images.'
          },
          {
            property: 'og:description',
            content: 'Websites that allow you to compress large images.'
          }
        ]
      },
    },
    {
      path:'/imagemockups',
      name:'imagemockups',
      component: ImageMockups,
      meta: {
        title: 'Resources Image Mockups',
        metaTags: [
          {
            name: 'description',
            content: 'Create mockups of devices and other products.'
          },
          {
            property: 'og:description',
            content: 'Create mockups of devices and other products.'
          }
        ]
      },
    },
    {
      path:'/logos',
      name:'logos',
      component: Logos,
      meta: {
        title: 'Resources Logos',
        metaTags: [
          {
            name: 'description',
            content: 'Resources Logos.'
          },
          {
            property: 'og:description',
            content: 'Resources Logos.'
          }
        ]
      },
    },
    {
      path:'/onlinedesigntools',
      name:'onlinedesigntools',
      component: OnlineDesignTools,
      meta: {
        title: 'Resources Online Design Tools',
        metaTags: [
          {
            name: 'description',
            content: 'All kinds of online tools for design, from photo editors to wireframing, and more.'
          },
          {
            property: 'og:description',
            content: 'All kinds of online tools for design, from photo editors to wireframing, and more'
          }
        ]
      },
    },
    {
      path:'/others',
      name:'others',
      component: Others,
      meta: {
        title: 'Resources Others',
        metaTags: [
          {
            name: 'description',
            content: 'Uncategorized Stuff.'
          },
          {
            property: 'og:description',
            content: 'Uncategorized Stuff.'
          }
        ]
      },
    },
    {
      path:'/reactnativeuilibraries',
      name:'reactnativeuilibraries',
      component: ReactNativeUILibraries,
      meta: {
        title: 'Resources React Native UI Libraries',
        metaTags: [
          {
            name: 'description',
            content: 'UI and component libraries for the React Native Framework.'
          },
          {
            property: 'og:description',
            content: 'UI and component libraries for the React Native Framework.'
          }
        ]
      },
    },
    {
      path:'/reactuilibraries',
      name:'reactuilibraries',
      component: ReactUILibraries,
      meta: {
        title: 'Resources React UI Libraries',
        metaTags: [
          {
            name: 'description',
            content: 'UI and component libraries for the React JavaScript framework.'
          },
          {
            property: 'og:description',
            content: 'UI and component libraries for the React JavaScript framework.'
          }
        ]
      },
    },
    {
      path:'/soundeffects',
      name:'soundeffects',
      component: SoundEffects,
      meta: {
        title: 'Resources Sound Effects & Music',
        metaTags: [
          {
            name: 'description',
            content: 'Websites that offer free stock music and/or sound effects.'
          },
          {
            property: 'og:description',
            content: 'Websites that offer free stock music and/or sound effects.'
          }
        ]
      },
    },
    {
      path:'/stockphotos',
      name:'stockphotos',
      component: StockPhotos,
      meta: {
        title: 'Resources Stock Photos',
        metaTags: [
          {
            name: 'description',
            content: 'Websites that offer free stock photos of all kinds for your websites and apps.'
          },
          {
            property: 'og:description',
            content: 'Websites that offer free stock photos of all kinds for your websites and apps.'
          }
        ]
      },
    },
    {
      path:'/stockvideos',
      name:'stockvideos',
      component: StockVideos,
      meta: {
        title: 'Resources Stock Videos',
        metaTags: [
          {
            name: 'description',
            content: 'Websites that offer free stock videos of all kinds for your websites and apps.'
          },
          {
            property: 'og:description',
            content: 'Websites that offer free stock videos of all kinds for your websites and apps.'
          }
        ]
      },
    },
    {
      path:'/svelteuilibraries',
      name:'svelteuilibraries',
      component: SvelteUILibraries,
      meta: {
        title: 'Resources Svelte UI Libraries',
        metaTags: [
          {
            name: 'description',
            content: 'UI and component libraries for the Svelte JavaScript compiler.'
          },
          {
            property: 'og:description',
            content: 'UI and component libraries for the Svelte JavaScript compiler.'
          }
        ]
      },
    },
    {
      path:'/uicomponents',
      name:'uicomponents',
      component: UIComponents,
      meta: {
        title: 'Resources UI Components & Kits',
        metaTags: [
          {
            name: 'description',
            content: 'Not quite "frameworks", but tools for creating user interfaces with components or UI kits.'
          },
          {
            property: 'og:description',
            content: 'Not quite "frameworks", but tools for creating user interfaces with components or UI kits.'
          }
        ]
      },
    },
    {
      path:'/uigraphics',
      name:'uigraphics',
      component: UIGraphics,
      meta: {
        title: 'Resources UI Graphics',
        metaTags: [
          {
            name: 'description',
            content: 'Websites and resources with modern UI components in different formats such as PSD, Sketch, Figma, etc. They are great for ideas for web components/UI.'
          },
          {
            property: 'og:description',
            content: 'Websites and resources with modern UI components in different formats such as PSD, Sketch, Figma, etc. They are great for ideas for web components/UI.'
          }
        ]
      },
    },
    {
      path:'/vectorsclip',
      name:'vectorsclip',
      component: VectorsClip,
      meta: {
        title: 'Resources Vectors & Clip',
        metaTags: [
          {
            name: 'description',
            content: 'Free vectors, clipart, illustrations, patterns and more.'
          },
          {
            property: 'og:description',
            content: 'Free vectors, clipart, illustrations, patterns and more.'
          }
        ]
      },
    },
    {
      path:'/vueuilibraries',
      name:'vueuilibraries',
      component: VueUILibraries,
      meta: {
        title: 'Resources Vue UI Libraries',
        metaTags: [
          {
            name: 'description',
            content: 'UI and component libraries for the Vue JavaScript framework.'
          },
          {
            property: 'og:description',
            content: 'UI and component libraries for the Vue JavaScript framework.'
          }
        ]
      },
    },
    {
      path:'/animationlibraries',
      name:'animationlibraries',
      component: AnimationLibraries,
      meta: {
        title: 'Resources Javascript Animation Libraries',
        metaTags: [
          {
            name: 'description',
            content: 'Javascript animations libraries to build awesome animations for websites and applications.'
          },
          {
            property: 'og:description',
            content: 'Javascript animations libraries to build awesome animations for websites and applications.'
          }
        ]
      },
    },
  ]
})

router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
      // Add the meta tags to the document head.
      .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router
