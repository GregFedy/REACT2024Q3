export type Pokemon = {
  name: string;
  id?: number;
};

export type ApiResponse = {
  results: Pokemon[];
};

export const fetchItems = async (searchTerm: string): Promise<Pokemon[]> => {
  const trimmedSearchTerm = searchTerm.trim();

  let url = 'https://pokeapi.co/api/v2/pokemon';
  if (trimmedSearchTerm) {
    url += `/${trimmedSearchTerm.toLowerCase()}`;
  } else {
    url += '?limit=100';
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  if (trimmedSearchTerm) {
    const data = await response.json();
    return [
      {
        name: data.name,
        id: data?.id
      }
    ];
  } else {
    const data: ApiResponse = await response.json();
    return data.results.map((item, index) => ({
      name: item.name,
      id: index + 1
    }));
  }
};
