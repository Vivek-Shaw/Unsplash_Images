import React, { useState } from "react";
import { saveAs } from "file-saver";
import { FaTimes } from "react-icons/fa";

const GalleryCard = ({ id, url, alt_description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleDownload = () => {
    saveAs(url, "image.jpg");
  };

  const handleDisplay = () => {
    handleToggle();
    //handleModal();
  };
//   const handleModal = () => {
//     return (
//       // <div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
//       //   <div className="modal-container">
//       //     <img src={url} className="image" />
//       //     <button className="close-modal-btn" onClick={closeModal}>
//       //       <FaTimes />
//       //     </button>
//       //   </div>
//       // </div>
//       <div>
//         {isModalOpen && (
//           <div className="modal-overlay show-modal">
//             <div className="modal-container">
//               <img src={url} className="image" />
//               <button className="close-modal-btn" onClick={handleToggle}>
//                 <FaTimes />
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   };

  return (
    <section>
      <img src={url} alt={alt_description} key={id} className="img" />
      <div className="options">
        <button className="btn" onClick={handleDisplay}>
          Display
        </button>
        {isModalOpen && (
          <div className="modal-overlay show-modal">
            <div className="modal-container">
              <img src={url} className="image" />
              <button className="close-modal-btn" onClick={handleToggle}>
                <FaTimes />
              </button>
            </div>
          </div>
        )}
        <button className="btn" onClick={handleDownload}>
          Download
        </button>
      </div>
    </section>
  );
};

export default GalleryCard;
