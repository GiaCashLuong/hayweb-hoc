import { Link } from 'react-router-dom';

export default function SiteFooter() {
  return (
    <footer className="border-t border-rule bg-white mt-20">
      <div className="container-wide py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-headline text-xl italic mb-2">HAYWEB</div>
          <p className="text-muted leading-relaxed">
            Học SEO + AEO + GEO + Content + Bảo mật website chuẩn 2026 cho doanh
            nghiệp Việt Nam.
          </p>
        </div>
        <div>
          <h4 className="font-medium text-ink mb-3">Liên kết</h4>
          <ul className="space-y-2 text-muted">
            <li>
              <Link to="/" className="hover:text-ink">
                Trang chủ
              </Link>
            </li>
            <li>
              <Link to="/ve-hayweb" className="hover:text-ink">
                Về HAYWEB
              </Link>
            </li>
            <li>
              <Link to="/lien-he" className="hover:text-ink">
                Liên hệ tư vấn
              </Link>
            </li>
            <li>
              <a href="https://hayweb.vn" className="hover:text-ink">
                Website HAYWEB.vn
              </a>
            </li>
            <li>
              {/* S5B-ext same-tab nav per Điện Hạ Day 39 night */}
              <a
                href="https://kiem-tra.hayweb.vn"
                className="hover:text-ink"
              >
                Đo website miễn phí
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-ink mb-3">Minh bạch</h4>
          <ul className="space-y-2 text-muted">
            <li>
              <a href="https://hayweb.vn/minh-bach-ai" className="hover:text-ink">
                Minh bạch AI
              </a>
            </li>
            <li>
              <a
                href="https://hayweb.vn/minh-bach-ai#thong-tu-18"
                className="hover:text-ink"
              >
                Tuân thủ Thông tư 18/2027
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-rule">
        <div className="container-wide py-4 flex flex-col md:flex-row justify-between text-xs text-muted gap-2">
          <span>© 2026 HAYWEB. Hà Nội, Việt Nam.</span>
          <span>
            Số liệu tại thời điểm bài viết. Cập nhật theo cadence HIGH 30-60 ngày /
            MEDIUM 90-180 ngày / LOW thường niên.
          </span>
        </div>
      </div>
    </footer>
  );
}
