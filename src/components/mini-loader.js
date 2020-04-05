import React from 'react'
import ContentLoader from 'react-content-loader'
import './styles/contentLeader.css';

const Loader = props => {
  let height, width
  switch (props.screen) {
    case 'mobile': {
      height = '100'
      width = '400'
      break
    }
    case 'desktop': {
      height = '80'
      width = '800'
      break
    }
    case 'large-screen': {
      height = '150'
      width = '1920'
      break
    }
    default: {
      height = '100'
      width = '1060'
      break
    }
  }
  return (
    <ContentLoader
      viewBox={`0 0 ${width} ${height}`}
      height={height}
      width={width}
      speed={2}
      backgroundColor={'#c1bcbc7a'}
      className="Loader__background"
      {...props}
    >
      {props.imagetype === 'circle' ? (
        <circle cx="60" cy="45" r="30" />
      ) : (
        <rect x="20" y="20" rx="5" ry="5" width="64" height="63" />
      )}
      <rect x="105" y="20" rx="5" ry="5" width="250" height="12" />
      <rect x="105" y="40" rx="5" ry="5" width="180" height="12" />
      <rect x="105" y="60" rx="5" ry="5" width="125" height="12" />
    </ContentLoader>
  )
}

const mini_loader = (props) => (
  <React.Fragment>
    {Array(props.countData)
      .fill('')
      .map((e, i) => (
        <Loader
          screen="desktop"
          key={i}
          imagetype="circle"
          style={{ opacity: Number(2 / i).toFixed(1) }}
        />
      ))}
  </React.Fragment>
)

mini_loader.metadata = {
  name: 'René Sanchez',
  github: 'lskywolfll',
  description: 'List with image (rectangle/circle)',
  filename: 'ImageList',
}

export default mini_loader