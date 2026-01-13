import { aboutMenu } from "./aboutMenu"
import { achievementMenu } from "./achievementMenu"
import { activitiesMenu } from "./activitiesMenu"
import { admissionMenu } from "./admissionMenu"
import { facilityMenu } from "./facilityMenu"

export interface MainMenu {
  title: string
  path?: string
  children?: { title: string; path: string }[]
}

export const mainMenus: MainMenu[] = [
  { title: "Home", path: "/" },
  { title: "About", children: aboutMenu },
  { title: "Activities", children: activitiesMenu },
  { title: "Admission", children: admissionMenu },
  { title: "Achievement", children: achievementMenu },
  { title: "Facility", children: facilityMenu },
  { title: "Gallery", path: "/gallery" },
  { title: "Staff", path: "/staff" },
  { title: "Contact", path: "/contact" },
  { title: "Mandatory-disclosure", path: "/mandatory-disclosure" }

]