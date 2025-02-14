import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: Product[] = [{
    name: "Muerte Fría",
    model: "P90",
    price: 30.00,
    condition: "Poco usado",
    availability: 3,
    rarity: "Común",
    color: "Azul y Blanco",
    image: "https://ejemplo.com/p90-muerte-fria.jpg"
  },
  {
    name: "Cazador Nocturno",
    model: "Cuchillo Bayoneta",
    price: 500.00,
    condition: "Nuevo",
    availability: 0,
    rarity: "Raro",
    color: "Negro y Verde",
    image: "https://ejemplo.com/bayoneta-cazador-nocturno.jpg"
  },
  {
    name: "Hidra",
    model: "Guantes",
    price: 1100.00,
    condition: "Poco usado",
    availability: 1,
    rarity: "Épico",
    color: "Verde y Negro",
    image: "https://ejemplo.com/guantes-hidra.jpg"
  },
  {
    name: "Agua Viva",
    model: "Glock-18",
    price: 25.00,
    condition: "Bastante usado",
    availability: 0,
    rarity: "Poco común",
    color: "Rosa y Morado",
    image: "https://ejemplo.com/glock-agua-viva.jpg"
  },
  {
    name: "Onda de Choque",
    model: "Cuchillo Falchion",
    price: 350.00,
    condition: "Nuevo",
    availability: 0,
    rarity: "Raro",
    color: "Azul y Blanco",
    image: "https://ejemplo.com/falchion-onda-choque.jpg"
  },
  {
    name: "Fénix",
    model: "AWP",
    price: 280.00,
    condition: "Nuevo",
    availability: 0,
    rarity: "Raro",
    color: "Rojo y Naranja",
    image: "https://ejemplo.com/awp-fenix.jpg"
  },
  {
    name: "Cibernético",
    model: "M4A1-S",
    price: 85.00,
    condition: "Poco usado",
    availability: 2,
    rarity: "Común",
    color: "Verde y Negro",
    image: "https://ejemplo.com/m4a1s-cibernetico.jpg"
  },
  {
    name: "Mármol Fade",
    model: "Cuchillo Talón",
    price: 700.00,
    condition: "Nuevo",
    availability: 0,
    rarity: "Raro",
    color: "Multicolor",
    image: "https://ejemplo.com/talon-marmol-fade.jpg"
  },
  {
    name: "Tejedor de Dragones",
    model: "Guantes",
    price: 1200.00,
    condition: "Poco usado",
    availability: 1,
    rarity: "Épico",
    color: "Rojo y Negro",
    image: "https://ejemplo.com/guantes-tejedor-dragones.jpg"
  },
  {
    name: "Vulcan",
    model: "AK-47",
    price: 200.00,
    condition: "Bastante usado",
    availability: 0,
    rarity: "Poco común",
    color: "Azul y Blanco",
    image: "https://ejemplo.com/ak47-vulcan.jpg"
  },
  {
    name: "Caza Nocturna",
    model: "Cuchillo Bowie",
    price: 380.00,
    condition: "Nuevo",
    availability: 0,
    rarity: "Raro",
    color: "Negro y Verde",
    image: "https://ejemplo.com/bowie-caza-nocturna.jpg"
  },
  {
    name: "Puño de Sangre",
    model: "Guantes",
    price: 900.00,
    condition: "Poco usado",
    availability: 1,
    rarity: "Épico",
    color: "Rojo y Negro",
    image: "https://ejemplo.com/guantes-puno-sangre.jpg"
  },
  {
    name: "Fuego Oceánico",
    model: "P2000",
    price: 40.00,
    condition: "Bastante usado",
    availability: 0,
    rarity: "Poco común",
    color: "Azul y Naranja",
    image: "https://ejemplo.com/p2000-fuego-oceanico.jpg"
  },
  {
    name: "Mármol Fade",
    model: "Cuchillo Ursus",
    price: 550.00,
    condition: "Nuevo",
    availability: 0,
    rarity: "Raro",
    color: "Multicolor",
    image: "https://ejemplo.com/ursus-marmol-fade.jpg"
  },
  {
    name: "Dragón Lore",
    model: "AWP",
    price: 2500.00,
    condition: "Nuevo",
    availability: 0,
    rarity: "Épico",
    color: "Dorado y Negro",
    image: "https://ejemplo.com/awp-dragon-lore.jpg"
  },
  {
    name: "Zancudo",
    model: "M4A4",
    price: 100.00,
    condition: "Poco usado",
    availability: 2,
    rarity: "Común",
    color: "Verde y Negro",
    image: "https://ejemplo.com/m4a4-zancudo.jpg"
  },
  {
    name: "Onda de Choque",
    model: "Cuchillo Navaja",
    price: 420.00,
    condition: "Nuevo",
    availability: 0,
    rarity: "Raro",
    color: "Azul y Blanco",
    image: "https://ejemplo.com/navaja-onda-choque.jpg"
  },
  {
    name: "Rey del Pantano",
    model: "Guantes",
    price: 850.00,
    condition: "Poco usado",
    availability: 1,
    rarity: "Épico",
    color: "Verde y Marrón",
    image: "https://ejemplo.com/guantes-rey-pantano.jpg"
  },
  {
    name: "Jaguar",
    model: "AK-47",
    price: 180.00,
    condition: "Bastante usado",
    availability: 0,
    rarity: "Poco común",
    color: "Naranja y Negro",
    image: "https://ejemplo.com/ak47-jaguar.jpg"
  },
  {
    name: "Mármol Fade",
    model: "Cuchillo Shadow Daggers",
    price: 480.00,
    condition: "Nuevo",
    availability: 0,
    rarity: "Raro",
    color: "Multicolor",
    image: "https://ejemplo.com/shadow-daggers-marmol-fade.jpg"
  },
  {
    name: "Hipnótico",
    model: "Desert Eagle",
    price: 60.00,
    condition: "Poco usado",
    availability: 2,
    rarity: "Común",
    color: "Azul y Morado",
    image: "https://ejemplo.com/deagle-hipnotico.jpg"
  },
  {
    name: "Cazador Nocturno",
    model: "Cuchillo Nomad",
    price: 600.00,
    condition: "Nuevo",
    availability: 0,
    rarity: "Raro",
    color: "Negro y Verde",
    image: "https://ejemplo.com/nomad-cazador-nocturno.jpg"
  },
  {
    name: "Espectro Lunar",
    model: "Guantes",
    price: 1300.00,
    condition: "Poco usado",
    availability: 1,
    rarity: "Épico",
    color: "Azul y Plateado",
    image: "https://ejemplo.com/guantes-espectro-lunar.jpg"
  },
  {
    name: "Océano",
    model: "AWP",
    price: 220.00,
    condition: "Nuevo",
    availability: 0,
    rarity: "Raro",
    color: "Azul y Blanco",
    image: "https://ejemplo.com/awp-oceano.jpg"
  }

  ]
  constructor() {
    this.getAllProducts();
  }

  getAllProducts() {
    return this.productList;
  }

  getCondition() {
    return [... new Set(this.productList.map(product => product.condition))]
  }

  getByEstado(estado: string) {
    this.productList.filter(product => product.condition === estado)
  }


  /*  nombre: string;
   modelo: string;
   precio: number;
   estado: string;
   disponibilidad: number;
   rareza: string;
   color: string;
   imagen: string; */
}
