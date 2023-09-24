import url from "./url"

// indexLoader
export const indexLoader = async () => {
    const response = await fetch(url)
    const jobs = await response.json()
    return jobs
}

// showLoader
export const showLoader = async ({params}) => {
    const id = params.id
    const response = await fetch(url + id)
    const job = await response.json()
    return job
}