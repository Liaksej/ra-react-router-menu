import { NavLink, useMatch } from "react-router-dom";

const menuItems = [
  {
    name: "Главная",
    path: "/ra-react-router-menu/",
  },
  {
    name: "Дрифт-такси",
    path: "/ra-react-router-menu/drift",
  },
  {
    name: "Time Attack",
    path: "/ra-react-router-menu/timeattack",
  },
  {
    name: "Forza Karting",
    path: "/ra-react-router-menu/forza",
  },
];

export default function Menu() {
  return (
    <div>
      <nav className="menu">
        {menuItems.map((item) => {
          const match = useMatch(item.path);
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={match ? "menu__item-active menu__item" : "menu__item"}
            >
              {item.name}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}
