import { Component } from 'react';
import Search from './Search';
import ListItems from './ListItems';
import { getSearchTerm, setSearchTerm } from '../utils/localStorage';
import { Pokemon, fetchItems } from '../utils/api';

type State = {
  searchTerm: string;
  results: Pokemon[];
  error: Error | null;
  isLoading: boolean;
};

class SearchApp extends Component<object, State> {
  state = {
    searchTerm: '',
    results: [],
    error: null,
    isLoading: false
  };

  componentDidMount() {
    const savedSearchTerm = getSearchTerm();
    this.setState({ searchTerm: savedSearchTerm }, this.fetchResults);
  }

  fetchResults = () => {
    const { searchTerm } = this.state;
    this.setState({ isLoading: true });
    fetchItems(searchTerm)
      .then((items) => this.setState({ results: items, error: null }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleSearchTermChange = (searchTerm: string) => {
    this.setState({ searchTerm });
  };

  handleSearchClick = () => {
    const { searchTerm } = this.state;
    const trimmedSearchTerm = searchTerm.trim();

    setSearchTerm(trimmedSearchTerm);
    this.fetchResults();
  };

  handleThrowError = () => {
    throw new Error('Тестовая ошибка');
  };

  render() {
    const { searchTerm, results, error } = this.state;

    return (
      <div>
        <div style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
          <Search
            searchTerm={searchTerm}
            onSearchTermChange={this.handleSearchTermChange}
            onSearchClick={this.handleSearchClick}
            onErrorClick={this.handleThrowError}
          />
        </div>
        <div style={{ padding: '20px' }}>
          {error && <p>Ошибка: {(error as Error).message}</p>}
          {this.state.isLoading && <p>Загрузка...</p>}
          <ListItems items={results} />
        </div>
      </div>
    );
  }
}

export default SearchApp;
