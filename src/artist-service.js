const artists = [
	{ id: 1, name: 'Chance the Rapper', image: 'https://bit.ly/2UfUv0d' },
	{ id: 2, name: 'Talking Heads', image: 'https://bit.ly/2Gf8PRL' },
	{ id: 3, name: 'Atmosphere', image: 'https://bit.ly/2UBlAjz' }
]

export function getAllArtists() {
	return artists
}

export function getArtist(id) {
	let artist = artists.filter((a) => a.id === +id)
	return artist[0]
}
