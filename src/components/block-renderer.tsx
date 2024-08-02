"use client"
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import Image from 'next/image';
import Link from 'next/link';

const RichTextBlockRenderer = ({ content }: any) => {

  const handleListComponent = (elem:any) => {
    const ListItems = (items: any) => {
      return (
        items.length &&
          items.map((child: any) => {
            return child
          }
        )
      )
    }

    return (
      elem.format === 'ordered' ? (
        <ol className="list-decimal ml-4 text-gray-400">
          {ListItems(elem.children)}
        </ol>
      ) : (
        <ul className="list-disc ml-4 text-gray-400">
          {ListItems(elem.children)}
        </ul>
      )
    )
  }

  return (
    <BlocksRenderer
      content={content}
      blocks={{
        // You can use the default components to set class names...
        paragraph: ({ children }) => {
          return (<p className="text-gray-400 mb-5">{children}</p>)
        },
        // ...or point to a design system
        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              return <h1 className="text-cpink-800 font-bold text-2xl mt-8 mb-5">{children}</h1>
            case 2:
              return <h2 className="text-cpink-800 font-bold text-xl mt-8 mb-5">{children}</h2>
            case 3:
              return <h3 className="text-cpink-400 font-bold text-xl mt-8 mb-5">{children}</h3>
            case 4:
              return <h4 className="text-gray-400 font-bold text-xl mt-8 mb-5">{children}</h4>
            case 5:
              return <h5 className="text-gray-400 font-bold text-xl mt-8 mb-5">{children}</h5>
            case 6:
              return <h6 className="text-gray-400 font-bold text-base mt-8 mb-5">{children}</h6>
            default:
              return <p className="text-gray-400">{children}</p>
          }
        },
        // For links, you may want to use the component from your router or framework
        link: ({ children, url }) => <Link href={url} className="text-cpink-800">{children}</Link>,
        image: ({ image }) => {
          return (
            <Image
              src={image.url}
              width={image.width}
              height={image.height}
              alt={image.alternativeText || ""}
              className="my-5"
            />
          );
        },
        code: ({children}) => {
          return <pre className="p-5 my-5 rounded-r bg-cblue-900 text-gray-400">{children}</pre>
        },
        list: (props) => {
          return handleListComponent(props);
        },
        quote: ({children}) => {
          return <blockquote className="p-5 my-5 border-s-4 rounded-r border-cpink-900 bg-gray-800 text-gray-400">{children}</blockquote>
        }
      }}
      modifiers={{
        bold: ({ children }) => <strong>{children}</strong>,
        italic: ({ children }) => <span className="italic">{children}</span>,
      }}
    />
  );
};

export default RichTextBlockRenderer