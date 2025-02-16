// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-how-to-leave-instagram-without-leaving-your-friends-an-introduction-to-the-fediverse",
      
        title: "How to leave Instagram without leaving your friends. An introduction to the Fediverse....",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/leaving-meta/";
        
      },
    },{id: "post-hoe-verlaat-je-instagram-zonder-je-vrienden-te-verlaten-een-introductie-aan-de-fediverse",
      
        title: "Hoe verlaat je Instagram zonder je vrienden te verlaten? Een introductie aan de...",
      
      description: "(NL)",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/leaving-meta-nl/";
        
      },
    },{id: "post-field-recordings-i",
      
        title: "Field Recordings I",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/fieldrecordings-i/";
        
      },
    },{id: "news-plant-cohabitation-featured-on-the-hku-newsletter",
          title: 'Plant Cohabitation featured on the HKU Newsletter!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/plant-cohabitation-featured/";
            },},{id: "news-uncloud-dj-set-at-stranded-fm",
          title: 'Uncloud DJ Set at Stranded.fm',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/uncloud-dj-set-stranded-fm/";
            },},{id: "news-hakubo-i-will-be-exhibited-at-error030-kabul-à-gogo",
          title: 'Hakubo I will be exhibited at ERROR030 KABUL à GoGo',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/hakubo-error030/";
            },},{id: "projects-plant-cohabitation",
          title: 'Plant Cohabitation',
          description: "In our daily lives, we coexist with more organisms than we realise. The plant that we often see as decoration makes sounds beyond our audible range that many mammals and insects can hear. Their presence in our environment is much greater than we think.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-fpp-paradiso-untitled",
          title: 'FPP Paradiso - Untitled',
          description: "In collaboration with Joni van de Griendt. A project about the influence of mobile phones on our daily lives.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-i-light-u-2024-hoog-catharijne",
          title: 'I LIGHT U 2024 - Hoog Catharijne',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%30%39-%63%6F%72%65%73.%6F%78%79%67%65%6E@%69%63%6C%6F%75%64.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/usvdh", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/senvanderheide", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/senvanderheide", "_blank");
        },
      },{
        id: 'social-mastodon',
        title: 'Mastodon',
        section: 'Socials',
        handler: () => {
          window.open("https://usvdh@kolektiva.social", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@usvdh", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
