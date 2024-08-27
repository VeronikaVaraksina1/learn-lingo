import React from 'react';

export default function AuthMenu() {
  return (
    <div>
      <button type="button">
        <svg width={20} height={20}>
          <use href="/icons/icons.svg#icon-log-in"></use>
        </svg>
        <span>Log in</span>
      </button>
      <button type="button"></button>
    </div>
  );
}
