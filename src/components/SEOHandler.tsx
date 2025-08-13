import React from "react";
import { useParams, useLocation } from "react-router-dom";
import SEO from "./SEO";

const SEOHandler = () => {
    const { id } = useParams();
    const location = useLocation();

    const [seoData, setSeoData] = React.useState({
        title: "Uzum Market - Onlayn xarid qilish",
        description: "Eng yaxshi narxlarda turli tovarlar",
        image: "/default-image.jpg",
        keywords: "uzum, market, shop, onlayn, ecommere, xarid, samsung, apple, clone, google"
    })

    return (
        <div>SEOHandler</div>
    )
}

export default SEOHandler