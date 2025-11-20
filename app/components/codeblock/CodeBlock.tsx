"use client";
import { useEffect, useState } from "react";
import hljs from "highlight.js";
import DOMPurify from "isomorphic-dompurify";

function CodeBlock({ props, type }: { props: string; type: string }) {
  const [isClient, setIsClient] = useState(false); // Track if we're on the client

  useEffect(() => {
    setIsClient(true); // Set to true after component mounts in the browser
  }, []);

  // Sanitize our inputs for better security
  const sanitizedCode = isClient ? DOMPurify.sanitize(props) : props;
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
