import Dashboard from '../scenes/dashboard';
import ClientFacingPageLayout from '../scenes/clientFacing/ClientFacingPageLayout';
import {
  Geography,
  Customers,
  Products,
  Transactions
} from '../scenes/clientFacing';

// ICONS
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const appRoutes = [
  {
    path: "/"
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    state: "dashboard",
    sidebarProps: {
      displayText: "dashboard",
      icon: <FileDownloadOutlinedIcon />
    }
  },
  {
    path: "/clientFacing",
    element: <ClientFacingPageLayout />,
    state: "clientFacing",
    sidebarProps: {
      displayText: "clientFacing",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      // {
      //   index: true,
      //   element: <DashboardIndex />,
      //   state: "dashboard.index"
      // },
      {
        path: "/clientFacing/products",
        element: <Products />,
        state: "dashboard.default",
        sidebarProps: {
          displayText: "Products"
        },
      },
      {
        path: "/clientFacing/customers",
        element: <Customers />,
        state: "dashboard.customers",
        sidebarProps: {
          displayText: "Customers"
        }
      },
      {
        path: "/clientFacing/transactions",
        element: <Transactions />,
        state: "dashboard.transactions",
        sidebarProps: {
          displayText: "Transactions"
        }
      },
      {
        path: "/clientFacing/geography",
        element: <Geography />,
        state: "dashboard.geography",
        sidebarProps: {
          displayText: "Geography"
        }
      }
    ]
  },
];

export default appRoutes;