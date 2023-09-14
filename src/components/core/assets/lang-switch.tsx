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
            navStyle ? "stroke-gray-400" : "stroke-blue-200"
          }`}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{languages.language}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href={pathname.replace("/bn", "/en")}>
          <DropdownMenuItem>{languages.english}</DropdownMenuItem>
        </Link>
        <Link href={pathname.replace("/en", "/bn")}>
          <DropdownMenuItem>{languages.bangla}</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LangSwitch;