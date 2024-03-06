import { parse, serialize } from "parse5";

const parseAndSerialize = (htmlString : string) => {
    const parsedHtml = parse(htmlString);
    return serialize(parsedHtml);
  }

export default parseAndSerialize;