import React from "react";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotSidebar } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import Header from "./components/Header";
import CodeTutorial from "./components/CodeTutorial";

export default function Home() {
  return (
    <>
      <Header />
      <CopilotKit url="/api/copilotkit">
        <CopilotSidebar
          instructions="Help the user generate code. Ask the user if to generate its tutorial."
          defaultOpen={true}
          labels={{
            title: "Code & Tutorial Generator",
            initial: "Hi! 👋 I can help you generate code and its tutorial.",
          }}
        >
          <CodeTutorial />
        </CopilotSidebar>
      </CopilotKit>
    </>
  );
}
