"use client";
import {
  CurrencyExchange,
  CurrencyFranc,
  CurrencyLira,
  CurrencyPound,
  CurrencyRuble,
  CurrencyRupee,
  CurrencyYen,
  CurrencyYuan,
  Euro,
} from "@mui/icons-material";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 lg:w-1/2 md:w-2/3 w-full text-white bg-indigo-600 p-4 shadow-md z-50 clip-path-polygon">
      <div className="container mx-auto flex justify-center items-center">
        <ul className="flex justify-center gap-5 items-center">
          <li className="hover:text-yellow-400 hover:cursor-pointer hidden md:block">
            <CurrencyRuble
              sx={{
                fontSize: 25,
                color: "inherit",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.2)" },
              }}
            />
          </li>
          <li className="hover:text-yellow-400 hover:cursor-pointer">
            <CurrencyFranc
              sx={{
                fontSize: 25,
                color: "inherit",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.2)" },
              }}
            />
          </li>
          <li className="hover:text-yellow-400 hover:cursor-pointer">
            <Euro
              sx={{
                fontSize: 25,
                color: "inherit",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.2)" },
              }}
            />
          </li>
          <li className="hover:text-yellow-400 hover:cursor-pointer">
            <CurrencyPound
              sx={{
                fontSize: 25,
                color: "inherit",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.2)" },
              }}
            />
          </li>
          <li className="text-yellow-400 hover:cursor-pointer">
            <CurrencyExchange
              sx={{
                fontSize: 35,
                color: "inherit",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.2)" },
              }}
            />
          </li>
          <li className="hover:text-yellow-400 hover:cursor-pointer">
            <CurrencyYen
              sx={{
                fontSize: 25,
                color: "inherit",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.2)" },
              }}
            />
          </li>
          <li className="hover:text-yellow-400 hover:cursor-pointer">
            <CurrencyYuan
              sx={{
                fontSize: 25,
                color: "inherit",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.2)" },
              }}
            />
          </li>
          <li className="hover:text-yellow-400 hover:cursor-pointer">
            <CurrencyRupee
              sx={{
                fontSize: 25,
                color: "inherit",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.2)" },
              }}
            />
          </li>
          <li className="hover:text-yellow-400 hover:cursor-pointer hidden lg:block">
            <CurrencyLira
              sx={{
                fontSize: 25,
                color: "inherit",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.2)" },
              }}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
