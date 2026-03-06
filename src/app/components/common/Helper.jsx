import { JerryIcon, PdfIcon, ScreenShot, ShareFile } from "./Icons";

export const users = [
  {
    image: "/images/Elmer.png",
    title: "Elmer Laverty",
    subtitle: "Haha oh man ",
    emoji: "🔥",
    active: "12m",
    button: ["Question", "Help Wanted"],
  },
  {
    image: "/images/Florencio.png",
    title: "Florencio Dorrance",
    subtitle: "woohoooo",
    active: "24m",
    button: ["Some content"],
  },
  {
    image: "/images/Lavern.png",
    title: "Lavern Laboy",
    subtitle: "Haha that's terrifying",
    emoji: " 😂",
    active: "1h",
    button: ["Bug", "Hacktoberfest"],
  },
  {
    image: "/images/Titus.png",
    title: "Titus Kitamura",
    subtitle: "omg, this is amazing",
    active: "24m",
    button: ["Question", "Some content"],
  },
  {
    image: "/images/Geoffery.png",
    title: "Geoffrey Mott",
    subtitle: "aww ",
    emoji: "😍",
    active: "2d",
    button: ["Request"],
  },
  {
    image: "/images/Alfonzo.png",
    title: "Alfonzo Schuessler",
    subtitle: "perfect!",
    active: "1m",
    button: ["Follow up"],
  },
];
export const MembersData = [
  {
    image: "/images/FlorencioDorrido.png",
    name: "Florencio Dorrance",
    role: "Market Development Manager",
  },
  {
    image: "/images/BennySpanbauser.png",
    name: "Benny Spanbauer",
    role: "Area Sales Manager",
  },
  {
    image: "/images/Lavern.png",
    name: "Jamel Eusebio",
    role: "Administrator",
  },
  {
    image: "/images/LavernLaboy.png",
    name: "Lavern Laboy",
    role: "Account Executive",
  },
  {
    image: "/images/AlfonzoScuessler.png",
    name: "Alfonzo Schuessler",
    role: "Proposal Writer",
  },
  {
    image: "/images/Daryl.png",
    name: "Daryl Nehls",
    role: "Nursing Assistant",
  },
];
export const DocumentsData = [
  { DocName: "i9.pdf", DocType: "PDF", DocSize: "9mb", icon: <PdfIcon /> },
  {
    DocName: "Screenshot-3817.png",
    DocType: "PNG",
    DocSize: "4mb",
    icon: <ScreenShot />,
  },
  { DocName: "sharefile.docx", DocType: "PDF", DocSize: "9mb", icon: <ShareFile /> },
  { DocName: "Jerry-2020_I-9_Form.xxl", DocType: "XXL", DocSize: "24mb", icon: <JerryIcon /> },
];