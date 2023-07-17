import { getFolder } from "../../store/folder";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import YourItemLayout from "../YourItemLayout";
import CreateFolder from "../CreateFolder.jsx";
import { useModal } from "../../context/Modal";

export default function FolderSingleView() {
  let folder = useSelector((state) => state.folders.singleFolder);
  const dispatch = useDispatch();
  const { setModalContent } = useModal();
  const { folderId } = useParams();

  useEffect(() => {
    dispatch(getFolder(folderId));
  }, [dispatch, folderId]);

  if (!folder) return null;
  console.log(folder);
  return (
    <div>
      <div>
        <div>{folder.name}</div>
        <div
          onClick={() => {
            setModalContent(<CreateFolder folder={folder} />);
          }}
        >
          Edit
        </div>
      </div>
      <div>
        {folder.Sets.length
          ? folder.Sets.map((item) => (
              <YourItemLayout set={true} item={item} key={item.id} />
            ))
          : "you dont have any Sets in this folder"}
      </div>
    </div>
  );
}
