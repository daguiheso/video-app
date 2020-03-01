import React from 'react';
import {FlatList} from 'react-native';
import Empty from '../components/Empty';
import Separator from '../components/Separator';
import CategoryListLayout from '../components/CategoryListLayout';
import Category from '../components/Category';

const CategoryList = props => {
  const emptyList = () => <Empty text="No hay sugerencias" />;
  const itemSeparator = () => <Separator isVertical />;
  const renderItem = ({item}) => <Category {...item} />;
  const keyExtractor = item => item.id.toString();

  return (
    <CategoryListLayout title="Categorias">
      <FlatList
        horizontal
        data={props.list}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={emptyList}
        ItemSeparatorComponent={itemSeparator}
      />
    </CategoryListLayout>
  );
};

export default CategoryList;
