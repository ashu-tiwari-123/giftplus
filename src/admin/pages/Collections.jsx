import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Table from '../components/Table';
// import { useAdmin } from '../../context/AdminContext';

const Collections = () => {
  const { collections, addCollection, loading } = useAdmin();

  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !image) return;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', image); // 'image' must match multer field in backend

    await addCollection(formData);

    setTitle('');
    setImage(null);
  };

  const columns = [
    { key: 'title', title: 'Title' },
    {
      key: 'image',
      title: 'Image',
      render: (item) => (
        <img
          src={item.image}
          alt={item.title}
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
        <h1 className="text-2xl font-bold text-[#1F2937] mb-6">Collections</h1>

        {/* Add Collection Form */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#C09F63]/20 mb-8">
          <h2 className="text-xl font-semibold text-[#1F2937] mb-4">
            Add New Collection
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-[#1F2937] mb-1"
              >
                Collection Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#C09F63] focus:border-[#C09F63] outline-none transition"
                required
              />
            </div>
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-[#1F2937] mb-1"
              >
                Cover Image
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
              {loading ? 'Adding...' : 'Add Collection'}
            </button>
          </form>
        </div>

        {/* Collections Table */}
        <Table data={collections} columns={columns} />
      </main>
    </div>
  );
};

export default Collections;
