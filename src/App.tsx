import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ContractTemplates from './pages/contracts/templates/TemplateList';
import GenerateContract from './pages/contracts/generate/GeneratePage';
import ContractHistory from './pages/contracts/history/HistoryPage';
import Dashboard from './pages/contracts/Dashboard';

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          ☰
        </button>
        <nav className={`flex-col md:flex-row md:flex ${open ? 'flex' : 'hidden md:flex'}`}>
          <Link className="p-2" to="/">Dashboard</Link>
          <Link className="p-2" to="/contracts/templates">Templates</Link>
          <Link className="p-2" to="/contracts/generate">Generate</Link>
          <Link className="p-2" to="/contracts/history">History</Link>
        </nav>
      </header>
      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/contracts/templates" element={<ContractTemplates />} />
          <Route path="/contracts/generate" element={<GenerateContract />} />
          <Route path="/contracts/history" element={<ContractHistory />} />
        </Routes>
      </main>
    </div>
  );
}
