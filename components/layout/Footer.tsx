export default function Footer() {
  return (
    <footer className="mx-auto max-w-5xl bg-white px-8 py-8 md:px-12">
      <p className="text-xs text-foreground-muted">
        Asuno &middot;{" "}
        <a
          href="https://www.asuno.co"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-foreground-muted/30 underline-offset-2 transition-colors hover:text-foreground"
        >
          www.asuno.co
        </a>{" "}
        &middot; elias@asuno.co
      </p>
    </footer>
  );
}
