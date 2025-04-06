import hljs from "highlight.js";
import DOMPurify from "isomorphic-dompurify";

function CodeBlock({ props, type }: { props: string; type: string }) {
  // Sanitize our inputs for better security
  const sanitizedCode = DOMPurify.sanitize(props);
  // Do not sanitize code
  const unsanitizedCode = props;
  // Pass in either sanitized or unsanitized code
  const highlightedCode = hljs.highlight(unsanitizedCode, {
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
