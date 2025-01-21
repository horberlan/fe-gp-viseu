import type React from "react"
import { useState, useCallback } from "react"

interface InputZipcodeProps {
  onChange: (zipCode: string) => void
  disabled: boolean
}

export const InputZipcode: React.FC<InputZipcodeProps> = ({ onChange, disabled }) => {
  const [zipCode, setZipCode] = useState("")

  const maskZipCode = useCallback((value: string): string => {
    const expressionValue = value.replace(/\D/g, "")
    if (expressionValue.length <= 5) return expressionValue
    return `${expressionValue.slice(0, 5)}-${expressionValue.slice(5, 8)}`
  }, [])

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const maskedValue = maskZipCode(event.target.value)
      setZipCode(maskedValue)
      onChange(maskedValue.replace(/\D/g, ""))
    },
    [maskZipCode, onChange],
  )

  return (
    <input
      type="text"
      name="zipCode"
      value={zipCode}
      onChange={handleChange}
      className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-sky-500"
      placeholder="Enter Zip Code"
      required
      pattern="\d{5}-?\d{3}"
      maxLength={9}
      disabled={disabled}
    />
  )
}

