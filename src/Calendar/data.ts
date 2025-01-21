import { ERouteOfAdministration, Infection, Vaccine } from "../types";

export const infections: Infection[] = [
  {
    id: "tub",
    name: "Туберкулез",
    vaccines: ["bcj", "bcjM"],
    defaultVaccine: "bcj",
    isNational: true,
    routeOfAdministration: ERouteOfAdministration.SUBCUTANEOUSLY,
    isVirus: false,
    isAlive: true,
  },
  {
    id: "gepB",
    name: "Гепатит B",
    vaccines: ["regB", "vacGepB", "buboKok", "buboM", "infGeksa"],
    defaultVaccine: "regB",
    isNational: true,
    routeOfAdministration: ERouteOfAdministration.INTRAMUSCULARLY,
    isVirus: true,
    isAlive: false,
  },
  {
    id: "pnev",
    name: "Пневмококк",
    vaccines: ["prev13", "pnemotecs", "sinfloriks", "pnevmovacs23"],
    defaultVaccine: "prev13",
    isNational: true,
    routeOfAdministration: ERouteOfAdministration.INTRAMUSCULARLY,
    isVirus: false,
    isAlive: false,
  },
  //   {
  //     id: "koklush",
  //     name: "Коклюш",
  //     vaccines: ["akds", "pentaksim"],
  //     defaultVaccine: "pentaksim",
  //     isNational: true,
  //     routeOfAdministration: ERouteOfAdministration.INTRAMUSCULARLY,
  //     isVirus: false,
  //     isAlive: false,
  //   },
];

export const vaccines: Vaccine[] = [
  {
    id: "bcj",
    name: "БЦЖ",
    infections: ["tub"],
    routeOfAdministration: ERouteOfAdministration.SUBCUTANEOUSLY,
    sheme: {
      ageOfVaccination: 0,
      revaccinationInfo: {
        ageOfRevaccination: 72,
      },
    },
  },
  {
    id: "bcjM",
    name: "БЦЖ-М",
    infections: ["tub"],
    routeOfAdministration: ERouteOfAdministration.SUBCUTANEOUSLY,
    sheme: {
      ageOfVaccination: 0,
      revaccinationInfo: {
        ageOfRevaccination: 72,
      },
    },
  },
  {
    id: "regB",
    name: "Регевак B",
    infections: ["gepB"],
    routeOfAdministration: ERouteOfAdministration.INTRAMUSCULARLY,
    sheme: {
      ageOfVaccination: 0,
      vaccinationInterval: [1, 5],
    },
  },
  {
    id: "prev13",
    name: "Превенар 13",
    infections: ["pnev"],
    routeOfAdministration: ERouteOfAdministration.INTRAMUSCULARLY,
    sheme: {
      ageOfVaccination: 2,
      vaccinationInterval: [2],
      revaccinationInfo: {
        ageOfRevaccination: 15,
      },
    },
  },
];
