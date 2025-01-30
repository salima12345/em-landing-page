import React from 'react';
import { 
    Linkedin,
    Facebook,
    Twitter,
    Link as LinkIcon
} from 'lucide-react';
import { motion } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';

interface ShareProps {
  url: string;
}

const Share: React.FC<ShareProps> = ({ url }) => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    <motion.div 
      className="mt-12 py-6 border-y border-[#D5D4CE]"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut"
          }
        }
      }}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col xl:flex-row items-center justify-between gap-6 xl:gap-0">
        <h2 className="font-semibold text-lg text-[#222] w-full xl:w-auto text-center xl:text-left">
          Share
        </h2>
        <ul className="grid grid-cols-2 lg:flex w-full lg:w-auto gap-y-6 gap-x-4 lg:gap-[70px]">
          <MagneticButton>
            <motion.li 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 w-full xl:justify-start xl:gap-4"
              >
                <span className="text-base text-[#222]">LinkedIn</span>
                <div className="w-11 h-11 rounded-full bg-[#E6E5DF] flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-[#222]" />
                </div>
              </a>
            </motion.li>
          </MagneticButton>
          <MagneticButton>
            <motion.li 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 w-full xl:justify-start xl:gap-4"
              >
                <span className="text-base text-[#222]">Facebook</span>
                <div className="w-11 h-11 rounded-full bg-[#E6E5DF] flex items-center justify-center">
                  <Facebook className="w-5 h-5 text-[#222]" />
                </div>
              </a>
            </motion.li>
          </MagneticButton>
          <MagneticButton>
            <motion.li 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 w-full xl:justify-start xl:gap-4"
              >
                <span className="text-base text-[#222]">Twitter</span>
                <div className="w-11 h-11 rounded-full bg-[#E6E5DF] flex items-center justify-center">
                  <Twitter className="w-5 h-5 text-[#222]" />
                </div>
              </a>
            </motion.li>
          </MagneticButton>
          <MagneticButton>
            <motion.li 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              onClick={handleCopyLink}
            >
              <button className="flex items-center gap-6 w-full xl:justify-start xl:gap-4">
                <span className="text-base text-[#222]">Copy the link</span>
                <div className="w-11 h-11 rounded-full bg-[#E6E5DF] flex items-center justify-center">
                  <LinkIcon className="w-5 h-5 text-[#222]" />
                </div>
              </button>
            </motion.li>
          </MagneticButton>
        </ul>
      </div>
    </motion.div>
  );
};

export default Share;