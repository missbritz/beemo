"use client"
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import Link from 'next/link';

const RichTextBlockRenderer = ({ content }: any) => {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        // You can use the default components to set class names...
        paragraph: ({ children }) => <p className="text-gray-400">{children}</p>,
        // ...or point to a design system
        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              return <h1 className="text-cpink-800 font-bold text-2xl mt-8 mb-2">{children}</h1>
            case 2:
              return <h2 className="text-cpink-800 font-bold text-xl mt-8 mb-2">{children}</h2>
            case 3:
              return <h3 className="text-cpink-400 font-bold text-xl mt-8 mb-2">{children}</h3>
            case 4:
              return <h4 className="text-gray-400 font-bold text-xl mt-8 mb-2">{children}</h4>
            case 5:
              return <h5 className="text-gray-400 font-bold text-xl mt-8 mb-2">{children}</h5>
            case 6:
              return <h6 className="text-gray-400 font-bold text-base mt-8 mb-2">{children}</h6>
            default:
              return <p className="text-gray-400">{children}</p>
          }
        },
        // For links, you may want to use the component from your router or framework
        link: ({ children, url }) => <Link href={url}>{children}</Link>,
      }}
      modifiers={{
        bold: ({ children }) => <strong>{children}</strong>,
        italic: ({ children }) => <span className="italic">{children}</span>,
      }}
    />
  );
};

export default RichTextBlockRenderer