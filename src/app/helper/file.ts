export const fileReader = (file: Blob) => {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;

    reader.readAsDataURL(file);
  });
};

export const convertToB64 = async (file: Blob) => {
  try {
    return await fileReader(file);
  } catch (error) {
    return error;
  }
};
