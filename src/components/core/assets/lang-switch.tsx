// "use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
import Link from "next/link";
// import { useRouter } from "next/navigation";

const LangSwitch = ({
  navStyle,
  languages,
  pathname,
}: {
  navStyle: Boolean;
  languages: any;
  pathname: string;
}) => {
  // const router = useRouter();
  const setLanguage = (lang: string) => {
    if (localStorage) {
      localStorage.setItem("lang", lang);
      // lang === "/bn/"
      //   ? window.location.href.replace("/bn/", "/en/")
      //   : window.location.href.replace("/en/", "/bn/");
      // router.push(window.location.href);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="p-2 focus:outline-none">
        <Languages
          className={`h-5 w-5 ${
            navStyle
              ? "stroke-[hsl(var(--primary-400))]"
              : "stroke-[hsl(var(--primary-100))]"
          }`}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{languages.language}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link
          href={`${window ? window.location.href.replace("/bn/", "/en/") : ""}`}
          onClick={() => setLanguage("/en/")}
        >
          <DropdownMenuItem>{languages.english}</DropdownMenuItem>
        </Link>
        <Link
          href={`${window ? window.location.href.replace("/en/", "/bn/") : ""}`}
          onClick={() => setLanguage("/bn/")}
        >
          <DropdownMenuItem>{languages.bangla}</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LangSwitch;
