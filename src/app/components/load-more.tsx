import React from 'react';
import Button from './button';

interface LoadMoreProps {
  onLoadMore: () => void;
  isLoading: boolean;
}

export default function LoadMore({ onLoadMore, isLoading }: LoadMoreProps) {
  return (
    <Button type="button" onClick={onLoadMore} disabled={isLoading}>
      Load more
    </Button>
  );
}
