export interface CountryHistory {
  country: string;
  province: [string];
  timeline: {
    cases: {
      date: number;
    };
    deaths: {
      date: number;
    };
    recovered: {
      date: number;
    };
  };
}
