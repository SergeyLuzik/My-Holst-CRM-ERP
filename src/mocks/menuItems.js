import picture from "@icons/picture.svg";
import polygraphy from "@icons/polygraphy.svg";
import other from "@icons/other.svg";
import cash from "@icons/cash.svg";
import needs from "@icons/needs.svg";
import notes from "@icons/notes.svg";
import { PlusButton } from "../components/ui-kit/PlusButton";
import { Triangle } from "../components/ui-kit/TriangleButton/TriangleButton.stories";
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
