import { useState } from 'react';
import { Upload, message } from 'antd';
import ImgCrop from 'antd-img-crop';



const Perfil = () => {
  const [fileList, setFileList] = useState([]);
  const [name, setName] = useState('Gabriel Gomes');
  const [registration, setRegistration] = useState('1234567');
  const [cpf, setCpf] = useState('830.290.520-87');

  const handleUploadChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const handleUploadBeforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('Você pode apenas fazer upload de imagens JPG/PNG!');
      return false;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('A imagem deve ser menor que 2MB!');
      return false;
    }
    return true;
  };



  const handleUploadSuccess = (response) => {
    // Tratar a resposta do backend aqui
    console.log('Upload bem sucedido!', response);
  };

  return (
    <div>
      <ImgCrop>
        <Upload
          listType="picture-card"
          fileList={fileList}
          onChange={handleUploadChange}
          beforeUpload={handleUploadBeforeUpload}
          action="http://localhost:8000/api/upload" // Substituir pela url do backend
          method="POST"
          onSuccess={handleUploadSuccess}
        >
          {fileList.length === 0 ? 'Adicionar Foto' : null}
        </Upload>
      </ImgCrop>      
      <p>Nome: {name}</p>
      <p>Matrícula: {registration}</p>
      <p>CPF: {cpf}</p>
    </div>
  );
};

export default Perfil;
