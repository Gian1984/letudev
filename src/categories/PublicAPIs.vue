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

const blockchains = [
  {
    "API": "Bitquery",
    "desc": "Onchain GraphQL APIs &amp; DEX APIs",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://graphql.bitquery.io/ide"
  },
  {
    "API": "Chainlink",
    "desc": "Build hybrid smart contracts with Chainlink",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://chain.link/developer-resources"
  },
  {
    "API": "Chainpoint",
    "desc": "Chainpoint is a global network for anchoring data to the Bitcoin blockchain",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://tierion.com/chainpoint/"
  },
  {
    "API": "Covalent",
    "desc": "Multi-blockchain data aggregator platform",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.covalenthq.com/docs/api/"
  },
  {
    "API": "Etherscan",
    "desc": "Ethereum explorer API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://etherscan.io/apis"
  },
  {
    "API": "Helium",
    "desc": "Helium is a global, distributed network of Hotspots that create public, long-range wireless coverage",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.helium.com/api/blockchain/introduction/"
  },
  {
    "API": "Nownodes",
    "desc": "Blockchain-as-a-service solution that provides high-quality connection via API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://nownodes.io/"
  },
  {
    "API": "Steem",
    "desc": "Blockchain-based blogging and social media website",
    "auth": "No",
    "https": "No",
    "cors": "No",
    "href": "https://developers.steem.io/"
  },
  {
    "API": "The Graph",
    "desc": "Indexing protocol for querying networks like Ethereum with GraphQL",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://thegraph.com"
  },
  {
    "API": "Walltime",
    "desc": "To retrieve Walltime's market info",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://walltime.info/api.html"
  },
  {
    "API": "Watchdata",
    "desc": "Provide simple and reliable API access to Ethereum blockchain",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.watchdata.io"
  }
]

const books = [
  {
    "api": "A Bíblia Digital",
    "desc": "Do not worry about managing the multiple versions of the Bible",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "No",
    "href": "https://www.abibliadigital.com.br/en"
  },
  {
    "api": "Bhagavad Gita",
    "desc": "Open Source Shrimad Bhagavad Gita API including 21+ authors translation in Sanskrit/English/Hindi",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://docs.bhagavadgitaapi.in"
  },
  {
    "api": "Bhagavad Gita",
    "desc": "Bhagavad Gita text",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://bhagavadgita.io/api"
  },
  {
    "api": "Bhagavad Gita telugu",
    "desc": "Bhagavad Gita API in telugu and odia languages",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://gita-api.vercel.app"
  },
  {
    "api": "Bible-api",
    "desc": "Free Bible API with multiple languages",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://bible-api.com/"
  },
  {
    "api": "British National Bibliography",
    "desc": "Books",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "http://bnb.data.bl.uk/"
  },
  {
    "api": "Crossref Metadata Search",
    "desc": "Books & Articles Metadata",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://github.com/CrossRef/rest-api-doc"
  },
  {
    "api": "Ganjoor",
    "desc": "Classic Persian poetry works including access to related manuscripts, recitations and music tracks",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://api.ganjoor.net"
  },
  {
    "api": "Google Books",
    "desc": "Books",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developers.google.com/books/"
  },
  {
    "api": "GurbaniNow",
    "desc": "Fast and Accurate Gurbani RESTful API",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://github.com/GurbaniNow/api"
  },
  {
    "api": "Gutendex",
    "desc": "Web-API for fetching data from Project Gutenberg Books Library",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://gutendex.com/"
  },
  {
    "api": "Open Library",
    "desc": "Books, book covers and related data",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://openlibrary.org/developers/api"
  },
  {
    "api": "Penguin Publishing",
    "desc": "Books, book covers and related data",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "http://www.penguinrandomhouse.biz/webservices/rest/"
  },
  {
    "api": "PoetryDB",
    "desc": "Enables you to get instant data from our vast poetry collection",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://github.com/thundercomb/poetrydb#readme"
  },
  {
    "api": "Quran",
    "desc": "RESTful Quran API with multiple languages",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://quran.api-docs.io/"
  },
  {
    "api": "Quran Cloud",
    "desc": "A RESTful Quran API to retrieve an Ayah, Surah, Juz or the entire Holy Quran",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://alquran.cloud/api"
  },
  {
    "api": "Quran-api",
    "desc": "Free Quran API Service with 90+ different languages and 400+ translations",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://github.com/fawazahmed0/quran-api#readme"
  },
  {
    "api": "Rig Veda",
    "desc": "Gods and poets, their categories, and the verse meters, with the mandal and sukta number",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://aninditabasu.github.io/indica/html/rv.html"
  },
  {
    "api": "The Bible",
    "desc": "Everything you need from the Bible in one discoverable place",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.api.bible"
  },
  {
    "api": "Thirukkural",
    "desc": "1330 Thirukkural poems and explanation in Tamil and English",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://api-thirukkural.web.app/"
  },
  {
    "api": "Vedic Society",
    "desc": "Descriptions of all nouns (names, places, animals, things) from vedic literature",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://aninditabasu.github.io/indica/html/vs.html"
  },
  {
    "api": "Wizard World",
    "desc": "Get information from the Harry Potter universe",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://wizard-world-api.herokuapp.com/swagger/index.html"
  },
  {
    "api": "Wolne Lektury",
    "desc": "API for obtaining information about e-books available on the WolneLektury.pl website",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://wolnelektury.pl/api/"
  }
]

const business =[
  {
    "api": "Apache Superset",
    "desc": "API to manage your BI dashboards and data sources on Superset",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://superset.apache.org/docs/api"
  },
  {
    "api": "Charity Search",
    "desc": "Non-profit charity data",
    "auth": "apiKey",
    "https": "No",
    "cors": "Unknown",
    "href": "http://charityapi.orghunter.com/"
  },
  {
    "api": "Clearbit Logo",
    "desc": "Search for company logos and embed them in your projects",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://clearbit.com/docs#logo-api"
  },
  {
    "api": "Domainsdb.info",
    "desc": "Registered Domain Names Search",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://domainsdb.info/"
  },
  {
    "api": "Freelancer",
    "desc": "Hire freelancers to get work done",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developers.freelancer.com"
  },
  {
    "api": "Gmail",
    "desc": "Flexible, RESTful access to the user's inbox",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developers.google.com/gmail/api/"
  },
  {
    "api": "Google Analytics",
    "desc": "Collect, configure and analyze your data to reach the right audience",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developers.google.com/gmail/api/"
  },
  {
    "api": "Instatus",
    "desc": "Post to and update maintenance and incidents on your status page through an HTTP REST API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://instatus.com/help/api"
  },
  {
    "api": "Mailchimp",
    "desc": "Send marketing campaigns and transactional mails",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://mailchimp.com/developer/"
  },
  {
    "api": "mailjet",
    "desc": "Marketing email can be sent and mail templates made in MJML or HTML can be sent using API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.mailjet.com/"
  },
  {
    "api": "markerapi",
    "desc": "Trademark Search",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "https://markerapi.com"
  },
  {
    "api": "ORB Intelligence",
    "desc": "Company lookup",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://api.orb-intelligence.com/docs/"
  },
  {
    "api": "Redash",
    "desc": "Access your queries and dashboards on Redash",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://redash.io/help/user-guide/integrations-and-api/api"
  },
  {
    "api": "Smartsheet",
    "desc": "Allows you to programmatically access and Smartsheet data and account information",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "No",
    "href": "https://smartsheet.redoc.ly/"
  },
  {
    "api": "Square",
    "desc": "Easy way to take payments, manage refunds, and help customers checkout online",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developer.squareup.com/reference/square"
  },
  {
    "api": "SwiftKanban",
    "desc": "Kanban software, Visualize Work, Increase Organizations Lead Time, Throughput &amp; Productivity",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.digite.com/knowledge-base/swiftkanban/article/api-for-swift-kanban-web-services/#restapi"
  },
  {
    "api": "Tenders in Hungary",
    "desc": "Get data for procurements in Hungary in JSON format",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://tenders.guru/hu/api"
  },
  {
    "api": "Tenders in Poland",
    "desc": "Get data for procurements in Poland in JSON format",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://tenders.guru/pl/api"
  },
  {
    "api": "Tenders in Romania",
    "desc": "Get data for procurements in Romania in JSON format",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://tenders.guru/ro/api"
  },
  {
    "api": "Tenders in Spain",
    "desc": "Get data for procurements in Spain in JSON format",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://tenders.guru/es/api"
  },
  {
    "api": "Tenders in Ukraine",
    "desc": "Get data for procurements in Ukraine in JSON format",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://tenders.guru/ua/api"
  },
  {
    "api": "Tomba email finder",
    "desc": "Email Finder for B2B sales and email marketing and email verifier",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://tomba.io/api"
  },
  {
    "api": "Trello",
    "desc": "Boards, lists and cards to help you organize and prioritize your projects",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developers.trello.com/"
  }
]

const calendars = [
  {
    "api": "Abstract Public Holidays",
    "desc": "Data on national, regional, and religious holidays via API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://www.abstractapi.com/holidays-api"
  },
  {
    "api": "Calendarific",
    "desc": "Worldwide Holidays",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://calendarific.com/"
  },
  {
    "api": "Church Calendar",
    "desc": "Catholic liturgical calendar",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "http://calapi.inadiutorium.cz/"
  },
  {
    "api": "Czech Namedays Calendar",
    "desc": "Lookup for a name and returns nameday date",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "https://svatky.adresa.info"
  },
  {
    "api": "Festivo Public Holidays",
    "desc": "Fastest and most advanced public holiday and observance service on the market",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://docs.getfestivo.com/docs/products/public-holidays-api/intro"
  },
  {
    "api": "Google Calendar",
    "desc": "Display, create and modify Google calendar events",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developers.google.com/google-apps/calendar/"
  },
  {
    "api": "Hebrew Calendar",
    "desc": "Convert between Gregorian and Hebrew, fetch Shabbat and Holiday times, etc",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "https://www.hebcal.com/home/developer-apis"
  },
  {
    "api": "Holidays",
    "desc": "Historical data regarding holidays",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://holidayapi.com/"
  },
  {
    "api": "LectServe",
    "desc": "Protestant liturgical calendar",
    "auth": "No",
    "https": "No",
    "cors": "Unknown",
    "href": "http://www.lectserve.com"
  },
  {
    "api": "Nager.Date",
    "desc": "Public holidays for more than 90 countries",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://date.nager.at"
  },
  {
    "api": "Namedays Calendar",
    "desc": "Provides namedays for multiple countries",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://nameday.abalin.net"
  },
  {
    "api": "Non-Working Days",
    "desc": "Database of ICS files for non working days",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://github.com/gadael/icsdb"
  },
  {
    "api": "Non-Working Days",
    "desc": "Simple REST API for checking working, non-working or short days for Russia, CIS, USA and other",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://isdayoff.ru"
  },
  {
    "api": "Russian Calendar",
    "desc": "Check if a date is a Russian holiday or not",
    "auth": "No",
    "https": "Yes",
    "cors": "No",
    "href": "https://github.com/egno/work-calendar"
  },
  {
    "api": "UK Bank Holidays",
    "desc": "Bank holidays in England and Wales, Scotland and Northern Ireland",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.gov.uk/bank-holidays.json"
  }
]

const storeShare = [
  {
    "api": "AnonFiles",
    "desc": "Upload and share your files anonymously",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://anonfiles.com/docs/api"
  },
  {
    "api": "BayFiles",
    "desc": "Upload and share your files",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://bayfiles.com/docs/api"
  },
  {
    "api": "Box",
    "desc": "File Sharing and Storage",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developer.box.com/"
  },
  {
    "api": "ddownload",
    "desc": "File Sharing and Storage",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://ddownload.com/api"
  },
  {
    "api": "Dropbox",
    "desc": "File Sharing and Storage",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.dropbox.com/developers"
  },
  {
    "api": "File.io",
    "desc": "Super simple file sharing, convenient, anonymous and secure",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://www.file.io"
  },
  {
    "api": "GoFile",
    "desc": "Unlimited size file uploads for free",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://gofile.io/api"
  },
  {
    "api": "Google Drive",
    "desc": "File Sharing and Storage",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developers.google.com/drive/"
  },
  {
    "api": "Gyazo",
    "desc": "Save &amp; Share screen captures instantly",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://gyazo.com/api/docs"
  },
  {
    "api": "Imgbb",
    "desc": "Simple and quick private image sharing",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://api.imgbb.com/"
  },
  {
    "api": "OneDrive",
    "desc": "File Sharing and Storage",
    "auth": "OAuth",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://developer.microsoft.com/onedrive"
  },
  {
    "api": "Pantry",
    "desc": "Free JSON storage for small projects",
    "auth": "No",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://getpantry.cloud/"
  },
  {
    "api": "Pastebin",
    "desc": "Plain Text Storage",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://pastebin.com/doc_api"
  },
  {
    "api": "Pinata",
    "desc": "IPFS Pinning Services API",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.pinata.cloud/"
  },
  {
    "api": "Quip",
    "desc": "File Sharing and Storage for groups",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://quip.com/dev/automation/documentation"
  },
  {
    "api": "Storj",
    "desc": "Decentralized Open-Source Cloud Storage",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://docs.storj.io/dcs/"
  },
  {
    "api": "The Null Pointer",
    "desc": "No-bullshit file hosting and URL shortening service",
    "auth": "No",
    "https": "Yes",
    "cors": "Unknown",
    "href": "https://0x0.st"
  },
  {
    "api": "Web3 Storage",
    "desc": "File Sharing and Storage for Free with 1TB Space",
    "auth": "apiKey",
    "https": "Yes",
    "cors": "Yes",
    "href": "https://web3.storage/"
  }
]

export default {
  setup() {
    return {
      animals,
      animes,
      antiMalwares,
      artDesigns,
      auths,
      blockchains,
      books,
      business,
      calendars,
      storeShare
    }
  },


}
</script>
