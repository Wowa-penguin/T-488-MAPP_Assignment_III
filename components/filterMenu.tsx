import globalStyles from '@/styles/globalStyles';
import movieDetailes from '@/styles/movieDetailes';
import styles from '@/styles/movies';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Button from './button';
import ButtonWithImage from './buttonWithImage';
import CertificateLogos from './certificateLogos';
import Search from './search';

type FilterMenuProps = {
    handelCansel: () => void;
    onApply: (filters: {
        rating: string;
        ratingType: string;
        actors: string;
        directors: string;
        pg: string;
    }) => void;
};

const FilterMenu = ({ handelCansel, onApply }: FilterMenuProps) => {
    const [rating, setRating] = useState('');
    const [ratingType, setRatingType] = useState('');
    const [actors, setActors] = useState('');
    const [directors, setDirectors] = useState('');
    const [pg, setPg] = useState('');

    const handelApply = () => {
        onApply({ rating, ratingType, actors, directors, pg });
        handelCansel();
    };

    const handleClick = (text: string) => {
        setPg(text);
    };

    return (
        <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
                <View>
                    <Text style={[globalStyles.defaultTextColor]}>Rating</Text>
                    <View style={movieDetailes.ratingLogosContainer}>
                        <ButtonWithImage
                            keyName={'imdb'}
                            containerStyle={
                                movieDetailes.ratingLogoAndTextContainer
                            }
                            imgStyle={movieDetailes.ratingsLogo}
                            onPress={() => setRatingType('imdb')}
                        />
                        <ButtonWithImage
                            keyName={'rotten_critics'}
                            containerStyle={
                                movieDetailes.ratingLogoAndTextContainer
                            }
                            imgStyle={movieDetailes.ratingsLogo}
                            onPress={() => setRatingType('rotten_critics')}
                        />
                        <ButtonWithImage
                            keyName={'rotten_audience'}
                            containerStyle={
                                movieDetailes.ratingLogoAndTextContainer
                            }
                            imgStyle={movieDetailes.ratingsLogo}
                            onPress={() => setRatingType('rotten_audience')}
                        />
                    </View>
                    <Search
                        title=""
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
                    <CertificateLogos onClick={(text) => handleClick(text)} />
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 10,
                    }}
                >
                    <Button
                        style={globalStyles.defaultButton}
                        textStyle={globalStyles.defaultTextColor}
                        onPress={handelCansel}
                    >
                        Cansel
                    </Button>
                    <Button
                        style={globalStyles.defaultButton}
                        textStyle={globalStyles.defaultTextColor}
                        onPress={handelApply}
                    >
                        Apply
                    </Button>
                </View>
            </View>
        </View>
    );
};

export default FilterMenu;
