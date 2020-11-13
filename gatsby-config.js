module.exports = {
    plugins: [
        {
            resolve: `@hangindev/gatsby-theme-courses`,
        },
        // {
        //     resolve: `gatsby-plugin-google-analytics`,
        //     options: {
        //         trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
        //     },
        // },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none", // Google Analytics / GA
                    // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
                    // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
                ],
            },
        },
    ],
    siteMetadata: {
        title: `安迪的 PR0 課程`,
        author: `@txs`,
        siteUrl: `https://course.andys.pro`,
        description: `影音線上程式設計課程平台`,
        social: [
            {
                name: `github`,
                url: `https://github.com/txs`,
            },
        ],
    },
};