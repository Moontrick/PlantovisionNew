import { FormulaType, LineType } from "@/features/ResultEditControl/hooks/useResultEdit"

export type RasplastType = {
    lines: LineType[];
    onFormulaAdd: (item: FormulaType) => void
}