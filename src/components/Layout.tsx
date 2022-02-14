import * as React from 'react'
import { graphql } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { Helmet } from 'react-helmet-async'

import { useSiteMeta } from '@src/hooks/useSiteMeta'

type LayoutProps = {
  data?: GatsbyTypes.Layout_dataFragment,
};

const Layout: React.FC<LayoutProps> = ({ data, children }) => {
  const staticData = useSiteMeta()

  return (
    <>
      <GatsbySeo
        title={staticData.site?.siteMetadata.siteName}
        metaTags={[
          {
            name: 'description',
            content: staticData.site?.siteMetadata.siteName,
          },
        ]}
        openGraph={{
          type: 'website',
          site_name: staticData.site?.siteMetadata.siteName,
          url: staticData.site?.siteMetadata.siteUrl,
          locale: 'ko_kr',
        }}
        facebook={data.data?.fb_app_id != null ? ({
          appId: data.data.fb_app_id,
        }) : undefined}
        language="ko"
        canonical={staticData.site?.siteMetadata.siteUrl}
        twitter={{ cardType: 'summary_large_image', handle: '@daangnteam' }}
      />
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1, user-scalable=no"
        />
      </Helmet>

      {children}
    </>
  )
}

export const fragments = graphql`
  fragment Layout_data on PrismicMbtiIntro {
    data {
      fb_app_id
    }
  }
`;

export default Layout
