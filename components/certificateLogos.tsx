import globalStyles from '@/styles/globalStyles';
import { Text, View } from 'react-native';
import ButtonWithImage from './buttonWithImage';

type CertificateLogosProps = {
    onClick: (text: string) => void;
};

const CertificateLogos = ({ onClick }: CertificateLogosProps) => {
    return (
        <>
            <Text style={globalStyles.defaultTitel}>PG</Text>
            <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                }}
            >
                <ButtonWithImage
                    keyName="l"
                    containerStyle={{}}
                    imgStyle={{ width: 50, height: 50 }}
                    onPress={() => onClick('Öllum leyfð')}
                />
                <ButtonWithImage
                    keyName="6"
                    containerStyle={{}}
                    imgStyle={{ width: 50, height: 50 }}
                    onPress={() => onClick('6 ára')}
                />
                <ButtonWithImage
                    keyName="9"
                    containerStyle={{}}
                    imgStyle={{ width: 50, height: 50 }}
                    onPress={() => onClick('9 ára')}
                />
                <ButtonWithImage
                    keyName="12"
                    containerStyle={{}}
                    imgStyle={{ width: 50, height: 50 }}
                    onPress={() => onClick('12 ára')}
                />
                <ButtonWithImage
                    keyName="16"
                    containerStyle={{}}
                    imgStyle={{ width: 50, height: 50 }}
                    onPress={() => onClick('16 ára')}
                />
            </View>
        </>
    );
};

export default CertificateLogos;
