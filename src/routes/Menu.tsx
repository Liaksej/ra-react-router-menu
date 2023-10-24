import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Главная",
    path: "/",
  },
  {
    name: "Дрифт-такси",
    path: "/drift",
  },
  {
    name: "Time Attack",
    path: "/timeattack",
  },
  {
    name: "Forza Karting",
    path: "/forza",
  },
];

export default function Menu() {
  return (
    <div>
      <nav className="menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "menu__item-active menu__item" : "menu__item"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
