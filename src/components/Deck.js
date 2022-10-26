import { useEffect, useState } from 'react'
import { useSprings, animated} from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { onSnapshot, collection } from 'firebase/firestore';
import db from './firebase.js';

import './Deck.css'

// Initial conditions for each card
const to = (i) => ({
  x: 0,
  y: i * -2,
  delay: i * 80,
})

function Deck() {
  const [companies, setCompanies] = useState ([
    {
      name: "Firebase",
      photo: "https://assets.stickpng.com/images/5847f40ecef1014c0b5e488a.png",
      statement:"If no other cards are displayed, the daily limit of the free plan has been reached."
    }
  ]);

  useEffect(() => 
      onSnapshot(collection(db, "companies"), snapshop =>
        setCompanies(snapshop.docs.map((doc) => doc.data()))
      ), [companies]
  );

  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out

  // Create a bunch of springs at position to
  const [props, api] = useSprings(companies.length, i => ({
    ...to(i),
  }))

  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(({ args: [index], active, movement: [mx], direction: [xDir], velocity: [vx] }) => {
    const trigger = vx > 0.2 // If you flick hard enough it should trigger the card to fly out
    if (!active && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    api.start(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      return {
        x,
        delay: undefined,
        config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
      }
    })
    if (!active && gone.size === companies.length)
      setTimeout(() => {
        gone.clear()
        api.start(i => to(i))
      }, 600)
  })

  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <div className='deck'>
      {props.map(({ x, y }, i) => (
        <animated.div className='card' key={i} style={{ x, y }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            style={{
                backgroundImage: `url(${companies[i].photo})`,
            }}
          >
            <div className='card_text'>
              <h3>{companies[i].name}</h3>
              <p>{companies[i].statement}</p>
             </div>
          </animated.div>
        </animated.div>
      ))}
    </div>
  )
}

export default Deck;