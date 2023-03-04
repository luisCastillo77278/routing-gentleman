const baseUrl = 'https://rickandmortyapi.com/api'

const characterUrl = baseUrl + '/character'

export const getMorty = async() =>{
  return await fetch(characterUrl + '/2').then(resp => resp.json())
}