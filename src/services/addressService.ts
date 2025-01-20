import { AddressData } from "../types/index";

const apiEndpoint = `${import.meta.env.VITE_API_GP_VISEU}`;

const getAddressData = async (zipCode: string): Promise<AddressData | null> => {
  try {
    const response = await fetch(`${apiEndpoint}/${zipCode}`);
    if (!response.ok) {
      throw new Error("failed to fetch address data");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { getAddressData };