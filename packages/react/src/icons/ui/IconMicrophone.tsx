import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconMicrophone = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    {...rest}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <rect width="24" height="24" />
      <path
        fill="currentColor"
        d="M7,11.5 C7,14.2614237 9.23857625,16.5 12,16.5 C14.6887547,16.5 16.8818181,14.3776933 16.9953805,11.7168896 L17,11.5 L19,11.5 C19,15.0261219 16.3928118,17.9433024 13.0010101,18.4289666 L13,21 L16,21 L16,23 L8,23 L8,21 L11,21 L11,18.42911 C7.68517863,17.9549591 5.1195246,15.1584625 5.00405902,11.7406498 L5,11.5 L7,11.5 Z M12,1 C13.6568542,1 15,2.34314575 15,4 L15,11.5 C15,13.1568542 13.6568542,14.5 12,14.5 C10.3431458,14.5 9,13.1568542 9,11.5 L9,4 C9,2.34314575 10.3431458,1 12,1 Z"
      />
    </g>
  </svg>
);
