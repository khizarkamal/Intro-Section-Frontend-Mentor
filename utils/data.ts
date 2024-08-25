import client1 from "@/public/client-audiophile.svg";
import client2 from "@/public/client-databiz.svg";
import client3 from "@/public/client-maker.svg";
import client4 from "@/public/client-meet.svg";
import calenderIcon from "@/public/icon-calendar.svg";
import planningIcon from "@/public/icon-planning.svg";
import todoIcon from "@/public/icon-planning.svg";
import reminderIcon from "@/public/icon-reminders.svg";
import { Link } from "./types";

export const clients: string[] = [client1, client2, client3, client4];

export const links: Link[] = [
  {
    id: 1,
    text: "Features",
    href: "",
    subLinks: [
      {
        icon: todoIcon,
        text: "Todo List",
        link: "#",
      },
      {
        icon: calenderIcon,
        text: "Calender",
        link: "#",
      },
      {
        icon: reminderIcon,
        text: "Reminders",
        link: "#",
      },
      {
        icon: planningIcon,
        text: "Planning",
        link: "#",
      },
    ],
  },
  {
    id: 2,
    text: "Company",
    href: "",
    subLinks: [
      {
        icon: "",
        text: "History",
        link: "#",
      },
      {
        icon: "",
        text: "Our Team",
        link: "#",
      },
      {
        icon: "",
        text: "Blog",
        link: "#",
      },
    ],
  },
  {
    id: 3,
    text: "Careers",
  },
  {
    id: 4,
    text: "About",
  },
];
