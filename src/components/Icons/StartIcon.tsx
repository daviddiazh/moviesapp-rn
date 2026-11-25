import * as React from 'react';

import Svg, { Path, SvgProps } from 'react-native-svg';

export default function StartIcon(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fill={props.color}
        fillRule="evenodd"
        d="M12 2.65a.85.85 0 0 1 .76.469l2.617 5.215 5.728.714a.85.85 0 0 1 .503 1.438l-4.075 4.168 1.122 5.681a.85.85 0 0 1-1.199.933L12 18.676l-5.456 2.592a.85.85 0 0 1-1.199-.933l1.122-5.68-4.075-4.169a.85.85 0 0 1 .503-1.438l5.728-.714 2.617-5.215a.85.85 0 0 1 .76-.47Z"
        clipRule="evenodd"
      />
    </Svg>
  );
}
