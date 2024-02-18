import SyntaxHighlighter  from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"; 
import Copytoclipboard from "./Buttons/Copytoclipboard";

const CodeSnippet = ({ primaryLang, hookname }: any) => {
  return (
    <div className="w-[95%] lg:w-full bg-black rounded-xl">
      <div className=" p-2 flex justify-between items-center bg-[#2b2b2b] rounded-lg text-white">
        <p>▸ {hookname}</p>

        <div className=" flex justify-between items-center gap-1 text-sm ">
          <Copytoclipboard primaryLang={primaryLang} />
        </div>
      </div>

      <SyntaxHighlighter
        language={"javascript"}
        style={atomOneDark}
        customStyle={{ backgroundColor: "#000000" }}
        showLineNumbers
      >
        {primaryLang}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
