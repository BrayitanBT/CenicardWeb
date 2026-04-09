import React, { useState } from 'react';
import MenuLateral from './Menu.jsx';
import Header from './Header.jsx';
import '../Style/Servicios.css';

const noticiasData = [
  { id: 1, title: 'Nueva convocatoria', desc: 'Apoyos de sostenimiento desde el 4 de marzo...' },
  { id: 2, title: 'Nueva convocatoria', desc: 'Apoyos de sostenimiento desde el 4 de marzo...' },
  { id: 3, title: 'Nueva convocatoria', desc: 'Apoyos de sostenimiento desde el 4 de marzo...' },
  { id: 4, title: 'Nueva convocatoria', desc: 'Apoyos de sostenimiento desde el 4 de marzo...' },
  { id: 5, title: 'Nueva convocatoria', desc: 'Apoyos de sostenimiento desde el 4 de marzo...' },
  { id: 6, title: 'Nueva convocatoria', desc: 'Apoyos de sostenimiento desde el 4 de marzo...' },
  { id: 7, title: 'Nueva convocatoria', desc: 'Apoyos de sostenimiento desde el 4 de marzo...' },

];

const recursosData = [
  { id: 1, num: 50, name: 'Portátil', type: 'Trabajo', state: 'Buen estado', stateClass: 'green' },
  { id: 2, num: 43, name: 'Portátil', type: 'Trabajo', state: 'Novedad', stateClass: 'orange' },
  { id: 3, num: 10, name: 'Portátil', type: 'Trabajo', state: 'Dañado', stateClass: 'red' },
  { id: 4, num: 10, name: 'Portátil', type: 'Trabajo', state: 'Dañado', stateClass: 'red' },
  { id: 5, num: 10, name: 'Portátil', type: 'Trabajo', state: 'Dañado', stateClass: 'red' },
];

function Servicios() {
  const [modalRecurso, setModalRecurso] = useState(false);
  const [modalNoticia, setModalNoticia] = useState(false);

  return (
    <div className="Admin_Servicios">
      <MenuLateral />

      <div className="Contenedor_Servicios">
        <Header />
        
        <div className="Area_Trabajo_Main">
          <div className="Header_Seccion">
            <div className="Texto_Header">
              <h2>Administrador de material de aprendizaje</h2>
              <p>Gestione préstamos y agregue material de trabajo u entretenimiento.</p>
            </div>
          </div>

          <div className="Contenedor_Busqueda">
            <div className="Barra_Busqueda">
              <span className="Lupa">🔍</span>
              <input type="text" placeholder="Busqueda" className="Input_Busqueda" />
            </div>
          </div>

          <div className="Panel_Dual">
            {/* --- COLUMNA NOTICIAS --- */}
            <div className="Columna_Noticias">
              <div className="Fila_Titulo">
                <h3>Noticias</h3>
                <button className="Btn_Añadir" onClick={() => setModalNoticia(true)}>+ Añadir</button>
              </div>
              <div className="Lista_Items">
                {noticiasData.map((noticia) => (
                  <div className="Card_Noticia" key={noticia.id}>
                    <div className="Icono_Noticia_Container">👥</div>
                    <div className="Info_Noticia">
                      <span className="Tag_Verde">Evento</span>
                      <h4>{noticia.title}</h4>
                      <p>{noticia.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* --- COLUMNA RECURSOS (Recuperada) --- */}
            <div className="Columna_Recursos">
              <div className="Fila_Titulo">
                <h3>Recursos Educativos</h3>
                
                <button className="Btn_Añadir" onClick={() => setModalRecurso(true)}>+ Añadir</button>
                {modalRecurso && (
                    <div className="Overlay_Modal">
                      <div className="Contenedor_Modal_Recurso">
                        <div className="Header_Modal_Añadir">
                          <h2 className="Titulo_Modal">Añadir Material</h2>
                          <button className="Cerrar_X" onClick={() => setModalRecurso(false)}>&times;</button>
                        </div>

                        <div className="Cuerpo_Modal_Recurso">
                          <div className="Fila_Triple">
                            <div className="Campo_Form">
                              <label className="Label_Form">Nombre</label>
                              <input type="text" className="Input_Texto_Redondo" placeholder="Lenovo LOQ" />
                            </div>
                            <div className="Campo_Form">
                              <label className="Label_Form">Tipo</label>
                              <select className="Select_Modal">
                                <option>Trabajo</option>
                              </select>
                            </div>
                            <div className="Campo_Form">
                              <label className="Label_Form">Material</label>
                              <select className="Select_Modal">
                                <option>Portátil</option>
                              </select>
                            </div>
                          </div>

                          <div className="Campo_Form">
                            <label className="Label_Form">Descripción</label>
                            <textarea className="Input_Area_Recurso" placeholder="Detalles del material..."></textarea>
                          </div>

                          <div className="Fila_Dual_Cajas">
                            <div className="Campo_Form">
                              <label className="Label_Form">Características:</label>
                              <textarea className="Caja_Detalle" placeholder="Almacenamiento, RAM..."></textarea>
                            </div>
                            <div className="Campo_Form">
                              <label className="Label_Form">Programas:</label>
                              <textarea className="Caja_Detalle" placeholder="Software instalado..."></textarea>
                            </div>
                       </div>

        <div className="Footer_Publicar">
          <button className="Btn_Guardar_Verde" onClick={() => setModalRecurso(false)}>
            <span className="Simbolo_Mas">+</span> Guardar
          </button>
        </div>
      </div>
    </div>
  </div>
)}

              </div>
              
              <div className="Filtros_Simulados">
                <select className="Select_Filtro">
                  <option value="trabajo">Trabajo</option>
                  <option value="entretenimiento">Entretenimiento</option>
                </select>

                <select className="Select_Filtro">
                  <option value="portatil">Portátil</option>
                  <option value="tablet">Tablet</option>
                  <option value="monitor">Monitor</option>
                </select>
              </div>

              <div className="Lista_Items">
                {recursosData.map((recurso) => (
                  <div className="Card_Recurso" key={recurso.id}>
                    <div className="Icono_Recurso_Container">
                      <span>💻</span>
                      <strong>{recurso.num}</strong>
                    </div>
                    <div className="Detalle_Recurso">
                      <div className="Top_Recurso">
                        <h4>{recurso.name}</h4>
                        <span className="Tag_Verde_Min">{recurso.type}</span>
                      </div>
                      <p>Procesador INTEL core i3 - 12va GEN</p>
                      <p>8 GB RAM / SSD 256 GB</p>
                      <div className="Recurso_Estado_Tag_Cont">
                        <span className={`Tag_Estado ${recurso.stateClass}`}>{recurso.state}</span>
                      </div>
                    </div>
                    <div className="Programas_Recurso">
                      <strong>Programas</strong>
                      <ul className="Lista_Programas">
                        <li>ILLUSTRATOR CS6</li>
                        <li>PHOTOSHOP</li>
                        <li>VS CODE</li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MODAL DE AÑADIR NOTICIA --- */}
      {modalNoticia && (
        <div className="Overlay_Modal">
          <div className="Contenedor_Modal_Añadir">
            <div className="Header_Modal_Añadir">
              <h2 className="Titulo_Modal">Añadir</h2>
              <button className="Cerrar_X" onClick={() => setModalNoticia(false)}>&times;</button>
            </div>

            <div className="Cuerpo_Modal_Añadir">
              <div className="Campo_Form">
                <label className="Label_Form">Titulo</label>
                <input type="text" className="Input_Texto" />
              </div>

              <div className="Campo_Form">
                <label className="Label_Form">Descripción</label>
                <textarea className="Input_Area"></textarea>
              </div>

              <div className="Seccion_Upload">
                <label className="Label_Form">Documento / Imagen / Video</label>
                <input type="file" id="file-upload" className="Input_File_Oculto" />
                <label htmlFor="file-upload" className="Boton_Icono_Galeria">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/3342/3342137.png" 
                    alt="Galeria" 
                    className="Imagen_Icono_Modal"
                  />
                </label>
              </div>

              <div className="Footer_Publicar">
                <button className="Btn_Publicar" onClick={() => setModalNoticia(false)}>
                  <span className="Simbolo_Mas">+</span> Publicar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Servicios;