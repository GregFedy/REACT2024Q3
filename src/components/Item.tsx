import { Component } from 'react';
import { Pokemon } from '../utils/api';

type Props = {
  item: Pokemon;
};

class Item extends Component<Props> {
  render() {
    const { item } = this.props;

    return (
      <div style={{ padding: '10px' }}>
        <h3>{`#${item.id} ${item.name}`}</h3>
      </div>
    );
  }
}

export default Item;
