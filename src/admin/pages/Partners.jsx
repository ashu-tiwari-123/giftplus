import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Table from '../components/Table';


const Partners = () => {
  const [partners, setPartners] = useState([
    { id: 1, name: 'Sheaffer', image: 'https://via.placeholder.com/150', createdAt: '2023-04-10' },
    { id: 2, name: 'Simton', image: 'https://via.placeholder.com/150', createdAt: '2023-05-22' },
    { id: 3, name: 'Borosil', image: 'https://via.placeholder.com/150', createdAt: '2023-06-05' },
  ]);
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPartner = {
      id: partners.length + 1,
      name,
      image: image ? URL.createObjectURL(image) : 'https://via.placeholder.com/150',
      createdAt: new Date().toISOString().split('T')[0],
    };
    setPartners([...partners, newPartner]);
    setName('');
    setImage(null);
  };

  const handleDelete = (id) => {
    setPartners(partners.filter(partner => partner.id !== id));
  };

  const columns = [
    { key: 'name', title: 'Name' },
    { key: 'image', title: 'Logo' },
    { key: 'createdAt', title: 'Created Date' },
  ];

  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      <Sidebar />
      <main className="flex-1 p-8 md:ml-64">
        <h1 className="text-2xl font-bold text-[#1F2937] mb-6">Partners</h1>
        
        {/* Add Partner Form */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#C09F63]/20 mb-8">
          <h2 className="text-xl font-semibold text-[#1F2937] mb-4">Add New Partner</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#1F2937] mb-1">
                Partner Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#C09F63] focus:border-[#C09F63] outline-none transition"
                required
              />
            </div>
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-[#1F2937] mb-1">
                Logo
              </label>
              <input
                type="file"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
                className="w-full px-4 py-2 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#C09F63] focus:border-[#C09F63] outline-none transition"
                accept="image/*"
              />
            </div>
            <button
              type="submit"
              className="bg-[#C09F63] hover:bg-[#E5B769] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Add Partner
            </button>
          </form>
        </div>
        
        {/* Partners Table */}
        <Table data={partners} columns={columns} onDelete={handleDelete} />
      </main>
    </div>
  );
};

export default Partners;