import React from 'react'
import Button from './button'

export default function LoadMore({ onLoadMore }) {
  return (
    <Button type='button' onClick={onLoadMore}>Load more</Button>
  )
}
