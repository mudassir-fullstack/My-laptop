import { Mongoose } from "mongoose";

declare global {
  var mongooseConn: Mongoose | null | undefined;
}

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}