import { UserOutlined, FileDoneOutlined, CloudUploadOutlined, MessageOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import Perfil from './Pages/Perfil';
import Cadastro from './Pages/Cadastro';
import EnviarDocumentos from './Pages/EnviarDocumentos';
import Logo from './assets/logo.png';
import { Routes, Route, Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    label: (
      <Link to="/gerenciador_rh/colaborador">
        Perfil
      </Link>
    ),
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: (
      <Link to="/gerenciador_rh/colaborador/cadastro">
        Cadastro
      </Link>
    ),
    key: '2',
    icon: <FileDoneOutlined />,
  },
  {
    label: (
      <Link to="/gerenciador_rh/colaborador/enviar_documentos">
        Cadastro
      </Link>
    ),
    key: '3',
    icon: <CloudUploadOutlined />,
  },
  {
    label: 'Mensagens',
    key: '4',
    icon: <MessageOutlined />,
  },

 
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 'fit-content',
            margin: 16,
            background: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={Logo} alt="" width='75px' />
          </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Routes>
              <Route path="/gerenciador_rh/colaborador" element={<Perfil />} />
              <Route path="/gerenciador_rh/colaborador/cadastro" element={<Cadastro />} />

            </Routes>
            
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;