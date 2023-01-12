export const CrudHeader = {headers:{Authorization:"bearer "+ process.env.REACT_APP_STRAPI_API}}
export const CrudHeaderWithBody = (body:any)=> {return {body:body, headers:{Authorization:"bearer "+ process.env.REACT_APP_STRAPI_API}}}

export const CrudLinks = {
    
        services:       process.env.REACT_APP_API_URL+"/services?populate=icon",
        prodcucts:      process.env.REACT_APP_API_URL+"/products?populate=images",
        flatGallery:    process.env.REACT_APP_API_URL+"/flatgalleries?populate=images",
        socialButs:     process.env.REACT_APP_API_URL+"/socials",
        textImage:      process.env.REACT_APP_API_URL+"/text-images?populate=image",
        comments:       process.env.REACT_APP_API_URL+"/reviews?populate=image",
        uploadImage:    process.env.REACT_APP_API_URL+"/upload",
        createComment:  process.env.REACT_APP_API_URL+"/reviews",
        sendMessage:    process.env.REACT_APP_API_URL+"/messages",
        order:          process.env.REACT_APP_API_URL+"/oders"
    
}