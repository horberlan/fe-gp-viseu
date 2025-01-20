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

  return (
    <input
      type="text"
      name="zipCode"
      value={cep}
      className="p-2 border text-white border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
      placeholder="00000-000"
      required
      pattern="\d{5}-?\d{3}"
      maxLength={9}
      disabled={disabled}
    />
  )
}

