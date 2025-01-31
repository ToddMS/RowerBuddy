import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { Defs, Pattern, Rect, Line, Mask } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const borderWidth = 10; 
const borderOffset = 50;

const DiagonalStripes = () => {
  return (
    <View style={StyleSheet.absoluteFill}>
      <Svg height="100%" width="100%">
        <Defs>
          <Pattern
            id="stripes"
            patternUnits="userSpaceOnUse"
            width="20"
            height="20"
            patternTransform="rotate(45)"
          >
            <Rect width="20" height="20" fill="pink" />
            <Line x1="0" y1="0" x2="0" y2="20" stroke="green" strokeWidth="10" />
          </Pattern>

          <Mask id="border-mask">
            <Rect x="0" y="0" width={width} height={height} fill="white" />
            <Rect
              x={borderWidth}
              y={borderWidth}
              width={width - 2 * borderWidth}
              height={height - 2 * borderWidth - borderOffset}
              fill="black"
              rx={15}
              ry={15}
            />
          </Mask>
        </Defs>

        <Rect
          x="0"
          y="0"
          width={width}
          height={height}
          fill="url(#stripes)"
          mask="url(#border-mask)"
        />
      </Svg>
    </View>
  );
};

export default DiagonalStripes;
