import { useMemo } from "react";

export default function useRows() {
  const rows = useMemo(
    () => [
      {
        brand: "Audi",
        model: "A3",
        segment: "Sedan, Convertible",
        year: "2015"
      },
      {
        brand: "Audi",
        model: "A3",
        segment: "Wagon",
        year: "2013"
      },
      {
        brand: "Audi",
        model: "A3 Sportback e-tron",
        segment: "Wagon",
        year: "2016"
      },
      {
        brand: "Audi",
        model: "A4",
        segment: "Sedan, Convertible",
        year: "2006"
      },
      {
        brand: "Audi",
        model: "A4",
        segment: "Sedan, Wagon",
        year: "2001"
      },
      {
        brand: "Audi",
        model: "A4 allroad",
        segment: "Wagon",
        year: "2019"
      },
      {
        brand: "Audi",
        model: "A5",
        segment: "Coupe",
        year: "2008"
      },
      {
        brand: "Audi",
        model: "A5 Sport",
        segment: "Convertible, Coupe",
        year: "2017"
      },
      {
        brand: "Audi",
        model: "Q3",
        segment: "SUV",
        year: "2020"
      },
      {
        brand: "Audi",
        model: "R8",
        segment: "Coupe",
        year: "2008"
      },
      {
        brand: "Audi",
        model: "TT",
        segment: "Coupe",
        year: "2019"
      },
      {
        brand: "Audi",
        model: "Q7",
        segment: "SUV",
        year: "2015"
      },
      {
        brand: "Audi",
        model: "Q8",
        segment: "SUV",
        year: "2019"
      },
      {
        brand: "Audi",
        model: "Cabriolet",
        segment: "Convertible, Coupe",
        year: "1996"
      }
    ],
    []
  );

  return rows;
}
