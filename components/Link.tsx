import { FC } from 'react';
import classNames from 'classnames';

import styles from './styles/Link.module.css';

type Props = {
    href: string;
    className?: string;
    openNewWindow?: boolean;
    underline?: boolean;
    onClick?: () => void;
};

const Link: FC<Props> = ({
    href,
    className,
    openNewWindow = true,
    underline = true,
    onClick = () => {},
    children,
}) => (
    <a
        target={openNewWindow ? '_blank' : undefined}
        rel={openNewWindow ? 'noopener noreferrer' : undefined}
        href={href}
        onClick={onClick}
        className={classNames(styles.link, className, {
            [styles.underline]: underline,
        })}
    >
        {children}
    </a>
);

export default Link;
