import React from "react";
import MenuLateral from './Menu.jsx';
import Header from './Header.jsx';
import '../Style/Añadir.css';

function Añadir() {
  const entregadosData = Array(10).fill({
    id: "1031420556",
    rol: "Aprendiz",
    h_solicitud: "09:00",
    h_entrega: "12:00",
    estado: "Sin novedad"
  });

  return (
    <div className="Admin_Añadir">
      <MenuLateral />

      <div className="Contenedor_Añadir">
        <Header />

        <div className="Zona_Trabajo_Añadir">
          <header className="Texto_Principal">
            <h2>Administrador de material de aprendizaje</h2>
            <p>Gestione préstamos y agregue material de trabajo u entretenimiento.</p>
          </header>

          <section className="Panel_Blanco_Añadir">
            <h3 className="Titulo_Interno">Añadir</h3>

            <div className="Barra_Verde_Acciones">
              <span className="Tag_Entregados">Entregados</span>
              <div className="Buscador_Tabla">
                <span className="Lupa"></span>
                <input type="text" placeholder="Buscar por nombre, identificación" />
              </div>
            </div>

            <div className="Contenedor_Tabla">
              <table className="Tabla_Entregas">
                <thead>
                  <tr>
                    <th>Identificación</th>
                    <th>Rol</th>
                    <th>Hora de solicitud</th>
                    <th>Hora de entrega</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {entregadosData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.rol}</td>
                      <td><span className="Hora_Pill">{item.h_solicitud}</span></td>
                      <td><span className="Hora_Pill">{item.h_entrega}</span></td>
                      <td><span className="Estado_Check">● {item.estado}</span></td>
                      <td>
                        {index % 2 === 0 ? (
                          <button className="Btn_Liberar">Liberar</button>
                        ) : (
                          <button className="Btn_Entregado">Entregado</button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Añadir;