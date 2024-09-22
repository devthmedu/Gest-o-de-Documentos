'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';

const Documents = () => {
  const [documents, setDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const storedDocuments = JSON.parse(localStorage.getItem('documents')) || [];
    setDocuments(storedDocuments);
  }, []);

  const handleViewDocument = (id) => {
    const document = documents.find((doc) => doc.id === id);
    setSelectedDocument(document);
    setShowModal(true);
  };

  const handleDeleteDocument = (id) => {
    const updatedDocuments = documents.filter((document) => document.id !== id);
    setDocuments(updatedDocuments);
    localStorage.setItem('documents', JSON.stringify(updatedDocuments));
  };

  const filteredDocuments = documents.filter((document) =>
    document.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row mb-3">
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              placeholder="Pesquisar documentos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="col text-end">
            <button
              className="btn btn-success"
              onClick={() => alert('Adicione um novo documento!')}
            >
              Adicionar Documento
            </button>
          </div>
        </div>
        <h2>Lista de Documentos</h2>
        {filteredDocuments.length === 0 ? (
          <div className="alert alert-warning" role="alert">
            Nenhum documento encontrado.
          </div>
        ) : (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Data de Criação</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {filteredDocuments.map((document) => (
                <tr key={document.id}>
                  <td>{document.id}</td>
                  <td>{document.name}</td>
                  <td>{document.date}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleViewDocument(document.id)}
                    >
                      Ver
                    </button>
                    <button
                      className="btn btn-danger ms-2"
                      onClick={() => handleDeleteDocument(document.id)}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {showModal && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{
            display: 'block',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedDocument?.name}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {selectedDocument && selectedDocument.image && (
                  <img
                    src={selectedDocument.image}
                    alt="Documento"
                    className="img-fluid"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Documents;
