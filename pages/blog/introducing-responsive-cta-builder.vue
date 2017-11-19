<template>
  <div>
    <section>
      <article class="post container">
        <div class="date">November 26th, 2017</div>
        <h1 class="title">Why We Built Responsive CTA Builder</h1>
        <author :name="name" :title="title">
          <img src="~/assets/img/daniel.png" :alt="name"/>
        </author>
        <div class="content">
          <p>About a year ago, Jeff Reiner and I made a discovery. The calls-to-action (CTAs) on our company’s blog weren’t performing as well as they could.</p>
          <p>Jeff had spent almost a month redesigning our company’s blog. It was beautiful. We reviewed dozens of blogs and publications that we loved – from tech companies to major newspapers. Then Jeff designed a new blog layout to include only the essentials. We wanted to remove any distractions from our written content.</p>
          <p>But we had a problem. Our CTAs looked horrible on mobile devices. On top of that, they rendered funny which ruined our beautiful aesthetic.</p>
          <p>That really irked us. We followed the same practices that HubSpot or any other inbound marketing blog uses today. We built images in photoshop, with background textures, graphics of eBooks, big headlines, and little buttons to give the impression that readers should click to follow our call-to-action.</p>
          <p>But the problem with this is that the images with text are hard to read on mobile devices. Here’s a couple examples of CTA’s on HubSpot’s blog:</p>
          <img style="max-width: 600px;" src="~/assets/img/intro-blog-hubspot-cta.png"/>
          <p>And here’s how they look on mobile devices: </p>
          <img style="max-width: 400px;" src="~/assets/img/intro-blog-hubspot-cta-mobile.jpg"/>
          <p>Not only do they look bad, but they also don’t perform well. That’s probably because they feel like a web banner ad, not a legitimate, inbound call-to-action.</p>
          <p>So we decided to fix this issue. Jeff, a brilliant problem solver, said “I have an idea.” About five minutes later, Jeff showed me our first responsive CTA.</p>
          <h2>What’s a responsive CTA?</h2>
          <p>Responsive CTAs are built with code, not in photoshop. <nuxt-link to="/">Responsive CTA Builder</nuxt-link> is a tool for building responsive, beautiful calls-to-action. They look great on every device because they resize to the width of the reader’s browser. After you finish designing your CTA, our tool gives you a few lines of code to embed in your blog, website or landing page.</p>
          <p>Here’s a responsive variation of HubSpot’s CTA:</p>
          <div class="rcta_embed" style="font-family: 'Work Sans', sans-serif; border-radius: 4px; background-color: #3177B5;">
              <div class="rcta_columns">
                  <div class="rcta_column rcta_image">
                      <img src="https://blog.hubspot.com/hs-fs/hubfs/00-Blog-Related_Images/SMART_Goals_Excel_Templates.png" alt="I am a placeholder image"/>
                  </div>
                  <div class="rcta_column">
                      <div class="rcta_headline" style="color: #ffffff;">Free Marketing and Goal Setting Template</div>
                      <div class="rcta_description" style="color: #ffffff;">Determine your marketing goals and set deadlines or next year with this free Excel template</div>
                      <div><nuxt-link class="rcta_button" to="/" style="background-color: #FF941B; color: #ffffff">GET YOUR TEMPLATE</nuxt-link></div>
                  </div>
              </div>
          </div>
          <h2>Looking good is one thing, but do Responsive CTAs actually perform better?</h2>
          <p>Yes. They do.</p>
          <p>When we switched our image CTAs with responsive CTAs on our company’s blog we saw a 150% higher conversion rate with the responsive CTAs. So yes, we got 2.5x more clicks on responsive CTAs than we did the image CTAs (testing the same offer, language etc). We saw this same bump on multiple calls-to-action, with different types of offers, not just one.</p>
          <p>It makes sense, doesn’t it? A more readable call-to-action gets visitors to take action.
          71% of marketers believe mobile marketing is core to their business
          That stat comes from a Salesforce “State of Marketing” report in 2015. Making your website mobile friendly is a mandate, not a luxury.</p>
          <img src="~/assets/img/intro-blog-mobile.png"/>
          <h2>Use on your blog, web pages, landing pages…</h2>
          <p>Responsive CTAs are great for your blog, but they are useful in other areas of your website too. For instance, if your website has a long scrolling feature or product tour, a responsive CTA would work great as your bottom call-to-action. Did you see <nuxt-link to="/">our homepage</nuxt-link>?</p>
          <p>We’ve been in private beta with about a dozen accounts using Responsive CTA Builder. So far our users are excited by this tool and using it on their blogs, websites and landing pages.</p>
          <h2>Introducing our public beta</h2>
          <p>Today we are announcing our public beta for Responsive CTA Builder. You can use Responsive CTA Builder for free by signing up here. Jeff and I have started new full-time jobs recently so we are focused on those endeavors, but we wanted to share what we’ve build with the world because we know first-hand how powerful a responsive CTA can be.</p>
          <p><em>If you have any questions, don’t hesitate to shoot us a note. You can reach me at <a target="_blank" href="mailto:daniel@responsivectabuilder.com">daniel@responsivectabuilder.com</a>.</em></p>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
  import author from '~/components/author'
  export default {
    layout: 'blog',
    name: 'introducing-responsive-cta-builder',
    components: {
      author
    },
    data () {
      return {
        name: 'Daniel J. Murphy',
        title: 'Co-Founder'
      }
    },
    head () {
      return {
        title: 'Why We Built Responsive CTA Builder',
        meta: [
          { hid: 'description', name: 'description', content: 'About a year ago, we made a discovery. The calls-to-action (CTAs) on our company’s blog weren’t performing as well as they could. So we decided to fix that.' }
        ],
        link: [
          { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Work+Sans' }
        ]
      }
    }
  }
</script>
