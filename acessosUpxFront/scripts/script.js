function fetchData(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(new Error(`Failed to fetch data: ${xhr.statusText}`));
        }
      };
      xhr.onerror = () => reject(new Error('Failed to fetch data'));
      xhr.send();
    });
  }

async function main() {
    try {
      const acessos = await fetchData('http://localhost:61142/api/Acessos');
      $('#tabela').DataTable({
        data: acessos,
        columns: [
          { data: 'id' },
          { data: 'nfc' },
          { data: 'arduino' },
          { data: 'localizacao' },
          { data: 'data' },
        ]
      });
    } 
    catch (error) {
      console.error(error);
    }
  }

  $(document).ready(function() {
    main();
  });