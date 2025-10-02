import { cn } from "@/lib/utils"
import { Orbitron } from "next/font/google"

const orbitron = Orbitron({ subsets: ["latin"] })

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/50 flex items-center justify-center">
        <div className="font-bold text-primary text-lg">S</div>
      </div>
      <div className={cn("text-lg font-bold text-primary", orbitron.className)}>
        Spiritus
      </div>
    </div>
  )
}
