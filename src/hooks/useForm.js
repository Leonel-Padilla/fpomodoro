import { useState } from "react"

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues)

  const handleChange = ({ target }) => {
    setValues({
      ...values,
      [target.name] : target.value
    }) 
  }

  return {
    values,
    handleChange
  }
}

export default useForm