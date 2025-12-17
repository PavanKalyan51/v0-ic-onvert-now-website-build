import type { LucideIcon } from "lucide-react"

interface ToolHeaderProps {
  title: string
  description: string
  icon: LucideIcon
}

export function ToolHeader({ title, description, icon: Icon }: ToolHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold gradient-text text-balance">{title}</h1>
        </div>
      </div>
      <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}
