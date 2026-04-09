import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuLateral from './Menu.jsx';
import Header from './Header.jsx';
import '../Style/Solicitudes.css';


function Solicitudes() {
  return (
    <div className="Admin_Solicitudes">
      <MenuLateral />

      <div className="Contenedor_Solicitudes">
        <Header />

        <div className="Zona_Trabajo_Solicitudes">
          <div className="Header_Seccion_Solicitudes">
            <div className="Texto_Header">
              <h2>Administrador de solicitudes</h2>
              <p>Gestione préstamos y agregue material de trabajo u entretenimiento.</p>
            </div>
            <div className="Acciones_Header">
               <NavLink to="/Historial" className="Btn_Historial">
                  <span>Historial</span>
                </NavLink>
            </div>
          </div>
          <div className="Barra_Filtros_Solicitudes">
            <div className="Input_Busqueda_S">
              <span className="Lupa">🔍</span>
              <input type="text" placeholder="Busqueda" />
            </div>
            <div className="Grupo_Selects">
              <select className="Select_S"><option>Trabajo </option></select>
              <select className="Select_S"><option>Estado </option></select>
              <select className="Select_S"><option>Portátil </option></select>
            </div>
          </div>
          <div className="Contenedor_Tabla_Solicitudes">
            <table className="Tabla_Solicitudes">
              <thead>
                <tr>
                  <th>N° Solicitud</th>
                  <th>Id del solicitante</th>
                  <th>Tipo</th>
                  <th>Estado</th>
                  <th>Material</th>
                  <th>N° equipo</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <tr key={index}>
                    <td>432</td>
                    <td>1031420951</td>
                    <td>Trabajo</td>
                    <td><span className="Estado_Punto activo">Disponible</span></td>
                    <td>Portátil</td>
                    <td>45</td>
                    <td className="Celda_Acciones">
                      <button className="Btn_Check">✔</button>
                      <button className="Btn_Close">✖</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Solicitudes;