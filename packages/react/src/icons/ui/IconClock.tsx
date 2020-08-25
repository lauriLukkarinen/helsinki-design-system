import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export function IconClock({ size = 's', className = '', style = {}, ...rest }: IconProps) {
  return (
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
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm1 2v5.584l3.243 3.244-1.415 1.415-3.535-3.536.002-.001-.294-.292L11 6h2z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
