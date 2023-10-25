import MenuItem from "../components/MenuItem";

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
          return <MenuItem item={item} key={item.name} />;
        })}
        ;
      </nav>
    </div>
  );
}
