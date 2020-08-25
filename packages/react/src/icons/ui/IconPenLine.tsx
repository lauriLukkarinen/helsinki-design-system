import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export function IconPenLine({ size = 's', className = '', style = {}, ...rest }: IconProps) {
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
          d="M20.5 20v2h-17v-2h17zM14.25 2.5L19 7.25 8.25 18l-4.736-.014L3.5 13.25 14.25 2.5zm0 2.75L5.5 14l.007 1.994L7.5 16l8.75-8.75-2-2z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
