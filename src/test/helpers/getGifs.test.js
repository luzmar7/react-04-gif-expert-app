import { getGifs } from '../../helpers/getGifs'

describe('Pruebas con getGifs fetch', () => {

  test('debe traer 10 elementos', async () => {
    const gifs = await getGifs('One Punch')
    expect( gifs.length ).toBe( 10 )  
  })
  
})
