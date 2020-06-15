import React from "react";
import { render, fireEvent, getByText, screen } from "@testing-library/react";
import CheckoutForm, {handleSubmit} from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const {container, getByText} = render(<CheckoutForm/>)
    expect(getByText('Checkout Form'))
});

test("form shows success message on submit with form details", () => {
    // Arrange
    render(<CheckoutForm/>);
    const firstName = screen.getByLabelText(/first name/i)
    const lastName = screen.getByLabelText(/last name/i)
    const address = screen.getByLabelText(/address/i)

    // // Act
    fireEvent.change(firstName, {target: {value: 'Fake FirstName'}})
    fireEvent.change(lastName, {target: {value: 'Fake lastName'}})
    fireEvent.change(address, {target: {value: 'Fake address'}})
      
    const submitButton = screen.getByText("Checkout")
    fireEvent.click(submitButton);

    const success = screen.getByTestId('successMessage');
    const successMessage = screen.getByText("Fake address")
    
    // Assert
    expect(success).toBeInTheDocument();
    expect(successMessage).toBeInTheDocument();
    

});


