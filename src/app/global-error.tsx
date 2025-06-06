'use client';

import Button from './components/button';

function GlobalError() {
  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col justify-center items-center gap-4">
          <svg className="fill-[#E0D5D4]" width={50} height={50}>
            <use href="/icons/icons.svg#icon-sad"></use>
          </svg>
          <h1 className="text-2xl font-medium">Something went wrong</h1>
          <Button
            type="button"
            className="flex gap-2 justify-center items-center text-lg bg-red px-3 py-2 rounded-xl red-button-hover"
            onClick={() => window.location.reload()}
          >
            Try again
          </Button>
        </div>
      </body>
    </html>
  );
}

export default GlobalError;
