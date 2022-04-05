import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => {

  test('debe de retorna el estado inicial', async () => {

    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch'))
    const { data, loading } = result.current

    await waitForNextUpdate()

    // const { data:images, loading } = useFetchGifs('One Punch')
    console.log( data, loading )
    expect( data ).toEqual( [] )
    expect( loading ).toBe( true )
    
  })

  test('debe de retornar un arreglo de imgs y el loading en false ', async () => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch'))
    await waitForNextUpdate()
    const { data, loading } = result.current

    expect( data.length ).toEqual( 10 )
    expect( loading ).toBe( false )
    
  })
  
  
  
})
