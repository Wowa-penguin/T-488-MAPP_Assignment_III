import React from 'react';
import {
    StyleProp,
    Text,
    TextInput,
    TextStyle,
    View,
    ViewStyle,
} from 'react-native';

type SearchProps = {
    title: string;
    value: string;
    onChange: (text: string) => void;
    textStyle?: StyleProp<TextStyle>;
    container?: StyleProp<ViewStyle>;
    input?: StyleProp<any>;
};

const Search = ({
    title,
    value,
    onChange,
    textStyle,
    container,
    input,
}: SearchProps) => {
    return (
        <View style={container}>
            <Text style={textStyle}>{title}</Text>
            <TextInput
                placeholder="Search"
                placeholderTextColor="#8e8e93"
                value={value}
                onChangeText={onChange}
                style={input}
            />
        </View>
    );
};

export default Search;
