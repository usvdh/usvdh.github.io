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
          description: "A small selection of past projects",
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
        },{id: "post-an-open-letter-to-all-hku-students-personnel-and-board",
      
        title: "An open letter to all HKU students, personnel, and board",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/hku-open-letter/";
        
      },
    },{id: "post-how-to-leave-instagram-without-leaving-your-friends-an-introduction-to-the-fediverse",
      
        title: "How to leave Instagram without leaving your friends. An introduction to the Fediverse....",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/leaving-meta/";
        
      },
    },{id: "post-hoe-je-instagram-kunt-verlaten-zonder-je-vrienden-te-verlaten-een-introductie-aan-de-fediverse",
      
        title: "Hoe je Instagram kunt verlaten zonder je vrienden te verlaten. Een introductie aan...",
      
      description: "",
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
            },},{id: "projects-march-25th-2025",
          title: 'March 25th 2025',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/datavisualisatie/";
            },},{id: "projects-digitalfrontier-cc",
          title: 'digitalfrontier.cc',
          description: "a central collection of resources (concepts, movements, and initiatives) on navigating today&#39;s digital landscape.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/digitalfrontier/";
            },},{id: "projects-march-13th-2025",
          title: 'March 13th 2025',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fieldrecording-14mar2025/";
            },},{id: "projects-fpp-paradiso-untitled",
          title: 'FPP Paradiso - Untitled',
          description: "In collaboration with Joni van de Griendt. A project about the influence of mobile phones on our daily lives.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fpp-paradiso/";
            },},{id: "projects-hakubo-i",
          title: 'Hakubo I',
          description: "Generative algorithmic audio-visual installation in collaboration with Allard Hebbink.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hakubo/";
            },},{id: "projects-i-light-u-2024-hoog-catharijne",
          title: 'I LIGHT U 2024 - Hoog Catharijne',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ilightu2024/";
            },},{id: "projects-plant-cohabitation",
          title: 'Plant Cohabitation',
          description: "In our daily lives, we coexist with more organisms than we realise.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/plantcohabitation/";
            },},{id: "projects-uncloud-dj-set-stranded-fm",
          title: 'Uncloud DJ Set (Stranded.fm)',
          description: "Amateur post-club, ambient and trance DJ set",
          section: "Projects",handler: () => {
              window.location.href = "/projects/uncloud-dj-set/";
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
