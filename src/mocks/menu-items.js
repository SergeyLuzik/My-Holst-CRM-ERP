import picture from "../assets/icons/picture.svg";
import polygraphy from "../assets/icons/polygraphy.svg";
import other from "../assets/icons/other.svg";
import cash from "../assets/icons/cash.svg";
import needs from "../assets/icons/needs.svg";
import notes from "../assets/icons/notes.svg";
import { PlusButton } from "../components/ui/PlusButton/PlusButton";
import { Triangle } from "../components/ui/TriangleButton/TriangleButton.stories";
export const menuItems = [
  { id: 1, icon: picture, href: "#", text: "Картины", Option: PlusButton },
  {
    id: 2,
    icon: polygraphy,
    href: "#",
    text: "Полиграфия",
    Option: PlusButton,
  },
  { id: 3, icon: other, href: "#", text: "Прочие", Option: PlusButton },
  { id: 4, icon: cash, href: "#", text: "Касса", Option: null },
  { id: 5, icon: needs, href: "#", text: "Потребности", Option: null },
  { id: 6, icon: notes, href: "#", text: "Заметки", Option: Triangle },
];
