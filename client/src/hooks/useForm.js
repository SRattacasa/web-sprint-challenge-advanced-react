import { useState } from "react";

// write your custom hook here to control your checkout form
 export const useForm = (initialValues) => {
    // inputs - handleChange, state (dynamically manage any number of inputs)
    const [values, setValues] = useState(initialValues);
    // console.log("Values?", initialValues)
    
     const handleChanges = e => {
      console.log(e.target.name);
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    };
  
    // form/buttons - submit, clear
    //   const handleSubmit = e => {
    //   if (e) e.preventDefault();
      
    // };
  
    //  const clearForm = e => {
    //   e.preventDefault();
    //   setValues(initialValues);
    // };
  
    return [values, handleChanges];
  };
  
  
 