import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const handleHello = (message) => {

        const botMessage = createChatBotMessage(message);
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      };
    
      // Put the handleHello function in the actions object to pass to the MessageParser
      return (
        <div>
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, {
              actions: {
                handleHello,
              },
            });
          })}
        </div>
      );
};

export default ActionProvider;