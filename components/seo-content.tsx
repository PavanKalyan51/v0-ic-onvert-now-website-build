import type { ReactNode } from "react"

interface SeoContentProps {
  title: string
  content?: string
  children?: ReactNode
}

export function SEOContent({ title, content, children }: SeoContentProps) {
  return (
    <article className="prose prose-gray dark:prose-invert max-w-none">
      <h2 className="text-3xl font-bold mb-6 gradient-text">{title}</h2>
      <div className="text-foreground leading-relaxed space-y-4">
        {content && <p>{content}</p>}
        {children}
      </div>
    </article>
  )
}
