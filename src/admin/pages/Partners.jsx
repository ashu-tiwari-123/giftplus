import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Table from '../components/Table';
import { useAdmin } from '../../context/AdminContext';

const Partners = () => {
  const { partners, addPartner, loading } = useAdmin();

  const [name, setName] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !image) return;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('logo', image); // must match Multer field in backend

    await addPartner(formData);

    setName('');
    setImage(null);
  };

  const columns = [
    { key: 'name', title: 'Name' },
    {
      key: 'logo',
      title: 'Logo',
      render: (item) => (
        <img
          src={item.logo}
          alt={item.name}
          className="w-16 h-16 object-contain rounded"
        />
      ),
    },
    {
      key: 'createdAt',
      title: 'Created Date',
      render: (item) =>
        new Date(item.createdAt).toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }),
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      <Sidebar />
      <main className="flex-1 p-8">
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
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-[#C09F63] hover:bg-[#E5B769] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
            >
              {loading ? 'Adding...' : 'Add Partner'}
            </button>
          </form>
        </div>

        {/* Partners Table */}
        <Table data={partners} columns={columns} />
      </main>
    </div>
  );
};

export default Partners;
