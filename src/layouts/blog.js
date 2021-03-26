import React from "react"
import _ from "lodash"
import moment from "moment-strftime"

import { Layout } from "../components/index"
import { classNames, getPages, Link, withPrefix } from "../utils"

export default class Blog extends React.Component {
  render() {
    let col_number = _.get(this.props, "page.frontmatter.col_number", null) || "three"
    let posts_sorted = _.orderBy(
      getPages(this.props.pages, "/blog"),
      "frontmatter.date",
      "desc",
    )
    return (
      <Layout {...this.props}>
        <header
          className={classNames("section", "section--header", {
            "screen-reader-text": _.get(this.props, "page.frontmatter.hide_title", null),
          })}
        >
          <div className="container container--lg">
            <h1 className="section__title line-top">
              {_.get(this.props, "page.frontmatter.title", null)}
            </h1>
            {_.get(this.props, "page.frontmatter.subtitle", null) && (
              <p className="section__subtitle">
                {_.get(this.props, "page.frontmatter.subtitle", null)}
              </p>
            )}
          </div>
        </header>
        <div className="section section--portfolio">
          <div className="container container--lg">
            <div className={"grid post-feed post-feed--col-" + col_number}>
              {_.map(posts_sorted, (post, post_idx) => (
                <article key={post_idx} className="cell post-card">
                  {_.get(post, "frontmatter.thumb_image", null) && (
                    <Link
                      className="post-card__image"
                      href={withPrefix(_.get(post, "__metadata.urlPath", null))}
                    >
                      <img
                        src={withPrefix(_.get(post, "frontmatter.thumb_image", null))}
                        alt={_.get(post, "frontmatter.thumb_image_alt", null)}
                      />
                    </Link>
                  )}
                  <header className="post-card__header">
                    <h2 className="post-card__title">
                      <Link href={withPrefix(_.get(post, "__metadata.urlPath", null))}>
                        {_.get(post, "frontmatter.title", null)}
                      </Link>
                    </h2>
                    <div className="post-card__meta">
                      <time
                        className="published"
                        dateTime={moment(_.get(post, "frontmatter.date", null)).strftime(
                          "%Y-%m-%d %H:%M",
                        )}
                      >
                        {moment(_.get(post, "frontmatter.date", null)).strftime(
                          "%B %d, %Y",
                        )}
                      </time>
                    </div>
                  </header>
                  {_.get(post, "frontmatter.excerpt", null) && (
                    <p className="post-card__body">
                      {_.get(post, "frontmatter.excerpt", null)}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
