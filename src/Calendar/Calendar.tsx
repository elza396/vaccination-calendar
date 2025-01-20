import React from "react";
import s from "../Calendar/Calendar.module.css";
import { ERouteOfAdministration, Infection, Vaccine } from "../types";

export const Calendar = () => {
  const infections: [Infection] = [
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
  ];
  const vaccines: [Vaccine] = [
    {
      id: "bcj",
      name: "БЦЖ",
      infections: ["tub"],
      routeOfAdministration: ERouteOfAdministration.SUBCUTANEOUSLY,
      sheme: {
        numOfVaccination: 1,
        ageOfVaccination: 0,
        hasRevaccination: true,
        ageOfRevaccination: 72,
        vaccinationInterval: [],
        revaccinationInterval: [],
      },
    },
  ];

  const ages = [0, 1, 2, 3, 4.5, 6, 12, 15, 18, 20, 72, 84, 144, 168, 180];

  return (
    <table className={s.table}>
      <tbody>
        <tr>
          <th rowSpan={2}>Инфекция</th>
          <th colSpan={10}>Месяцы</th>
          <th colSpan={5}>Годы</th>
        </tr>
        <tr>
          <th>0</th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4,5</th>
          <th>6</th>
          <th>12</th>
          <th>15</th>
          <th>18</th>
          <th>20</th>
          <th>6</th>
          <th>7</th>
          <th>12</th>
          <th>14</th>
          <th>15-17</th>
        </tr>
        {infections.map((inf) => {
          return (
            <tr key={inf.id}>
              <th>{inf.name}</th>
              {ages.map((age) => {
                if (
                  age ===
                  vaccines.find((vac) => vac.id === inf.defaultVaccine).sheme
                    .ageOfVaccination
                ) {
                  return (
                    <th key={age} className={s.vaccine}>
                      V
                    </th>
                  );
                } else if (
                  age ===
                  vaccines.find((vac) => vac.id === inf.defaultVaccine).sheme
                    .ageOfRevaccination
                ) {
                  return (
                    <th key={age} className={s.revaccine}>
                      RV
                    </th>
                  );
                } else {
                  return <th key={age}></th>;
                }
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
