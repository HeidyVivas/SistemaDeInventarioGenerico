import { TipoMovimiento, ProductoGenerico } from "../types";
import { Producto } from "./Producto";
import { Movimiento } from "./Movimiento";

export class Inventario<T extends ProductoGenerico> {
  private productos: Producto<T>[] = [];
  private movimientos: Movimiento<T>[] = [];

  agregarProducto(producto: Producto<T>) {
    this.productos.push(producto);
  }

  registrarMovimiento(tipo: TipoMovimiento, codigo: string, cantidad: number) {
    const producto = this.productos.find(p => p.datos.codigo === codigo);
    if (!producto) throw new Error("Producto no encontrado");

    if (tipo === "entrada") {
      producto.aumentarStock(cantidad);
    } else {
      producto.disminuirStock(cantidad);
    }

    const movimiento = new Movimiento(tipo, producto, cantidad);
    this.movimientos.push(movimiento);
  }

  reporteStock() {
    return this.productos.map(p => p.mostrarInfo());
  }

  reporteMovimientos() {
    return this.movimientos.map(m => m.detalleMovimiento());
  }
}
