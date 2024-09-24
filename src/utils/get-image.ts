export const getImage = (obj:any, size: string) => {

    return {
        ...obj.data.attributes,
        url: `${process.env.APP_IMAGE_BASE_URL}${obj.data.attributes.url}`
    }
}