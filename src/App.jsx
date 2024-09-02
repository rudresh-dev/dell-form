
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Agenda from './components/Agenda';
import Sustainabilitypledge from './components/Sustainabilitypledge';
import PostPage from './components/PostPage';
import SelectPage from './components/SelectPage';
import WritePledge from './components/WritePledge';
import Test from './components/Text';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Agenda />} />
        <Route path="/item/:itemId" element={<ItemDetail />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path='/sustainabilitypledge' element={<Sustainabilitypledge />} />
        <Route path='/select' element={<SelectPage />} />
        <Route path='/post' element={<PostPage />} />
        <Route path="/write-pledge" element={<WritePledge />} />
        <Route path="/test" element={<Test />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
