import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import {renderRichText} from "@storyblok/react";
import { render } from 'storyblok-rich-text-react-renderer';

const Footer = ({ blok }) => {
    // console.log(blok)
    // const
  return (
  <div className="footer-wrapper bg-gray-light">
    <div className="footer mt-0 py-8 px-12 flex justify-between">
        <div className="col-1 flex flex-col justify-between basis-1/3">
            <img className="h-max w-max" src={blok.Logo.filename} />
            <div>{render(blok.Address)}</div>
            <div className="flex">
            {blok.SocialLink.map((link, i) => (
                <a href={link.url.url} key={i} className="mr-2 p-2 bg-white basis-8 flex justify-center items-center rounded-full shadow">
                    <img src={link.icon.filename} className=""/>
                </a>
            ))}
            </div>
        </div>
        <div className="col-1 flex flex-col justify-between basis-1/3">
            <div>{render(blok.Contact)}</div>
        </div>
        <div className="col-1 flex flex-col justify-between basis-1/3">
            <div>{render(blok.About)}</div>
            <img src={blok.CharityImage.filename} className="h-max w-max"/>
        </div>
    </div>
    <p className="mx-12 mt-2 mb-0 pt-4 pb-6 border-t border-black">{blok.Copyright}</p>
    </div>
  );
};

export default Footer;