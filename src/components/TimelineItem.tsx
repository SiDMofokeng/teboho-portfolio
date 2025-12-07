export default function TimelineItem({ year, role }: { year: string; role: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-xs text-slate-400 w-20">{year}</div>
      <div className="text-sm text-slate-700">{role}</div>
    </div>
  )
}
