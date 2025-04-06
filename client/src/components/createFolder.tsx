import { useState } from "react";
import { createFolder } from "../services/folderServices";

const Create = () => {
  const [folderName, setFolderName] = useState("");

  const handleSubmit = async () => {
    if (!folderName.trim()) {
      alert("Folder name cannot be empty!");
      return;
    }

    try {
      const data = await createFolder(folderName);
      console.log("✅ Created folder:", data.folder);
      setFolderName("");
    } catch (err) {
      console.error("Error creating folder:", err);
      alert("Error creating folder.");
    }
  };

  return (
    <div>
      <input
        value={folderName}
        onChange={(e) => setFolderName(e.target.value)}
        placeholder="Folder title"
      />
      <button onClick={handleSubmit}>Create</button>
    </div>
  );
};

export default Create;
