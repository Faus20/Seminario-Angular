//creo la interface con los tipos para el componente de producto

//poniendole export puedo importarla desde cualquier otro lugar
export interface Product {
    id: number;
    image: string;
    name: string;
    type: string;
    price: number;
    stock: number;
    quantity: number;
}