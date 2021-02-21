import { FC } from 'react';
import classNames from 'classnames';

import styles from './Link.module.css';

type Props = {
    href: string;
    className?: string;
    openNewWindow?: boolean;
    underline?: boolean;
};

const Link: FC<Props> = ({ href, className, openNewWindow = true, underline = true, children }) => (
    <a
        target={openNewWindow ? '_blank' : undefined}
        rel={openNewWindow ? 'noopener noreferrer' : undefined}
        href={href}
        className={classNames(styles.link, className, {
            [styles.underline]: underline,
        })}
    >
        {children}
    </a>
);

export default Link;
