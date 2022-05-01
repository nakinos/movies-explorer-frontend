import { useCallback, useState } from "react";
import isEmail from "validator/lib/isEmail";

export function useForm(data = {}) {
  const [values, setValues] = useState(data);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setValues({...values, [name]: target.type === "checkbox" ? target.checked : value});
  };

  return {values, handleChange, setValues};
}

export function useFormWithValidation(data = {}, haveEmail = false) {
  const [values, setValues] = useState(data);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;   
    setValues({ ...values, [name]: value });

    if (haveEmail) {
      const emailValue = name === "email" ? value : target.closest("form").elements["email"].value;
      if (name === "email") {
        setErrors({ ...errors, [name]: !isEmail(value) ? "Формат email некорректный" : ""});
      } else {
        setErrors({ ...errors, [name]: target.validationMessage });
      }
      setIsValid(target.closest("form").checkValidity() && isEmail(emailValue));
    } else {
      setErrors({ ...errors, [name]: target.validationMessage });
      setIsValid(target.closest("form").checkValidity());
    }
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm, setValues };
}
