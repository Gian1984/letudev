<template>
  <!-- Component Code -->
  <div class="relative h-screen w-full flex items-center justify-center bg-cover bg-center text-center" style="background-image:url(https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);">
  <div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

    <div class="z-50 flex flex-col justify-center items-center text-white w-full h-screen">
      <img class="hidden lg:block h-12 w-auto" src="../assets/img/letudev_logo_mini.png" alt="letudev_logo" />
      <h1 class="text-5xl mt-5">We are <b>Almost</b> there!</h1>
      <p>Stay tuned for something amazing!!!</p>
      <div v-for="anime in animes" :key="anime.api">
        <p>{{anime.href}}</p>
      </div>
    </div>

  </div>
</template>

<script>
const animals = [
      {
        api: "AdoptAPet",
        desc: "Resource to help get pets adopted",
        auth: "apiKey",
        https: "Yes",
        cors: "Yes",
        href: "https://www.adoptapet.com/public/apis/pet_list.html\""
      },
      {
        api: "Axolotl",
        desc: "Collection of axolotl pictures and facts",
        auth: "No",
        https: "Yes",
        cors: "No",
        href: "https://theaxolotlapi.netlify.app/"
      },
      {
        api: "Cat Facts",
        desc: "Daily cat facts",
        auth: "No",
        https: "Yes",
        cors: "No",
        href: "https://alexwohlbruck.github.io/cat-facts/"
      },
      {
        api: "Cataas",
        desc: "Cat as a service (cats pictures and gifs)",
        auth: "No",
        https: "Yes",
        cors: "No",
        href: "https://cataas.com/"
      },
      {
        api: "Cats",
        desc: "Pictures of cats from Tumblr",
        auth: "apiKey",
        https: "Yes",
        cors: "No",
        href: "https://docs.thecatapi.com/"
      },
      {
        api: "Dog Facts",
        desc: "Random dog facts",
        auth: "No",
        https: "Yes",
        cors: "Yes",
        href: "https://dukengn.github.io/Dog-facts-API/"
      },
      {
        api: "Dog Facts",
        desc: "Random facts of Dogs",
        auth: "No",
        https: "Yes",
        cors: "Yes",
        href: "https://kinduff.github.io/dog-api/"
      },
      {
        api: "Dogs",
        desc: "Based on the Stanford Dogs Dataset",
        auth: "No",
        https: "Yes",
        cors: "Yes",
        href: "https://dog.ceo/dog-api/"
      },
      {
        api: "eBird",
        desc: "Retrieve recent or notable birding observations within a region",
        auth: "apiKey",
        https: "Yes",
        cors: "No",
        href: "https://documenter.getpostman.com/view/664302/S1ENwy59"
      },
      {
        api: "FishWatch",
        desc: "Information and pictures about individual fish species",
        auth: "No",
        https: "Yes",
        cors: "Yes",
        href: "https://www.fishwatch.gov/developers"
      },
      {
        api: "HTTP Cat",
        desc: "Cat for every HTTP Status",
        auth: "No",
        https: "Yes",
        cors: "Yes",
        href: "https://http.cat/"
      },
      {
        api: "HTTP Dog",
        desc: "Dogs for every HTTP response status code",
        auth: "No",
        https: "Yes",
        cors: "Yes",
        href: "https://http.dog/"
      },
      {
        api: "IUCN",
        desc: "IUCN Red List of Threatened Species",
        auth: "apiKey",
        https: "No",
        cors: "No",
        href: "http://apiv3.iucnredlist.org/api/v3/docs"
      },
      {
        api: "MeowFacts",
        desc: "Get random cat facts",
        auth: "No",
        https: "Yes",
        cors: "No",
        href: "https://github.com/wh-iterabb-it/meowfacts"
      },
      {
        api: "Movebank",
        desc: "Movement and Migration data of animals",
        auth: "No",
        https: "Yes",
        cors: "Yes",
        href: "https://github.com/movebank/movebank-api-doc"
      },
      {
        api: "Petfinder",
        desc: "Petfinder is dedicated to helping pets find homes, another resource to get pets adopted",
        auth: "apiKey",
        https: "Yes",
        cors: "Yes",
        href: "https://www.petfinder.com/developers/"
      },
      {
        api: "PlaceBear",
        desc: "Placeholder bear pictures",
        auth: "No",
        https: "Yes",
        cors: "Yes",
        href: "https://placebear.com/"
      },
      {
        api: "PlaceDog",
        desc: "Placeholder Dog pictures",
        auth: "No",
        https: "Yes",
        cors: "Yes",
        href: "https://place.dog"
      },
      {
        api: "PlaceKitten",
        desc: "Placeholder Kitten pictures",
        auth: "No",
        https: "Yes",
        cors: "Yes",
        href: "https://placekitten.com/"
      },
      {
        api: "RandomDog",
        desc: "Random pictures of dogs",
        auth: "No",
        https: "Yes",
        cors: "Yes",
        href: "https://random.dog/woof.json"
      },
      {
        api: "RandomDuck",
        desc: "Random pictures of ducks",
        auth: "No",
        https: "Yes",
        cors: "No",
        href: "https://random-d.uk/api"
      },
      {
        api: "RandomFox",
        desc: "Random pictures of foxes",
        auth: "No",
        https: "Yes",
        cors: "No",
        href: "https://randomfox.ca/floof/"
      },
      {
        api: "RescueGroups",
        desc: "Adoption",
        auth: "No",
        https: "Yes",
        cors: "Unknown",
        href: "https://userguide.rescuegroups.org/display/APIDG/API+Developers+Guide+Home"
      },
      {
        api: "Shibe.Online",
        desc: "Random pictures of Shiba Inu, cats or birds",
        auth: "No",
        https: "Yes",
        cors: "Yes",
        href: "http://shibe.online/"
      },
      {
        api: "The Dog",
        desc: "A public service all about Dogs, free to use when making your fancy new App, Website or Service",
        auth: "apiKey",
        https: "Yes",
        cors: "No",
        href: "https://thedogapi.com/"
      },
      {
        api: "xeno-canto",
        desc: "Bird recordings",
        auth: "No",
        https: "Yes",
        cors: "Unknown",
        href: "https://xeno-canto.org/explore/api"
      },
      {
        api: "Zoo Animals",
        desc: "Facts and pictures of zoo animals",
        auth: "No",
        https: "Yes",
        cors: "Yes",
        href: "https://zoo-animal-api.herokuapp.com/"
      }
    ]

const animes = [
  {
    "api": "AniAPI",
    "desc": "Anime discovery, streaming &amp; syncing with trackers",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://aniapi.com/docs/"
  },
  {
    "api": "AniDB",
    "desc": "Anime Database",
    "auth": "apiKey",
    "https": "No",
    "cors": "Unknown",
    "href": "https://wiki.anidb.net/HTTP_API_Definition"
  },
  {
    "api": "AniList",
    "desc": "Anime discovery &amp; tracking",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://github.com/AniList/ApiV2-GraphQL-Docs"
  },
  {
    "api": "AnimeChan",
    "desc": "Anime quotes (over 10k+)",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://github.com/RocktimSaikia/anime-chan"
  },
  {
    "api": "AnimeFacts",
    "desc": "Anime Facts (over 100+)",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://chandan-02.github.io/anime-facts-rest-api/"
  },
  {
    "api": "AnimeNewsNetwork",
    "desc": "Anime industry news",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.animenewsnetwork.com/encyclopedia/api.php"
  },
  {
    "api": "Catboy",
    "desc": "Neko images, funny GIFs &amp; more",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://catboys.com/api"
  },
  {
    "api": "Danbooru Anime",
    "desc": "Thousands of anime artist database to find good anime art",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://danbooru.donmai.us/wiki_pages/help:api"
  },
  {
    "api": "Jikan",
    "desc": "Unofficial MyAnimeList API",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://jikan.moe"
  },
  {
    "api": "Kitsu",
    "desc": "Anime discovery platform",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://kitsu.docs.apiary.io/"
  },
  {
    "api": "MangaDex",
    "desc": "Manga Database and Community",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://api.mangadex.org/docs.html"
  },
  {
    "api": "Mangapi",
    "desc": "Translate manga pages from one language to another",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://rapidapi.com/pierre.carcellermeunier/api/mangapi3/"
  },
  {
    "api": "MyAnimeList",
    "desc": "Anime and Manga Database and Community",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://myanimelist.net/clubs.php?cid=13727"
  },
  {
    "api": "NekosBest",
    "desc": "Neko Images &amp; Anime roleplaying GIFs",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://docs.nekos.best"
  },
  {
    "api": "Shikimori",
    "desc": "Anime discovery, tracking, forum, rates",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://shikimori.one/api/doc"
  },
  {
    "api": "Studio Ghibli",
    "desc": "Resources from Studio Ghibli films",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://ghibliapi.herokuapp.com"
  },
  {
    "api": "Trace Moe",
    "desc": "A useful tool to get the exact scene of an anime from a screenshot",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://soruly.github.io/trace.moe-api/#/"
  },
  {
    "api": "Waifu.im",
    "desc": "Get waifu pictures from an archive of over 4000 images and multiple tags",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://waifu.im/docs"
  },
  {
    "api": "Waifu.pics",
    "desc": "Image sharing platform for anime images",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://waifu.pics/docs"
  }
]

const antiMalwares = [
  {
    "api": "AbuseIPDB",
    "desc": "IP/domain/URL reputation",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.abuseipdb.com/"
  },
  {
    "api": "AlienVault Open Threat Exchange (OTX)",
    "desc": "IP/domain/URL reputation",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://otx.alienvault.com/api"
  },
  {
    "api": "CAPEsandbox",
    "desc": "Malware execution and analysis",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://capev2.readthedocs.io/en/latest/usage/api.html"
  },
  {
    "api": "Google Safe Browsing",
    "desc": "Google Link/Domain Flagging",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developers.google.com/safe-browsing/"
  },
  {
    "api": "MalDatabase",
    "desc": "Provide malware datasets and threat intelligence feeds",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://maldatabase.com/api-doc.html\" rel"
  },
  {
    "api": "MalShare",
    "desc": "Malware Archive / file sourcing",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "No",
    "href": "https://malshare.com/doc.php"
  },
  {
    "api": "MalwareBazaar",
    "desc": "Collect and share malware samples",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://bazaar.abuse.ch/api/"
  },
  {
    "api": "Metacert",
    "desc": "Metacert Link Flagging",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://metacert.com/"
  },
  {
    "api": "NoPhishy",
    "desc": "Check links to see if they're known phishing attempts",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://rapidapi.com/Amiichu/api/exerra-phishing-check/"
  },
  {
    "api": "Phisherman",
    "desc": "IP/domain/URL reputation",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://phisherman.gg/"
  },
  {
    "api": "Scanii",
    "desc": "Simple REST API that can scan submitted documents/files for the presence of threats",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "ttps://docs.scanii.com/"
  },
  {
    "api": "URLhaus",
    "desc": "Bulk queries and Download Malware Samples",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://urlhaus-api.abuse.ch/"
  },
  {
    "api": "URLScan.io",
    "desc": "Scan and Analyse URLs",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://urlscan.io/about-api/"
  },
  {
    "api": "VirusTotal",
    "desc": "VirusTotal File/URL Analysis",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.virustotal.com/en/documentation/public-api/"
  },
  {
    "api": "Web of Trust",
    "desc": "IP/domain/URL reputation",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://support.mywot.com/hc/en-us/sections/360004477734-API-"
  }
]

const artDesigns = [
  {
    "api": "Améthyste",
    "desc": "Generate images for Discord users",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://api.amethyste.moe/"
  },
  {
    "api": "Art Institute of Chicago",
    "desc": "Art",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://api.artic.edu/docs/"
  },
  {
    "api": "Colormind",
    "desc": "Color scheme generator",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "http://colormind.io/api-access/"
  },
  {
    "api": "ColourLovers",
    "desc": "Get various patterns, palettes and images",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "http://www.colourlovers.com/api"
  },
  {
    "api": "Cooper Hewitt",
    "desc": "Smithsonian Design Museum",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://collection.cooperhewitt.org/api"
  },
  {
    "api": "Dribbble",
    "desc": "Discover the world’s top designers &amp; creatives",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developer.dribbble.com"
  },
  {
    "api": "EmojiHub",
    "desc": "Get emojis by categories and groups",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://github.com/cheatsnake/emojihub"
  },
  {
    "api": "Europeana",
    "desc": "European Museum and Galleries content",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://pro.europeana.eu/resources/apis/search"
  },
  {
    "api": "Harvard Art Museums",
    "desc": "Art",
    "auth": "apiKey",
    "https": "No",
    "cors": "Unknown",
    "href": "https://github.com/harvardartmuseums/api-docs"
  },
  {
    "api": "Icon Horse",
    "desc": "Favicons for any website, with fallbacks",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://icon.horse"
  },
  {
    "api": "Iconfinder",
    "desc": "Icons",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developer.iconfinder.com"
  },
  {
    "api": "Icons8",
    "desc": "Icons (find \"search icon\" hyperlink in page)",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://img.icons8.com/"
  },
  {
    "api": "Lordicon",
    "desc": "Icons with predone Animations",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://lordicon.com/"
  },
  {
    "api": "Metropolitan Museum of Art",
    "desc": "Met Museum of Art",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://metmuseum.github.io/"
  },
  {
    "api": "Noun Project",
    "desc": "Icons",
    "auth": "OAuth",
    "https": "No",
    "cors": "Unknown",
    "href": "http://api.thenounproject.com/index.html"
  },
  {
    "api": "PHP-Noise",
    "desc": "Noise Background Image Generator",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://php-noise.com/"
  },
  {
    "api": "Pixel Encounter",
    "desc": "SVG Icon Generator",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "ttps://pixelencounter.com/api"
  },
  {
    "api": "Rijksmuseum",
    "desc": "RijksMuseum Data",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://data.rijksmuseum.nl/object-metadata/api/"
  },
  {
    "api": "Word Cloud",
    "desc": "Easily create word clouds",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://wordcloudapi.com/"
  },
  {
    "api": "xColors",
    "desc": "Generate &amp; convert colors",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://x-colors.herokuapp.com/"
  }
]

const auths = [
  {
    "api": "Auth0",
    "desc": "Easy to implement, adaptable authentication and authorization platform",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://auth0.com"
  },
  {
    "api": "GetOTP",
    "desc": "Implement OTP flow quickly",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "No",
    "href": "https://otp.dev/en/docs/"
  },
  {
    "api": "Micro User Service",
    "desc": "User management and authentication",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "No",
    "href": "https://m3o.com/user"
  },
  {
    "api": "MojoAuth",
    "desc": "Secure and modern passwordless authentication platform",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://mojoauth.com"
  },
  {
    "api": "SAWO Labs",
    "desc": "Simplify login and improve user experience by integrating passwordless authentication in your app",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://sawolabs.com"
  },
  {
    "api": "Stytch",
    "desc": "User infrastructure for modern applications",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "No",
    "href": "https://stytch.com/"
  },
  {
    "api": "Warrant",
    "desc": "APIs for authorization and access control",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://warrant.dev/"
  }
]

export default {
  setup() {
    return {
      animals,
      animes,
      antiMalwares,
      artDesigns,
      auths
    }
  },


}
</script>
