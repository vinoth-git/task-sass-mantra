import CodeIcon from "@mui/icons-material/Code";
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";
import GridViewIcon from "@mui/icons-material/GridView";
import DoneIcon from "@mui/icons-material/Done";
import SettingsIcon from "@mui/icons-material/Settings";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';

const PlanData = [
  {
    amount: "Free",
    plan: "Free Forever",
    btnText: "Sign Up For Free",
  },
  {
    amount: "$20",
    plan: "For Teams",
    durantion: "MO",
    btnText: "Start 14-Day Trial",
  },
  {
    amount: "$140",
    durantion: "MO",
    plan: "For Enterprises",
    btnText: "Start 14-Day Trial",
  },
];

const AboutData = [
  {
    tite: "Minimal design",
    subTitle: "se shhrt sh isyo opi uu sratygjh butcs hsugf",
    component: <ViewInArOutlinedIcon />,
  },
  {
    tite: "Rocket Fast",
    subTitle: "se shhrt sh isyo opi uu sratygjh butcs hsugf",
    component: <NetworkCheckIcon />,
  },
  {
    tite: "Framework",
    subTitle: "se shhrt sh isyo opi uu sratygjh butcs hsugf",
    component: <LineStyleIcon />,
  },
  {
    tite: "Style Guide",
    subTitle: "se shhrt sh isyo opi uu sratygjh butcs hsugf",
    component: <LibraryBooksOutlinedIcon />,
  },
  {
    tite: "CSS + SASS",
    subTitle: "se shhrt sh isyo opi uu sratygjh butcs hsugf",
    component: <CodeIcon />,
  },
  {
    tite: "Customizable",
    subTitle: "se shhrt sh isyo opi uu sratygjh butcs hsugf",
    component: <SettingsIcon />,
  },
  {
    tite: "Modular Design",
    subTitle: "se shhrt sh isyo opi uu sratygjh butcs hsugf",
    component: <GridViewIcon />,
  },
  {
    tite: "HTML5 Valid",
    subTitle: "se shhrt sh isyo opi uu sratygjh butcs hsugf",
    component: <DoneIcon />,
  },
];

export { PlanData, AboutData };
