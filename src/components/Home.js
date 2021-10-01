import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'

const title = {
  textAlign: 'center',
  color: 'black'
}
const header = {
  background: 'rgba(240, 230, 180, 0.42)',
  margin: 'auto',
  padding: '25px',
  width: 'md',
  color: 'rgba(240, 230, 180, 0.8)'
}
const carousel = {
  color: 'black'
}
const Home = ({ user }) => (
  <>
    <br></br>
    <div style={header}>
      <br></br>
      <h1 style={title}> Welcome to BuildIt. What will you build next?</h1>
    </div>
    <br></br>
    <Carousel style={carousel}>
      <Carousel.Item>
        <Link style={{ margin: 'auto' }} to={'/sign-in'}>
          <img
            className='d-block w-100'
            src='https://www.restyledhomes.blog/wp-content/uploads/2020/03/Easy-wood-DIY-home-projects-for-beginners-min-1.jpg'
            alt='First slide'
          />
        </Link>
        <Carousel.Caption>
          <h3 style={carousel}>Learn to build amazing things</h3>
          <p style={carousel}>
            Our step by step instructions let anyone with any experience get
            started.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link style={{ margin: 'auto' }} to={'/sign-in'}>
          <img
            className='d-block w-100'
            src='https://i.ytimg.com/vi/u3NBJnsEHxg/maxresdefault.jpg'
            alt='Second slide'
          />
        </Link>
        <Carousel.Caption>
          <h3 style={carousel}>Master new skills</h3>
          <p style={carousel}>
            Learn to work with various tools and materials while having fun.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://diyprojects.com/wp-content/uploads/2016/05/young-pretty-girl-holding-brush-applying-glaze-woodworking-projects-for-kids-ss-Feature.jpg'
          alt='Third slide'
        />

        <Carousel.Caption>
          <h3 style={carousel}>Build memories</h3>
          <p style={carousel}>
            Work with friends and family or fellow users from around the world,
            to build more than furniture.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </>
)

export default withRouter(Home)
