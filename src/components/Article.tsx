import React from 'react';
import Image from 'next/image';
import { formatDate } from '@/utils/date';



const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

interface ArticleProps {
  title: string;
  imageUrl: string;
  description: string;
  publishDate: Date;
  category: string;
  className?: string;
}

const Article = ({
  title,
  imageUrl,
  description,
  publishDate,
  category,
  className,
}: ArticleProps) => {
  // Truncate title if too long
  const truncatedTitle = title.length > 60 
    ? `${title.slice(0, 57)}...` 
    : title;

  return (
    <article className={cn("border-t border-t-[#d5d4ce] max-w-[600px] overflow-hidden cursor-pointer", className)}>
      <div className="p-6">
        <div className="flex items-center justify-between text-sm mb-4">
          <time className="text-[14px] font-medium">
            {formatDate(publishDate)}
          </time>
          <span className="px-3 py-1 bg-[#e6e5df] rounded-full text-[14px] font-medium">
            {category}
          </span>
        </div>
        <h2 className="text-2xl font-semibold mb-4 min-h-[4.5rem]">
          {truncatedTitle}
        </h2>
        <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <p className="text-[#646464] line-clamp-3 leading-[26px] text-[16px]">
          {description}
        </p>
      </div>
    </article>
  );
};

export default Article;