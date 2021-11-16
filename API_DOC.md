## Stock

List of available endpoints:
​

-   `get /stock`
-   `post /stock`
-   `delete /stock/:id`


### POST /stock

Request:

-   data:

```json
{
    "item": "string",
    "qty": "integer",
    "price": "integer",
    "category": "string",
}
```

Response:

-   status: 201
-   body:

```json
{
   "stock": {
        "acknowledged": true,
        "insertedId": "6193bc5d3526613295ea4fa1"
    }
}
```

### get /stock

Request:

Response:

-   status: 200
-   body:
```json

  {
    "stock": [
        {
            "_id": "61939fc0eb08f0c1fcc87e55",
            "item": "pensil",
            "qty": "200",
            "price": "1500",
            "category": "stationary",
            "convertQty": 200,
            "convertPrice": 1500
        },
    ]
  }
```

### delete /stock/:id
Request:
-   params: id

Response:

-   status: 201
-   body:

```json
{
    "stock": {
        "acknowledged": true,
        "deletedCount": 1
    }
}
```

## transactions

List of available endpoints:
​

-   `get /transactions`
-   `get /transactions/summary`
-   `post /transactions`
-   `delete /transactions/:id`


### POST /transactions

Request:

-   data:

```json
{
    "itemName": "string",
    "total": "integer",
}
```

Response:

-   status: 201
-   body:

```json
{
   "transaction": {
        "acknowledged": true,
        "insertedId": "6193bc5d3526613295ea4fa1"
    }
}
```

### get /transactions

Request:

Response:

-   status: 200
-   body:
```json

  {
    "transactions":[
        {
            "_id": "6193a9962dd1cc7b2f06ee1e",
            "itemName": "pulpen",
            "total": "20",
            "convertQty": 20,
            "fromItems": [
                {
                    "_id": "61939fb0eb08f0c1fcc87e54",
                    "item": "pulpen",
                    "qty": "100",
                    "price": "2500",
                    "category": "stationary"
                }
            ]
        }
    ]
  }
```

### get /transactions/summary

Request:

Response:

-   status: 200
-   body:
```json
  {
    "transaction": [
        {
            "_id": "celana panjang",
            "total": 2000000
        },
    ]
  }
```

### delete /transactions/:id
Request:
-   params: id

Response:

-   status: 201
-   body:

```json
{
    "transactions": {
        "acknowledged": true,
        "deletedCount": 1
    }
}
```
