import { ComponentProps, FC } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

import "./editor.css"

const initialConfig: ComponentProps<typeof LexicalComposer>["initialConfig"] = {
  namespace: "MyEditor",
  onError: (error) => console.error(error),
};

export const Editor: FC = () => {
  return (
    <div>
      <LexicalComposer initialConfig={initialConfig}>
        <RichTextPlugin
          contentEditable={<ContentEditable className="editor-content-editable" />}
          placeholder={<div>Hello Lexical</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
      </LexicalComposer>
    </div>
  );
};
