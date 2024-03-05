import { parse, serialize } from "parse5";

const parseAndSerialize = (htmlString : any) => {
    const parsedHtml = parse(htmlString);
    return serialize(parsedHtml);
  }

export default parseAndSerialize;