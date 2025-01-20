import type { AddressData } from "../types"
import { InputField } from "./Inputs/InputField"

interface AddressFormProps {
  addressData: AddressData
}

const intl = {
  title: "Address Details",
  inputsLabel: {
    street: "Street",
    city: "City",
    state: "State",
    neighborhood: "Neighborhood"
  }
}

export function AddressForm({ addressData }: AddressFormProps) {
  return (
    <div className="container text-center">
      <h2 className="text-sky-300">{intl.title}</h2>
      <InputField label="Street" value={addressData.street ?? ""}/>
      <InputField label="Neighborhood" value={addressData.neighborhood ?? ""}/>
      <InputField label="City" value={addressData.city ?? ""}/>
      <InputField label="State" value={addressData.state ?? ""}/>
    </div>
  )
}