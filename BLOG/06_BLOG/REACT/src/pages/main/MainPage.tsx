

import React, { useEffect } from 'react'
import PropsPage from '../props/PropsPage'
import cat from '../../assets/img/cat.jpg'

function MainPage() {

  return (
    <div>
      <PropsPage img={cat}/>
    </div>
  )
}

export default MainPage