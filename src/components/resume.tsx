import React from "react";

const ResumeDownload: React.FC = () => {
  return (
    <div className="text-center flex flex-col items-center gap-4 mb-4">
      <h2 className="text-3xl text-violet-900 font-bold">Download My Resume</h2>
      <p className="text-gray-200">
        Click the button below to download a PDF version of my resume.
      </p>
      <a
        href="/resume.pdf" // path in the public folder
        download
        className="mt-4 px-6 py-3 bg-violet-900 text-black font-semibold rounded-lg hover:bg-violet-400 transition-colors duration-200"
      >
        Download Resume
      </a>
    </div>
  );
};

export default ResumeDownload;
