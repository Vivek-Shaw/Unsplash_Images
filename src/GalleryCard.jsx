import React, { useState } from "react";
import { saveAs } from "file-saver";
import { FaTimes, FaDownload } from "react-icons/fa";

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
    <section className="overlay">
      <img
        src={url}
        alt={alt_description}
        key={id}
        className="img"
        onClick={handleDisplay}
      />
      <button className="btn" onClick={handleDownload}>
        <FaDownload />
      </button>
      <div className="options">
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
      </div>
    </section>
  );
};

export default GalleryCard;
