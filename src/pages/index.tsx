import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import GitHubIcon from "@material-ui/icons/GitHub"
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import Header from "components/organisms/header"
import Masthead from "components/templates/masthead"
import FeaturedPost from "components/templates/featured-post"
import RecentPosts from "components/templates/recent-posts"
import Sidebar from "components/organisms/sidebar"
import Footer from "components/organisms/footer"
import TopLayout from "components/layout/top-layout"
import sections from "data/sections"
import mainFeaturedPost from "data/mainFeaturedPost"
import featuredPosts from "data/featuredPosts"
import sidebar from "data/sidebar"
import posts from "data/posts"
import sitemap from "data/sitemap"

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}))

export default function Index() {
  const classes = useStyles()
  return (
    <TopLayout canonical={`${sitemap.baseUrl}/`}>
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <Masthead post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <RecentPosts title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer pages={sitemap.pages} />
    </TopLayout>
  )
}
