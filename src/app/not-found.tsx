'use client';

import Link from 'next/link';

function NotFound() {
  return (
    <div className="min-h-[85vh] flex flex-col justify-center items-center gap-4">
      <svg className="fill-[#E0D5D4]" width={50} height={50}>
        <use href="/icons/icons.svg#icon-sad"></use>
      </svg>
      <h1 className="text-2xl font-medium">404 - Page Not Found</h1>
      <p className="text-xl text-center">
        {"Sorry, the page you are looking for doesn't exist or has been moved."}
      </p>
      <Link
        className="flex gap-2 justify-center items-center text-lg bg-red px-3 py-2 rounded-xl red-button-hover"
        href={'/'}
      >
        Go back home
      </Link>
    </div>
  );
}

export default NotFound;
