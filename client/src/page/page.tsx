// import Blacklist from "./Blacklist";
import Group from "./Group";
import MainPage from "./MainPage";
import PayOut from "./PayOut";
import Payment from "./Payment";
import Students from "./Students";
import Teachers from "./Teachers";
import User from "./User";

const children = [
  {
    path: "/admin",
    element: <MainPage />,
  },
  {
    path: "/admin/tolov",
    element: <Payment />,
  },
  {
    path: "/admin/oylik",
    element: <PayOut />,
  },
  {
    path: "/admin/user",
    element: <User />,
  },
  {
    path: "/admin/oqituvchi",
    element: <Teachers />,
  },
  {
    path: "/admin/abuturent",
    element: <Students />,
  },
  {
    path: "/admin/group",
    element: <Group />,
  },
  // {
  //   path: "/admin/qoralama",
  //   element: <Blacklist />,
  // },
];

export {
  Payment,
  // Blacklist,
  MainPage,
  Group,
  PayOut,
  Students,
  Teachers,
  User,
  children,
};
