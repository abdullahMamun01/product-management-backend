

type Variant = {
    type : string ,
    value : string
}

type Inventory  = {
    quantity : number ,
    inStock : boolean
}

export type  TProduct = {
    name : string ,
    description : string ,
    price : number ,
    category : string ,
    tags : string [] ,
    variants : Variant [] ,
    inventory : Inventory

}

