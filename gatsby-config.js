module.exports = {
    plugins: [
        {
            resolve: `@hangindev/gatsby-theme-courses`,
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
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