import { cn } from "@/lib/utils";

export const H1 = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  return (
    <h1
      className={cn(
        className,
        "text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[hsl(var(--primary-800))]"
      )}
    >
      {text}
    </h1>
  );
};
export const H2 = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  return (
    <h2
      className={cn(
        className,
        "text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[hsl(var(--primary-800))]"
      )}
    >
      {text}
    </h2>
  );
};
export const H3 = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  return (
    <h6
      className={cn(
        className,
        "text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[hsl(var(--primary-800))]"
      )}
    >
      {text}
    </h6>
  );
};
