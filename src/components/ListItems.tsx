import { Component } from 'react';
import Item from './Item';
import { Pokemon } from '../utils/api';

type Props = {
  items: Pokemon[];
};

class ListItems extends Component<Props> {
  render() {
    const { items } = this.props;

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    );
  }
}

export default ListItems;
