import React from 'react'
import { Divider, Image } from 'semantic-ui-react'

const src = 'https://aff.bstatic.com/images/hotel/840x460/120/120664573.jpg'

class Gallery extends React.Component {
    render() {
        return (
  <div>
    <Image.Group size='large'>
      <Image src='https://aff.bstatic.com/images/hotel/840x460/120/120664573.jpg' />
      <Image src='https://aff.bstatic.com/images/hotel/840x460/120/120664573.jpg' />
      <Image src='https://aff.bstatic.com/images/hotel/840x460/120/120664573.jpg' />
     
    </Image.Group>
    
  </div>
)
    }
}
export default Gallery