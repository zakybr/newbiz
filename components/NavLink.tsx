import Link from "next/link";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function NavLink({
  href,
  children,
  className = "",
  onClick,
}: NavLinkProps) {
  return (
    <Link href={href} className={`nav-link ${className}`} onClick={onClick}>
      {children}
    </Link>
  );
}
