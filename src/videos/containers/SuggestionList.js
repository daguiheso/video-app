import React from 'react';
import {Text, FlatList} from 'react-native';
import SuggestionListLayout from '../components/SuggestionListLayout';
import Empty from '../components/Empty';
import Separator from '../components/Separator';
import Suggestion from '../components/Suggestion';

const SuggestionList = () => {
  const list = [
    {
      title: 'Leo',
      key: '1',
    },
    {
      title: 'Daniel',
      key: '2',
    },
    {
      title: 'David',
      key: '3',
    },
  ];

  const emptyList = () => <Empty text="No hay sugerencias" />;
  const itemSeparator = () => <Separator />;
  const renderItem = ({item}) => <Suggestion {...item} />;

  return (
    <SuggestionListLayout title="Recomendado para ti">
      <FlatList
        data={list}
        renderItem={renderItem}
        ListEmptyComponent={emptyList}
        ItemSeparatorComponent={itemSeparator}
      />
    </SuggestionListLayout>
  );
};

export default SuggestionList;
