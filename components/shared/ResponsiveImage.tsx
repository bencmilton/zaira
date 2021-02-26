import { FC } from 'react';

type Sizes = {
    '685px'?: string;
    '913px'?: string;
    '1218px'?: string;
    '1220px'?: string;
};

type Props = {
    filename: string;
    imageAlt: string;
    className?: string;
    sizes?: Sizes;
};

const ResponsiveImage: FC<Props> = ({
    filename,
    imageAlt,
    className,
    sizes = {},
}) => (
    <picture>
        <source
            media="(max-width: 767px)"
            sizes={`(max-width: 685px) ${
                sizes['685px'] || '100vw'
            }, 685px`}
            srcSet={`
    ${filename}_ar_1_1,c_fill,g_auto__c_scale,w_480.png 480w,
    ${filename}_ar_1_1,c_fill,g_auto__c_scale,w_685.png 685w`}
        />
        <source
            media="(min-width: 768px) and (max-width: 991px)"
            sizes={`(max-width: 913px) ${
                sizes['913px'] || '100vw'
            }, 913px`}
            srcSet={`
    ${filename}_ar_4_3,c_fill,g_auto__c_scale,w_768.png 768w,
    ${filename}_ar_4_3,c_fill,g_auto__c_scale,w_913.png 913w`}
        />
        <source
            media="(min-width: 992px) and (max-width: 1199px)"
            sizes={`(max-width: 1218px) ${
                sizes['1218px'] || '100vw'
            }, 1218px`}
            srcSet={`
    ${filename}_ar_16_9,c_fill,g_auto__c_scale,w_992.png 992w,
    ${filename}_ar_16_9,c_fill,g_auto__c_scale,w_1185.png 1185w,
    ${filename}_ar_16_9,c_fill,g_auto__c_scale,w_1218.png 1218w`}
        />
        <img
            className={className}
            sizes={`(max-width: 1220px) ${
                sizes['1220px'] || '100vw'
            }, 1220px`}
            srcSet={`
    ${filename}_c_scale,w_1200.png 1200w,
    ${filename}_c_scale,w_1220.png 1220w`}
            src={`${filename}_c_scale,w_1220.png`}
            alt={imageAlt}
        />
    </picture>
);

export default ResponsiveImage;
