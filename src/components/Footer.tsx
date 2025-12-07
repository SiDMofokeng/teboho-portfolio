export default function Footer() {
  return (
    <footer className="border-t border-slate-100 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
        <div>© {new Date().getFullYear()} Teboho Sydney Mofokeng</div>
        <div className="mt-3 md:mt-0">Email: <a href="mailto:hello@teboho.design" className="underline">hello@teboho.design</a></div>
      </div>
    </footer>
  )
}
