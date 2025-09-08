import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import CollectionData from "../data/collectionData";

const PdfViewer = () => {
  const { file } = useParams(); // /pdf/:file
  const navigate = useNavigate();
  const filename = decodeURIComponent(file || "").toLowerCase();

  const allowed = new Set(
    CollectionData.map((p) => p.pdfPath.split("/").pop().toLowerCase())
  );
  
  if (!filename) {
    return (
      <div className="p-5 text-gray-700">
        No file specified.
      </div>
    );
  }
  
  if (!allowed.has(filename)) {
    return (
      <div className="p-5 text-gray-700">
        <div className="mb-4">File not found: {filename}</div>
        <button 
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          ← Back
        </button>
      </div>
    );
  }

  const pdfUrl = `/brochures/${filename}`;

  // simple mobile detection (only for UX; not security)
  const isMobile =
    typeof navigator !== "undefined" && /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

  return (
    <div className="h-screen flex flex-col bg-white mt-12">
      {/* header / controls */}
      <div className="p-3 flex gap-3 items-center border-b border-gray-200 bg-gray-50">
        <button 
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded transition-colors"
        >
          ← Back
        </button>
        <a 
          href={pdfUrl} 
          target="_blank" 
          rel="noreferrer" 
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Open in new tab / Download
        </a>
        <div className="ml-auto text-sm text-gray-600 truncate max-w-xs">
          {filename}
        </div>
      </div>

      {/* viewer area */}
      <div className="flex flex-1 min-h-0">
        {/* helpful hint for mobile users */}
        {isMobile && (
          <div className="w-72 p-3 border-r border-gray-200 bg-amber-50 text-sm">
            <strong className="text-amber-800">Note:</strong>
            <div className="mt-2 text-amber-700">
              Many mobile browsers open PDFs in an external viewer or may not render them inline.
            </div>
            <div className="mt-2 text-amber-700">
              Tap <a 
                href={pdfUrl} 
                target="_blank" 
                rel="noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Open in new tab
              </a> for best results.
            </div>
          </div>
        )}

        {/* fill remaining space with iframe */}
        <div className="flex-1 min-h-0">
          <iframe
            src={pdfUrl}
            title={filename}
            className="w-full h-full border-0 block"
          />
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;