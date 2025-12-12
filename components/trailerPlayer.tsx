import React  from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import globalStyles from "@/styles/globalStyles";
import trailerPlayerStyles from '@/styles/trailerPlayer';

type TrailerPlayerProps = {
    trailerUrl?: string | null;    
};

const TrailerPlayer: React.FC<TrailerPlayerProps> = ({ trailerUrl }) => {    
    if (!trailerUrl) {
        return (
            <View style={trailerPlayerStyles.emptyContainer}>
                <Text
                    style={[
                        globalStyles.defaultTitel,
                        trailerPlayerStyles.emptyText,
                    ]}
                >
                    Engin stikla í boði fyrir þessa mynd.
                </Text>
            </View>
        );
    }
                
    const openTrailer = async () => {
        await WebBrowser.openBrowserAsync(trailerUrl);
    };

    return (
        <View style={trailerPlayerStyles.container}>
            <TouchableOpacity
                style={globalStyles.defaultButton}
                onPress={openTrailer}
            >
                <Text style={globalStyles.defaultTextColor}>
                    ▶ Horfa á stiklu
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default TrailerPlayer;