import { useState, type FormEvent } from "react";
import { AddressForm } from "./components/AddressForm";
import { InputZipcode } from "./components/Inputs/InputZipcode";
import { getAddressData } from "./services/addressService";
import type { AddressData } from "./types/index";

const App = () => {
  const [addressData, setAddressData] = useState<AddressData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [zipCode, setZipCode] = useState("");

  const intl = {
    title: "Zip Code Lookup",
    isLoading: "Loading...",
    loaded: "Lookup",
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await getAddressData(zipCode);
      if (data) {
        setAddressData(data);
      } else {
        throw new Error("failed to fetch address data");
      }
    } catch (err) {
      setError("error fetching address data. please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <article className="prose m-2 grid place-items-center">
      <h1 className="text-sky-400">{intl.title}</h1>
      <form onSubmit={handleSubmit} className="flex d-flex gap-2">
        <InputZipcode onChange={setZipCode} disabled={loading} />
        <button
          className="btn bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          disabled={loading}
        >
          {loading ? intl.isLoading : intl.loaded}
        </button>
      </form>
      {error && <p className="text-red-400">{error}</p>}
      {addressData && <AddressForm addressData={addressData} />}
    </article>
  );
};

export default App;
