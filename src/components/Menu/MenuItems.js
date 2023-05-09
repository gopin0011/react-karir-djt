export const menuItems = [
    {
      title: 'Home',
      url: 'dashboard',
    },
    {
      title: 'About',
      url: 'about',
    },
    {
      title: 'Services',
      // url: '/services',
      submenu: [
        {
          title: 'web design',
          url: 'web-design',
        },
        {
          title: 'web development',
          // url: 'web-dev',
          submenu: [
            {
              title: 'NodeJS',
              url: 'node',
            },
            {
              title: 'PHP',
              url: 'php',
            },
          ],
        },
        {
          title: 'SEO',
          url: 'seo',
        },
      ],
    }
  ];