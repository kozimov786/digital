import React from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import styled from 'styled-components'

export default function Maps() {
  return (
    <YMaps>
      <Wrapper>
        <Map
          defaultState={{ center: [40.749129, 72.359242], zoom: 15 }}
          height={'537px'}
          width={'579px'}
        >
          <Placemark geometry={[40.749129, 72.359242]} />
        </Map>
      </Wrapper>
    </YMaps>
  )
}

const Wrapper = styled.div``