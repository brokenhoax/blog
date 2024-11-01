import hljs from "highlight.js";
import DOMPurify from "isomorphic-dompurify";

function CodeBlock({ props, type }: { props: string; type: string }) {
  // Sanitize our inputs for better security
  const sanitizedCode = DOMPurify.sanitize(props);
  // Will have to add other languages to the array for future support
  const highlightedCode = hljs.highlight(sanitizedCode, {
    language: type,
  }).value;

  return (
    <div className="codeWrapper">
      <pre className="hljs">
        <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
      </pre>
    </div>
  );
}

export default CodeBlock;
