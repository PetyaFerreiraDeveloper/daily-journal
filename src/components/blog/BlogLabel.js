import React from 'react';

const BlogLabel = ({label}) => {
  let style;
  if (label === 'blog') {
    style = 'bg-gray-800 border-gray-900 '
  } else {
    style = 'bg-dark-green border-darker-green'
  }
  return (
    <p className={`${style} border-2 text-white px-3 py-1 rounded-xl absolute top-0 right-0 uppercase`}>{label}</p>
  )
}

export default BlogLabel