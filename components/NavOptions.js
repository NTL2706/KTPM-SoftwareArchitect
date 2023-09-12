import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Icon } from '@rneui/themed';
import tw from 'twrnc';
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const NavOptions = (value) => {
    const navigation = useNavigation();
    console.log("value========", value);
    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => {
                        if (value)
                            navigation.navigate(item.screen)
                    }}
                    style={tw`pr-2 pl-6 pt-4 pb-8 bg-gray-200 mr-2 mb-5 w-40 rounded-md`}
                >
                    <View style={tw.style("")}>
                        <Image
                            source={{ uri: item.image }}
                            style={{ width: 120, height: 120, resizeMode: "contain" }}
                        />
                        <Text style={tw`mt-2 text-lg font-bold`}>{item.title}</Text>
                        <Icon
                            style={tw`p-2 bg-black rounded-full w-10 mt-6`}
                            type="antdesign"
                            color="white"
                            name="arrowright"
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    // {
    //     id: "456",
    //     title: "Order Food",
    //     image: "https://links.papareact.com/28w",
    //     screen: "EatsScreen",
    // },
];


export default NavOptions;