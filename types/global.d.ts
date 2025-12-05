import { Mongoose } from "mongoose";

declare global {
  var mongooseConn: Mongoose | null | undefined;
}

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

interface ExtraInfo {
  [key: string]: string | number | boolean | ExtraInfo | ExtraInfo[];
}