const getOrigami = async (length) =>{
    const promise = await fetch(`http://localhost:5000/api/origami?length=${length}`)
    const origamis = await promise.json()
    return origamis
}

export default getOrigami