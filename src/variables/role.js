const getValueFromLocalStorage = () => {
    // Mengambil data dari local storage
    const myData = JSON.parse(localStorage.getItem('myData'));
  
    // Jika data tidak ada, set nilai ke 2
    const dataValue = myData ? myData.value : 2;
  
    return dataValue;
};

export default getValueFromLocalStorage;