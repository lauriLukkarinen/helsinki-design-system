import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

const IconTiktok: React.FC<IconProps> = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M19.071 3H4.93A1.93 1.93 0 003 4.929V19.07A1.93 1.93 0 004.929 21H19.07A1.93 1.93 0 0021 19.071V4.93A1.93 1.93 0 0019.071 3zm-1.926 7.853a3.21 3.21 0 01-2.982-1.437v4.944a3.654 3.654 0 11-3.654-3.654c.076 0 .15.007.225.011v1.801c-.075-.009-.148-.023-.225-.023a1.865 1.865 0 000 3.73c1.03 0 1.94-.811 1.94-1.841l.018-8.398h1.723a3.21 3.21 0 002.957 2.865v2.002"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default IconTiktok;
