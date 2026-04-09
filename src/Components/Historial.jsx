import React from "react";
import MenuLateral from './Menu.jsx';
import Header from './Header.jsx';
import '../Style/Historial.css'; 

function Historial() {
  const datosHistorial = Array(9).fill({
    n_solicitud: "432",
    id_solicitante: "1031420951",
    tipo: "Trabajo",
    estado_equipo: "Bueno",
    material: "Portátil",
    n_equipo: "45",
    estado_prestamo: "Entregado", 
    h_prestamo: "09:00",
    h_devolucion: "12:00"
  });

  return (
    <div className="Admin_Historial">
      <MenuLateral />

      <div className="Contenedor_Historial">
        <Header />

        <div className="Zona_Trabajo_Historial">
          <header className="Header_Texto_Historial">
            <h2>Administrador de solicitudes</h2>
            <p>Gestione préstamos y agregue material de trabajo u entretenimiento.</p>
          </header>

          <section className="Card_Blanca_Historial">
            <h3 className="Titulo_Tabla_H">Historial</h3>

            <div className="Contenedor_Buscador_H">
              <div className="Barra_Busqueda_H">
                <span className="Lupa_H"></span>
                <input type="text" placeholder="Buscar por nombre u identificación" />
              </div>
            </div>

            <div className="Tabla_Scroll_H">
              <table className="Tabla_Datos_H">
                <thead>
                  <tr>
                    <th>N° Solicitud</th>
                    <th>Id del solicitante</th>
                    <th>Tipo</th>
                    <th>Estado</th>
                    <th>Material</th>
                    <th>N° equipo</th>
                    <th>Estado de solicitud</th>
                    <th>Hora de préstamo</th>
                    <th>Hora de devolución</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {datosHistorial.map((row, index) => (
                    <tr key={index}>
                      <td>{row.n_solicitud}</td>
                      <td>{row.id_solicitante}</td>
                      <td><span className="Tag_H">{row.tipo} </span></td>
                      <td><span className="Punto_Estado">● {row.estado_equipo}</span></td>
                      <td><span className="Tag_H">{row.material} </span></td>
                      <td>{row.n_equipo}</td>
                      <td><span className="Tag_H">{index % 2 === 0 ? "Entregado" : "Pendiente"} </span></td>
                      <td><span className="Hora_H">{row.h_prestamo}</span></td>
                      <td><span className="Hora_H">{row.h_devolucion}</span></td>
                      <td>
                        <button className={index % 2 === 0 ? "Btn_Lib_H" : "Btn_Lib_H activo"}>
                          Liberar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="Footer_Tabla_H">
              <button className="Btn_Editar_H">Editar</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Historial;