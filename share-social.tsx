"use client";

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import { Share2, X } from "lucide-react";
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

import clsx from "clsx";
import { useState } from "react";

export const SharePopup = ({
  shareUrl,
  title,
}: {
  shareUrl: string;
  title: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1.5 border rounded text-sm hover:bg-gray-50 transition"
      >
        <Share2 className="w-4 h-4" />
        Share
      </button>

      <div
        className={clsx(
          "absolute top-full mt-2 right-0 bg-white shadow-lg border rounded p-4 z-50 w-60 transition-all duration-300 origin-top transform",
          {
            "opacity-100 scale-100 pointer-events-auto": open,
            "opacity-0 scale-95 pointer-events-none": !open,
          }
        )}
      >
        <div className="flex justify-between items-center mb-3">
          <span className="font-semibold text-sm">Share this article</span>
          <button onClick={() => setOpen(false)}>
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
          <FacebookShareButton url={shareUrl} hashtag={title}>
            <FaFacebookF className="w-5 h-5 hover:text-primary transition" />
          </FacebookShareButton>

          <TwitterShareButton url={shareUrl} title={title}>
            <FaTwitter className="w-5 h-5 hover:text-sky-500 transition" />
          </TwitterShareButton>

          <LinkedinShareButton url={shareUrl} title={title}>
            <FaLinkedinIn className="w-5 h-5 hover:text-blue-700 transition" />
          </LinkedinShareButton>

          <WhatsappShareButton url={shareUrl} title={title}>
            <FaWhatsapp className="w-5 h-5 hover:text-green-500 transition" />
          </WhatsappShareButton>

          <EmailShareButton url={shareUrl} subject={title} body={title}>
            <FaEnvelope className="w-5 h-5 hover:text-gray-700 transition" />
          </EmailShareButton>
        </div>
      </div>
    </div>
  );
};
