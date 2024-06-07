import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';

hljs.registerLanguage('javascript', javascript);


const JSCB = ({ text }) => {
    const myHtml = hljs.highlight(text, { language: "javascript" }).value;
    function copyCode() {
        navigator.clipboard.writeText(text);
        toast("Copied code to clipboard!");
    }

    return (
        <div>
            <ToastContainer position="top-center" pauseOnHover theme="dark" />
            <pre className='Codeblock'>
                <FontAwesomeIcon onClick={copyCode} className="CopyCode" icon={faCopy} />
                <code className="CodeblockText" dangerouslySetInnerHTML={{ __html: myHtml }} />
            </pre>
        </div>
    );
};

export default JSCB;
