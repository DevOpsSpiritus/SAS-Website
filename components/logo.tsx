import Image from "next/image";

export function Logo({ size = 28 }: { size?: number }) {
    return (
        <div className="flex items-center gap-2">
            <Image
                src="/brand/logo.png" // maps to /public/brand/logo.png
                alt="Spiritus Agentic Solutions"
                width={size}
                height={size}
                className="rounded-md"
                priority
            />
            <span className="hidden sm:inline text-sm font-semibold tracking-wide">
                Spiritus Agentic Solutions
            </span>
        </div>
    );
}
