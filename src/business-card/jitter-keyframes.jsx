import { keyframes } from 'styled-components';

export const jitterKeyframes = ({magnitude = '1px', angle = '1'}) => keyframes`
  0% { transform: translate(${magnitude}, ${magnitude}) rotate(0deg); }
  10% { transform: translate(-${magnitude}, -${magnitude}) rotate(-${angle}deg); }
  20% { transform: translate(-${magnitude}, ${magnitude}) rotate(${angle}deg); }
  30% { transform: translate(${magnitude}, ${magnitude}) rotate(0deg); }
  40% { transform: translate(${magnitude}, -${magnitude}) rotate(${angle}deg); }
  50% { transform: translate(-${magnitude}, ${magnitude}) rotate(-${angle}deg); }
  60% { transform: translate(-${magnitude}, ${magnitude}) rotate(0deg); }
  70% { transform: translate(${magnitude}, ${magnitude}) rotate(-${angle}deg); }
  80% { transform: translate(-${magnitude}, -${magnitude}) rotate(${angle}deg); }
  90% { transform: translate(${magnitude}, ${magnitude}) rotate(0deg); }
  100% { transform: translate(${magnitude}, -${magnitude}) rotate(-${angle}deg); }
`;
