import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function GoBackIcon(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        fill={props.color}
        fillRule="evenodd"
        d="M10.601 4.399a.85.85 0 0 1 0 1.202L5.052 11.15H21a.85.85 0 1 1 0 1.7H5.052l5.55 5.549a.85.85 0 1 1-1.203 1.202l-7-7a.85.85 0 0 1 0-1.202l7-7a.85.85 0 0 1 1.202 0Z"
        clipRule="evenodd"
      />
    </Svg>
  );
}
export default GoBackIcon;
