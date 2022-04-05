import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

import GifGridItem from '../../components/GifGridItem'


describe('Pruebas en <GifGridItem />', () => {

  const title = 'Un titulo'
  const url = 'https://github.com/luzmar7/react-03-counter-app/blob/master/src/tests/CounterApp.test.js'
  
  let wrapper = shallow( <GifGridItem title = { title} url =  { url }/>)
  beforeEach(() =>{
    wrapper = shallow( <GifGridItem title = { title} url =  { url }/>)
  })

  test('debe mostrar <GifGridItem /> correctamente', () => {
    wrapper = shallow( <GifGridItem title = { title} url =  { url }/>)
    expect( wrapper ).toMatchSnapshot()
    
  })

  test('debe tener un parrafo con el title', () => {

    const p = wrapper.find('p')
    expect(p.text().trim()).toBe( title )
    
  })
  test('debe de tener la imagen igual al url y alt de los props', () => {
    const img = wrapper.find('img')
    // console.log(img.props())
    expect(img.prop('src')).toBe(url)
    expect(img.prop('alt')).toBe(title)
  })

  test('debe tener animate__fadeIn', () => {
    const div = wrapper.find('div')
    // animate__fadeIn
    const className = div.prop('className')
    expect(className.includes('animate__fadeIn')).toBe(true)

    
  })
  


  
  





  
})
