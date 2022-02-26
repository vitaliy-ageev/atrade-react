import Ideas from "../pages/Ideas";
import Robot from "../pages/Robot";
import News from "../pages/News";
import Calendar from "../pages/Calendar";
import Help from "../pages/Help";
import Login from "../pages/Login";

export const privateRoutes = [
    {path: "ideas", element: Ideas, exact: true },
    {path: "ideas/view", element: Ideas, exact: true },
    {path: "robot", element: Robot, exact: true },
    {path: "news", element: News, exact: true },
    {path: "news/:alias", element: News, exact: true },
    {path: "calendar", element: Calendar, exact: true },
    {path: "help", element: Help, exact: true },
]

export const publicRoutes = [
    {path: "/login", element: Login, exact: true },
]