type SectionHeadingProps = {
  index: string
  title: string
  eyebrow: string
}

export default function SectionHeading({ index, title, eyebrow }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-3">
      <p className="eyebrow">
        {index} / {eyebrow}
      </p>
      <div className="flex items-center gap-4">
        <h2 className="section-title">{title}</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-amber-100/35 via-stone-200/10 to-transparent" />
      </div>
    </div>
  )
}
