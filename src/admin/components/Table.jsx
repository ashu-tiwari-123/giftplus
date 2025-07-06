const Table = ({ data, columns, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-[#1F2937] text-white">
          <tr>
            {columns.map((column) => (
              <th key={column.key} className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                {column.title}
              </th>
            ))}
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id}>
              {columns.map((column) => (
                <td key={column.key} className="px-6 py-4 whitespace-nowrap">
                  {column.key === 'image' ? (
                    <img src={item[column.key]} alt={item.name || item.title} className="h-10 w-10 rounded-full object-cover mx-auto" />
                  ) : (
                    <div className="text-sm text-gray-900">{item[column.key]}</div>
                  )}
                </td>
              ))}
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  onClick={() => onDelete(item.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;