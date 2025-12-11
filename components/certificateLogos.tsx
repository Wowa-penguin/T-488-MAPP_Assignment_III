import globalStyles from '@/styles/globalStyles';
import { Image, Text, TouchableOpacity, View } from 'react-native';

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
                <TouchableOpacity onPress={() => onClick('Öllum leyfð')}>
                    <Image source={require('@/assets/certificateLogo/l.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onClick('6 ára')}>
                    <Image source={require('@/assets/certificateLogo/6.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onClick('9 ára')}>
                    <Image source={require('@/assets/certificateLogo/9.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onClick('12 ára')}>
                    <Image
                        source={require('@/assets/certificateLogo/12.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onClick('16 ára')}>
                    <Image
                        source={require('@/assets/certificateLogo/16.png')}
                    />
                </TouchableOpacity>
            </View>
        </>
    );
};

export default CertificateLogos;
