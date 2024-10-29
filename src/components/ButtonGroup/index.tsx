import React, { useEffect } from "react";
import Button from './Button'
import './styles.css';


const ButtonGroup: React.FC = () => {
  // This function handles the click event for the primary button.
  // It logs a message to the console and stops the event from propagating further up the DOM.
  const handlePrimaryButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Primary Button clicked");
    event.stopPropagation();
  };

  // This effect sets up a one-time event listener for DOM manipulation
  // and performs cleanup when the component unmounts.
  useEffect(() => {
    // Select the primary button from the DOM using querySelector
    // This allows us to directly manipulate the DOM outside of React's virtual DOM
    const buttonElement = document.querySelector('.button--primary');
  
    // Define a native event handler function to handle the click event
    const handleClick = (event: Event) => {
      // Prevent the click event from propagating to parent elements
      event.stopPropagation();
      console.log("Primary Button clicked via querySelector");
  
      // Check if buttonElement exists and is an instance of HTMLElement (for TypeScript safety)
      if (buttonElement instanceof HTMLElement) {
        // Change the button's background color to indicate a click
        buttonElement.style.backgroundColor = 'red';
  
        // Set a timeout to revert the background color back to the original after 500 milliseconds
        setTimeout(() => {
          buttonElement.style.backgroundColor = ''; // Reset to original color
        }, 1000); // 500ms delay
      }
    };
  
    // Attach the handleClick event listener to the button for 'click' events
    buttonElement?.addEventListener('click', handleClick);
  
    // Cleanup function: This function will run when the component unmounts
    // It removes the event listener to prevent memory leaks
    return () => {
      buttonElement?.removeEventListener('click', handleClick);
    };
  }, []); // Empty dependency array: Ensures this effect runs only once on component mount and cleans up on unmount

  // This function handles the click event for the secondary button,
  // which demonstrates how event bubbling works.
  const handleSecondaryButtonClick = () => {
    console.log("Secondary Button clicked");
    // No stopPropagation here, so this event will bubble up.
  };

  return (
    <div className="button__group" onClick={() => console.log("Container clicked")}>
      {/* 
        The primary button has an onClick handler that prevents event bubbling.
        Clicking this button will trigger `handlePrimaryButtonClick`, log the message,
        and prevent the click event from reaching the `div` container.
      */}
      <Button variant="primary" onClick={handlePrimaryButtonClick}>
        Primary Button
      </Button>

      {/* 
        The secondary button has an onClick handler that does not stop propagation.
        Clicking this button will trigger `handleSecondaryButtonClick` and also
        propagate the click event to the `div` container, logging both messages.
      */}
      <Button variant="secondary" onClick={handleSecondaryButtonClick}>
        Secondary Button
      </Button>
    </div>
  );
};

export default ButtonGroup;
