export const toggleModal = (setter, value) => {
    setter(value);
  };
  
  export const handleOpenModal = (setter) => () => {
    toggleModal(setter, true);
  };
  
  export const handleCloseModal = (setter) => () => {
    toggleModal(setter, false);
  };