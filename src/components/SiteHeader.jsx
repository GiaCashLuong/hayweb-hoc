// S5B 2026-05-20: ADD gold-hairline accent + "Đo website" button bg-gold (HAYWEB family CTA)
import { Link, NavLink } from 'react-router-dom';

export default function SiteHeader() {
  const linkClass = ({ isActive }) =>
    `text-sm font-medium tracking-wide transition ${
      isActive ? 'text-ink' : 'text-muted hover:text-ink'
    }`;

  return (
    <header className="border-b border-rule bg-bone relative">
      {/* S5B gold-hairline top strip signals HAYWEB family */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gold/40" aria-hidden="true" />
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
          {/* S5B-ext 2026-05-20 Day 39 night: same-tab nav per Điện Hạ "ko ra tab khác, chỉ đổi site" */}
          <a
            href="https://kiem-tra.hayweb.vn"
            className="inline-flex items-center justify-center gap-2 text-sm py-2 px-4 bg-gold text-navy font-medium rounded-md hover:bg-gold-champagne transition"
          >
            Đo website
          </a>
        </nav>
      </div>
    </header>
  );
}
