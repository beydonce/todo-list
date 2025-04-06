const API = import.meta.env.VITE_API_URL;

export const createFolder = async (title: string) => {
    const res = await fetch(`${API}/folders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title })
    });
  
    if (!res.ok) {
      throw new Error("Failed to create folder");
    }
  
    return await res.json(); // return the created folder
};
  
  export const getFolders = async () => {
    const res = await fetch(`${API}/folders`);
    if (!res.ok) {
      throw new Error("Failed to get folders");
    }
  
    return await res.json();
  };
  