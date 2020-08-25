import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export function IconUser({ size = 's', className = '', style = {}, ...rest }: IconProps) {
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
          d="M16.267 13a4.733 4.733 0 014.728 4.517l.005.216V22H3v-4.267a4.733 4.733 0 014.517-4.728L7.733 13h8.534zm-8.534 2a2.733 2.733 0 00-2.728 2.567L5 17.733V20h14v-2.267c0-1.416-1.107-2.636-2.46-2.726l-.163-.005L7.733 15zM12 2a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
