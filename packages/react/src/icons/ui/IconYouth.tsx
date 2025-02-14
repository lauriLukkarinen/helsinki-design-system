import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconYouth = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    {...rest}
    role="img"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="currentColor">
      <path d="m8 11.6667-2 .0033c0-1.4728 1.19391-2.67 2.66667-2.67h6.66663c1.4728 0 2.6667 1.1939 2.6667 2.6667v5.3333h-2v-5.3333c0-.3682-.2985-.6667-.6667-.6667h-6.66663c-.36819 0-.66667.2985-.66667.6667z" />
      <g clipRule="evenodd" fillRule="evenodd">
        <path d="m6 17v-5.33l2-.0033v5.3333z" />
        <path d="m8.5 2c0-1.104569.89543-2 2-2h3c1.1046 0 2 .895431 2 2h2.5v2h-2.5v1c0 .98703-.2522 1.9091-.9216 2.57843-.6693.66933-1.5914.92157-2.5784.92157s-1.9091-.25224-2.57843-.92157-.92157-1.5914-.92157-2.57843zm5 2h-3v1c0 .66982.1693.99776.3358 1.16421.1664.16646.4944.33579 1.1642.33579s.9978-.16933 1.1642-.33579c.1665-.16645.3358-.49439.3358-1.16421zm-5.5 13h2v5h4v-5h2v7h-8z" />
      </g>
    </g>
  </svg>
);
