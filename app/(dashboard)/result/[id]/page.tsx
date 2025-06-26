import { redirect } from "next/navigation";
import { ResultProps } from "./types";
import ResultEditView from "@/features/ResultEditControl/components/ResultEditView/ResultEditView";
import { RootWrapper } from "@/features/RootWrapper";
export default function ResultEditViewPage({ params: { id } }: ResultProps) {

  if(!id){
    return redirect("/result");
  }

  return (
    <RootWrapper>
      <ResultEditView  id={id || 0}/>
    </RootWrapper>
    )
}
