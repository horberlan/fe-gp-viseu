import { useState, type ChangeEvent } from "react"

interface InputZipcodeProps {
  onChange: (cep: string) => void
  disabled: boolean
}

export function InputZipcode({ onChange, disabled = false }: InputZipcodeProps) {
  const [ cep, setCep ] = useState("")

  const maskCEP = (value: string): string => {
    const expressionValue = value.replace(/\D/g, "")
    if (expressionValue.length <= 5) {
      return expressionValue
    }
    return `${expressionValue.slice(0, 5)}-${expressionValue.slice(5, 8)}`
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    const maskedValue = maskCEP(value)
    setCep(maskedValue)
    onChange(maskedValue.replace(/\D/g, ""))
  }

  return (
    <input
      type="text"
      name="zipCode"
      value={cep}
      onChange={handleChange}
      className="p-2 border text-white border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500"
      placeholder="00000-000"
      required
      pattern="\d{5}-?\d{3}"
      maxLength={9}
      disabled={disabled}
    />
  )
}

