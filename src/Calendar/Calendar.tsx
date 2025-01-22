import React from "react";
import s from "../Calendar/Calendar.module.css";
import { infections, vaccines } from "./data";
import { getArrayOfAgesFromIntervals } from "../utils/getArrayOfAgesFromIntervals";

export const Calendar = () => {
  const months = [0, 1, 2, 3, 4.5, 6, 12, 15, 18, 20, 72, 84, 144, 168, 180];

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
          const defVacSheme = vaccines.find(
            (vac) => vac.id === inf.defaultVaccine
          )?.sheme;

          if (!defVacSheme) {
            return null;
          }

          const agesForVac = getArrayOfAgesFromIntervals(
            defVacSheme.vaccinationInterval,
            defVacSheme.ageOfVaccination
          );

          const agesForRevac = defVacSheme.revaccinationInfo
            ? getArrayOfAgesFromIntervals(
                defVacSheme.revaccinationInfo.revaccinationInterval,
                defVacSheme.revaccinationInfo.ageOfRevaccination
              )
            : [];

          let vacNumber = 1,
            revacNumber = 1;

          const monthsArray: (string | null)[] = months.map(
            (month, monthIndex) => {
              if (
                agesForVac.some((vacAge) => {
                  return (
                    month >= vacAge &&
                    (monthIndex === 0 ? true : months[monthIndex - 1] < vacAge)
                  );
                })
              ) {
                return agesForVac.length > 1 ? `V${vacNumber++}` : "V";
              } else if (
                agesForRevac.some((revacAge) => {
                  return month >= revacAge && months[monthIndex - 1] < revacAge;
                })
              ) {
                return agesForRevac.length > 1 ? `RV${revacNumber++}` : "RV";
              } else return null;
            }
          );

          return (
            <tr key={inf.id}>
              <th>{inf.name}</th>
              {monthsArray.map((month, monthIndex) => {
                return (
                  <th key={monthIndex} className={month ? s.vaccine : ""}>
                    {month}
                  </th>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
