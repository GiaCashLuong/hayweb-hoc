import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="container-prose py-20 text-center">
      <h1 className="font-headline text-5xl mb-4">404</h1>
      <p className="text-lg text-muted mb-6">
        Trang không tồn tại — có thể URL bị sai hoặc bài viết đã được dời chỗ.
      </p>
      <Link to="/" className="btn-primary">
        Về trang chủ
      </Link>
    </div>
  );
}
