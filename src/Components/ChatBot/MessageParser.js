import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
        console.log(JSON.stringify({'prompt':message}))
        fetch('http://127.0.0.1:5000/', {
            method: 'POST',
            //body:"prompt=test"
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({prompt:message})
        })
        .then(response => response.json())
        .then(response => actions.handleHello(JSON.stringify(response)))
        //.then(response => console.log(JSON.stringify(response)))
    };
  
    return (
      <div>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            parse: parse,
            actions: {},
          });
        })}
      </div>
    );
  };

export default MessageParser;