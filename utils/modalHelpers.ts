export const toggleModal = (setter: React.Dispatch<React.SetStateAction<boolean>>, value: boolean) => {
  setter(value);
};

export const handleOpenModal = (setter: React.Dispatch<React.SetStateAction<boolean>>) => () => {
  toggleModal(setter, true);
};

export const handleCloseModal = (setter: React.Dispatch<React.SetStateAction<boolean>>) => () => {
  toggleModal(setter, false);
};
