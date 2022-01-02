import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class StoryCard extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.cardContainer}>
          <Image
            source={require('../images/story_image_1.png')}
            style={styles.storyImage}
          />

          <View style={styles.titleContainer}>
            <Text style={styles.storyTitleText}>{this.props.story.title}</Text>
            <Text style={styles.storyAuthorText}>
              {this.props.story.author}
            </Text>
            <Text style={styles.descriptionText}>
              {this.props.story.description}
            </Text>
          </View>

          <View style={styles.actionContainer}>
            <View style={styles.likeButton}>
              <Ionicons name="heart" size={RFValue(30)} color="white" />
              <Text style={styles.likeText}>12k</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: '#2f345d',
    borderRadius: RFValue(20),
  },
  storyImage: {
    width: '95%',
    alignSelf: 'center',
    height: RFValue(250),
    resizeMode: 'contain',
    borderRadius: RFValue(10),
  },
  titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: 'center',
  },
  storyTitleText: {
    fontSize: RFValue(25),
    fontFamily: 'Bubblegum-Sans',
    color: 'white',
  },
  storyAuthorText: {
    fontSize: RFValue(18),
    fontFamily: 'Bubblegum-Sans',
    color: 'white',
  },
  descriptionText: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: 13,
    color: 'white',
    paddingTop: RFValue(10),
  },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(10),
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#eb3948',
    borderRadius: RFValue(30),
  },
  likeText: {
    color: 'white',
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
});
