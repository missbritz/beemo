export const getImage = (obj:any) => {
    return {
        ...obj.data.attributes,
        url: `${process.env.APP_IMAGE_BASE_URL}${obj.data.attributes.url}`
    }
}