import React from "react"
import Helmet from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import Twitter from "./Twitter"
import OpenGraph from "./OpenGraph"

// TODO graphQL

const SEO = ({
  title,
  headline,
  desc,
  banner,
  pathname,
  article,
  blog,
  node,
}) => {
  const { site } = useStaticQuery(query)

  const {
    buildTime,
    siteMetadata: {
      siteUrl,
      defaultTitle,
      defaultDescription,
      defaultBanner,
      defaultHeadline,
      siteLanguage,
      ogLanguage,
      twitter,
      openGraph,
    },
  } = site

  const seo = {
    title: title || defaultTitle,
    headline: headline || title || defaultHeadline,
    description: desc || defaultDescription,
    image: `${siteUrl}${banner || defaultBanner}`,
    url: `${siteUrl}${pathname || ""}`,
  }

  // https://developers.google.com/search/docs/guides/intro-structured-data

  const schemaOrgPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Илья Семёнов (Marshal)",
    givenName: "Илья",
    familyName: "Семёнов",
    additionalName: "Сергеевич",
    gender: "Male",
    birthDate: "1999-08-10",
    birthPlace: {
      "@type": "Place",
      address: "Республика Беларусь, Минск",
    },
    email: "Ilya@marshal.by",
    weight: 73,
    jobTitle: "Python-разработчик",
    nationality: "Республика Беларусь",
    knowsLanguage: "ru-RU, en-US",
    knowsAbout:
      "Увлекаюсь IT-технологиями более 8 лет, 6 из которых направлены на программирование. Своей главной целью считаю внесение значительного вклада в развитие современного мира путем разработки полезного для пользователей многих стран продукта.",
    url: "https://marshal.by/",
    sameAs: [
      "https://twitter.com/Ilya_Marshal",
      "https://soundcloud.com/MarshalX",
      "https://www.youtube.com/channel/UCAaEM1d1C-IQPCQpllTHAjA",
      "https://www.facebook.com/Marshal.Ilya",
      "https://t.me/MarshalX",
      "https://github.com/MarshalX",
      "https://www.instagram.com/ilya.marshal/",
    ],
  }

  const schemaOrgWebPage = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    url: siteUrl,
    headline: defaultHeadline,
    inLanguage: siteLanguage,
    mainEntityOfPage: siteUrl,
    description: defaultDescription,
    name: defaultTitle,
    author: {
      ...schemaOrgPerson,
    },
    copyrightHolder: {
      ...schemaOrgPerson,
    },
    copyrightYear: new Date().getFullYear(),
    creator: {
      ...schemaOrgPerson,
    },
    publisher: {
      ...schemaOrgPerson,
    },
    datePublished: "2019-05-19",
    dateModified: buildTime,
    image: {
      "@type": "ImageObject",
      url: `${siteUrl}${defaultBanner}`,
    },
  }

  // Initial breadcrumb list

  const itemListElement = []
  let breadcrumbPosition = 1

  let schemaArticle = null

  if (blog) {
    itemListElement.push({
      "@type": "ListItem",
      item: {
        "@id": `${siteUrl}/blog/posts`,
        name: "Блог",
      },
      position: breadcrumbPosition++,
    })
  }

  if (article) {
    schemaArticle = {
      "@context": "http://schema.org",
      "@type": "Article",
      author: {
        ...schemaOrgPerson,
      },
      copyrightHolder: {
        ...schemaOrgPerson,
      },
      copyrightYear: "2020",
      creator: {
        ...schemaOrgPerson,
      },
      publisher: {
        "@type": "Organization",
        name: "Илья Семёнов (Marshal)",
        url: `${siteUrl}`,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}${defaultBanner}`,
        },
      },
      datePublished: node.first_publication_date,
      dateModified: node.last_publication_date,
      description: seo.description,
      headline: seo.headline,
      inLanguage: siteLanguage,
      url: seo.url,
      name: seo.headline,
      image: {
        "@type": "ImageObject",
        url: seo.image,
      },
      mainEntityOfPage: seo.url,
    }

    node.data.categories.map(cat =>
      cat.category.document.map(doc =>
        itemListElement.push({
          "@type": "ListItem",
          item: {
            "@id": `${siteUrl}/category/${doc.uid}`,
            name: `${doc.data.name}`,
          },
          position: breadcrumbPosition++,
        })
      )
    )
  }

  // push current page to breadcrumb
  itemListElement.push({
    "@type": "ListItem",
    item: {
      "@id": seo.url,
      name: seo.headline,
    },
    position: breadcrumbPosition++,
  })

  const breadcrumb = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    description: "Breadcrumbs list",
    name: "Breadcrumbs",
    itemListElement,
  }

  return (
    <>
      <Helmet title={seo.title}>
        <html lang={siteLanguage} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
        {!article && (
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgWebPage)}
          </script>
        )}
        {article && (
          <script type="application/ld+json">
            {JSON.stringify(schemaArticle)}
          </script>
        )}
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      </Helmet>
      <OpenGraph
        desc={seo.description}
        image={seo.image}
        title={seo.headline}
        type={article ? "article" : "website"}
        url={seo.url}
        locale={ogLanguage}
        name={openGraph}
      />
      <Twitter
        title={seo.title}
        image={seo.image}
        desc={seo.description}
        username={twitter}
      />
    </>
  )
}

export default SEO

SEO.defaultProps = {
  title: null,
  defaultHeadline: null,
  desc: null,
  banner: null,
  pathname: null,
  article: false,
  node: null,
}

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        siteUrl
        defaultTitle: title
        defaultDescription: description
        defaultBanner: banner
        defaultHeadline: headline
        siteLanguage
        ogLanguage
        twitter
        openGraph
      }
    }
  }
`
