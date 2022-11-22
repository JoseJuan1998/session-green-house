import { useEffect, useState } from 'react'
import configStyles from './json/configStyles.json'
import globalStyles from './App.module.css'
import styles from './Cards.module.css'
import Button from './components/Button'
import Card from './components/Card'
import { Styles } from './interface'
import H1 from './components/Typography/H1'
import Avatar from './components/Avatar'

function App() {
  
  const [styleConfig, setStyleConfig] = useState({})

  const setStyles = (data:Styles) => {

    let {colors, fontSizes, fonts, spaces} = Object.assign(data)
    setStyleConfig({...colors, ...fontSizes, ...fonts, ...spaces})

  } 

  useEffect(() => {
    setStyles(configStyles)
  }, [])
  
  return (
    <div style={styleConfig} className={globalStyles.appContainer}>
      <div className={styles.container}>
        {/* <div className={styles.cardsContainer}>
            {
              cards.map(card=><Card key={card} w='calc(33.33% - 1.6rem)' h='18.4rem' bgColor='white'>{card}</Card>)
            }
        </div> */}
        <Avatar 
          size='sm' 
          text='Juan'
          numberOfCharacters={2}
          imageSrc='https://sxprotection.com.au/wp-content/uploads/2016/07/team-placeholder.png'
          backgroundColor='var(--orange500)'
        />
        
      </div>
      <H1 variant='regular'>Green house</H1>
    </div>
  )
}

export default App
