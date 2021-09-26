import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Banner } from 'react-bootstrap'

// const title = {
//   textAlign: 'center',
//   background: 'rgba(0, 0, 0, 0.5)',
//   color: 'white'
// }
const Home = ({ user }) => (
  <>
    <Banner
      logo='My Logo'
      url={window.location.pathname}
      items={[
        { content: 'Example Link', url: '/example' },
        { content: 'Another', url: '/another' },
        {
          content: 'Link w/ Children',
          url: '/children',
          children: [
            { content: 'John', url: '/children/john' },
            { content: 'Jill', url: '/children/jill' },
            { content: 'Jack', url: '/children/jack' },
          ],
        },
      ]}
    />
    )
    {/* <div>
      <br></br>
      <h1 style={title}> Welcome to BuildIt. What will you build next?</h1>
    </div>
    <Carousel>
      <Carousel.Item>
        <Link style={{ margin: 'auto' }} to={'/sign-in'}>
          <img
            className='d-block w-100'
            src='https://www.restyledhomes.blog/wp-content/uploads/2020/03/Easy-wood-DIY-home-projects-for-beginners-min-1.jpg'
            alt='First slide'
          />
        </Link>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://diyprojects.com/wp-content/uploads/2016/08/diy-wood-font-style-on-wooden-DIY-Crafts-Sites-ss-FEATURED.jpg'
          alt='Second slide'
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://diyprojects.com/wp-content/uploads/2016/05/young-pretty-girl-holding-brush-applying-glaze-woodworking-projects-for-kids-ss-Feature.jpg'
          alt='Third slide'
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}
  </>
)

export default withRouter(Home)
