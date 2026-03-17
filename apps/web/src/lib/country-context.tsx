"use client";

import { createContext, useContext } from "react";
import type { Country } from "@sight/shared";

const CountryContext = createContext<Country>("ae");

export function CountryProvider({
  country,
  children,
}: {
  country: Country;
  children: React.ReactNode;
}) {
  return (
    <CountryContext.Provider value={country}>
      {children}
    </CountryContext.Provider>
  );
}

export function useCountry(): Country {
  return useContext(CountryContext);
}
