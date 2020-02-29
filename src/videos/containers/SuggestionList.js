import React from 'react';
import {Text, FlatList} from 'react-native';
import SuggestionListLayout from '../components/SuggestionListLayout';
import Empty from '../components/Empty';
import Separator from '../components/Separator';
import Suggestion from '../components/Suggestion';

const SuggestionList = props => {
  const emptyList = () => <Empty text="No hay sugerencias" />;
  const itemSeparator = () => <Separator />;
  const renderItem = ({item}) => <Suggestion {...item} />;
  const keyExtractor = item => item.id.toString();

  return (
    <SuggestionListLayout title="Recomendado para ti">
      <FlatList
        data={props.list}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={emptyList}
        ItemSeparatorComponent={itemSeparator}
      />
    </SuggestionListLayout>
  );
};

export default SuggestionList;
