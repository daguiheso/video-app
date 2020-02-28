import React from 'react';
import {Text, FlatList} from 'react-native';
import SuggestionListLayout from '../components/SuggestionListLayout';

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

  return (
    <SuggestionListLayout title="Recomendado para ti">
      <FlatList
        data={list}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />
    </SuggestionListLayout>
  );
};

export default SuggestionList;
