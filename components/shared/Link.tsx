import { FC } from 'react';
import classNames from 'classnames';
import NextLink from 'next/link';

import styles from './styles/Link.module.css';

type Props = {
    href: string;
    title?: string;
    className?: string;
    openNewWindow?: boolean;
    underline?: boolean;
    nextLink?: boolean;
    onClick?: () => void;
};

const Link: FC<Props> = ({
    href,
    title,
    className,
    openNewWindow = true,
    underline = true,
    nextLink = false,
    onClick = () => {},
    children,
}) => {
    const linkClasses = classNames(styles.link, className, {
        [styles.underline]: underline,
    });

    if (nextLink && href) {
        return (
            <NextLink href={href}>
                <a
                    title={title}
                    onClick={onClick}
                    className={linkClasses}
                >
                    {children}
                </a>
            </NextLink>
        );
    }

    return (
        <a
            target={openNewWindow ? '_blank' : undefined}
            rel={openNewWindow ? 'noopener noreferrer' : undefined}
            href={href}
            title={title}
            onClick={onClick}
            className={linkClasses}
        >
            {children}
        </a>
    );
};

export default Link;
