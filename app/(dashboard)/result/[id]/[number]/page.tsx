import { redirect } from "next/navigation";
import { ResultEditProps } from "./types";
import ResultEdit from "@/features/ResultEditControl/components/ResultEdit/ResultEdit";


export default function ResultEditPage({ params: { number } }: ResultEditProps) {
  if(!number){
    return redirect("/result");
  }
  return (
      <ResultEdit  id={number}/>
    )
}
