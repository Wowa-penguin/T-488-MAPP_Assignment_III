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
    const [actors, setActors] = useState('');
    const [directors, setDirectors] = useState('');
    const [pg, setPg] = useState('');

    return (
        <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
                <View>
                    <Search
                        title="Rating"
                        placeholder="Rating"
                        value={rating}
                        onChange={setRating}
                        textStyle={globalStyles.defaultTextColor}
                        input={styles.input}
                    />
                </View>

                <View>
                    <Search
                        title="Actors"
                        placeholder="Actors"
                        value={actors}
                        onChange={setActors}
                        textStyle={globalStyles.defaultTextColor}
                        input={styles.input}
                    />
                </View>
                <View>
                    <Search
                        title="Directors"
                        placeholder="Directors"
                        value={directors}
                        onChange={setDirectors}
                        textStyle={globalStyles.defaultTextColor}
                        input={styles.input}
                    />
                </View>
                <View>
                    <Search
                        title="PG rating"
                        placeholder="Pg rating"
                        value={pg}
                        onChange={setPg}
                        textStyle={globalStyles.defaultTextColor}
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
