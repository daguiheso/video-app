import React from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import SuggestionListLayout from '../components/SuggestionListLayout';
import Empty from '../components/Empty';
import Separator from '../components/Separator';
import Suggestion from '../components/Suggestion';

const SuggestionList = props => {
  const emptyList = () => <Empty text="No hay sugerencias" />;
  const itemSeparator = () => <Separator />;
  const viewMovie = movie => {
    props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie,
      },
    });
  };
  const renderItem = ({item}) => (
    <Suggestion {...item} onPress={() => viewMovie(item)} />
  );
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

const mapStateToProps = state => {
  return {
    list: state.suggestionList,
  };
};

export default connect(mapStateToProps)(SuggestionList);
