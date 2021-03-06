import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import HomeView from "../views/HomeView.vue"
import ProjectView from "../views/ProjectView.vue"
import ResourcesView from "../views/ResourcesView.vue"
import ThanksSub from "../components/ThanksSub.vue"
import AngularUILibraries from "../categories/AngularUILibraries.vue"
import ChartLibraries from "../categories/ChartLibraries.vue"
import ChromeExtensions from "../categories/ChromeExtensions.vue"
import Colors from "../categories/ColorsRes.vue"
import CSSAnimations from "../categories/CSSAnimations.vue"
import CSSFrameworks from "../categories/CSSFrameworks.vue"
import CSSMethodologies from "../categories/CSSMethodologies.vue"
import DesignInspiration from "../categories/DesignInspiration.vue"
import DesignSoftware from "../categories/DesignSoftware.vue"
import DesignSystems from "../categories/DesignSystems.vue"
import Favicons from "../categories/FaviconsRes.vue"
import Fonts from "../categories/FontsRes.vue"
import HTMLCSSTemplates from "../categories/HTML&CSSTemplates.vue"
import IconFonts from "../categories/IconFonts.vue"
import Icons from "../categories/IconsRes.vue"
import ImageCompression from "../categories/ImageCompression.vue"
import ImageMockups from "../categories/ImageMockups.vue"
import Logos from "../categories/LogosRes.vue"
import OnlineDesignTools from "../categories/OnlineDesignTools.vue"
import Others from "../categories/OthersStuff.vue"
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
import AnimationLibraries from "../categories/AnimationJSLibraries.vue"
import PublicAPIs from "../categories/PublicAPIs.vue"
import AnimalsApi from "../apis/AnimalsApi.vue"
import AnimesApi from "../apis/AnimesApi.vue"
import AntimalwaresApi from "../apis/AntimalwaresApi.vue"
import ArtdesignApi from "../apis/ArtdesignApi.vue";
import AuthApi from "../apis/AuthApi.vue"
import BlockchainApi from "../apis/BlockchainApi.vue"
import BookApi from "../apis/BookApi.vue"
import BusinessApi from "../apis/BusinessApi.vue"
import CalendarApi from "../apis/CalendarApi.vue";
import CloudApi from "../apis/CloudApi.vue"
import IntegrationApi from "../apis/IntegrationApi.vue"
import CryptocurrencyApi from "../apis/CryptocurrencyApi.vue"
import ExchangeApi from "../apis/ExchangeApi.vue"
import ValidationApi from "../apis/ValidationApi.vue"
import DevelopmentApi from "../apis/DevelopmentApi.vue"
import DictionariesApi from "../apis/DictionariesApi.vue"
import ProductivityApi from "../apis/ProductivityApi.vue"
import EmailApi from "../apis/EmailApi.vue"
import EntertainmentApi from "../apis/EntertainmentApi.vue"
import EnvironmentApi from "../apis/EnvironmentApi.vue"
import EventsApi from "../apis/EventsApi.vue"
import FinanceApi from "../apis/FinanceApi.vue"
import FoodDrinkApi from "../apis/FoodDrinkApi.vue"
import GamesComicsApi from "../apis/GamesComicsApi.vue"
import GeocodingApi from "../apis/GeocodingApi.vue"
import GovernmentApi from "../apis/GovernmentApi.vue"
import HealthApi from "../apis/HealthApi.vue"
import JobsApi from "../apis/JobsApi.vue"
import MachineLearningApi from "../apis/MachineLearningApi.vue"
import MusicApi from "../apis/MusicApi.vue"
import NewsApi from "../apis/NewsApi.vue"
import OpenDataApi from "../apis/OpenDataApi.vue"
import OpenSourceApi from "../apis/OpenSourceApi.vue"
import PatentApi from "../apis/PatentApi.vue"
import PersonalityApi from "../apis/PersonalityApi.vue"
import PhoneApi from "../apis/PhoneApi.vue"
import PhotographyApi from "../apis/PhotographyApi.vue"
import ProgrammingApi from "../apis/ProgrammingApi.vue"
import ScienceMathApi from "../apis/ScienceMath.vue"
import SecurityApi from "../apis/SecurityApi.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Let You Develop - Home Page',
        metaTags: [
          {
            name: 'description',
            content: 'Learning web development is a journey and for this, you would need a road map. One of the biggest challenges faced by new developers when learning web development is not knowing where to start, what to learn, or the path to achieve their goals.'
          },
          {
            property: 'og:description',
            content: 'Learning web development is a journey and for this, you would need a road map. One of the biggest challenges faced by new developers when learning web development is not knowing where to start, what to learn, or the path to achieve their goals.'
          }
        ]
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        title: 'Let You Develop - About Page',
        metaTags: [
          {
            name: 'description',
            content: 'I\'m a web developer from Turin, Italy and currently living in Brussels. I enjoy building everything from small business to rich interactive apps.'
          },
          {
            property: 'og:description',
            content: 'I\'m a web developer from Turin, Italy and currently living in Brussels. I enjoy building everything from small business to rich interactive apps.'
          }
        ]
      },
    },
    {
      path: '/project',
      name: 'project',
      component: ProjectView,
      meta: {
        title: 'Let You Develop - Project Page',
        metaTags: [
          {
            name: 'description',
            content: 'Letudev.com is a community effort to create, resources, roadmaps, guides, and other educational content to help guide the developers in picking up the path and guide their learnings.'
          },
          {
            property: 'og:description',
            content: 'Letudev.com is a community effort to create, resources, roadmaps, guides, and other educational content to help guide the developers in picking up the path and guide their learnings..'
          }
        ]
      },
    },
    {
      path:'/resources',
      name:'resources',
      component: ResourcesView,
      meta: {
        title: 'Let You Develop - Resources Page',
        metaTags: [
          {
            name: 'description',
            content: 'Super Resources for Developers and Makers. We publish awesome resources for designers, developers, marketers and technology lovers.'
          },
          {
            property: 'og:description',
            content: 'Super Resources for Developers and Makers. We publish awesome resources for designers, developers, marketers and technology lovers.'
          }
        ]
      },
    },
    {
      path:'/thankssub',
      name:'thankssub',
      component: ThanksSub,
      meta: {
        title: 'Thanks Page - Thank you for subscribing!',
        metaTags: [
          {
            name: 'description',
            content: 'Thank you for subscribing!'
          },
          {
            property: 'og:description',
            content: 'Thank you for subscribing!'
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
      path:'/animationjslibraries',
      name:'animationjslibraries',
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
    {
      path:'/publicapis',
      name:'publicapis',
      component: PublicAPIs,
      meta: {
        title: 'Resources Public APIs',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/animalsapi',
      name:'animalsapi',
      component: AnimalsApi,
      meta: {
        title: 'Public APIs - Animals',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about animals for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about animals for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/animessapi',
      name:'animessapi',
      component: AnimesApi,
      meta: {
        title: 'Public APIs - Animes',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about animes for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about animes for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/antimalwaresapi',
      name:'antimalwaresapi',
      component: AntimalwaresApi,
      meta: {
        title: 'Public APIs - Animes',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about anti-malwares for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about anti-malwares for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/artdesignapi',
      name:'artdesignapi',
      component: ArtdesignApi,
      meta: {
        title: 'Public APIs - Art & design',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about art & design for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about art & design for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/authapis',
      name:'authapi',
      component: AuthApi,
      meta: {
        title: 'Public APIs - Authentication & authorization',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about authentication & authorization for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about authentication & authorization for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/blockchainapi',
      name:'blockchainapi',
      component: BlockchainApi,
      meta: {
        title: 'Public APIs - Blockchain',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about blockchain for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about blockchain for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/bookapi',
      name:'bookapi',
      component: BookApi,
      meta: {
        title: 'Public APIs - Books',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about books for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about books for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/businessapi',
      name:'businessapi',
      component: BusinessApi,
      meta: {
        title: 'Public APIs - Business',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about business for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about business for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/calendarapi',
      name:'calendarapi',
      component: CalendarApi,
      meta: {
        title: 'Public APIs - Business',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about calendars for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about calendars for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/cloudapi',
      name:'cloudapi',
      component: CloudApi,
      meta: {
        title: 'Public APIs - Cloud storage & file sharing',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about cloud storage & file sharing for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about cloud storage & file sharing for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/integrationapi',
      name:'integrationapi',
      component: IntegrationApi,
      meta: {
        title: 'Public APIs - Continuous Integration',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about continuous integration for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about continuous integration for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/cryptocurrencyapi',
      name:'cryptocurrencyapi',
      component: CryptocurrencyApi,
      meta: {
        title: 'Public APIs - Continuous Integration',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about cryptocurrency for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about cryptocurrency for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/exchangeapi',
      name:'exchangeapi',
      component: ExchangeApi,
      meta: {
        title: 'Public APIs - Currency Exchange',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about currency exchange for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about currency exchange for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/validationapi',
      name:'validationapi',
      component: ValidationApi,
      meta: {
        title: 'Public APIs - Data Validation',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about data validation for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about data validation for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/developmentapi',
      name:'developmentapi',
      component: DevelopmentApi,
      meta: {
        title: 'Public APIs - Development',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about development for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about development for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/dictionariesapi',
      name:'dictionariesapi',
      component: DictionariesApi,
      meta: {
        title: 'Public APIs - Dictionaries',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about dictionaries for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about dictionaries for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/productivityapi',
      name:'productivityapi',
      component: ProductivityApi,
      meta: {
        title: 'Public APIs - Productivity',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about productivity for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about productivity for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/emailapi',
      name:'emailapi',
      component: EmailApi,
      meta: {
        title: 'Public APIs - Email',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about email for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about email for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/entertainmentapi',
      name:'entertainmentapi',
      component: EntertainmentApi,
      meta: {
        title: 'Public APIs - Entertainment',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about entertainment for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about entertainment for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/environmentapi',
      name:'environmentapi',
      component: EnvironmentApi,
      meta: {
        title: 'Public APIs - Environment',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about environment for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about environment for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/eventsapi',
      name:'eventsapi',
      component: EventsApi,
      meta: {
        title: 'Public APIs - Events',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about events for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about events for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/financeapi',
      name:'financeapi',
      component: FinanceApi,
      meta: {
        title: 'Public APIs - Finance',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about finance for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about finance for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/fooddrinkapi',
      name:'fooddrinkapi',
      component: FoodDrinkApi,
      meta: {
        title: 'Public APIs - Food & Drink',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about food & drink for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about food & drink for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/gamescomicsapi',
      name:'gamescomicsapi',
      component: GamesComicsApi,
      meta: {
        title: 'Public APIs - Games & Comics',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about games & comics for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about games & comics for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/geocodingapi',
      name:'geocodingapi',
      component: GeocodingApi,
      meta: {
        title: 'Public APIs - Geocoding',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about geocoding for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about geocoding for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/governmentapi',
      name:'governmentapi',
      component: GovernmentApi,
      meta: {
        title: 'Public APIs - Government',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about government for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about government for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/healthapi',
      name:'healthapi',
      component: HealthApi,
      meta: {
        title: 'Public APIs - Health',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about healt for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about healt for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/jobsapi',
      name:'jobsapi',
      component: JobsApi,
      meta: {
        title: 'Public APIs - Jobs',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about jobs for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about jobs for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/machinelearningapi',
      name:'machinelearningapi',
      component: MachineLearningApi,
      meta: {
        title: 'Public APIs - Machine Learning',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about machine learning for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about machine learning for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/musicapi',
      name:'musicapi',
      component: MusicApi,
      meta: {
        title: 'Public APIs - Music',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about music for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about music for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/newsapi',
      name:'newsapi',
      component: NewsApi,
      meta: {
        title: 'Public APIs - News',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about news for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about news for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/opendataapi',
      name:'opendataapi',
      component: OpenDataApi,
      meta: {
        title: 'Public APIs - Open Data',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about open data for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about open data for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/opensourceapi',
      name:'opensourceapi',
      component: OpenSourceApi,
      meta: {
        title: 'Public APIs - Open Source Projects',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about open source projects for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about open source projects for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/patentapi',
      name:'patentapi',
      component: PatentApi,
      meta: {
        title: 'Public APIs - Patent',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about patent projects for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about patent projects for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/personalityapi',
      name:'personalityapi',
      component: PersonalityApi,
      meta: {
        title: 'Public APIs - Personality',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about personality projects for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about personality projects for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/phoneapi',
      name:'phoneapi',
      component: PhoneApi,
      meta: {
        title: 'Public APIs - Phone',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about phone projects for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about phone projects for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/photographyapi',
      name:'photographyapi',
      component: PhotographyApi,
      meta: {
        title: 'Public APIs - Photography',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about photography projects for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about photography projects for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/programmingapi',
      name:'programmingapi',
      component: ProgrammingApi,
      meta: {
        title: 'Public APIs - Programming',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about programming projects for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about programming projects for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/sciencemathapi',
      name:'sciencemathapi',
      component: ScienceMathApi,
      meta: {
        title: 'Public APIs - Science & Math',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about science & math projects for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about science & math projects for use in software and web development.'
          }
        ]
      },
    },
    {
      path:'/securityapi',
      name:'securityapi',
      component: SecurityApi,
      meta: {
        title: 'Public APIs - Security',
        metaTags: [
          {
            name: 'description',
            content: 'A collective list of free APIs about security projects for use in software and web development.'
          },
          {
            property: 'og:description',
            content: 'A collective list of free APIs about security projects for use in software and web development.'
          }
        ]
      },
    },
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
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
