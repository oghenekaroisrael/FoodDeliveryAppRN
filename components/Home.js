import React from 'react';
import { 
    Text, 
    StyleSheet, 
    Image, 
    View, 
    TextInput, 
    FlatList, 
    ScrollView,
    TouchableOpacity, 
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import popularData from '../assets/data/popularData';
import categoryData from '../assets/data/categoryData';
import { SafeAreaView } from "react-native-safe-area-context";
import colors from '../assets/colors/colors';

Feather.loadFont();
const Home = ({ navigation }) => {
    const renderCategoryItem = ({ item }) => {
        return (
            <View style={[
                styles.categoryItemWrapper,
                {
                    backgroundColor: item.selected ? colors.primary : colors.white,
                    marginLeft: item.id == 1 ? 20 : 0,
                }
            ]}>
                <Image source={item.image} style={styles.categoryItemImage}/>
                <Text style={styles.categoryItemTitle}>{item.title}</Text>
                <View  style={[
                    styles.categorySelectWrapper,
                    {
                        backgroundColor: item.selected ? colors.white : colors.secondary,
                    }
                ]}>
                    <Feather name="chevron-right" size={8}  style={styles.categorySelectIcon} colors={item.selected ? colors.white : colors.black}/>
                </View>
            </View>
        );
    };
    return (
      <View style={styles.container}>
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false}>
          <SafeAreaView>
              <View style={styles.headerWrapper}>
                  <Image source={require('../assets/images/profile.png')} style={styles.profileImage}/>
                  <Feather name="menu" size={24} color={colors.textDark}></Feather>
              </View>
          </SafeAreaView>

          <View style={styles.titlesWrapper}>
              <Text style={styles.titlesSubtitle}>Food</Text>
              <Text style={styles.titlesTitle}>Delivery</Text>
          </View>
          <View style={styles.searchWrapper}>
              <Feather name="search" size={16} color={colors.textDark} style={styles.search}></Feather>
              <TextInput placeholder="Search" style={styles.searchInput}></TextInput>
          </View>


          <View style={styles.categoriesWrapper}>
              <Text style={styles.categoryTitle}>Categories</Text>
              <View style={styles.categoriesListWrapper}>
                <FlatList
                    data={categoryData}
                    renderItem={renderCategoryItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
              </View>
          </View>

          <View style={styles.popularWrapper}>
              <Text style={styles.popularTitle}>Popular</Text>
              <View style={styles.popularListWrapper}>
              {popularData.map((item) => (
                    <TouchableOpacity
                    key={item.id}
                    onPress={() =>
                        navigation.navigate('Details', {
                        item: item,
                        })
                    }>
                    <View
                        style={[
                        styles.popularCardWrapper,
                        {
                            marginTop: item.id == 1 ? 10 : 20,
                        },
                        ]}>
                        <View>
                        <View>
                            <View style={styles.popularTopWrapper}>
                            <MaterialCommunityIcons
                                name="crown"
                                size={12}
                                color={colors.primary}
                            />
                            <Text style={styles.popularTopText}>top of the week</Text>
                            </View>
                            <View style={styles.popularTitlesWrapper}>
                            <Text style={styles.popularTitlesTitle}>
                                {item.title}
                            </Text>
                            <Text style={styles.popularTitlesWeight}>
                                Weight {item.weight}
                            </Text>
                            </View>
                        </View>
                        <View style={styles.popularCardBottom}>
                            <View style={styles.addPizzaButton}>
                            <Feather name="plus" size={10} color={colors.textDark} />
                            </View>
                            <View style={styles.ratingWrapper}>
                            <MaterialCommunityIcons
                                name="star"
                                size={10}
                                color={colors.textDark}
                            />
                            <Text style={styles.rating}>{item.rating}</Text>
                            </View>
                        </View>
                        </View>

                        <View style={styles.popularCardRight}>
                        <Image source={item.image} style={styles.popularCardImage} />
                        </View>
                    </View>
                    </TouchableOpacity>
                ))}
              </View>
          </View>
          </ScrollView>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 40,
        alignItems: 'center',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40,
    },
    titlesWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    titlesSubtitle: {
        fontSize: 16,
        color: colors.textDark,
    },
    titlesTitle: {
        fontSize: 32,
        color: colors.textDark,
        marginTop: 5,
        fontWeight: 'bold',
    },
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 30,
    },
    search: {
        flex: 1,
        marginLeft: 10,
        borderBottomColor: colors.primary,
        borderBottomWidth: 2,
    },
    searchInput: {
        marginBottom: 5,
        fontSize: 14,
        color: colors.textDark,
        width: '90%',
    },
    categoriesWrapper: {
        marginTop: 30,
    },
    categoryTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 20,
    },
    categoriesListWrapper: {
        paddingBottom: 20,
        paddingTop: 15,
    },
    categoryItemWrapper: {
        marginRight: 20,
        borderRadius: 20,
        backgroundColor: '#F5CA48',
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    categoryItemImage: {
        marginTop: 25,
        height: 60,
        width: 60,
        alignSelf: 'center',
        marginHorizontal: 20,
    },
    categoryItemTitle: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '400',
    },
    categorySelectWrapper: {
        marginTop: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        width: 26,
        height: 26,
        borderRadius: 26,
        marginBottom: 20,
    },
    categorySelectIcon: {
        alignSelf: 'center',
    },
    popularWrapper: {
      paddingHorizontal: 20,
    },
    popularTitle: {
      fontSize: 16,
    },
    popularCardWrapper: {
      backgroundColor: colors.white,
      borderRadius: 25,
      paddingTop: 20,
      paddingLeft: 20,
      flexDirection: 'row',
      overflow: 'hidden',
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.05,
      shadowRadius: 10,
      elevation: 2,
    },
    popularTopWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    popularTopText: {
      marginLeft: 10,
      fontSize: 14,
    },
    popularTitlesWrapper: {
      marginTop: 20,
    },
    popularTitlesTitle: {
      fontSize: 14,
      color: colors.textDark,
    },
    popularTitlesWeight: {
      fontSize: 12,
      color: colors.textLight,
      marginTop: 5,
    },
    popularCardBottom: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
      marginLeft: -20,
    },
    addPizzaButton: {
      backgroundColor: colors.primary,
      paddingHorizontal: 40,
      paddingVertical: 20,
      borderTopRightRadius: 25,
      borderBottomLeftRadius: 25,
    },
    ratingWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 20,
    },
    rating: {
      fontSize: 12,
      color: colors.textDark,
      marginLeft: 5,
    },
    popularCardRight: {
      marginLeft: 40,
    },
    popularCardImage: {
      width: 210,
      height: 125,
      resizeMode: 'contain',
    },
  });
  export default Home;
