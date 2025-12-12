import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@/components/button';
import { RootState } from '@/store';
import { addReview } from '@/store/reviewsSlice';
import globalStyles from '@/styles/globalStyles';

type Props = {
    movieId: string;
};

const ReviewSection = ({ movieId }: Props) => {
    const dispatch = useDispatch();
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);

    const reviews = useSelector(
        (state: RootState) => state.reviews.byMovieId[movieId] ?? []
    );

    const handleSubmitReview = () => {
        if (!reviewText.trim() || rating === 0) return;

        dispatch(
            addReview({
                movieId,
                text: reviewText.trim(),
                rating,
            })
        );

        setReviewText('');
        setRating(0);
    };

    return (
        <View style={{ marginTop: 16, paddingHorizontal: 16 }}>
            <Text style={[globalStyles.defaultTextColor, { marginBottom: 4 }]}>
                Þín einkunn
            </Text>

            <View
                style={{
                    flexDirection: 'row',
                    marginBottom: 8,
                    backgroundColor: '#39396F',
                    borderRadius: 8,
                }}
            >
                {[1, 2, 3, 4, 5].map((star) => (
                    <Text
                        key={star}
                        onPress={() => setRating(star)}
                        style={{ fontSize: 28, marginRight: 4 }}
                    >
                        {star <= rating ? '⭐️' : '☆'}
                    </Text>
                ))}
            </View>

            <Text style={[globalStyles.defaultTextColor, { marginBottom: 4 }]}>
                Skrifa umsögn✍️
            </Text>

            <TextInput
                value={reviewText}
                onChangeText={setReviewText}
                placeholder="Hvað fannst þér um myndina?"
                placeholderTextColor="#777"
                multiline
                style={{
                    borderRadius: 12,
                    padding: 10,
                    minHeight: 70,
                    borderWidth: 1,
                    borderColor: '#444',
                    color: 'white',
                    marginBottom: 8,
                }}
            />

            <Button
                style={[
                    globalStyles.defaultButton,
                    { alignSelf: 'flex-start' },
                ]}
                onPress={handleSubmitReview}
            >
                <Text style={globalStyles.defaultTextColor}>
                    Staðfesta umsögn
                </Text>
            </Button>

            <View style={{ marginTop: 16 }}>
                <Text
                    style={[
                        globalStyles.defaultTextColor,
                        { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
                    ]}
                >
                    Umsagnir
                </Text>

                {reviews.length === 0 ? (
                    <Text style={globalStyles.defaultTextColor}>
                        🍿Engin umsögn eins og er, vertu fyrstur til að skrifa
                        umsögn!
                    </Text>
                ) : (
                    reviews.map((r) => (
                        <View
                            key={r.id}
                            style={{
                                marginBottom: 12,
                                padding: 10,
                                borderRadius: 12,
                                backgroundColor: '#222',
                            }}
                        >
                            <Text style={{ fontSize: 16, marginBottom: 4 }}>
                                {'⭐️'.repeat(r.rating)}{' '}
                                <Text style={{ color: '#aaa', fontSize: 12 }}>
                                    {new Date(r.createdAt).toLocaleDateString()}
                                </Text>
                            </Text>
                            <Text style={globalStyles.defaultTextColor}>
                                {r.text}
                            </Text>
                        </View>
                    ))
                )}
            </View>
        </View>
    );
};

export default ReviewSection;
