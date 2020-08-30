import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconPersonFemale = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    {...rest}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M11 18v4h2v-4h2v6H9v-6h2zm2.048-11c1.923 0 3.125 1.175 3.588 3.005l1.833 7.25-1.938.49-1.834-7.25c-.247-.977-.71-1.457-1.547-1.493L13.048 9h-2.096c-.902 0-1.392.478-1.65 1.495l-1.833 7.25-1.938-.49 1.833-7.25c.451-1.785 1.605-2.946 3.445-3.003L10.952 7h2.096zM12 0a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2z"
        fill="currentColor"
      />
    </g>
  </svg>
);
