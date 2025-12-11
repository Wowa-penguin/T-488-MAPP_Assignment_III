import { Linking } from 'react-native';

export const openLink = (url?: string) => {
    if (!url) return;
    Linking.openURL(url);
};
