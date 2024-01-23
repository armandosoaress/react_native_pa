import React from 'react';
import { View, StyleSheet } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

export function RangeInput({ value, onChange }) {
    return (
        <View style={[styles.area]}>
            <MultiSlider
                style={styles.slider}
                values={[value]}
                sliderLength={280}
                onValuesChange={onChange}
                allowOverlap={true}
                min={1}
                max={12}
                selectedStyle={{
                    backgroundColor: '#eace3d',
                }}
                unselectedStyle={{
                    backgroundColor: '#CCCCCC',
                }}
                markerStyle={{
                    backgroundColor: '#eace3d',
                }}
                pressedMarkerStyle={{
                    backgroundColor: '#eace3d',
                }}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    area: {
        width: "100%",
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    slider: {
        height: 40,
    },
});

