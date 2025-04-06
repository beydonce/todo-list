import { useEffect, useState } from "react";
import { getFolders } from "../services/folderServices";

interface Folder {
  id: number;
  title: string;
}

const Show = () => {
  const [folders, setFolders] = useState<Folder[]>([]);

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const data = await getFolders();
        setFolders(data);
      } catch (err) {
        console.error("Error fetching folders:", err);
      }
    };

    fetchFolders();
  }, []);

  return (
    <div>
      <h2>📂 All Folders</h2>
      <ul>
        {folders.length === 0 ? (
          <p>No folders yet.</p>
        ) : (
          folders.map((folder) => (
            <li key={folder.id}>{folder.title}</li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Show;
