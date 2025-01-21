export type Infection = {
  id: string;
  name: string;
  vaccines: string[];
  defaultVaccine?: string;
  isNational: boolean;
  routeOfAdministration: ERouteOfAdministration;
  isVirus: boolean;
  isAlive: boolean;
};

export type RevaccinationInfo = {
  ageOfRevaccination: number;
  revaccinationInterval?: number[];
};

export type Sheme = {
  ageOfVaccination: number;
  vaccinationInterval?: number[];
  revaccinationInfo?: RevaccinationInfo;
};

export type Vaccine = {
  id: string;
  name: string;
  infections: string[];
  routeOfAdministration: ERouteOfAdministration;
  sheme: Sheme;
};

export enum ERouteOfAdministration {
  SUBCUTANEOUSLY = "subcutaneously",
  ORALLY = "orally",
  INTRAMUSCULARLY = "intramuscularly",
}
