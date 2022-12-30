import { useRef, useState } from "react";
import { MdOutlineImage } from "react-icons/md";
type Props = {
  onPick?: (file: File) => void;
};

const ThumbnailPicker: React.FC<Props> = ({ onPick }) => {
  const [src, setSrc] = useState("");
  const refInput = useRef<HTMLInputElement>(null);

  return (
    <div
      className="w-full aspect-video bg-slate-200 flex flex-col items-center justify-center cursor-pointer"
      onClick={() => {
        refInput.current?.click();
      }}
    >
      {!!src && (
        <img className="w-full h-full object-cover" src={src} alt="preview" />
      )}
      {!src && (
        <>
          <MdOutlineImage className="text-9xl text-slate-400 mb-10" />
          <p className="font-sans text-slate-400 text-center">
            Upload a Thumbnail
          </p>
        </>
      )}
      <input
        ref={refInput}
        className="hidden"
        type="file"
        accept="image/png,image/jpeg"
      />
    </div>
  );
};

export default ThumbnailPicker;
