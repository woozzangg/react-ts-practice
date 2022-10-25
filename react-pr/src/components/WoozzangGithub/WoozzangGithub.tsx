import React, { useState } from "react";
import "./WoozzangGithub.scss";


function WoozzangGithub() {
  return (
    <>
      <button
      className="woozzang-github-button"
      onClick={() => window.open('https://github.com/woozzangg', '_blank', 'noopener,noreferrer')}>
        Github!
      </button>
    </>
  );
}

export default WoozzangGithub;
