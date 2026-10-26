import { routeMaps } from "../App";

// export type routeMapsType = typeof routeMaps[keyof typeof routeMaps]; (day 1 of react with ts)
export type routeMapsType = Exclude<typeof routeMaps[keyof typeof routeMaps],"profile/:id">;