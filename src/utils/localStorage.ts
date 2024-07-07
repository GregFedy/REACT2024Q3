export const getSearchTerm = (): string => {
  return localStorage.getItem('searchTerm') || '';
};

export const setSearchTerm = (term: string): void => {
  localStorage.setItem('searchTerm', term);
};
