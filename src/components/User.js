import React from 'react';

export default function User(props) {
  const { name } = props;
  return (
    <div>
      <p>Hello, {name}!
      </p>
    </div>
  );
}
