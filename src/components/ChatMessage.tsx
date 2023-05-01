import {
  FunctionComponent,
  DetailedHTMLProps,
  TableHTMLAttributes,
} from "react";
import ReactMarkdown from "react-markdown";
import { ReactMarkdownProps } from "react-markdown/lib/complex-types";
import remarkGfm from "remark-gfm";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}
interface Props {
  message: ChatMessage;
}

// This lets us style any markdown tables that are rendered
const CustomTable: FunctionComponent<
  Omit<
    DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>,
    "ref"
  > &
    ReactMarkdownProps
> = ({ children, ...props }) => {
  return (
    <div className="overflow-x-auto">
      <table {...props} className="w-full text-center border-collapse table-auto">
        {children}
      </table>
    </div>
  );
};

/**
 * This component renders a single chat message. It is rendered according to
 * whether it is a  message from the assistant or the user.
 */

export const ChatMessage: React.FC<React.PropsWithChildren<Props>> = ({
  message,
}) =>
  message.role === "user" ? (
    <div className="flex items-end justify-center">
      <div className="bg-gray-300 border-green-300 border-2 rounded-lg p-2 max-w-lg">
        <p className="text-base/loose">{message.content}</p>
      </div>
    </div>
  ) : (
    <div className="flex items-end justify-center">
      <div className="bg-gray-200 border-green-500 border-2 rounded-lg p-2 mr-20 w-full text-base/loose">
        <ReactMarkdown
          children={message.content}
          remarkPlugins={[remarkGfm]}
          components={{
            table: CustomTable,
          }}
        />
      </div>
    </div>
  );
