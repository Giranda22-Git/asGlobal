### SERVER DATA Structure
# example!!!
{
    "type": "Collection"
    "Catalogs": [
        {
            "name": "Напольные Покрытия"
            "imageName" : "work.jpg"
            "products": [
                {
                    "name": "Плитка"
                    "description": "
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo hic aliquam commodi? Architecto repellendus eaque labore provident quibusdam hic pariatur. At doloremque, autem sapiente facilis aperiam optio beatae magnam maxime perspiciatis aliquid. Numquam vero dolores corrupti pariatur! Saepe iusto eveniet
                    "
                    "startedPrice": "600"
                    "imageName": "work.jpg"
                    "table": [
                        {
                            "name": "Толщина"
                            "result": "3.5 mm"
                        }
                    ]
                    "Colors": [
                        {
                            "imageName": "work.jpg"
                            "Code": "22093"
                        }
                    ]
                }
            ]
        }
    ]
}

### requests
# Catalogs
    get '/Catalogs'
    post '/Catalogs'
    get '/Catalogs/:id'
    put '/Catalogs/:id'
    delete '/Catalogs/:id'

# Products
    get '/products'
    post '/Catalogs/:id/products'
    get '/Catalogs/:idC/products/:idP'
    put '/Catalogs/:idC/products/:idP'
    delete '/Catalogs/:idC/products/:idP'