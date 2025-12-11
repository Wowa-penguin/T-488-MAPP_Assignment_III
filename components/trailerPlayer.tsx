import React from "react";
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import globalStyles from "@/styles/globalStyles";
import trailerPlayerStyles from '@/styles/trailerPlayer';

export type TrailerPlayerProps = {
    trailerUrl?: string | null;
    title?: string;
};

const TrailerPlayer: React.FC<TrailerPlayerProps> = ({
    trailerUrl,
    title = 'Stikla',
}) => {
    if (!trailerUrl) {
        return (
            <View style={trailerPlayerStyles.emptyContainer}>
                <Text
                    style={[
                        globalStyles.defaultTitel,
                        trailerPlayerStyles.heading,
                    ]}
                >
                    {title}
                </Text>
                <Text
                    style={[
                        globalStyles.defaultBackgroundColor,
                        trailerPlayerStyles.emptyText,
                    ]}
                >
                    Engin stikla í boði fyrir þessa mynd.
                </Text>
            </View>            
        )
    }

    return (
        <View style={trailerPlayerStyles.container}>
            <Text
                style={[
                    globalStyles.defaultTitel,
                    trailerPlayerStyles.heading,
                ]}
            >
                {title}
            </Text>
            <View style={trailerPlayerStyles.webViewWrapper}>
                <WebView
                    source={{ uri: trailerUrl }}
                    allowsFullscreenVideo
                    javaScriptEnabled
                    domStorageEnabled
                />
            </View>
        </View>
    );
};

export default TrailerPlayer;