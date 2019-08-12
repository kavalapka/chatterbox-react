import React from 'react';

export default function Page(props) {
  const { messages } = props;
  return (
    <div>
      <p>
        You have {messages.length} messages!
      </p>
      <ul>
        {
          messages.map((msg) => (<li>{msg}</li>))
        }
      </ul>
    </div>
  );
}
