import globalStyles from '@/styles/globalStyles';
import styles from '@/styles/movies';
import React, { useState } from 'react';
import { View } from 'react-native';
import Button from './button';
import Search from './search';

type FilterMenuProps = {
    handelCansel: () => void;
};

const FilterMenu = ({ handelCansel }: FilterMenuProps) => {
    const [rating, setRating] = useState('');
    const [range, setRange] = useState('');
    const [actors, setActors] = useState('');
    const [directors, setDirectors] = useState('');
    const [pg, setPg] = useState('');

    return (
        <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
                <View>
                    <Search
                        title="Rating"
                        value={''}
                        onChange={() => console.log('Her')}
                        textStyle={globalStyles.defaultTextColor}
                        container={{}}
                        input={styles.input}
                    />
                </View>
                <View>
                    <Search
                        title="Range"
                        value={''}
                        onChange={() => console.log('Her')}
                        textStyle={globalStyles.defaultTextColor}
                        container={{}}
                        input={styles.input}
                    />
                </View>
                <View>
                    <Search
                        title="Actors"
                        value={''}
                        onChange={() => console.log('Her')}
                        textStyle={globalStyles.defaultTextColor}
                        container={{}}
                        input={styles.input}
                    />
                </View>
                <View>
                    <Search
                        title="Directors"
                        value={''}
                        onChange={() => console.log('Her')}
                        textStyle={globalStyles.defaultTextColor}
                        container={{}}
                        input={styles.input}
                    />
                </View>
                <View>
                    <Search
                        title="PG rating"
                        value={''}
                        onChange={() => console.log('Her')}
                        textStyle={globalStyles.defaultTextColor}
                        container={{}}
                        input={styles.input}
                    />
                </View>
                <View>
                    <Button
                        style={globalStyles.defaultButton}
                        textStyle={globalStyles.defaultTextColor}
                        onPress={handelCansel}
                    >
                        Cansel
                    </Button>
                </View>
            </View>
        </View>
    );
};

export default FilterMenu;
