import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Table from '../components/Table';

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([
    { id: 1, title: 'Corporate Gift Set', image: 'https://via.placeholder.com/150', createdAt: '2023-07-15' },
    { id: 2, title: 'Eco Stationery', image: 'https://via.placeholder.com/150', createdAt: '2023-08-02' },
    { id: 3, title: 'Executive Collection', image: 'https://via.placeholder.com/150', createdAt: '2023-08-20' },
  ]);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: galleryItems.length + 1,
      title,
      image: image ? URL.createObjectURL(image) : 'https://via.placeholder.com/150',
      createdAt: new Date().toISOString().split('T')[0],
    };
    setGalleryItems([...galleryItems, newItem]);
    setTitle('');
    setImage(null);
  };

  const handleDelete = (id) => {
    setGalleryItems(galleryItems.filter(item => item.id !== id));
  };

  const columns = [
    { key: 'title', title: 'Title' },
    { key: 'image', title: 'Image' },
    { key: 'createdAt', title: 'Created Date' },
  ];

  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      <Sidebar />
      <main className="flex-1 p-8 md:ml-64">
        <h1 className="text-2xl font-bold text-[#1F2937] mb-6">Gallery</h1>
        
        {/* Add Gallery Item Form */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#C09F63]/20 mb-8">
          <h2 className="text-xl font-semibold text-[#1F2937] mb-4">Add New Gallery Item</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-[#1F2937] mb-1">
                Title
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
              <label htmlFor="image" className="block text-sm font-medium text-[#1F2937] mb-1">
                Image
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
              Add Item
            </button>
          </form>
        </div>
        
        {/* Gallery Table */}
        <Table data={galleryItems} columns={columns} onDelete={handleDelete} />
      </main>
    </div>
  );
};

export default Gallery;