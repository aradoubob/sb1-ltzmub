import React, { useState } from 'react';

export default function Image({ src, alt, className }) {
  const [error, setError] = useState(false);
  const fallbackStyle = {
    backgroundColor: '#1a1a1a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FDD700',
    fontSize: '1rem',
    padding: '1rem',
    textAlign: 'center',
  };

  if (error) {
    return (
      <div className={className} style={fallbackStyle}>
        {alt || 'Image indisponible'}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
}