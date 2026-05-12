import Image from "next/image";

export function Logo({ size = 32 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <Image
        src="/brand/logo.png"
        alt=""
        width={size}
        height={size}
        className="rounded-md object-cover shrink-0"
        priority
      />
      <span
        className="font-bold tracking-tight text-foreground leading-none"
        style={{ fontSize: size * 0.56 }}
      >
        spiritus
        <span className="block text-muted-foreground font-normal tracking-[0.18em] uppercase" style={{ fontSize: size * 0.28 }}>
          agentic solutions
        </span>
      </span>
    </div>
  );
}



