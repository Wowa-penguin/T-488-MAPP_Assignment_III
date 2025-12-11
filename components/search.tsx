import React from 'react';
import { StyleProp, Text, TextInput, TextStyle } from 'react-native';

type SearchProps = {
    title: string;
    value: string;
    placeholder: string;
    onChange: (text: string) => void;
    textStyle?: StyleProp<TextStyle>;
    input?: StyleProp<any>;
};

const Search = ({
    title,
    placeholder,
    value,
    onChange,
    textStyle,
    input,
}: SearchProps) => {
    return (
        <>
            <Text style={textStyle}>{title}</Text>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#888"
                value={value}
                onChangeText={onChange}
                style={input}
            />
        </>
    );
};

export default Search;
