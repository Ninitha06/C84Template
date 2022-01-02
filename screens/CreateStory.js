import * as React from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Platform,
  StatusBar,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

import DropDownPicker from 'react-native-dropdown-picker';

export default class CreateStory extends React.Component {
  constructor() {
    super();
    this.state = {
      previewImage: 'image_1',
      dropDownHeight: 40,
      title: '',
      description: '',
      story: '',
      moral: '',
    };
  }
  render() {
    const preview_images = {
      image_1: require('../images/story_image_1.png'),
      image_2: require('../images/story_image_2.png'),
      image_3: require('../images/story_image_3.png'),
      image_4: require('../images/story_image_4.png'),
      image_5: require('../images/story_image_5.png'),
    };
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image
              source={require('../images/logo.png')}
              style={styles.iconImage}></Image>
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>New Story</Text>
          </View>
        </View>
        <View style={styles.fieldContainer}>
          <ScrollView>
            <Image
              source={preview_images[this.state.previewImage]}
              style={styles.image}
            />
            <View style={{ height: RFValue(this.state.dropDownHeight) }}>
              <DropDownPicker
                items={[
                  { label: 'Image 1', value: 'image_1' },
                  { label: 'Image 2', value: 'image_2' },
                  { label: 'Image 3', value: 'image_3' },
                  { label: 'Image 4', value: 'image_4' },
                  { label: 'Image 5', value: 'image_5' },
                ]}
                defaultValue={this.state.previewImage}
                containerStyle={{
                  height: RFValue(40),
                  borderRadius: RFValue(20),
                  marginLeft: RFValue(10),
                  marginRight: RFValue(10),
                }}
                onOpen={() => this.setState({ dropDownHeight:  RFValue(170) })}
                onClose={() => this.setState({ dropDownHeight:  RFValue(40) })}
                style={{ backgroundColor: 'transparent' }}
                itemStyle={{ justifyContent: 'flex-start' }}
                dropDownStyle={{
                  backgroundColor: '#2f345d',
                }}
                labelStyle={{
                  color: 'white',
                  fontFamily: 'Bubblegum-Sans',
                }}
                arrowColor = "white"
                onChangeItem={(item) => {
                  this.setState({ previewImage: item.value });
                }}
              />
            </View>
            <TextInput
              style={styles.inputFont}
              onChangeText={(title) => this.setState({ title })}
              placeholder={'Title'}
              placeholderTextColor="white"
            />

            <TextInput
              style={[styles.inputFont, styles.extraAlign]}
              onChangeText={(description) => this.setState({ description })}
              placeholder={'Description'}
              multiline={true}
              numberOfLines={4}
              placeholderTextColor="white"
            />
            <TextInput
              style={[styles.inputFont, styles.extraAlign]}
              onChangeText={(story) => this.setState({ story })}
              placeholder={'Story'}
              multiline={true}
              numberOfLines={20}
              placeholderTextColor="white"
            />

            <TextInput
              style={[styles.inputFont, styles.extraAlign]}
              onChangeText={(moral) => this.setState({ moral })}
              placeholder={'Moral of the story'}
              multiline={true}
              numberOfLines={4}
              placeholderTextColor="white"
            />
            <View style={styles.submitButton}>
              <Button color="#841584" title="Submit" />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15193c',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(28),
    fontFamily: 'Bubblegum-Sans',
  },
  fieldContainer: {
    flex: 0.85,
  },
  image: {
    width: '93%',
    height: RFValue(250),
    alignSelf: 'center',
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: 'contain',
  },
  inputFont: {
    color: 'white',
    borderRadius: RFValue(10),
    borderColor: 'white',
    borderWidth: RFValue(1),
    paddingLeft: RFValue(10),
    margin: RFValue(10),
    // height: RFValue(40),
    fontFamily: 'Bubblegum-Sans',
  },
  extraAlign: {
    marginTop: RFValue(10),
    textAlignVertical: 'top',
    padding: RFValue(5),
  },
  submitButton: {
    marginVertical: RFValue(10),
    alignItems: 'center',
    justifyContent: 'center',
  }
});
