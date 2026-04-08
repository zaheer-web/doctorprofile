import { useNavigate } from "react-router-dom";
import { Share2, Edit } from "lucide-react";

export default function DoctorHeader() {
  const navigate = useNavigate();

  const handleShare = () => {
    const profileUrl = `${window.location.origin}/see-profile`;
    navigator.clipboard.writeText(profileUrl);
    alert("Profile link copied!");
  };

  return (
    <div className="sticky top-0 z-40 bg-[#112f2c] border-b border-teal-500/20 px-4 md:px-6 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">

      {/* Left */}
      <h2 className="text-base sm:text-lg font-semibold text-teal-300">
        Doctor Dashboard
      </h2>

      {/* Right Buttons */}
      <div className="flex flex-wrap gap-2 sm:gap-3">

        {/* Edit Profile */}
        <button
          onClick={() => navigate("/doctor/profile")}
          className="flex items-center gap-2 bg-teal-600/20 border border-teal-500 text-teal-300 px-3 sm:px-4 py-2 rounded-lg hover:bg-teal-600/30 transition text-sm"
        >
          <Edit size={16} />
          <span className="hidden sm:inline">Edit Profile</span>
        </button>

        {/* Share Profile */}
        <button
          onClick={handleShare}
          className="flex items-center gap-2 bg-teal-500 text-black px-3 sm:px-4 py-2 rounded-lg hover:bg-teal-400 transition text-sm"
        >
          <Share2 size={16} />
          <span className="hidden sm:inline">Share Profile</span>
        </button>

      </div>
    </div>
  );
}