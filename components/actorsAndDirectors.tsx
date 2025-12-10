import { Text, View } from 'react-native';

type ActorsAndDirectorsProps = {
    actors: string[] | undefined;
    directors: string[] | undefined;
    writers: string[] | undefined;
};

const ActorsAndDirectors = ({
    actors,
    directors,
    writers,
}: ActorsAndDirectorsProps) => {
    return (
        <View>
            <Text>Actors</Text>
            {actors ? (
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                    }}
                >
                    {actors.map((name) => (
                        <View key={name}>
                            <Text>{name}</Text>
                        </View>
                    ))}
                </View>
            ) : (
                <Text>N/A</Text>
            )}
            <Text>Directors</Text>
            {directors ? (
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                    }}
                >
                    {directors.map((name) => (
                        <View key={name}>
                            <Text>{name}</Text>
                        </View>
                    ))}
                </View>
            ) : (
                <Text>N/A</Text>
            )}
            <Text>Writers</Text>
            {writers ? (
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                    }}
                >
                    {writers.map((name) => (
                        <View key={name}>
                            <Text>{name}</Text>
                        </View>
                    ))}
                </View>
            ) : (
                <Text>N/A</Text>
            )}
        </View>
    );
};

export default ActorsAndDirectors;
