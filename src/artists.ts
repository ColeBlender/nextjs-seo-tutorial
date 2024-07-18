export type Artist = {
  id: string;
  name: string;
  albums: string[];
};

export const artists: Artist[] = [
  {
    id: "1",
    name: "Jeff Williams",
    albums: ["So Much Fun", "Slime Season 3", "Barter 6", "Jeffery"],
  },
  {
    id: "2",
    name: "Sergio Kitchens",
    albums: ["Drip or Drown", "Drip Harder", "WUNNA", "Drip Season 3"],
  },
  {
    id: "3",
    name: "Radric Davis",
    albums: [
      "Trap House",
      "The State vs. Radric Davis",
      "Everybody Looking",
      "Mr. Davis",
    ],
  },
  {
    id: "4",
    name: "Dwayne Carter",
    albums: ["Tha Carter", "Tha Carter II", "Tha Carter III", "Tha Carter IV"],
  },
];
