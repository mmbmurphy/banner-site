import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <span className="not-found-code">404</span>
        <h1 className="not-found-title">Page not found</h1>
        <p className="not-found-description">
          Sorry, we couldn't find the page you're looking for. It may have been moved or no longer exists.
        </p>
        <div className="not-found-actions">
          <Link href="/" className="button w-button">
            Go to Homepage
          </Link>
          <Link href="/contact" className="not-found-link">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
