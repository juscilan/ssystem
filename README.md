# Instruções

# Resource name /catalog

## POST - Catalog (Authenticated)
````
https://ssystem-api.herokuapp.com/catalog

Body:

{
  name: 'SANDALIA HAVAIANAS',
  price: 29.90
}
`````
## GET - Paginated Catalog
````
https://ssystem-api.herokuapp.com/catalog?page=4&limit=5
````
## GET BY ID - Catalog
````
https://ssystem-api.herokuapp.com/catalog/92384790284009
`````

## PUT - Catalog (Authenticated)
````
https://ssystem-api.herokuapp.com/catalog

Body:

{
  _id: 92384790284009,
  name: 'SANDALIA HAVAIANAS MASC',
  price: 39.90
}
`````
## DELETE BY ID - Catalog (Authenticated)
````
https://ssystem-api.herokuapp.com/catalog/92384790284009
````

juscilan.com