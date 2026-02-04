"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Image from "next/image";
import { projectImages } from "../../components/Assets/index";

function PortfolioResizer() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className=" min-w-full rounded-lg "
      title="Drag from center"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex  items-center justify-center ">
          <Image
            src={projectImages.Project1}
            alt="project1"
            className="object-cover sm:object-cover w-full sm:min-h-[500px] sm:max-h-[600px] min-h-[200px]"
          />
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center ">
              <Image
                src={projectImages.Project2}
                alt="project2"
                className="object-cover sm:object-cover object-top w-full sm:min-h-[500px] sm:max-h-[600px] min-h-[200px]"
              />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center ">
              <Image
                src={projectImages.Project6}
                alt="project3"
                className="object-cover sm:object-cover w-full sm:min-h-[500px] sm:max-h-[600px] min-h-[200px]"
              />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default PortfolioResizer;
