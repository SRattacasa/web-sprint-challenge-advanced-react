import { useState } from "react";

// write your custom hook here to control your checkout form
 const useForm = (initialValues) => {
    // inputs - handleChange, state (dynamically manage any number of inputs)
    const [setValues, values] = useState(initialValues);
  
    const handleChanges = e => {
      console.log(e.target.name);
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    };
  
    // form/buttons - submit, clear
    const handleSubmit = e => {
      if (e) e.preventDefault();
      
    };
  
    const clearForm = e => {
      e.preventDefault();
      setValues(initialValues);
    };
  
    return [values, clearForm, handleSubmit, handleChanges];
  };
  
  // Protip:
  /*
  
  this function can control multiple inputs in a class component:
  
    const handleChanges = e => {
      console.log(e.target.name);
      this.setState({
        [e.target.name]: e.target.value
      });
    };
  
  */
  export default useForm;