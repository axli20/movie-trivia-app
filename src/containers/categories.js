/* eslint-disable react/destructuring-assignment */

import React from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';
import { connect } from 'react-redux';
import ProfileScoreHeader from '../components/profile_score_header';
import { fetchCategories, selectCategory } from '../actions';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchCategories();
  }

  onCategoryPress = (category) => {
    const { navigation } = this.props;
    console.log(category);
    this.props.selectCategory(category);
    navigation.navigate('Action');
  }

  renderCategoryButton = (category) => {
    return (
      <Button title={category} key={category} onPress={() => this.onCategoryPress(category)} />
    );
  }

  renderAllCategoryButtons = () => {
    const { categories } = this.props;
    console.log(categories);

    if (categories != null) {
      return (
        categories.map((category) => {
          return this.renderCategoryButton(category.name);
        })
      );
    } else {
      return <Text>Loading</Text>;
    }
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ProfileScoreHeader navigation={navigation} />
        <Text>Categories</Text>
        {this.renderAllCategoryButtons()}
      </View>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    categories: reduxState.game.categories,
  };
}

const mapDispatchToProps = {
  fetchCategories,
  selectCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B22625',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
