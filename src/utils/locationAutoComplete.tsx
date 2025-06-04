"use client";

import { useEffect, useState } from "react";

type Municipio = {
  id: number;
  nome: string;
  uf: string;
};

export default function LocationAutocomplete({ onSelect }: { onSelect: (cidade: string) => void }) {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState<Municipio[]>([]);
  const [allCities, setAllCities] = useState<Municipio[]>([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const res = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/municipios");
        const data = await res.json();

        const cities = data.map((item: any) => ({
          id: item.id,
          nome: item.nome,
          uf: item?.microrregiao?.mesorregiao?.UF?.sigla,
        }));

        setAllCities(cities);
      } catch (error) {
          console.error('Erro ao buscar cidades:', error);
      }
    };

    fetchCities();
  }, []);

  useEffect(() => {
    if (input.length === 0) {
      setSuggestions([]);
      return;
    }

    const filtered = allCities.filter((c) =>
      `${c.nome}, ${c.uf}`.toLowerCase().includes(input.toLowerCase())
    );

    setSuggestions(filtered.slice(0, 10)); // Limita a 10 sugestões
  }, [input, allCities]);

  return (
    <div className="relative">
      <input
        className="w-full p-2 border border-gray-300 rounded"
        type="text"
        placeholder="Digite a cidade"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white dark:bg-zinc-900 border border-gray-300 rounded mt-1 max-h-60 overflow-y-auto">
          {suggestions.map((city) => (
            <li
              key={city.id}
              onClick={() => {
                onSelect(`${city.nome}, ${city.uf}`);
                setInput(`${city.nome}, ${city.uf}`);
                setSuggestions([]);
              }}
              className="p-2 hover:bg-gray-100 cursor-pointer dark:text-white"
            >
              {city.nome}, {city.uf}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
