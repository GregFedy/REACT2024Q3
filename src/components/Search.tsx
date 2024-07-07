import { Component, ChangeEvent } from 'react';

type Props = {
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
  onSearchClick: () => void;
  onErrorClick: () => void;
};

class Search extends Component<Props> {
  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.props.onSearchTermChange(event.target.value);
  };

  render() {
    return (
      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type='text'
          value={this.props.searchTerm}
          onChange={this.handleChange}
          placeholder='Поиск...'
        />
        <button onClick={this.props.onSearchClick}>Поиск</button>
        <button onClick={this.props.onErrorClick}>Бросить ошибку</button>
      </div>
    );
  }
}

export default Search;
