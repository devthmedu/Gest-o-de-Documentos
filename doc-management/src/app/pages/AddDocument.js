import Navbar from '@/app/components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddDocument = () => {
  const [documentName, setDocumentName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleDocumentNameChange = (e) => {
    setDocumentName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleAddDocument = () => {
    if (!documentName.trim() || !description.trim() || !image) {
      toast.error('Por favor, preencha todos os campos.');
      return;
    }

    const currentDate = new Date().toLocaleDateString('pt-BR');
    const existingDocuments =
      JSON.parse(localStorage.getItem('documents')) || [];
    const newDocument = {
      id: Date.now(), // Usando timestamp como ID único
      name: documentName,
      description: description,
      image: image,
      date: currentDate,
    };

    const updatedDocuments = [...existingDocuments, newDocument];
    localStorage.setItem('documents', JSON.stringify(updatedDocuments));
    setDocumentName('');
    setDescription('');
    setImage('');
    toast.success('Documento adicionado com sucesso.');
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5" style={{ maxWidth: '600px' }}>
        <h2 className="mb-4">Adicionar Novo Documento</h2>
        <div className="mb-3">
          <label htmlFor="documentName" className="form-label">
            Nome do Documento
          </label>
          <input
            type="text"
            className="form-control"
            id="documentName"
            value={documentName}
            onChange={handleDocumentNameChange}
            placeholder="Digite o nome do documento"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Descrição
          </label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Digite a descrição do documento"
            rows="3"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Selecionar Imagem
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            onChange={handleImageChange}
          />
        </div>
        <button className="btn btn-custom" onClick={handleAddDocument}>
          Adicionar Documento
        </button>
      </div>
      <ToastContainer />
    </>
  );
};

export default AddDocument;
