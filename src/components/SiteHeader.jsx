import { Link, NavLink } from 'react-router-dom';

export default function SiteHeader() {
  const linkClass = ({ isActive }) =>
    `text-sm font-medium tracking-wide transition ${
      isActive ? 'text-ink' : 'text-muted hover:text-ink'
    }`;

  return (
    <header className="border-b border-rule bg-bone">
      <div className="container-wide flex items-center justify-between py-5">
        <Link to="/" className="font-headline text-2xl font-medium tracking-tight">
          <span className="italic">HAYWEB</span>
          <span className="text-muted font-body text-sm ml-2">/ Học</span>
        </Link>
        <nav className="flex items-center gap-7">
          <NavLink to="/" end className={linkClass}>
            Bài viết
          </NavLink>
          <NavLink to="/ve-hayweb" className={linkClass}>
            Về HAYWEB
          </NavLink>
          <NavLink to="/lien-he" className={linkClass}>
            Liên hệ
          </NavLink>
          <a
            href="https://kiem-tra.hayweb.vn"
            className="btn-primary text-sm py-2 px-4"
            target="_blank"
            rel="noopener"
          >
            Đo website
          </a>
        </nav>
      </div>
    </header>
  );
}
