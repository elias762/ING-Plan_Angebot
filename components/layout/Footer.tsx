export default function Footer() {
  return (
    <footer className="border-t border-border bg-background-alt">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-lg font-bold text-primary-dark">Asuno</p>
          <p className="text-sm text-foreground-muted">
            <a href="https://www.asuno.co" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">www.asuno.co</a>
            {" "}&middot;{" "}
            elias@asuno.co
            {" "}&middot;{" "}
            &copy; {new Date().getFullYear()} Asuno
          </p>
        </div>
      </div>
    </footer>
  );
}
