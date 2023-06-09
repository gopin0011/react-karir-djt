/*!

=========================================================
* Paper Dashboard React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Maps from "views/Map.js";
import UserPage from "views/User.js";
import Options from "views/Options.js";

// export var userRoutes = 
//   [,,
//     [{
//         path: "/dashboard",
//         name: "Dashboard",
//         icon: "nc-icon nc-bank",
//         component: Dashboard,
//         layout: "/admin"
//       },
//       {
//         path: "/icons",
//         name: "Icons",
//         icon: "nc-icon nc-diamond",
//         component: Icons,
//         layout: "/admin",
//         childItems: [
//           { 
//             name: 'Option 1', 
//             path: '/options', 
//             layout: "/admin", 
//             icon: "OP",
//             component: Options,
//           },
//           { 
//             name: 'Option 2', 
//             path: '/options2', 
//             layout: "/admin", 
//             icon: "OP",
//             component: Options,
//           },
//           { 
//             name: 'Option 3', 
//             path: '/options3', 
//             layout: "/admin", 
//             icon: "OP",
//             component: Options,
//           },
//         ]
//       },
//       {
//         path: "/maps",
//         name: "Maps",
//         icon: "nc-icon nc-pin-3",
//         component: Maps,
//         layout: "/admin"
//       },
//       {
//         path: "/notifications",
//         name: "Notifications",
//         icon: "nc-icon nc-bell-55",
//         component: Notifications,
//         layout: "/admin"
//       },
//       {
//         path: "/user-page",
//         name: "User Profile",
//         icon: "nc-icon nc-single-02",
//         component: UserPage,
//         layout: "/admin"
//       },
//       {
//         path: "/tables",
//         name: "Table List",
//         icon: "nc-icon nc-tile-56",
//         component: TableList,
//         layout: "/admin"
//       },
//       {
//         path: "/typography",
//         name: "Typography",
//         icon: "nc-icon nc-caps-small",
//         component: Typography,
//         layout: "/admin"
//       }
//     ]
//   ];

export var routesSecond = [
  {
    path: "/text",
    name: "Text",
    component: Notifications,
    layout: "/admin"
  },

];

export var userRoutes = 
  [,,
    { Menu1 : [{
        path: "/dashboard",
        name: "Dashboard",
        icon: "nc-icon nc-bank",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/icons",
        name: "Icons",
        icon: "nc-icon nc-diamond",
        component: Icons,
        layout: "/admin",
        childItems: [
          { 
            name: 'Option 1', 
            path: '/options', 
            layout: "/admin", 
            icon: "OP",
            component: Options,
          },
          { 
            name: 'Option 2', 
            path: '/options2', 
            layout: "/admin", 
            icon: "OP",
            component: Options,
          },
          { 
            name: 'Option 3', 
            path: '/options3', 
            layout: "/admin", 
            icon: "OP",
            component: Options,
          },
        ]
      },
      {
        path: "/maps",
        name: "Maps",
        icon: "nc-icon nc-pin-3",
        component: Maps,
        layout: "/admin"
      },
      {
        path: "/notifications",
        name: "Notifications",
        icon: "nc-icon nc-bell-55",
        component: Notifications,
        layout: "/admin"
      },
      {
        path: "/user-page",
        name: "User Profile",
        icon: "nc-icon nc-single-02",
        component: UserPage,
        layout: "/admin"
      },
      {
        path: "/tables",
        name: "Table List",
        icon: "nc-icon nc-tile-56",
        component: TableList,
        layout: "/admin"
      },
      {
        path: "/typography",
        name: "Typography",
        icon: "nc-icon nc-caps-small",
        component: Typography,
        layout: "/admin"
      }
    ],
    Menu2: [
      {
        path: "/tables",
        name: "Users",
        icon: "ni ni-circle-08 text-pink",
        component: TableList,
        layout: "/admin",
      },
      {
        path: "/typography",
        name: "Logs",
        icon: "ni ni-align-left-2 text-blue",
        component: Typography,
        layout: "/admin",
      },
    ]}
  ]
;