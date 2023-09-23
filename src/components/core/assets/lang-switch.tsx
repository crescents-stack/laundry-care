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

const LangSwitch = ({
  navStyle,
  languages,
  pathname,
}: {
  navStyle: Boolean;
  languages: any;
  pathname: string;
}) => {
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
          href={pathname.replace("/bn/", "/en/")}
          onClick={() => {
            if (localStorage) {
              localStorage.setItem("lang", "/en/");
            }
          }}
        >
          <DropdownMenuItem>{languages.english}</DropdownMenuItem>
        </Link>
        <Link
          href={pathname.replace("/en/", "/bn/")}
          onClick={() => {
            if (localStorage) {
              localStorage.setItem("lang", "/bn/");
            }
          }}
        >
          <DropdownMenuItem>{languages.bangla}</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LangSwitch;
