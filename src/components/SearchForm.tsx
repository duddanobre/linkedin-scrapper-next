"use client";

import LocationAutocomplete from "../utils/locationAutoComplete";

type SearchFormProps = {
  keywords: string;
  setKeywords: (value: string) => void;
  searchBy: "country" | "city";
  setSearchBy: (value: "country" | "city") => void;
  country: string;
  setCountry: (value: string) => void;
  city: string;
  setCity: (value: string) => void;
  loading?: boolean;
  handleSearch: () => void;
};

export function SearchForm({
  keywords,
  setKeywords,
  searchBy,
  setSearchBy,
  country,
  setCountry,
  city,
  setCity,
  loading = false,
  handleSearch,
}: SearchFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md w-full mx-auto mt-10">
      <input
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="Digite o cargo (ex: UX UI designer júnior)"
        className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex gap-4 items-center">
        <label>
          <input
            type="radio"
            name="searchBy"
            value="country"
            checked={searchBy === "country"}
            onChange={() => setSearchBy("country")}
            className="mr-1"
          />
          Por País
        </label>

        <label>
          <input
            type="radio"
            name="searchBy"
            value="city"
            checked={searchBy === "city"}
            onChange={() => setSearchBy("city")}
            className="mr-1"
          />
          Por Cidade
        </label>
      </div>

      {searchBy === "country" && (
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Digite o país (ex: Brasil)"
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}

      {searchBy === "city" && (
        <LocationAutocomplete
          onSelect={(val) => setCity(val)}
        />
      )}

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
      >
        {loading ? "Buscando..." : "Buscar vagas"}
      </button>
    </form>
  );
}
