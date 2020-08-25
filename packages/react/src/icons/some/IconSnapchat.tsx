import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export function IconSnapchat({ size = 's', className = '', style = {}, ...rest }: IconProps) {
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
          d="M19.071 3H4.93A1.93 1.93 0 003 4.929V19.07A1.93 1.93 0 004.929 21H19.07A1.93 1.93 0 0021 19.071V4.93A1.93 1.93 0 0019.071 3zm-.26 12.652c-.141.326-.728.563-1.8.731-.057.077-.101.394-.174.64-.044.148-.148.236-.325.236h-.008c-.25 0-.514-.116-1.037-.116-.707 0-.952.16-1.502.55-.583.414-1.141.768-1.977.732-.844.064-1.55-.45-1.949-.732-.554-.39-.795-.55-1.502-.55-.503 0-.82.124-1.037.124-.217 0-.301-.132-.333-.24-.073-.246-.117-.567-.173-.644-.555-.084-1.8-.3-1.828-.86a.284.284 0 01.237-.297c1.86-.305 2.696-2.214 2.732-2.294 0-.004.004-.008.008-.012.1-.2.12-.37.064-.502-.136-.318-.72-.43-.964-.53-.635-.25-.723-.539-.683-.736.064-.341.578-.554.88-.414.237.113.45.17.63.17a.563.563 0 00.266-.057c-.057-.96-.19-2.33.152-3.098.904-2.02 2.817-2.182 3.38-2.182l.269-.004c1.394 0 2.732.716 3.387 2.182.341.768.209 2.134.152 3.098a.505.505 0 00.23.056c.172-.008.369-.064.59-.169a.734.734 0 01.546 0c.254.093.414.274.418.479.004.26-.229.486-.69.666-.057.025-.125.045-.198.069-.26.084-.659.209-.763.462-.056.132-.032.301.064.502.004.004.004.008.008.012.036.08.872 1.989 2.732 2.294.161.04.286.221.197.434z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
