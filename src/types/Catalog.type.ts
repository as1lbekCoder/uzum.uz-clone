interface CatalogItem {
    id: number,
    name: string,
};

interface CatalogSubcategory {
    id: number,
    name: string,
    items: CatalogItem[]
};

export interface Catalog {
    id: number,
    name: string,
    img: string,
    subcategory: CatalogSubcategory[]
}