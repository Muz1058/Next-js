import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>404 – Page Not Found</h1>
      <p>Oops! The page you are looking for doesn’t exist.</p>
      <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>
        ⬅ Go back home
      </Link>
    </div>
  );
}
