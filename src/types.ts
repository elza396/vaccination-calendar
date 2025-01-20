export type Infection = {
  id: string;
  name: string;
  vaccines: string[];
  defaultVaccine: string;
  isNational: boolean;
  routeOfAdministration: ERouteOfAdministration;
  isVirus: boolean;
  isAlive: boolean;
};

export type Vaccine = {
  id: string;
  name: string;
  infections: string[];
  routeOfAdministration: ERouteOfAdministration;
  sheme: {
    numOfVaccination: number;
    ageOfVaccination: number;
    hasRevaccination: boolean;
    ageOfRevaccination: number;
    vaccinationInterval: number[];
    revaccinationInterval: number[];
  };
};

export enum ERouteOfAdministration {
  SUBCUTANEOUSLY = "subcutaneously",
  ORALLY = "orally",
  INTRAMUSCULARLY = "intramuscularly",
}
