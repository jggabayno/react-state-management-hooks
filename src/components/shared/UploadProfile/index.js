import React, { memo } from "react";
import "./index.scss";

export default memo(function UploadProfile({ displayImg, loadFile }) {
  return (
    <div className="image-upload">
      <label htmlFor="file">
        <img src={displayImg ? displayImg : ""} alt="upload profile" />
        <input
          type="file"
          accept="image/*"
          name="image"
          id="file"
          onChange={loadFile}
        />
      </label>
    </div>
  );
});
