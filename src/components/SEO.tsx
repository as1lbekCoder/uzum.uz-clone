import type { FC } from "react";
import { Title, Meta } from "react-head";
import type { SEOprops } from "@/types/SEO.type";

const SEO: FC<SEOprops> = ({ description, title, keywords, image }) => {
    return (
        <>
            <Title>{title}</Title>
            <Meta name="description" content={description} />
            {keywords && <Meta name="keywords" content={keywords} />}

            <Meta property="og:title" content={title} />
            <Meta property="og:description" content={description} />
            {image && <Meta property="og:image" content={image} />}
            <Meta property="og:type" content="website" />

            <Meta name="twitter:card" content="summary_large_image" />
            {image && <Meta name="twitter:image" content={image} />}
        </>
    );
};

export default SEO;
