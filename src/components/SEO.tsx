
import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
 
function SEO({ description, lang = 'en', meta = [], title }: any) {
    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | Nesar`}
            meta={[
                {
                    name: `description`,
                    content: description,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: description,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
            ].concat(meta)}
        />
    )
}
 
SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
}
 
SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
}
 
export default SEO
 