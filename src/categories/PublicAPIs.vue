<template>
  <!-- Component Code -->
  <div class="relative h-screen w-full flex items-center justify-center bg-cover bg-center text-center" style="background-image:url(https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);">
  <div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

    <div class="z-50 flex flex-col justify-center items-center text-white w-full h-screen">
      <img class="hidden lg:block h-12 w-auto" src="../assets/img/letudev_logo_mini.png" alt="letudev_logo" />
      <h1 class="text-5xl mt-5">We are <b>Almost</b> there!</h1>
      <p>Stay tuned for something amazing!!!</p>
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

export default {
  setup() {
    return {
      animals,
    }
  },


}
</script>
