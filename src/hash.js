function extractChunkHash(c) {
    return c.map(e => {
        return e.hash
    })
}

function checksum(ss) {
    let hash = 0,
        char,
        s = ss.join('')
    if (s.length == 0) return hash
    for (let i = 0, l = s.length; i < l; i++) {
        char = s.charCodeAt(i)
        hash = (hash << 5) - hash + char
        hash |= 0 // Convert to 32bit integer
    }
    return hash
}

function chunk(array, chunk_size) {
    return [].concat.apply(
        [],
        array.map((elem, i) =>
            i % chunk_size ? [] : [array.slice(i, i + chunk_size)]
        )
    )
}

export { extractChunkHash, checksum, chunk }
