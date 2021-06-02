const settings = {
  name: "chakra-react",
  state: {
    frontity: {
      url: "https://trevormearnssource.cyou/wp-json",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development"
    }
  },
  packages: [
    {
      name: "frontity-chakra-theme",
      state: {
        theme: {
          logo: "Trevor Mearns",
          menu: [
            // ["Blog", "/category/travel/"],
            ["Contact", "/contact-trevor/"],
            //  ["Portfolio", "/about-us/"],
            //   ["Github", "/category/nature/"],
            ["Banana", "/banana"]
          ],
          socialLinks: [
            ["pinterest", "https://www.pinterest.com/frontity/"],
            ["facebook", "https://www.instagram.com/frontity/"],
            ["twitter", "https://www.twitter.com/frontity/"]
          ],
          featured: {
            showOnArchive: true,
            showOnPost: true
          }
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "http://trevormearnssource.cyou/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
